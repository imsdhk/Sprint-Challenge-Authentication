import React from 'react';
import axios from 'axios';
class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }

  };
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    console.log('CDM localstorage',localStorage)
    console.log('CDM this.props',this.props)

    const options = {
      headers: {
        Authorization: token
      }
    };
    axios.get('http://localhost:5000/api/jokes', options).then(res => {
      console.log('inside Joke --- after axios',res);

      this.setState({jokes: res.data});
      console.log('inside Joke --- after setState', this.state.jokes);
    }).catch(err => {
      console.log('Error fetching jokes', err);
      this.props.history.push('/signin');
    })
  }

  render() {
    if (this.state.jokes.length === 0) {
      return "loading..."
    }
    return (<div>
      {this.state.jokes.map((user, i) => <div key={user + i}>{`  ${user.punchline}  ---  ${user.setup} `}</div>)}
    </div>)
  }
};

export default Jokes;
