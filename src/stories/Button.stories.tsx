import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/Button'
import { ButtonStyle } from '../components/Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    // text: 'Button',
    text: 'Vestibulum volutpat acus a ultrices sagittis',
  },
  argTypes: {
    style: {
      options: [
        ButtonStyle.Primary,
        ButtonStyle.Secondary,
        ButtonStyle.Tertiary,
        ButtonStyle.Naked,
      ]
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    style: ButtonStyle.Primary
  }
}

export const Secondary: Story = {
  args: {
    style: ButtonStyle.Secondary
  }
}

export const Tertiary: Story = {
  args: {
    style: ButtonStyle.Tertiary
  }
}

export const Naked: Story = {
  args: {
    style: ButtonStyle.Naked
  }
}
