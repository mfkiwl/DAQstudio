import { useMantineTheme } from "@mantine/core";
import PlotlyComponent from "@src/feature/common/PlotlyComponent";
import usePlotLayout from "@src/feature/common/usePlotLayout";
import { Handle, Position } from "reactflow";
import { ResultNodeData } from "../types/ResultsType";

interface CustomResultNodeProp {
  data: ResultNodeData;
}

const CustomResultNode: React.FC<CustomResultNodeProp> = ({ data }) => {
  const theme = useMantineTheme();
  const styledLayout = usePlotLayout();
  const accentColor = theme.colors.accent2[0];

  return (
    <div style={{ position: "relative" }} data-testid="result-node">
      <>
        <Handle
          type="target"
          position={Position.Left}
          style={{ borderRadius: 0 }}
        />
        <Handle
          type="source"
          position={Position.Right}
          style={{ borderRadius: 0 }}
        />
      </>

      {!data?.resultData ? (
        <p> NO Result </p>
      ) : (
        <PlotlyComponent
          id={data.id}
          data={data.resultData.default_fig.data.map((d) => ({
            ...d,
            line: {
              ...d.line,
              color: accentColor,
            },
            marker: {
              ...d.marker,
              color: accentColor,
            },
          }))}
          layout={Object.assign({}, { title: data.label }, styledLayout)}
          useResizeHandler
          style={{
            height: 190,
            width: 210,
          }}
        />
      )}
    </div>
  );
};

export default CustomResultNode;
