import React, { Component } from "react";
import CustomersDisplay from "./Components/CustomersDisplay";
import AddCustomer from "./Components/AddCustomer";
import "./App.css";

class App extends Component {
  state = {
    numberOfMembers: 1,
    activeSportsmen: 1,
    inRetirement: 0,
    customers: [
      {
        id: 1,
        firstName: "Bojan",
        lastName: "Krstić",
        age: 38,
        gender: "male",
        sport: "basketball",
        anotherSort: "",
        retirement: true
      }
    ]
  };

  addNewCustomer = customer => {
    customer.id = Math.random();
    let customers = [...this.state.customers, customer];
    this.state.numberOfMembers++;
    this.setState({
      customers: customers
    });
  };

  deleteCustomer = id => {
    let customers = this.state.customers.filter(customer => {
      return customer.id !== id;
    });
    this.state.numberOfMembers--;
    this.setState({
      customers: customers
    });
  };

  render() {
    return (
      <div className="container">
        <div className="memberLook">
          <h3>
            Members in sport club:{" "}
            <span
              style={{
                height: "40px",
                width: "40px",
                paddingTop: "5px",
                fontSize: "30px"
              }}
              className="badge badge-warning"
            >
              {this.state.numberOfMembers}
            </span>
          </h3>
        </div>
        {this.state.customers.map(customer => (
          <CustomersDisplay
            key={customer.id}
            customer={customer}
            deleteCustomer={this.deleteCustomer}
          />
        ))}
        <AddCustomer
          addNewCustomer={this.addNewCustomer}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
