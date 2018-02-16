import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field, focus } from 'redux-form';
import { Col } from 'react-bootstrap';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { validDate, maxChar250 } from '../../../utils/validators';

export function EditPeakForm(props) {
  function onSubmit(values) {
    const token = props.authToken;
    const userId = props.currentUser.uuid;
    const peakId = props.editPeak.uuid;
    const { dateClimbed, notes } = values;
    props.onUpdatePeak(token, userId, peakId, dateClimbed, notes);
  }

  if (props.submitSucceeded) {
    return (
      <Redirect to="/peak-list" />
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
      className="edit-peak-form"
    >
      {errorMessage}

      <Field
        name="dateClimbed"
        type="date"
        component={Input}
        label="Date"
        editValue={dateFormat(props.editPeak.dateClimbed, 'yyyy-mm-dd')}
        validate={[validDate]}
      />

      <Field
        name="notes"
        type="textarea"
        component={Input}
        editValue={props.editPeak.notes}
        label="Notes"
        maxLength="250"
        warn={[maxChar250]}
      />

      <Col xs={12} className="form-button" >
        <button
          type="submit"
          disabled={props.submitting}
        >
          Save
        </button>
      </Col>
    </form>
  );
}

EditPeakForm.propTypes = {
  submitting: PropTypes.bool,
  error: PropTypes.string,
  authToken: PropTypes.string,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    uuid: PropTypes.string
  }),
  editPeak: PropTypes.shape({
    uuid: PropTypes.string,
    peakName: PropTypes.string,
    dateClimbed: PropTypes.string,
    notes: PropTypes.string
  }),
  handleSubmit: PropTypes.func,
  onUpdatePeak: PropTypes.func,
  submitSucceeded: PropTypes.bool
};

EditPeakForm.defaultProps = {
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
