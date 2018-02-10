import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    display: 'flex',
    minWidth: 350,
    minHeight: 500,
    flexDirection: 'column',
    margin: '10px'
  },
  media: {
    minHeight: 380,
    minWidth: 300
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  }
};

function ContentArray(props) {
  const list = props.list;
  const listItems = [];
  
  list.forEach((element,i) => {
    console.log(i);
    if (list.length > 1 && i < list.length) {
      listItems.push(element);
    };

    if (list.length > 1 && i < list.length - 1) {
      listItems.push(', ')
    };
  });

  return (<a>{listItems}</a>);
};

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: props.cardInfo.imagePath,
      name: props.cardInfo.name,
      ability: props.cardInfo.ability,
      tags: props.cardInfo.tags,
      faction: props.cardInfo.faction,
      type: props.cardInfo.type
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={this.state.imagePath}
            title={this.state.name}
          />
          <CardContent className={classes.content}>
            <Typography type="title" component="h2">
              {this.state.name}
            </Typography>
            <Typography type="subheading" component="p">
              <ContentArray list={this.state.tags}/>
            </Typography>
            <Typography type="subheading" component="p">
              {this.state.type}
            </Typography>
            <Typography type="subheading" component="p">
              {this.state.faction}
            </Typography>
            <Typography type="subheading" component="p">
              {this.state.ability}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
          </Button>
            <Button dense color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </div>
    );
  };
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledMediaCard = withStyles(styles)(MediaCard);
export { StyledMediaCard as MediaCard }