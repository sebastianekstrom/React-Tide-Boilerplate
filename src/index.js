import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { Component as TideComponent } from 'tide'

import App from './screens/App/App'
import createTide from './tide'

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

const tide = createTide()
const app = (
  <TideComponent tide={tide}>
    {(props) => <App />}
  </TideComponent>
)

ReactDOM.render(app, document.getElementById('root'))
