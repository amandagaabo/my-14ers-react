import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { required, nonEmpty, validDate } from '../../../utils/validators';

export class AddPeakForm extends React.Component {
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
  handleSubmit: PropTypes.func,
  allPeaks: PropTypes.array,
};

AddPeakForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: '',
  handleSubmit: () => console.log('form submitted'),
  allPeaks: [],
};

export default reduxForm({
  form: 'add-peak',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-peak', Object.keys(errors)[0])),
})(AddPeakForm);
