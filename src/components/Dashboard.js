import React, { Component } from 'react';
import axios from 'axios';
import Shoe from './Shoe'


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      shoes: []
    }
  }

 


  componentDidMount(){
    axios.get('/api/user/shoes').then( (response) => {
      console.log(response)
      this.setState({
        shoes: response.data
      })
    })
  }


  render() { 
    const mappedShoes = this.state.shoes.map( shoe => {
      return (
        <Shoe
          key={shoe.id}
          shoe={shoe}
        />

      )
    })

    return ( 
      <div>

        {mappedShoes}

      </div>
     );
  }
}
 
export default Dashboard;