interface DefaultButtonProps {
  text: string
  color?: 'blue' | 'white'
  className?: string
  href?: string
  type?: 'button' | 'submit'
  handleButtonClick?: () => void
}

interface RoutingButtonProps extends DefaultButtonProps {
  isRouter: true
  href: string
}

interface BasicButtonProps extends DefaultButtonProps {
  isRouter?: false
  type?: 'button' | 'submit'
}

export type ButtonProps = RoutingButtonProps | BasicButtonProps

export interface StyledButtonsProps {
  $color: ButtonProps['color']
}
