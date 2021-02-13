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


React.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_stroke_7__WEBPACK_IMPORTED_MODULE_2__["Stroke7"], {
  name: "rocket"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 14
}, undefined), document.body);
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rocket, {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0cm9rZS03L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJGbGV4Qm94Iiwic3R5bGVkIiwiZGl2IiwiVXBwZXJMZWZ0Qm94IiwiVXBwZXJSaWdodEJveCIsIkJvZHkiLCJIZWFkZXJGbGV4Qm94IiwiRGVzY3JpcHRpb25Cb3giLCJEZXNjcmlwdGlvbiIsIk1lbnVCdXR0b24iLCJidXR0b24iLCJDb250ZW50Qm94IiwiSW5wdXRCb3giLCJNZW51QnV0dG9uU3ViIiwiWm9kS29vIiwiVHJ5QnV0dG9uIiwiU3RhcnRCdXR0b24iLCJNYWluIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcs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Q0Q7O09BQU1GLEk7QUFzQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkMGU5ZTQ0YzA3ZThhOWM1MjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKipcbiAqIEEgUmVhY3QgY29tcG9uZW50IGZvciB0aGUgZm9udC1hd2Vzb21lIGljb24gbGlicmFyeS5cbiAqXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYm9yZGVyPWZhbHNlXSBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGEgYm9yZGVyIHJhZGl1c1xuICogQHBhcmFtIHtTdHJpbmd9IFtjbGFzc05hbWVdIEFuIGV4dHJhIHNldCBvZiBDU1MgY2xhc3NlcyB0byBhZGQgdG8gdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtCb29sZWFufSBbZml4ZWRXaWR0aD1mYWxzZV0gTWFrZSBidXR0b25zIGZpeGVkIHdpZHRoXG4gKiBAcGFyYW0ge1N0cmluZ30gW2ZsaXA9ZmFsc2VdIEZsaXAgdGhlIGljb24ncyBvcmllbnRhdGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ludmVyc2U9ZmFsc2VdSW52ZXJzZSB0aGUgaWNvbidzIGNvbG9yXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtsaT1mYWxzZV0gSWNvbiByZXBsYWNlcyA8bGk+IGJ1bGxldHMgKGhhcyB0byBiZSB1c2VkIGluc2lkZSA8dWwgY2xhc3NOYW1lPSdwZS11bCc+IHRhZ3MpXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBpY29uIHRvIHVzZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtyb3RhdGVdIFRoZSBkZWdyZXNzIHRvIHJvdGF0ZSB0aGUgaWNvbiBieVxuICogQHBhcmFtIHtTdHJpbmd9IFtzaXplXSBUaGUgaWNvbiBzY2FsaW5nIHNpemVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NwaW49ZmFsc2VdIFNwaW4gdGhlIGljb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ZhPWZhbHNlXSBBbGlnbiBhdCB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XG4gKiBAcGFyYW0ge1N0cmluZ30gW3N0YWNrXSBTdGFjayBhbiBpY29uIG9uIHRvcCBvZiBhbm90aGVyXG4gKiBAbW9kdWxlIFN0cm9rZTdcbiAqIEB0eXBlIHtSZWFjdENsYXNzfVxuICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdTdHJva2U3JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBib3JkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpeGVkV2lkdGg6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmbGlwOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcbiAgICBpbnZlcnNlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgbGk6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJvdGF0ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbOTAsIDE4MCwgMjcwXSksXG4gICAgc2l6ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2xnJywgJzJ4JywgJzN4JywgJzR4JywgJzV4J10pLFxuICAgIHNwaW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzdGFjazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJzF4JywgJzJ4J10pLFxuICAgIHZhOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYm9yZGVyID0gX3Byb3BzLmJvcmRlcjtcbiAgICB2YXIgZml4ZWRXaWR0aCA9IF9wcm9wcy5maXhlZFdpZHRoO1xuICAgIHZhciBmbGlwID0gX3Byb3BzLmZsaXA7XG4gICAgdmFyIGludmVyc2UgPSBfcHJvcHMuaW52ZXJzZTtcbiAgICB2YXIgbmFtZSA9IF9wcm9wcy5uYW1lO1xuICAgIHZhciByb3RhdGUgPSBfcHJvcHMucm90YXRlO1xuICAgIHZhciBzaXplID0gX3Byb3BzLnNpemU7XG4gICAgdmFyIHNwaW4gPSBfcHJvcHMuc3BpbjtcbiAgICB2YXIgc3RhY2sgPSBfcHJvcHMuc3RhY2s7XG4gICAgdmFyIGxpID0gX3Byb3BzLmxpO1xuICAgIHZhciB2YSA9IF9wcm9wcy52YTtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnYm9yZGVyJywgJ2ZpeGVkV2lkdGgnLCAnZmxpcCcsICdpbnZlcnNlJywgJ25hbWUnLCAncm90YXRlJywgJ3NpemUnLCAnc3BpbicsICdzdGFjaycsICdsaScsICd2YSddKTtcblxuICAgIHZhciBjbGFzc05hbWUgPSAncGUtN3MtJyArIG5hbWU7XG5cbiAgICBpZiAoc2l6ZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtJyArIHNpemU7XG4gICAgfVxuXG4gICAgaWYgKHNwaW4pIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLXNwaW4nO1xuICAgIH1cblxuICAgIGlmIChib3JkZXIpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLWJvcmRlcic7XG4gICAgfVxuXG4gICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLWZ3JztcbiAgICB9XG5cbiAgICBpZiAoaW52ZXJzZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtaW52ZXJzZSc7XG4gICAgfVxuXG4gICAgaWYgKGZsaXApIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLWZsaXAtJyArIGZsaXA7XG4gICAgfVxuXG4gICAgaWYgKHJvdGF0ZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtcm90YXRlLScgKyByb3RhdGU7XG4gICAgfVxuXG4gICAgaWYgKHN0YWNrKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1zdGFjay0nICsgc3RhY2s7XG4gICAgfVxuXG4gICAgaWYgKHZhKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS12YSc7XG4gICAgfVxuXG4gICAgaWYgKGxpKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1saSc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0pKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFN0cm9rZTcgfSBmcm9tICdyZWFjdC1zdHJva2UtNyc7XHJcblJlYWN0LnJlbmRlcig8U3Ryb2tlNyBuYW1lPSdyb2NrZXQnIC8+LCBkb2N1bWVudC5ib2R5KTtcclxuXHJcblxyXG5jb25zdCBGbGV4Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG5gXHJcbmNvbnN0IFVwcGVyTGVmdEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOjIwJTsgcGFkZGluZzoyMHB4O1xyXG5gXHJcbmNvbnN0IFVwcGVyUmlnaHRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuYFxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmJvZHlgXHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBIZWFkZXJGbGV4Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25Cb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDo1MHB4OyBcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxyXG4gICAgcGFkZGluZy10b3A6NzVweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOiA2MCU7IFxyXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29udGVudEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgcGFkZGluZzozMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6MzBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMnB4IDQ1cHggLTE1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5gXHJcblxyXG5jb25zdCBNZW51QnV0dG9uU3ViID0gc3R5bGVkKE1lbnVCdXR0b24pYFxyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbmBcclxuY29uc3QgWm9kS29vID0gc3R5bGVkKE1lbnVCdXR0b24pYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbmBcclxuY29uc3QgVHJ5QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiMwMWJmODY7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgXHJcbiAgICBib3JkZXI6d2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFN0YXJ0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxYmY4NjsgXHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lIDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb2R5PlxyXG4gICAgICAgICAgICA8SGVhZGVyRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDxVcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFpvZEtvbz5ab2RLb288L1pvZEtvbz5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbj5Ib21lPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPkZlYXR1cmU8L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+UGxhbnM8L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+Q2xpZW50czwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5QYWdlc+KWvDwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgIDwvVXBwZXJMZWZ0Qm94PlxyXG4gICAgICAgICAgICAgICAgPFVwcGVyUmlnaHRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+TG9naW48L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyeUJ1dHRvbj5UcnkgZm9yIEZyZWU8L1RyeUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVXBwZXJSaWdodEJveD5cclxuICAgICAgICAgICAgPC9IZWFkZXJGbGV4Qm94PlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb25Cb3g+XHJcbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLCBmb250U2l6ZTonMzBweCcsZm9udFdlaWdodDonMjAwJyx3aWR0aDonNzUlJ319PlpvZGtvbyBpcyBhIGZ1bGx5IHJlc3BvbnNpdmUgbGFuZGluZyBwYWdlIHRlbXBsYXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bGluZUhlaWdodDogJzI0cHgnLCBmb250U2l6ZTonMTZweCcsIG1hcmdpblRvcDonMTBweCcsIG1hcmdpbkJvdHRvbTonNTBweCcsIGZvbnRXZWlnaHQ6ICc0MDAnLHdpZHRoOic5NSUnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC43KSd9fT5cclxuICAgICAgICAgICAgICAgICAgICBab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSBidWlsdCB1c2luZyB0aGUgbGF0ZXN0IEJvb3RzdHJhcCBmcmFtZXdvcmsuIEl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy4gVGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+PFN0YXJ0QnV0dG9uPkdFVCBTVEFSVEVEPC9TdGFydEJ1dHRvbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6J21lZGl1bScsIGNvbG9yOid3aGl0ZScsIG1hcmdpbjogJzAgMjBweCcsIG9wYWNpdHk6JzAuNycsZm9udFNpemU6ICcxMnB4J319Pk9SPC9zcGFuPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPElucHV0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb2NrZXQgLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25Cb3g+XHJcblxyXG4gICAgICAgIDwvQm9keT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=