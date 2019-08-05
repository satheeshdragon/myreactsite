import React, { Component } from 'react';
import { Navbar, Nav , Button,NavDropdown,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import firebaseApp from '../../firebase/Firebase';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {loggedin: false};
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
    var navgation;
    // console.log(this.state['loggedin']);
    if (this.state['loggedin']) {
      navgation =               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Link to="/Home"><Navbar.Brand >Satheesh.Demo</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Link to="/Home"><Nav.Link href="#Home">Home</Nav.Link></Link>
                    <Link to="/Topics"><Nav.Link href="#Worked">Worked</Nav.Link></Link>
                    <Link to="/Photos"><Nav.Link href="#Photo">Photo</Nav.Link></Link>
                    <NavDropdown title="Tools" id="collasible-nav-dropdown">

                      <Link to="/Form"><NavDropdown.Item  href="/Form">Form</NavDropdown.Item></Link>
                      <Link to="/Firebase"><NavDropdown.Item href="/Firebase">Firebase</NavDropdown.Item></Link>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Link to="/fileupload"><Nav.Link href="#Uploads">Uploads</Nav.Link></Link>
                    <Link to="/snippet_view"><Nav.Link href="#Snippets">Snippets</Nav.Link></Link>
                    <Link to="/snippet_view"><Nav.Link href="#Logout" onClick={this.signout}>Logout</Nav.Link></Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar> ;
    } else {
      navgation = <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Link to="/Home"><Navbar.Brand >Satheesh.Demo</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">                  
                  <Nav>
                    <Link to="/login"><Nav.Link href="#Login">Login</Nav.Link></Link>
                    <Link to="/signup"><Nav.Link href="#Signup">Signup</Nav.Link></Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar> ;

    }
    return (
        <div className="Navbar">
          {navgation}
        
      </div>
    );
  }
}

export default Header;
