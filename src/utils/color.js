import { capitalize, chunk, memoize } from 'lodash'
import * as uiConfig from './config'

const color = (color, shade = '') =>
  uiConfig[`color${capitalize(color)}${shade}`]

const hexToRgb = memoize(hexColor =>
  chunk(hexColor.slice(1).split(''), 2).map(hex => parseInt(hex.join(''), 16))
)

export default color
export const rgba = (colorName, shade, opacity = 1) =>
  `rgba(${hexToRgb(color(colorName, shade)).join(',')},${opacity})`
