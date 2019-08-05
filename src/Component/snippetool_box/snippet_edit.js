import React, { Component } from 'react';
import firebase from '../../firebase/Firebase';
import { Link } from 'react-router-dom';

class snippet_edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      snippet_name: '',
      snippet_description: '',
      image_url: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('snippet').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const snippet = doc.data();
        this.setState({
          key: doc.id,
          snippet_name: snippet.snippet_name,
          snippet_description: snippet.snippet_description,
          image_url: snippet.image_url
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({snippet:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { snippet_name, snippet_description, image_url } = this.state;

    const updateRef = firebase.firestore().collection('snippet').doc(this.state.key);
    updateRef.set({
      snippet_name,
      snippet_description,
      image_url
    }).then((docRef) => {
      this.setState({
        key: '',
        snippet_name: '',
        snippet_description: '',
        image_url: ''
      });
      this.props.history.push("/snippet_view")
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
            <h3 class="panel-title text-center">
              EDIT snippet
            </h3>
          </div>
          <div class="panel-body">
            <h4 class="text-center"><Link to={`/`} class="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="snippet_name" value={this.state.snippet_name} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="snippet_description" value={this.state.snippet_description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="image_url" value={this.state.image_url} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default snippet_edit;
