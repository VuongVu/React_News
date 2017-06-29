import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
  render() {
    const { url, alt } = this.props;
    return (
      <div>
        <div className="avatar">
          <img src={url} alt={alt}/>
        </div>

        <style jsx>{`
          .avatar {
            text-align: center;
            margin: 12px 0 12px 0;
          }
        `}</style>
      </div>
    );
  }
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string
};
