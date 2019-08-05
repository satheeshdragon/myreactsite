import React, { Component } from 'react';
import {  Nav , Button,NavDropdown,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import firebaseApp from './firebase/Firebase';

class Navbar extends Component {
  constructor(props) {
      super(props);
      //
      this.signout = this.signout.bind(this);
  }
  signout(){
    firebaseApp.auth().signOut().then(function() {
      console.log("sign out succesful");
      window.location.href = '/login'; 
        
    }, function(error) {
      console.log("an error happened");
    });
  }
  render() {
    var loginButton;
    var signup;
    console.log(this.props.loggedin);
    if (this.props.loggedin) {
      // loginButton = <button className="btn btn-default" onClick={this.signout}>Logout</button>;
      loginButton = <button className="btn btn-default" onClick={this.signout}>Logout</button>;
      signup = "";
    } else {
      loginButton = <Link to="/login"><button className="btn btn-default">login</button></Link>;
      signup = <Link to="/signup"><button className="btn btn-default">Sign up</button></Link>;
    }
    return (
        <div className="Navbar">
        <Link to="/"><button className="btn btn-default">Home</button></Link>
        <Link to="/dashboard"><button className="btn btn-default dash-btn">Dashboard</button></Link>
        {loginButton}
        {signup}
        
      </div>
    );
  }
}

export default Navbar;
