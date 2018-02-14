import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './index';

describe('<Home />', () => {
  it('Renders without crashing', () => {
    shallow(<Home />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
