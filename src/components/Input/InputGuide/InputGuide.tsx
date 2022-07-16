import * as Styled from './InputGuide.styled'
import { InputGuideProps } from './InputGuide.types'

function InputGuide({ validations }: InputGuideProps) {
  return (
    <>
      {validations.map(
        ({ isValid, errorMessage, name, hasIcon, isAlwaysDisplayed }) => (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {(isAlwaysDisplayed || !isValid) && (
              <Styled.Wrapper key={name}>
                <Styled.Text $isValid={isValid}>
                  {hasIcon && <Styled.Icon $isValid={isValid} />}
                  {errorMessage}
                </Styled.Text>
              </Styled.Wrapper>
            )}
          </>
        )
      )}
    </>
  )
}

export default InputGuide
