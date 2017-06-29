import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormHeader extends Component {
  render() {
    const { title, subTitle } = this.props;

    return (
      <div>
        <h2 className="text-center">{title}</h2>
        <p className="text-center pt-ui-text-large">{subTitle}</p>

        <style jsx>{`
          .text-center {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};
