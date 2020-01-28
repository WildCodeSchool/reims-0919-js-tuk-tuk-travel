import React, { Component } from "react"
import Moment from 'react-moment';
import '../App.css'
import NavFooter from "./NavFooter";
import SearchField from './SearchField'
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';

class TravelCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      travelsTemp:[],
      travelsStore:[],
      input: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/travels',
    {
      method:'GET',
      headers:{
        'Authorization':  'Bearer '  +  this.props.token,
        'Content-Type':  'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        this.props.history.push('/userconnexion')
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        travelsTemp: data,
        travelsStore: data
    })
  })
  .catch()
  }

  searchField = (event)=>{
    this.setState({input: event.target.value})
    // console.log(event.target.value)
  }

  getCountrys = () => { 
    if (this.state.input.length > 0 ){
    const result = this.state.travelsStore.filter(travel => travel.destination.toLowerCase() === this.state.input.toLowerCase())
    this.setState({travelsTemp:result})}
    else{this.setState({travelsTemp:this.state.travelsStore})}
  }


  render() {
    console.log(this.state.travelsStore)
    return (
      <div className='travel-cards'>
        
        <div className='title-travel-cards'>Tuk-tuk proposés</div>
        <SearchField searchField={this.searchField} input={this.state.input} getCountrys={this.getCountrys}/>
        {React.Children.toArray(this.state.travelsTemp.map(res =>{
          return <div className='liste-travel'>
              
              <figure className='fig-img-travel-cards'>
                <img className='img-travel-cards' alt={res.cityPic} src={res.cityPic}></img>
              </figure>
              <Link style={{height:'2px'}} to={{pathname:"/traveldetails",
                state: {cityPic: res.cityPic,
                  travelID: res.travelID,
                  destination:res.destination,
                  IDuser_creator:res.IDuser_creator,
                  start_date:res.start_date,
                  end_date:res.end_date,
                  description:res.description
                }
              }}>
              <div>
              <h1 className='travel-cards-title'>{res.destination}</h1>
              </div>
              </Link>
              <div className='liste-description-travel-cards'>
                <div style ={{display:'flex', justifyContent:'flex-start'}}>
                  <Moment format="DD/MM/YYYY">{res.start_date}</Moment><span className='travel-date'>  - </span>
                  <Moment format="DD/MM/YYYY">{res.end_date}</Moment>
                </div>
              <p>Places: {res.number_of_travelers_max}</p>
              </div>
              
            
              </div>}))}
              <NavFooter/>
      </div>
    )
  }
}

function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
  }
}
export default connect(mapStateToProps)(TravelCards)
