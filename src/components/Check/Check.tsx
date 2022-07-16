import { useEffect, useState } from 'react'
import * as Styled from './Check.styled'
import { CheckProps } from './Check.types'

function Checkbox({
  text,
  hasDescription = false,
  isEmphasis = false,
  isChecked: initialIsChecked,
  handleCheckChange,
}: CheckProps) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (initialIsChecked === undefined) return

    setIsChecked(initialIsChecked)
  }, [initialIsChecked])

  const onChange = () => {
    setIsChecked((prevIsChecked) => {
      const nextIsChecked = !prevIsChecked

      handleCheckChange?.(nextIsChecked)
      return nextIsChecked
    })
  }

  return (
    <Styled.CheckWrapper>
      <Styled.Label $isEmphasis={isEmphasis}>
        <Styled.CheckIcon $isChecked={isChecked} aria-hidden />
        <Styled.Input onChange={onChange} type="checkbox" />
        {text}
      </Styled.Label>
      {hasDescription && (
        <Styled.RightArrowButton
          aria-label="약관 대화상자 열기"
          aria-haspopup="dialog"
          type="button"
        />
      )}
    </Styled.CheckWrapper>
  )
}

export default Checkbox
