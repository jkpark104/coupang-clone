import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  padding: 9px 12px 0;
  line-height: 18px;
  font-size: 12px;
`

export const Text = styled.div<{ $isValid: boolean }>`
  color: ${({ $isValid }) => ($isValid ? '#00891a' : '#e52528')};
`

const ERROR_ICON_URL =
  '//static.coupangcdn.com/image/badges/member/icon-cross-red.png'

const PASS_ICON_URL =
  '//static.coupangcdn.com/image/badges/member/icon-check-green.png'

export const Icon = styled.i<{ $isValid: boolean }>`
  width: 11px;
  height: 11px;
  margin-top: -3px;
  margin-right: 5px;
  background-image: ${({ $isValid }) =>
    $isValid ? `url(${PASS_ICON_URL})` : `url(${ERROR_ICON_URL})`};
  background-size: 11px 11px;
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
`
