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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\Bae Kyungmo\\OneDrive\\Desktop\\FrontEndStudy\\React\\react-hosun\\pages\\main\\index.tsx",
    _s = $RefreshSig$();



const FlexBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    display : flex;
`;
_c = FlexBox;
const UpperLeftBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox)`
    width:20%; padding:20px;
`;
_c2 = UpperLeftBox;
const UpperRightBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox)`
    margin-right:20px;
`;
_c3 = UpperRightBox;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].body`
    display:flex;
    flex-direction:column;
    margin:0px;
    font-family: "Roboto", sans-serif;
    width:100%;
`;
_c4 = Body;
const HeaderDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
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
const TopHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    position:fixed;
    background-color: #01bf86;
    width:100%;
`;
const DescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
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
const Description = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox)`
    width: 50%; 
    flex-direction : column;
    justify-content: space-between; 
    padding-top:50px;
`;
_c7 = Description;
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
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
const ContentBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox)`
    flex-direction:column; 
    width:50%; 
    padding:30px;
`;
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
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
const FlexBox2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox)`
    flex-direction:column;
    align-items:center;
`;
_c10 = FlexBox2;
const MenuButtonSub = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuButton)`
    opacity: 0.7;
    scroll-behavior: smooth;
`;
_c11 = MenuButtonSub;
const ZodKoo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuButton)`
    margin-right:60px;
    font-weight: 600;
    font-size: larger;
`;
_c12 = ZodKoo;
const TryButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
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
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
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
const InputThing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input`
    margin-bottom: 20px;
    width:100%;
    height: 30px;
    border: 1px solid #eee;
    padding-left: 10px;
    color: grey;
`;
_c15 = InputThing;
const InputSubscribe = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input`
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
const StartNowButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
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
const CommonButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
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
const ProductDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    margin-top: 120px;
    margin-bottom:100px;
`;
_c19 = ProductDiv;
const TextStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    color:#496174; 
    font-size:22px; 
    font-weight:500;
`;
_c20 = TextStyle;
const TextStyle2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    color: ${props => props.inputColor || "#496174"}; 
    font-size:22px; 
    font-weight:500;
`;
_c21 = TextStyle2;
const TextStyleSub2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: ${props => props.inputColor || "#95A8B7"}; 
    text-align: center;
`;
_c22 = TextStyleSub2;
const TextStyleSub = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: #95A8B7;
    text-align: center;
`;
_c23 = TextStyleSub;
const SpecificationDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    background-color: #f3f6fa; 
    border-top: 1px solid #e8eef6; 
    border-bottom: 1px solid #e8eef6;
`;
_c24 = SpecificationDiv;
const DisplayDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    margin-top: 50px;
    justify-content: center; 
    margin-bottom: 100px;
    margin-left:300px;
    margin-right:300px;
`;
_c25 = DisplayDiv;
const MiniBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox)`
    align-items: center;
    text-align: center;
`;
_c26 = MiniBox;
const MiniBoxFeature = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    padding: 20px;
    margin-top: 20px;
`;
_c27 = MiniBoxFeature;
const SpecTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    font-size: 18px;
    color:#496174;
    font-weight:500;
`;
_c28 = SpecTitle;
const SpecText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    color: #95A8B7 !important;
    width:100%;
    font-size: 14px;
    text-align: center;
`;
_c29 = SpecText;
const PriceDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    padding-top:100px;
    padding-bottom: 80px;
`;
_c30 = PriceDiv;
const PriceMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
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
const PriceClass = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 16px; 
    padding: 30px 20px 25px;
`;
_c32 = PriceClass;
const PriceTitle1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    color:#01bf86;
    font-size: 16px; 
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: 600;
`;
_c33 = PriceTitle1;
const PriceTitle2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    font-size: 38px;
    color:#496174;
    margin-bottom: 10px; 
    margin-bottom:10px;
    margin-top:0px;
    font-weight: 700;
