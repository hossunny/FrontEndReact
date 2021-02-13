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
    flex-direction:column;
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
            lineNumber: 176,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Feature"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Plans"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Clients"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Pages\u25BC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
            children: "Try for Free"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
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
            lineNumber: 192,
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
            lineNumber: 193,
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
                lineNumber: 196,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
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
                lineNumber: 197,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
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
                lineNumber: 198,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
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
              lineNumber: 206,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Full name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Email Address",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "User name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Password",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
                children: "START NOW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
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
                lineNumber: 217,
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
                lineNumber: 218,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
            children: "Clean and Ultra Modern Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, undefined)
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
    lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkZsZXhCb3giLCJVcHBlckxlZnRCb3giLCJVcHBlclJpZ2h0Qm94IiwiQm9keSIsImJvZHkiLCJIZWFkZXJEaXYiLCJEZXNjcmlwdGlvbkRpdiIsIkRlc2NyaXB0aW9uIiwiTWVudUJ1dHRvbiIsImJ1dHRvbiIsIkNvbnRlbnRCb3giLCJJbnB1dEJveCIsIkZsZXhCb3gyIiwiTWVudUJ1dHRvblN1YiIsIlpvZEtvbyIsIlRyeUJ1dHRvbiIsIlN0YXJ0QnV0dG9uIiwiSW5wdXRUaGluZyIsImlucHV0IiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJNYWluIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm9wYWNpdHkiLCJib3JkZXIiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7QUFDM0I7QUFDQTtBQUNBLENBSEE7S0FBTUYsTztBQUtOLE1BQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBSTtBQUMzQjtBQUNBLENBRkE7TUFBTUMsTztBQUdOLE1BQU1DLFlBQVksR0FBR0gsaUVBQU0sQ0FBQ0UsT0FBRCxDQUFVO0FBQ3JDO0FBQ0EsQ0FGQTtNQUFNQyxZO0FBR04sTUFBTUMsYUFBYSxHQUFHSixpRUFBTSxDQUFDRSxPQUFELENBQVU7QUFDdEM7QUFDQSxDQUZBO01BQU1FLGE7QUFHTixNQUFNQyxJQUFJLEdBQUdMLHlEQUFNLENBQUNNLElBQUs7QUFDekI7QUFDQTtB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QUFBQSw2QkFDSSxxRUFBQyxVQUFEO0FBQUEsK0JBQ0kscUVBQUMsUUFBRDtBQUFBLGlDQUNJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0VILENBbkVEOztPQUFNRixJO0FBcUVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Zjk1MzYxOTcwMGE0NjhmNzAwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmBcclxuXHJcbmNvbnN0IEZsZXhCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbmBcclxuY29uc3QgVXBwZXJMZWZ0Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6MjAlOyBwYWRkaW5nOjIwcHg7XHJcbmBcclxuY29uc3QgVXBwZXJSaWdodEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG5gXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuYm9keWBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgSGVhZGVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDo1MHB4OyBcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxyXG4gICAgcGFkZGluZy10b3A6NzVweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOiA2MCU7IFxyXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29udGVudEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgcGFkZGluZzozMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6MzBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMnB4IDQ1cHggLTE1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4Qm94MiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b25TdWIgPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuYFxyXG5jb25zdCBab2RLb28gPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBtYXJnaW4tcmlnaHQ6NjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuYFxyXG5jb25zdCBUcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzAxYmY4NjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGJvcmRlcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3RhcnRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2OyBcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmIDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IElucHV0VGhpbmcgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuYFxyXG5cclxuY29uc3QgQ29tbW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAxYmY4NiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFByb2R1Y3REaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZSA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IzQ5NjE3NDsgXHJcbiAgICBmb250LXNpemU6MjJweDsgXHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5gXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm9keSBzdHlsZT17e21hcmdpbjonMCd9fT5cclxuICAgICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxab2RLb28+Wm9kS29vPC9ab2RLb28+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uPkhvbWU8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPkZlYXR1cmU8L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPlBsYW5zPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5DbGllbnRzPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5QYWdlc+KWvDwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8L1VwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8VXBwZXJSaWdodEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+TG9naW48L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcnlCdXR0b24+VHJ5IGZvciBGcmVlPC9UcnlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXJEaXY+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGZvbnRTaXplOiczMHB4Jyxmb250V2VpZ2h0OicyMDAnLHdpZHRoOic3NSUnfX0+Wm9ka29vIGlzIGEgZnVsbHkgcmVzcG9uc2l2ZSBsYW5kaW5nIHBhZ2UgdGVtcGxhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bGluZUhlaWdodDogJzI0cHgnLCBmb250U2l6ZTonMTZweCcsIG1hcmdpblRvcDonMTBweCcsIG1hcmdpbkJvdHRvbTonNTBweCcsIGZvbnRXZWlnaHQ6ICc0MDAnLHdpZHRoOic5NSUnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC43KSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWm9ka29vIGlzIGEgZnVsbHkgcmVzcG9uc2l2ZSBsYW5kaW5nIHBhZ2UgYnVpbHQgdXNpbmcgdGhlIGxhdGVzdCBCb290c3RyYXAgZnJhbWV3b3JrLiBJdCdzIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuIFRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+PFN0YXJ0QnV0dG9uPkdFVCBTVEFSVEVEPC9TdGFydEJ1dHRvbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48c3BhbiBzdHlsZT17e2ZvbnRTaXplOidtZWRpdW0nLCBjb2xvcjond2hpdGUnLCBtYXJnaW46ICcwIDIwcHgnLCBvcGFjaXR5OicwLjcnfX0+T1I8L3NwYW4+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+PGJ1dHRvbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICcjMDFiZjg2JyxjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZENvbG9yOiAnIzAxYmY4NicsZm9udFNpemU6JzE1cHgnLGZvbnRXZWlnaHQ6JzYwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PldBVENIIFZJREVPPC9idXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM3NzhmYTInLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMzBweCcsIG1hcmdpblRvcDogJzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFR0lTVEVSIEZPUiBGUkVFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5TVEFSVCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsd2hpdGVTcGFjZTogJ3ByZSd9fT5CeSByZWdpc3RlcmluZyB5b3UgYWdyZWUgdG8gdGhlIFpvZGtvbyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTonMTJweCcsb3BhY2l0eTonMC43Jyxjb2xvcjonYmx1ZSd9fT5UZXJtcyBvZiBVc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEJveD5cclxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+Q2xlYW4gYW5kIFVsdHJhIE1vZGVybiBEZXNpZ248L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==