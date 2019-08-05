import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import firebaseApp from '../firebase/Firebase';
import '../css/custom.css';
import isEmail from 'validator/lib/isEmail';
import { Form,Button,Container,Table,Col,Row } from 'react-bootstrap';


class Login extends Component {
	constructor(props) {
    	super(props);
    	this.state = {email: "", password:""};
    	//
    	this.handleEmailChange = this.handleEmailChange.bind(this)
    	this.handlePassChange = this.handlePassChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
   handlePassChange(e) {
    this.setState({password: e.target.value});
  }
	handleSubmit(e) {
	    e.preventDefault();
	    var email = this.state.email.trim();
	    var password = this.state.password.trim();
      if(isEmail(email)){
  	    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(function(result) {
           // alert('Success');
           window.location.href = '/home'; 
        }).catch(function(error) {
          // window.location.href = '/home';
    		  // Handle Errors here.
    		  var errorMessage = error.message;
    		  alert("errorMessage: "+ errorMessage)
    		});
      }else{
        alert("Email Address in not valid");
      }
  }
  handleFacebook(e) {
    e.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      console.log('Facebook login success')
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("Facebook sign in error: "+ errorMessage);
    });
  }
   handleGoogle(e) {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      console.log('Google login success');
      window.location.href = '/home'; 
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("Google sign in error: "+ errorMessage);
    });
  }
  render() {

    return (
      <div className="Login">
        {/*<h1>Login Screen</h1>
        <div className="col-md-4"></div>
           <div className="form-group col-md-4">
            <a className="btn btn-block btn-social btn-facebook" onClick={this.handleFacebook}>
              <span className="fa fa-facebook"></span>
              Sign in with Facebook
            </a>
            <a className="btn btn-block btn-social btn-google" onClick={this.handleGoogle}>
              <span className="fa fa-google"></span>
              Sign in with Google
            </a>
          <br/>
          <p className="text-center">------------- Or -------------</p>
          <form onSubmit={this.handleSubmit}>
          	<input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email" />
          	<input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange} placeholder="Enter Password" /><br/>
          	<button type="submit" className="btn btn-default">Submit</button>
          </form>  
        	<br/><br/>
        	
        </div>*/}
        <br/>
        <Container>
        <row>
        
          <br/>
          <br/>
        <Row className="justify-content-md-center">
        <Col xs lg="4">

        </Col>
        <Col xs lg="4" >
            <div class="text-center">
            <button class="loginBtn loginBtn--facebook" onClick={this.handleFacebook}>
              Login with Facebook
            </button>
            <button class="loginBtn loginBtn--google" onClick={this.handleGoogle}>
              Login with Google
            </button>
            
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br/>
              <br/>
              <p>Forgot Password? <Link to="/recover"> Click Here</Link> &nbsp;
              </p>
            </Form>
            </div>
        </Col>
        <Col xs lg="4">
        </Col>
        </Row>

        

        </row>
        </Container>
      </div>
    );
  }
}

export default Login;
