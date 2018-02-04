import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { withStyles } from 'material-ui/styles';

import { CardDesk } from 'Desk';

class App extends Component {
  render() {
    const { root, cardContainer } = this.props;

    return (
        <CardDesk />
    );
  }
}

export default App;
