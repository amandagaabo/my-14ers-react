import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field, focus } from 'redux-form';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { required, nonEmpty, validDate, maxChar250 } from '../../../utils/validators';

export class AddPeakForm extends React.Component {
  onSubmit(values) {
    const token = this.props.authToken;
    const userId = this.props.currentUser.uuid;
    const { peakName, dateClimbed } = values;
    const notes = values.notes ? values.notes : '';
    this.props.onAddPeak(token, userId, peakName, dateClimbed, notes);
  }

  render() {
    if (this.props.submitSucceeded) {
      return (
        <Redirect to="/peak-list" />
      );
    }
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
        {errorMessage}

        <Field
          name="peakName"
          type="select"
          component={Input}
          label="Peak"
          options={this.props.allPeaks}
          validate={[required, nonEmpty]}
        />

        <Field
          name="dateClimbed"
          type="date"
          component={Input}
          label="Date"
          validate={[required, nonEmpty, validDate]}
        />

        <Field
          name="notes"
          type="textarea"
          component={Input}
          label="Notes"
          maxLength="250"
          warn={[maxChar250]}
        />

        <Col xs={12} className="form-button" >
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Add
          </button>
        </Col>
      </form>
    );
  }
}

AddPeakForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  allPeaks: PropTypes.array,
  authToken: PropTypes.string,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    uuid: PropTypes.string
  }),
  handleSubmit: PropTypes.func,
  onAddPeak: PropTypes.func,
  submitSucceeded: PropTypes.bool,
};

AddPeakForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: '',
  allPeaks: [],
  authToken: null,
  currentUser: null,
  submitSucceeded: false,
};

export default reduxForm({
  form: 'add-peak',
  onSubmitFail: (errors, dispatch) => {
    if (errors) {
      dispatch(focus('add-peak', Object.keys(errors)[0]));
    }
  },
})(AddPeakForm);
