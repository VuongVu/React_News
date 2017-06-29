import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default class NavItem extends Component {
  render() {
    const { href, className, children } = this.props;

    return (
      <Link href={href}>
        <button className={className}>{children}</button>
      </Link>
    );
  }
}

NavItem.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
