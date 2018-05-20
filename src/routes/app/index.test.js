import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { App } from './index';

describe('<App />', () => {
  const dispatch = sinon.spy();

  it('Renders without crashing', () => {
    shallow(<App dispatch={dispatch} />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<App dispatch={dispatch} />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });
});
