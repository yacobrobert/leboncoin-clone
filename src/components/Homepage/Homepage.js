import React from 'react'; 
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Buttons from './Buttons';
import CardHomePage from './CardHomePage';

const homepage = (props) => {
    const styles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(1, 1),
            margin: theme.spacing(1),
            flexGrow: 1,       
        },
    }));

    const classes = styles();
    
    return (
        <div className={classes.root}>  
            <Paper  className={classes.root}>
                <Typography component="h1"  align="center">
                    Find all what you want !!!
                </Typography>
            </Paper>   
            <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
                <Grid item xl={12}>
                    <CardHomePage />
                </Grid>
            </Grid>                  
            <Buttons />          
        </div>
    );    
};

export default homepage;