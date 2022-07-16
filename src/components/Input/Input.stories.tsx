// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from './Input'

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = function InputComponent(args) {
  return (
    <div
      style={{
        width: 460,
      }}
    >
      <Input {...args} />
    </div>
  )
}

const ERROR_MESSAGES = {
  email: '이메일을 입력하세요.',
  violatingStandardPassword: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
  duplicatePassword: '3개 이상 연속되거나 동일한 문자/숫자 제외',
  includingEmailPassword: '아이디(이메일)제외',
  'confirm-password': '확인을 위해 새 비밀번호를 다시 입력해주세요.',
  name: '이름을 정확히 입력하세요.',
  phone: '휴대폰 번호를 정확하게 입력하세요.',
}

const OVERLAP_LABEL_TEXT = {
  email: '아이디(이메일)',
  password: '비밀번호',
  'confirm-password': '비밀번호 확인',
  name: '이름',
  phone: '휴대폰 번호',
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  name: 'email',
  placeholder: OVERLAP_LABEL_TEXT.email,
  validations: [
    { name: 'email', isValid: true, errorMessage: ERROR_MESSAGES.email },
  ],
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  name: 'password',
  placeholder: OVERLAP_LABEL_TEXT.password,
  validations: [
    {
      name: 'violatingStandardPassword',
      isValid: false,
      hasIcon: true,
      isAlwaysDisplayed: true,
      errorMessage: ERROR_MESSAGES.violatingStandardPassword,
    },
    {
      name: 'duplicatePassword',
      isValid: true,
      hasIcon: true,
      isAlwaysDisplayed: true,
      errorMessage: ERROR_MESSAGES.duplicatePassword,
    },
    {
      name: 'includingEmailPassword',
      isValid: true,
      hasIcon: true,
      isAlwaysDisplayed: true,
      errorMessage: ERROR_MESSAGES.includingEmailPassword,
    },
  ],
}

export const ConfirmPasswordInput = Template.bind({})
ConfirmPasswordInput.args = {
  name: 'confirm-password',
  placeholder: OVERLAP_LABEL_TEXT['confirm-password'],
  validations: [
    {
      name: 'confirm-password',
      isValid: true,
      errorMessage: ERROR_MESSAGES['confirm-password'],
    },
  ],
}

export const PhoneInput = Template.bind({})
PhoneInput.args = {
  name: 'phone',
  placeholder: OVERLAP_LABEL_TEXT.phone,
  validations: [
    { name: 'phone', isValid: false, errorMessage: ERROR_MESSAGES.phone },
  ],
}

export const NameInput = Template.bind({})
NameInput.args = {
  name: 'name',
  placeholder: OVERLAP_LABEL_TEXT.name,
  validations: [
    { name: 'name', isValid: false, errorMessage: ERROR_MESSAGES.name },
  ],
}
