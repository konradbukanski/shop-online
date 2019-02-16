import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = true;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? <h3>Panel admina - witam</h3> : <Redirect to="/login" />
      }
    />
  );
};

export default AdminPage;
