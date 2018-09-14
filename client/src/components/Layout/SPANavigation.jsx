import React, { Component } from "react";
import {  Route, NavLink, HashRouter } from "react-router-dom";
import Reports from '../Reports.jsx';
import Statistics from '../Statistics.jsx';
import Charts from '../Charts.jsx';
import Login from '../Login.jsx';
import Dashboard from '../Dashboard.jsx';
import Navigation from './Navigation.jsx';
import Employee from '../Employee.jsx';
import Home from '../Home.jsx';


export default class SPAHeader extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Availability Report</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/Login">Login</NavLink></li>
              <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/Employee">Employee</NavLink></li>
              <li><NavLink to="/Charts">Charts</NavLink></li>
              <li><NavLink to="/Statistics">Statistics</NavLink></li>
              <li><NavLink to="/Reports">Reports</NavLink></li>
            </ul>
            <div className="content">
                <Route path="/" component={Home} exact active/>
                <Route path="/Login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/Employee" component={Employee} />
                <Route path="/Charts" component={Charts} />
                <Route path="/Statistics" component={Statistics} />
                <Route path="/Reports" component={Reports} />
            </div>
          </div>
        </HashRouter>
      );
    }
  }