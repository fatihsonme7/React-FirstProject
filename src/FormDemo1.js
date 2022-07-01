import React, { Component } from "react";
import { Form } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { username: "", city: "" };

  onChangeHandle = (event) => {
    // this.setState({ username: event.target.value });

    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandle = (event) => {
    event.preventDefault();
    alert(this.state.username);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandle}>
          <h3>Username</h3>
          <input
            name="username"
            onChange={this.onChangeHandle}
            type="text"
          ></input>
          <h3>Username is {this.state.username}</h3>

          <h3>City</h3>
          <input name="city" onChange={this.onChangeHandle} type="text"></input>
          <h3>City is {this.state.city}</h3>

          <input type="submit" value="save"></input>
        </Form>
      </div>
    );
  }
}
