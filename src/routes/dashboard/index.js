import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function Dashboard(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  allPeaks: state.app.peaks.allPeaks,
  userPeaks: state.app.peaks.userPeaks,
});

export default connect(mapStateToProps)(Dashboard);
