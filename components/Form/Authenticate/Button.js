import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { type, className, content, icon } = this.props;

    return (
      <div className="pt-form-group">
        <div className="pt-form-content">
          <button type={type} className={className}>
            {content}
            <span className={icon}></span>
          </button>
        </div>
      </div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string
};
