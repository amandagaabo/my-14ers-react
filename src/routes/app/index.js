import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './components/layout';
import { refreshAuthToken, setReady } from './../../modules/auth/actions';
import { getUserPeaks } from './../../modules/peaks/actions';

export class App extends React.Component {
  componentDidMount() {
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

    if (nextProps.loggedIn && !this.props.loggedIn) {
      const token = nextProps.authToken;
      const userId = nextProps.currentUser.uuid;
      this.props.dispatch(getUserPeaks(token, userId));
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
    if (this.props.ready) {
      return (
        <Layout {...this.props} />
      );
    }
    return (
      <div></div>
    );
  }
}


App.propTypes = {
  loggedIn: PropTypes.bool,
  hasAuthToken: PropTypes.bool,
  ready: PropTypes.bool,
  authToken: PropTypes.string,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    uuid: PropTypes.string
  }),
  dispatch: PropTypes.func
};

App.defaultProps = {
  loggedIn: false,
  hasAuthToken: false,
  ready: false,
  authToken: null,
  currentUser: null
};

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null,
  hasAuthToken: state.app.auth.authToken !== null,
  ready: state.app.auth.ready,
  authToken: state.app.auth.authToken,
  currentUser: state.app.auth.currentUser
});

export default connect(mapStateToProps)(App);
