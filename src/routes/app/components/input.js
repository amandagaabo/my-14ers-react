import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import './input.css';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    // set element type
    let Element = 'input';
    if (this.props.type === 'select') {
      Element = 'select';
    }
    if (this.props.type === 'textarea') {
      Element = 'textarea';
    }

    // get error and warning messages
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

    // setup select options for drop down select field
    let selectOptions;
    if (this.props.options) {
      const { options } = this.props;
      selectOptions = options.map((peak) => {
        return (
          <option key={peak.peakId} value={peak.peakName}>{peak.peakName}</option>
        );
      });
    }

    // add options if element is select type
    if (Element === 'select') {
      return (
        <Col className="form-input" xs={12}>
          <Col xs={12} >
            <label htmlFor={this.props.input.name}>
              {this.props.label}
              {error}
              {warning}
            </label>
          </Col>

          <Col xs={12} >
            <Element
              {...this.props.input}
              id={this.props.input.name}
              type={this.props.type}
              ref={input => (this.input = input)}
            >
              <option />
              {selectOptions}
            </Element>
          </Col>
        </Col>
      );
    }

    return (
      <Col className="form-input" xs={12}>
        <Col xs={12} >
          <label htmlFor={this.props.input.name}>
            {this.props.label}
            {error}
            {warning}
          </label>
        </Col>

        <Col xs={12} >
          <Element
            {...this.props.input}
            id={this.props.input.name}
            type={this.props.type}
            ref={input => (this.input = input)}
          />
        </Col>
      </Col>
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
  options: PropTypes.array,
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
  options: [],
};
