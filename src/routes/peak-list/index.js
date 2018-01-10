import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function PeakList(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: state.app.peaks.userPeaks,
});

export default connect(mapStateToProps)(PeakList);
