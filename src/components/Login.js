import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { handleAuthRes } from './../ducks/actions';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(){
    const { username, password} = this.state;
    axios.post(`/api/login`, {username, password}).then( (res) => {
      console.log(res.data.user.user_id )
      this.props.handleAuthRes( res.data)
      if(res.data.authenticated){
        this.props.history.push('/user/dashboard')
      }
    })
  }

  render() { 
    return ( 
      <div>

        <p>Username</p>
        <input
          value={this.state.username}
          onChange={ (e)=> this.setState({username: e.target.value}) }/>

        <p>password</p>
        <input
          value={this.state.password}
          onChange={ (e) => this.setState({password: e.target.value})} />
        <button onClick={this.handleLogin} >Login</button>

      </div>
     );
  }
}

function mapStateToProps(state) {
  const { authenticated, user } = state
  return {
    authenticated,
    user
  }
}
 
export default connect(mapStateToProps, {handleAuthRes})(Login) ;