import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { reduxForm, Field, focus } from 'redux-form';
import { Col } from 'react-bootstrap';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { validDate, maxChar250 } from '../../../utils/validators';

export class EditPeakForm extends React.Component {
  onSubmit(values) {
    const token = this.props.authToken;
    const userId = this.props.currentUser.uuid;
    const { peakId } = this.props.editPeak;
    const { dateClimbed, notes } = values;
    this.props.onUpdatePeak(token, userId, peakId, dateClimbed, notes);
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
          type="text"
          component={Input}
          label="Peak"
          editValue={this.props.editPeak.peakName}
          disabled={true}
        />

        <Field
          name="dateClimbed"
          type="date"
          component={Input}
          label="Date"
          editValue={dateFormat(this.props.editPeak.dateClimbed, 'yyyy-mm-dd')}
          validate={[validDate]}
        />

        <Field
          name="notes"
          type="textarea"
          component={Input}
          editValue={this.props.editPeak.notes}
          label="Notes"
          maxLength="250"
          warn={[maxChar250]}
        />

        <Col xs={12} className="form-button" >
          <button
            type="submit"
            disabled={this.props.submitting}
          >
            Save
          </button>
        </Col>

        <Col xs={12} className="form-button" >
          <Link
            to="/peak-list"
          >
            Cancel
          </Link>
        </Col>
      </form>
    );
  }
}

EditPeakForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  authToken: PropTypes.string,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    uuid: PropTypes.string
  }),
  editPeak: PropTypes.shape({
    peakId: PropTypes.string,
    peakName: PropTypes.string,
    dateClimbed: PropTypes.string,
    notes: PropTypes.string
  }),
  handleSubmit: PropTypes.func,
  onUpdatePeak: PropTypes.func,
  submitSucceeded: PropTypes.bool
};

EditPeakForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: '',
  authToken: null,
  currentUser: null,
  editPeak: null,
  submitSucceeded: false
};

export default reduxForm({
  form: 'edit-peak',
  onSubmitFail: (errors, dispatch) => {
    if (errors) {
      dispatch(focus('add-peak', Object.keys(errors)[0]));
    }
  },
})(EditPeakForm);
