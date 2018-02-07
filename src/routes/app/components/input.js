import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import { Col } from 'react-bootstrap';
import './input.css';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.props.input.onFocus();
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

    // sort function for peak options
    function sortPeakNames(peakNames) {
      peakNames.sort((a, b) => {
        const nameA = a.peakName;
        const nameB = b.peakName;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    // setup select options for drop down select field
    let selectOptions;
    if (this.props.options) {
      const { options } = this.props;

      const peakNames = options.map((peak) => {
        const peakObj = {};
        peakObj.peakName = peak.attributes.peak_name;
        peakObj.peakId = peak.id;
        return peakObj;
      });

      sortPeakNames(peakNames);

      selectOptions = peakNames.map((peak) => {
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
              name={this.props.input.name}
              onBlur={this.props.input.onBlur}
              onChange={this.props.input.onChange}
              onDragStart={this.props.input.onDragStart}
              onDrop={this.props.input.onDrop}
              onFocus={this.props.input.onFocus}
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

    // use Textarea react component if element is textarea type
    if (Element === 'textarea') {
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
            <Textarea
              name={this.props.input.name}
              onBlur={this.props.input.onBlur}
              onChange={this.props.input.onChange}
              onDragStart={this.props.input.onDragStart}
              onDrop={this.props.input.onDrop}
              onFocus={this.props.input.onFocus}
              id={this.props.input.name}
              type={this.props.type}
              ref={input => (this.input = input)}
              defaultValue={this.props.editValue}
              disabled={this.props.disabled}
              maxLength={this.props.maxLength}
            />
          </Col>
        </Col>
      );
    }

    // if standard input return input element
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
            name={this.props.input.name}
            onBlur={this.props.input.onBlur}
            onChange={this.props.input.onChange}
            onDragStart={this.props.input.onDragStart}
            onDrop={this.props.input.onDrop}
            onFocus={this.props.input.onFocus}
            id={this.props.input.name}
            type={this.props.type}
            ref={input => (this.input = input)}
            defaultValue={this.props.editValue}
            disabled={this.props.disabled}
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
  options: PropTypes.array
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
  options: []
};
