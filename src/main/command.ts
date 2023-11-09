import * as childProcess from "child_process";
import type { BrowserWindow } from "electron";
import { Logger } from "./logging";
import log from "electron-log/main";

type RunCmdProps = {
  command: string;
  matchText?: string;
  broadcast?: {
    win: BrowserWindow;
    cb: (win: BrowserWindow, data: string) => void;
  };
  serviceName: string;
};

export const runCmd = ({
  command,
  broadcast,
  serviceName,
  matchText,
}: RunCmdProps): Promise<{
  script: childProcess.ChildProcess;
}> => {
  return new Promise((resolve, reject) => {
    const logger = new Logger(serviceName);
    const script = childProcess.exec(command);
    if (global.runningProcesses && Array.isArray(global.runningProcesses)) {
      global.runningProcesses.push(script);
    }
    let lastOutput: string;
    script.stdout?.on("data", function (data) {
      const dataStr = `[${serviceName}] - ${data?.toString()}`;
      logger.log(dataStr);
      lastOutput = dataStr;
      if (broadcast) {
        broadcast.cb(broadcast.win, dataStr);
      }
      if (matchText && dataStr.includes(matchText)) {
        resolve({ script });
      }
    });
    script.stderr?.on("data", function (data) {
      const dataStr = `[${serviceName}] - ${data?.toString()}`;
      logger.log(dataStr);
      lastOutput = dataStr;
      if (broadcast) {
        broadcast.cb(broadcast.win, dataStr);
      }
      if (matchText && dataStr.includes(matchText)) {
        resolve({ script });
      }
    });
    script.addListener("exit", (code) => {
      logger.log(
        `exited child process [${serviceName}] with code: `,
        code?.toString() ?? "",
      );
      if (
        global.runningProcesses?.length &&
        global.runningProcesses.find(
          (s: childProcess.ChildProcess) => s.pid === script.pid,
        )
      ) {
        global.runningProcesses = global.runningProcesses.filter(
          (s: childProcess.ChildProcess) => s.pid !== script.pid,
        );
      }
      reject({ code, lastOutput });
    });
  });
};

export type CommandOptions = {
  win32: string;
  darwin: string;
  linux: string;
};

export class Command {
  constructor(private readonly commands: CommandOptions) {}

  getCommand(): string {
    const platform: NodeJS.Platform = process.platform;
    switch (platform) {
      case "darwin":
        return this.commands.darwin;
      case "win32":
        return this.commands.win32;
      case "linux":
        return this.commands.linux;
      default:
        log.error(`Unsupported platform: ${platform}`);
        throw new Error(`Unsupported platform: ${platform}`);
    }
  }
}
