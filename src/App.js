import React, { Component } from 'react'
import Box from './ui/Box'
import Text from './ui/Text'

class App extends Component {
  render() {
    return (
      <Box padding={{ all: 'm' }} align="center">
        <Text size="l">{'React Tide Boilerplate'}</Text>
      </Box>
    )
  }
}

export default App
