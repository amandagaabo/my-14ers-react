import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }
  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <input
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}

Input.propTypes = {
  meta: PropTypes.shape({
    active: PropTypes.bool,
    touched: PropTypes.bool,
    warning: PropTypes.string,
    error: PropTypes.string,
  }),
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
  }),
  element: PropTypes.string,
};

Input.defaultProps = {
  meta: {
    active: false,
    touched: false,
    warning: '',
    error: '',
  },
  label: '',
  type: 'text',
  input: {
    name: '',
  },
  element: 'input',
};
