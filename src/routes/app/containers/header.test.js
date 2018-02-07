import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Navbar } from 'react-bootstrap';
import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders the menu navbar when logged in', () => {
    const loggedIn = true;
    const wrapper = shallow(<Header loggedIn={loggedIn} />);
    expect(wrapper.find(Navbar)).to.have.length(1);
    expect(wrapper.hasClass('nav-loggedin')).to.equal(true);
  });

  it('Renders the log in / sign up navbar when not logged in', () => {
    const loggedIn = false;
    const wrapper = shallow(<Header loggedIn={loggedIn} />);
    expect(wrapper.find(Navbar)).to.have.length(1);
    expect(wrapper.hasClass('nav-not-loggedin')).to.equal(true);
  });
});