`;
_c34 = PriceTitle2;
const PriceTitle3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    width:100%;
    opacity:0.5; 
    margin-top:0;
    font-size: 13px;
`;
_c35 = PriceTitle3;
const PriceDetail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    font-size: 13px;
`;
_c36 = PriceDetail;
const SponsorDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    background-color: #f3f6fa ;
    border-top: 1px solid #e8eef6;
    border-bottom: 1px solid #e8eef6;
    padding-top: 100px;
    padding-bottom: 80px;
`;
_c37 = SponsorDiv;
const ReviewText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
    line-height: 24px;
    font-size: 14px;
    font-style: italic;
    color: #95A8B7;
`;
_c38 = ReviewText;
const ReviewBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    border-radius: 5px;width: 90%;
    padding: 10px 30px 20px 30px;
    margin-bottom: 30px;
    position: relative;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(221,221,221,0.32);
`;
_c39 = ReviewBox;
const ContactDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    padding-top: 100px; 
    padding-bottom: 80px;
    background-color: #01bf86;
`;
_c40 = ContactDiv;
const SubscribeButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
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
const SupportDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexBox2)`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #2f3e47;
`;
_c42 = SupportDiv;
const BottomEtc = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
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
const IconPlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].i`
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
const IconMini = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].i`
    color: #01bf86; 
    font-size:48px;
`;
_c45 = IconMini;
const headerMenuButtonTexts = ['Home', 'Features', 'Plans', 'Clients', 'Pages▼'];

const Main = () => {
  _s();

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
      lineNumber: 378,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
        children: [headerMenuButtonTexts.map((headerMenuButtonText, idx) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
            onClick: e => {
              setSelectedHeaderMenuIdx(idx);
            },
            active: selectedHeaderMenuIdx == idx,
            children: headerMenuButtonText
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 29
          }, undefined);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
          children: "ZodKoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Feature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Plans"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Clients"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Pages\u25BC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
          children: "Try for Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 380,
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
            lineNumber: 410,
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
            lineNumber: 411,
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
                lineNumber: 414,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
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
                lineNumber: 415,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
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
                  lineNumber: 418,
                  columnNumber: 32
                }, undefined), "WATCH VIDEO"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 416,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 409,
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
              lineNumber: 424,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Full name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Email Address",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "User name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Password",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StartNowButton, {
                children: "START NOW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 432,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 431,
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
                lineNumber: 435,
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
                lineNumber: 436,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 407,
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
          lineNumber: 445,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          style: {
            marginBottom: '70px'
          },
          children: "Clean and Ultra Modern Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 444,
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
            lineNumber: 450,
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
            lineNumber: 452,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
            children: "LEARN MORE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/macbook.png",
            width: "650px",
            height: "350px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 443,
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
          lineNumber: 465,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 464,
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
              lineNumber: 472,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 474,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 477,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 476,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-display1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 484,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 491,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 488,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-credit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 494,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 495,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-headphones"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 501,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 463,
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
          lineNumber: 508,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 507,
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
              lineNumber: 515,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$19"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 516,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 514,
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
                lineNumber: 521,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 522,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 520,
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
                lineNumber: 525,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 526,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 524,
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
                lineNumber: 529,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 530,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 528,
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
                lineNumber: 533,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 534,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 532,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 536,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 519,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "PREMIUM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 541,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$29"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 542,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 543,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 540,
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
                lineNumber: 547,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 548,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 546,
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
                lineNumber: 551,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 552,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 550,
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
                lineNumber: 555,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 556,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 554,
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
                lineNumber: 559,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 560,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 558,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 562,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 545,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 567,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$39"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 569,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 566,
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
                lineNumber: 573,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 574,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 572,
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
                lineNumber: 577,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 578,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 576,
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
                lineNumber: 581,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 582,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 580,
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
                lineNumber: 585,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 586,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 584,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 588,
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
        lineNumber: 512,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 506,
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
          lineNumber: 595,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 594,
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
          lineNumber: 600,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/google.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/instagram.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 602,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/converse.png",
          style: {
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 599,
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
              lineNumber: 608,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 607,
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
                lineNumber: 614,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 613,
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
                lineNumber: 617,
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
                lineNumber: 618,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 616,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 612,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 606,
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
              lineNumber: 624,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 623,
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
                lineNumber: 630,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 629,
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
                lineNumber: 633,
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
                lineNumber: 634,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 632,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 628,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 622,
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
              lineNumber: 640,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 639,
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
                lineNumber: 646,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 645,
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
                lineNumber: 649,
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
                lineNumber: 650,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 648,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 644,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 593,
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
          lineNumber: 658,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub2, {
          inputColor: "white",
          style: {
            opacity: '0.7'
          },
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputSubscribe, {
          type: "text",
          placeholder: "Enter e-mail address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubscribeButton, {
          children: "SUBSCRIBE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 664,
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
          lineNumber: 665,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 656,
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
            lineNumber: 671,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 672,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 673,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 674,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 675,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 670,
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
            lineNumber: 678,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 679,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 680,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 681,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Dribbble"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 682,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 677,
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
            lineNumber: 685,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Help & Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 686,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 687,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Terms & Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 688,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 684,
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
            lineNumber: 691,
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
            lineNumber: 692,
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
            lineNumber: 693,
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
            lineNumber: 694,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "E: email@email.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 695,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 690,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 669,
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
          lineNumber: 699,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 698,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 377,
    columnNumber: 9
  }, undefined);
};

