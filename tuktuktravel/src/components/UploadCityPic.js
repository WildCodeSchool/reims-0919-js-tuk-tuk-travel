import React from 'react'
import { post } from 'axios';
import { connect } from  'react-redux';

class UploadCityPic extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
      //console.log(this.state.file.name);
      this.props.dispatch( 
        {
          type : "SEND_CITY_PIC",
          cityPic : this.state.file.name,
        }
      )
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:8000/uploaddufichier'
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData, config)
  }

  render() {
    return (
      <div>
      {/*<form className="upload-file" onSubmit={this.onFormSubmit}></form>*/}
        <p className="title-add-avatar">Ajoute une image</p>
        <input type="file" name='file' className='avatar' onChange={this.onChange} id='cityPic' />
        <button className="upload-avatar" onClick={this.onFormSubmit}>Upload</button>
      </div>
   )
  }
}

function  mapStateToProps(state) {
  return {
    cityPic: state.cityPic.cityPic,
  }
};

export  default  connect(mapStateToProps)(UploadCityPic)
