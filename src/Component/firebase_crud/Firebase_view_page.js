import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form,Button,Container,Table } from 'react-bootstrap';
import firebase from '../../firebase/Firebase';


export default class Firebase_view_page extends React.Component {

	constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

    componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
	
	render() {
		return (
			<div> <br/>
			 <Container>
			  <row>
			   
				<h2> Firebase Datatable </h2>	
				<h4><Link to="/create" class="btn btn-primary">Add Board</Link></h4>
				<Table striped bordered hover variant="dark">
			  <thead>
			    <tr>
			      <th>Title</th>
			      <th>Description</th>
			      <th>Author</th>
			    </tr>
			  </thead>
			  <tbody>
			    {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
			  </tbody>
			</Table>

			
				</row>
			</Container>



			</div>
			



		);
	}
}
