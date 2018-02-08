import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from './layout';

describe('Edit <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout />);
  });

  it('Renders edit peak page when logged in with editPeak data', () => {
    const loggedIn = true;
    const editPeak = {};
    const wrapper = shallow(<Layout loggedIn={loggedIn} editPeak={editPeak} />);
    expect(wrapper.hasClass('edit-peak-container')).to.equal(true);
  });

  it('Redirects to login when not logged in with editPeak data', () => {
    const loggedIn = false;
    const editPeak = {};
    const wrapper = shallow(<Layout loggedIn={loggedIn} editPeak={editPeak} />);
    expect(wrapper.find('Redirect')).to.have.length(1);
  });

  it('Redirects to peak-list when logged in with no editPeak data', () => {
    const loggedIn = false;
    const editPeak = null;
    const wrapper = shallow(<Layout loggedIn={loggedIn} editPeak={editPeak} />);
    expect(wrapper.find('Redirect')).to.have.length(1);
  });
});
