import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from './layout';

describe('PeakMap <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout />);
  });

  it('Renders peak map when logged in', () => {
    const loggedIn = true;
    const wrapper = shallow(<Layout loggedIn={loggedIn} />);
    expect(wrapper.hasClass('peak-map-container')).to.equal(true);
  });

  it('Redirects to login when not logged in', () => {
    const loggedIn = false;
    const wrapper = shallow(<Layout loggedIn={loggedIn} />);
    expect(wrapper.find('Redirect')).to.have.length(1);
  });
});
