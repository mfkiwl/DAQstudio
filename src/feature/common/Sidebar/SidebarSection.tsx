import { useEffect, useState } from "react";
import { Children } from "react";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { categoryMap, sidebarVariants } from "./SidebarNode";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@src/components/ui/collapsible";

const bgOverrideVariants = cva(undefined, {
  variants: {
    variant: {
      DATA: "bg-accent2/10",
      ETL: "bg-accent1/10",
      IO: "bg-accent4/10",
      LOGIC: "bg-accent3/10",
      AUTOGEN: "bg-blue-500/10",
    },
  },
});

type SidebarSectionProps = {
  title: string;
  depth: number;
  children: React.ReactNode;
  expand: boolean;
  collapse: boolean;
  icon?: React.ReactNode;
  category?: string;
  autogeneratedCategory?: boolean;
};

const SidebarSection = ({
  depth,
  title,
  children,
  expand,
  collapse,
  category,
  icon,
  autogeneratedCategory,
}: SidebarSectionProps) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, [expand]);

  useEffect(() => {
    setOpened(false);
  }, [collapse]);

  if (Children.toArray(children).every((child) => child === null)) {
    return null;
  }

  const variant = categoryMap[category ?? "TRANSFORMERS"] ?? "ETL";

  return (
    <Collapsible open={opened} onOpenChange={setOpened}>
      <CollapsibleTrigger
        className={twMerge(
          "mb-2 flex max-h-10 w-full items-center rounded-sm border px-2 py-2.5",
          sidebarVariants({ variant }),
          bgOverrideVariants({ variant }),
        )}
        data-cy="sidebar-section-btn"
      >
        {icon}
        <div
          className={twMerge(
            "ml-2 mr-auto font-medium tracking-wide",
            autogeneratedCategory ? "font-mono" : "",
          )}
        >
          {title}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="CollapsibleContent">
        {/* padding according to the depth of the section */}
        <div style={{ paddingLeft: `${(depth + 1) * 5}px` }}>{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};
export default SidebarSection;
