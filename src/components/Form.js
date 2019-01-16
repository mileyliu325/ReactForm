import React, { Component } from "react";
import "../bootstrap.css";

export default class Form extends Component {
  state = {
    username: "",
    email: "",
    city: "",
    ifsubmit: false
  };

  handleFiledChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  handleSubmit = e => {
    this.setState({ifsubmit:true});
    e.preventDefault();
    console.log("submited:");
    //level 1
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form style={{ width: 300, margin: 20 }} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={this.state.username}
              // onChange = {event => this.setState({username:event.target.value})}
              onChange={this.handleFiledChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              // onChange = {event => this.setState({email:event.target.value})}
              onChange={this.handleFiledChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select
              className="form-control"
              id="city"
              name="city"
              value={this.state.city}
              // onChange = {event => this.setState({city:event.target.value})}
              onChange={this.handleFiledChange.bind(this)}
            >
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <form
          style={{
            width: 300,
            margin: 20,
            padding: 20,
            backgroundColor: "skyblue"
          }}
        >

          <div className="form-group">name:{this.state.ifsubmit?(this.state.username):``}</div>
          <div className="form-group">email:{this.state.ifsubmit?(this.state.email):``}</div>
          <div className="form-group">city:{this.state.ifsubmit?(this.state.city):``}</div>
        </form>
      </div>
    );
  }
}
