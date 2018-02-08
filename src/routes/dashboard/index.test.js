import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Dashboard } from './index';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
