import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import Grid from '@material-ui/core/Grid';

const buttons = (props) => {
    const styles = makeStyles(theme => ({
        root: {
            flexGrow: 1,            
        },
    }));

    const classes = styles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" spacing={2}>
                <Grid item xs={12} sm={6} align="center">
                    <Button
                        component={Link} to="/weapons"
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        fullWidth={true}
                        startIcon={<AddBoxOutlinedIcon />}>Vends tes armes
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} align="center">
                    <Button
                        className={classes.button}
                        component={Link} to="/map"
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        startIcon={<GpsFixedOutlinedIcon />}>Localisez moi !
                    </Button>                      
                </Grid>
            </Grid>         
        </div>
    );
};

export default buttons;