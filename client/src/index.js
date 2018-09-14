import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <div color="background">
            <App />
        </div>
    </MuiThemeProvider>, document.getElementById('BasicReact'));
registerServiceWorker();

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#00AAE1',
          dark: '#143C8C',
          contrastText: '#fff',
        },
        secondary: {
          main: '#64B42D',
          dark: '#008732',
          contrastText: '#fff',
        },
        error: {
          main: '#BD0043',
          contrastText: '#fff',
        },
        divider: '#D7D6D5',
        background: {
          paper: '#fff',
          default: "#ff0000"
        },
      },
});
