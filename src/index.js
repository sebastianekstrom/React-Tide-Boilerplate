import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
      margin: 0;

      *,
      :after,
      :before {
          box-sizing: border-box;
      }
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
