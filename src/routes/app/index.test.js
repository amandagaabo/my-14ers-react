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

  it('Renders the layout when ready', () => {
    const ready = true;
    const wrapper = shallow(<App dispatch={dispatch} ready={ready} />);
    expect(wrapper.find('Layout')).to.have.length(1);
  });

  it('Does not render the layout when not ready', () => {
    const ready = false;
    const wrapper = shallow(<App dispatch={dispatch} ready={ready} />);
    expect(wrapper.find('Layout')).to.have.length(0);
  });
});
