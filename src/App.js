import React, { Component } from 'react';
import Header from './Component/header_footer/Header';
import Accord from './Component/tools/Accord';
import Alertacts from './Component/tools/Alertact';
import firebaseApp from './firebase/Firebase';
import { Redirect,withRouter, } from 'react-router-dom';
import Navvbar from './Navbar';
import PropTypes from 'prop-types';
import { history } from 'react-router'


import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Accordion,Card,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";

class App extends Component {

	constructor(props) {
      super(props);
      this.state = {loggedin: false};
  }
  componentWillMount(){
    let _this = this;
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        //if logged in...
        _this.setState({loggedin: true});
        console.log('Im in APP JS');        
      } else {
        //if not logged in...
        _this.setState({loggedin: false});
      }
    });
  } 

  render() {
	  	return (
		      <div className="App">
		       
		      </div>
		  );
		}
}

export default App;
