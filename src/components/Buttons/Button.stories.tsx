import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/src'


const meta = {
  title: 'Buttons/Buttons',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: "secondary"
  }
}

export const Delete: Story = {
  args: {
    label: 'Button',
    variant: "destructive"
  }
}

export const Outline: Story = {
  args: {
    label: 'Button',
    variant: "outline"
  }
}

export const Text: Story = {
  args: {
    label: 'Button',
    variant: "ghost"
  }
}

export const Link: Story = {
  args: {
    label: 'Button',
    variant: "link"
  }
}

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true
  }
}

export default meta
