import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { EditPeakForm } from './edit-peak-form';

describe('<EditPeakForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = sinon.spy();
    const editPeak = {};
    shallow(<EditPeakForm handleSubmit={handleSubmit} editPeak={editPeak} />);
  });

  it('Renders the edit peak form', () => {
    const handleSubmit = sinon.spy();
    const editPeak = {};
    const wrapper = shallow(<EditPeakForm handleSubmit={handleSubmit} editPeak={editPeak} />);
    expect(wrapper.hasClass('edit-peak-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(3);
    expect(wrapper.contains('error')).to.equal(false);
  });

  it('Renders the edit peak form with errors', () => {
    const handleSubmit = sinon.spy();
    const error = 'wrong date';
    const editPeak = {};
    const wrapper = shallow(<EditPeakForm handleSubmit={handleSubmit} editPeak={editPeak} error={error} />);
    expect(wrapper.hasClass('edit-peak-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(3);
    expect(wrapper.contains(error)).to.equal(true);
  });

  it('Submits the edit peak form on submit click', () => {
    const handleSubmit = sinon.spy();
    const editPeak = {};
    const wrapper = shallow(<EditPeakForm handleSubmit={handleSubmit} editPeak={editPeak} />);
    wrapper.find('button[type="submit"]').simulate('click');
    expect(handleSubmit.calledOnce).to.equal(true);
  });
});
