import React, { Component } from "react";
import "../styles/header.css";
import Card from "../components/Card";

class Header extends Component {
  state = {
    amount: 0,
    price: 0
  };
  cardDetails = amount => {
    this.setState({
      amount
    });
  };
  render() {
    return (
      <div className="header">
        <h1>Sklep internetowy</h1>
        <Card amount={this.state.amount} />
      </div>
    );
  }
}

export default Header;
