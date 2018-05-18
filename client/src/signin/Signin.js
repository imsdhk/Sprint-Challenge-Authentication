import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  };
  inputChangeHandler = event => {
    event.preventDefault();
    const {name, value} = event.target;

    this.setState({[name]: value});
  };

  sendCredentials = e => {
    console.log("Fired the sendcredentials")
    e.preventDefault();

    axios.post('http://localhost:5000/api/login', this.state).then(response => {
      localStorage.setItem('token', response.data.token);
      console.log('This is insde the submit, this.props:', response)
      this.props.history.push('/jokes');
    }).catch(err => {
      localStorage.removeItem('token');
    });
  }

  render() {
    return (<div>
      <h3>Please Sign In</h3>

      <form onSubmit={this.sendCredentials}>
        <div>
          <label htmlFor="username"/>
          <input name="username" value={this.state.username} onChange={this.inputChangeHandler} type="text"/>
        </div>
        <div>
          <label htmlFor="password"/>
          <input name="password" value={this.state.password} onChange={this.inputChangeHandler} type="password"/>
        </div>
        <div>
          <button>sign in</button>
        </div>

      </form>
      <div>
        <h3>Go Back To Home</h3>
        <Link to="/">
          <button >Home</button>
        </Link>
      </div>
    </div>)
  }
};
export default Signin;
