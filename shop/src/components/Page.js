import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductsPage from "../Pages/ProductsPage";
import ContactPage from "../Pages/ContactPage";
import AdminPage from "../Pages/AdminPage";
import LoginPage from "../Pages/LoginPage";
import ErrorPage from "../Pages/ErrorPage";
const Page = props => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route exact component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
