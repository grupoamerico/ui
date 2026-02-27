import { VariantProps, cva } from "cva"
import { Slot } from "radix-ui"
import * as React from "react"

import { clx } from "@/utils/clx"

const badgeColorVariants = cva({
  variants: {
    color: {
      green:
        "bg-ui-tag-green-bg text-ui-tag-green-text [&_svg]:text-ui-tag-green-icon border-ui-tag-green-border",
      red: "bg-ui-tag-red-bg text-ui-tag-red-text [&_svg]:text-ui-tag-red-icon border-ui-tag-red-border",
      blue: "bg-ui-tag-blue-bg text-ui-tag-blue-text [&_svg]:text-ui-tag-blue-icon border-ui-tag-blue-border",
      orange:
        "bg-ui-tag-orange-bg text-ui-tag-orange-text [&_svg]:text-ui-tag-orange-icon border-ui-tag-orange-border",
      grey: "bg-ui-tag-neutral-bg text-ui-tag-neutral-text [&_svg]:text-ui-tag-neutral-icon border-ui-tag-neutral-border",
      purple:
        "bg-ui-tag-purple-bg text-ui-tag-purple-text [&_svg]:text-ui-tag-purple-icon border-ui-tag-purple-border",
    },
  },
  defaultVariants: {
    color: "grey",
  },
})

const badgeSizeVariants = cva({
  base: "inline-flex items-center gap-x-0.5 border box-border",
  variants: {
    size: {
      "2xsmall": "txt-compact-xsmall-plus h-5",
      xsmall: "txt-compact-xsmall-plus py-px h-6",
      small: "txt-compact-xsmall-plus py-[3px] h-7",
      base: "txt-compact-small-plus py-[5px] h-8",
      large: "txt-compact-medium-plus py-[7px] h-10",
    },
    rounded: {
      base: "rounded-md",
      full: "rounded-full",
    },
  },
  compoundVariants: [
    {
      size: "2xsmall",
      rounded: "full",
      className: "px-1.5",
    },
    {
      size: "2xsmall",
      rounded: "base",
      className: "px-1",
    },
    {
      size: "xsmall",
      rounded: "full",
      className: "px-2",
    },
    {
      size: "xsmall",
      rounded: "base",
      className: "px-1.5",
    },
    {
      size: "small",
      rounded: "full",
      className: "px-2.5",
    },
    {
      size: "small",
      rounded: "base",
      className: "px-2",
    },
    {
      size: "base",
      rounded: "full",
      className: "px-3",
    },
    {
      size: "base",
      rounded: "base",
      className: "px-2.5",
    },
    {
      size: "large",
      rounded: "full",
      className: "px-3.5",
    },
    {
      size: "large",
      rounded: "base",
      className: "px-3",
    },
  ],
  defaultVariants: {
    size: "base",
    rounded: "base",
  },
})

type ShadcnVariant = "default" | "info" | "destructive" | "outline" | "success" | "orange" | "blue" | "yellow" | "purple"

const variantToColor: Record<ShadcnVariant, VariantProps<typeof badgeColorVariants>["color"]> = {
  default: "grey",
  info: "blue",
  destructive: "red",
  outline: "grey",
  success: "green",
  orange: "orange",
  blue: "blue",
  yellow: "orange",
  purple: "purple",
}

interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeSizeVariants>,
    VariantProps<typeof badgeColorVariants> {
  asChild?: boolean
  /**
   * Shadcn-compatible variant prop. Maps to the `color` prop internally.
   * If both `variant` and `color` are provided, `color` takes precedence.
   */
  variant?: ShadcnVariant | (string & {})
}

/**
 * This component is based on the `div` element and supports all of its props
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      /**
       * The badge's size.
       */
      size = "base",
      /**
       * The style of the badge's border radius.
       */
      rounded = "base",
      /**
       * The badge's color.
       */
      color,
      /**
       * Shadcn-compatible variant prop. When used, applies custom CRM colors
       * from badgeVariants instead of the design system's color tokens.
       */
      variant,
      /**
       * Whether to remove the wrapper `span` element and use the
       * passed child element instead.
       */
      asChild = false,
      ...props
    }: BadgeProps,
    ref
  ) => {
    const Component = asChild ? Slot.Root : "span"

    // When variant is used, apply badgeVariants (custom colors) + size only
    if (variant && variant in variantToColor) {
      return (
        <Component
          ref={ref}
          className={clx(
            badgeVariants({ variant: variant as ShadcnVariant }),
            className
          )}
          {...props}
        />
      )
    }

    // Otherwise use the design system color tokens
    return (
      <Component
        ref={ref}
        className={clx(
          badgeColorVariants({ color: color ?? "grey" }),
          badgeSizeVariants({ size, rounded }),
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

/**
 * Shadcn-compatible badge variants using the `variant` prop.
 * These use custom colors for CRM compatibility.
 */
const badgeVariants = cva({
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  variants: {
    variant: {
      default: "border-transparent bg-gray-100 text-gray-700",
      info: "border-transparent bg-blue-50 text-blue-700",
      destructive: "border-transparent bg-red-100 text-red-700",
      outline: "border-border text-foreground bg-transparent",
      success: "border-transparent bg-green-100 text-green-700",
      orange: "border-transparent bg-orange-100 text-orange-700",
      blue: "border-transparent bg-blue-50 text-blue-700",
      yellow: "border-transparent bg-yellow-100 text-yellow-800",
      purple: "border-transparent bg-purple-100 text-purple-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export { Badge, badgeColorVariants, badgeVariants }
