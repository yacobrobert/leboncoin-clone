import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MordorMap from '../media/images/carte-monde.jpeg';

const cardHomePage = (props) => {
    const cardStyles = makeStyles(theme => ({
        card: {
          maxWidth: 661,
        },
        media: {
          height: 483,
        },
        root: {
          padding: theme.spacing(1, 1),
          margin: theme.spacing(1),
          flexGrow: 1,       
        },
      }));

    const classes = cardStyles()

    return (
        <React.Fragment>
          <Paper  className={classes.root}>
              <Typography component="h1"  align="center">
                  Find all what you want !!!
              </Typography>
          </Paper> 
          <Card className={classes.card}>
              <CardActionArea>
                  <CardMedia
                      className={classes.media}
                      image={MordorMap}
                      title="Map of middle earth"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Terre du milieu
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Cartes de la Terre du Milieu. A utiliser pour trouver les annonces de ventes.
                  </Typography>
                  </CardContent>
              </CardActionArea>           
          </Card>
        </React.Fragment>
      );
};

export default cardHomePage;