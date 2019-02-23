import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { handleAuthRes } from './../ducks/userReducer';
import './Login.css'
import '../Fonts.css';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(){
    const { username, password} = this.state;
    axios.post(`/api/login`, {username, password}).then( (res) => {
      this.props.handleAuthRes( res.data)
      this.setState({
        user: res.data.user,
      })
      console.log(1111,this.state)
      if(res.data.authenticated){
        this.props.history.push('/user/dashboard')
      }
    })
  }

  render() { 

    return ( 
      <div className="loginsite">

        <div className="landingimage">
          <h1>Sneak_XL</h1>
        </div>

        <div className="login">
          <div className="username">
            <p>Username</p>
            <div className="username-box" ></div>
            <input
              value={this.state.username}
              type="type"
              onChange={ (e)=> this.setState({username: e.target.value}) }
            />
          </div>

          <div className="password">
          <p>password</p>
            <input
              value={this.state.password}
              type="password"
              onChange={ (e) => this.setState({password: e.target.value})}
            />
          </div>
            <button onClick={this.handleLogin} >Login</button>
        </div>
        
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