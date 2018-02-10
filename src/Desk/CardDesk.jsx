import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import { MenuAppBar, MediaCard } from 'Common/Components';
import cards from 'Resources/Files/cardpool.json';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '10px',
    flexWrap: 'wrap'
  }
};

class CardDesk extends Component {
  render() {
    const { classes } = this.props;
    
    return (
        <div className={ classes.root }>
          <MenuAppBar/>
          <div className={ classes.cardContainer } >
            <MediaCard cardInfo={cards[0]} />
            <MediaCard cardInfo={cards[1]} />
            <MediaCard cardInfo={cards[2]} />
            <MediaCard cardInfo={cards[3]} />
          </div>
        </div>
    );
  }
}

const styledCardDesk = withStyles(styles)(CardDesk);
export { styledCardDesk as CardDesk };
