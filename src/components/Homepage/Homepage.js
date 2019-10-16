import React from 'react'; 
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Buttons from './Buttons';



const homepage = (props) => {
    const styles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(3, 2),
            margin: theme.spacing(2, 4),
        },
    }));

    const classes = styles();
    
    return (
        <div>           
            <Paper  className={classes.root}>
                <Typography component="h1"  align="center">
                    Find all what you want !!!
                </Typography>
            </Paper>
            
            <Buttons />          
        </div>
    );    
}



export default homepage;