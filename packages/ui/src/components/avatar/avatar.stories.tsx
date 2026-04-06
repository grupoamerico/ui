import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Avatar } from "./avatar"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    fallback: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["rounded", "squared"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "large"],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/10656202?v=4",
    fallback: "J",
    size: "base",
  },
}

export const WithFallback: Story = {
  args: {
    fallback: "J",
    size: "large",
  },
}

export const TwoXSmall: Story = {
  args: {
    fallback: "J",
    size: "2xsmall",
  },
}

export const XSmall: Story = {
  args: {
    fallback: "J",
    size: "xsmall",
  },
}

export const Small: Story = {
  args: {
    fallback: "J",
    size: "small",
  },
}

export  const Base: Story = {
  args: {
    fallback: "J",
    size: "base",
  },
}

export const Large: Story = {
  args: {
    fallback: "J",
    size: "large",
  },
}

export const XLarge: Story = {
  args: {
    fallback: "J",
    size: "xlarge",
  },
}

export const SquaredBase: Story = {
  args: {
    fallback: "J",
    variant: "squared",
    size: "base",
  },
}

export const SquaredLarge: Story = {
  args: {
    fallback: "J",
    variant: "squared",
    size: "large",
  },
}

export const SquaredXLarge: Story = {
  args: {
    fallback: "J",
    variant: "squared",
    size: "xlarge",
  },
}

export const SquaredWithImage: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/10656202?v=4",
    fallback: "J",
    variant: "squared",
    size: "base",
  },
}

export const AllSizesRounded: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Avatar fallback="J" size="2xsmall" />
      <Avatar fallback="J" size="xsmall" />
      <Avatar fallback="J" size="small" />
      <Avatar fallback="J" size="base" />
      <Avatar fallback="J" size="large" />
      <Avatar fallback="J" size="xlarge" />
    </div>
  ),
}

export const AllSizesSquared: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Avatar fallback="J" variant="squared" size="2xsmall" />
      <Avatar fallback="J" variant="squared" size="xsmall" />
      <Avatar fallback="J" variant="squared" size="small" />
      <Avatar fallback="J" variant="squared" size="base" />
      <Avatar fallback="J" variant="squared" size="large" />
      <Avatar fallback="J" variant="squared" size="xlarge" />
    </div>
  ),
}
