import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { getPeaksForMap } from '../../selectors';

export function PeakMap(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: getPeaksForMap(state),
});

export default connect(mapStateToProps)(PeakMap);
