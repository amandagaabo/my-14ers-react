import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Login } from './index';

describe('<Login />', () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
