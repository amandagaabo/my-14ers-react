import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import PropTypes from 'prop-types';
import Input from '../../app/components/input';
import { required, nonEmpty } from '../../../utils/validators';

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

    const selectOptions = this.props.peakNames.map(peak => {
      return (
        <option key={peak.id} value={peak.name}>{peak.name}</option>
      );
    });

    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values),
        )}
      >
        {errorMessage}

        <label>Peak</label>
        <Field
          name="peakName"
          type="select"
          component="select"
          validate={[required, nonEmpty]}
        >
          <option></option>
          {selectOptions}
        </Field>


        <Field
          name="dateClimbed"
          element="date"
          component={Input}
          label="Date"
          validate={[required, nonEmpty]}
        />

        <Field
          name="notes"
          type="textarea"
          component={Input}
          label="Notes"
        />

        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Add
        </button>

      </form>
    );
  }
}

AddPeakForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  submitSucceeded: PropTypes.bool,
  handleSubmit: PropTypes.func,
  peakNames: PropTypes.array,
};

AddPeakForm.defaultProps = {
  pristine: true,
  submitting: false,
  error: '',
  handleSubmit: () => console.log('form submitted'),
  peakNames: [],
};

export default reduxForm({
  form: 'add-peak',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-peak', Object.keys(errors)[0])),
})(AddPeakForm);
