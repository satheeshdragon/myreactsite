import React, { Component } from 'react';
import { Form,Button,Container,Table } from 'react-bootstrap';


export default class Formpage extends React.Component {
	
	render() {
		return (
			<div> <br/>
			 <Container>
			  <row>
				<Form>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email address</Form.Label>
				    <Form.Control type="email" placeholder="Enter email" />
				    <Form.Text className="text-muted">
				      We'll never share your email with anyone else.
				    </Form.Text>
				  </Form.Group>

				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Password</Form.Label>
				    <Form.Control type="password" placeholder="Password" />
				  </Form.Group>
				  <Form.Group controlId="formBasicChecbox">
				    <Form.Check type="checkbox" label="Check me out" />
				  </Form.Group>
				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
				</Form>

				<br/>


				<Table striped bordered hover variant="dark">
			  <thead>
			    <tr>
			      <th>#</th>
			      <th>First Name</th>
			      <th>Last Name</th>
			      <th>Username</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>1</td>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>@mdo</td>
			    </tr>
			    <tr>
			      <td>2</td>
			      <td>Jacob</td>
			      <td>Thornton</td>
			      <td>@fat</td>
			    </tr>
			    <tr>
			      <td>3</td>
			      <td colSpan="2">Larry the Bird</td>
			      <td>@twitter</td>
			    </tr>
			  </tbody>
			</Table>

			<br/>
			<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
				</row>
			</Container>



			</div>
			



		);
	}
}
