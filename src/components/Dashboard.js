import React, { Component } from 'react';
import axios from 'axios';
import Shoe from './Shoe'
import { connect } from 'react-redux';



class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      shoes: [],
      user: {}
    }
    this.deleteShoe = this.deleteShoe.bind(this)
  }

  componentDidMount(){
    this.getUserShoes()
  }


  getUserShoes(){
    const {user_id} = this.props.user
    axios.post('/api/user/shoes', {user_id: user_id}).then( (response) => {
      console.log(444,response.data)
      this.setState({
        shoes: response.data
      })
    })
  }

  deleteShoe(id){
    const {user_id} = this.props.user
    axios.delete(`/api/user/shoes`, {id, user_id}).then( (response) => {
      this.setState({
        shoes: response.data
      })
    })
  }

  handleNewShoe(){
    this.props.history.push('/user/addshoe')
  }




  render() { 

    const mappedShoes = this.state.shoes.map( shoe => {
      return (
        <Shoe
          key={shoe.id}
          shoe={shoe}
          deleteShoe={this.deleteShoe}
        />

      )
    })

    return ( 
      <div>
        <h1>dashboard</h1>
        <button onClick={ () => this.handleNewShoe()} >Add Pair</button>
        {mappedShoes}

      </div>
     );
  }
}

function mapStateToProps(state) {
  const {user} = state
  return {
    user
  }
}
 
export default connect(mapStateToProps)(Dashboard);