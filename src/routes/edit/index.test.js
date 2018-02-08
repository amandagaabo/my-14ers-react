import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { EditPeak } from './index';

describe('<EditPeak />', () => {
  it('Renders without crashing', () => {
    shallow(<EditPeak />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<EditPeak />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
