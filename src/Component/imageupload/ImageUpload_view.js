import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form,Button,Container,Table } from 'react-bootstrap';
import firebase from '../../firebase/Firebase';
import {storage} from '../../firebase/Firebase';



export default class ImageUpload_view extends React.Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('files');
    this.unsubscribe = null;
    this.state = {
      file_data: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const file_data = [];
    querySnapshot.forEach((doc) => {
      const { snippet_name, folder_name, files_name } = doc.data();
      file_data.push({
        key: doc.id,
        doc, // DocumentSnapshot
        snippet_name,
        folder_name,
        files_name,
      });
    });
    this.setState({
      file_data
   });
  }

  delete(file_data){
    firebase.firestore().collection('files').doc(file_data.key).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/fileupload")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });

    // Create a reference to the file to delete
    // var desertRef = storage.child('snippet/'+file_data.folder_name+'/');
    storage.ref('snippet/'+file_data.folder_name+'/').child(''+file_data.files_name+'').delete();
  }

  view(file_data){
    console.log(file_data);
    // complete function ....
        storage.ref('snippet/'+file_data.folder_name+'/').child(''+file_data.files_name+'').getDownloadURL().then(url => {
            console.log(url);
              // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
              var blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            window.open(url);
            this.setState({url});
        })
  }

    componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    return (
      <div> <br/>
       <Container>
        <row>
         
        <h2> Firebase Upload </h2> 
        <h4><Link to="/upload_data" class="btn btn-primary">Add Upload</Link></h4>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Snippet Name</th>
            <th>Folder Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.file_data.map(file_data =>
                  <tr>
                    <td>{file_data.snippet_name}</td>
                    <td>{file_data.folder_name}</td>
                    <td>
                    <Link to={`/upload_data_edit/${file_data.key}`} class="btn btn-primary">Edit </Link> &nbsp;
                      <button onClick={this.delete.bind(this, file_data)} class="btn btn-danger">Delete</button> &nbsp;
                      <button onClick={this.view.bind(this, file_data)} class="btn btn-info">View</button>
                    </td>
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
