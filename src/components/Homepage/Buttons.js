import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import { Box } from '@material-ui/core';

const buttons = (props) => {
    const styles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(2),
        }
    }));

    const classes = styles();

    return (
        <div>
            <Box display="flex" justifyContent="center" >
                <Button
                display={{ xs: 'block' }}
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<AddBoxOutlinedIcon />}>Sell a new object
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    startIcon={<GpsFixedOutlinedIcon />}>Find around me !
                </Button>           
            </Box>
        </div>
    );
};

export default buttons;
