import { capitalize, chunk, memoize } from 'lodash'
import * as uiConfig from '../config'

const color = (color, shade = '') => {
  const colorType = `color${capitalize(color)}${shade}`
  return uiConfig[colorType]
}

const hexToRgb = memoize(hexColor =>
  chunk(hexColor.slice(1).split(''), 2).map(hex => parseInt(hex.join(''), 16))
)

export default color
export const rgba = (colorName, shade, opacity = 1) =>
  `rgba(${hexToRgb(color(colorName, shade)).join(',')},${opacity})`
