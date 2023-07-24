import type { Meta, StoryObj } from '@storybook/react'

import Upvote from '../components/Upvote'

const meta = {
  title: 'Atoms/Upvote',
  component: Upvote,
  parameters: {
    layout: 'centered',
  },
  args: {
    count: 99,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Upvote>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
  args: {
    active: true,
  }
}
