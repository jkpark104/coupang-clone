import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputType =
  | 'email'
  | 'password'
  | 'confirm-password'
  | 'name'
  | 'phone';

export interface Validation {
  name: string;
  isValid: boolean;
  errorMessage: string;
  hasIcon?: boolean;
  isAlwaysDisplayed?: boolean;
}

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: InputType;
  placeholder?: string;
  validations?: Validation[];
}

export interface StyledLabelProps {
  $isValid?: boolean;
}

export interface StyledInputWrapperProps {
  $type: 'label' | 'validation';
}

export interface StyledIconProps {
  $type: InputType;
}
