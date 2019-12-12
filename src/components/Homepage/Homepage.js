import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';
import GoogleApiWrapper from '../Map/GoogleApiWrapper';
import Weapons from '../Weapons/Weapons';
import Login from '../Login/Login';

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
            <Grid container alignItems="center" justify="center" spacing={2}  >
                <Grid>
                    <Switch>
                        <Route path="/weapons" component={Weapons}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/map" component={GoogleApiWrapper}></Route>
                        <Route path="/" exact component={CardHomePage}></Route>
                    </Switch>
                </Grid>
            </Grid>                  
            <Buttons />          
        </div>
    );    
};

export default homepage;