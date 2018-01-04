import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { required, nonEmpty, email } from '../../../utils/validators';

export class SignInForm extends React.Component {
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

        {errorMessage}

        <Col xs={12} className="form-button" >
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign In
          </button>
        </Col>
      </form>
    );
  }
}

SignInForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

SignInForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: '',
  handleSubmit: () => console.log('form submitted'),
};

export default reduxForm({
  form: 'sign-in',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('sign-in', Object.keys(errors)[0])),
})(SignInForm);
