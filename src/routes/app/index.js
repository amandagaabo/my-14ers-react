import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './components/layout';
import { getUserPeaks } from './../../modules/peaks/actions';
import { refreshAuthToken, setReady } from './../../modules/auth/actions';

export class App extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.dispatch(getUserPeaks('token'));
    }
    if (this.props.hasAuthToken) {
      // Try to get a fresh auth token if we had an existing one in localStorage
      this.props.dispatch(refreshAuthToken());
    } else {
      this.props.dispatch(setReady(true));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // one hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Layout {...this.props} />
    );
  }
}


App.propTypes = {
  loggedIn: PropTypes.bool,
  hasAuthToken: PropTypes.bool,
  dispatch: PropTypes.func
};

App.defaultProps = {
  loggedIn: false,
  hasAuthToken: false
};

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null,
  hasAuthToken: state.app.auth.authToken !== null,
  ready: state.app.auth.ready
});

export default connect(mapStateToProps)(App);
