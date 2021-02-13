webpackHotUpdate_N_E("pages/index",{

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

var _jsxFileName = "C:\\Users\\Bae Kyungmo\\OneDrive\\Desktop\\FrontEndStudy\\React\\react-hosun\\pages\\main\\index.tsx";

const Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  margin: 0 auto;
`;
_c = Section;
const FlexBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display : flex;
`;
_c2 = FlexBox;
const UpperLeftBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    width:20%; padding:20px;
`;
_c3 = UpperLeftBox;
const UpperRightBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    margin-right:20px;
`;
_c4 = UpperRightBox;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].body`
    display:flex;
    margin:0px;
    font-family: "Roboto", sans-serif;
    width:100%;
`;
_c5 = Body;
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
_c6 = HeaderDiv;
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
_c7 = DescriptionDiv;
const Description = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    width: 60%; 
    flex-direction : column;
    justify-content: space-between; 
    padding-top:50px;
`;
_c8 = Description;
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
_c9 = MenuButton;
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
_c10 = InputBox;
const FlexBox2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    flex-direction:column;
    align-items:center;
`;
_c11 = FlexBox2;
const MenuButtonSub = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuButton)`
    opacity: 0.7;
    scroll-behavior: smooth;
`;
_c12 = MenuButtonSub;
const ZodKoo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuButton)`
    margin-right:60px;
    font-weight: 600;
    font-size: larger;
`;
_c13 = ZodKoo;
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
_c14 = TryButton;
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
_c15 = StartButton;
const InputThing = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
    margin-bottom: 20px;
    width:100%;
    height: 30px;
    border: 1px solid #eee;
    padding-left: 10px;
    color: grey;
`;
_c16 = InputThing;
const CommonButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
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
_c17 = CommonButton;
const ProductDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    margin-top: 120px;
    margin-bottom:100px;
`;
_c18 = ProductDiv;
const TextStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color:#496174; 
    font-size:22px; 
    font-weight:600;
    margin-bottom: 70px;
