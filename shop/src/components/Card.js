import React, { Component } from "react";

const Card = props => {
  return (
    <div className="cards">
      <i className="fas fa-shopping-cart" />
      <span>{props.amount}</span>
      <p>Twój koszyk</p>
      {/* <p>{this.state.price} zł</p> */}
    </div>
  );
};
export default Card;
