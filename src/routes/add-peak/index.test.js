import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AddPeak } from './index';


describe('<AddPeak />', () => {
  it('Renders without crashing', () => {
    shallow(<AddPeak />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<AddPeak />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
