import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotFound from './index';

describe('<NotFound />', () => {
  it('Renders without crashing', () => {
    shallow(<NotFound />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
