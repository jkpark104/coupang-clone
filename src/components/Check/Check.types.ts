export interface CheckProps {
  text: string
  hasDescription?: boolean
  isEmphasis?: boolean
  isChecked?: boolean
  handleCheckChange?: (isChecked: boolean) => void
}

export interface StyledLabelProps {
  $isEmphasis: boolean
}

export interface StyledCheckIconProps {
  $isChecked: boolean
}
