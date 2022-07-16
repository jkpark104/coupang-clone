import { useState } from 'react'
import {
  Controller,
  SubmitHandler,
  UseControllerProps,
  useForm,
} from 'react-hook-form'
import Button from '../Button/Button'
// import Input from "../Input/Input";
import * as Styled from './Form.styled'
import { FormField, FormProps } from './Form.types'

const ERROR_MESSAGES = {
  email: '이메일을 입력하세요.',
  password: {
    violatingStandardPassword: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
    duplicatePassword: '3개 이상 연속되거나 동일한 문자/숫자 제외',
    includingEmailPassword: '아이디(이메일)제외',
  },
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

function Form({ type }: FormProps) {
  const [validations, setValidations] = useState(null)

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormField>({ mode: 'onChange' })

  const fields: (keyof FormField)[] =
    type === 'join'
      ? ['email', 'password', 'confirm-password', 'phone', 'name']
      : ['email', 'password']

  const onSubmit: SubmitHandler<FormField> = (data) => {
    console.log(data)
  }

  // console.log(errors);

  const validationRules: Record<string, UseControllerProps['rules']> = {
    email: {
      required: '이메일을 입력하세요.',
      pattern: /^[\w.-]{1,64}@[\w.-]{1,125}.\w{2,4}$/,
    },
    password: {
      required: true,
      validate(value: string) {
        const isDuplicate = /(\w)\1\1/.test(value)

        // setPasswordError((prevError) => ({
        //   ...prevError,
        //   isDuplicate,
        // }))

        const { email } = getValues()

        const isIncludingEmail = new RegExp(value, 'i').test(email)

        // setPasswordError((prevError) => ({
        //   ...prevError,
        //   isIncludingEmail,
        // }))

        const getStandardError = () => {
          const num = value.search(/[0-9]/g)
          const eng = value.search(/[a-z]/gi)
          const spe = value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi)

          if (value.length < 8 || value.length > 20) return true

          if (/\s/.test(value)) return true

          if (
            (num < 0 && eng < 0) ||
            (eng < 0 && spe < 0) ||
            (spe < 0 && num < 0)
          ) {
            return true
          }

          return false
        }

        const isViolatingStandard = getStandardError()

        // setPasswordError((prevError) => ({
        //   ...prevError,
        //   isViolatingStandard,
        // }))

        return !isDuplicate && !isIncludingEmail && !isViolatingStandard
      },
    },
    'confirm-password': {
      required: '확인을 위해 새 비밀번호를 다시 입력해주세요.',
      validate(value: string) {
        const { password } = getValues()

        return password === value
      },
    },
    name: {
      required: '이름을 정확히 입력하세요.',
    },
    phone: {
      required: '휴대폰 번호를 정확하게 입력하세요.',
      pattern: /^\d{3}-\d{3,4}-\d{4}$/,
    },
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Controller
          key={field}
          name={field}
          control={control}
          defaultValue=""
          rules={{ ...validationRules[field] }}
          render={({ field: inputField }) => (
            <Styled.Input
              placeholder={OVERLAP_LABEL_TEXT[field]}
              validations={validations ?? undefined}
              {...inputField}
            />
          )}
        />
      ))}
      <Button type="submit" text="전송" />
    </form>
  )
}

export default Form
