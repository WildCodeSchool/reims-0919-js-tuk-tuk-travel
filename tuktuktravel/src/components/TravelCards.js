import React, { Component } from "react"
import '../App.css'

class TravelCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            travels:[],
        }
    }

    componentDidMount() {

        fetch('http://localhost:8000/api/travels')
        .then(res => res.json())
        .then(data =>
            
            this.setState({
            travels: data
        }))

    }

    render() {
        return (
            <div className='travel-cards'>
                <h3>Voyages</h3>
                <img alt ='New York' style={{width:'100%',textAlign:'center'}} src ='http://img.over-blog-kiwi.com/0/26/98/15/20161012/ob_dc8aae_ny-2014.jpg'></img> 
                 {this.state.travels.map(res =>{
                    return <div key={res.travelID} className='liste-travel' > <ul>
                        <li>destination: {res.destination}</li>
                        <li>depart: {res.start_date}</li>
                        <li>retour: {res.end_date}</li>
                        <li>Nbre voyageur: {res.number_of_travelers_max}</li>
                        <li>descrption: {res.description}</li>
                        </ul></div>})}
               
            </div>
        )
    }
}

export default TravelCards;