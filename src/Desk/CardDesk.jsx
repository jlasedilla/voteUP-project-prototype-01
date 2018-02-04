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
    margin: '5px',
  }
};

class CardDesk extends Component {
  render() {
    const { classes } = this.props;

    console.log( cards[0].imagePath );

    return (
        <div className={ classes.root }>
          <MenuAppBar/>
          <div className={ classes.cardContainer } >
            <MediaCard imagePath={cards[0].imagePath} />
            <MediaCard imagePath={cards[1].imagePath} />
          </div>
        </div>
    );
  }
}

const styledCardDesk = withStyles(styles)(CardDesk);
export { styledCardDesk as CardDesk };
