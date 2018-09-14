import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reports from '../Reports.jsx';
import Statistics from '../Statistics.jsx';
import Charts from '../Charts.jsx';
import Login from '../Login.jsx';
import Dashboard from '../Dashboard.jsx';
import Navigation from './Navigation.jsx';
import Employee from '../Employee.jsx';
import Home from '../Home.jsx';

export default class Header extends Component{
    render(){
        return(
            <div>
                <Router>
                <div>
                    <Navigation />
                    <div className="navbar-header" >
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <Route path="/" component={Home} exact active/>
                    <Route path="/Login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/Employee" component={Employee} />
                    <Route path="/Charts" component={Charts} />
                    <Route path="/Statistics" component={Statistics} />
                    <Route path="/Reports" component={Reports} />
                </div>
                </Router>
            </div>
        )
    }
} 