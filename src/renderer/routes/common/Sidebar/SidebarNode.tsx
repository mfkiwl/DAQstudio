import {
  Leaf,
  RootNode,
  RootChild as SectionChild,
  ParentNode,
  isLeaf,
  isRoot,
  isLeafParentNode,
} from "@/renderer/utils/ManifestLoader";
import SidebarSection from "@/renderer/routes/common/Sidebar/SidebarSection";
import { LeafClickHandler } from "@/renderer/routes/common/Sidebar/Sidebar";
import { sendEventToMix } from "@/renderer/services/MixpanelServices";
import { NumpySvg, ScipySvg } from "@/renderer/assets/ArithmeticSVG";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { matchesQuery } from "@/renderer/utils/NodeSearch";

export const sidebarVariants = cva(undefined, {
  variants: {
    variant: {
      DATA: "text-accent2 bg-accent2/5 border-accent2",
      ETL: "text-accent1 bg-accent1/5 border-accent1",
      IO: "text-accent4 bg-accent4/5 border-accent4",
      LOGIC: "text-accent3 bg-accent3/5 border-accent3",
      AUTOGEN: "text-blue-500 bg-blue-500/5 border-blue-500",
    },
  },
});

export const categoryMap = {
  AI_ML: "DATA",
  DATA: "DATA",
  VISUALIZERS: "DATA",
  DSP: "ETL",
  MATH: "ETL",
  DEBUGGING: "ETL",
  HARDWARE: "IO",
  CONTROL_FLOW: "LOGIC",
  NUMPY: "AUTOGEN",
  SCIPY: "AUTOGEN",
  SKLEARN: "AUTOGEN",
};

const autogeneratedCategories = ["NUMPY", "SCIPY", "SKLEARN"];

const iconMap = {
  NUMPY: <NumpySvg className="h-8 w-8" />,
  SCIPY: <ScipySvg className="h-8 w-8" />,
};

type SidebarNodeProps = {
  depth: number;
  node: RootNode | ParentNode | Leaf | SectionChild;
  leafClickHandler: LeafClickHandler;
  query: string;
  matchedParent: boolean;
  expand: boolean;
  collapse: boolean;
  category?: string;
  autogeneratedCategory?: boolean;
  icon?: ReactNode;
};

const SidebarNode = ({
  depth,
  node,
  leafClickHandler,
  query,
  matchedParent = false,
  expand,
  collapse,
  category,
  autogeneratedCategory,
  icon,
}: SidebarNodeProps) => {
  if (isLeaf(node)) {
    return (
      <button
        key={node.key}
        className={twMerge(
          "mb-1.5 flex max-h-10 w-full items-center justify-between rounded-sm border px-2 py-2.5 font-mono",
          sidebarVariants({
            variant: categoryMap[category ?? "TRANSFORMERS"] ?? "ETL",
          }),
        )}
        onClick={() => {
          if (query !== "") {
            sendEventToMix("Node Searched", { nodeTitle: node.name ?? "" });
          }
          leafClickHandler(node);
        }}
      >
        {node.key ?? node.name}
        {icon}
      </button>
    );
  }

  if (isRoot(node)) {
    return (
      <div>
        {node.children.map((c) => {
          // Actually needs to be called as a function to achieve depth-first traversal,
          // otherwise React lazily evaluates it and doesn't recurse immediately, resulting in breadth-first traversal.
          let category: string | undefined;
          let autogeneratedCategory: boolean | undefined;
          let icon: React.ReactNode | undefined;
          if (c.key !== undefined) {
            category = c.key;
            autogeneratedCategory = autogeneratedCategories.includes(c.key);
            icon = iconMap[c.key];
          }
          return SidebarNode({
            node: c,
            depth: 0,
            leafClickHandler,
            query,
            matchedParent: matchesQuery(c.name, query),
            expand,
            collapse,
            category,
            autogeneratedCategory,
            icon,
          });
        })}
      </div>
    );
  }
  if (!isLeafParentNode(node) && node.children) {
    return SidebarSection({
      title: node.name ?? "",
      depth: depth + 1,
      expand: expand,
      collapse: collapse,
      category: category,
      autogeneratedCategory: autogeneratedCategory,
      icon: icon,
      children: node.children?.map((c) => {
        const matched = matchedParent || matchesQuery(c.name, query);

        return SidebarNode({
          node: c,
          depth: depth + 1,
          leafClickHandler,
          query,
          matchedParent: matched,
          expand,
          collapse,
          category,
          autogeneratedCategory,
          icon,
        });
      }),
    });
  }

  const leaves: Leaf[] = (node.children || []).filter((c): c is Leaf =>
    isLeaf(c),
  );

  const shouldFilter = query !== "" && !matchedParent;
  const searchMatches = shouldFilter
    ? leaves?.filter(
        (c) => matchesQuery(c.key, query) || matchesQuery(c.name, query),
      )
    : leaves;

  if (searchMatches?.length === 0 && node.children) {
    return null;
  }

  return (
    <div key={node.name}>
      <SidebarSection
        title={node.name ?? ""}
        depth={depth + 1}
        expand={expand}
        collapse={collapse}
        key={node.name}
        category={category}
        autogeneratedCategory={autogeneratedCategory}
        icon={icon}
      >
        {searchMatches?.map((command) => (
          <button
            key={command.key}
            className={twMerge(
              "mb-1.5 flex max-h-10 w-full items-center justify-between rounded-sm border px-2 py-2.5 font-mono",
              sidebarVariants({
                variant: categoryMap[category ?? "TRANSFORMERS"] ?? "ETL",
              }),
            )}
            onClick={() => {
              if (query !== "") {
                sendEventToMix("Node Searched", {
                  nodeTitle: command.name ?? "",
                });
              }
              leafClickHandler(command);
            }}
          >
            {command.key ?? command.name}
            {icon}
          </button>
        ))}
      </SidebarSection>
    </div>
  );
};

export default SidebarNode;
