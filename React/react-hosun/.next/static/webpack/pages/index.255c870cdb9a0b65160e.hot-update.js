webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-stroke-7/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-stroke-7/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A React component for the font-awesome icon library.
 *
 *
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {Boolean} [li=false] Icon replaces <li> bullets (has to be used inside <ul className='pe-ul'> tags)
 * @param {String} name Name of the icon to use
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {Boolean} [va=false] Align at the middle of the text
 * @param {String} [stack] Stack an icon on top of another
 * @module Stroke7
 * @type {ReactClass}
 */

exports.default = _react2.default.createClass({

  displayName: 'Stroke7',

  propTypes: {
    border: _react2.default.PropTypes.bool,
    className: _react2.default.PropTypes.string,
    fixedWidth: _react2.default.PropTypes.bool,
    flip: _react2.default.PropTypes.oneOf(['horizontal', 'vertical']),
    inverse: _react2.default.PropTypes.bool,
    li: _react2.default.PropTypes.bool,
    name: _react2.default.PropTypes.string.isRequired,
    rotate: _react2.default.PropTypes.oneOf([90, 180, 270]),
    size: _react2.default.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    spin: _react2.default.PropTypes.bool,
    stack: _react2.default.PropTypes.oneOf(['1x', '2x']),
    va: _react2.default.PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var border = _props.border;
    var fixedWidth = _props.fixedWidth;
    var flip = _props.flip;
    var inverse = _props.inverse;
    var name = _props.name;
    var rotate = _props.rotate;
    var size = _props.size;
    var spin = _props.spin;
    var stack = _props.stack;
    var li = _props.li;
    var va = _props.va;

    var props = _objectWithoutProperties(_props, ['border', 'fixedWidth', 'flip', 'inverse', 'name', 'rotate', 'size', 'spin', 'stack', 'li', 'va']);

    var className = 'pe-7s-' + name;

    if (size) {
      className += ' pe-' + size;
    }

    if (spin) {
      className += ' pe-spin';
    }

    if (border) {
      className += ' pe-border';
    }

    if (fixedWidth) {
      className += ' pe-fw';
    }

    if (inverse) {
      className += ' pe-inverse';
    }

    if (flip) {
      className += ' pe-flip-' + flip;
    }

    if (rotate) {
      className += ' pe-rotate-' + rotate;
    }

    if (stack) {
      className += ' pe-stack-' + stack;
    }

    if (va) {
      className += ' pe-va';
    }

    if (li) {
      className += ' pe-li';
    }

    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    return _react2.default.createElement('span', _extends({}, props, {
      className: className
    }));
  }
});
module.exports = exports['default'];

/***/ }),

/***/ "./pages/main/index.tsx":
/*!******************************!*\
  !*** ./pages/main/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_stroke_7__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stroke-7 */ "./node_modules/react-stroke-7/lib/index.js");
/* harmony import */ var react_stroke_7__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stroke_7__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Bae Kyungmo\\OneDrive\\Desktop\\FrontEndStudy\\React\\react-hosun\\pages\\main\\index.tsx";


const FlexBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display : flex;
`;
_c = FlexBox;
const UpperLeftBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    width:20%; padding:20px;
`;
_c2 = UpperLeftBox;
const UpperRightBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    margin-right:20px;
`;
_c3 = UpperRightBox;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].body`
    margin:0;
    font-family: "Roboto", sans-serif;
    width:100%;
`;
_c4 = Body;
const HeaderFlexBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #01bf86;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`;
_c5 = HeaderFlexBox;
const DescriptionBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    margin-top:50px; 
    display:flex; 
    align-items:center; 
    padding-top:75px; 
    padding-bottom:150px;
    justify-content:space-around; 
    background-color:#01bf86;
    width:100%;
`;
_c6 = DescriptionBox;
const Description = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    width: 60%; 
    flex-direction : column;
    justify-content: space-between; 
    padding-top:50px;
`;
_c7 = Description;
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    margin-right:15px; 
    cursor: pointer;
    background-color:#01bf86;
    border: #01bf86;
    color:white;
    font-size: medium;
    :hover{
        color: #fff;
        opacity: 0.9;
    }
`;
_c8 = MenuButton;
const ContentBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    flex-direction:column; 
    width:50%; 
    padding:30px;
`;
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    padding:30px; 
    background-color:white; 
    color:gray;
    border-radius: 5px;
    align-items:center;
    width:300px;
    height:330px;
    box-shadow: 0px 22px 45px -15px rgba(0,0,0,0.5);
