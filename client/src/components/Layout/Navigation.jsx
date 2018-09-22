import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css'
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default class Navigation extends Component {
    render() {
      return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <b>
                        <Link to="/">
                            <Typography variant="display3" color="primary">
                            <b>Availability Report </b>
                            </Typography>
                        </Link>
                    </b>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="#home" to="/">
                        <b> Home </b>
                    </NavItem>
                    <NavItem eventKey={1} componentClass={Link} href="#dashboard" to="/dashboard">
                        <b> Dashboard </b> 
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="#Employee" to="/Employee">
                        <b> Employee </b>
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="#reports" to="/Reports">
                        <b> Reports </b>
                    </NavItem>
                    <NavItem eventKey={4}>
                        <HeaderLinks/>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}