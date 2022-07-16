// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Check from './Check'

export default {
  title: 'components/Check',
  component: Check,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Check>

const Template: ComponentStory<typeof Check> = function CheckComponent(args) {
  return (
    <div
      style={{
        width: 460,
      }}
    >
      <Check {...args} />
    </div>
  )
}

export const DefaultCheck = Template.bind({})
DefaultCheck.args = {
  text: 'Default Check',
}
