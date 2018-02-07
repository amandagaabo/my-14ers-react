import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { registerUser, login } from './../../../modules/auth/actions';
import { required, nonEmpty, email, isTrimmed, minLength10, maxLength72, matches } from '../../../utils/validators';

export function SignUpForm(props) {
  function onSubmit(values) {
    const { email, password } = values;
    const user = {
      email,
      password
    };

    return props.dispatch(registerUser(user))
      .then(() => {
        props.dispatch(login(email, password));
      });
  }

  if (this.props.submitSucceeded) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  let errorMessage;
  if (props.error) {
    errorMessage = (
      <div className="message message-error">{props.error}</div>
    );
  }

  return (
    <form
      onSubmit={props.handleSubmit(values => onSubmit(values))}
    >

      <Field
        component={Input}
        name="email"
        type="email"
        label="Email"
        validate={[required, nonEmpty, email, isTrimmed]}
      />

      <Field
        component={Input}
        name="password"
        type="password"
        label="Password"
        validate={[required, isTrimmed, minLength10, maxLength72]}
      />

      <Field
        component={Input}
        name="confirm-password"
        type="password"
        label="Confirm Password"
        validate={[required, nonEmpty, matches('password')]}
      />

      {errorMessage}

      <Col xs={12} className="form-button" >
        <button
          type="submit"
          disabled={props.pristine || props.submitting}
        >
          Sign Up
        </button>
      </Col>
    </form>
  );
}

SignUpForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func
};

SignUpForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: ''
};

export default reduxForm({
  form: 'sign-up',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('sign-up', Object.keys(errors)[0]))
})(SignUpForm);
