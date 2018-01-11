import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/header';
import Home from '../../home/';
import AddPeak from '../../add-peak/';
import SignUp from '../../sign-up';
import SignIn from '../../sign-in';
import Dashboard from '../../dashboard';
import PeakList from '../../peak-list';
import PeakMap from '../../peak-map';

export default function Layout(props) {
  return (
    <Router>
      <div className="app">
        <Header {...props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-peak" component={AddPeak} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/peak-list" component={PeakList} />
          <Route exact path="/peak-map" component={PeakMap} />
          {/*
          <Route component={NotFoundPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}
