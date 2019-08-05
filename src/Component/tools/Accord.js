import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Accordion,Card,Button } from 'react-bootstrap';
import { Badge , ButtonToolbar, Container , Row ,Col } from 'react-bootstrap';
import logo from './dat.png';

export default class Accord extends React.Component {
	render() {
		return (
			<div>
      <br/>
			<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
			<Container className="justify-content-md-center">
      <br/>
				<Accordion defaultActiveKey="0">
				  <Card>
				    <Card.Header>
				      <Accordion.Toggle as={Button} variant="link" eventKey="0">
				        Click me!
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="0">
				      <Card.Body>Hello! I'm the body</Card.Body>
				    </Accordion.Collapse>
				  </Card>
				  <Card>
				    <Card.Header>
				      <Accordion.Toggle as={Button} variant="link" eventKey="1">
				        Click me!
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="1">
				      <Card.Body>Hello! I'm another body</Card.Body>
				    </Accordion.Collapse>
				  </Card>
				</Accordion><br/><br/>
				  <h1>
				    Example heading <Badge variant="secondary">New</Badge>
				  </h1>
<br/>
				   <Badge pill variant="primary">
    Primary
  </Badge>
  <Badge pill variant="secondary">
    Secondary
  </Badge>
  <Badge pill variant="success">
    Success
  </Badge>
  <Badge pill variant="danger">
    Danger
  </Badge>
  <Badge pill variant="warning">
    Warning
  </Badge>
  <Badge pill variant="info">
    Info
  </Badge>
  <Badge pill variant="light">
    Light
  </Badge>
  <Badge pill variant="dark">
    Dark
  </Badge>
<br/><br/>

  <ButtonToolbar>
  <Button variant="primary">Primary</Button><br/><br/>
  <Button variant="secondary">Secondary</Button><br/><br/>
  <Button variant="success">Success</Button><br/><br/>
  <Button variant="warning">Warning</Button><br/><br/>
  <Button variant="danger">Danger</Button><br/><br/>
  <Button variant="info">Info</Button><br/><br/>
  <Button variant="light">Light</Button><br/><br/>
  <Button variant="dark">Dark</Button><br/><br/>
  <Button variant="link">Link</Button><br/><br/>
</ButtonToolbar>

<br/>
</Container>



			</div>
		);
	}
}
