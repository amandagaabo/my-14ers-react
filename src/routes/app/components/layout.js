import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './../containers/header';
import Footer from './../components/footer';
import Home from '../../home/';
import AddPeak from './../../add-peak/';
import SignUp from './../../sign-up';
import Login from './../../login';
import Dashboard from './../../dashboard';
import PeakList from './../../peak-list';
import PeakMap from './../../peak-map';
import Edit from './../../edit';

export default function Layout(props) {
  return (
    <Router>
      <div className="app">
        <Header {...props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-peak" component={AddPeak} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/peak-list" component={PeakList} />
          <Route exact path="/peak-map" component={PeakMap} />
          <Route exact path="/logout" component={Home} />
          <Route exact path="/edit" component={Edit} />
          {/*
          <Route component={NotFoundPage} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
