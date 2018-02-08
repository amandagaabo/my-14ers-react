import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { LoginForm } from './login-form';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = sinon.spy();
    shallow(<LoginForm handleSubmit={handleSubmit} />);
  });

  it('Renders the login form', () => {
    const handleSubmit = sinon.spy();
    const error = null;
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.hasClass('login-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(2);
    expect(wrapper.contains('error')).to.equal(false);
  });

  it('Renders the login form with errors', () => {
    const handleSubmit = sinon.spy();
    const error = 'wrong email or password';
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.hasClass('login-form')).to.equal(true);
    expect(wrapper.find(Field)).to.have.length(2);
    expect(wrapper.contains(error)).to.equal(true);
  });

  it('Submits the login form on submit click', () => {
    const handleSubmit = sinon.spy();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
    wrapper.find('button[type="submit"]').simulate('click');
    expect(handleSubmit.calledOnce).to.equal(true);
  });
});
