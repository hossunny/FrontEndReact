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
    display:flex;
    flex-direction:column;
    margin:0px;
    font-family: "Roboto", sans-serif;
    width:100%;
`;
_c4 = Body;
const HeaderDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
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
_c5 = HeaderDiv;
const DescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    margin-top:50px; 
    display:flex; 
    align-items:center; 
    padding-top:75px; 
    padding-bottom:150px;
    justify-content:space-around; 
    background-color:#01bf86;
    width:100%;
`;
_c6 = DescriptionDiv;
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
const FlexBox2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    flex-direction:column;
    align-items:center;
`;
_c10 = FlexBox2;
const MenuButtonSub = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuButton)`
    opacity: 0.7;
    scroll-behavior: smooth;
`;
_c11 = MenuButtonSub;
const ZodKoo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuButton)`
    margin-right:60px;
    font-weight: 600;
    font-size: larger;
`;
_c12 = ZodKoo;
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
_c13 = TryButton;
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
_c14 = StartButton;
const InputThing = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
    margin-bottom: 20px;
    width:100%;
    height: 30px;
    border: 1px solid #eee;
    padding-left: 10px;
    color: grey;
`;
_c15 = InputThing;
const InputSubscribe = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
    background-color: transparent;
    color: white; 
    opacity:0.5;
    border: 2px solid rgba(255,255,255,0.4);
    height: 50px;
    width: 600px;
    padding-left: 20px;
    box-shadow: none;
    border-width: medium;
    margin-bottom: 30px;
    font-size: 16px;
`;
_c16 = InputSubscribe;
const StartNowButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    color: white;
    background-color: #01bf86;
    cursor: pointer;
    border: #01bf86;
    height: 40px;
    font-weight: 600;
    margin-top: 5px;
    border-radius: 400px;
    margin-bottom:10px;
    width:300px;
    :hover{
        background-color: transparent ;
        border: 2px solid #01bf86 ;
        color: #01bf86 ;
        box-shadow: none ;
    }
`;
_c17 = StartNowButton;
const CommonButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    color: white;
    background-color: #01bf86;
    border: #01bf86;
    width: 150px;font-weight: 600;
    height: 40px;border-radius: 400px;
    cursor: pointer;
    :hover{
        background-color: transparent ;
        border: 2px solid #01bf86 ;
        color: #01bf86 ;
        box-shadow: none ;
    }
`;
_c18 = CommonButton;
const ProductDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    margin-top: 120px;
    margin-bottom:100px;
`;
_c19 = ProductDiv;
const TextStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color:#496174; 
    font-size:22px; 
    font-weight:600;
`;
_c20 = TextStyle;
const TextStyle2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color: ${props => props.inputColor || "#496174"}; 
    font-size:22px; 
    font-weight:600;
`;
_c21 = TextStyle2;
const TextStyleSub2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: ${props => props.inputColor || "#95A8B7"}; 
    text-align: center;
`;
_c22 = TextStyleSub2;
const TextStyleSub = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: #95A8B7;
    text-align: center;
`;
_c23 = TextStyleSub;
const SpecificationDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    background-color: #f3f6fa; 
    border-top: 1px solid #e8eef6; 
    border-bottom: 1px solid #e8eef6;
`;
_c24 = SpecificationDiv;
const DisplayDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    margin-top: 50px;
    justify-content: center; 
    margin-bottom: 100px;
    margin-left:300px;
    margin-right:300px;
`;
_c25 = DisplayDiv;
const MiniBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    align-items: center;
    text-align: center;
`;
_c26 = MiniBox;
const MiniBoxFeature = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    padding: 20px;
    margin-top: 20px;
`;
_c27 = MiniBoxFeature;
const SpecTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    font-size: 18px;
    color:#496174;
    font-weight:600;
`;
_c28 = SpecTitle;
const SpecText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color: #95A8B7 !important;
    width:80%;
    font-size: 14px;
    text-align: center;
`;
_c29 = SpecText;
const PriceDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    padding-bottom: 80px;
`;
_c30 = PriceDiv;
const PriceMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    position: relative;
    width: 220px;
    max-width: 320px; 
    margin-right: 20px;
    padding: 0px 30px 50px;
    margin-top:50px; 
    margin-bottom:40px;
    border: 2px solid #95A8B7;
`;
_c31 = PriceMenu;
const PriceClass = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 16px; 
    padding: 30px 20px 25px;
