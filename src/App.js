import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage/Homepage';

const theme=createMuiTheme({
  palette: {
    primary: deepOrange,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:600,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Navbar />
        <Homepage />
      </div>
    </ThemeProvider>    
  );
}

export default App;
