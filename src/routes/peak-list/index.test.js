import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { PeakList } from './index';

describe('<PeakList />', () => {
  it('Renders without crashing', () => {
    shallow(<PeakList />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<PeakList />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
