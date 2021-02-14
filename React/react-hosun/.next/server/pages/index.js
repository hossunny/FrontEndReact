module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./pages/main/index.tsx");

var _jsxFileName = "C:\\Users\\Bae Kyungmo\\OneDrive\\Desktop\\FrontEndStudy\\React\\react-hosun\\pages\\index.tsx";

/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_main__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 22
}, undefined));

/***/ }),

/***/ "./pages/main/index.tsx":
/*!******************************!*\
  !*** ./pages/main/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_common_CommonButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../src/components/common/CommonButton */ "./src/components/common/CommonButton.tsx");

var _jsxFileName = "C:\\Users\\Bae Kyungmo\\OneDrive\\Desktop\\FrontEndStudy\\React\\react-hosun\\pages\\main\\index.tsx";



const FlexBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display : flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
`;
const UpperLeftBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox)`
    width:20%; padding:20px;
`;
const UpperRightBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox)`
    margin-right:20px;
`;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.body`
    display:flex;
    flex-direction:column;
    margin:0px;
    font-family: "Roboto", sans-serif;
    width:100%;
`;
const HeaderDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display: flex;
    justify-content: space-around;
    background-color: #01bf86;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width:70%;
    margin:0 auto;
`;
const DescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display:flex; 
    align-items:center; 
    padding-top:150px; 
    padding-bottom:150px;
    justify-content:space-around; 
    background-color:#01bf86;
    width:50%;
    margin:0 auto;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox)`
    width: 50%; 
    flex-direction : column;
    justify-content: space-between; 
    padding-top:50px;
`;
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
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
const ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox)`
    flex-direction:column; 
    width:50%; 
    padding:30px;
`;
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    padding:30px; 
    background-color:white; 
    color:gray;
    border-radius: 5px;
    align-items:center;
    width:300px;
    height:330px;
    box-shadow: 0px 22px 45px -15px rgba(0,0,0,0.5);
`;
const FlexBox2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox)`
    flex-direction:column;
    align-items:center;
`;
const MenuButtonSub = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(MenuButton)`
    opacity: 0.7;
    scroll-behavior: smooth;
`;
const ZodKoo = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(MenuButton)`
    margin-right:60px;
    font-weight: 600;
    font-size: larger;
`;
const TryButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
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
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
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
const InputThing = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input`
    margin-bottom: 20px;
    width:100%;
    height: 30px;
    border: 1px solid #eee;
    padding-left: 10px;
    color: grey;
`;
const InputSubscribe = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input`
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
const StartNowButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
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
`; // const CommonButton = styled.button`
//     color: white;
//     background-color: #01bf86;
//     border: #01bf86;
//     width: 150px;font-weight: 600;
//     height: 40px;border-radius: 400px;
//     cursor: pointer;
//     :hover{
//         background-color: transparent ;
//         border: 2px solid #01bf86 ;
//         color: #01bf86 ;
//         box-shadow: none ;
//     }
// `

const ProductDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    margin-top: 120px;
    margin-bottom:100px;
`;
const TextStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    color:#496174; 
    font-size:22px; 
    font-weight:500;
`;
const TextStyle2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    color: ${props => props.inputColor || "#496174"}; 
    font-size:22px; 
    font-weight:500;
`;
const TextStyleSub2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: ${props => props.inputColor || "#95A8B7"}; 
    text-align: center;
`;
const TextStyleSub = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: #95A8B7;
    text-align: center;
`;
const SpecificationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    background-color: #f3f6fa; 
    border-top: 1px solid #e8eef6; 
    border-bottom: 1px solid #e8eef6;
`;
const DisplayDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    margin-top: 50px;
    justify-content: center; 
    margin-bottom: 100px;
    margin-left:300px;
    margin-right:300px;
`;
const MiniBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox)`
    align-items: center;
    text-align: center;
`;
const MiniBoxFeature = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    padding: 20px;
    margin-top: 20px;
`;
const SpecTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    font-size: 18px;
    color:#496174;
    font-weight:500;
`;
const SpecText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    color: #95A8B7 !important;
    width:100%;
    font-size: 14px;
    text-align: center;
`;
const PriceDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    padding-top:100px;
    padding-bottom: 80px;
`;
const PriceMenu = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    position: relative;
    width: 220px;
    max-width: 320px; 
    margin-right: 20px;
    padding: 0px 30px 50px;
    margin-top:50px; 
    margin-bottom:40px;
    border: 2px solid #95A8B7;
`;
const PriceClass = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 16px; 
    padding: 30px 20px 25px;
`;
const PriceTitle1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    color:#01bf86;
    font-size: 16px; 
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: 600;
`;
const PriceTitle2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    font-size: 38px;
    color:#496174;
    margin-bottom: 10px; 
    margin-bottom:10px;
    margin-top:0px;
    font-weight: 700;
`;
const PriceTitle3 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    width:100%;
    opacity:0.5; 
    margin-top:0;
    font-size: 13px;
`;
const PriceDetail = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    font-size: 13px;
`;
const SponsorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    background-color: #f3f6fa ;
    border-top: 1px solid #e8eef6;
    border-bottom: 1px solid #e8eef6;
    padding-top: 100px;
    padding-bottom: 80px;
`;
const ReviewText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    line-height: 24px;
    font-size: 14px;
    font-style: italic;
    color: #95A8B7;
`;
const ReviewBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    border-radius: 5px;width: 90%;
    padding: 10px 30px 20px 30px;
    margin-bottom: 30px;
    position: relative;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(221,221,221,0.32);
`;
const ContactDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    padding-top: 100px; 
    padding-bottom: 80px;
    background-color: #01bf86;
`;
const SubscribeButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
    color:#01bf86; width: 150px;cursor: pointer;
    height: 40px; font-weight: 600;border:white;border-radius: 400px;
    background-color:white;
    :hover{
        color: #fff ;
        background-color: transparent ;
        border: 2px solid #fff;
    }
`;
const SupportDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(FlexBox2)`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #2f3e47;
`;
const BottomEtc = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
    color: rgba(255,255,255,0.4);
    font-size:14px;
    margin-bottom: 5px;
    margin-top: 5px;
    :hover{
        color: rgba(255,255,255,0.6);
        cursor:pointer;
    }
`;
const IconPlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i`
    margin-right: 7px;
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 50%;
    line-height: 17px;
    vertical-align: middle;
    text-align: center;
    font-size: 12px;
    padding-left: 3px;
    padding-top:3px; 
    padding-right:2px;
    margin-left: -12px;
`;
const IconMini = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i`
    color: #01bf86; 
    font-size:48px;
