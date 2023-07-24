import type { Meta, StoryObj } from '@storybook/react'

import CommentsCount from '../components/CommentsCount'

const meta = {
  title: 'Atoms/CommentsCount',
  component: CommentsCount,
  parameters: {
    layout: 'centered',
  },
  args: {
    count: 3,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommentsCount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

