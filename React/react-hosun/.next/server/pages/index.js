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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bae Kyungmo\\OneDrive\\Desktop\\FrontEndStudy\\React\\react-hosun\\pages\\main\\index.tsx";

const FlexBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display : flex;
`;
const UpperLeftBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox)`
    width:20%; padding:20px;
`;
const UpperRightBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox)`
    margin-right:20px;
`;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.body`
    display:flex;
    flex-direction:column;
    margin:0px;
    font-family: "Roboto", sans-serif;
    width:100%;
`;
const HeaderDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
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
const DescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    margin-top:50px; 
    display:flex; 
    align-items:center; 
    padding-top:75px; 
    padding-bottom:150px;
    justify-content:space-around; 
    background-color:#01bf86;
    width:100%;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox)`
    width: 60%; 
    flex-direction : column;
    justify-content: space-between; 
    padding-top:50px;
`;
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
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
const ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox)`
    flex-direction:column; 
    width:50%; 
    padding:30px;
`;
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    padding:30px; 
    background-color:white; 
    color:gray;
    border-radius: 5px;
    align-items:center;
    width:300px;
    height:330px;
    box-shadow: 0px 22px 45px -15px rgba(0,0,0,0.5);
`;
const FlexBox2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox)`
    flex-direction:column;
    align-items:center;
`;
const MenuButtonSub = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(MenuButton)`
    opacity: 0.7;
    scroll-behavior: smooth;
`;
const ZodKoo = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(MenuButton)`
    margin-right:60px;
    font-weight: 600;
    font-size: larger;
`;
const TryButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
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
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
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
const InputThing = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
    margin-bottom: 20px;
    width:100%;
    height: 30px;
    border: 1px solid #eee;
    padding-left: 10px;
    color: grey;
`;
const InputSubscribe = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
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
const StartNowButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
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
const CommonButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
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
const ProductDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    margin-top: 120px;
    margin-bottom:100px;
`;
const TextStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    color:#496174; 
    font-size:22px; 
    font-weight:600;
`;
const TextStyle2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    color: ${props => props.inputColor || "#496174"}; 
    font-size:22px; 
    font-weight:600;
`;
const TextStyleSub2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: ${props => props.inputColor || "#95A8B7"}; 
    text-align: center;
`;
const TextStyleSub = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: #95A8B7;
    text-align: center;
`;
const SpecificationDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    background-color: #f3f6fa; 
    border-top: 1px solid #e8eef6; 
    border-bottom: 1px solid #e8eef6;
`;
const DisplayDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    margin-top: 50px;
    justify-content: center; 
    margin-bottom: 100px;
    margin-left:300px;
    margin-right:300px;
`;
const MiniBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox)`
    align-items: center;
    text-align: center;
`;
const MiniBoxFeature = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    padding: 20px;
    margin-top: 20px;
`;
const SpecTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    font-size: 18px;
    color:#496174;
    font-weight:600;
`;
const SpecText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    color: #95A8B7 !important;
    width:80%;
    font-size: 14px;
    text-align: center;
`;
const PriceDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    padding-bottom: 80px;
`;
const PriceMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    position: relative;
    width: 220px;
    max-width: 320px; 
    margin-right: 20px;
    padding: 0px 30px 50px;
    margin-top:50px; 
    margin-bottom:40px;
    border: 2px solid #95A8B7;
`;
const PriceClass = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 16px; 
    padding: 30px 20px 25px;
`;
const PriceTitle1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    color:#01bf86;
    font-size: 16px; 
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: 600;
`;
const PriceTitle2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    font-size: 38px;
    color:#496174;
    margin-bottom: 10px; 
    margin-bottom:10px;
    margin-top:0px;
    font-weight: 700;
`;
const PriceTitle3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    width:100%;
    opacity:0.5; 
    margin-top:0;
    font-size: 13px;
`;
const PriceDetail = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    font-size: 13px;
`;
const SponsorDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    background-color: #f3f6fa ;
    border-top: 1px solid #e8eef6;
    border-bottom: 1px solid #e8eef6;
    padding-top: 100px;
    padding-bottom: 80px;
