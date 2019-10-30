import React from 'react';

import Navbar from './Navigation/Navbar';
import Homepage from './Homepage/Homepage';

const Layout = () => {
    return (
        <React.Fragment>            
            <Navbar />
            <Homepage />
        </React.Fragment>
    );
};

export default Layout;
