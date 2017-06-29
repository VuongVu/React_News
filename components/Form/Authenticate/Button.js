import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { className, content, icon } = this.props;

    return (
      <div className="pt-form-group">
        <div className="pt-form-content">
          <button className={className}>
            {content}
            <span className={icon}></span>
          </button>
        </div>
      </div>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string
};
