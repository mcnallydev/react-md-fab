import React, { Component } from 'react';
import Fab from '../dist';

class App extends Component {

  onClick(event) {
    console.log(event);
    console.log('click');
  }

  render() {
    return (
      <Fab
        onClick={ () => this.onClick(this) }
      />
    );
  }
}

export default App;