`;
const ReviewText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    line-height: 24px;
    font-size: 14px;
    font-style: italic;
    color: #95A8B7;
`;
const ReviewBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    border-radius: 5px;width: 90%;
    padding: 10px 30px 20px 30px;
    margin-bottom: 30px;
    position: relative;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(221,221,221,0.32);
`;
const ContactDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    padding-top: 100px; 
    padding-bottom: 80px;
    background-color: #01bf86;
`;
const SubscribeButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
    color:#01bf86; width: 150px;cursor: pointer;
    height: 40px; font-weight: 600;border:white;border-radius: 400px;
    background-color:white;
    :hover{
        color: #fff ;
        background-color: transparent ;
        border: 2px solid #fff;
    }
`;
const SupportDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(FlexBox2)`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #2f3e47;
`;
const BottomEtc = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    color: rgba(255,255,255,0.4);
    font-size:14px;
    margin-bottom: 5px;
    margin-top: 5px;
    :hover{
        color: rgba(255,255,255,0.6);
        cursor:pointer;
    }
`;

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
            lineNumber: 400,
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
            lineNumber: 403,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 402,
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
          lineNumber: 409,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DisplayDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 407,
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
          lineNumber: 446,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 445,
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
              lineNumber: 453,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$19"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 452,
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
                lineNumber: 459,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 458,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 462,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 465,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 468,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 470,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "PREMIUM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$29"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 477,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 474,
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
                lineNumber: 481,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 480,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 484,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 487,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 486,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 490,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 492,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 479,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$39"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 496,
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
                lineNumber: 503,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 502,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 506,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 505,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 509,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 508,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                marginBottom: '15px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 512,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 511,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 514,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 501,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 444,
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
          lineNumber: 521,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 520,
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
          lineNumber: 526,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/google.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/instagram.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/converse.png",
          style: {
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 525,
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
              lineNumber: 534,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 533,
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
                lineNumber: 540,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 539,
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
                lineNumber: 543,
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
                lineNumber: 544,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 542,
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginRight: '50px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewText, {
              children: "\u201C There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 550,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 549,
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
                lineNumber: 556,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 555,
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
                lineNumber: 559,
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
                lineNumber: 560,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 558,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 554,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 548,
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
              lineNumber: 566,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 565,
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
                lineNumber: 572,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
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
                lineNumber: 575,
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
                lineNumber: 576,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 574,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 570,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 519,
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
          lineNumber: 584,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub2, {
          inputColor: "white",
          style: {
            opacity: '0.7'
          },
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputSubscribe, {
          type: "text",
          placeholder: "Enter e-mail address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubscribeButton, {
          children: "SUBSCRIBE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 590,
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
          lineNumber: 591,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 582,
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
            lineNumber: 597,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 599,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 600,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 601,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 596,
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
            lineNumber: 604,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 606,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 607,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Dribbble"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 608,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 603,
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
            lineNumber: 611,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Help & Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 612,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 613,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Terms & Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 614,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 610,
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
            lineNumber: 617,
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
            lineNumber: 618,
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
            lineNumber: 619,
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
            lineNumber: 620,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "E: email@email.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 621,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 595,
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
          lineNumber: 625,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 341,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL21haW4vaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsIlVwcGVyTGVmdEJveCIsIlVwcGVyUmlnaHRCb3giLCJCb2R5IiwiYm9keSIsIkhlYWRlckRpdiIsIkRlc2NyaXB0aW9uRGl2IiwiRGVzY3JpcHRpb24iLCJNZW51QnV0dG9uIiwiYnV0dG9uIiwiQ29udGVudEJveCIsIklucHV0Qm94IiwiRmxleEJveDIiLCJNZW51QnV0dG9uU3ViIiwiWm9kS29vIiwiVHJ5QnV0dG9uIiwiU3RhcnRCdXR0b24iLCJJbnB1dFRoaW5nIiwiaW5wdXQiLCJJbnB1dFN1YnNjcmliZSIsIlN0YXJ0Tm93QnV0dG9uIiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJUZXh0U3R5bGUyIiwicHJvcHMiLCJpbnB1dENvbG9yIiwiVGV4dFN0eWxlU3ViMiIsIlRleHRTdHlsZVN1YiIsIlNwZWNpZmljYXRpb25EaXYiLCJEaXNwbGF5RGl2IiwiTWluaUJveCIsIk1pbmlCb3hGZWF0dXJlIiwiU3BlY1RpdGxlIiwiU3BlY1RleHQiLCJQcmljZURpdiIsIlByaWNlTWVudSIsIlByaWNlQ2xhc3MiLCJQcmljZVRpdGxlMSIsIlByaWNlVGl0bGUyIiwiUHJpY2VUaXRsZTMiLCJQcmljZURldGFpbCIsIlNwb25zb3JEaXYiLCJSZXZpZXdUZXh0IiwiUmV2aWV3Qm94IiwiQ29udGFjdERpdiIsIlN1YnNjcmliZUJ1dHRvbiIsIlN1cHBvcnREaXYiLCJCb3R0b21FdGMiLCJNYWluIiwibWFyZ2luIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJvcGFjaXR5IiwiYm9yZGVyIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwid2hpdGVTcGFjZSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFZSxrRkFBTSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXJCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUVBLE1BQU1BLE9BQU8sR0FB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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBNYWluIGZyb20gJy4vbWFpbidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gPE1haW4gLz5cbiIsIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEZsZXhCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbmBcclxuY29uc3QgVXBwZXJMZWZ0Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6MjAlOyBwYWRkaW5nOjIwcHg7XHJcbmBcclxuY29uc3QgVXBwZXJSaWdodEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG5gXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuYm9keWBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgSGVhZGVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDo1MHB4OyBcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxyXG4gICAgcGFkZGluZy10b3A6NzVweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOiA2MCU7IFxyXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29udGVudEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgcGFkZGluZzozMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6MzBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMnB4IDQ1cHggLTE1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4Qm94MiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b25TdWIgPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuYFxyXG5jb25zdCBab2RLb28gPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBtYXJnaW4tcmlnaHQ6NjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuYFxyXG5jb25zdCBUcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzAxYmY4NjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGJvcmRlcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3RhcnRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2OyBcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmIDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IElucHV0VGhpbmcgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuYFxyXG5jb25zdCBJbnB1dFN1YnNjcmliZSA9IHN0eWxlZC5pbnB1dGBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIG9wYWNpdHk6MC41O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU3RhcnROb3dCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDFiZjg2IDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29tbW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICB3aWR0aDogMTUwcHg7Zm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogNDBweDtib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAxYmY4NiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFByb2R1Y3REaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZSA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IzQ5NjE3NDsgXHJcbiAgICBmb250LXNpemU6MjJweDsgXHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbmBcclxuY29uc3QgVGV4dFN0eWxlMiA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM0OTYxNzRcIn07IFxyXG4gICAgZm9udC1zaXplOjIycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZVN1YjIgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM5NUE4QjdcIn07IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgVGV4dFN0eWxlU3ViID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjOTVBOEI3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBTcGVjaWZpY2F0aW9uRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmE7IFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjY7XHJcbmBcclxuY29uc3QgRGlzcGxheURpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDozMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDozMDBweDtcclxuYFxyXG5jb25zdCBNaW5pQm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBNaW5pQm94RmVhdHVyZSA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuYFxyXG5jb25zdCBTcGVjVGl0bGUgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiM0OTYxNzQ7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbmBcclxuY29uc3QgU3BlY1RleHQgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAjOTVBOEI3ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgUHJpY2VEaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbmBcclxuY29uc3QgUHJpY2VNZW51ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHggNTBweDtcclxuICAgIG1hcmdpbi10b3A6NTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTVBOEI3O1xyXG5gXHJcbmNvbnN0IFByaWNlQ2xhc3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDI1cHg7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTEgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiMwMWJmODY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUyID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBjb2xvcjojNDk2MTc0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTMgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvcGFjaXR5OjAuNTsgXHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmBcclxuY29uc3QgUHJpY2VEZXRhaWwgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuYFxyXG5jb25zdCBTcG9uc29yRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmEgO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmNjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5gXHJcbmNvbnN0IFJldmlld1RleHQgPSBzdHlsZWQucGBcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICM5NUE4Qjc7XHJcbmBcclxuY29uc3QgUmV2aWV3Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDt3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyMjEsMjIxLDIyMSwwLjMyKTtcclxuYFxyXG5jb25zdCBDb250YWN0RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbmBcclxuY29uc3QgU3Vic2NyaWJlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiMwMWJmODY7IHdpZHRoOiAxNTBweDtjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7Ym9yZGVyOndoaXRlO2JvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3VwcG9ydERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2U0NztcclxuYFxyXG5jb25zdCBCb3R0b21FdGMgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm9keSBzdHlsZT17e21hcmdpbjonMCcsIHBhZGRpbmdCb3R0b206JzMwMHB4J319PlxyXG4gICAgICAgICAgICA8SGVhZGVyRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8Wm9kS29vPlpvZEtvbzwvWm9kS29vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uPkhvbWU8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+RmVhdHVyZTwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5QbGFuczwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5DbGllbnRzPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPlBhZ2Vz4pa8PC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICA8VXBwZXJSaWdodEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5Mb2dpbjwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJ5QnV0dG9uPlRyeSBmb3IgRnJlZTwvVHJ5QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICA8L0hlYWRlckRpdj5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzMwcHgnLGZvbnRXZWlnaHQ6JzIwMCcsd2lkdGg6Jzc1JSd9fT5ab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6ICcyNHB4JywgZm9udFNpemU6JzE2cHgnLCBtYXJnaW5Ub3A6JzEwcHgnLCBtYXJnaW5Cb3R0b206JzUwcHgnLCBmb250V2VpZ2h0OiAnNDAwJyx3aWR0aDonOTUlJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgWm9ka29vIGlzIGEgZnVsbHkgcmVzcG9uc2l2ZSBsYW5kaW5nIHBhZ2UgYnVpbHQgdXNpbmcgdGhlIGxhdGVzdCBCb290c3RyYXAgZnJhbWV3b3JrLiBJdCdzIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuIFRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxTdGFydEJ1dHRvbj5HRVQgU1RBUlRFRDwvU3RhcnRCdXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48c3BhbiBzdHlsZT17e2ZvbnRTaXplOidtZWRpdW0nLCBjb2xvcjond2hpdGUnLCBtYXJnaW46ICcwIDIwcHgnLCBvcGFjaXR5OicwLjcnfX0+T1I8L3NwYW4+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnIzAxYmY4NicsY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogJyMwMWJmODYnLGZvbnRTaXplOicxNXB4Jyxmb250V2VpZ2h0Oic2MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PldBVENIIFZJREVPPC9idXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPElucHV0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM3NzhmYTInLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczMHB4JywgbWFyZ2luVG9wOiAnMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSRUdJU1RFUiBGT1IgRlJFRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdHlwZT1cInRleHRcIj48L0lucHV0VGhpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lXCIgdHlwZT1cInRleHRcIj48L0lucHV0VGhpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFydE5vd0J1dHRvbj5TVEFSVCBOT1c8L1N0YXJ0Tm93QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTonMTJweCcsb3BhY2l0eTonMC43Jyx3aGl0ZVNwYWNlOiAncHJlJ319PkJ5IHJlZ2lzdGVyaW5nIHlvdSBhZ3JlZSB0byB0aGUgWm9ka29vIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsY29sb3I6J2JsdWUnfX0+VGVybXMgb2YgVXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3MHB4J319PkNsZWFuIGFuZCBVbHRyYSBNb2Rlcm4gRGVzaWduPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonNjAlJywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWV2ZW5seSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsd2lkdGg6JzQwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OiAnMzAwJywgbGluZUhlaWdodDogJzI4cHgnLCBjb2xvcjogJyM5NUE4QjcnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlByYWVzZW50IGV0IHZpdmVycmEgbWFzc2Egbm9uIHZhcml1cyBtYWduYSBlZ2V0IG5pYmggdml0YWUgdmVsaXQgcG9zdWVyZSBlZmZpY2l0dXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDogJzVweCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnLCBsaW5lSGVpZ2h0OiAnMjZweCcsIGNvbG9yOiAnIzk1QThCNycsZm9udFNpemU6ICcxNHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQncyBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLldlIHB1dCBhIGxvdCBvZiBlZmZvcnQgaW4gZGVzaWduLCBhcyBpdOKAmXMgdGhlIG1vc3QgaW1wb3J0YW50IGluZ3JlZGllbnQgb2Ygc3VjY2Vzc2Z1bCB3ZWJzaXRlLlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdC5XZSBwdXQgYSBsb3Qgb2YgZWZmb3J0IGluIGRlc2lnbiwgYXMgaXTigJlzIHRoZSBtb3N0IGltcG9ydGFudCBpbmdyZWRpZW50IG9mIHN1Y2Nlc3NmdWwgd2Vic2l0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPkxFQVJOIE1PUkU8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21hY2Jvb2sucG5nXCIgd2lkdGg9XCI2NTBweFwiIGhlaWdodD1cIjM1MHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdERpdj5cclxuICAgICAgICAgICAgPFNwZWNpZmljYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDIgc3R5bGU9e3ttYXJnaW5Ub3A6JzEwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+SXQncyBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1Yj5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuPC9UZXh0U3R5bGVTdWI+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPERpc3BsYXlEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+U3RyYXRlZ3kgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+SXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+RGlnaXRhbCBEZXNpZ248L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5Db250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYS4uPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5BbmFseXRpY3MgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+VGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWluaUJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TWluaUJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5TdHJhdGVneSBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5EaWdpdGFsIERlc2lnbjwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0PkNvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5IHJhbmRvbSB0ZXh0LiBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBvZiBjbGFzc2ljYWwgTGF0aW4gbGl0ZXJhLi48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkFuYWx5dGljcyBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5UaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgPC9EaXNwbGF5RGl2PlxyXG4gICAgICAgICAgICA8L1NwZWNpZmljYXRpb25EaXY+XHJcbiAgICAgICAgICAgIDxQcmljZURpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzQwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5DaG9vc2UgeW91ciBwZXJmZWN0IHBsYW48L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2FsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMT5CQVNJQzwvUHJpY2VUaXRsZTE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTI+JDE5PC9QcmljZVRpdGxlMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMz5QZXIgTW9udGg8L1ByaWNlVGl0bGUzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJywgbWFyZ2luQm90dG9tOiAnMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD41MDAgR0IgQmFuZHdpZHRoPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4yNHg3IFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5TSUdOVVAgTk9XPC9Db21tb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMT5QUkVNSVVNPC9QcmljZVRpdGxlMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMj4kMjk8L1ByaWNlVGl0bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUzPlBlciBNb250aDwvUHJpY2VUaXRsZTM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW5Cb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjEwIEdCIFN0b3JhZ2U8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjUwMCBHQiBCYW5kd2lkdGg8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPkVtYWlsIFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjI0eDcgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNJR05VUCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUxPkRFVkVMT1BFUjwvUHJpY2VUaXRsZTE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTI+JDM5PC9QcmljZVRpdGxlMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMz5QZXIgTW9udGg8L1ByaWNlVGl0bGUzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJywgbWFyZ2luQm90dG9tOiAnMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD41MDAgR0IgQmFuZHdpZHRoPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4yNHg3IFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5TSUdOVVAgTk9XPC9Db21tb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9QcmljZURpdj5cclxuICAgICAgICAgICAgPFNwb25zb3JEaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlPlRydXN0ZWQgYnkgVGhvdXNhbmRzPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1Yj5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuPC9UZXh0U3R5bGVTdWI+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonODAlJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJyxtYXJnaW5Cb3R0b206ICc3MHB4JyxhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWljcm9zb2Z0LnBuZ1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzMwcHgnLGN1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dvb2dsZS5wbmdcIiBzdHlsZT17e21hcmdpblJpZ2h0OiczMHB4JyxjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbnN0YWdyYW0ucG5nXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMzBweCcsY3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29udmVyc2UucG5nXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7cGFkZGluZzogJzMwcHgnLCB3aWR0aDonNTAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5SaWdodDogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJwgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIuanBnXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnfX0gd2lkdGg9XCI2MHB4XCIgaGVpZ2h0PVwiNjBweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJyxtYXJnaW5MZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOicwJ319PkNhbGVib2dkZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OicyMDAnLGNvbG9yOiAnIzk1QThCNycsZm9udFNpemU6JzE0cHgnLG1hcmdpblRvcDonMCd9fT5Bbm90aGVyIGNvbXBhbnkgLCBDaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAnCBUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHMgd2hpY2ggZG9uJ3QgbG9vayBldmVuIHNsaWdodGx5IGJlbGlldmFibGUu4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkxlZnQ6ICcyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlcjIuanBnXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnfX0gd2lkdGg9XCI2MHB4XCIgaGVpZ2h0PVwiNjBweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJyxtYXJnaW5MZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOicwJ319PkNhbGVib2dkZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OicyMDAnLGNvbG9yOiAnIzk1QThCNycsZm9udFNpemU6JzE0cHgnLG1hcmdpblRvcDonMCd9fT5Bbm90aGVyIGNvbXBhbnkgLCBDaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAnCBUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHMgd2hpY2ggZG9uJ3QgbG9vayBldmVuIHNsaWdodGx5IGJlbGlldmFibGUu4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkxlZnQ6ICcyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlcjMuanBnXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnfX0gd2lkdGg9XCI2MHB4XCIgaGVpZ2h0PVwiNjBweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJyxtYXJnaW5MZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOicwJ319PkNhbGVib2dkZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OicyMDAnLGNvbG9yOiAnIzk1QThCNycsZm9udFNpemU6JzE0cHgnLG1hcmdpblRvcDonMCd9fT5Bbm90aGVyIGNvbXBhbnkgLCBDaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgIDwvU3BvbnNvckRpdj5cclxuICAgICAgICAgICAgPENvbnRhY3REaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZTIgaW5wdXRDb2xvcj1cIndoaXRlXCI+VHJ1c3RlZCBieSBUaG91c2FuZHM8L1RleHRTdHlsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1YjIgaW5wdXRDb2xvcj1cIndoaXRlXCIgc3R5bGU9e3tvcGFjaXR5OicwLjcnfX0+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViMj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0U3Vic2NyaWJlIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwgYWRkcmVzc1wiPjwvSW5wdXRTdWJzY3JpYmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbj5TVUJTQ1JJQkU8L1N1YnNjcmliZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxMnB4JywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknLCBtYXJnaW5Ub3A6ICczcHgnfX0+WW91IGNhbiB1bi1zdWJzY3JpYmUgYXQgYW55IHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgPC9Db250YWN0RGl2PlxyXG4gICAgICAgICAgICA8U3VwcG9ydERpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzYwJScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknLG1hcmdpbkJvdHRvbTonNzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLGZvbnRXZWlnaHQ6ICc2MDAnfX0+Wm9ka29vPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkhvbWU8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5GZWF0dXJlczwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlRlYW08L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5GQVE8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlNvY2lhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5GYWNlYm9vazwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlR3aXR0ZXI8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5CZWhhbmNlPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RHJpYmJibGU8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlN1cHBvcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+SGVscCAmIFN1cHBvcnQ8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Qcml2YWN5IFBvbGljeTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlRlcm1zICYgQ29uZGl0aW9uczwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLGZvbnRXZWlnaHQ6ICc2MDAnfX0+Q29udGFjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsZm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnfX0+Nzk1IEZvbHNvbSBBdmUsIFN1aXRlIDYwMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsZm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnfX0+U2FuIEZyYW5jaXNjbywgQ0EgOTQxMDc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLGZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JywgbWFyZ2luVG9wOiAnNXB4J319PlA6ICgxMjMpIDQ1Ni03ODkwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkU6IGVtYWlsQGVtYWlsLmNvbTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7YWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCd9fT4yMDIwIMKpIFpvZGtvbzwvcD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9TdXBwb3J0RGl2PlxyXG5cclxuICAgICAgICA8L0JvZHk+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==