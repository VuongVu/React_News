'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Meta = require('./Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\Next_News\\components\\Layout.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    'data-jsx': 3601422574,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_Meta2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement(_Navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('div', { className: 'content-wrapper', 'data-jsx': 3601422574,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, children), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 3601422574,
    css: '.content-wrapper[data-jsx="3601422574"]{margin-top:50px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlZ0IsQUFHeUIsaUJBQU8iLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL05leHRfTmV3cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXRhIGZyb20gJy4vTWV0YSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPE1ldGEgLz5cclxuICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTsiXX0= */\n/*@ sourceURL=components\\Layout.js */'
  }));
};