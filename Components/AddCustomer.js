import React, { Component } from "react";
import "./../App.css";

class AddCustomer extends Component {
  state = {
    showAdd: false,
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    sports: "",
    anotherSport: "",
    retirement: ""
  };

  showAddWindow = () => {
    this.setState({
      showAdd: true
    });
  };
  closeAddWindow = e => {
    e.preventDefault();
    this.setState({
      showAdd: false
    });
  };

  handleChange = e => {
    const { type, id, checked, value } = e.target;
    type === "checkbox"
      ? this.setState({
          [id]: checked
        })
      : this.setState({
          [id]: value
        });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewCustomer(this.state);
  };
  render() {
    return (
      <div>
        <button
          style={{ marginLeft: "10px", marginTop: "10px" }}
          className="btn btn-warning"
          onClick={this.showAddWindow}
        >
          Add new member
        </button>
        {this.state.showAdd ? (
          <form className="addLook" onSubmit={this.handleSubmit}>
            <h3 className="custAdd">Add new member:</h3>
            <label htmlFor="name">First name: </label>{" "}
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              placeholder="Enter first name"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="name">Last name: </label>{" "}
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              placeholder="Enter last name"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="name">Age: </label>{" "}
            <input
              type="number"
              id="age"
              value={this.state.age}
              placeholder="Enter age"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="name">Gender: </label>{" "}
            <input
              type="radio"
              id="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male{""}
            <input
              type="radio"
              id="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
            <br />
            <label htmlFor="name">Sporting: </label>
            <select
              id="sport"
              value={this.state.sport}
              onChange={this.handleChange}
            >
              <option value="">-- Choose your sport --</option>
              <option value="football">Football</option>
              <option value="tennis">Tennis</option>
              <option value="athletics">Athletics</option>
              <option value="volleyball">Volleyball</option>
              <option value="basketblall">Baskettball</option>
            </select>
            <br />
            <label>Another sport: </label>{" "}
            <input
              type="text"
              id="anotherSport"
              value={this.state.anotherSport}
              placeholder="Enter another sport"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="name">Active player? </label>{" "}
            <input
              type="checkbox"
              id="retirement"
              value="true"
              checked={this.state.retirement === true}
              onChange={this.handleChange}
            />{" "}
            Yes <br />
            <br /> <button className="btn btn-primary">Add member</button>
            <br />
            <br />
            <button className="btn btn-danger" onClick={this.closeAddWindow}>
              Close window
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default AddCustomer;
