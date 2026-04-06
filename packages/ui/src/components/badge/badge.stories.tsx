import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Badge } from "./badge"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  render: ({ children, ...args }) => (
    <Badge {...args}>{children || "Badge"}</Badge>
  ),
}

export default meta

type Story = StoryObj<typeof Badge>

export const Grey: Story = {
  args: {
    color: "grey",
  },
}

export const Green: Story = {
  args: {
    color: "green",
  },
}

export const Red: Story = {
  args: {
    color: "red",
  },
}

export const Blue: Story = {
  args: {
    color: "blue",
  },
}

export const Orange: Story = {
  args: {
    color: "orange",
  },
}

export const Purple: Story = {
  args: {
    color: "purple",
  },
}

export const Default: Story = {
  args: {
    rounded: "base",
  },
}

export const Rounded: Story = {
  args: {
    rounded: "full",
  },
}

export const XXSmall: Story = {
  args: {
    size: "2xsmall",
  },
}

export const XSmall: Story = {
  args: {
    size: "xsmall",
  },
}

export const Small: Story = {
  args: {
    size: "small",
  },
}

export const Base: Story = {
  args: {
    size: "base",
  },
}

export const Large: Story = {
  args: {
    size: "large",
  },
}

// Shadcn-compatible variant stories
export const VariantDefault: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
}

export const VariantInfo: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
}

export const VariantDestructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
}

export const VariantOutline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const VariantSuccess: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
}

export const VariantOrange: Story = {
  args: {
    variant: "orange",
    children: "Orange",
  },
}

export const VariantBlue: Story = {
  args: {
    variant: "blue",
    children: "Blue",
  },
}

export const VariantYellow: Story = {
  args: {
    variant: "yellow",
    children: "Yellow",
  },
}

export const VariantPurple: Story = {
  args: {
    variant: "purple",
    children: "Purple",
  },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="grey">Grey</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="purple">Purple</Badge>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="orange">Orange</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="yellow">Yellow</Badge>
      <Badge variant="purple">Purple</Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="2xsmall">2XS</Badge>
      <Badge size="xsmall">XS</Badge>
      <Badge size="small">Small</Badge>
      <Badge size="base">Base</Badge>
      <Badge size="large">Large</Badge>
    </div>
  ),
}
