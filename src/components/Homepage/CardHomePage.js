import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardHomePage = (props) => {
    const cardStyles = makeStyles({
        card: {
          maxWidth: 661,
        },
        media: {
          height: 483,
        },
      });

    const classes = cardStyles()

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="http://les-aigles-de-manwe.e-monsite.com/medias/album/lotro-carte-monde.jpeg"
                    title="Map of middle earth"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Terre du milieu
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Cartes de la Terre du Milieu au 3ème Age, à utiliser pour trouver les ventes.
                </Typography>
                </CardContent>
            </CardActionArea>           
        </Card>
      );
};

export default cardHomePage;