`;
_c32 = PriceClass;
const PriceTitle1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color:#01bf86;
    font-size: 16px; 
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: 600;
`;
_c33 = PriceTitle1;
const PriceTitle2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    font-size: 38px;
    color:#496174;
    margin-bottom: 10px; 
    margin-bottom:10px;
    margin-top:0px;
    font-weight: 700;
`;
_c34 = PriceTitle2;
const PriceTitle3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    width:100%;
    opacity:0.5; 
    margin-top:0;
    font-size: 13px;
`;
_c35 = PriceTitle3;
const PriceDetail = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    font-size: 13px;
`;
_c36 = PriceDetail;
const SponsorDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    background-color: #f3f6fa ;
    border-top: 1px solid #e8eef6;
    border-bottom: 1px solid #e8eef6;
    padding-top: 100px;
    padding-bottom: 80px;
`;
_c37 = SponsorDiv;
const ReviewText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    line-height: 24px;
    font-size: 14px;
    font-style: italic;
    color: #95A8B7;
`;
_c38 = ReviewText;
const ReviewBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    border-radius: 5px;width: 90%;
    padding: 10px 30px 20px 30px;
    margin-bottom: 30px;
    position: relative;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(221,221,221,0.32);
`;
_c39 = ReviewBox;
const ContactDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    padding-top: 100px; 
    padding-bottom: 80px;
    background-color: #01bf86;
`;
_c40 = ContactDiv;
const SubscribeButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    color:#01bf86; width: 150px;cursor: pointer;
    height: 40px; font-weight: 600;border:white;border-radius: 400px;
    background-color:white;
    :hover{
        color: #fff ;
        background-color: transparent ;
        border: 2px solid #fff;
    }
`;
_c41 = SubscribeButton;
const SupportDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #2f3e47;
`;
_c42 = SupportDiv;
const BottomEtc = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color: rgba(255,255,255,0.4);
    font-size:14px;
    margin-bottom: 5px;
    margin-top: 5px;
    :hover{
        color: rgba(255,255,255,0.6);
        cursor:pointer;
    }
`;
_c43 = BottomEtc;

