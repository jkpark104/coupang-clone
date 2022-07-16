import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { StyledButtonsProps } from './Button.types'

const commonButtonsStyles = css`
  width: 100%;
  border: 0;
  border-radius: 2px;
  transition: background-color 0.75s ease;
  font-weight: 700;
  text-align: center;
  padding: 16px 17px;
  font-size: 17px;
  line-height: 20px;
  display: block;

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`

const blueButtonStyles = css`
  background-color: #0074e9;
  box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
  color: #fff;

  &:active {
    box-shadow: inset 0 2px 0 rgb(0 0 0 / 38%);
  }
`

const whiteButtonStyles = css`
  background-color: #fff;
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 15%);
  color: #0073e9;
  border: 1px solid #ccc;

  &:active {
    box-shadow: inset 0 1px 0 rgb(0 0 0 / 15%);
  }
`

export const Button = styled.button<StyledButtonsProps>`
  ${commonButtonsStyles};

  ${({ $color }) => ($color === 'blue' ? blueButtonStyles : whiteButtonStyles)};
`
