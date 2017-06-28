"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Projects\\Next_News\\components\\Navbar.js";

exports.default = function () {
  return _react2.default.createElement("nav", { className: "pt-navbar pt-fixed-top pt-dark", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "pt-navbar-group pt-align-left", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("div", { className: "pt-navbar-heading", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Life Stories")), _react2.default.createElement("div", { className: "pt-navbar-group pt-align-right", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(NavItem, {
    href: "/",
    className: "pt-button pt-minimal pt-icon-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Home"), _react2.default.createElement(NavItem, {
    href: "/stories",
    className: "pt-button pt-minimal pt-icon-book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Stories"), _react2.default.createElement(NavItem, {
    href: "/new-story",
    className: "pt-button pt-minimal pt-icon-manually-entered-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Write a story"), _react2.default.createElement("span", { className: "pt-navbar-divider", __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement(NavItem, {
    href: "/sign-up",
    className: "pt-button pt-minimal pt-icon-new-person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Sign up"), _react2.default.createElement(NavItem, {
    href: "/sign-in",
    className: "pt-button pt-minimal pt-icon-log-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Sign in")));
};

var NavItem = function NavItem(_ref) {
  var href = _ref.href,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(_link2.default, { href: href, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement("button", { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, children));
};