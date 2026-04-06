import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Progress } from "./progress"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={60} />
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={0} />
    </div>
  ),
}

export const Quarter: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={25} />
    </div>
  ),
}

export const Half: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={50} />
    </div>
  ),
}

export const ThreeQuarters: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={75} />
    </div>
  ),
}

export const Complete: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={100} />
    </div>
  ),
}

const AnimatedDemo = () => {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[400px]">
      <Progress value={progress} />
    </div>
  )
}

export const Animated: Story = {
  render: () => <AnimatedDemo />,
}
