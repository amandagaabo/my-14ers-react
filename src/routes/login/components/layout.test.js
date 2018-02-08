import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from './layout';

describe('Login <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout />);
  });

  it('Redirects to dashboard when logged in', () => {
    const loggedIn = true;
    const wrapper = shallow(<Layout loggedIn={loggedIn} />);
    expect(wrapper.find('Redirect')).to.have.length(1);
  });

  it('Renders login page when not logged in', () => {
    const loggedIn = false;
    const wrapper = shallow(<Layout loggedIn={loggedIn} />);
    expect(wrapper.hasClass('login-container')).to.equal(true);
  });
});
