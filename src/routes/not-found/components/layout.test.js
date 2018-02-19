import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from './layout';

describe('NotFound <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout />);
  });

  it('Renders not found page when at an unknown route', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.hasClass('not-found-container')).to.equal(true);
  });
});
