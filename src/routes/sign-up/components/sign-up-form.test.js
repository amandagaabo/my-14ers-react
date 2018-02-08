import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { SignUpForm } from './sign-up-form';

describe('<SignUpForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = sinon.spy();
    shallow(<SignUpForm handleSubmit={handleSubmit} />);
  });

  it('Renders the sign up form', () => {
    const handleSubmit = sinon.spy();
    const error = null;
    const wrapper = shallow(<SignUpForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.hasClass('sign-up-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(3);
    expect(wrapper.contains('error')).to.equal(false);
  });

  it('Renders the sign up form with errors', () => {
    const handleSubmit = sinon.spy();
    const error = 'email taken';
    const wrapper = shallow(<SignUpForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.hasClass('sign-up-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(3);
    expect(wrapper.contains(error)).to.equal(true);
  });

  it('Submits the sign up form on submit click', () => {
    const handleSubmit = sinon.spy();
    const wrapper = shallow(<SignUpForm handleSubmit={handleSubmit} />);
    wrapper.find('button[type="submit"]').simulate('click');
    expect(handleSubmit.calledOnce).to.equal(true);
  });
});
