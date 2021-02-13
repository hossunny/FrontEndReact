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
    background-color: #01bf86;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width:70%;
    margin:0 auto;
`;
_c5 = HeaderDiv;
const TopHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    position:fixed;
    background-color: #01bf86;
    width:100%;
`;
const DescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display:flex; 
    align-items:center; 
    padding-top:150px; 
    padding-bottom:150px;
    justify-content:space-around; 
    background-color:#01bf86;
    width:50%;
    margin:0 auto;
`;
_c6 = DescriptionDiv;
const Description = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox)`
    width: 50%; 
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
    font-weight:500;
`;
_c20 = TextStyle;
const TextStyle2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color: ${props => props.inputColor || "#496174"}; 
    font-size:22px; 
    font-weight:500;
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
    font-weight:500;
`;
_c28 = SpecTitle;
const SpecText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    color: #95A8B7 !important;
    width:100%;
    font-size: 14px;
    text-align: center;
`;
_c29 = SpecText;
const PriceDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FlexBox2)`
    padding-top:100px;
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
const IconPlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i`
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
_c44 = IconPlay;
const IconMini = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i`
    color: #01bf86; 
    font-size:48px;
`;
_c45 = IconMini;

const Main = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Body, {
    style: {
      margin: '0'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://static.tumblr.com/i5s2zks/6kOohwlux/pe-icon-7-stroke.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
          children: "ZodKoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Feature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Plans"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Clients"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Pages\u25BC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
          children: "Try for Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 370,
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
            lineNumber: 387,
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
            lineNumber: 388,
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
                lineNumber: 391,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 391,
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
                lineNumber: 392,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
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
                  lineNumber: 395,
                  columnNumber: 32
                }, undefined), "WATCH VIDEO"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 386,
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
              lineNumber: 401,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Full name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Email Address",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "User name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Password",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StartNowButton, {
                children: "START NOW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 409,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
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
                lineNumber: 412,
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
                lineNumber: 413,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 384,
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
          lineNumber: 422,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          style: {
            marginBottom: '70px'
          },
          children: "Clean and Ultra Modern Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 421,
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
            lineNumber: 427,
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
            lineNumber: 429,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
            children: "LEARN MORE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/macbook.png",
            width: "650px",
            height: "350px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 436,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 420,
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
          lineNumber: 442,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DisplayDiv, {
        style: {
          width: '50%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-rocket"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 451,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-display1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 458,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 466,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 465,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-credit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-headphones"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 477,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 440,
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
          lineNumber: 485,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 484,
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
              lineNumber: 492,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$19"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 494,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 491,
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
                lineNumber: 498,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 499,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 497,
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
                lineNumber: 502,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 503,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 501,
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
                lineNumber: 506,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 507,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 505,
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
                lineNumber: 510,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 511,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 509,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 513,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "PREMIUM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$29"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 519,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 520,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 517,
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
                lineNumber: 524,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 525,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 523,
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
                lineNumber: 528,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 529,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 527,
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
                lineNumber: 532,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 533,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 531,
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
                lineNumber: 536,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 537,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 535,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 539,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 544,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$39"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 545,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 543,
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
                lineNumber: 550,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 551,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 549,
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
                lineNumber: 554,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 555,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 553,
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
                lineNumber: 558,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 559,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 557,
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
                lineNumber: 562,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 563,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 561,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 565,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 548,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 483,
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
          lineNumber: 572,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 571,
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
          lineNumber: 577,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/google.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/instagram.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/converse.png",
          style: {
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 576,
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
              lineNumber: 585,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 584,
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
                lineNumber: 591,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 590,
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
                lineNumber: 594,
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
                lineNumber: 595,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 593,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 589,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 583,
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
              lineNumber: 601,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 600,
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
                lineNumber: 607,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 606,
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
                lineNumber: 610,
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
                lineNumber: 611,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 609,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 599,
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
              lineNumber: 617,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 616,
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
                lineNumber: 623,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 622,
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
                lineNumber: 626,
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
                lineNumber: 627,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 625,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 621,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 570,
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
          lineNumber: 635,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub2, {
          inputColor: "white",
          style: {
            opacity: '0.7'
          },
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputSubscribe, {
          type: "text",
          placeholder: "Enter e-mail address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubscribeButton, {
          children: "SUBSCRIBE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 641,
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
          lineNumber: 642,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 633,
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
            lineNumber: 648,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 649,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 650,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 651,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 652,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 647,
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
            lineNumber: 655,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 656,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 657,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 658,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Dribbble"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 659,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 654,
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
            lineNumber: 662,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Help & Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 664,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Terms & Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 665,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 661,
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
            lineNumber: 668,
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
            lineNumber: 669,
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
            lineNumber: 670,
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
            lineNumber: 671,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "E: email@email.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 672,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 646,
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
          lineNumber: 676,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 367,
    columnNumber: 9
  }, undefined);
};

_c46 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46;

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
$RefreshReg$(_c44, "IconPlay");
$RefreshReg$(_c45, "IconMini");
$RefreshReg$(_c46, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsIlVwcGVyTGVmdEJveCIsIlVwcGVyUmlnaHRCb3giLCJCb2R5IiwiYm9keSIsIkhlYWRlckRpdiIsIlRvcEhlYWRlciIsIkRlc2NyaXB0aW9uRGl2IiwiRGVzY3JpcHRpb24iLCJNZW51QnV0dG9uIiwiYnV0dG9uIiwiQ29udGVudEJveCIsIklucHV0Qm94IiwiRmxleEJveDIiLCJNZW51QnV0dG9uU3ViIiwiWm9kS29vIiwiVHJ5QnV0dG9uIiwiU3RhcnRCdXR0b24iLCJJbnB1dFRoaW5nIiwiaW5wdXQiLCJJbnB1dFN1YnNjcmliZSIsIlN0YXJ0Tm93QnV0dG9uIiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJUZXh0U3R5bGUyIiwicHJvcHMiLCJpbnB1dENvbG9yIiwiVGV4dFN0eWxlU3ViMiIsIlRleHRTdHlsZVN1YiIsIlNwZWNpZmljYXRpb25EaXYiLCJEaXNwbGF5RGl2IiwiTWluaUJveCIsIk1pbmlCb3hGZWF0dXJlIiwiU3BlY1RpdGxlIiwiU3BlY1RleHQiLCJQcmljZURpdiIsIlByaWNlTWVudSIsIlByaWNlQ2xhc3MiLCJQcmljZVRpdGxlMSIsIlByaWNlVGl0bGUyIiwiUHJpY2VUaXRsZTMiLCJQcmljZURldGFpbCIsIlNwb25zb3JEaXYiLCJSZXZpZXdUZXh0IiwiUmV2aWV3Qm94IiwiQ29udGFjdERpdiIsIlN1YnNjcmliZUJ1dHRvbiIsIlN1cHBvcnREaXYiLCJCb3R0b21FdGMiLCJJY29uUGxheSIsImkiLCJJY29uTWluaSIsIk1haW4iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIndpZHRoIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwib3BhY2l0eSIsImJvcmRlciIsImN1cnNvciIsIndoaXRlU3BhY2UiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7QUFDM0I7QUFDQSxDQUZBO0tBQU1GLE87QUFHTixNQUFNRyxZQUFZLEdBQUdGLGlFQUFNLENBQUNELE9BQUQsQ0FBVTtBQUNyQztBQUNBLENBRkE7TUFBTUcsWTtBQUdOLE1BQU1DLGFBQWEsR0FBR0gsaUVBQU0sQ0FBQ0QsT0FBRCxDQUFVO0FBQ3RDO0FBQ0EsQ0FGQTtNQUFNSSxhO0FBR04sTUFBTUMsSUFBSSxHQUFHSix5REFBTSxDQUFDSyxJQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO01BQU1ELEk7QUFPTixNQUFNRSxTQUFTLEdBQUdOLHlEQUFNLENBQUNDLEdBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhBO01BQU1LLFM7QUFZTixNQUFNQyxTQUFTLEdBQUdQLHlEQUFNLENBQUNDLEdBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQUtBLE1BQU1PLGNBQWMsR0FBR1IseURBQU0sQ0FBQ0MsR0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTtNQUFNTyxjO0FBVU4sTUFBTUMsV0FBVyxHQUFHVCxpRUFBTSxDQUFDRCxPQUFELENBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO01BQU1VLFc7QUFRTixNQUFNQyxVQUFVLEdBQUdWLHlEQUFNLENBQUNXLE1BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhBO01B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QUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUE4QkkscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBRTtBQUFDRyxvQkFBVSxFQUFDO0FBQVosU0FBaEI7QUFBQSwrQkFDSTtBQUFHLGVBQUssRUFBRTtBQUFDUixpQkFBSyxFQUFFLFNBQVI7QUFBa0JDLG9CQUFRLEVBQUM7QUFBM0IsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Uko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEyVEgsQ0E1VEQ7O09BQU1KLEk7QUE4VFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxMmFjZjBlZmI4MDA3MzIxODRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcblxyXG5jb25zdCBGbGV4Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG5gXHJcbmNvbnN0IFVwcGVyTGVmdEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOjIwJTsgcGFkZGluZzoyMHB4O1xyXG5gXHJcbmNvbnN0IFVwcGVyUmlnaHRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuYFxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmJvZHlgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IEhlYWRlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbmBcclxuY29uc3QgVG9wSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXRvcDoxNTBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOiA1MCU7IFxyXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29udGVudEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgcGFkZGluZzozMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6MzBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMnB4IDQ1cHggLTE1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4Qm94MiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b25TdWIgPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuYFxyXG5jb25zdCBab2RLb28gPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBtYXJnaW4tcmlnaHQ6NjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuYFxyXG5jb25zdCBUcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzAxYmY4NjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGJvcmRlcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3RhcnRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2OyBcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmIDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IElucHV0VGhpbmcgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuYFxyXG5jb25zdCBJbnB1dFN1YnNjcmliZSA9IHN0eWxlZC5pbnB1dGBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIG9wYWNpdHk6MC41O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU3RhcnROb3dCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDFiZjg2IDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29tbW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICB3aWR0aDogMTUwcHg7Zm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogNDBweDtib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAxYmY4NiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFByb2R1Y3REaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZSA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IzQ5NjE3NDsgXHJcbiAgICBmb250LXNpemU6MjJweDsgXHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbmBcclxuY29uc3QgVGV4dFN0eWxlMiA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM0OTYxNzRcIn07IFxyXG4gICAgZm9udC1zaXplOjIycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZVN1YjIgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM5NUE4QjdcIn07IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgVGV4dFN0eWxlU3ViID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjOTVBOEI3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBTcGVjaWZpY2F0aW9uRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmE7IFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjY7XHJcbmBcclxuY29uc3QgRGlzcGxheURpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDozMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDozMDBweDtcclxuYFxyXG5jb25zdCBNaW5pQm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBNaW5pQm94RmVhdHVyZSA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuYFxyXG5jb25zdCBTcGVjVGl0bGUgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiM0OTYxNzQ7XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbmBcclxuY29uc3QgU3BlY1RleHQgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAjOTVBOEI3ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFByaWNlRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmctdG9wOjEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbmBcclxuY29uc3QgUHJpY2VNZW51ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHggNTBweDtcclxuICAgIG1hcmdpbi10b3A6NTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTVBOEI3O1xyXG5gXHJcbmNvbnN0IFByaWNlQ2xhc3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDI1cHg7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTEgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiMwMWJmODY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUyID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBjb2xvcjojNDk2MTc0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTMgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvcGFjaXR5OjAuNTsgXHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmBcclxuY29uc3QgUHJpY2VEZXRhaWwgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuYFxyXG5jb25zdCBTcG9uc29yRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmEgO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmNjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5gXHJcbmNvbnN0IFJldmlld1RleHQgPSBzdHlsZWQucGBcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICM5NUE4Qjc7XHJcbmBcclxuY29uc3QgUmV2aWV3Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDt3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyMjEsMjIxLDIyMSwwLjMyKTtcclxuYFxyXG5jb25zdCBDb250YWN0RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbmBcclxuY29uc3QgU3Vic2NyaWJlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiMwMWJmODY7IHdpZHRoOiAxNTBweDtjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7Ym9yZGVyOndoaXRlO2JvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3VwcG9ydERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2U0NztcclxuYFxyXG5jb25zdCBCb3R0b21FdGMgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IEljb25QbGF5ID0gc3R5bGVkLmlgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy10b3A6M3B4OyBcclxuICAgIHBhZGRpbmctcmlnaHQ6MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG5gXHJcbmNvbnN0IEljb25NaW5pID0gc3R5bGVkLmlgXHJcbiAgICBjb2xvcjogIzAxYmY4NjsgXHJcbiAgICBmb250LXNpemU6NDhweDtcclxuYFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJvZHkgc3R5bGU9e3ttYXJnaW46JzAnfX0+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGF0aWMudHVtYmxyLmNvbS9pNXMyemtzLzZrT29od2x1eC9wZS1pY29uLTctc3Ryb2tlLmNzc1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNjAwLDcwMCw4MDBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICA8SGVhZGVyRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8Wm9kS29vPlpvZEtvbzwvWm9kS29vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uPkhvbWU8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+RmVhdHVyZTwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5QbGFuczwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5DbGllbnRzPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPlBhZ2Vz4pa8PC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICA8VXBwZXJSaWdodEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5Mb2dpbjwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJ5QnV0dG9uPlRyeSBmb3IgRnJlZTwvVHJ5QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9VcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICA8L0hlYWRlckRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzAxYmY4Nid9fT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzMwcHgnLGZvbnRXZWlnaHQ6JzIwMCcsd2lkdGg6Jzc1JSd9fT5ab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiAnMjRweCcsIGZvbnRTaXplOicxNnB4JywgbWFyZ2luVG9wOicxMHB4JywgbWFyZ2luQm90dG9tOic1MHB4JywgZm9udFdlaWdodDogJzQwMCcsd2lkdGg6Jzk1JScsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSBidWlsdCB1c2luZyB0aGUgbGF0ZXN0IEJvb3RzdHJhcCBmcmFtZXdvcmsuIEl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy4gVGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48U3RhcnRCdXR0b24+R0VUIFNUQVJURUQ8L1N0YXJ0QnV0dG9uPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6J21lZGl1bScsIGNvbG9yOid3aGl0ZScsIG1hcmdpbjogJzAgMjBweCcsIG9wYWNpdHk6JzAuNyd9fT5PUjwvc3Bhbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJyMwMWJmODYnLGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDFiZjg2Jyxmb250U2l6ZTonMTVweCcsZm9udFdlaWdodDonNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PEljb25QbGF5IGNsYXNzTmFtZT1cInBlLTdzLXBsYXlcIj48L0ljb25QbGF5PldBVENIIFZJREVPPC9idXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM3NzhmYTInLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMzBweCcsIG1hcmdpblRvcDogJzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFR0lTVEVSIEZPUiBGUkVFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJ0Tm93QnV0dG9uPlNUQVJUIE5PVzwvU3RhcnROb3dCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOicxMnB4JyxvcGFjaXR5OicwLjcnLHdoaXRlU3BhY2U6ICdwcmUnfX0+QnkgcmVnaXN0ZXJpbmcgeW91IGFncmVlIHRvIHRoZSBab2Rrb28gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsY29sb3I6J2JsdWUnfX0+VGVybXMgb2YgVXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtbWVkYWxcIiBzdHlsZT17e2ZvbnRTaXplOic0OHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNzBweCd9fT5DbGVhbiBhbmQgVWx0cmEgTW9kZXJuIERlc2lnbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzY1JScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLHdpZHRoOiczMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDogJzMwMCcsIGxpbmVIZWlnaHQ6ICcyOHB4JywgY29sb3I6ICcjOTVBOEI3JywgZm9udFNpemU6ICcxOHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5QcmFlc2VudCBldCB2aXZlcnJhIG1hc3NhIG5vbiB2YXJpdXMgbWFnbmEgZWdldCBuaWJoIHZpdGFlIHZlbGl0IHBvc3VlcmUgZWZmaWNpdHVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6ICc1cHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JywgbGluZUhlaWdodDogJzI2cHgnLCBjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOiAnMTRweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy5XZSBwdXQgYSBsb3Qgb2YgZWZmb3J0IGluIGRlc2lnbiwgYXMgaXTigJlzIHRoZSBtb3N0IGltcG9ydGFudCBpbmdyZWRpZW50IG9mIHN1Y2Nlc3NmdWwgd2Vic2l0ZS5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQuV2UgcHV0IGEgbG90IG9mIGVmZm9ydCBpbiBkZXNpZ24sIGFzIGl04oCZcyB0aGUgbW9zdCBpbXBvcnRhbnQgaW5ncmVkaWVudCBvZiBzdWNjZXNzZnVsIHdlYnNpdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+TEVBUk4gTU9SRTwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWFjYm9vay5wbmdcIiB3aWR0aD1cIjY1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICA8U3BlY2lmaWNhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpblRvcDonMTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5JdCdzIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3M8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RGlzcGxheURpdiBzdHlsZT17e3dpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1yb2NrZXRcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5TdHJhdGVneSBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLXNjaWVuY2VcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5EaWdpdGFsIERlc2lnbjwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0PkNvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5IHJhbmRvbSB0ZXh0LiBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBvZiBjbGFzc2ljYWwgTGF0aW4gbGl0ZXJhLi48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtZGlzcGxheTFcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5BbmFseXRpY3MgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+VGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWluaUJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TWluaUJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWRhdGVcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5TdHJhdGVneSBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWNyZWRpdFwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkRpZ2l0YWwgRGVzaWduPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+Q29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1oZWFkcGhvbmVzXCI+PC9JY29uTWluaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+QW5hbHl0aWNzIFNvbHV0aW9uczwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0PlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0uPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0Rpc3BsYXlEaXY+XHJcbiAgICAgICAgICAgIDwvU3BlY2lmaWNhdGlvbkRpdj5cclxuICAgICAgICAgICAgPFByaWNlRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlPkNob29zZSB5b3VyIHBlcmZlY3QgcGxhbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7YWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUxPkJBU0lDPC9QcmljZVRpdGxlMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMj4kMTk8L1ByaWNlVGl0bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUzPlBlciBNb250aDwvUHJpY2VUaXRsZTM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW5Cb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1zZXJ2ZXJcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLWdyYXBoXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjUwMCBHQiBCYW5kd2lkdGg8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1tYWlsLW9wZW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXRvb2xzXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjI0eDcgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNJR05VUCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUxPlBSRU1JVU08L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQyOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXNlcnZlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtZ3JhcGhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLW1haWwtb3BlblwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtdG9vbHNcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+REVWRUxPUEVSPC9QcmljZVRpdGxlMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMj4kMzk8L1ByaWNlVGl0bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUzPlBlciBNb250aDwvUHJpY2VUaXRsZTM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW5Cb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1zZXJ2ZXJcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLWdyYXBoXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjUwMCBHQiBCYW5kd2lkdGg8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1tYWlsLW9wZW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXRvb2xzXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjI0eDcgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNJR05VUCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1ByaWNlRGl2PlxyXG4gICAgICAgICAgICA8U3BvbnNvckRpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzEwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+VHJ1c3RlZCBieSBUaG91c2FuZHM8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e3dpZHRoOic4MCUnLGp1c3RpZnlDb250ZW50OidjZW50ZXInLG1hcmdpbkJvdHRvbTogJzcwcHgnLGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9taWNyb3NvZnQucG5nXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMzBweCcsY3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ29vZ2xlLnBuZ1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzMwcHgnLGN1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2luc3RhZ3JhbS5wbmdcIiBzdHlsZT17e21hcmdpblJpZ2h0OiczMHB4JyxjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb252ZXJzZS5wbmdcIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3twYWRkaW5nOiAnMzBweCcsIHdpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAnCBUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHMgd2hpY2ggZG9uJ3QgbG9vayBldmVuIHNsaWdodGx5IGJlbGlldmFibGUu4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkxlZnQ6ICcyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlci5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyMi5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyMy5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9TcG9uc29yRGl2PlxyXG4gICAgICAgICAgICA8Q29udGFjdERpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpbkJvdHRvbTonMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlMiBpbnB1dENvbG9yPVwid2hpdGVcIj5CZSBlbmdhZ2VkIE5ld3NsZXR0ZXI8L1RleHRTdHlsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1YjIgaW5wdXRDb2xvcj1cIndoaXRlXCIgc3R5bGU9e3tvcGFjaXR5OicwLjcnfX0+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViMj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0U3Vic2NyaWJlIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwgYWRkcmVzc1wiPjwvSW5wdXRTdWJzY3JpYmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbj5TVUJTQ1JJQkU8L1N1YnNjcmliZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxMnB4JywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknLCBtYXJnaW5Ub3A6ICczcHgnfX0+WW91IGNhbiB1bi1zdWJzY3JpYmUgYXQgYW55IHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgPC9Db250YWN0RGl2PlxyXG4gICAgICAgICAgICA8U3VwcG9ydERpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzYwJScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknLG1hcmdpbkJvdHRvbTonNzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLGZvbnRXZWlnaHQ6ICc2MDAnfX0+Wm9ka29vPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkhvbWU8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5GZWF0dXJlczwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlRlYW08L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5GQVE8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlNvY2lhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5GYWNlYm9vazwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlR3aXR0ZXI8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5CZWhhbmNlPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RHJpYmJibGU8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlN1cHBvcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+SGVscCAmIFN1cHBvcnQ8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Qcml2YWN5IFBvbGljeTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlRlcm1zICYgQ29uZGl0aW9uczwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLGZvbnRXZWlnaHQ6ICc2MDAnfX0+Q29udGFjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsZm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnfX0+Nzk1IEZvbHNvbSBBdmUsIFN1aXRlIDYwMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsZm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnfX0+U2FuIEZyYW5jaXNjbywgQ0EgOTQxMDc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLGZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JywgbWFyZ2luVG9wOiAnNXB4J319PlA6ICgxMjMpIDQ1Ni03ODkwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkU6IGVtYWlsQGVtYWlsLmNvbTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7YWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCd9fT4yMDIwIMKpIFpvZGtvbzwvcD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9TdXBwb3J0RGl2PlxyXG4gICAgICAgIDwvQm9keT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=