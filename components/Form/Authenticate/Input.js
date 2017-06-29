import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends Component {
  render() {
    const {
      label,
      inputIcon,
      inputType,
      inputClass,
      helperText
    } = this.props;

    return (
      <div className="pt-form-group">
        <label className="pt-label">{label}</label>
        <div className="pt-form-content">
          <div className="pt-input-group">
            <span className={inputIcon}></span>
            <input className={inputClass} type={inputType} dir="auto"/>
          </div>
          <div className="pt-form-helper-text">{helperText}</div>
        </div>
      </div>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string,
  inputIcon: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  helperText: PropTypes.string
};
