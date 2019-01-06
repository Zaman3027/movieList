import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../div.css'

const styles = {
    card: {
      color: '#f9a825',
      maxWidth: 600,
      marginTop : 20,
      marginBottom : 20,
      maxHeight:800,
    },
    media: {
      height: 300,
    },

    typography:{
      color: '#e64a19'
    },
    cardActions:{
      color: '#ffffff'
    },
    button:{
      color: '#e64a19'
    }
  };


export default class CardsComponents extends Component {

  render() {
    return (
      <div className = 'center' >
      <Card style={styles.card}>
      <CardActionArea>
        <CardMedia
          style={styles.media}
          image= {this.props.image}
          title={this.props.title}
        />
        <CardContent>
          <Typography style={styles.typography} gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography style={styles.typography} component="p">
           {this.props.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.cardActions}>
        <Button size="small" style={styles.button}>
          Share
        </Button>
        <Button size="small" style={styles.button} href={this.props.learnMore} >
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
    )
  }
}