const Main = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Body, {
    style: {
      margin: '0',
      paddingBottom: '300px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
          children: "ZodKoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Feature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Plans"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Clients"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Pages\u25BC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
          children: "Try for Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DescriptionDiv, {
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
          lineNumber: 358,
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
          lineNumber: 359,
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
              lineNumber: 362,
              columnNumber: 34
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                fontSize: 'medium',
                color: 'white',
                margin: '0 20px',
                opacity: '0.7'
              },
              children: "OR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 34
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              style: {
                color: 'white',
                border: '#01bf86',
                cursor: 'pointer',
                backgroundColor: '#01bf86',
                fontSize: '15px',
                fontWeight: '600'
              },
              children: "WATCH VIDEO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 34
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: '#778fa2',
              fontWeight: '600',
              fontSize: '20px',
              marginBottom: '30px',
              marginTop: '0px'
            },
            children: "REGISTER FOR FREE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
            placeholder: "Full name",
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
            placeholder: "Email Address",
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
            placeholder: "User name",
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
            placeholder: "Password",
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            style: {
              width: '100%'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StartNowButton, {
              children: "START NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                fontSize: '12px',
                opacity: '0.7',
                whiteSpace: 'pre'
              },
              children: "By registering you agree to the Zodkoo "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                fontSize: '12px',
                opacity: '0.7',
                color: 'blue'
              },
              children: "Terms of Use"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          style: {
            marginBottom: '70px'
          },
          children: "Clean and Ultra Modern Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          width: '60%',
          justifyContent: 'space-evenly'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          style: {
            flexDirection: 'column',
            width: '40%'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontWeight: '300',
              lineHeight: '28px',
              color: '#95A8B7',
              fontSize: '18px'
            },
            children: "Praesent et viverra massa non varius magna eget nibh vitae velit posuere efficitur."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              marginTop: '5px',
              marginBottom: '20px',
              lineHeight: '26px',
              color: '#95A8B7',
              fontSize: '14px'
            },
            children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.We put a lot of effort in design, as it\u2019s the most important ingredient of successful website.Sed ut perspiciatis unde omnis iste natus error sit.We put a lot of effort in design, as it\u2019s the most important ingredient of successful website."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
            children: "LEARN MORE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/macbook.png",
            width: "650px",
            height: "350px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecificationDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        style: {
          marginTop: '100px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          children: "It's designed for describing your app, agency or business"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DisplayDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 432,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        style: {
          marginBottom: '40px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          children: "Choose your perfect plan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          alignItems: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "BASIC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$19"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            style: {
              flexDirection: 'column',
              marginBottom: '30px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 460,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 463,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 462,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 466,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 469,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 458,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "PREMIUM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$29"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 477,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            style: {
              flexDirection: 'column',
              marginBottom: '30px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 482,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 485,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 484,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 488,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 487,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 491,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$39"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 497,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            style: {
              flexDirection: 'column',
              marginBottom: '30px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 504,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 503,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 507,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 506,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 510,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 509,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 513,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 512,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 502,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SponsorDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        style: {
          marginBottom: '100px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          children: "Trusted by Thousands"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 523,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          width: '80%',
          justifyContent: 'center',
          marginBottom: '70px',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/microsoft.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/google.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/instagram.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/converse.png",
          style: {
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          padding: '30px',
          width: '50%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginRight: '50px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewText, {
              children: "\u201C There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 535,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 534,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            style: {
              marginLeft: '20px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/user.jpg",
                style: {
                  borderRadius: '50%'
                },
                width: "60px",
                height: "60px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 541,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 540,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                flexDirection: 'column',
                marginLeft: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: '14px',
                  marginBottom: '0'
                },
                children: "Calebogden"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 544,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontWeight: '200',
                  color: '#95A8B7',
                  fontSize: '14px',
                  marginTop: '0'
                },
                children: "Another company , City"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 545,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 543,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 539,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginRight: '50px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewText, {
              children: "\u201C There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 551,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            style: {
              marginLeft: '20px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/user2.jpg",
                style: {
                  borderRadius: '50%'
                },
                width: "60px",
                height: "60px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 557,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 556,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                flexDirection: 'column',
                marginLeft: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: '14px',
                  marginBottom: '0'
                },
                children: "Calebogden"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 560,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontWeight: '200',
                  color: '#95A8B7',
                  fontSize: '14px',
                  marginTop: '0'
                },
                children: "Another company , City"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 561,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 559,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 555,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginRight: '50px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewText, {
              children: "\u201C There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 567,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
            style: {
              marginLeft: '20px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/user3.jpg",
                style: {
                  borderRadius: '50%'
                },
                width: "60px",
                height: "60px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 573,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 572,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                flexDirection: 'column',
                marginLeft: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: '14px',
                  marginBottom: '0'
                },
                children: "Calebogden"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 576,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontWeight: '200',
                  color: '#95A8B7',
                  fontSize: '14px',
                  marginTop: '0'
                },
                children: "Another company , City"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 577,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 575,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 571,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        style: {
          marginBottom: '30px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle2, {
          inputColor: "white",
          children: "Trusted by Thousands"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub2, {
          inputColor: "white",
          style: {
            opacity: '0.7'
          },
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputSubscribe, {
          type: "text",
          placeholder: "Enter e-mail address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubscribeButton, {
          children: "SUBSCRIBE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            fontSize: '12px',
            color: 'rgba(255,255,255,0.7)',
            marginTop: '3px'
          },
          children: "You can un-subscribe at any time."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SupportDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          width: '60%',
          justifyContent: 'space-evenly',
          marginBottom: '70px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          style: {
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Zodkoo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 599,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 600,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 601,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          style: {
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Social"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 606,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 607,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 608,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Dribbble"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 609,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          style: {
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 612,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Help & Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 613,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 614,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Terms & Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 615,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          style: {
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 618,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'rgba(255,255,255,0.4)',
              fontSize: '14px',
              marginBottom: '5px',
              marginTop: '5px'
            },
            children: "795 Folsom Ave, Suite 600"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'rgba(255,255,255,0.4)',
              fontSize: '14px',
              marginBottom: '5px',
              marginTop: '5px'
            },
            children: "San Francisco, CA 94107"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 620,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'rgba(255,255,255,0.4)',
              fontSize: '14px',
              marginBottom: '5px',
              marginTop: '5px'
            },
            children: "P: (123) 456-7890"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 621,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "E: email@email.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 622,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          alignItems: 'center'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            color: '#95A8B7',
            fontSize: '14px'
          },
          children: "2020 \xA9 Zodkoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_stroke_7__WEBPACK_IMPORTED_MODULE_2___default.a, {
        name: "rocket",
        children: "hh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 341,
    columnNumber: 9
  }, undefined);
};

_c44 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44;

