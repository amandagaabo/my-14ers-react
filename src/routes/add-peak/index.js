import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function AddPeak(props) {
  return (
    <Layout {...props}/>
  );
}

export const mapStateToProps = state => ({
  peakNames: state.app.peaks.peakNames,
});

export default connect(mapStateToProps)(AddPeak);
