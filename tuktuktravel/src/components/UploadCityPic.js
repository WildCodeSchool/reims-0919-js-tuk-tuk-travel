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
  }
  onFormSubmit(e){
    e.preventDefault()
    const url = 'http://localhost:8000/uploaddufichier'
    const formData = new FormData();
    formData.append('file',this.state.file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    post(url, formData, config).then((response)=>{
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

  render() {
    return (
      <div>
      {/*<form className="upload-file" onSubmit={this.onFormSubmit}>*/}
        <p className="title-add-avatar">Ajoute une image</p>
        <input type="file" name='file' className='avatar' onChange={this.onChange} id='cityPic' />
        <button onClick={this.onFormSubmit} className="upload-avatar">Upload</button>
        
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