_s(Main, "jE+opxcNJ8M66TCjY/g/WgfEG8c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsIlVwcGVyTGVmdEJveCIsIlVwcGVyUmlnaHRCb3giLCJCb2R5IiwiYm9keSIsIkhlYWRlckRpdiIsIlRvcEhlYWRlciIsIkRlc2NyaXB0aW9uRGl2IiwiRGVzY3JpcHRpb24iLCJNZW51QnV0dG9uIiwiYnV0dG9uIiwiQ29udGVudEJveCIsIklucHV0Qm94IiwiRmxleEJveDIiLCJNZW51QnV0dG9uU3ViIiwiWm9kS29vIiwiVHJ5QnV0dG9uIiwiU3RhcnRCdXR0b24iLCJJbnB1dFRoaW5nIiwiaW5wdXQiLCJJbnB1dFN1YnNjcmliZSIsIlN0YXJ0Tm93QnV0dG9uIiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJUZXh0U3R5bGUyIiwicHJvcHMiLCJpbnB1dENvbG9yIiwiVGV4dFN0eWxlU3ViMiIsIlRleHRTdHlsZVN1YiIsIlNwZWNpZmljYXRpb25EaXYiLCJEaXNwbGF5RGl2IiwiTWluaUJveCIsIk1pbmlCb3hGZWF0dXJlIiwiU3BlY1RpdGxlIiwiU3BlY1RleHQiLCJQcmljZURpdiIsIlByaWNlTWVudSIsIlByaWNlQ2xhc3MiLCJQcmljZVRpdGxlMSIsIlByaWNlVGl0bGUyIiwiUHJpY2VUaXRsZTMiLCJQcmljZURldGFpbCIsIlNwb25zb3JEaXYiLCJSZXZpZXdUZXh0IiwiUmV2aWV3Qm94IiwiQ29udGFjdERpdiIsIlN1YnNjcmliZUJ1dHRvbiIsIlN1cHBvcnREaXYiLCJCb3R0b21FdGMiLCJJY29uUGxheSIsImkiLCJJY29uTWluaSIsImhlYWRlck1lbnVCdXR0b25UZXh0cyIsIk1haW4iLCJzZWxlY3RlZEhlYWRlck1lbnVJZHgiLCJzZXRTZWxlY3RlZEhlYWRlck1lbnVJZHgiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJtYXAiLCJoZWFkZXJNZW51QnV0dG9uVGV4dCIsImlkeCIsImUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIndpZHRoIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwib3BhY2l0eSIsImJvcmRlciIsImN1cnNvciIsIndoaXRlU3BhY2UiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsTUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJO0FBQzNCO0FBQ0EsQ0FGQTtLQUFNRixPO0FBR04sTUFBTUcsWUFBWSxHQUFHRixpRUFBTSxDQUFDRCxPQUFELENBQVU7QUFDckM7QUFDQSxDQUZBO01BQU1HLFk7QUFHTixNQUFNQyxhQUFhLEdBQUdILGlFQUFNLENBQUNELE9BQUQsQ0FBVTtBQUN0QztBQUNBLENBRkE7TUFBTUksYTtBQUdOLE1BQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssSUFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtNQUFNRCxJO0FBT04sTUFBTUUsU0FBUyxHQUFHTix5REFBTSxDQUFDQyxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtNQUFNSyxTO0FBWU4sTUFBTUMsU0FBUyxHQUFHUCx5REFBTSxDQUFDQyxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLENBSkE7QUFLQSxNQUFNTyxjQUFjLEdBQUdSLHlEQUFNLENBQUNDLEdBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVEE7TUFBTU8sYztBQVVOLE1BQU1DLFdBQVcsR0FBR1QsaUVBQU0sQ0FBQ0Qs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QUFBO0FBQUE7QUFBQSxtQkE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5TSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXdVSCxDQTNVRDs7R0FBTWIsSTs7T0FBQUEsSTtBQTZVU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzhhNzNiMDI3NzFiMjlmMmY4YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcblxyXG5jb25zdCBGbGV4Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG5gXHJcbmNvbnN0IFVwcGVyTGVmdEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOjIwJTsgcGFkZGluZzoyMHB4O1xyXG5gXHJcbmNvbnN0IFVwcGVyUmlnaHRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuYFxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmJvZHlgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IEhlYWRlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbmBcclxuY29uc3QgVG9wSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXRvcDoxNTBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIHdpZHRoOiA1MCU7IFxyXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2O1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29udGVudEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgcGFkZGluZzozMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6MzBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMnB4IDQ1cHggLTE1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4Qm94MiA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IE1lbnVCdXR0b25TdWIgPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuYFxyXG5jb25zdCBab2RLb28gPSBzdHlsZWQoTWVudUJ1dHRvbilgXHJcbiAgICBtYXJnaW4tcmlnaHQ6NjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuYFxyXG5jb25zdCBUcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzAxYmY4NjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBcclxuICAgIGJvcmRlcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3RhcnRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFiZjg2OyBcclxuICAgIGNvbG9yOndoaXRlOyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmIDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IElucHV0VGhpbmcgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuYFxyXG5jb25zdCBJbnB1dFN1YnNjcmliZSA9IHN0eWxlZC5pbnB1dGBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIG9wYWNpdHk6MC41O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU3RhcnROb3dCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDFiZjg2IDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgQ29tbW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICB3aWR0aDogMTUwcHg7Zm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogNDBweDtib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAxYmY4NiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFByb2R1Y3REaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZSA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IzQ5NjE3NDsgXHJcbiAgICBmb250LXNpemU6MjJweDsgXHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbmBcclxuY29uc3QgVGV4dFN0eWxlMiA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM0OTYxNzRcIn07IFxyXG4gICAgZm9udC1zaXplOjIycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZVN1YjIgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcIiM5NUE4QjdcIn07IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgVGV4dFN0eWxlU3ViID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjOTVBOEI3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBTcGVjaWZpY2F0aW9uRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmE7IFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjY7XHJcbmBcclxuY29uc3QgRGlzcGxheURpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDozMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDozMDBweDtcclxuYFxyXG5jb25zdCBNaW5pQm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBNaW5pQm94RmVhdHVyZSA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuYFxyXG5jb25zdCBTcGVjVGl0bGUgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiM0OTYxNzQ7XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbmBcclxuY29uc3QgU3BlY1RleHQgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAjOTVBOEI3ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFByaWNlRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmctdG9wOjEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbmBcclxuY29uc3QgUHJpY2VNZW51ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHggNTBweDtcclxuICAgIG1hcmdpbi10b3A6NTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTVBOEI3O1xyXG5gXHJcbmNvbnN0IFByaWNlQ2xhc3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDI1cHg7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTEgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiMwMWJmODY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUyID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBjb2xvcjojNDk2MTc0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTMgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvcGFjaXR5OjAuNTsgXHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmBcclxuY29uc3QgUHJpY2VEZXRhaWwgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuYFxyXG5jb25zdCBTcG9uc29yRGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2ZmEgO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGVlZjY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmNjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5gXHJcbmNvbnN0IFJldmlld1RleHQgPSBzdHlsZWQucGBcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICM5NUE4Qjc7XHJcbmBcclxuY29uc3QgUmV2aWV3Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDt3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyMjEsMjIxLDIyMSwwLjMyKTtcclxuYFxyXG5jb25zdCBDb250YWN0RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbmBcclxuY29uc3QgU3Vic2NyaWJlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiMwMWJmODY7IHdpZHRoOiAxNTBweDtjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7Ym9yZGVyOndoaXRlO2JvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgU3VwcG9ydERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2U0NztcclxuYFxyXG5jb25zdCBCb3R0b21FdGMgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IEljb25QbGF5ID0gc3R5bGVkLmlgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy10b3A6M3B4OyBcclxuICAgIHBhZGRpbmctcmlnaHQ6MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG5gXHJcbmNvbnN0IEljb25NaW5pID0gc3R5bGVkLmlgXHJcbiAgICBjb2xvcjogIzAxYmY4NjsgXHJcbiAgICBmb250LXNpemU6NDhweDtcclxuYFxyXG5jb25zdCBoZWFkZXJNZW51QnV0dG9uVGV4dHMgPSBbXHJcbiAgICAnSG9tZScsXHJcbiAgICAnRmVhdHVyZXMnLFxyXG4gICAgJ1BsYW5zJyxcclxuICAgICdDbGllbnRzJyxcclxuICAgICdQYWdlc+KWvCdcclxuXVxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEhlYWRlck1lbnVJZHgsIHNldFNlbGVjdGVkSGVhZGVyTWVudUlkeF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkSGVhZGVyTWVudUlkeDoke3NlbGVjdGVkSGVhZGVyTWVudUlkeH1gKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm9keSBzdHlsZT17e21hcmdpbjonMCd9fT5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YXRpYy50dW1ibHIuY29tL2k1czJ6a3MvNmtPb2h3bHV4L3BlLWljb24tNy1zdHJva2UuY3NzXCI+PC9saW5rPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDxIZWFkZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXBwZXJMZWZ0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIHtoZWFkZXJNZW51QnV0dG9uVGV4dHMubWFwKChoZWFkZXJNZW51QnV0dG9uVGV4dCxpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4KGlkeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkSGVhZGVyTWVudUlkeCA9PSBpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlck1lbnVCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPFpvZEtvbz5ab2RLb288L1pvZEtvbz5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbj5Ib21lPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPkZlYXR1cmU8L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+UGxhbnM8L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+Q2xpZW50czwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblN1Yj5QYWdlc+KWvDwvTWVudUJ1dHRvblN1Yj5cclxuICAgICAgICAgICAgICAgIDwvVXBwZXJMZWZ0Qm94PlxyXG4gICAgICAgICAgICAgICAgPFVwcGVyUmlnaHRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25TdWI+TG9naW48L01lbnVCdXR0b25TdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyeUJ1dHRvbj5UcnkgZm9yIEZyZWU8L1RyeUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVXBwZXJSaWdodEJveD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvSGVhZGVyRGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOicjMDFiZjg2J319PlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLCBmb250U2l6ZTonMzBweCcsZm9udFdlaWdodDonMjAwJyx3aWR0aDonNzUlJ319PlpvZGtvbyBpcyBhIGZ1bGx5IHJlc3BvbnNpdmUgbGFuZGluZyBwYWdlIHRlbXBsYXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6ICcyNHB4JywgZm9udFNpemU6JzE2cHgnLCBtYXJnaW5Ub3A6JzEwcHgnLCBtYXJnaW5Cb3R0b206JzUwcHgnLCBmb250V2VpZ2h0OiAnNDAwJyx3aWR0aDonOTUlJywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpvZGtvbyBpcyBhIGZ1bGx5IHJlc3BvbnNpdmUgbGFuZGluZyBwYWdlIGJ1aWx0IHVzaW5nIHRoZSBsYXRlc3QgQm9vdHN0cmFwIGZyYW1ld29yay4gSXQncyBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLiBUaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxTdGFydEJ1dHRvbj5HRVQgU1RBUlRFRDwvU3RhcnRCdXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+PHNwYW4gc3R5bGU9e3tmb250U2l6ZTonbWVkaXVtJywgY29sb3I6J3doaXRlJywgbWFyZ2luOiAnMCAyMHB4Jywgb3BhY2l0eTonMC43J319Pk9SPC9zcGFuPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxidXR0b24gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnIzAxYmY4NicsY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogJyMwMWJmODYnLGZvbnRTaXplOicxNXB4Jyxmb250V2VpZ2h0Oic2MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48SWNvblBsYXkgY2xhc3NOYW1lPVwicGUtN3MtcGxheVwiPjwvSWNvblBsYXk+V0FUQ0ggVklERU88L2J1dHRvbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnIzc3OGZhMicsIGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczMHB4JywgbWFyZ2luVG9wOiAnMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVHSVNURVIgRk9SIEZSRUU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUaGluZyBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdHlwZT1cInRleHRcIj48L0lucHV0VGhpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUaGluZyBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZVwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhcnROb3dCdXR0b24+U1RBUlQgTk9XPC9TdGFydE5vd0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsd2hpdGVTcGFjZTogJ3ByZSd9fT5CeSByZWdpc3RlcmluZyB5b3UgYWdyZWUgdG8gdGhlIFpvZGtvbyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTonMTJweCcsb3BhY2l0eTonMC43Jyxjb2xvcjonYmx1ZSd9fT5UZXJtcyBvZiBVc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEJveD5cclxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFByb2R1Y3REaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1tZWRhbFwiIHN0eWxlPXt7Zm9udFNpemU6JzQ4cHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3MHB4J319PkNsZWFuIGFuZCBVbHRyYSBNb2Rlcm4gRGVzaWduPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonNjUlJywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWV2ZW5seSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsd2lkdGg6JzMwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OiAnMzAwJywgbGluZUhlaWdodDogJzI4cHgnLCBjb2xvcjogJyM5NUE4QjcnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlByYWVzZW50IGV0IHZpdmVycmEgbWFzc2Egbm9uIHZhcml1cyBtYWduYSBlZ2V0IG5pYmggdml0YWUgdmVsaXQgcG9zdWVyZSBlZmZpY2l0dXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDogJzVweCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnLCBsaW5lSGVpZ2h0OiAnMjZweCcsIGNvbG9yOiAnIzk1QThCNycsZm9udFNpemU6ICcxNHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQncyBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLldlIHB1dCBhIGxvdCBvZiBlZmZvcnQgaW4gZGVzaWduLCBhcyBpdOKAmXMgdGhlIG1vc3QgaW1wb3J0YW50IGluZ3JlZGllbnQgb2Ygc3VjY2Vzc2Z1bCB3ZWJzaXRlLlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdC5XZSBwdXQgYSBsb3Qgb2YgZWZmb3J0IGluIGRlc2lnbiwgYXMgaXTigJlzIHRoZSBtb3N0IGltcG9ydGFudCBpbmdyZWRpZW50IG9mIHN1Y2Nlc3NmdWwgd2Vic2l0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5MRUFSTiBNT1JFPC9Db21tb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9tYWNib29rLnBuZ1wiIHdpZHRoPVwiNjUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3REaXY+XHJcbiAgICAgICAgICAgIDxTcGVjaWZpY2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luVG9wOicxMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlPkl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzczwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxEaXNwbGF5RGl2IHN0eWxlPXt7d2lkdGg6JzUwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWluaUJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLXJvY2tldFwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPlN0cmF0ZWd5IFNvbHV0aW9uczwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0Pkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3Mtc2NpZW5jZVwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkRpZ2l0YWwgRGVzaWduPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+Q29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1kaXNwbGF5MVwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkFuYWx5dGljcyBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5UaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtZGF0ZVwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPlN0cmF0ZWd5IFNvbHV0aW9uczwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0Pkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtY3JlZGl0XCI+PC9JY29uTWluaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+RGlnaXRhbCBEZXNpZ248L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5Db250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYS4uPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWhlYWRwaG9uZXNcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5BbmFseXRpY3MgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+VGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWluaUJveD5cclxuICAgICAgICAgICAgICAgIDwvRGlzcGxheURpdj5cclxuICAgICAgICAgICAgPC9TcGVjaWZpY2F0aW9uRGl2PlxyXG4gICAgICAgICAgICA8UHJpY2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc0MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+Q2hvb3NlIHlvdXIgcGVyZmVjdCBwbGFuPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1Yj5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuPC9UZXh0U3R5bGVTdWI+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+QkFTSUM8L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQxOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXNlcnZlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtZ3JhcGhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLW1haWwtb3BlblwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtdG9vbHNcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+UFJFTUlVTTwvUHJpY2VUaXRsZTE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTI+JDI5PC9QcmljZVRpdGxlMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMz5QZXIgTW9udGg8L1ByaWNlVGl0bGUzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJywgbWFyZ2luQm90dG9tOiAnMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3Mtc2VydmVyXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjEwIEdCIFN0b3JhZ2U8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1ncmFwaFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD41MDAgR0IgQmFuZHdpZHRoPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtbWFpbC1vcGVuXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPkVtYWlsIFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy10b29sc1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4yNHg3IFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5TSUdOVVAgTk9XPC9Db21tb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMT5ERVZFTE9QRVI8L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQzOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXNlcnZlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtZ3JhcGhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLW1haWwtb3BlblwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtdG9vbHNcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgIDwvUHJpY2VEaXY+XHJcbiAgICAgICAgICAgIDxTcG9uc29yRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5UcnVzdGVkIGJ5IFRob3VzYW5kczwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzgwJScsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsbWFyZ2luQm90dG9tOiAnNzBweCcsYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21pY3Jvc29mdC5wbmdcIiBzdHlsZT17e21hcmdpblJpZ2h0OiczMHB4JyxjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9nb29nbGUucG5nXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMzBweCcsY3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW5zdGFncmFtLnBuZ1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzMwcHgnLGN1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbnZlcnNlLnBuZ1wiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e3BhZGRpbmc6ICczMHB4Jywgd2lkdGg6JzUwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5SaWdodDogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJwgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIyLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5SaWdodDogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJwgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIzLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1Nwb25zb3JEaXY+XHJcbiAgICAgICAgICAgIDxDb250YWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUyIGlucHV0Q29sb3I9XCJ3aGl0ZVwiPkJlIGVuZ2FnZWQgTmV3c2xldHRlcjwvVGV4dFN0eWxlMj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViMiBpbnB1dENvbG9yPVwid2hpdGVcIiBzdHlsZT17e29wYWNpdHk6JzAuNyd9fT5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuPC9UZXh0U3R5bGVTdWIyPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRTdWJzY3JpYmUgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGUtbWFpbCBhZGRyZXNzXCI+PC9JbnB1dFN1YnNjcmliZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uPlNVQlNDUklCRTwvU3Vic2NyaWJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC43KScsIG1hcmdpblRvcDogJzNweCd9fT5Zb3UgY2FuIHVuLXN1YnNjcmliZSBhdCBhbnkgdGltZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3REaXY+XHJcbiAgICAgICAgICAgIDxTdXBwb3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonNjAlJywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWV2ZW5seScsbWFyZ2luQm90dG9tOic3MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5ab2Rrb288L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+SG9tZTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkZlYXR1cmVzPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+VGVhbTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkZBUTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLGZvbnRXZWlnaHQ6ICc2MDAnfX0+U29jaWFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkZhY2Vib29rPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+VHdpdHRlcjwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkJlaGFuY2U8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5EcmliYmJsZTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLGZvbnRXZWlnaHQ6ICc2MDAnfX0+U3VwcG9ydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5IZWxwICYgU3VwcG9ydDwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlByaXZhY3kgUG9saWN5PC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+VGVybXMgJiBDb25kaXRpb25zPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5Db250YWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT43OTUgRm9sc29tIEF2ZSwgU3VpdGUgNjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT5TYW4gRnJhbmNpc2NvLCBDQSA5NDEwNzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsZm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnfX0+UDogKDEyMykgNDU2LTc4OTA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RTogZW1haWxAZW1haWwuY29tPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4J319PjIwMjAgwqkgWm9ka29vPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1N1cHBvcnREaXY+XHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==