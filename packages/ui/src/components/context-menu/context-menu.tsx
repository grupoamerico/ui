"use client"

import { Check, ChevronRight, CircleSolid } from "@grupoamerico/icons"
import { ContextMenu as RadixContextMenu } from "radix-ui"
import * as React from "react"

import { clx } from "@/utils/clx"

const ContextMenu = RadixContextMenu.Root

const ContextMenuTrigger = RadixContextMenu.Trigger

const ContextMenuGroup = RadixContextMenu.Group

const ContextMenuPortal = RadixContextMenu.Portal

const ContextMenuSub = RadixContextMenu.Sub

const ContextMenuRadioGroup = RadixContextMenu.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <RadixContextMenu.SubTrigger
    ref={ref}
    className={clx(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </RadixContextMenu.SubTrigger>
))
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger"

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.SubContent>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.SubContent
    ref={ref}
    className={clx(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = "ContextMenuSubContent"

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Content>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.Content
      ref={ref}
      className={clx(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </RadixContextMenu.Portal>
))
ContextMenuContent.displayName = "ContextMenuContent"

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RadixContextMenu.Item
    ref={ref}
    className={clx(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = "ContextMenuItem"

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RadixContextMenu.CheckboxItem
    ref={ref}
    className={clx(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixContextMenu.ItemIndicator>
        <Check className="h-4 w-4" />
      </RadixContextMenu.ItemIndicator>
    </span>
    {children}
  </RadixContextMenu.CheckboxItem>
))
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadixContextMenu.RadioItem
    ref={ref}
    className={clx(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixContextMenu.ItemIndicator>
        <CircleSolid className="h-2 w-2 fill-current" />
      </RadixContextMenu.ItemIndicator>
    </span>
    {children}
  </RadixContextMenu.RadioItem>
))
ContextMenuRadioItem.displayName = "ContextMenuRadioItem"

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RadixContextMenu.Label
    ref={ref}
    className={clx(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = "ContextMenuLabel"

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Separator>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Separator
    ref={ref}
    className={clx("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = "ContextMenuSeparator"

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={clx(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
