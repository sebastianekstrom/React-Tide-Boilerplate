import React, { Component } from 'react'
import { wrap } from 'tide'

import Box from '../../ui/Box/Box'
import Text from '../../ui/Text/Text'

class App extends Component {
  componentDidMount = () => {
    this.props.tide.actions.app.load()
  }

  render() {
    return (
      <Box padding={{ all: 'm' }} align="center">
        <Text size="l">{'React Tide Boilerplate'}</Text>
      </Box>
    )
  }
}

export default wrap(App, {
  foobar: 'foobar'
})
