import React, { Component } from "react";
import PropTypes from "prop-types";
import { wrap } from "tide";

import Box from "../../components/Box/Box";
import Text from "../../components/Text/Text";

class App extends Component {
  static propTypes = {
    tide: PropTypes.object
  };

  componentDidMount = () => {
    this.props.tide.actions.app.load();
  };

  render() {
    return (
      <Box padding={{ all: "m" }} align="center">
        <Text size="l">{"React Tide Boilerplate"}</Text>
      </Box>
    );
  }
}

export default wrap(App, {
  foobar: "foobar"
});
