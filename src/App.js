import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';


const theme=createMuiTheme({
  palette: {
    primary: deepOrange,
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:600,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <Layout />
        </div>
      </ThemeProvider> 
    </BrowserRouter>   
  );
};

export default App;
