import { cn, getVariantClass } from "@/renderer/lib/utils";
import { textWrap } from "@/renderer/utils/TextWrap";

type BlockLabelProps = {
  label: string;
  variant?: "accent1" | "accent2" | "accent3" | "accent6" | "accent5";
  labelPosition?: "left" | "right" | "center";
};

export const BlockLabel = ({
  label,
  variant = "accent2",
  labelPosition,
}: BlockLabelProps) => {
  return (
    <div className="flex w-full items-center justify-center p-1">
      <h2
        style={{ width: textWrap(208, 24, label) }}
        // FIXME: `text-${variant}` doesn't work for accent6
        // To test replace `${getVariantClass(variant).text}` with `text-${variant}`
        // And add an AI block to flowchart
        className={cn(
          `${getVariantClass(variant).text} m-0 text-center font-sans text-3xl font-semibold tracking-wider`,
          {
            [`text-${labelPosition}`]: labelPosition,
          },
        )}
      >
        {label}
      </h2>
    </div>
  );
};
