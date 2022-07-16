import Link from 'next/link'
import * as Styled from './Button.styled'
import { ButtonProps } from './Button.types'

function Button({
  text,
  isRouter,
  color = 'blue',
  className,
  href,
  type = 'button',
  handleButtonClick,
}: ButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isRouter ? (
        <Link href={href}>
          <Styled.Button className={className} $color={color} as="a">
            {text}
          </Styled.Button>
        </Link>
      ) : (
        <Styled.Button
          className={className}
          type={type}
          $color={color}
          onClick={handleButtonClick}
        >
          {text}
        </Styled.Button>
      )}
    </>
  )
}

export default Button
