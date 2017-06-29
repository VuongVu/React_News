import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormLayout extends Component {
  render() {
    const { avatar, children } = this.props;

    return (
      <div>
        <div className="container">
          <div className="middle">
            {avatar}
            <div className="pt-card pt-elevation-1 pt-interactive modal-content">
              {children}
            </div>
          </div>
        </div>

        <style jsx>{`
          .container {
            padding-top: 30px;
            display: table;
            position: absolute;
            width: 100%;
          }

          .middle {
            display: table-cell;
            vertical-align: middle;
          }

          .modal-content {
            margin-left: auto;
            margin-right: auto; 
            width: 23%;            
          }
        `}</style>
      </div>
    );
  }
}

FormLayout.propTypes = {
  avatar: PropTypes.node,
  children: PropTypes.node.isRequired
};
