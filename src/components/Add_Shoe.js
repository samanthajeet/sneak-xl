import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class Add_Shoe extends Component {
  constructor(){
    super();
    this.state = {
      brand: '',
      name: '',
      release_year: 0,
      color: '',
      purchase_cost: 0,
      sold: false,
      condition: '',
      notes: '',
      img_url: '',

    }
  }

  addNewPair(){
    const {brand, name, release_year, color, purchase_cost, img_url} = this.state
    const { user_id } = this.props.user
    
    console.log(user_id)
    axios.post('/api/user/addshoe', {brand, name, release_year, color, purchase_cost, img_url, user_id}).then( res => {
      this.props.history.push('/user/dashboard')
    })
  }




  handleInput = e => {
    this.setState ({
      [e.target.id] : e.target.value
    })
  }

  render() { 

    return ( 
      <div>
        <h1>Add shoe!</h1>
        <input 
          type="text"
          id="brand"
          placeholder="Brand"
          onChange={this.handleInput}
        />

        <input 
          type="text"
          id="name"
          placeholder="Name"
          onChange={this.handleInput}
        />

        <input 
          type="text"
          id="release_year"
          placeholder="Release Year"
          onChange={this.handleInput}
        />

        <input 
          type="text"
          id="color"
          placeholder="Color"
          onChange={this.handleInput}
        />

        <input 
          type="text"
          id="purchase_cost"
          placeholder="Pruchase Cost"
          onChange={this.handleInput}
        />

        <input 
          type="text"
          id="img_url"
          placeholder="Image Url"
          onChange={this.handleInput}
        />
        

        <img src={this.state.img_url} />

        <button onClick={() => this.addNewPair()} >Add Pair</button>
        <button onClick={() =>this.props.history.push('/user/dashboard')} >Cancel</button>

      </div>
     );
  }
}

function mapStateToProps(state){
  const {user} = state
  return {
    user
  }
}
 
export default connect(mapStateToProps)(Add_Shoe);