import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Bookings from "../../containers/Bookings";
import Home from "../../components/Home";
import Layout from "../../components/layout/Layout";

const App = props => {
  const { match } = props;
  const renderBookings = routeProps => <Bookings {...routeProps} />;
  const renderHome = routeProps => <Home {...routeProps} />;

  return (
    <Layout>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
        <Route path={`${match.url}/home`} render={renderHome} />
        <Route path={`${match.url}/bookings/:id`} render={renderBookings} />
        <Redirect to="/error" />
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
