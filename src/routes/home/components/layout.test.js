import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from './layout';

describe('Home <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout />);
  });

  it('Renders home screen', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('.home')).to.have.length(1);
  });
});
