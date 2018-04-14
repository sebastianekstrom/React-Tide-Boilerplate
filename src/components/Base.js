import React from 'react'
import PropTypes from 'prop-types'
import { pick } from 'lodash'
import styled from 'styled-components'

const universalPassedProps = [
  'onClick',
  'onChange',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onTouchStart',
  'onTouchMove',
  'onTouchEnd',
]

const platformPassedProps = ['tabIndex', 'className', 'role', 'style']

const defaultPassedProps = [...universalPassedProps, ...platformPassedProps]

class Base extends React.PureComponent {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    componentRef: PropTypes.func,
    passedProps: PropTypes.array,
  }

  render() {
    const {
      component: Component,
      componentRef,
      children,
      passedProps,
      ...rest
    } = this.props
    const props = pick(rest, [...defaultPassedProps, ...passedProps])
    if (typeof children === 'function') {
      return children({ componentRef, ...props })
    }
    return (
      <Component ref={componentRef} {...props}>
        {children}
      </Component>
    )
  }
}

Base.defaultProps = {
  component: 'div',
  passedProps: [],
}

const StyledBase = styled(Base)`
  box-sizing: border-box;
`

export const unstyled = Base
export default StyledBase
