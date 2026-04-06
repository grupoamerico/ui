import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { PlusMini } from "@grupoamerico/icons"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Action",
  },
}

export const Secondary: Story = {
  args: {
    children: "Action",
    variant: "secondary",
  },
}

export const Transparent: Story = {
  args: {
    children: "Action",
    variant: "transparent",
  },
}

export const Danger: Story = {
  args: {
    children: "Action",
    variant: "danger",
  },
}

export const Disabled: Story = {
  args: {
    children: "Action",
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    children: ["Action", <PlusMini key={1} />],
  },
}

export const Loading: Story = {
  args: {
    children: "Action",
    isLoading: true,
  },
}

export const Large: Story = {
  args: {
    children: "Action",
    size: "large",
  },
}

export const XLarge: Story = {
  args: {
    children: "Action",
    size: "xlarge",
  },
}

export const Outline: Story = {
  args: {
    children: "Action",
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    children: "Action",
    variant: "ghost",
  },
}

export const Link: Story = {
  args: {
    children: "Action",
    variant: "link",
  },
}

export const Small: Story = {
  args: {
    children: "Action",
    size: "small",
  },
}

export const IconSize: Story = {
  render: () => (
    <Button size="icon" variant="secondary">
      <PlusMini />
    </Button>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="transparent">Transparent</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="small">Small</Button>
      <Button size="base">Base</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">XLarge</Button>
      <Button size="icon"><PlusMini /></Button>
    </div>
  ),
}
