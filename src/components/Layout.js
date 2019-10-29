import React from 'react';

import Navbar from './Navigation/Navbar';
import Homepage from './Homepage/Homepage';
import SidebarDrawer from './Navigation/SidebarDrawer';

const Layout = () => {
    return (
        <React.Fragment>            
            <Navbar />
            <Homepage />
            <SidebarDrawer />
        </React.Fragment>
    );
};

export default Layout;
