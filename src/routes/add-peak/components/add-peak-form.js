import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import Input from '../../app/components/input';
import { addPeak } from './../../../modules/peaks/actions';
import { required, nonEmpty, validDate, maxChar250 } from '../../../utils/validators';

export class AddPeakForm extends React.Component {
  onSubmit(values) {
    const token = this.props.authToken;
    const userId = this.props.currentUser.uuid;
    const { peakName, dateClimbed } = values;
    const notes = values.notes ? values.notes : '';

    return this.props.dispatch(addPeak(token, userId, peakName, dateClimbed, notes))
      .then(() => {
        window.location.href = '/peak-list';
      });
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
        className="add-peak-form"
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

        <Col xs={12} className="loader">
          <ClipLoader
            color="#1E4899"
            loading={this.props.loading}
          />
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
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

AddPeakForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: '',
  allPeaks: [],
  authToken: null,
  currentUser: null
};

export default reduxForm({
  form: 'add-peak',
  onSubmitFail: (errors, dispatch) => {
    if (errors) {
      dispatch(focus('add-peak', Object.keys(errors)[0]));
    }
  },
})(AddPeakForm);
