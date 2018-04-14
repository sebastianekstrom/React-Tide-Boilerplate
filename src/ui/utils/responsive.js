import { find } from 'lodash'

import { css } from 'styled-components'
import { breakpointM, breakpointL, breakpointXL } from '../config'

export const screenSizeM = (...args) => {
  return css`
    @media (min-width: ${breakpointM}px) {
      ${css(...args)};
    }
  `
}

export const screenSizeL = (...args) => css`
  @media (min-width: ${breakpointL}px) {
    ${css(...args)};
  }
`

export const screenSizeXL = (...args) => css`
  @media (min-width: ${breakpointXL}px) {
    ${css(...args)};
  }
`

const hasResponsiveValues = prop =>
  prop && !!find(['s', 'm', 'l', 'xl'], size => prop[size])

export const responsiveProp = (prop, size, css) => {
  let value
  if (hasResponsiveValues(prop)) {
    value = prop[size]
  } else if (size === 's') {
    value = prop
  }
  return value !== undefined ? css(value) : ''
}

export const responsive = ComponentClass => ComponentClass
