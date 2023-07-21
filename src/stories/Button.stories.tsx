import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Button',
  },
  argTypes: {
    style: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'naked',
      ]
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    style: 'primary',
  }
}

export const Secondary: Story = {
  args: {
    style: 'secondary',
  }
}

export const Tertiary: Story = {
  args: {
    style: 'tertiary',
  }
}

export const Naked: Story = {
  args: {
    style: 'naked',
  }
}

export const Back: Story = {
  args: {
    back: true,
  }
}

