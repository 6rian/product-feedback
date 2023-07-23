import type { Meta, StoryObj } from '@storybook/react'

import Pill from '../components/Pill'

const meta = {
  title: 'Atoms/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Pill',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pill>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
  args: {
    active: true,
  }
}
