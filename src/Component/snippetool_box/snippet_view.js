import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/Firebase';

class snippet_view extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('snippet');
    this.unsubscribe = null;
    this.state = {
      snippet: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const snippet = [];
    querySnapshot.forEach((doc) => {
      const { snippet_name, snippet_description, image_url } = doc.data();
      snippet.push({
        key: doc.id,
        doc, // DocumentSnapshot
        snippet_name,
        snippet_description,
        image_url,
      });
    });
    this.setState({
      snippet
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  delete(id){
    firebase.firestore().collection('snippet').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/snippet_view")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  view(id){
      const ref = firebase.firestore().collection('snippet').doc(this.props.match.params.id);
      ref.get().then((doc) => {
        if (doc.exists) {
          const snippet = doc.data();
        } else {
          console.log("No such document!");
        }
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center">
              SNIPPET LIST
            </h3>
          </div>
          <div class="panel-body text-center">
            <h4>
            <Link to="/create_snippet" class="btn btn-primary">Add SNIPPET</Link> &nbsp;
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Snippet.Name</th>
                  <th>Snippet.Description</th>
                  <th>Snippet.image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.snippet.map(snippet =>
                  <tr>
                    <td>{snippet.snippet_name}</td>
                    <td>{snippet.snippet_description}</td>
                    <td>{snippet.image_url}</td>
                    <td>
                      <Link to={`/edit_snippet/${snippet.key}`} class="btn btn-primary">Edit </Link> &nbsp;
                      <button onClick={this.delete.bind(this, snippet.key)} class="btn btn-danger">Delete</button> &nbsp;
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default snippet_view;
