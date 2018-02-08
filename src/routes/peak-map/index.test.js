import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { PeakMap } from './index';

describe('<PeakMap />', () => {
  it('Renders without crashing', () => {
    shallow(<PeakMap />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<PeakMap />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
