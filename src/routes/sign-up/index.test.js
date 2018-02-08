import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SignUp } from './index';

describe('<SignUp />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUp />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
