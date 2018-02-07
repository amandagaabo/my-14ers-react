import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { AddPeakForm } from './add-peak-form';

describe('<AddPeakForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = sinon.spy();
    shallow(<AddPeakForm handleSubmit={handleSubmit} />);
  });

  it('Renders the add peak form', () => {
    const handleSubmit = sinon.spy();
    const error = null;
    const wrapper = shallow(<AddPeakForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.hasClass('add-peak-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(3);
    expect(wrapper.contains('error')).to.equal(false);
  });

  it('Renders the add peak form with errors', () => {
    const handleSubmit = sinon.spy();
    const error = 'date is wrong';
    const wrapper = shallow(<AddPeakForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.hasClass('add-peak-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(3);
    expect(wrapper.contains(error)).to.equal(true);
  });

  it('Submits the add peak form on submit click', () => {
    const handleSubmit = sinon.spy();
    const wrapper = shallow(<AddPeakForm handleSubmit={handleSubmit} />);
    wrapper.find('button[type="submit"]').simulate('click');
    expect(handleSubmit.calledOnce).to.equal(true);
  });
});
