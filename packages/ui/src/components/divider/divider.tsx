import { clx } from "@/utils/clx"
import * as React from "react"

interface DividerProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  orientation?: "horizontal" | "vertical"
  variant?: "dashed" | "solid"
  decorative?: boolean
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "solid",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        aria-orientation={orientation}
        role="separator"
        className={clx(
          "border-ui-border-base",
          {
            "w-full border-t":
              orientation === "horizontal" && variant === "solid",
            "h-full border-l":
              orientation === "vertical" && variant === "solid",
            "bg-transparent": variant === "dashed",
            "h-px w-full bg-[linear-gradient(90deg,var(--border-strong)_1px,transparent_1px)] bg-[length:4px_1px]":
              variant === "dashed" && orientation === "horizontal",
            "h-full w-px bg-[linear-gradient(0deg,var(--border-strong)_1px,transparent_1px)] bg-[length:1px_4px]":
              variant === "dashed" && orientation === "vertical",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

/**
 * Separator alias for shadcn compatibility.
 */
const Separator = Divider

export { Divider, Separator }
