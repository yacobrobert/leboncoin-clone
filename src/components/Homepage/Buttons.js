import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import Grid from '@material-ui/core/Grid';

const buttons = (props) => {
    const styles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        button: {
            margin: theme.spacing(1),
        }
    }));

    const classes = styles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                <Grid item xs={11} sm={5} align="center">
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        fullWidth={true}
                        startIcon={<AddBoxOutlinedIcon />}>Sell a new object
                    </Button>
                </Grid>
                <Grid item xs={11} sm={5} align="center">
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        startIcon={<GpsFixedOutlinedIcon />}>Find around me
                    </Button>                      
                </Grid>
            </Grid>         
        </div>
    );
};

export default buttons;
