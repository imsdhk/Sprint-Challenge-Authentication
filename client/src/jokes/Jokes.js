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

        const options = {
            headers: {
                Authorization: token,
            },
        };
        axios
            .get('http://localhost:5000/api/jokes', options)
            .then(res => {
                this.setState({ jokes: res.data });
                console.log('here', this.state.jokes);
            })
            .catch(err => {
                console.log('Error fetching jokes', err);
                this.props.history.push('/signin');
            })
    }

    render() {

        return (
            <div>
              <ul>

                {this.state.users.map((user, i) => <li key={user + i}>{user.username}</li>)}
              </ul>

            </div>
        )
    }
};

export default Jokes;
