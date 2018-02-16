import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { login } from './../../../modules/auth/actions';
import { required, nonEmpty, email } from '../../../utils/validators';

export function LoginForm(props) {
  function onSubmit(values) {
    const { email, password } = values;
    return props.dispatch(login(email, password));
  }

  if (props.submitSucceeded) {
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
      className="login-form"
    >
      {errorMessage}

      <Field
        component={Input}
        name="email"
        type="email"
        label="Email"
        autofocus
        validate={[required, nonEmpty, email]}
      />

      <Field
        component={Input}
        name="password"
        id="password"
        type="password"
        label="Password"
        validate={[required, nonEmpty]}
      />

      <Col xs={12} className="form-button" >
        <button
          type="submit"
          disabled={props.pristine || props.submitting}
        >
          Login
        </button>
      </Col>
    </form>
  );
}

LoginForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitSucceeded: PropTypes.bool
};

LoginForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: ''
};

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', Object.keys(errors)[0])),
})(LoginForm);
