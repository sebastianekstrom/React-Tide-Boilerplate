import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Base from './Base'

import {
  screenSizeM,
  screenSizeL,
  screenSizeXL,
  responsive,
  responsiveProp,
} from './utils/responsive'

import { spacingShorthand } from './utils/spacing'

const allowedFlexAligments = [
  'start',
  'center',
  'end',
  'stretch',
  'space-between',
  'space-around',
]

const flexAlignments = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  'space-between': 'space-between',
  'space-around': 'space-around',
}

const spacingRules = size => css`
  ${p => `
    ${responsiveProp(
      p.margin,
      size,
      value => `margin: ${spacingShorthand({ ...p.defaultMargin, ...value })}`
    )};
    ${responsiveProp(
      p.padding,
      size,
      value => `padding: ${spacingShorthand({ ...p.defaultPadding, ...value })}`
    )};
  `};
`

const orderRules = order => css`
  ${p => `
  ${responsiveProp(p.order, order, order => `order: ${order}`)};
`};
`

const directionRules = direction => css`
  ${p => `
  ${responsiveProp(
    p.direction,
    direction,
    direction => `flex-direction: ${direction}`
  )};
`};
`

const alignRules = size => css`
  ${p => `
  ${responsiveProp(
    p.align,
    size,
    align => `align-items: ${flexAlignments[align] || align}`
  )};
`};
`

const BoxBase = styled(Base)`
  display: ${p => (p.display ? p.display : 'flex')};
  align-items: ${p => flexAlignments[p.align] || 'stretch'};
  ${p => p.textAlign && `text-align: ${p.textAlign}`};
  ${p => p.position !== 'static' && `position: ${p.position}`};
  ${p => (p.row ? 'flex-direction: row' : 'flex-direction: column')};
  ${p => p.grow && 'flex-grow: 1'};
  ${p => p.shrink && 'flex-shrink: 1'};
  ${p => p.noShrink && 'flex-shrink: 0'};
  ${p => p.wrap && 'flex-wrap: wrap'};
  ${p =>
    p.justify && `justify-content: ${flexAlignments[p.justify] || p.justify}`};
  ${p =>
    p.center &&
    'align-items: center; align-content: center; justify-content: center'};
  ${p =>
    p.start &&
    'align-items: flex-start; align-content: flex-start; justify-content: flex-start'};
  ${p =>
    p.end &&
    'align-items: flex-end; align-content: flex-end; justify-content: flex-end'};
`

const Box = styled(BoxBase)`
  ${p => p.defaultMargin && `margin: ${spacingShorthand(p.defaultMargin)}`};
  ${p => p.defaultPadding && `padding: ${spacingShorthand(p.defaultPadding)}`};
  ${spacingRules('s')};
  ${orderRules('s')};
  ${directionRules('s')};
  ${alignRules('s')};
  ${screenSizeM`
    ${spacingRules('m')};
    ${orderRules('m')};
    ${directionRules('m')};
    ${alignRules('m')}
  `};
  ${screenSizeL`
    ${spacingRules('l')};
    ${orderRules('l')};
    ${directionRules('l')};
    ${alignRules('l')}
  `};
  ${screenSizeXL`
    ${spacingRules('xl')};
    ${orderRules('xl')};
    ${directionRules('xl')};
    ${alignRules('xl')}
  `};
`

Box.propTypes = {
  align: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf(allowedFlexAligments),
  ]),
  center: PropTypes.bool,
  defaultMargin: PropTypes.object,
  defaultPadding: PropTypes.object,
  direction: PropTypes.object,
  display: PropTypes.oneOf([
    'inline',
    'inline-block',
    'block',
    'none',
    'flex',
    'inline-flex',
  ]),
  end: PropTypes.bool,
  grow: PropTypes.bool,
  inline: PropTypes.bool,
  justify: PropTypes.oneOf(allowedFlexAligments),
  margin: PropTypes.object,
  noShrink: PropTypes.bool,
  order: PropTypes.object,
  padding: PropTypes.object,
  position: PropTypes.oneOf(['static', 'relative', 'fixed', 'absolute']),
  row: PropTypes.bool,
  shrink: PropTypes.bool,
  start: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
  wrap: PropTypes.bool,
}

Box.defaultProps = {
  position: 'static',
}

export default responsive(Box)
