import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../firebase/Firebase';
import { Link } from 'react-router-dom';
import {storage} from '../../firebase/Firebase';

class snippet_create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('snippet');
    this.state = {
      snippet_name: '',
      snippet_description: '',
      image_url: '',
      image: null,
      url: '',
      progress: 0,
      files:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      let image = [];
      image = e.target.files;
      this.setState(() => ({image}));
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    // console.log(this.state);
    // console.log(this.state.image);
    // console.log(this.state.image[0].name);
    // const {image} = this.state;
    // // console.log(image);
    // const uploadTask = storage.ref(`images/${this.state.image[0].name}`).put(image);

    // // () => {
    //     // complete function ....
    //     storage.ref('images').child(image.name).getDownloadURL().then(url => {
    //         console.log(url);
    //         this.setState({url});
    //     })
    // // });

    const { snippet_name, snippet_description, image_url } = this.state;

    this.ref.add({
      snippet_name,
      snippet_description,
      image_url
    }).then((docRef) => {
      this.setState({
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
    const { snippet_name, snippet_description, image_url } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center">
              ADD SNIPPET
            </h3>
          </div>
          <div class="panel-body ">
            <h4 class="text-center"><Link to="/snippet_view" class="btn btn-primary">SNIPPET List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Snippet Name:</label>
                <input type="text" class="form-control" name="snippet_name" value={snippet_name} onChange={this.onChange} placeholder="Name.." />
              </div>
              <div class="form-group">
                <label for="description">Snippet Description:</label>
                <textArea class="form-control" name="snippet_description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{snippet_description}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Snippet Image:</label>
                <input type="text" class="form-control" name="image_url" value={image_url} onChange={this.onChange} placeholder="url..." />
              </div>              
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default snippet_create;