$RefreshReg$(_c, "FlexBox");
$RefreshReg$(_c2, "UpperLeftBox");
$RefreshReg$(_c3, "UpperRightBox");
$RefreshReg$(_c4, "Body");
$RefreshReg$(_c5, "HeaderDiv");
$RefreshReg$(_c6, "DescriptionDiv");
$RefreshReg$(_c7, "Description");
$RefreshReg$(_c8, "MenuButton");
$RefreshReg$(_c9, "InputBox");
$RefreshReg$(_c10, "FlexBox2");
$RefreshReg$(_c11, "MenuButtonSub");
$RefreshReg$(_c12, "ZodKoo");
$RefreshReg$(_c13, "TryButton");
$RefreshReg$(_c14, "StartButton");
$RefreshReg$(_c15, "InputThing");
$RefreshReg$(_c16, "InputSubscribe");
$RefreshReg$(_c17, "StartNowButton");
$RefreshReg$(_c18, "CommonButton");
$RefreshReg$(_c19, "ProductDiv");
$RefreshReg$(_c20, "TextStyle");
$RefreshReg$(_c21, "TextStyle2");
$RefreshReg$(_c22, "TextStyleSub2");
$RefreshReg$(_c23, "TextStyleSub");
$RefreshReg$(_c24, "SpecificationDiv");
$RefreshReg$(_c25, "DisplayDiv");
$RefreshReg$(_c26, "MiniBox");
$RefreshReg$(_c27, "MiniBoxFeature");
$RefreshReg$(_c28, "SpecTitle");
$RefreshReg$(_c29, "SpecText");
$RefreshReg$(_c30, "PriceDiv");
$RefreshReg$(_c31, "PriceMenu");
$RefreshReg$(_c32, "PriceClass");
$RefreshReg$(_c33, "PriceTitle1");
$RefreshReg$(_c34, "PriceTitle2");
$RefreshReg$(_c35, "PriceTitle3");
$RefreshReg$(_c36, "PriceDetail");
$RefreshReg$(_c37, "SponsorDiv");
$RefreshReg$(_c38, "ReviewText");
$RefreshReg$(_c39, "ReviewBox");
$RefreshReg$(_c40, "ContactDiv");
$RefreshReg$(_c41, "SubscribeButton");
$RefreshReg$(_c42, "SupportDiv");
$RefreshReg$(_c43, "BottomEtc");
$RefreshReg$(_c44, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0cm9rZS03L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsIlVwcGVyTGVmdEJveCIsIlVwcGVyUmlnaHRCb3giLCJCb2R5IiwiYm9keSIsIkhlYWRlckRpdiIsIkRlc2NyaXB0aW9uRGl2IiwiRGVzY3JpcHRpb24iLCJNZW51QnV0dG9uIiwiYnV0dG9uIiwiQ29udGVudEJveCIsIklucHV0Qm94IiwiRmxleEJveDIiLCJNZW51QnV0dG9uU3ViIiwiWm9kS29vIiwiVHJ5QnV0dG9uIiwiU3RhcnRCdXR0b24iLCJJbnB1dFRoaW5nIiwiaW5wdXQiLCJJbnB1dFN1YnNjcmliZSIsIlN0YXJ0Tm93QnV0dG9uIiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJUZXh0U3R5bGUyIiwicHJvcHMiLCJpbnB1dENvbG9yIiwiVGV4dFN0eWxlU3ViMiIsIlRleHRTdHlsZVN1YiIsIlNwZWNpZmljYXRpb25EaXYiLCJEaXNwbGF5RGl2IiwiTWluaUJveCIsIk1pbmlCb3hGZWF0dXJlIiwiU3BlY1RpdGxlIiwiU3BlY1RleHQiLCJQcmljZURpdiIsIlByaWNlTWVudSIsIlByaWNlQ2xhc3MiLCJQcmljZVRpdGxlMSIsIlByaWNlVGl0bGUyIiwiUHJpY2VUaXRsZTMiLCJQcmljZURldGFpbCIsIlNwb25zb3JEaXYiLCJSZXZpZXdUZXh0IiwiUmV2aWV3Qm94IiwiQ29udGFjdERpdiIsIlN1YnNjcmliZUJ1dHRvbiIsIlN1cHBvcnREaXYiLCJCb3R0b21FdGMiLCJNYWluIiwibWFyZ2luIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJvcGFjaXR5IiwiYm9yZGVyIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwid2hpdGVTcGFjZSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEI7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QUFFLEtBQS9EO0FBQXNFRCx1QkFBUyxFQUFFO0FBQWpGLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFLSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBOEJJLHFFQUFDLE9BQUQ7QUFBUyxhQUFLLEVBQUU7QUFBQ0csb0JBQVUsRUFBQztBQUFaLFNBQWhCO0FBQUEsK0JBQ0k7QUFBRyxlQUFLLEVBQUU7QUFBQ1IsaUJBQUssRUFBRSxTQUFSO0FBQWtCQyxvQkFBUSxFQUFDO0FBQTNCLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOVBKLGVBZ1NJO0FBQUEsNkJBQ0kscUVBQUMscURBQUQ7QUFBUyxZQUFJLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaFNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBc1NILENBdlNEOztPQUFNSixJO0FBeVNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNGI1Yjk1YjkwYTQxNjYyM2VjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLyoqXG4gKiBBIFJlYWN0IGNvbXBvbmVudCBmb3IgdGhlIGZvbnQtYXdlc29tZSBpY29uIGxpYnJhcnkuXG4gKlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JvcmRlcj1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gc2hvdyBhIGJvcmRlciByYWRpdXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbY2xhc3NOYW1lXSBBbiBleHRyYSBzZXQgb2YgQ1NTIGNsYXNzZXMgdG8gYWRkIHRvIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZpeGVkV2lkdGg9ZmFsc2VdIE1ha2UgYnV0dG9ucyBmaXhlZCB3aWR0aFxuICogQHBhcmFtIHtTdHJpbmd9IFtmbGlwPWZhbHNlXSBGbGlwIHRoZSBpY29uJ3Mgb3JpZW50YXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnZlcnNlPWZhbHNlXUludmVyc2UgdGhlIGljb24ncyBjb2xvclxuICogQHBhcmFtIHtCb29sZWFufSBbbGk9ZmFsc2VdIEljb24gcmVwbGFjZXMgPGxpPiBidWxsZXRzIChoYXMgdG8gYmUgdXNlZCBpbnNpZGUgPHVsIGNsYXNzTmFtZT0ncGUtdWwnPiB0YWdzKVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgaWNvbiB0byB1c2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcm90YXRlXSBUaGUgZGVncmVzcyB0byByb3RhdGUgdGhlIGljb24gYnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbc2l6ZV0gVGhlIGljb24gc2NhbGluZyBzaXplXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtzcGluPWZhbHNlXSBTcGluIHRoZSBpY29uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt2YT1mYWxzZV0gQWxpZ24gYXQgdGhlIG1pZGRsZSBvZiB0aGUgdGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IFtzdGFja10gU3RhY2sgYW4gaWNvbiBvbiB0b3Agb2YgYW5vdGhlclxuICogQG1vZHVsZSBTdHJva2U3XG4gKiBAdHlwZSB7UmVhY3RDbGFzc31cbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnU3Ryb2tlNycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYm9yZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaXhlZFdpZHRoOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgZmxpcDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG4gICAgaW52ZXJzZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIGxpOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByb3RhdGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWzkwLCAxODAsIDI3MF0pLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydsZycsICcyeCcsICczeCcsICc0eCcsICc1eCddKSxcbiAgICBzcGluOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RhY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWycxeCcsICcyeCddKSxcbiAgICB2YTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGJvcmRlciA9IF9wcm9wcy5ib3JkZXI7XG4gICAgdmFyIGZpeGVkV2lkdGggPSBfcHJvcHMuZml4ZWRXaWR0aDtcbiAgICB2YXIgZmxpcCA9IF9wcm9wcy5mbGlwO1xuICAgIHZhciBpbnZlcnNlID0gX3Byb3BzLmludmVyc2U7XG4gICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcbiAgICB2YXIgcm90YXRlID0gX3Byb3BzLnJvdGF0ZTtcbiAgICB2YXIgc2l6ZSA9IF9wcm9wcy5zaXplO1xuICAgIHZhciBzcGluID0gX3Byb3BzLnNwaW47XG4gICAgdmFyIHN0YWNrID0gX3Byb3BzLnN0YWNrO1xuICAgIHZhciBsaSA9IF9wcm9wcy5saTtcbiAgICB2YXIgdmEgPSBfcHJvcHMudmE7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2JvcmRlcicsICdmaXhlZFdpZHRoJywgJ2ZsaXAnLCAnaW52ZXJzZScsICduYW1lJywgJ3JvdGF0ZScsICdzaXplJywgJ3NwaW4nLCAnc3RhY2snLCAnbGknLCAndmEnXSk7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gJ3BlLTdzLScgKyBuYW1lO1xuXG4gICAgaWYgKHNpemUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLScgKyBzaXplO1xuICAgIH1cblxuICAgIGlmIChzcGluKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1zcGluJztcbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1ib3JkZXInO1xuICAgIH1cblxuICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1mdyc7XG4gICAgfVxuXG4gICAgaWYgKGludmVyc2UpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLWludmVyc2UnO1xuICAgIH1cblxuICAgIGlmIChmbGlwKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBwZS1mbGlwLScgKyBmbGlwO1xuICAgIH1cblxuICAgIGlmIChyb3RhdGUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIHBlLXJvdGF0ZS0nICsgcm90YXRlO1xuICAgIH1cblxuICAgIGlmIChzdGFjaykge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtc3RhY2stJyArIHN0YWNrO1xuICAgIH1cblxuICAgIGlmICh2YSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtdmEnO1xuICAgIH1cblxuICAgIGlmIChsaSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcGUtbGknO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTdHJva2U3IGZyb20gJ3JlYWN0LXN0cm9rZS03JztcclxuXHJcbmNvbnN0IEZsZXhCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbmBcclxuY29uc3QgVXBwZXJMZWZ0Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6MjAlOyBwYWRkaW5nOjIwcHg7XHJcbmBcclxuY29uc3QgVXBwZXJSaWdodEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG5gXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuYm9keWBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgSGVhZGVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDo1MHB4OyBcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxyXG4gICAgcGFkZGluZy10b3A6NzVweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOiA2MCU7IFxyXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29udGVudEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgcGFkZGluZzozMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6MzBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMnB4IDQ1cHggLTE1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4Qm94MiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b25TdWIgPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuYFxyXG5jb25zdCBab2RLb28gPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBtYXJnaW4tcmlnaHQ6NjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuYFxyXG5jb25zdCBUcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzAxYmY4NjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGJvcmRlcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3RhcnRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2OyBcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmIDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IElucHV0VGhpbmcgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuYFxyXG5jb25zdCBJbnB1dFN1YnNjcmliZSA9IHN0eWxlZC5pbnB1dGBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIG9wYWNpdHk6MC41O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU3RhcnROb3dCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDFiZjg2IDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29tbW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICB3aWR0aDogMTUwcHg7Zm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogNDBweDtib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAxYmY4NiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFByb2R1Y3REaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZSA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IzQ5NjE3NDsgXHJcbiAgICBmb250LXNpemU6MjJweDsgXHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbmBcclxuY29uc3QgVGV4dFN0eWxlMiA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM0OTYxNzRcIn07IFxyXG4gICAgZm9udC1zaXplOjIycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZVN1YjIgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM5NUE4QjdcIn07IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgVGV4dFN0eWxlU3ViID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjOTVBOEI3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBTcGVjaWZpY2F0aW9uRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmE7IFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjY7XHJcbmBcclxuY29uc3QgRGlzcGxheURpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDozMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDozMDBweDtcclxuYFxyXG5jb25zdCBNaW5pQm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBNaW5pQm94RmVhdHVyZSA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuYFxyXG5jb25zdCBTcGVjVGl0bGUgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiM0OTYxNzQ7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbmBcclxuY29uc3QgU3BlY1RleHQgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAjOTVBOEI3ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgUHJpY2VEaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbmBcclxuY29uc3QgUHJpY2VNZW51ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHggNTBweDtcclxuICAgIG1hcmdpbi10b3A6NTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTVBOEI3O1xyXG5gXHJcbmNvbnN0IFByaWNlQ2xhc3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDI1cHg7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTEgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiMwMWJmODY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUyID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBjb2xvcjojNDk2MTc0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTMgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvcGFjaXR5OjAuNTsgXHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmBcclxuY29uc3QgUHJpY2VEZXRhaWwgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuYFxyXG5jb25zdCBTcG9uc29yRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmEgO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmNjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5gXHJcbmNvbnN0IFJldmlld1RleHQgPSBzdHlsZWQucGBcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICM5NUE4Qjc7XHJcbmBcclxuY29uc3QgUmV2aWV3Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDt3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyMjEsMjIxLDIyMSwwLjMyKTtcclxuYFxyXG5jb25zdCBDb250YWN0RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbmBcclxuY29uc3QgU3Vic2NyaWJlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiMwMWJmODY7IHdpZHRoOiAxNTBweDtjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7Ym9yZGVyOndoaXRlO2JvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3VwcG9ydERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2U0NztcclxuYFxyXG5jb25zdCBCb3R0b21FdGMgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm9keSBzdHlsZT17e21hcmdpbjonMCcsIHBhZGRpbmdCb3R0b206JzMwMHB4J319PlxyXG4gICAgICAgICAgICA8SGVhZGVyRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8Wm9kS29vPlpvZEtvbzwvWm9kS29vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uPkhvbWU8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+RmVhdHVyZTwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5QbGFuczwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5DbGllbnRzPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPlBhZ2Vz4pa8PC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICA8VXBwZXJSaWdodEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5Mb2dpbjwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJ5QnV0dG9uPlRyeSBmb3IgRnJlZTwvVHJ5QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICA8L0hlYWRlckRpdj5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzMwcHgnLGZvbnRXZWlnaHQ6JzIwMCcsd2lkdGg6Jzc1JSd9fT5ab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6ICcyNHB4JywgZm9udFNpemU6JzE2cHgnLCBtYXJnaW5Ub3A6JzEwcHgnLCBtYXJnaW5Cb3R0b206JzUwcHgnLCBmb250V2VpZ2h0OiAnNDAwJyx3aWR0aDonOTUlJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgWm9ka29vIGlzIGEgZnVsbHkgcmVzcG9uc2l2ZSBsYW5kaW5nIHBhZ2UgYnVpbHQgdXNpbmcgdGhlIGxhdGVzdCBCb290c3RyYXAgZnJhbWV3b3JrLiBJdCdzIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuIFRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxTdGFydEJ1dHRvbj5HRVQgU1RBUlRFRDwvU3RhcnRCdXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48c3BhbiBzdHlsZT17e2ZvbnRTaXplOidtZWRpdW0nLCBjb2xvcjond2hpdGUnLCBtYXJnaW46ICcwIDIwcHgnLCBvcGFjaXR5OicwLjcnfX0+T1I8L3NwYW4+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnIzAxYmY4NicsY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogJyMwMWJmODYnLGZvbnRTaXplOicxNXB4Jyxmb250V2VpZ2h0Oic2MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PldBVENIIFZJREVPPC9idXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPElucHV0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM3NzhmYTInLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczMHB4JywgbWFyZ2luVG9wOiAnMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSRUdJU1RFUiBGT1IgRlJFRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdHlwZT1cInRleHRcIj48L0lucHV0VGhpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lXCIgdHlwZT1cInRleHRcIj48L0lucHV0VGhpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFydE5vd0J1dHRvbj5TVEFSVCBOT1c8L1N0YXJ0Tm93QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTonMTJweCcsb3BhY2l0eTonMC43Jyx3aGl0ZVNwYWNlOiAncHJlJ319PkJ5IHJlZ2lzdGVyaW5nIHlvdSBhZ3JlZSB0byB0aGUgWm9ka29vIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsY29sb3I6J2JsdWUnfX0+VGVybXMgb2YgVXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3MHB4J319PkNsZWFuIGFuZCBVbHRyYSBNb2Rlcm4gRGVzaWduPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonNjAlJywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWV2ZW5seSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsd2lkdGg6JzQwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OiAnMzAwJywgbGluZUhlaWdodDogJzI4cHgnLCBjb2xvcjogJyM5NUE4QjcnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlByYWVzZW50IGV0IHZpdmVycmEgbWFzc2Egbm9uIHZhcml1cyBtYWduYSBlZ2V0IG5pYmggdml0YWUgdmVsaXQgcG9zdWVyZSBlZmZpY2l0dXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDogJzVweCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnLCBsaW5lSGVpZ2h0OiAnMjZweCcsIGNvbG9yOiAnIzk1QThCNycsZm9udFNpemU6ICcxNHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQncyBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLldlIHB1dCBhIGxvdCBvZiBlZmZvcnQgaW4gZGVzaWduLCBhcyBpdOKAmXMgdGhlIG1vc3QgaW1wb3J0YW50IGluZ3JlZGllbnQgb2Ygc3VjY2Vzc2Z1bCB3ZWJzaXRlLlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdC5XZSBwdXQgYSBsb3Qgb2YgZWZmb3J0IGluIGRlc2lnbiwgYXMgaXTigJlzIHRoZSBtb3N0IGltcG9ydGFudCBpbmdyZWRpZW50IG9mIHN1Y2Nlc3NmdWwgd2Vic2l0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5MRUFSTiBNT1JFPC9Db21tb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9tYWNib29rLnBuZ1wiIHdpZHRoPVwiNjUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3REaXY+XHJcbiAgICAgICAgICAgIDxTcGVjaWZpY2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luVG9wOicxMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlPkl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzczwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxEaXNwbGF5RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPlN0cmF0ZWd5IFNvbHV0aW9uczwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0Pkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkRpZ2l0YWwgRGVzaWduPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+Q29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+QW5hbHl0aWNzIFNvbHV0aW9uczwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0PlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0uPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+U3RyYXRlZ3kgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+SXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+RGlnaXRhbCBEZXNpZ248L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5Db250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYS4uPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5BbmFseXRpY3MgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+VGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWluaUJveD5cclxuICAgICAgICAgICAgICAgIDwvRGlzcGxheURpdj5cclxuICAgICAgICAgICAgPC9TcGVjaWZpY2F0aW9uRGl2PlxyXG4gICAgICAgICAgICA8UHJpY2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc0MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+Q2hvb3NlIHlvdXIgcGVyZmVjdCBwbGFuPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1Yj5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuPC9UZXh0U3R5bGVTdWI+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+QkFTSUM8L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQxOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+UFJFTUlVTTwvUHJpY2VUaXRsZTE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTI+JDI5PC9QcmljZVRpdGxlMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMz5QZXIgTW9udGg8L1ByaWNlVGl0bGUzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJywgbWFyZ2luQm90dG9tOiAnMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD41MDAgR0IgQmFuZHdpZHRoPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4yNHg3IFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5TSUdOVVAgTk9XPC9Db21tb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMT5ERVZFTE9QRVI8L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQzOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgIDwvUHJpY2VEaXY+XHJcbiAgICAgICAgICAgIDxTcG9uc29yRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5UcnVzdGVkIGJ5IFRob3VzYW5kczwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzgwJScsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsbWFyZ2luQm90dG9tOiAnNzBweCcsYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21pY3Jvc29mdC5wbmdcIiBzdHlsZT17e21hcmdpblJpZ2h0OiczMHB4JyxjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9nb29nbGUucG5nXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMzBweCcsY3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW5zdGFncmFtLnBuZ1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzMwcHgnLGN1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbnZlcnNlLnBuZ1wiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e3BhZGRpbmc6ICczMHB4Jywgd2lkdGg6JzUwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5SaWdodDogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJwgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIyLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5SaWdodDogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJwgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIzLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1Nwb25zb3JEaXY+XHJcbiAgICAgICAgICAgIDxDb250YWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUyIGlucHV0Q29sb3I9XCJ3aGl0ZVwiPlRydXN0ZWQgYnkgVGhvdXNhbmRzPC9UZXh0U3R5bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWIyIGlucHV0Q29sb3I9XCJ3aGl0ZVwiIHN0eWxlPXt7b3BhY2l0eTonMC43J319PlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1YjI+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFN1YnNjcmliZSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsIGFkZHJlc3NcIj48L0lucHV0U3Vic2NyaWJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJzY3JpYmVCdXR0b24+U1VCU0NSSUJFPC9TdWJzY3JpYmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTJweCcsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJywgbWFyZ2luVG9wOiAnM3B4J319PllvdSBjYW4gdW4tc3Vic2NyaWJlIGF0IGFueSB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgIDwvQ29udGFjdERpdj5cclxuICAgICAgICAgICAgPFN1cHBvcnREaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e3dpZHRoOic2MCUnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtZXZlbmx5JyxtYXJnaW5Cb3R0b206JzcwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlpvZGtvbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Ib21lPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RmVhdHVyZXM8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5UZWFtPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RkFRPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5Tb2NpYWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RmFjZWJvb2s8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Ud2l0dGVyPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+QmVoYW5jZTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkRyaWJiYmxlPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5TdXBwb3J0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkhlbHAgJiBTdXBwb3J0PC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+UHJpdmFjeSBQb2xpY3k8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5UZXJtcyAmIENvbmRpdGlvbnM8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PkNvbnRhY3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLGZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JywgbWFyZ2luVG9wOiAnNXB4J319Pjc5NSBGb2xzb20gQXZlLCBTdWl0ZSA2MDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLGZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JywgbWFyZ2luVG9wOiAnNXB4J319PlNhbiBGcmFuY2lzY28sIENBIDk0MTA3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT5QOiAoMTIzKSA0NTYtNzg5MDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5FOiBlbWFpbEBlbWFpbC5jb208L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2FsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnIzk1QThCNycsZm9udFNpemU6JzE0cHgnfX0+MjAyMCDCqSBab2Rrb288L3A+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgIDwvU3VwcG9ydERpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTdHJva2U3IG5hbWU9J3JvY2tldCc+aGg8L1N0cm9rZTc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm9keT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=