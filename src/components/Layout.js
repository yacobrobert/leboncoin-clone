import React from 'react';

import Navbar from './Navigation/Navbar';
import Homepage from './Homepage/Homepage';
import SidebarDrawer from './Navigation/SidebarDrawer';

const Layout = () => {
    const [state, setState] = React.useState({
            left: false
        });
    
    const toggleDrawer = (open) => event => {
        setState({ ...state, 'left': open });
    };

    return (
        <React.Fragment>            
            <Navbar clicked={toggleDrawer(true)} />
            <Homepage />
            <SidebarDrawer toggleNavbar={state.left} />
        </React.Fragment>
    );
};

export default Layout;
