import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Meta />
        <Navbar />

        <div className="content-wrapper">
          { children }
        </div>

        <Footer />

        <style jsx>{`
          .content-wrapper {
            margin-top: 50px;
          }
        `}</style>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node
};
