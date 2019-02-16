import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Nawigation from "./Nawigation.js";
import Page from "./Page.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
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
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <aside>{<Nawigation />}</aside>
            <section className="page">
              {<Page cardDetails={this.cardDetails} />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}
export default App;
