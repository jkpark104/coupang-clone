import { Global, css } from '@emotion/react'

function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          font-family: apple sd gothic neo, malgun gothic, nanumbarungothic,
            nanumgothic, dotum, sans-serif;
        }

        body {
          margin: 0;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
        }

        a {
          box-sizing: border-box;
        }

        a,
        button {
          cursor: pointer;
          font-size: initial;
          text-align: initial;
          outline: 0;
        }
      `}
    />
  )
}

export default GlobalStyle