`;
_c9 = InputBox;
const MenuButtonSub = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuButton)`
    opacity: 0.7;
    scroll-behavior: smooth;
`;
_c10 = MenuButtonSub;
const ZodKoo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuButton)`
    margin-right:60px;
    font-weight: 600;
    font-size: larger;
`;
_c11 = ZodKoo;
const TryButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    border-radius: 400px; 
    font-weight:600;
    cursor: pointer;
    color:#01bf86; 
    background-color:white; 
    border:white;
    width: 100px;
    height: 30px;
    :hover{
        color: #fff ;
        background-color: transparent ;
        border: 2px solid #fff;
    }
`;
_c12 = TryButton;
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    background-color:#01bf86; 
    color:white; 
    height: 40px; 
    width: 150px;
    border-radius: 400px;
    border-color:white;
    font-weight:600;
    border-style: solid;
    border-width: medium;
    cursor: pointer;
    :hover{
        background-color: #fff ;
        border: 2px solid #fff ;
        color: #01bf86 ;
        text-decoration: none;
        outline: none ;
        transition: all 0.4s;
    }
`;
_c13 = StartButton;

const Main = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Body, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderFlexBox, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
          children: "ZodKoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Feature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Plans"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Clients"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Pages\u25BC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
          children: "Try for Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DescriptionBox, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            color: 'white',
            fontSize: '30px',
            fontWeight: '200',
            width: '75%'
          },
          children: "Zodkoo is a fully responsive landing page template"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            lineHeight: '24px',
            fontSize: '16px',
            marginTop: '10px',
            marginBottom: '50px',
            fontWeight: '400',
            width: '95%',
            color: 'rgba(255,255,255,0.7)'
          },
          children: "Zodkoo is a fully responsive landing page built using the latest Bootstrap framework. It's designed for describing your app, agency or business. The clean and well commented code allows easy customization of the theme."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StartButton, {
              children: "GET STARTED"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 34
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                fontSize: 'medium',
                color: 'white',
                margin: '0 20px',
                opacity: '0.7',
                fontSize: '12px'
              },
              children: "OR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 34
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_stroke_7__WEBPACK_IMPORTED_MODULE_2__["Rocket"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 9
  }, undefined);
};

_c14 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

$RefreshReg$(_c, "FlexBox");
$RefreshReg$(_c2, "UpperLeftBox");
$RefreshReg$(_c3, "UpperRightBox");
$RefreshReg$(_c4, "Body");
$RefreshReg$(_c5, "HeaderFlexBox");
$RefreshReg$(_c6, "DescriptionBox");
$RefreshReg$(_c7, "Description");
$RefreshReg$(_c8, "MenuButton");
$RefreshReg$(_c9, "InputBox");
$RefreshReg$(_c10, "MenuButtonSub");
$RefreshReg$(_c11, "ZodKoo");
$RefreshReg$(_c12, "TryButton");
$RefreshReg$(_c13, "StartButton");
$RefreshReg$(_c14, "Main");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0cm9rZS03L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsIlVwcGVyTGVmdEJveCIsIlVwcGVyUmlnaHRCb3giLCJCb2R5IiwiYm9keSIsIkhlYWRlckZsZXhCb3giLCJEZXNjcmlwdGlvbkJveCIsIkRlc2NyaXB0aW9uIiwiTWVudUJ1dHRvbiIsImJ1dHRvbiIsIkNvbnRlbnRCb3giLCJJbnB1dEJveCIsIk1lbnVCdXR0b25TdWIiLCJab2RLb28iLCJUcnlCdXR0b24iLCJTdGFydEJ1dHRvbiIsIk1haW4iLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIndpZHRoIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFNUI7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixX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QUFFLEtBQXpGO0FBQStGQyxpQkFBSyxFQUFDLEtBQXJHO0FBQTRHSCxpQkFBSyxFQUFFO0FBQW5ILFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFJSTtBQUFLLGVBQUssRUFBRTtBQUFDTyxtQkFBTyxFQUFDLE1BQVQ7QUFBZ0JDLHNCQUFVLEVBQUU7QUFBNUIsV0FBWjtBQUFBLGtDQUNJLHFFQUFDLE9BQUQ7QUFBQSxtQ0FBUyxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLE9BQUQ7QUFBQSxtQ0FBUztBQUFNLG1CQUFLLEVBQUU7QUFBQ1Asd0JBQVEsRUFBQyxRQUFWO0FBQW9CRCxxQkFBSyxFQUFDLE9BQTFCO0FBQW1DUyxzQkFBTSxFQUFFLFFBQTNDO0FBQXFEQyx1QkFBTyxFQUFDLEtBQTdEO0FBQW1FVCx3QkFBUSxFQUFFO0FBQTdFLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0kscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFZSSxxRUFBQyxRQUFEO0FBQUEsK0JBQ0kscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUNILENBcENEOztPQUFNRixJO0FBc0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNTVjODcwY2RiOWEwYjY1MTYwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLyoqXG4gKiBBIFJlYWN0IGNvbXBvbmVudCBmb3IgdGhlIGZvbnQtYXdlc29tZSBpY29uIGxpYnJhcnkuXG4gKlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JvcmRlcj1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gc2hvdyBhIGJvcmRlciByYWRpdXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbY2xhc3NOYW1lXSBBbiBleHRyYSBzZXQgb2YgQ1NTIGNsYXNzZXMgdG8gYWRkIHRvIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZpeGVkV2lkdGg9ZmFsc2VdIE1ha2UgYnV0dG9ucyBmaXhlZCB3aWR0aFxuICogQHBhcmFtIHtTdHJpbmd9IFtmbGlwPWZhbHNlXSBGbGlwIHRoZSBpY29uJ3Mgb3JpZW50YXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnZlcnNlPWZhbHNlXUludmVyc2UgdGhlIGljb24ncyBjb2xvclxuICogQHBhcmFtIHtCb29sZWFufSBbbGk9ZmFsc2VdIEljb24gcmVwbGFjZXMgPGxpPiBidWxsZXRzIChoYXMgdG8gYmUgdXNlZCBpbnNpZGUgPHVsIGNsYXNzTmFtZT0ncGUtdWwnPiB0YWdzKVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgaWNvbiB0byB1c2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcm90YXRlXSBUaGUgZGVncmVzcyB0byByb3RhdGUgdGhlIGljb24gYnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbc2l6ZV0gVGhlIGljb24gc2NhbGluZyBzaXplXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtzcGluPWZhbHNlXSBTcGluIHRoZSBpY29uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt2YT1mYWxzZV0gQWxpZ24gYXQgdGhlIG1pZGRsZSBvZiB0aGUgdGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IFtzdGFja10gU3RhY2sgYW4gaWNvbiBvbiB0b3Agb2YgYW5vdGhlclxuICogQG1vZHVsZSBTdHJva2U3XG4gKiBAdHlwZSB7UmVhY3RDbGFzc31cbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnU3Ryb2tlNycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYm9yZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaXhlZFdpZHRoOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgZmxpcDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG4gICAgaW52ZXJzZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIGxpOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByb3RhdGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWzkwLCAxODAsIDI3MF0pLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydsZycsICcyeCcsICczeCcsICc0eCcsICc1eCddKSxcbiAgICBzcGluOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RhY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWycxeCcsICcyeCddKSxcbiAgICB2YTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGJvcmRlciA9IF9wcm9wcy5ib3JkZXI7XG4gICAgdmFyIGZpeGVkV2lkdGggPSBfcHJvcHMuZml4ZWRXaWR0aDtcbiAgICB2YXIgZmxpcCA9IF9wcm9wcy5mbGlwO1xuICAgIHZhciBpbnZlcnNlID0gX3Byb3BzLmludmVyc2U7XG4gICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcbiAgICB2YXIgcm90YXRlID0gX3Byb3BzLnJvdGF0ZTtcbiAgICB2YXIgc2l6ZSA9IF9wcm9wcy5zaXplO1xuICAgIHZhciBzcGluID0gX3Byb3BzLnNwaW47XG4gICAgdmFyIHN0YWNrID0gX3Byb3BzLnN0YWNrO1xuICAgIHZhciBsaSA9IF9wcm9wcy5saTtcbiAgICB2YXIgdmEgPSBfcHJvcHMudmE7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2JvcmRlcicsICdmaXhlZFdpZHRoJywgJ2ZsaXAnLCAnaW52ZXJzZScsICduYW1lJywgJ3JvdGF0ZScsICdzaXplJywgJ3NwaW4nLCAnc3RhY2snLCAnbGknLCAndmEnXSk7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gJ3BlLTdzLScgKyBuYW1lO1xuXG4gICAgaWYgKHNpemUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLScgKyBzaXplO1xuICAgIH1cblxuICAgIGlmIChzcGluKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1zcGluJztcbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1ib3JkZXInO1xuICAgIH1cblxuICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1mdyc7XG4gICAgfVxuXG4gICAgaWYgKGludmVyc2UpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLWludmVyc2UnO1xuICAgIH1cblxuICAgIGlmIChmbGlwKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1mbGlwLScgKyBmbGlwO1xuICAgIH1cblxuICAgIGlmIChyb3RhdGUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLXJvdGF0ZS0nICsgcm90YXRlO1xuICAgIH1cblxuICAgIGlmIChzdGFjaykge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtc3RhY2stJyArIHN0YWNrO1xuICAgIH1cblxuICAgIGlmICh2YSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtdmEnO1xuICAgIH1cblxuICAgIGlmIChsaSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtbGknO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBSb2NrZXQgfSBmcm9tICdyZWFjdC1zdHJva2UtNyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEZsZXhCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbmBcclxuY29uc3QgVXBwZXJMZWZ0Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6MjAlOyBwYWRkaW5nOjIwcHg7XHJcbmBcclxuY29uc3QgVXBwZXJSaWdodEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG5gXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuYm9keWBcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IEhlYWRlckZsZXhCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbkJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7IFxyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXRvcDo3NXB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOjE1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6IDYwJTsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG5gXHJcblxyXG5cclxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuYFxyXG5jb25zdCBDb250ZW50Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBcclxuICAgIHdpZHRoOjUwJTsgXHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbmBcclxuY29uc3QgSW5wdXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzozMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7IFxyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OjMzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDIycHggNDVweCAtMTVweCByZ2JhKDAsMCwwLDAuNSk7XHJcbmBcclxuXHJcbmNvbnN0IE1lbnVCdXR0b25TdWIgPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuYFxyXG5jb25zdCBab2RLb28gPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBtYXJnaW4tcmlnaHQ6NjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuYFxyXG5jb25zdCBUcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzAxYmY4NjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGJvcmRlcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3RhcnRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2OyBcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmIDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJvZHk+XHJcbiAgICAgICAgICAgIDxIZWFkZXJGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPFVwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8Wm9kS29vPlpvZEtvbzwvWm9kS29vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uPkhvbWU8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+RmVhdHVyZTwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5QbGFuczwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5DbGllbnRzPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPlBhZ2Vz4pa8PC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICA8VXBwZXJSaWdodEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5Mb2dpbjwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJ5QnV0dG9uPlRyeSBmb3IgRnJlZTwvVHJ5QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICA8L0hlYWRlckZsZXhCb3g+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbkJveD5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGZvbnRTaXplOiczMHB4Jyxmb250V2VpZ2h0OicyMDAnLHdpZHRoOic3NSUnfX0+Wm9ka29vIGlzIGEgZnVsbHkgcmVzcG9uc2l2ZSBsYW5kaW5nIHBhZ2UgdGVtcGxhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiAnMjRweCcsIGZvbnRTaXplOicxNnB4JywgbWFyZ2luVG9wOicxMHB4JywgbWFyZ2luQm90dG9tOic1MHB4JywgZm9udFdlaWdodDogJzQwMCcsd2lkdGg6Jzk1JScsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFpvZGtvbyBpcyBhIGZ1bGx5IHJlc3BvbnNpdmUgbGFuZGluZyBwYWdlIGJ1aWx0IHVzaW5nIHRoZSBsYXRlc3QgQm9vdHN0cmFwIGZyYW1ld29yay4gSXQncyBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLiBUaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48U3RhcnRCdXR0b24+R0VUIFNUQVJURUQ8L1N0YXJ0QnV0dG9uPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+PHNwYW4gc3R5bGU9e3tmb250U2l6ZTonbWVkaXVtJywgY29sb3I6J3doaXRlJywgbWFyZ2luOiAnMCAyMHB4Jywgb3BhY2l0eTonMC43Jyxmb250U2l6ZTogJzEycHgnfX0+T1I8L3NwYW4+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvY2tldCAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEJveD5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbkJveD5cclxuXHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==