import React, { Component } from 'react';
import firebase from '../../firebase/Firebase';
import { Link } from 'react-router-dom';

class ImageUpload_edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      files_name: '',
      folder_name: '',
      snippet_name: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('files').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const files = doc.data();
        this.setState({
          key: doc.id,
          snippet_name: files.snippet_name,
          folder_name: files.folder_name,
          files_name: files.files_name,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({files:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { snippet_name,folder_name,files_name } = this.state;

    const updateRef = firebase.firestore().collection('files').doc(this.state.key);
    updateRef.set({
      snippet_name,
      folder_name,
      files_name,
    }).then((docRef) => {
      this.setState({
        key: '',
        snippet_name: '',
        folder_name: '',
        files_name: '',
      });
      this.props.history.push("/fileupload")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT UPLOAD NAME
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/fileupload`} class="btn btn-primary">Upload List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Snippet Name:</label>
                <input type="text" class="form-control" name="snippet_name" value={this.state.snippet_name} onChange={this.onChange} placeholder="Title" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload_edit;
