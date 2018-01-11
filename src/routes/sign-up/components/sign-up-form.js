import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { required, nonEmpty, email, isTrimmed, minLength10, maxLength72, matches } from '../../../utils/validators';

export class SignUpForm extends React.Component {
  onSubmit(values) {
    console.log('Submitted with values', values);
  }

  render() {
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
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
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign Up
          </button>
        </Col>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: '',
  handleSubmit: () => console.log('form submitted'),
};

export default reduxForm({
  form: 'sign-up',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('sign-up', Object.keys(errors)[0])),
})(SignUpForm);
