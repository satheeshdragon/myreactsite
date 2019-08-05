import React, { Component } from 'react';
import { Navbar, Nav , Button,NavDropdown,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import firebaseApp from '../firebase/Firebase';

class EnsureLoggedInContainer extends React.Component {

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
    alert();
  } 

  render() {
    if (this.state.loggedin) {
      alert();
      return 1;
    } else {
      window.location.href = '/home'; 
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default EnsureLoggedInContainer;
