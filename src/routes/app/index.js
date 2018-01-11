import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './components/layout';
import { getUserPeaks } from './../../modules/peaks/actions';


export class App extends React.Component {
  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.dispatch(getUserPeaks('token'));
    }
    // if (this.props.hasAuthToken) {
    //   // Try to get a fresh auth token if we had an existing one in localStorage
    //   this.props.dispatch(refreshAuthToken());
    // } else {
    //   this.props.dispatch(setReady(true));
    // }

    // other auth setup goes here
  }

  render() {
    return (
      <Layout {...this.props} />
    );
  }
}


App.propTypes = {
  loggedIn: PropTypes.bool,
  dispatch: PropTypes.func,
};

App.defaultProps = {
  loggedIn: false,
};

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null,
});

export default connect(mapStateToProps)(App);