`;
const headerMenuButtonTexts = ['Features', 'Plans', 'Clients', 'Pages▼'];
const FeatureItems1 = [{
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-display1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 375,
    columnNumber: 15
  }, undefined),
  body1: 'Strategy Solutions',
  body2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-science"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 380,
    columnNumber: 15
  }, undefined),
  body1: 'Digital Design',
  body2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera..'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-display1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 385,
    columnNumber: 16
  }, undefined),
  body1: 'Analytics Solutions',
  body2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
}];
const FeatureItems2 = [{
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-date"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 392,
    columnNumber: 15
  }, undefined),
  body1: 'Strategy Solutions',
  body2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-credit"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 397,
    columnNumber: 15
  }, undefined),
  body1: 'Digital Design',
  body2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera..'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-headphones"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 402,
    columnNumber: 16
  }, undefined),
  body1: 'Analytics Solutions',
  body2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
}];

const Main = () => {
  const {
    0: selectedHeaderMenuIdx,
    1: setSelectedHeaderMenuIdx
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  console.log(`selectedHeaderMenuIdx:${selectedHeaderMenuIdx}`);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Body, {
    style: {
      margin: '0'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://static.tumblr.com/i5s2zks/6kOohwlux/pe-icon-7-stroke.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
          children: "ZodKoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 21
        }, undefined), headerMenuButtonTexts.map((headerMenuButtonText, idx) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            onClick: e => {
              setSelectedHeaderMenuIdx(idx);
            },
            active: selectedHeaderMenuIdx == idx,
            children: headerMenuButtonText
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 29
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
          children: "Try for Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        backgroundColor: '#01bf86'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DescriptionDiv, {
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
            lineNumber: 441,
            columnNumber: 25
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
            lineNumber: 442,
            columnNumber: 25
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
                lineNumber: 445,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 445,
              columnNumber: 29
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
                lineNumber: 446,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 446,
              columnNumber: 29
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconPlay, {
                  className: "pe-7s-play"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 449,
                  columnNumber: 32
                }, undefined), "WATCH VIDEO"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 447,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 21
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
              lineNumber: 455,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Full name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 458,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Email Address",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "User name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Password",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StartNowButton, {
                children: "START NOW"
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  fontSize: '12px',
                  opacity: '0.7',
                  whiteSpace: 'pre'
                },
                children: "By registering you agree to the Zodkoo "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 466,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  fontSize: '12px',
                  opacity: '0.7',
                  color: 'blue'
                },
                children: "Terms of Use"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 467,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          class: "pe-7s-medal",
          style: {
            fontSize: '48px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          style: {
            marginBottom: '70px'
          },
          children: "Clean and Ultra Modern Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          width: '65%',
          justifyContent: 'space-evenly'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          style: {
            flexDirection: 'column',
            width: '30%'
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
            lineNumber: 481,
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
            lineNumber: 483,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_CommonButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            children: "LEARN MORE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/macbook.png",
            width: "650px",
            height: "350px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 474,
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
          lineNumber: 496,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DisplayDiv, {
        style: {
          width: '50%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: FeatureItems1.map((featureItem, idx) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
              children: [featureItem.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
                children: featureItem.body1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 506,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
                children: featureItem.body2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 507,
                columnNumber: 37
              }, undefined)]
            }, idx, true, {
              fileName: _jsxFileName,
              lineNumber: 504,
              columnNumber: 33
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: FeatureItems2.map((featureItem, idx) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
              children: [featureItem.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
                children: featureItem.body1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 517,
                columnNumber: 41
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
                children: featureItem.body2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 518,
                columnNumber: 41
              }, undefined)]
            }, idx, true, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 37
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 494,
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
          lineNumber: 527,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 526,
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
              lineNumber: 534,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$19"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 535,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 536,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 533,
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-server",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 540,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 541,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 539,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-graph",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 544,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 545,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 543,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-mail-open",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 548,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 549,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 547,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-tools",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 552,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 553,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 551,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_CommonButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 555,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 538,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "PREMIUM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 560,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$29"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 561,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 562,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 559,
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-server",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 566,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 567,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 565,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-graph",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 570,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 571,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 569,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-mail-open",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 574,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 575,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 573,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-tools",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 578,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 579,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 577,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_CommonButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 581,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 586,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$39"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 587,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 588,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 585,
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-server",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 592,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 593,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 591,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-graph",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 596,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 597,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 595,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-mail-open",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 600,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 601,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 599,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "pe-7s-tools",
                style: {
                  marginRight: '5px',
                  marginTop: '10px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 604,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 605,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 603,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_CommonButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 607,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 590,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 525,
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
          lineNumber: 614,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 613,
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
          lineNumber: 619,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/google.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/instagram.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/converse.png",
          style: {
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 618,
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
              lineNumber: 627,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 626,
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
                lineNumber: 633,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 632,
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
                lineNumber: 636,
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
                lineNumber: 637,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 635,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 631,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 625,
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
              lineNumber: 643,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 642,
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
                lineNumber: 649,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 648,
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
                lineNumber: 652,
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
                lineNumber: 653,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 651,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 647,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 641,
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
              lineNumber: 659,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 658,
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
                lineNumber: 665,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
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
                lineNumber: 668,
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
                lineNumber: 669,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 667,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        style: {
          marginBottom: '30px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle2, {
          inputColor: "white",
          children: "Be engaged Newsletter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 677,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub2, {
          inputColor: "white",
          style: {
            opacity: '0.7'
          },
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputSubscribe, {
          type: "text",
          placeholder: "Enter e-mail address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubscribeButton, {
          children: "SUBSCRIBE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 683,
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
          lineNumber: 684,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SupportDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
        style: {
          width: '60%',
          justifyContent: 'space-evenly',
          marginBottom: '70px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          flexDirection: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Zodkoo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 690,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 691,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 692,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 693,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 694,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 689,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          flexDirection: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Social"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 697,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 698,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 699,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 700,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Dribbble"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 701,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          flexDirection: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 704,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Help & Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 705,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 706,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Terms & Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 707,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 703,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          flexDirection: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: 'white',
              fontWeight: '600'
            },
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 710,
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
            lineNumber: 711,
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
            lineNumber: 712,
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
            lineNumber: 713,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "E: email@email.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 714,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 709,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 688,
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
          lineNumber: 718,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 412,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/common/CommonButton.tsx":
/*!************************************************!*\
  !*** ./src/components/common/CommonButton.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bae Kyungmo\\OneDrive\\Desktop\\FrontEndStudy\\React\\react-hosun\\src\\components\\common\\CommonButton.tsx";

const StyledCommonButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
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

const CommonButton = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledCommonButton, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CommonButton);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL21haW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db21tb25CdXR0b24udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJGbGV4Qm94Iiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmbGV4RGlyZWN0aW9uIiwiVXBwZXJMZWZ0Qm94IiwiVXBwZXJSaWdodEJveCIsIkJvZHkiLCJib2R5IiwiSGVhZGVyRGl2IiwiRGVzY3JpcHRpb25EaXYiLCJEZXNjcmlwdGlvbiIsIk1lbnVCdXR0b24iLCJidXR0b24iLCJDb250ZW50Qm94IiwiSW5wdXRCb3giLCJGbGV4Qm94MiIsIk1lbnVCdXR0b25TdWIiLCJab2RLb28iLCJUcnlCdXR0b24iLCJTdGFydEJ1dHRvbiIsIklucHV0VGhpbmciLCJpbnB1dCIsIklucHV0U3Vic2NyaWJlIiwiU3RhcnROb3dCdXR0b24iLCJQcm9kdWN0RGl2IiwiVGV4dFN0eWxlIiwicCIsIlRleHRTdHlsZTIiLCJpbnB1dENvbG9yIiwiVGV4dFN0eWxlU3ViMiIsIlRleHRTdHlsZVN1YiIsIlNwZWNpZmljYXRpb25EaXYiLCJEaXNwbGF5RGl2IiwiTWluaUJveCIsIk1pbmlCb3hGZWF0dXJlIiwiU3BlY1RpdGxlIiwiU3BlY1RleHQiLCJQcmljZURpdiIsIlByaWNlTWVudSIsIlByaWNlQ2xhc3MiLCJQcmljZVRpdGxlMSIsIlByaWNlVGl0bGUyIiwiUHJpY2VUaXRsZTMiLCJQcmljZURldGFpbCIsIlNwb25zb3JEaXYiLCJSZXZpZXdUZXh0IiwiUmV2aWV3Qm94IiwiQ29udGFjdERpdiIsIlN1YnNjcmliZUJ1dHRvbiIsIlN1cHBvcnREaXYiLCJCb3R0b21FdGMiLCJJY29uUGxheSIsImkiLCJJY29uTWluaSIsImhlYWRlck1lbnVCdXR0b25UZXh0cyIsIkZlYXR1cmVJdGVtczEiLCJpY29uIiwiYm9keTEiLCJib2R5MiIsIkZlYXR1cmVJdGVtczIiLCJNYWluIiwic2VsZWN0ZWRIZWFkZXJNZW51SWR4Iiwic2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4IiwidXNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwibWFwIiwiaGVhZGVyTWVudUJ1dHRvblRleHQiLCJpZHgiLCJlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm9wYWNpdHkiLCJib3JkZXIiLCJjdXJzb3IiLCJ3aGl0ZVNwYWNlIiwianVzdGlmeUNvbnRlbnQiLCJmZWF0dXJlSXRlbSIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJTdHlsZWRDb21tb25CdXR0b24iLCJDb21tb25CdXR0b24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVlLGtGQUFNLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBckIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUtBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUMzQjtBQUNBLHNCQUF1QkMsS0FBRCxJQUNkQSxLQUFLLENBQUNDLGFBQU4sR0FBc0JELEtBQUssQ0FBQ0MsYUFBNUIsR0FBNEMsS0FBTTtBQUMxRCxDQUpBO0FBTUEsTUFBTUMsWUFBWSxHQUFHSix3REFBTSxDQUFDRCxPQUFELENBQVU7QUFDckM7QUFDQSxDQUZBO0FBR0EsTUFBTU0sYUFBYSxHQUFHTCx3REFBTSxDQUFDRCxPQUFELENBQVU7QUFDdEM7QUFDQSxDQUZBO0FBR0EsTUFBTU8sSUFBSSxHQUFHTix3REFBTSxDQUFDTyxJQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBT0EsTUFBTUMsU0FBUyxHQUFHUix3REFBTSxDQUFDQyxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtBQWFBLE1BQU1RLGNBQWMsR0FBR1Qsd0RBQU0sQ0FBQ0MsR0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTtBQVVBLE1BQU1TLFdBQVcsR0FBR1Ysd0RBQU0sQ0FBQ0QsT0FBRCxDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQVFBLE1BQU1ZLFVBQVUsR0FBR1gsd0RBQU0sQ0FBQ1ksTUFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWEE7QUFZQSxNQUFNQyxVQUFVLEdBQUdiLHdEQUFNLENBQUNELE9BQUQsQ0FBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBS0EsTUFBTWUsUUFBUSxHQUFHZCx3REFBTSxDQUFDQyxHQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRBO0FBV0EsTUFBTWMsUUFBUSxHQUFHZix3REFBTSxDQUFDRCxPQUFELENBQVU7QUFDakM7QUFDQTtBQUNBLENBSEE7QUFNQSxNQUFNaUIsYUFBYSxHQUFHaEIsd0RBQU0sQ0FBQ1csVUFBRCxDQUFhO0FBQ3pDO0FBQ0E7QUFDQSxDQUhBO0FBSUEsTUFBTU0sTUFBTSxHQUFHakIsd0RBQU0sQ0FBQ1csVUFBRCxDQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBSkE7QUFLQSxNQUFNTyxTQUFTLEdBQUdsQix3REFBTSxDQUFDWSxNQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FkQTtBQWVBLE1BQU1PLFdBQVcsR0FBR25CLHdEQUFNLENBQUNZLE1BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FuQkE7QUFvQkEsTUFBTVEsVUFBVSxHQUFHcEIsd0RBQU0sQ0FBQ3FCLEtBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQVFBLE1BQU1DLGNBQWMsR0FBR3RCLHdEQUFNLENBQUNxQixLQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBO0FBY0EsTUFBTUUsY0FBYyxHQUFHdkIsd0RBQU0sQ0FBQ1ksTUFBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJBLEMsQ0FrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNWSxVQUFVLEdBQUd4Qix3REFBTSxDQUFDZSxRQUFELENBQVc7QUFDcEM7QUFDQTtBQUNBLENBSEE7QUFJQSxNQUFNVSxTQUFTLEdBQUd6Qix3REFBTSxDQUFDMEIsQ0FBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBS0EsTUFBTUMsVUFBVSxHQUFHM0Isd0RBQU0sQ0FBQzBCLENBQUU7QUFDNUIsYUFBYXhCLEtBQUssSUFBSUEsS0FBSyxDQUFDMEIsVUFBTixJQUFvQixTQUFVO0FBQ3BEO0FBQ0E7QUFDQSxDQUpBO0FBS0EsTUFBTUMsYUFBYSxHQUFHN0Isd0RBQU0sQ0FBQzBCLENBQUU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsYUFBYXhCLEtBQUssSUFBSUEsS0FBSyxDQUFDMEIsVUFBTixJQUFvQixTQUFVO0FBQ3BEO0FBQ0EsQ0FOQTtBQVNBLE1BQU1FLFlBQVksR0FBRzlCLHdEQUFNLENBQUMwQixDQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBUUEsTUFBTUssZ0JBQWdCLEdBQUcvQix3REFBTSxDQUFDZSxRQUFELENBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQUtBLE1BQU1pQixVQUFVLEdBQUdoQyx3REFBTSxDQUFDZSxRQUFELENBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7QUFPQSxNQUFNa0IsT0FBTyxHQUFHakMsd0RBQU0sQ0FBQ0QsT0FBRCxDQUFVO0FBQ2hDO0FBQ0E7QUFDQSxDQUhBO0FBSUEsTUFBTW1DLGNBQWMsR0FBR2xDLHdEQUFNLENBQUNlLFFBQUQsQ0FBVztBQUN4QztBQUNBO0FBQ0EsQ0FIQTtBQUlBLE1BQU1vQixTQUFTLEdBQUduQyx3REFBTSxDQUFDMEIsQ0FBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBS0EsTUFBTVUsUUFBUSxHQUFHcEMsd0RBQU0sQ0FBQzBCLENBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBTUEsTUFBTVcsUUFBUSxHQUFHckMsd0RBQU0sQ0FBQ2UsUUFBRCxDQUFXO0FBQ2xDO0FBQ0E7QUFDQSxDQUhBO0FBSUEsTUFBTXVCLFNBQVMsR0FBR3RDLHdEQUFNLENBQUNlLFFBQUQsQ0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTtBQVVBLE1BQU13QixVQUFVLEdBQUd2Qyx3REFBTSxDQUFDQyxHQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBT0EsTUFBTXVDLFdBQVcsR0FBR3hDLHdEQUFNLENBQUMwQixDQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBT0EsTUFBTWUsV0FBVyxHQUFHekMsd0RBQU0sQ0FBQzBCLENBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQVFBLE1BQU1nQixXQUFXLEdBQUcxQyx3REFBTSxDQUFDMEIsQ0FBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7QUFNQSxNQUFNaUIsV0FBVyxHQUFHM0Msd0RBQU0sQ0FBQzBCLENBQUU7QUFDN0I7QUFDQSxDQUZBO0FBR0EsTUFBTWtCLFVBQVUsR0FBRzVDLHdEQUFNLENBQUNlLFFBQUQsQ0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQU9BLE1BQU04QixVQUFVLEdBQUc3Qyx3REFBTSxDQUFDMEIsQ0FBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7QUFNQSxNQUFNb0IsU0FBUyxHQUFHOUMsd0RBQU0sQ0FBQ0MsR0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBO0FBUUEsTUFBTThDLFVBQVUsR0FBRy9DLHdEQUFNLENBQUNlLFFBQUQsQ0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBS0EsTUFBTWlDLGVBQWUsR0FBR2hELHdEQUFNLENBQUNZLE1BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVEE7QUFVQSxNQUFNcUMsVUFBVSxHQUFHakQsd0RBQU0sQ0FBQ2UsUUFBRCxDQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLENBSkE7QUFLQSxNQUFNbUMsU0FBUyxHQUFHbEQsd0RBQU0sQ0FBQzBCLENBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVEE7QUFVQSxNQUFNeUIsUUFBUSxHQUFHbkQsd0RBQU0sQ0FBQ29ELENBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRBO0FBZUEsTUFBTUMsUUFBUSxHQUFHckQsd0RBQU0sQ0FBQ29ELENBQUU7QUFDMUI7QUFDQTtBQUNBLENBSEE7QUFJQSxNQUFNRSxxQkFBcUIsR0FBRyxDQUMxQixVQUQwQixFQUUxQixPQUYwQixFQUcxQixTQUgwQixFQUkxQixRQUowQixDQUE5QjtBQU1BLE1BQU1DLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxNQUFJLGVBQUUscUVBQUMsUUFBRDtBQUFVLGFBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFY7QUFFSUMsT0FBSyxFQUFFLG9CQUZYO0FBR0lDLE9BQUssRUFBRTtBQUhYLENBRGtCLEVBTWxCO0FBQ0lGLE1BQUksZUFBRSxxRUFBQyxRQUFEO0FBQVUsYUFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFO0FBSFgsQ0FOa0IsRUFXbEI7QUFDSUYsTUFBSSxlQUFHLHFFQUFDLFFBQUQ7QUFBVSxhQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURYO0FBRUlDLE9BQUssRUFBRyxxQkFGWjtBQUdJQyxPQUFLLEVBQUc7QUFIWixDQVhrQixDQUF0QjtBQWlCQSxNQUFNQyxhQUFhLEdBQUcsQ0FDbEI7QUFDSUgsTUFBSSxlQUFFLHFFQUFDLFFBQUQ7QUFBVSxhQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURWO0FBRUlDLE9BQUssRUFBRSxvQkFGWDtBQUdJQyxPQUFLLEVBQUU7QUFIWCxDQURrQixFQU1sQjtBQUNJRixNQUFJLGVBQUUscUVBQUMsUUFBRDtBQUFVLGFBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFY7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRTtBQUhYLENBTmtCLEVBV2xCO0FBQ0lGLE1BQUksZUFBRyxxRUFBQyxRQUFEO0FBQVUsYUFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWDtBQUVJQyxPQUFLLEVBQUcscUJBRlo7QUFHSUMsT0FBSyxFQUFHO0FBSFosQ0FYa0IsQ0FBdEI7O0FBa0JBLE1BQU1FLElBQUksR0FBRyxNQUFNO0FBQ2YsUUFBTTtBQUFBLE9BQUNDLHFCQUFEO0FBQUEsT0FBd0JDO0FBQXhCLE1BQW9EQyxzREFBUSxDQUFDLENBQUQsQ0FBbEU7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQWEseUJBQXdCSixxQkFBc0IsRUFBM0Q7QUFDQSxzQkFDSSxxRUFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUNLLFlBQU0sRUFBQztBQUFSLEtBQWI7QUFBQSw0QkFDSTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTSxVQUFJLEVBQUMsd0VBQVg7QUFBb0YsU0FBRyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0kscUVBQUMsWUFBRDtBQUFBLGdDQUNJLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBR0taLHFCQUFxQixDQUFDYSxHQUF0QixDQUEwQixDQUFDQyxvQkFBRCxFQUFzQkMsR0FBdEIsS0FBOEI7QUFDckQsOEJBQ0kscUVBQUMsYUFBRDtBQUVBLG1CQUFPLEVBQUdDLENBQUQsSUFBTztBQUNaUixzQ0FBd0IsQ0FBQ08sR0FBRCxDQUF4QjtBQUNILGFBSkQ7QUFLQSxrQkFBTSxFQUFFUixxQkFBcUIsSUFBSVEsR0FMakM7QUFBQSxzQkFPS0Q7QUFQTCxhQUNLQyxHQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREo7QUFXSCxTQVpBLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBa0JJLHFFQUFDLGFBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQTBCSTtBQUFLLFdBQUssRUFBRTtBQUFDRSx1QkFBZSxFQUFDO0FBQWpCLE9BQVo7QUFBQSw2QkFDSSxxRUFBQyxjQUFEO0FBQUEsZ0NBQ0kscUVBQUMsV0FBRDtBQUFBLGtDQUNJO0FBQUcsaUJBQUssRUFBRTtBQUFDQyxtQkFBSyxFQUFDLE9BQVA7QUFBZ0JDLHNCQUFRLEVBQUMsTUFBekI7QUFBZ0NDLHdCQUFVLEVBQUMsS0FBM0M7QUFBaURDLG1CQUFLLEVBQUM7QUFBdkQsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUcsaUJBQUssRUFBRTtBQUFDQyx3QkFBVSxFQUFFLE1BQWI7QUFBcUJILHNCQUFRLEVBQUMsTUFBOUI7QUFBc0NJLHVCQUFTLEVBQUMsTUFBaEQ7QUFBd0RDLDBCQUFZLEVBQUMsTUFBckU7QUFBNkVKLHdCQUFVLEVBQUUsS0FBekY7QUFBK0ZDLG1CQUFLLEVBQUMsS0FBckc7QUFBNEdILG1CQUFLLEVBQUU7QUFBbkgsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUlJO0FBQUssaUJBQUssRUFBRTtBQUFDTyxxQkFBTyxFQUFDLE1BQVQ7QUFBZ0JDLHdCQUFVLEVBQUU7QUFBNUIsYUFBWjtBQUFBLG9DQUNJLHFFQUFDLE9BQUQ7QUFBQSxxQ0FBUyxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLHFFQUFDLE9BQUQ7QUFBQSxxQ0FBUztBQUFNLHFCQUFLLEVBQUU7QUFBQ1AsMEJBQVEsRUFBQyxRQUFWO0FBQW9CRCx1QkFBSyxFQUFDLE9BQTFCO0FBQW1DTix3QkFBTSxFQUFFLFFBQTNDO0FBQXFEZSx5QkFBTyxFQUFDO0FBQTdELGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJLHFFQUFDLE9BQUQ7QUFBQSxxQ0FBUztBQUFRLHFCQUFLLEVBQUU7QUFDcEJULHVCQUFLLEVBQUUsT0FEYTtBQUNKVSx3QkFBTSxFQUFFLFNBREo7QUFDY0Msd0JBQU0sRUFBRSxTQUR0QjtBQUNpQ1osaUNBQWUsRUFBRSxTQURsRDtBQUM0REUsMEJBQVEsRUFBQyxNQURyRTtBQUM0RUMsNEJBQVUsRUFBQztBQUR2RixpQkFBZjtBQUFBLHdDQUVOLHFFQUFDLFFBQUQ7QUFBVSwyQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBY0kscUVBQUMsUUFBRDtBQUFBLGlDQUNJLHFFQUFDLFFBQUQ7QUFBQSxvQ0FDSTtBQUFHLG1CQUFLLEVBQUU7QUFBQ0YscUJBQUssRUFBRSxTQUFSO0FBQW1CRSwwQkFBVSxFQUFFLEtBQS9CO0FBQXNDRCx3QkFBUSxFQUFDLE1BQS9DO0FBQ1ZLLDRCQUFZLEVBQUUsTUFESjtBQUNZRCx5QkFBUyxFQUFFO0FBRHZCLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFJSSxxRUFBQyxVQUFEO0FBQVkseUJBQVcsRUFBQyxXQUF4QjtBQUFvQyxrQkFBSSxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFLSSxxRUFBQyxVQUFEO0FBQVkseUJBQVcsRUFBQyxlQUF4QjtBQUF3QyxrQkFBSSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosZUFNSSxxRUFBQyxVQUFEO0FBQVkseUJBQVcsRUFBQyxXQUF4QjtBQUFvQyxrQkFBSSxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkosZUFPSSxxRUFBQyxVQUFEO0FBQVkseUJBQVcsRUFBQyxVQUF4QjtBQUFtQyxrQkFBSSxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEosZUFRSSxxRUFBQyxPQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDRixxQkFBSyxFQUFDO0FBQVAsZUFBaEI7QUFBQSxxQ0FDSSxxRUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSSixlQVdJLHFFQUFDLE9BQUQ7QUFBQSxzQ0FDSTtBQUFNLHFCQUFLLEVBQUU7QUFBQ0YsMEJBQVEsRUFBQyxNQUFWO0FBQWlCUSx5QkFBTyxFQUFDLEtBQXpCO0FBQStCRyw0QkFBVSxFQUFFO0FBQTNDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBTSxxQkFBSyxFQUFFO0FBQUNYLDBCQUFRLEVBQUMsTUFBVjtBQUFpQlEseUJBQU8sRUFBQyxLQUF6QjtBQUErQlQsdUJBQUssRUFBQztBQUFyQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCSixlQThESSxxRUFBQyxVQUFEO0FBQUEsOEJBQ0kscUVBQUMsUUFBRDtBQUFBLGdDQUNJO0FBQUcsZUFBSyxFQUFDLGFBQVQ7QUFBdUIsZUFBSyxFQUFFO0FBQUNDLG9CQUFRLEVBQUM7QUFBVjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLGVBQUssRUFBRTtBQUFDSyx3QkFBWSxFQUFFO0FBQWYsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBS0kscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBRTtBQUFDSCxlQUFLLEVBQUMsS0FBUDtBQUFjVSx3QkFBYyxFQUFDO0FBQTdCLFNBQWhCO0FBQUEsZ0NBQ0kscUVBQUMsT0FBRDtBQUFTLGVBQUssRUFBRTtBQUFDbEYseUJBQWEsRUFBQyxRQUFmO0FBQXdCd0UsaUJBQUssRUFBQztBQUE5QixXQUFoQjtBQUFBLGtDQUNJO0FBQUcsaUJBQUssRUFBRTtBQUFDRCx3QkFBVSxFQUFFLEtBQWI7QUFBb0JFLHdCQUFVLEVBQUUsTUFBaEM7QUFBd0NKLG1CQUFLLEVBQUUsU0FBL0M7QUFBMERDLHNCQUFRLEVBQUU7QUFBcEUsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUdJO0FBQUcsaUJBQUssRUFBRTtBQUFDSSx1QkFBUyxFQUFFLEtBQVo7QUFBbUJDLDBCQUFZLEVBQUUsTUFBakM7QUFBeUNGLHdCQUFVLEVBQUUsTUFBckQ7QUFBNkRKLG1CQUFLLEVBQUUsU0FBcEU7QUFBOEVDLHNCQUFRLEVBQUU7QUFBeEYsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQU9JLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQVVJLHFFQUFDLE9BQUQ7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQyxjQUFUO0FBQXdCLGlCQUFLLEVBQUMsT0FBOUI7QUFBc0Msa0JBQU0sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlESixlQWtGSSxxRUFBQyxnQkFBRDtBQUFBLDhCQUNJLHFFQUFDLFFBQUQ7QUFBVSxhQUFLLEVBQUU7QUFBQ0ksbUJBQVMsRUFBQztBQUFYLFNBQWpCO0FBQUEsZ0NBQ0kscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUkscUVBQUMsVUFBRDtBQUFZLGFBQUssRUFBRTtBQUFDRixlQUFLLEVBQUM7QUFBUCxTQUFuQjtBQUFBLGdDQUNJLHFFQUFDLE9BQUQ7QUFBQSxvQkFDS3BCLGFBQWEsQ0FBQ1ksR0FBZCxDQUFrQixDQUFDbUIsV0FBRCxFQUFjakIsR0FBZCxLQUFvQjtBQUNuQyxnQ0FDSSxxRUFBQyxjQUFEO0FBQUEseUJBQ0tpQixXQUFXLENBQUM5QixJQURqQixlQUVJLHFFQUFDLFNBQUQ7QUFBQSwwQkFBWThCLFdBQVcsQ0FBQzdCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSSxxRUFBQyxRQUFEO0FBQUEsMEJBQVc2QixXQUFXLENBQUM1QjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhKO0FBQUEsZUFBcUJXLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFPSCxXQVJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQVlJLHFFQUFDLE9BQUQ7QUFBQSxvQkFDS1YsYUFBYSxDQUFDUSxHQUFkLENBQWtCLENBQUNtQixXQUFELEVBQWNqQixHQUFkLEtBQW9CO0FBQy9CLGdDQUNJLHFFQUFDLGNBQUQ7QUFBQSx5QkFDS2lCLFdBQVcsQ0FBQzlCLElBRGpCLGVBRUkscUVBQUMsU0FBRDtBQUFBLDBCQUFZOEIsV0FBVyxDQUFDN0I7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSixlQUdJLHFFQUFDLFFBQUQ7QUFBQSwwQkFBVzZCLFdBQVcsQ0FBQzVCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEo7QUFBQSxlQUFxQlcsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQU9QLFdBUkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEZKLGVBaUhJLHFFQUFDLFFBQUQ7QUFBQSw4QkFDSSxxRUFBQyxRQUFEO0FBQVUsYUFBSyxFQUFFO0FBQUNTLHNCQUFZLEVBQUU7QUFBZixTQUFqQjtBQUFBLGdDQUNJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JLHFFQUFDLE9BQUQ7QUFBUyxhQUFLLEVBQUU7QUFBQ0Usb0JBQVUsRUFBQztBQUFaLFNBQWhCO0FBQUEsZ0NBQ0kscUVBQUMsU0FBRDtBQUFBLGtDQUNJLHFFQUFDLFVBQUQ7QUFBQSxvQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUkscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBTUkscUVBQUMsT0FBRDtBQUFTLGlCQUFLLEVBQUU7QUFBQzdFLDJCQUFhLEVBQUMsUUFBZjtBQUF5QjJFLDBCQUFZLEVBQUU7QUFBdkMsYUFBaEI7QUFBQSxvQ0FDSSxxRUFBQyxPQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDQSw0QkFBWSxFQUFDO0FBQWQsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUMsY0FBVDtBQUF3QixxQkFBSyxFQUFFO0FBQUNTLDZCQUFXLEVBQUUsS0FBZDtBQUFxQlYsMkJBQVMsRUFBQztBQUEvQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUkscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFLSSxxRUFBQyxPQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDQyw0QkFBWSxFQUFDO0FBQWQsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUMsYUFBVDtBQUF1QixxQkFBSyxFQUFFO0FBQUNTLDZCQUFXLEVBQUUsS0FBZDtBQUFxQlYsMkJBQVMsRUFBQztBQUEvQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUkscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosZUFTSSxxRUFBQyxPQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDQyw0QkFBWSxFQUFDO0FBQWQsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUMsaUJBQVQ7QUFBMkIscUJBQUssRUFBRTtBQUFDUyw2QkFBVyxFQUFFLEtBQWQ7QUFBcUJWLDJCQUFTLEVBQUM7QUFBL0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRKLGVBYUkscUVBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ0MsNEJBQVksRUFBQztBQUFkLGVBQWhCO0FBQUEsc0NBQ0k7QUFBRyxxQkFBSyxFQUFDLGFBQVQ7QUFBdUIscUJBQUssRUFBRTtBQUFDUyw2QkFBVyxFQUFFLEtBQWQ7QUFBcUJWLDJCQUFTLEVBQUM7QUFBL0I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWJKLGVBaUJJLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBMkJJLHFFQUFDLFNBQUQ7QUFBQSxrQ0FDSSxxRUFBQyxVQUFEO0FBQUEsb0NBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFHSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQU1JLHFFQUFDLE9BQUQ7QUFBUyxpQkFBSyxFQUFFO0FBQUMxRSwyQkFBYSxFQUFDLFFBQWY7QUFBeUIyRSwwQkFBWSxFQUFFO0FBQXZDLGFBQWhCO0FBQUEsb0NBQ0kscUVBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ0EsNEJBQVksRUFBQztBQUFkLGVBQWhCO0FBQUEsc0NBQ0k7QUFBRyxxQkFBSyxFQUFDLGNBQVQ7QUFBd0IscUJBQUssRUFBRTtBQUFDUyw2QkFBVyxFQUFFLEtBQWQ7QUFBcUJWLDJCQUFTLEVBQUM7QUFBL0I7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBS0kscUVBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ0MsNEJBQVksRUFBQztBQUFkLGVBQWhCO0FBQUEsc0NBQ0k7QUFBRyxxQkFBSyxFQUFDLGFBQVQ7QUFBdUIscUJBQUssRUFBRTtBQUFDUyw2QkFBVyxFQUFFLEtBQWQ7QUFBcUJWLDJCQUFTLEVBQUM7QUFBL0I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKLGVBU0kscUVBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ0MsNEJBQVksRUFBQztBQUFkLGVBQWhCO0FBQUEsc0NBQ0k7QUFBRyxxQkFBSyxFQUFDLGlCQUFUO0FBQTJCLHFCQUFLLEVBQUU7QUFBQ1MsNkJBQVcsRUFBRSxLQUFkO0FBQXFCViwyQkFBUyxFQUFDO0FBQS9CO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFUSixlQWFJLHFFQUFDLE9BQUQ7QUFBUyxtQkFBSyxFQUFFO0FBQUNDLDRCQUFZLEVBQUM7QUFBZCxlQUFoQjtBQUFBLHNDQUNJO0FBQUcscUJBQUssRUFBQyxhQUFUO0FBQXVCLHFCQUFLLEVBQUU7QUFBQ1MsNkJBQVcsRUFBRSxLQUFkO0FBQXFCViwyQkFBUyxFQUFDO0FBQS9CO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFiSixlQWlCSSxxRUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQkosZUFxREkscUVBQUMsU0FBRDtBQUFBLGtDQUNJLHFFQUFDLFVBQUQ7QUFBQSxvQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUkscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBTUkscUVBQUMsT0FBRDtBQUFTLGlCQUFLLEVBQUU7QUFBQzFFLDJCQUFhLEVBQUMsUUFBZjtBQUF5QjJFLDBCQUFZLEVBQUU7QUFBdkMsYUFBaEI7QUFBQSxvQ0FDSSxxRUFBQyxPQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDQSw0QkFBWSxFQUFDO0FBQWQsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUMsY0FBVDtBQUF3QixxQkFBSyxFQUFFO0FBQUNTLDZCQUFXLEVBQUUsS0FBZDtBQUFxQlYsMkJBQVMsRUFBQztBQUEvQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUkscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFLSSxxRUFBQyxPQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDQyw0QkFBWSxFQUFDO0FBQWQsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUMsYUFBVDtBQUF1QixxQkFBSyxFQUFFO0FBQUNTLDZCQUFXLEVBQUUsS0FBZDtBQUFxQlYsMkJBQVMsRUFBQztBQUEvQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUkscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosZUFTSSxxRUFBQyxPQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDQyw0QkFBWSxFQUFDO0FBQWQsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUMsaUJBQVQ7QUFBMkIscUJBQUssRUFBRTtBQUFDUyw2QkFBVyxFQUFFLEtBQWQ7QUFBcUJWLDJCQUFTLEVBQUM7QUFBL0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRKLGVBYUkscUVBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ0MsNEJBQVksRUFBQztBQUFkLGVBQWhCO0FBQUEsc0NBQ0k7QUFBRyxxQkFBSyxFQUFDLGFBQVQ7QUFBdUIscUJBQUssRUFBRTtBQUFDUyw2QkFBVyxFQUFFLEtBQWQ7QUFBcUJWLDJCQUFTLEVBQUM7QUFBL0I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWJKLGVBaUJJLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpISixlQXdNSSxxRUFBQyxVQUFEO0FBQUEsOEJBQ0kscUVBQUMsUUFBRDtBQUFVLGFBQUssRUFBRTtBQUFDQyxzQkFBWSxFQUFFO0FBQWYsU0FBakI7QUFBQSxnQ0FDSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSSxxRUFBQyxPQUFEO0FBQVMsYUFBSyxFQUFFO0FBQUNILGVBQUssRUFBQyxLQUFQO0FBQWFVLHdCQUFjLEVBQUMsUUFBNUI7QUFBcUNQLHNCQUFZLEVBQUUsTUFBbkQ7QUFBMERFLG9CQUFVLEVBQUM7QUFBckUsU0FBaEI7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBQyxnQkFBVDtBQUEwQixlQUFLLEVBQUU7QUFBQ08sdUJBQVcsRUFBQyxNQUFiO0FBQW9CSixrQkFBTSxFQUFDO0FBQTNCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFLLGFBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUssRUFBRTtBQUFDSSx1QkFBVyxFQUFDLE1BQWI7QUFBb0JKLGtCQUFNLEVBQUM7QUFBM0I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUssYUFBRyxFQUFDLGdCQUFUO0FBQTBCLGVBQUssRUFBRTtBQUFDSSx1QkFBVyxFQUFDLE1BQWI7QUFBb0JKLGtCQUFNLEVBQUM7QUFBM0I7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQUssYUFBRyxFQUFDLGVBQVQ7QUFBeUIsZUFBSyxFQUFFO0FBQUNBLGtCQUFNLEVBQUM7QUFBUjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQVlJLHFFQUFDLE9BQUQ7QUFBUyxhQUFLLEVBQUU7QUFBQ0ssaUJBQU8sRUFBRSxNQUFWO0FBQWtCYixlQUFLLEVBQUM7QUFBeEIsU0FBaEI7QUFBQSxnQ0FDSTtBQUFLLGVBQUssRUFBRTtBQUFDWSx1QkFBVyxFQUFFO0FBQWQsV0FBWjtBQUFBLGtDQUNJLHFFQUFDLFNBQUQ7QUFBQSxtQ0FDSSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQU1JLHFFQUFDLE9BQUQ7QUFBUyxpQkFBSyxFQUFFO0FBQUNFLHdCQUFVLEVBQUU7QUFBYixhQUFoQjtBQUFBLG9DQUNJLHFFQUFDLE9BQUQ7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUMsV0FBVDtBQUFxQixxQkFBSyxFQUFFO0FBQUNDLDhCQUFZLEVBQUU7QUFBZixpQkFBNUI7QUFBbUQscUJBQUssRUFBQyxNQUF6RDtBQUFnRSxzQkFBTSxFQUFDO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBSUkscUVBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ3ZGLDZCQUFhLEVBQUMsUUFBZjtBQUF3QnNGLDBCQUFVLEVBQUU7QUFBcEMsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUU7QUFBQ2hCLDBCQUFRLEVBQUMsTUFBVjtBQUFrQkssOEJBQVksRUFBQztBQUEvQixpQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQUcscUJBQUssRUFBRTtBQUFDSiw0QkFBVSxFQUFDLEtBQVo7QUFBa0JGLHVCQUFLLEVBQUUsU0FBekI7QUFBbUNDLDBCQUFRLEVBQUMsTUFBNUM7QUFBbURJLDJCQUFTLEVBQUM7QUFBN0QsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFpQkk7QUFBSyxlQUFLLEVBQUU7QUFBQ1UsdUJBQVcsRUFBRTtBQUFkLFdBQVo7QUFBQSxrQ0FDSSxxRUFBQyxTQUFEO0FBQUEsbUNBQ0kscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFNSSxxRUFBQyxPQUFEO0FBQVMsaUJBQUssRUFBRTtBQUFDRSx3QkFBVSxFQUFFO0FBQWIsYUFBaEI7QUFBQSxvQ0FDSSxxRUFBQyxPQUFEO0FBQUEscUNBQ0k7QUFBSyxtQkFBRyxFQUFDLFlBQVQ7QUFBc0IscUJBQUssRUFBRTtBQUFDQyw4QkFBWSxFQUFFO0FBQWYsaUJBQTdCO0FBQW9ELHFCQUFLLEVBQUMsTUFBMUQ7QUFBaUUsc0JBQU0sRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJLHFFQUFDLE9BQUQ7QUFBUyxtQkFBSyxFQUFFO0FBQUN2Riw2QkFBYSxFQUFDLFFBQWY7QUFBd0JzRiwwQkFBVSxFQUFFO0FBQXBDLGVBQWhCO0FBQUEsc0NBQ0k7QUFBRyxxQkFBSyxFQUFFO0FBQUNoQiwwQkFBUSxFQUFDLE1BQVY7QUFBa0JLLDhCQUFZLEVBQUM7QUFBL0IsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSTtBQUFHLHFCQUFLLEVBQUU7QUFBQ0osNEJBQVUsRUFBQyxLQUFaO0FBQWtCRix1QkFBSyxFQUFFLFNBQXpCO0FBQW1DQywwQkFBUSxFQUFDLE1BQTVDO0FBQW1ESSwyQkFBUyxFQUFDO0FBQTdELGlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCSixlQWlDSTtBQUFLLGVBQUssRUFBRTtBQUFDVSx1QkFBVyxFQUFFO0FBQWQsV0FBWjtBQUFBLGtDQUNJLHFFQUFDLFNBQUQ7QUFBQSxtQ0FDSSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQU1JLHFFQUFDLE9BQUQ7QUFBUyxpQkFBSyxFQUFFO0FBQUNFLHdCQUFVLEVBQUU7QUFBYixhQUFoQjtBQUFBLG9DQUNJLHFFQUFDLE9BQUQ7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUMsWUFBVDtBQUFzQixxQkFBSyxFQUFFO0FBQUNDLDhCQUFZLEVBQUU7QUFBZixpQkFBN0I7QUFBb0QscUJBQUssRUFBQyxNQUExRDtBQUFpRSxzQkFBTSxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBSUkscUVBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ3ZGLDZCQUFhLEVBQUMsUUFBZjtBQUF3QnNGLDBCQUFVLEVBQUU7QUFBcEMsZUFBaEI7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUU7QUFBQ2hCLDBCQUFRLEVBQUMsTUFBVjtBQUFrQkssOEJBQVksRUFBQztBQUEvQixpQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQUcscUJBQUssRUFBRTtBQUFDSiw0QkFBVSxFQUFDLEtBQVo7QUFBa0JGLHVCQUFLLEVBQUUsU0FBekI7QUFBbUNDLDBCQUFRLEVBQUMsTUFBNUM7QUFBbURJLDJCQUFTLEVBQUM7QUFBN0QsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeE1KLGVBdVFJLHFFQUFDLFVBQUQ7QUFBQSw4QkFDSSxxRUFBQyxRQUFEO0FBQVUsYUFBSyxFQUFFO0FBQUNDLHNCQUFZLEVBQUM7QUFBZCxTQUFqQjtBQUFBLGdDQUNJLHFFQUFDLFVBQUQ7QUFBWSxvQkFBVSxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsYUFBRDtBQUFlLG9CQUFVLEVBQUMsT0FBMUI7QUFBa0MsZUFBSyxFQUFFO0FBQUNHLG1CQUFPLEVBQUM7QUFBVCxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSSxxRUFBQyxRQUFEO0FBQUEsZ0NBQ0kscUVBQUMsY0FBRDtBQUFnQixjQUFJLEVBQUMsTUFBckI7QUFBNEIscUJBQVcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUcsZUFBSyxFQUFFO0FBQUNSLG9CQUFRLEVBQUMsTUFBVjtBQUFrQkQsaUJBQUssRUFBRSx1QkFBekI7QUFBa0RLLHFCQUFTLEVBQUU7QUFBN0QsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZRSixlQW1SSSxxRUFBQyxVQUFEO0FBQUEsOEJBQ0kscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBRTtBQUFDRixlQUFLLEVBQUMsS0FBUDtBQUFjVSx3QkFBYyxFQUFDLGNBQTdCO0FBQTRDUCxzQkFBWSxFQUFDO0FBQXpELFNBQWhCO0FBQUEsZ0NBQ0kscUVBQUMsT0FBRDtBQUFTLHVCQUFhLEVBQUMsUUFBdkI7QUFBQSxrQ0FDSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ04sbUJBQUssRUFBQyxPQUFQO0FBQWVFLHdCQUFVLEVBQUU7QUFBM0IsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUkscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixlQUtJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBUUkscUVBQUMsT0FBRDtBQUFTLHVCQUFhLEVBQUMsUUFBdkI7QUFBQSxrQ0FDSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0YsbUJBQUssRUFBQyxPQUFQO0FBQWVFLHdCQUFVLEVBQUU7QUFBM0IsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUkscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixlQUtJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBZUkscUVBQUMsT0FBRDtBQUFTLHVCQUFhLEVBQUMsUUFBdkI7QUFBQSxrQ0FDSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0YsbUJBQUssRUFBQyxPQUFQO0FBQWVFLHdCQUFVLEVBQUU7QUFBM0IsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUkscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkosZUFxQkkscUVBQUMsT0FBRDtBQUFTLHVCQUFhLEVBQUMsUUFBdkI7QUFBQSxrQ0FDSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0YsbUJBQUssRUFBQyxPQUFQO0FBQWVFLHdCQUFVLEVBQUU7QUFBM0IsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUcsaUJBQUssRUFBRTtBQUFDRixtQkFBSyxFQUFFLHVCQUFSO0FBQWdDQyxzQkFBUSxFQUFDLE1BQXpDO0FBQWlESywwQkFBWSxFQUFFLEtBQS9EO0FBQXNFRCx1QkFBUyxFQUFFO0FBQWpGLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0wsbUJBQUssRUFBRSx1QkFBUjtBQUFnQ0Msc0JBQVEsRUFBQyxNQUF6QztBQUFpREssMEJBQVksRUFBRSxLQUEvRDtBQUFzRUQsdUJBQVMsRUFBRTtBQUFqRixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUk7QUFBRyxpQkFBSyxFQUFFO0FBQUNMLG1CQUFLLEVBQUUsdUJBQVI7QUFBZ0NDLHNCQUFRLEVBQUMsTUFBekM7QUFBaURLLDBCQUFZLEVBQUUsS0FBL0Q7QUFBc0VELHVCQUFTLEVBQUU7QUFBakYsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixlQUtJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUE4QkkscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBRTtBQUFDRyxvQkFBVSxFQUFDO0FBQVosU0FBaEI7QUFBQSwrQkFDSTtBQUFHLGVBQUssRUFBRTtBQUFDUixpQkFBSyxFQUFFLFNBQVI7QUFBa0JDLG9CQUFRLEVBQUM7QUFBM0IsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3VEgsQ0EzVEQ7O0FBNlRlYixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHRCQTtBQUdBLE1BQU0rQixrQkFBa0IsR0FBRzNGLHdEQUFNLENBQUNZLE1BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FiQTs7QUFrQkEsTUFBTWdGLFlBQVksR0FBSTFGLEtBQUQsSUFBbUI7QUFDcEMsUUFBTTtBQUFDMkY7QUFBRCxNQUFhM0YsS0FBbkI7QUFDQSxzQkFBTyxxRUFBQyxrQkFBRDtBQUFBLGNBQXFCMkY7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsQ0FIRDs7QUFLZUQsMkVBQWYsRTs7Ozs7Ozs7Ozs7QUMxQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBNYWluIGZyb20gJy4vbWFpbidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gPE1haW4gLz5cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENvbW1vbkJ1dHRvbiBmcm9tICcuLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db21tb25CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIEZsZXhCb3hQcm9wcyB7XHJcbiAgICBmbGV4RGlyZWN0aW9uPzpzdHJpbmdcclxufVxyXG5jb25zdCBGbGV4Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzOiBGbGV4Qm94UHJvcHMpID0+XHJcbiAgICAgICAgcHJvcHMuZmxleERpcmVjdGlvbiA/IHByb3BzLmZsZXhEaXJlY3Rpb24gOiAncm93J307XHJcbmBcclxuXHJcbmNvbnN0IFVwcGVyTGVmdEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOjIwJTsgcGFkZGluZzoyMHB4O1xyXG5gXHJcbmNvbnN0IFVwcGVyUmlnaHRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuYFxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmJvZHlgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IEhlYWRlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbmBcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxyXG4gICAgcGFkZGluZy10b3A6MTUwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206MTUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxYmY4NjtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICB3aWR0aDogNTAlOyBcclxuICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbmBcclxuXHJcblxyXG5jb25zdCBNZW51QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIG1hcmdpbi1yaWdodDoxNXB4OyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxYmY4NjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IENvbnRlbnRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IFxyXG4gICAgd2lkdGg6NTAlOyBcclxuICAgIHBhZGRpbmc6MzBweDtcclxuYFxyXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOjMwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgXHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6MzMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMjJweCA0NXB4IC0xNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuYFxyXG5cclxuY29uc3QgRmxleEJveDIgPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcblxyXG5jb25zdCBNZW51QnV0dG9uU3ViID0gc3R5bGVkKE1lbnVCdXR0b24pYFxyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbmBcclxuY29uc3QgWm9kS29vID0gc3R5bGVkKE1lbnVCdXR0b24pYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbmBcclxuY29uc3QgVHJ5QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiMwMWJmODY7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgXHJcbiAgICBib3JkZXI6d2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFN0YXJ0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxYmY4NjsgXHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lIDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIH1cclxuYFxyXG5jb25zdCBJbnB1dFRoaW5nID0gc3R5bGVkLmlucHV0YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbmBcclxuY29uc3QgSW5wdXRTdWJzY3JpYmUgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBvcGFjaXR5OjAuNTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IFN0YXJ0Tm93QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAxYmY4NiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgfVxyXG5gXHJcbi8vIGNvbnN0IENvbW1vbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4vLyAgICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4vLyAgICAgd2lkdGg6IDE1MHB4O2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICBoZWlnaHQ6IDQwcHg7Ym9yZGVyLXJhZGl1czogNDAwcHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICA6aG92ZXJ7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4vLyAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMWJmODYgO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMDFiZjg2IDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiBub25lIDtcclxuLy8gICAgIH1cclxuLy8gYFxyXG5jb25zdCBQcm9kdWN0RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMDBweDtcclxuYFxyXG5jb25zdCBUZXh0U3R5bGUgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiM0OTYxNzQ7IFxyXG4gICAgZm9udC1zaXplOjIycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZTIgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCIjNDk2MTc0XCJ9OyBcclxuICAgIGZvbnQtc2l6ZToyMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuYFxyXG5jb25zdCBUZXh0U3R5bGVTdWIyID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCIjOTVBOEI3XCJ9OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IFRleHRTdHlsZVN1YiA9IHN0eWxlZC5wYFxyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzk1QThCNztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgU3BlY2lmaWNhdGlvbkRpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmZhOyBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlZWY2OyBcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWY2O1xyXG5gXHJcbmNvbnN0IERpc3BsYXlEaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAwcHg7XHJcbmBcclxuY29uc3QgTWluaUJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgTWluaUJveEZlYXR1cmUgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbmBcclxuY29uc3QgU3BlY1RpdGxlID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjojNDk2MTc0O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG5gXHJcbmNvbnN0IFNwZWNUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjogIzk1QThCNyAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBQcmljZURpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDoxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5gXHJcbmNvbnN0IFByaWNlTWVudSA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzk1QThCNztcclxuYFxyXG5jb25zdCBQcmljZUNsYXNzID0gc3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyNXB4O1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUxID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjojMDFiZjg2O1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYFxyXG5jb25zdCBQcmljZVRpdGxlMiA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgY29sb3I6IzQ5NjE3NDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUzID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3BhY2l0eTowLjU7IFxyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5gXHJcbmNvbnN0IFByaWNlRGV0YWlsID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmBcclxuY29uc3QgU3BvbnNvckRpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmZhIDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlZWY2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuYFxyXG5jb25zdCBSZXZpZXdUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjOTVBOEI3O1xyXG5gXHJcbmNvbnN0IFJldmlld0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7d2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjIxLDIyMSwyMjEsMC4zMik7XHJcbmBcclxuY29uc3QgQ29udGFjdERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG5gXHJcbmNvbnN0IFN1YnNjcmliZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBjb2xvcjojMDFiZjg2OyB3aWR0aDogMTUwcHg7Y3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4OyBmb250LXdlaWdodDogNjAwO2JvcmRlcjp3aGl0ZTtib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFN1cHBvcnREaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNlNDc7XHJcbmBcclxuY29uc3QgQm90dG9tRXRjID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuYFxyXG5jb25zdCBJY29uUGxheSA9IHN0eWxlZC5pYFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctdG9wOjNweDsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuYFxyXG5jb25zdCBJY29uTWluaSA9IHN0eWxlZC5pYFxyXG4gICAgY29sb3I6ICMwMWJmODY7IFxyXG4gICAgZm9udC1zaXplOjQ4cHg7XHJcbmBcclxuY29uc3QgaGVhZGVyTWVudUJ1dHRvblRleHRzID0gW1xyXG4gICAgJ0ZlYXR1cmVzJyxcclxuICAgICdQbGFucycsXHJcbiAgICAnQ2xpZW50cycsXHJcbiAgICAnUGFnZXPilrwnXHJcbl1cclxuY29uc3QgRmVhdHVyZUl0ZW1zMSA9IFtcclxuICAgIHtcclxuICAgICAgICBpY29uOiA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtZGlzcGxheTFcIj48L0ljb25NaW5pPixcclxuICAgICAgICBib2R5MTogJ1N0cmF0ZWd5IFNvbHV0aW9ucycsXHJcbiAgICAgICAgYm9keTI6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3Mtc2NpZW5jZVwiPjwvSWNvbk1pbmk+LFxyXG4gICAgICAgIGJvZHkxOiAnRGlnaXRhbCBEZXNpZ24nLFxyXG4gICAgICAgIGJvZHkyOiAnQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbiA6IDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1kaXNwbGF5MVwiPjwvSWNvbk1pbmk+LFxyXG4gICAgICAgIGJvZHkxIDogJ0FuYWx5dGljcyBTb2x1dGlvbnMnLFxyXG4gICAgICAgIGJvZHkyIDogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0uJ1xyXG4gICAgfSxcclxuXVxyXG5jb25zdCBGZWF0dXJlSXRlbXMyID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb246IDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1kYXRlXCI+PC9JY29uTWluaT4sXHJcbiAgICAgICAgYm9keTE6ICdTdHJhdGVneSBTb2x1dGlvbnMnLFxyXG4gICAgICAgIGJvZHkyOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWNyZWRpdFwiPjwvSWNvbk1pbmk+LFxyXG4gICAgICAgIGJvZHkxOiAnRGlnaXRhbCBEZXNpZ24nLFxyXG4gICAgICAgIGJvZHkyOiAnQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbiA6IDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1oZWFkcGhvbmVzXCI+PC9JY29uTWluaT4sXHJcbiAgICAgICAgYm9keTEgOiAnQW5hbHl0aWNzIFNvbHV0aW9ucycsXHJcbiAgICAgICAgYm9keTIgOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS4nXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSGVhZGVyTWVudUlkeCwgc2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRIZWFkZXJNZW51SWR4OiR7c2VsZWN0ZWRIZWFkZXJNZW51SWR4fWApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb2R5IHN0eWxlPXt7bWFyZ2luOicwJ319PlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vaTVzMnprcy82a09vaHdsdXgvcGUtaWNvbi03LXN0cm9rZS5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgPEhlYWRlckRpdj5cclxuICAgICAgICAgICAgICAgIDxVcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFpvZEtvbz5ab2RLb288L1pvZEtvbz5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbj5Ib21lPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoZWFkZXJNZW51QnV0dG9uVGV4dHMubWFwKChoZWFkZXJNZW51QnV0dG9uVGV4dCxpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4KGlkeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkSGVhZGVyTWVudUlkeCA9PSBpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlck1lbnVCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1VwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgIDxVcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPkxvZ2luPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcnlCdXR0b24+VHJ5IGZvciBGcmVlPC9UcnlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1VwcGVyUmlnaHRCb3g+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWRlckRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzAxYmY4Nid9fT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzMwcHgnLGZvbnRXZWlnaHQ6JzIwMCcsd2lkdGg6Jzc1JSd9fT5ab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiAnMjRweCcsIGZvbnRTaXplOicxNnB4JywgbWFyZ2luVG9wOicxMHB4JywgbWFyZ2luQm90dG9tOic1MHB4JywgZm9udFdlaWdodDogJzQwMCcsd2lkdGg6Jzk1JScsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSBidWlsdCB1c2luZyB0aGUgbGF0ZXN0IEJvb3RzdHJhcCBmcmFtZXdvcmsuIEl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy4gVGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48U3RhcnRCdXR0b24+R0VUIFNUQVJURUQ8L1N0YXJ0QnV0dG9uPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6J21lZGl1bScsIGNvbG9yOid3aGl0ZScsIG1hcmdpbjogJzAgMjBweCcsIG9wYWNpdHk6JzAuNyd9fT5PUjwvc3Bhbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJyMwMWJmODYnLGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDFiZjg2Jyxmb250U2l6ZTonMTVweCcsZm9udFdlaWdodDonNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PEljb25QbGF5IGNsYXNzTmFtZT1cInBlLTdzLXBsYXlcIj48L0ljb25QbGF5PldBVENIIFZJREVPPC9idXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM3NzhmYTInLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMzBweCcsIG1hcmdpblRvcDogJzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFR0lTVEVSIEZPUiBGUkVFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJ0Tm93QnV0dG9uPlNUQVJUIE5PVzwvU3RhcnROb3dCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOicxMnB4JyxvcGFjaXR5OicwLjcnLHdoaXRlU3BhY2U6ICdwcmUnfX0+QnkgcmVnaXN0ZXJpbmcgeW91IGFncmVlIHRvIHRoZSBab2Rrb28gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsY29sb3I6J2JsdWUnfX0+VGVybXMgb2YgVXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtbWVkYWxcIiBzdHlsZT17e2ZvbnRTaXplOic0OHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNzBweCd9fT5DbGVhbiBhbmQgVWx0cmEgTW9kZXJuIERlc2lnbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzY1JScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLHdpZHRoOiczMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDogJzMwMCcsIGxpbmVIZWlnaHQ6ICcyOHB4JywgY29sb3I6ICcjOTVBOEI3JywgZm9udFNpemU6ICcxOHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5QcmFlc2VudCBldCB2aXZlcnJhIG1hc3NhIG5vbiB2YXJpdXMgbWFnbmEgZWdldCBuaWJoIHZpdGFlIHZlbGl0IHBvc3VlcmUgZWZmaWNpdHVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6ICc1cHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JywgbGluZUhlaWdodDogJzI2cHgnLCBjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOiAnMTRweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy5XZSBwdXQgYSBsb3Qgb2YgZWZmb3J0IGluIGRlc2lnbiwgYXMgaXTigJlzIHRoZSBtb3N0IGltcG9ydGFudCBpbmdyZWRpZW50IG9mIHN1Y2Nlc3NmdWwgd2Vic2l0ZS5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQuV2UgcHV0IGEgbG90IG9mIGVmZm9ydCBpbiBkZXNpZ24sIGFzIGl04oCZcyB0aGUgbW9zdCBpbXBvcnRhbnQgaW5ncmVkaWVudCBvZiBzdWNjZXNzZnVsIHdlYnNpdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+TEVBUk4gTU9SRTwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWFjYm9vay5wbmdcIiB3aWR0aD1cIjY1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICA8U3BlY2lmaWNhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpblRvcDonMTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5JdCdzIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3M8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RGlzcGxheURpdiBzdHlsZT17e3dpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtGZWF0dXJlSXRlbXMxLm1hcCgoZmVhdHVyZUl0ZW0sIGlkeCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVJdGVtLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+e2ZlYXR1cmVJdGVtLmJvZHkxfTwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+e2ZlYXR1cmVJdGVtLmJvZHkyfTwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7RmVhdHVyZUl0ZW1zMi5tYXAoKGZlYXR1cmVJdGVtLCBpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlSXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT57ZmVhdHVyZUl0ZW0uYm9keTF9PC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+e2ZlYXR1cmVJdGVtLmJvZHkyfTwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0Rpc3BsYXlEaXY+XHJcbiAgICAgICAgICAgIDwvU3BlY2lmaWNhdGlvbkRpdj5cclxuICAgICAgICAgICAgPFByaWNlRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlPkNob29zZSB5b3VyIHBlcmZlY3QgcGxhbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7YWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUxPkJBU0lDPC9QcmljZVRpdGxlMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMj4kMTk8L1ByaWNlVGl0bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUzPlBlciBNb250aDwvUHJpY2VUaXRsZTM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW5Cb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1zZXJ2ZXJcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLWdyYXBoXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjUwMCBHQiBCYW5kd2lkdGg8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1tYWlsLW9wZW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXRvb2xzXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjI0eDcgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNJR05VUCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUxPlBSRU1JVU08L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQyOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXNlcnZlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtZ3JhcGhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLW1haWwtb3BlblwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtdG9vbHNcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+REVWRUxPUEVSPC9QcmljZVRpdGxlMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMj4kMzk8L1ByaWNlVGl0bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUzPlBlciBNb250aDwvUHJpY2VUaXRsZTM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW5Cb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1zZXJ2ZXJcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLWdyYXBoXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjUwMCBHQiBCYW5kd2lkdGg8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1tYWlsLW9wZW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXRvb2xzXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjI0eDcgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNJR05VUCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1ByaWNlRGl2PlxyXG4gICAgICAgICAgICA8U3BvbnNvckRpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzEwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+VHJ1c3RlZCBieSBUaG91c2FuZHM8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e3dpZHRoOic4MCUnLGp1c3RpZnlDb250ZW50OidjZW50ZXInLG1hcmdpbkJvdHRvbTogJzcwcHgnLGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9taWNyb3NvZnQucG5nXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMzBweCcsY3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ29vZ2xlLnBuZ1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzMwcHgnLGN1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2luc3RhZ3JhbS5wbmdcIiBzdHlsZT17e21hcmdpblJpZ2h0OiczMHB4JyxjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb252ZXJzZS5wbmdcIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3twYWRkaW5nOiAnMzBweCcsIHdpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAnCBUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHMgd2hpY2ggZG9uJ3QgbG9vayBldmVuIHNsaWdodGx5IGJlbGlldmFibGUu4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkxlZnQ6ICcyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlci5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyMi5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyMy5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9TcG9uc29yRGl2PlxyXG4gICAgICAgICAgICA8Q29udGFjdERpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpbkJvdHRvbTonMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlMiBpbnB1dENvbG9yPVwid2hpdGVcIj5CZSBlbmdhZ2VkIE5ld3NsZXR0ZXI8L1RleHRTdHlsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1YjIgaW5wdXRDb2xvcj1cIndoaXRlXCIgc3R5bGU9e3tvcGFjaXR5OicwLjcnfX0+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViMj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0U3Vic2NyaWJlIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwgYWRkcmVzc1wiPjwvSW5wdXRTdWJzY3JpYmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbj5TVUJTQ1JJQkU8L1N1YnNjcmliZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxMnB4JywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknLCBtYXJnaW5Ub3A6ICczcHgnfX0+WW91IGNhbiB1bi1zdWJzY3JpYmUgYXQgYW55IHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgPC9Db250YWN0RGl2PlxyXG4gICAgICAgICAgICA8U3VwcG9ydERpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzYwJScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknLG1hcmdpbkJvdHRvbTonNzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5ab2Rrb288L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+SG9tZTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkZlYXR1cmVzPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+VGVhbTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkZBUTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5Tb2NpYWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RmFjZWJvb2s8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Ud2l0dGVyPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+QmVoYW5jZTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkRyaWJiYmxlPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGZsZXhEaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlN1cHBvcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+SGVscCAmIFN1cHBvcnQ8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Qcml2YWN5IFBvbGljeTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlRlcm1zICYgQ29uZGl0aW9uczwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5Db250YWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT43OTUgRm9sc29tIEF2ZSwgU3VpdGUgNjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT5TYW4gRnJhbmNpc2NvLCBDQSA5NDEwNzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsZm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnfX0+UDogKDEyMykgNDU2LTc4OTA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RTogZW1haWxAZW1haWwuY29tPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4J319PjIwMjAgwqkgWm9ka29vPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1N1cHBvcnREaXY+XHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcblxyXG5jb25zdCBTdHlsZWRDb21tb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIHdpZHRoOiAxNTBweDtmb250LXdlaWdodDogNjAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O2JvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDFiZjg2IDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICB9XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGNoaWxkcmVuPyA6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDb21tb25CdXR0b24gPSAocHJvcHMgOiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHByb3BzXHJcbiAgICByZXR1cm4gPFN0eWxlZENvbW1vbkJ1dHRvbj57Y2hpbGRyZW59PC9TdHlsZWRDb21tb25CdXR0b24+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbkJ1dHRvbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9