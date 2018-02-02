import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { withStyles } from 'material-ui/styles';

import { MenuAppBar, MediaCard } from './View/Common';

const styles = {
  root: {
    flexDirection: 'column',
    //minHeight: '100px'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

class App extends Component {
  render() {
    const { root, cardContainer } = this.props;

    return (
      <div className="App">
        <div className={ root }>
          <MenuAppBar/>
          <div className={ cardContainer } > 
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
