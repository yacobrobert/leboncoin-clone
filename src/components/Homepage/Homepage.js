import React from 'react'; 
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const homepage = (props) => {
    const styles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(3, 2),
        },
    }));

    const classes = styles();
    
    return (
        <div>
        <Paper  className={classes.root}>
            <Typography component="h3">
                Find all you want !!!
            </Typography>
        </Paper>
     </div>
    );    
}



export default homepage;