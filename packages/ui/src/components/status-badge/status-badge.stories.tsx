import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { StatusBadge } from "./status-badge"

const meta: Meta<typeof StatusBadge> = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof StatusBadge>

export const Grey: Story = {
  args: {
    children: "Draft",
    color: "grey",
  },
}

export const Green: Story = {
  args: {
    children: "Published",
    color: "green",
  },
}

export const Red: Story = {
  args: {
    children: "Expired",
    color: "red",
  },
}

export const Blue: Story = {
  args: {
    children: "Pending",
    color: "blue",
  },
}

export const Orange: Story = {
  args: {
    children: "Requires Attention",
    color: "orange",
  },
}

export const Purple: Story = {
  args: {
    children: "In Review",
    color: "purple",
  },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge color="grey">Draft</StatusBadge>
      <StatusBadge color="green">Published</StatusBadge>
      <StatusBadge color="red">Expired</StatusBadge>
      <StatusBadge color="blue">Pending</StatusBadge>
      <StatusBadge color="orange">Attention</StatusBadge>
      <StatusBadge color="purple">In Review</StatusBadge>
    </div>
  ),
}
