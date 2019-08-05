import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Accordion,Card,Button } from 'react-bootstrap';
import { Badge , ButtonToolbar, Container , Row ,Col } from 'react-bootstrap';
import logo from '../../asserts/images/dat.png';

export default class Photos extends React.Component {
	render() {
		return (
			<div style={{ padding: '15px' }}>
				<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="4">
      <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col xs lg="4">
    <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col xs lg="4">
     <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
  </Row>

    <Row className="justify-content-md-center">
    <Col xs lg="4">
      <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col xs lg="4">
    <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col xs lg="4">
     <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
  </Row>

  </Container>
			</div>
		);
	}
}
