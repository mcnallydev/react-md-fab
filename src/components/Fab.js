import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FabTag, Text } from './style';

class Fab extends Component {
  /**
   * React Component render
   */
  render() {
    return (
      <FabTag onClick={this.props.onClick}>
        <Text>+</Text>
      </FabTag>
    );
  }
}

/**
 * React Component propTypes
 */
Fab.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Fab;
