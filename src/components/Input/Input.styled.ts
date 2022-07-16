import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { sprite } from '../../styles/utils'
import {
  StyledIconProps,
  StyledLabelProps,
  StyledInputWrapperProps,
} from './Input.types'

const commonIconStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
`

const iconStyles = {
  email: `
    margin: -8px 0 0 -10px;
    background-position: -1px -1px;
    padding-left: 19px;
    height: 16px;
  `,
  password: `
    margin: -10px 0 0 -10px;
    background-position: -22px -1px;
    padding-left: 19px;
    height: 20px;
  `,
  'confirm-password': `
    margin: -10px 0 0 -10px;
    background-position: -43px -1px;
    padding-left: 19px;
    height: 20px;
  `,
  name: `
    margin: -10px 0 0 -10px;
    background-position: -1px -22px;
    padding-left: 19px;
    height: 20px;
  `,
  phone: `
    margin: -10px 0 0 -8px;
    background-position: -22px -22px;
    padding-left: 15px;
    height: 20px;
  `,
  valid: `
    margin: -8px 0 0 -10px;
    background-position: -64px -1px;
    padding-left: 20px;
    height: 15px;
  `,
}

export const Label = styled.label<StyledLabelProps>`
  display: flex;
  width: 100%;
  border: 1px solid #ccc;

  border-bottom: ${({ $isValid }) => $isValid === false && '2px solid #e7223d'};

  &:focus-within {
    border-bottom: ${({ $isValid }) => $isValid && '2px solid #346aff'};
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  input:focus + span {
    opacity: 0;
  }

  [value=''] + span {
    opacity: 1;
  }
`

export const OverlapLabel = styled.span`
  padding: 16px 0 12px;
  border: 0 none;
  background: none transparent;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-indent: 12px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.25s ease;
  cursor: text;
  color: #aaa;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Input = styled.input`
  width: 100%;
  padding: 16px 0 12px;
  border: 0 none;
  background: none transparent;
  font-size: 14px;
  line-height: 20px;
  color: #111;
  font-weight: 700;
  text-indent: 12px;

  &:focus,
  &:focus-visible {
    outline: 0;
  }
`

export const IconWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  min-width: 44px;
  border-right: ${({ $type }) => $type === 'label' && '1px solid #ccc'};
  background-color: ${({ $type }) => $type === 'label' && '#fafafa'};
`

export const LabelIcon = styled.i<StyledIconProps>`
  ${sprite};
  ${commonIconStyles};

  ${({ $type }) =>
    css`
      ${iconStyles[$type]}
    `};
`

export const ValidIcon = styled.i`
  ${sprite};
  ${commonIconStyles};

  ${css`
    ${iconStyles.valid}
  `}
`