`;
_c19 = TextStyle;

const Main = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Body, {
    style: {
      margin: '0'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
            children: "ZodKoo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Feature"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Plans"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Clients"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Pages\u25BC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
            children: "Try for Free"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
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
            lineNumber: 191,
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
            lineNumber: 192,
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
                lineNumber: 195,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
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
                lineNumber: 196,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
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
                children: "WATCH VIDEO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
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
              lineNumber: 205,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Full name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Email Address",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "User name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Password",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
                children: "START NOW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
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
                lineNumber: 216,
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
                lineNumber: 217,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductDiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          children: "Clean and Ultra Modern Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 9
  }, undefined);
};

_c20 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "FlexBox");
$RefreshReg$(_c3, "UpperLeftBox");
$RefreshReg$(_c4, "UpperRightBox");
$RefreshReg$(_c5, "Body");
$RefreshReg$(_c6, "HeaderDiv");
$RefreshReg$(_c7, "DescriptionDiv");
$RefreshReg$(_c8, "Description");
$RefreshReg$(_c9, "MenuButton");
$RefreshReg$(_c10, "InputBox");
$RefreshReg$(_c11, "FlexBox2");
$RefreshReg$(_c12, "MenuButtonSub");
$RefreshReg$(_c13, "ZodKoo");
$RefreshReg$(_c14, "TryButton");
$RefreshReg$(_c15, "StartButton");
$RefreshReg$(_c16, "InputThing");
$RefreshReg$(_c17, "CommonButton");
$RefreshReg$(_c18, "ProductDiv");
$RefreshReg$(_c19, "TextStyle");
$RefreshReg$(_c20, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkZsZXhCb3giLCJVcHBlckxlZnRCb3giLCJVcHBlclJpZ2h0Qm94IiwiQm9keSIsImJvZHkiLCJIZWFkZXJEaXYiLCJEZXNjcmlwdGlvbkRpdiIsIkRlc2NyaXB0aW9uIiwiTWVudUJ1dHRvbiIsImJ1dHRvbiIsIkNvbnRlbnRCb3giLCJJbnB1dEJveCIsIkZsZXhCb3gyIiwiTWVudUJ1dHRvblN1YiIsIlpvZEtvbyIsIlRyeUJ1dHRvbiIsIlN0YXJ0QnV0dG9uIiwiSW5wdXRUaGluZyIsImlucHV0IiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJNYWluIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm9wYWNpdHkiLCJib3JkZXIiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7QUFDM0I7QUFDQTtBQUNBLENBSEE7S0FBTUYsTztBQUtOLE1BQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBSTtBQUMzQjtBQUNBLENBRkE7TUFBTUMsTztBQUdOLE1BQU1DLFlBQVksR0FBR0gsaUVBQU0sQ0FBQ0UsT0FBRCxDQUFVO0FBQ3JDO0FBQ0EsQ0FGQTtNQUFNQyxZO0FBR04sTUFBTUMsYUFBYSxHQUFHSixpRUFBTSxDQUFDRSxPQUFELENBQVU7QUFDdEM7QUFDQSxDQUZBO01BQU1FLGE7QUFHTixNQUFNQyxJQUFJLEdBQUdMLHlEQUFNLENBQUNNLElBQUs7QUFDekI7QUFDQTtB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NkJBQ0kscUVBQUMsUUFBRDtBQUFBLCtCQUNJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFnRUgsQ0FqRUQ7O09BQU1GLEk7QUFtRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ5MWIyZmI4YjUyZmNhOGUxODNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYFxyXG5cclxuY29uc3QgRmxleEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogZmxleDtcclxuYFxyXG5jb25zdCBVcHBlckxlZnRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICB3aWR0aDoyMCU7IHBhZGRpbmc6MjBweDtcclxuYFxyXG5jb25zdCBVcHBlclJpZ2h0Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbmBcclxuY29uc3QgQm9keSA9IHN0eWxlZC5ib2R5YFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBIZWFkZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7IFxyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXRvcDo3NXB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOjE1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6IDYwJTsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG5gXHJcblxyXG5cclxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuYFxyXG5jb25zdCBDb250ZW50Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBcclxuICAgIHdpZHRoOjUwJTsgXHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbmBcclxuY29uc3QgSW5wdXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzozMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7IFxyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OjMzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDIycHggNDVweCAtMTVweCByZ2JhKDAsMCwwLDAuNSk7XHJcbmBcclxuXHJcbmNvbnN0IEZsZXhCb3gyID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgTWVudUJ1dHRvblN1YiA9IHN0eWxlZChNZW51QnV0dG9uKWBcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5gXHJcbmNvbnN0IFpvZEtvbyA9IHN0eWxlZChNZW51QnV0dG9uKWBcclxuICAgIG1hcmdpbi1yaWdodDo2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG5gXHJcbmNvbnN0IFRyeUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDsgXHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjojMDFiZjg2OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7IFxyXG4gICAgYm9yZGVyOndoaXRlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuYFxyXG5jb25zdCBTdGFydEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7IFxyXG4gICAgY29sb3I6d2hpdGU7IFxyXG4gICAgaGVpZ2h0OiA0MHB4OyBcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOndoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmYgO1xyXG4gICAgICAgIGNvbG9yOiAjMDFiZjg2IDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZSA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgSW5wdXRUaGluZyA9IHN0eWxlZC5pbnB1dGBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG5gXHJcblxyXG5jb25zdCBDb21tb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDFiZjg2IDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgUHJvZHVjdERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XHJcbmBcclxuY29uc3QgVGV4dFN0eWxlID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjojNDk2MTc0OyBcclxuICAgIGZvbnQtc2l6ZToyMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbmBcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb2R5IHN0eWxlPXt7bWFyZ2luOicwJ319PlxyXG4gICAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFpvZEtvbz5ab2RLb288L1pvZEtvbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b24+SG9tZTwvTWVudUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+RmVhdHVyZTwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+UGxhbnM8L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPkNsaWVudHM8L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPlBhZ2Vz4pa8PC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXBwZXJMZWZ0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5Mb2dpbjwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyeUJ1dHRvbj5UcnkgZm9yIEZyZWU8L1RyeUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1VwcGVyUmlnaHRCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlckRpdj5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzMwcHgnLGZvbnRXZWlnaHQ6JzIwMCcsd2lkdGg6Jzc1JSd9fT5ab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiAnMjRweCcsIGZvbnRTaXplOicxNnB4JywgbWFyZ2luVG9wOicxMHB4JywgbWFyZ2luQm90dG9tOic1MHB4JywgZm9udFdlaWdodDogJzQwMCcsd2lkdGg6Jzk1JScsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSBidWlsdCB1c2luZyB0aGUgbGF0ZXN0IEJvb3RzdHJhcCBmcmFtZXdvcmsuIEl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy4gVGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48U3RhcnRCdXR0b24+R0VUIFNUQVJURUQ8L1N0YXJ0QnV0dG9uPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6J21lZGl1bScsIGNvbG9yOid3aGl0ZScsIG1hcmdpbjogJzAgMjBweCcsIG9wYWNpdHk6JzAuNyd9fT5PUjwvc3Bhbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJyMwMWJmODYnLGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDFiZjg2Jyxmb250U2l6ZTonMTVweCcsZm9udFdlaWdodDonNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+V0FUQ0ggVklERU88L2J1dHRvbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnIzc3OGZhMicsIGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczMHB4JywgbWFyZ2luVG9wOiAnMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVHSVNURVIgRk9SIEZSRUU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUaGluZyBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdHlwZT1cInRleHRcIj48L0lucHV0VGhpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUaGluZyBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZVwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNUQVJUIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTonMTJweCcsb3BhY2l0eTonMC43Jyx3aGl0ZVNwYWNlOiAncHJlJ319PkJ5IHJlZ2lzdGVyaW5nIHlvdSBhZ3JlZSB0byB0aGUgWm9ka29vIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOicxMnB4JyxvcGFjaXR5OicwLjcnLGNvbG9yOidibHVlJ319PlRlcm1zIG9mIFVzZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0Qm94PlxyXG4gICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFByb2R1Y3REaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5DbGVhbiBhbmQgVWx0cmEgTW9kZXJuIERlc2lnbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0RGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==