import React, { forwardRef, useState } from 'react'
import * as Styled from './Input.styled'
import { InputProps } from './Input.types'
import InputGuide from './InputGuide/InputGuide'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      value: initialValue,
      onChange,
      name,
      validations,
      placeholder,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue ?? '')

    const isAllValid =
      !!validations?.length && validations.every(({ isValid }) => isValid)

    const isPasswordType = name === 'password' || name === 'confirm-password'

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      onChange?.(e)
    }

    return (
      <>
        <Styled.Label
          className={className}
          $isValid={validations ? isAllValid : undefined}
        >
          <Styled.IconWrapper $type="label">
            <Styled.LabelIcon aria-hidden $type={name} />
          </Styled.IconWrapper>
          <Styled.InputWrapper>
            <Styled.Input
              ref={ref}
              type={isPasswordType ? 'password' : undefined}
              onChange={handleInputChange}
              value={value}
              {...restProps}
            />
            {placeholder && (
              <Styled.OverlapLabel>{placeholder}</Styled.OverlapLabel>
            )}
          </Styled.InputWrapper>
          {isAllValid && (
            <Styled.IconWrapper $type="validation">
              <Styled.ValidIcon aria-hidden />
            </Styled.IconWrapper>
          )}
        </Styled.Label>
        {validations && <InputGuide validations={validations} />}
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
