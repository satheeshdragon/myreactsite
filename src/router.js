import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Navbar, Nav , Button,NavDropdown } from 'react-bootstrap'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/header_footer/Header';
import Accord from './Component/tools/Accord';
import Home from './Component/tools/Home';
import Alertacts from './Component/tools/Alertact';
import Photos from './Component/photos/Photos';
import Form from './Component/pages/Formpage';

import Firebasepage from './Component/firebase_crud/Firebase_view_page';
import Firebasecreate from './Component/firebase_crud/Firebasecreate';
import Firebaseshow from './Component/firebase_crud/Firebaseshow';
import Firebaseedit from './Component/firebase_crud/Firebaseedit';

import Upload_view from './Component/imageupload/ImageUpload_view';
import Upload_add from './Component/imageupload/ImageUpload';
import Upload_edit from './Component/imageupload/ImageUpload_edit';

import Snippet_view from './Component/snippetool_box/snippet_view';
import Snippet_create from './Component/snippetool_box/snippet_create';
import Snippet_edit from './Component/snippetool_box/snippet_edit';

import Login from './authscreens/Login';
import Signup from './authscreens/Signup';
import Recover from './authscreens/Recover';
import firebaseApp from './firebase/Firebase';

import Authe from './utils/RequireAuth';
import EnsureLoggedInContainer from './authscreens/EnsureLoggedInContainer';

import { UnauthRoute } from 'react-router-auth'

import { BrowserRouter as Router, Route, Link , IndexRoute , HashRouter,withRouter} from "react-router-dom";


function requireAuth(nextState, replaceState) {
	var user = firebaseApp.auth().currentUser;
	// alert(user);
	console.log(user);
  // if (!user) {
  // 	if(window.location.pathname != '/login'){
  // 		window.location.href = '/login';
  // 	}
  //   // alert(user);
  //   // var currentLocation = window.location.pathname;
  //   // const {pathname} = this.props.location;
  //   // alert(window.location.pathname);
  //    // window.location.href = '/login'; 

  // }
}


const routing = (
	<Router>
    <div>
        <Router history={HashRouter}>
        	<Header />
				<Route path="/" component={App}/>
			    <Route path="/Home" component={Home} />
			    <Route path="/login" component={Login} />
		        <Route path="/signup" component={Signup} />
		        <Route path="/recover" component={Recover} />

		        <Route component={Authe} >

			    <Route path="/topics" component={Accord} />
			    <Route path="/Photos" component={Photos} />
			    <Route path="/Form" component={Form} />

			    <Route path="/Firebase" component={Firebasepage} />
			    <Route path="/create" component={Firebasecreate} />
			    <Route path="/show/:id" component={Firebaseshow} />
			    <Route path="/edit/:id" component={Firebaseedit} />

			    <Route path="/fileupload" component={Upload_view} />
			    <Route path="/upload_data" component={Upload_add} />
			    <Route path="/upload_data_edit/:id" component={Upload_edit} />

			    <Route path="/snippet_view" component={Snippet_view} />
			    <Route path="/create_snippet" component={Snippet_create} />
			    <Route path="/edit_snippet/:id" component={Snippet_edit} />

			    </Route>

		</Router>
    </div>
    </Router>
)

export default routing
