import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Plus } from "@grupoamerico/icons"
import { IconButton } from "./icon-button"

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof IconButton>

export const BasePrimary: Story = {
  args: {
    variant: "primary",
    size: "base",
    children: <Plus />,
  },
}

export const BaseTransparent: Story = {
  args: {
    variant: "transparent",
    size: "base",
    children: <Plus />,
  },
}

export const LargePrimary: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: <Plus />,
  },
}

export const LargeTransparent: Story = {
  args: {
    variant: "transparent",
    size: "large",
    children: <Plus />,
  },
}

export const XLargePrimary: Story = {
  args: {
    variant: "primary",
    size: "xlarge",
    children: <Plus />,
  },
}

export const XLargeTransparent: Story = {
  args: {
    variant: "transparent",
    size: "xlarge",
    children: <Plus />,
  },
}

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "base",
    children: <Plus />,
    disabled: true,
  },
}

export const IsLoading: Story = {
  args: {
    variant: "primary",
    size: "base",
    children: <Plus />,
    isLoading: true,
  },
}

export const TwoXSmallPrimary: Story = {
  args: {
    variant: "primary",
    size: "2xsmall",
    children: <Plus />,
  },
}

export const XSmallPrimary: Story = {
  args: {
    variant: "primary",
    size: "xsmall",
    children: <Plus />,
  },
}

export const SmallPrimary: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: <Plus />,
  },
}

export const SmallTransparent: Story = {
  args: {
    variant: "transparent",
    size: "small",
    children: <Plus />,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton variant="primary" size="2xsmall"><Plus /></IconButton>
      <IconButton variant="primary" size="xsmall"><Plus /></IconButton>
      <IconButton variant="primary" size="small"><Plus /></IconButton>
      <IconButton variant="primary" size="base"><Plus /></IconButton>
      <IconButton variant="primary" size="large"><Plus /></IconButton>
      <IconButton variant="primary" size="xlarge"><Plus /></IconButton>
    </div>
  ),
}
