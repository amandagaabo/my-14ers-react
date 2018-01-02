import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/header';
import Home from '../../home/';

export default function Layout() {
  const props = {
    loggedIn: true,
  };

  return (
    <Router>
      <div className="app">
        <Header {...props} />
        <Switch>
          <Route exact path="/" component={Home} />
          {/*
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={AddPeak} />
          <Route exact path="/list" component={PeakList} />
          <Route exact path="/map" component={PeakMap} />
          <Route component={NotFoundPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}
