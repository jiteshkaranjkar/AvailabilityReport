import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css'

export default class Navigation extends Component {
    render() {
      return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <b>
                        <Link to="/">Availability Report</Link>
                    </b>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={3} componentClass={Link} href="#dashboard" to="/dashboard">
                        <b> Dashboard </b>
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href="#Employee" to="/Employee">
                        <b> Employee </b>
                    </NavItem>
                    <NavItem eventKey={6} componentClass={Link} href="#reports" to="/Reports">
                        <b> Reports </b>
                    </NavItem>
                    <NavItem>
                    </NavItem>
                    {/* <NavItem eventKey={7}>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </NavItem> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}