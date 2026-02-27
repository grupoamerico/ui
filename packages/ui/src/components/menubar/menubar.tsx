"use client"

import { Check, ChevronRight, CircleSolid } from "@grupoamerico/icons"
import { Menubar as RadixMenubar } from "radix-ui"
import * as React from "react"

import { clx } from "@/utils/clx"

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof RadixMenubar.Menu>) {
  return <RadixMenubar.Menu {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof RadixMenubar.Group>) {
  return <RadixMenubar.Group {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof RadixMenubar.Portal>) {
  return <RadixMenubar.Portal {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof RadixMenubar.RadioGroup>) {
  return <RadixMenubar.RadioGroup {...props} />
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof RadixMenubar.Sub>) {
  return <RadixMenubar.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Root>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Root>
>(({ className, ...props }, ref) => (
  <RadixMenubar.Root
    ref={ref}
    className={clx(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className
    )}
    {...props}
  />
))
Menubar.displayName = "Menubar"

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Trigger>
>(({ className, ...props }, ref) => (
  <RadixMenubar.Trigger
    ref={ref}
    className={clx(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = "MenubarTrigger"

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <RadixMenubar.SubTrigger
    ref={ref}
    className={clx(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </RadixMenubar.SubTrigger>
))
MenubarSubTrigger.displayName = "MenubarSubTrigger"

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.SubContent>
>(({ className, ...props }, ref) => (
  <RadixMenubar.SubContent
    ref={ref}
    className={clx(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = "MenubarSubContent"

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Content>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <RadixMenubar.Portal>
      <RadixMenubar.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={clx(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
          className
        )}
        {...props}
      />
    </RadixMenubar.Portal>
  )
)
MenubarContent.displayName = "MenubarContent"

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Item>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RadixMenubar.Item
    ref={ref}
    className={clx(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = "MenubarItem"

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RadixMenubar.CheckboxItem
    ref={ref}
    className={clx(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixMenubar.ItemIndicator>
        <Check className="h-4 w-4" />
      </RadixMenubar.ItemIndicator>
    </span>
    {children}
  </RadixMenubar.CheckboxItem>
))
MenubarCheckboxItem.displayName = "MenubarCheckboxItem"

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadixMenubar.RadioItem
    ref={ref}
    className={clx(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixMenubar.ItemIndicator>
        <CircleSolid className="h-4 w-4 fill-current" />
      </RadixMenubar.ItemIndicator>
    </span>
    {children}
  </RadixMenubar.RadioItem>
))
MenubarRadioItem.displayName = "MenubarRadioItem"

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Label>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RadixMenubar.Label
    ref={ref}
    className={clx(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = "MenubarLabel"

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Separator>
>(({ className, ...props }, ref) => (
  <RadixMenubar.Separator
    ref={ref}
    className={clx("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = "MenubarSeparator"

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={clx(
        "ml-auto text-sm tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayName = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
