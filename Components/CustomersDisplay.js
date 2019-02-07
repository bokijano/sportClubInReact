import React from "react";
import "./../App.css";

function CustomersDisplay(props) {
  const {
    id,
    firstName,
    lastName,
    age,
    gender,
    sport,
    anotherSport,
    retirement
  } = props.customer;
  return (
    <div className="custLook">
      <p>
        <span className="boldering">Name:</span> {firstName} {lastName}
      </p>
      <p>
        <span className="boldering">Age:</span> {age} years
      </p>
      <p>
        <span className="boldering">Gender:</span> {gender}
      </p>
      <p>
        <span className="boldering">Sporting:</span> {sport} {anotherSport},{" "}
        {retirement ? "active player" : "in retirement"}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => props.deleteCustomer(id)}
      >
        Delete member
      </button>
    </div>
  );
}

export default CustomersDisplay;
