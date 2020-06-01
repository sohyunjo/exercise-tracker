import React, { Component } from "react";
import axios from 'axios'


export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //state is how to create a variable
    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    this.setState({
      username: "",
    });
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value,
    });
  };


  onSubmit(e) {
    //prevent html form to submit
    e.preventDefault();
    const { username } = this.state;

    axios.post("http://10.0.0.112:5000/users/add", { username })
    .then(res => console.log(res.data))

    this.setState({
        username: ''
    })
  }

  render() {
    return (
        <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
