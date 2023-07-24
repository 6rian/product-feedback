import type { Meta, StoryObj } from '@storybook/react'

import FeedbackCard from '../components/FeedbackCard'

const meta = {
  title: 'Molecules/FeedbackCard',
  component: FeedbackCard,
  args: {
    title: 'Add a dark theme option',
    details: 'It would help people with light sensitivities and who prefer dark mode.',
    category: 'Feature',
    upvotesCount: 99,
    commentsCount: 4,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeedbackCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

