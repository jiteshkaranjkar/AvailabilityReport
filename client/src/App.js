import React, { Component } from 'react';
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx'; 
import store from '../src/components/Context/AppStore';
import { Provider } from 'react-redux'
import './App.css';

export default class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {firstReportData:[]};
    // }

    // appLoadDataCallback(firstReportData){
    //     this.setState({
    //         firstReportData:firstReportData
    //     });
    // }

    render() {
        return (
            <Provider store={store}>
                <div>{/* className="container"*/}
                    <Header/>
                    <Footer/>     
                </div>
            </Provider> 
        );
    }
}