import { useFlowChartGraph } from "@/renderer/hooks/useFlowChartGraph";
import { Node, Edge } from "reactflow";
import { ElementsData } from "@/renderer/types";
import { Ban, Play } from "lucide-react";
import { Button } from "@/renderer/components/ui/button";
import { projectAtom } from "@/renderer/hooks/useFlowChartState";
import { useSettings } from "@/renderer/hooks/useSettings";
import { useSocket } from "@/renderer/hooks/useSocket";
import {
  saveAndRunFlowChartInServer,
  cancelFlowChartRun,
} from "@/renderer/services/FlowChartServices";
import { sendProgramToMix } from "@/renderer/services/MixpanelServices";
import { IServerStatus } from "@/renderer/context/socket.context";
import WatchBtn from "./WatchBtn";
import { useAtom } from "jotai";
import useKeyboardShortcut from "@/renderer/hooks/useKeyboardShortcut";
import { useManifest } from "@/renderer/hooks/useManifest";
import _ from "lodash";
import { toast } from "sonner";
import { useFlowchartStore } from "@/renderer/stores/flowchart";

const FlowControlButtons = () => {
  const { socketId, serverStatus } = useSocket();

  const { settings } = useSettings("backend");

  const resetNodeParamChanged = useFlowchartStore(
    (state) => state.markNodeParamChanged,
  );

  const [project, setProject] = useAtom(projectAtom);
  const manifest = useManifest();

  const playBtnDisabled =
    serverStatus === IServerStatus.CONNECTING ||
    serverStatus === IServerStatus.OFFLINE;
  const cancelFC = () => {
    if (project.rfInstance && project.rfInstance.nodes.length > 0) {
      cancelFlowChartRun(project.rfInstance, socketId);
    } else {
      alert("There is no running job on server.");
    }
  };
  const onRun = async (nodes: Node<ElementsData>[], edges: Edge[]) => {
    if (project.rfInstance && nodes.length > 0) {
      if (_.some(nodes, (n) => n.data.invalid)) {
        toast.error(
          "Unknown blocks found, these must be removed before attempting to run the flow chart.",
        );
        return;
      }

      // Only update the react flow instance when required.
      const updatedRfInstance = {
        ...project.rfInstance,
        nodes,
        edges,
      };

      setProject({
        ...project,
        rfInstance: updatedRfInstance,
      });

      sendProgramToMix(project.rfInstance.nodes, true, false);
      // setProgramResults([]);
      saveAndRunFlowChartInServer({
        rfInstance: updatedRfInstance,
        jobId: socketId,
        settings: settings.filter((setting) => setting.group === "backend"),
      });
      resetNodeParamChanged();
    } else {
      alert(
        "There is no program to send to server. \n Please add at least one node first.",
      );
    }
  };
  const { nodes, edges } = useFlowChartGraph();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onRun(nodes, edges);
  };

  useKeyboardShortcut("ctrl", "p", () => onRun(nodes, edges));
  useKeyboardShortcut("meta", "p", () => onRun(nodes, edges));

  return (
    <>
      {playBtnDisabled || serverStatus === IServerStatus.STANDBY ? (
        <Button
          data-cy="btn-play"
          data-testid="btn-play"
          variant="dotted"
          id="btn-play"
          onClick={handleClick}
          disabled={nodes.length === 0 || !manifest}
          className="w-28 gap-2"
        >
          <Play size={18} />
          Play
        </Button>
      ) : (
        <Button
          data-testid="btn-cancel"
          data-cy="btn-cancel"
          id="btn-cancel"
          onClick={cancelFC}
          className="w-28 gap-2"
          variant="dotted"
        >
          <Ban size={18} />
          Cancel
        </Button>
      )}

      <div className="px-0.5" />
      <WatchBtn playFC={onRun} cancelFC={cancelFC} />
      <div className="px-0.5" />
    </>
  );
};

export default FlowControlButtons;
