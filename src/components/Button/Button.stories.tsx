// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    handleButtonClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = function ButtonComponent(args) {
  return (
    <div
      style={{
        width: 460,
      }}
    >
      <Button {...args} />
    </div>
  )
}

export const LoginButton = Template.bind({})
LoginButton.args = {
  text: '로그인',
  color: 'blue',
}

export const JoinButton = Template.bind({})
JoinButton.args = {
  isRouter: true,
  text: '회원가입',
  color: 'white',
  href: '',
}

export const AgreeAndJoinButton = Template.bind({})
AgreeAndJoinButton.args = {
  text: '동의하고 가입하기',
  color: 'blue',
}
