import { IconButton } from '@/src'
import { Meta, StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

const meta = {
  title: 'Buttons/Icon Buttons',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof IconButton>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    icon: <Mail />
  }
}

export const Secondary: Story = {
  args: {
   icon: <Mail />,
    variant: "secondary"
  }
}

export const Delete: Story = {
  args: {
   icon: <Mail />,
    variant: "destructive"
  }
}

export const Outline: Story = {
  args: {
   icon: <Mail />,
    variant: "outline"
  }
}

export const Text: Story = {
  args: {
   icon: <Mail />,
    variant: "ghost"
  }
}

export const Disabled: Story = {
  args: {
   icon: <Mail />,
    disabled: true
  }
}
export default meta