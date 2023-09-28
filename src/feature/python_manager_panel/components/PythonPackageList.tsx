import { useFlowChartState } from "@src/hooks/useFlowChartState";
import { useEffect, useState } from "react";
import axios from "axios";
import { EnvironmentDetail } from "../types/environment";

const PythonPackageList = () => {
  const { currentPythonEnv } = useFlowChartState();
  const [packageList, setPackageList] = useState<string[]>([]);

  const fetchPackageList = async () => {
    console.log(currentPythonEnv);
    if (currentPythonEnv) {
      const data = await axios.get(
        `http://localhost:5392/pymgr/env/${btoa(currentPythonEnv)}`,
      );

      const parsedData = await EnvironmentDetail.safeParseAsync(data.data);

      if (parsedData.success) {
        setPackageList(parsedData.data.dependencies);
      }
    }
  };

  useEffect(() => {
    fetchPackageList();
  }, [currentPythonEnv]);

  return (
    <div>
      <div className="text-lg font-semibold">Package List</div>
      {currentPythonEnv ? (
        <div>
          {packageList.map((pkg) => {
            return <div>{pkg}</div>;
          })}
        </div>
      ) : (
        <div>Please select a Python environment </div>
      )}
    </div>
  );
};

export default PythonPackageList;
