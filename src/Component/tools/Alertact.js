import React, { Component } from 'react';
import { Alert,Button,ButtonToolbar } from 'react-bootstrap'
// import { SweetAlert } from 'react-bootstrap-sweetalert'
import { Container , Row ,Col } from 'react-bootstrap';




export default class Alertact extends React.Component {
	render() {
		return (
			<div style={{padding:'30px'}}>
				<Container>
				  <Row className="justify-content-md-center">
				    <Col xs lg="2">
				    <Button variant="success" onClick={()=>{ myClick(); }}>ALERT METHOD Success</Button>
				    </Col>
				  </Row>
				</Container>

  				
			</div>
		);
	}
}


function myClick() {
        alert("Hello World!");
    }
