import React, { Component } from "react";
import Input from "./common/imput";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  handleSubmit = e => {
    e.preventDefault();
    // call the server
    const username = this.username.current.value;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[inpute.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Login
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Login
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
