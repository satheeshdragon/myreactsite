import React, {Component} from 'react';
import {storage} from '../../firebase/Firebase';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/Firebase';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('files');
    this.state = {
      image: null,
      url: '',
      progress: 0,
      files:'',
      snippet_name: '',
      folder_name: '',
      files_name: ''
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      let image = [];
      image = e.target.files;
      this.setState(() => ({image}));
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }


  handleUpload = (e) => {
    e.preventDefault();

      const {image} = this.state;
      const { snippet_name } = this.state;
    // console.log(this.state);
    // console.log(snippet_name);
      var sni_file_name = snippet_name.replace(/\s+/g,"_");
      // console.log(sni_file_name);

      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth()+1; 
      var yyyy = today.getFullYear();
      if(dd<10) 
      {
          dd='0'+dd;
      } 

      if(mm<10) 
      {
          mm='0'+mm;
      }

      today = dd+'_'+mm+'_'+yyyy+'_'+sni_file_name;
      console.log(today);

      var folder_name = 'file_1_'+today;
      var files_name = image[0].name;

      this.ref.add({
      snippet_name,
      folder_name,
      files_name,
    }).then((docRef) => {
      this.setState({
        snippet_name: '',
        folder_name: '',
        files_name: '',
      });
      this.props.history.push("/upload_data")
    });

      // const file_base = [];
      if(image){
        for (var i = 0; i < image.length; i++) {        

          // file_base.push(image[i].name);
          let data = storage.ref(`snippet/file_1_${today}/${image[i].name}`).put(image[i]).on('state_changed', 
        (snapshot) => {
          // progrss function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({progress});
        }, 
        (error) => {
             // error function ....
          console.log(error);
        });

        }
      }
  }


  render() {
    const style = {
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const { snippet_name } = this.state;
    return (
     <div style={style}>
     <h3 class="panel-title text-center">
              UPLOAD CENTER
            </h3>
      <progress value={this.state.progress} max="100"/>
      <br/>
        
        <div class="form-group">
          <label for="title" class="text-center">Index Name:</label>
          <input type="text" class="form-control" name="snippet_name" value={snippet_name} onChange={this.onChange} placeholder="Name.." />
        </div>
        <div class="form-group">
            <input class="btn btn-info" type="file" onChange={this.handleChange} multiple />
        </div>

        <button class="btn btn-success" onClick={this.handleUpload}>Upload</button>
      </div>
    )
  }
}

export default ImageUpload;