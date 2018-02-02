import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './components/layout';
import { getUserPeaks } from './../../modules/peaks/actions';

export class Dashboard extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      const token = this.props.authToken;
      const userId = this.props.currentUser.uuid;
      this.props.onLoad(token, userId);
    }
  }

  render() {
    return (
      <Layout {...this.props} />
    );
  }
}

Dashboard.propTypes = {
  loggedIn: PropTypes.bool,
  authToken: PropTypes.string,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    uuid: PropTypes.string
  }),
  onLoad: PropTypes.func
};

Dashboard.defaultProps = {
  loggedIn: false,
  authToken: null,
  currentUser: {
    email: null,
    uuid: null
  }
};

export const mapStateToProps = state => ({
  allPeaks: state.app.peaks.allPeaks,
  userPeaks: state.app.peaks.userPeaks,
  authToken: state.app.auth.authToken,
  loggedIn: state.app.auth.currentUser != null,
  currentUser: state.app.auth.currentUser
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (token, userId) => {
      dispatch(getUserPeaks(token, userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
