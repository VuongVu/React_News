'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\Next_News\\components\\Meta.js';


_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

exports.default = function () {
  return _react2.default.createElement('div', {
    'data-jsx': 1868554976,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', 'data-jsx': 1868554976,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge', 'data-jsx': 1868554976,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('meta', { charset: 'utf-8', 'data-jsx': 1868554976,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/images/favicon.ico', 'data-jsx': 1868554976,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { href: 'https://unpkg.com/normalize.css@^4.1.1', rel: 'stylesheet', 'data-jsx': 1868554976,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('link', { href: 'https://unpkg.com/@blueprintjs/core@^1.21.0/dist/blueprint.css', rel: 'stylesheet', 'data-jsx': 1868554976,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 1868554976,
    css: '#nprogress{pointer-events:none}#nprogress .bar{background:#C23030;position:fixed;z-index:1031;top:0;left:0;width:100%;height:3px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #C23030, 0 0 5px #C23030;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px, -4px);-ms-transform:rotate(3deg) translate(0px, -4px);transform:rotate(3deg) translate(0px, -4px)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1ldGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J1QixBQUk2QixBQUVELEFBRUwsZUFBMkIsS0FGRSxDQUZoQixhQUlpQyxFQUZLLFNBRWdCLEtBRkQsT0FBZ0IsQ0FFTSxPQUZjLE1BRXdDLE1BRnBCLFlBQU8sNEJBRWtDLGFBQXFELG1KQUFPIiwiZmlsZSI6ImNvbXBvbmVudHNcXE1ldGEuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvTmV4dF9OZXdzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxyXG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIi8+XHJcbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiLz5cclxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljb1wiLz5cclxuXHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9ub3JtYWxpemUuY3NzQF40LjEuMVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9AYmx1ZXByaW50anMvY29yZUBeMS4yMS4wL2Rpc3QvYmx1ZXByaW50LmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXHJcbiAgICAgICNucHJvZ3Jlc3Mge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbnByb2dyZXNzIC5iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDMjMwMzA7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMzE7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjQzIzMDMwLCAwIDAgNXB4ICNDMjMwMzA7XHJcbiAgICAgICAgb3BhY2l0eTogMS4wO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcbiJdfQ== */\n/*@ sourceURL=components\\Meta.js */'
  }));
};