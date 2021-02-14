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
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
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
const headerMenuButtonTexts = ['Features', 'Plans', 'Clients', 'Pages▼'];

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
      lineNumber: 382,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
          children: "ZodKoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
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
            lineNumber: 390,
            columnNumber: 29
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 385,
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
      lineNumber: 384,
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
          flexDirection: "column",
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
          flexDirection: "column",
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
          flexDirection: "column",
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
          flexDirection: "column",
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
    lineNumber: 381,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZmxleERpcmVjdGlvbiIsIlVwcGVyTGVmdEJveCIsIlVwcGVyUmlnaHRCb3giLCJCb2R5IiwiYm9keSIsIkhlYWRlckRpdiIsIlRvcEhlYWRlciIsIkRlc2NyaXB0aW9uRGl2IiwiRGVzY3JpcHRpb24iLCJNZW51QnV0dG9uIiwiYnV0dG9uIiwiQ29udGVudEJveCIsIklucHV0Qm94IiwiRmxleEJveDIiLCJNZW51QnV0dG9uU3ViIiwiWm9kS29vIiwiVHJ5QnV0dG9uIiwiU3RhcnRCdXR0b24iLCJJbnB1dFRoaW5nIiwiaW5wdXQiLCJJbnB1dFN1YnNjcmliZSIsIlN0YXJ0Tm93QnV0dG9uIiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJUZXh0U3R5bGUyIiwiaW5wdXRDb2xvciIsIlRleHRTdHlsZVN1YjIiLCJUZXh0U3R5bGVTdWIiLCJTcGVjaWZpY2F0aW9uRGl2IiwiRGlzcGxheURpdiIsIk1pbmlCb3giLCJNaW5pQm94RmVhdHVyZSIsIlNwZWNUaXRsZSIsIlNwZWNUZXh0IiwiUHJpY2VEaXYiLCJQcmljZU1lbnUiLCJQcmljZUNsYXNzIiwiUHJpY2VUaXRsZTEiLCJQcmljZVRpdGxlMiIsIlByaWNlVGl0bGUzIiwiUHJpY2VEZXRhaWwiLCJTcG9uc29yRGl2IiwiUmV2aWV3VGV4dCIsIlJldmlld0JveCIsIkNvbnRhY3REaXYiLCJTdWJzY3JpYmVCdXR0b24iLCJTdXBwb3J0RGl2IiwiQm90dG9tRXRjIiwiSWNvblBsYXkiLCJpIiwiSWNvbk1pbmkiLCJoZWFkZXJNZW51QnV0dG9uVGV4dHMiLCJNYWluIiwic2VsZWN0ZWRIZWFkZXJNZW51SWR4Iiwic2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4IiwidXNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwibWFwIiwiaGVhZGVyTWVudUJ1dHRvblRleHQiLCJpZHgiLCJlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm9wYWNpdHkiLCJib3JkZXIiLCJjdXJzb3IiLCJ3aGl0ZVNwYWNlIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0EsTUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJO0FBQzNCO0FBQ0Esc0JBQXVCQyxLQUFELElBQ2RBLEtBQUssQ0FBQ0MsYUFBTixHQUFzQkQsS0FBSyxDQUFDQyxhQUE1QixHQUE0QyxLQUFNO0FBQzFELENBSkE7S0FBTUosTztBQU1OLE1BQU1LLFlBQVksR0FBR0osaUVBQU0sQ0FBQ0QsT0FBRCxDQUFVO0FBQ3JDO0FBQ0EsQ0FGQTtNQUFNSyxZO0FBR04sTUFBTUMsYUFBYSxHQUFHTCxpRUFBTSxDQUFDRCxPQUFELENBQVU7QUFDdEM7QUFDQSxDQUZBO01BQU1NLGE7QUFHTixNQUFNQyxJQUFJLEdBQUdOLHlEQUFNLENBQUNPLElBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7TUFBTUQsSTtBQU9OLE1BQU1FLFNBQVMsR0FBR1IseURBQU0sQ0FBQ0MsR0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWEE7TUFBTU8sUztBQVlOLE1BQU1DLFNBQVMsR0FBR1QseURBQU0sQ0FBQ0MsR0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBS0EsTUFBTVMsY0FBYyxHQUFHVix5REFBTSxDQUFDQyxHQUFJO0FBQ2xDO0FBQ0E7QUFDQTtB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SywwQkFBWSxFQUFFLEtBQS9EO0FBQXNFRCx1QkFBUyxFQUFFO0FBQWpGLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0wsbUJBQUssRUFBRSx1QkFBUjtBQUFnQ0Msc0JBQVEsRUFBQyxNQUF6QztBQUFpREssMEJBQVksRUFBRSxLQUEvRDtBQUFzRUQsdUJBQVMsRUFBRTtBQUFqRixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUk7QUFBRyxpQkFBSyxFQUFFO0FBQUNMLG1CQUFLLEVBQUUsdUJBQVI7QUFBZ0NDLHNCQUFRLEVBQUMsTUFBekM7QUFBaURLLDBCQUFZLEVBQUUsS0FBL0Q7QUFBc0VELHVCQUFTLEVBQUU7QUFBakYsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixlQUtJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUE4QkkscUVBQUMsT0FBRDtBQUFTLGFBQUssRUFBRTtBQUFDRyxvQkFBVSxFQUFDO0FBQVosU0FBaEI7QUFBQSwrQkFDSTtBQUFHLGVBQUssRUFBRTtBQUFDUixpQkFBSyxFQUFFLFNBQVI7QUFBa0JDLG9CQUFRLEVBQUM7QUFBM0IsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFvVUgsQ0F2VUQ7O0dBQU1iLEk7O09BQUFBLEk7QUF5VVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk0Y2FkNjRkZmU0ZDk2ZjJlNDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbnRlcmZhY2UgRmxleEJveFByb3BzIHtcclxuICAgIGZsZXhEaXJlY3Rpb24/OnN0cmluZ1xyXG59XHJcbmNvbnN0IEZsZXhCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHM6IEZsZXhCb3hQcm9wcykgPT5cclxuICAgICAgICBwcm9wcy5mbGV4RGlyZWN0aW9uID8gcHJvcHMuZmxleERpcmVjdGlvbiA6ICdyb3cnfTtcclxuYFxyXG5cclxuY29uc3QgVXBwZXJMZWZ0Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6MjAlOyBwYWRkaW5nOjIwcHg7XHJcbmBcclxuY29uc3QgVXBwZXJSaWdodEJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG5gXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuYm9keWBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgSGVhZGVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuYFxyXG5jb25zdCBUb3BIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcclxuICAgIHBhZGRpbmctdG9wOjE1MHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOjE1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG5gXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgd2lkdGg6IDUwJTsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG5gXHJcblxyXG5cclxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuYFxyXG5jb25zdCBDb250ZW50Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBcclxuICAgIHdpZHRoOjUwJTsgXHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbmBcclxuY29uc3QgSW5wdXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzozMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7IFxyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OjMzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDIycHggNDVweCAtMTVweCByZ2JhKDAsMCwwLDAuNSk7XHJcbmBcclxuXHJcbmNvbnN0IEZsZXhCb3gyID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgTWVudUJ1dHRvblN1YiA9IHN0eWxlZChNZW51QnV0dG9uKWBcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5gXHJcbmNvbnN0IFpvZEtvbyA9IHN0eWxlZChNZW51QnV0dG9uKWBcclxuICAgIG1hcmdpbi1yaWdodDo2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG5gXHJcbmNvbnN0IFRyeUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDsgXHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjojMDFiZjg2OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7IFxyXG4gICAgYm9yZGVyOndoaXRlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuYFxyXG5jb25zdCBTdGFydEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWJmODY7IFxyXG4gICAgY29sb3I6d2hpdGU7IFxyXG4gICAgaGVpZ2h0OiA0MHB4OyBcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOndoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmYgO1xyXG4gICAgICAgIGNvbG9yOiAjMDFiZjg2IDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZSA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgSW5wdXRUaGluZyA9IHN0eWxlZC5pbnB1dGBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG5gXHJcbmNvbnN0IElucHV0U3Vic2NyaWJlID0gc3R5bGVkLmlucHV0YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgb3BhY2l0eTowLjU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBTdGFydE5vd0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMWJmODYgO1xyXG4gICAgICAgIGNvbG9yOiAjMDFiZjg2IDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lIDtcclxuICAgIH1cclxuYFxyXG5jb25zdCBDb21tb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIHdpZHRoOiAxNTBweDtmb250LXdlaWdodDogNjAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O2JvcmRlci1yYWRpdXM6IDQwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDFiZjg2IDtcclxuICAgICAgICBjb2xvcjogIzAxYmY4NiA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgUHJvZHVjdERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XHJcbmBcclxuY29uc3QgVGV4dFN0eWxlID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjojNDk2MTc0OyBcclxuICAgIGZvbnQtc2l6ZToyMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuYFxyXG5jb25zdCBUZXh0U3R5bGUyID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5pbnB1dENvbG9yIHx8IFwiIzQ5NjE3NFwifTsgXHJcbiAgICBmb250LXNpemU6MjJweDsgXHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbmBcclxuY29uc3QgVGV4dFN0eWxlU3ViMiA9IHN0eWxlZC5wYFxyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5pbnB1dENvbG9yIHx8IFwiIzk1QThCN1wifTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuXHJcblxyXG5jb25zdCBUZXh0U3R5bGVTdWIgPSBzdHlsZWQucGBcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM5NUE4Qjc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFNwZWNpZmljYXRpb25EaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmYTsgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZWVmNjsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmNjtcclxuYFxyXG5jb25zdCBEaXNwbGF5RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwMHB4O1xyXG5gXHJcbmNvbnN0IE1pbmlCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1pbmlCb3hGZWF0dXJlID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5gXHJcbmNvbnN0IFNwZWNUaXRsZSA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IzQ5NjE3NDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuYFxyXG5jb25zdCBTcGVjVGV4dCA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6ICM5NUE4QjcgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgUHJpY2VEaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuYFxyXG5jb25zdCBQcmljZU1lbnUgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweCA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5NUE4Qjc7XHJcbmBcclxuY29uc3QgUHJpY2VDbGFzcyA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgXHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjVweDtcclxuYFxyXG5jb25zdCBQcmljZVRpdGxlMSA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IzAxYmY4NjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmBcclxuY29uc3QgUHJpY2VUaXRsZTIgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIGNvbG9yOiM0OTYxNzQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuYFxyXG5jb25zdCBQcmljZVRpdGxlMyA9IHN0eWxlZC5wYFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9wYWNpdHk6MC41OyBcclxuICAgIG1hcmdpbi10b3A6MDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuYFxyXG5jb25zdCBQcmljZURldGFpbCA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5gXHJcbmNvbnN0IFNwb25zb3JEaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmYSA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZWVmNjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWY2O1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbmBcclxuY29uc3QgUmV2aWV3VGV4dCA9IHN0eWxlZC5wYFxyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzk1QThCNztcclxuYFxyXG5jb25zdCBSZXZpZXdCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O3dpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweCAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDIyMSwyMjEsMjIxLDAuMzIpO1xyXG5gXHJcbmNvbnN0IENvbnRhY3REaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuYFxyXG5jb25zdCBTdWJzY3JpYmVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IzAxYmY4Njsgd2lkdGg6IDE1MHB4O2N1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNDBweDsgZm9udC13ZWlnaHQ6IDYwMDtib3JkZXI6d2hpdGU7Ym9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuYFxyXG5jb25zdCBTdXBwb3J0RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzZTQ3O1xyXG5gXHJcbmNvbnN0IEJvdHRvbUV0YyA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcbmBcclxuY29uc3QgSWNvblBsYXkgPSBzdHlsZWQuaWBcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDozcHg7IFxyXG4gICAgcGFkZGluZy1yaWdodDoycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEycHg7XHJcbmBcclxuY29uc3QgSWNvbk1pbmkgPSBzdHlsZWQuaWBcclxuICAgIGNvbG9yOiAjMDFiZjg2OyBcclxuICAgIGZvbnQtc2l6ZTo0OHB4O1xyXG5gXHJcbmNvbnN0IGhlYWRlck1lbnVCdXR0b25UZXh0cyA9IFtcclxuICAgICdGZWF0dXJlcycsXHJcbiAgICAnUGxhbnMnLFxyXG4gICAgJ0NsaWVudHMnLFxyXG4gICAgJ1BhZ2Vz4pa8J1xyXG5dXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSGVhZGVyTWVudUlkeCwgc2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRIZWFkZXJNZW51SWR4OiR7c2VsZWN0ZWRIZWFkZXJNZW51SWR4fWApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb2R5IHN0eWxlPXt7bWFyZ2luOicwJ319PlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vaTVzMnprcy82a09vaHdsdXgvcGUtaWNvbi03LXN0cm9rZS5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgPEhlYWRlckRpdj5cclxuICAgICAgICAgICAgICAgIDxVcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFpvZEtvbz5ab2RLb288L1pvZEtvbz5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbj5Ib21lPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoZWFkZXJNZW51QnV0dG9uVGV4dHMubWFwKChoZWFkZXJNZW51QnV0dG9uVGV4dCxpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4KGlkeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkSGVhZGVyTWVudUlkeCA9PSBpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlck1lbnVCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1VwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgIDxVcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPkxvZ2luPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcnlCdXR0b24+VHJ5IGZvciBGcmVlPC9UcnlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1VwcGVyUmlnaHRCb3g+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWRlckRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzAxYmY4Nid9fT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzMwcHgnLGZvbnRXZWlnaHQ6JzIwMCcsd2lkdGg6Jzc1JSd9fT5ab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiAnMjRweCcsIGZvbnRTaXplOicxNnB4JywgbWFyZ2luVG9wOicxMHB4JywgbWFyZ2luQm90dG9tOic1MHB4JywgZm9udFdlaWdodDogJzQwMCcsd2lkdGg6Jzk1JScsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSBidWlsdCB1c2luZyB0aGUgbGF0ZXN0IEJvb3RzdHJhcCBmcmFtZXdvcmsuIEl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy4gVGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48U3RhcnRCdXR0b24+R0VUIFNUQVJURUQ8L1N0YXJ0QnV0dG9uPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6J21lZGl1bScsIGNvbG9yOid3aGl0ZScsIG1hcmdpbjogJzAgMjBweCcsIG9wYWNpdHk6JzAuNyd9fT5PUjwvc3Bhbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJyMwMWJmODYnLGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDFiZjg2Jyxmb250U2l6ZTonMTVweCcsZm9udFdlaWdodDonNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PEljb25QbGF5IGNsYXNzTmFtZT1cInBlLTdzLXBsYXlcIj48L0ljb25QbGF5PldBVENIIFZJREVPPC9idXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM3NzhmYTInLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMzBweCcsIG1hcmdpblRvcDogJzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFR0lTVEVSIEZPUiBGUkVFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJ0Tm93QnV0dG9uPlNUQVJUIE5PVzwvU3RhcnROb3dCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOicxMnB4JyxvcGFjaXR5OicwLjcnLHdoaXRlU3BhY2U6ICdwcmUnfX0+QnkgcmVnaXN0ZXJpbmcgeW91IGFncmVlIHRvIHRoZSBab2Rrb28gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsY29sb3I6J2JsdWUnfX0+VGVybXMgb2YgVXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtbWVkYWxcIiBzdHlsZT17e2ZvbnRTaXplOic0OHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNzBweCd9fT5DbGVhbiBhbmQgVWx0cmEgTW9kZXJuIERlc2lnbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzY1JScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLHdpZHRoOiczMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDogJzMwMCcsIGxpbmVIZWlnaHQ6ICcyOHB4JywgY29sb3I6ICcjOTVBOEI3JywgZm9udFNpemU6ICcxOHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5QcmFlc2VudCBldCB2aXZlcnJhIG1hc3NhIG5vbiB2YXJpdXMgbWFnbmEgZWdldCBuaWJoIHZpdGFlIHZlbGl0IHBvc3VlcmUgZWZmaWNpdHVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6ICc1cHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JywgbGluZUhlaWdodDogJzI2cHgnLCBjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOiAnMTRweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy5XZSBwdXQgYSBsb3Qgb2YgZWZmb3J0IGluIGRlc2lnbiwgYXMgaXTigJlzIHRoZSBtb3N0IGltcG9ydGFudCBpbmdyZWRpZW50IG9mIHN1Y2Nlc3NmdWwgd2Vic2l0ZS5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQuV2UgcHV0IGEgbG90IG9mIGVmZm9ydCBpbiBkZXNpZ24sIGFzIGl04oCZcyB0aGUgbW9zdCBpbXBvcnRhbnQgaW5ncmVkaWVudCBvZiBzdWNjZXNzZnVsIHdlYnNpdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+TEVBUk4gTU9SRTwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWFjYm9vay5wbmdcIiB3aWR0aD1cIjY1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICA8U3BlY2lmaWNhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpblRvcDonMTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5JdCdzIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3M8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RGlzcGxheURpdiBzdHlsZT17e3dpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1yb2NrZXRcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5TdHJhdGVneSBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLXNjaWVuY2VcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5EaWdpdGFsIERlc2lnbjwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0PkNvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5IHJhbmRvbSB0ZXh0LiBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBvZiBjbGFzc2ljYWwgTGF0aW4gbGl0ZXJhLi48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtZGlzcGxheTFcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5BbmFseXRpY3MgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+VGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWluaUJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TWluaUJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWRhdGVcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5TdHJhdGVneSBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWNyZWRpdFwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkRpZ2l0YWwgRGVzaWduPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+Q29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1oZWFkcGhvbmVzXCI+PC9JY29uTWluaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+QW5hbHl0aWNzIFNvbHV0aW9uczwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0PlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0uPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0Rpc3BsYXlEaXY+XHJcbiAgICAgICAgICAgIDwvU3BlY2lmaWNhdGlvbkRpdj5cclxuICAgICAgICAgICAgPFByaWNlRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlPkNob29zZSB5b3VyIHBlcmZlY3QgcGxhbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7YWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUxPkJBU0lDPC9QcmljZVRpdGxlMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMj4kMTk8L1ByaWNlVGl0bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUzPlBlciBNb250aDwvUHJpY2VUaXRsZTM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW5Cb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1zZXJ2ZXJcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLWdyYXBoXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjUwMCBHQiBCYW5kd2lkdGg8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1tYWlsLW9wZW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXRvb2xzXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjI0eDcgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNJR05VUCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUxPlBSRU1JVU08L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQyOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXNlcnZlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtZ3JhcGhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLW1haWwtb3BlblwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtdG9vbHNcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+REVWRUxPUEVSPC9QcmljZVRpdGxlMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMj4kMzk8L1ByaWNlVGl0bGUyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUzPlBlciBNb250aDwvUHJpY2VUaXRsZTM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW5Cb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1zZXJ2ZXJcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MTAgR0IgU3RvcmFnZTwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLWdyYXBoXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjUwMCBHQiBCYW5kd2lkdGg8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1tYWlsLW9wZW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+RW1haWwgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXRvb2xzXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjI0eDcgU3VwcG9ydDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uQnV0dG9uPlNJR05VUCBOT1c8L0NvbW1vbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1ByaWNlRGl2PlxyXG4gICAgICAgICAgICA8U3BvbnNvckRpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzEwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+VHJ1c3RlZCBieSBUaG91c2FuZHM8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e3dpZHRoOic4MCUnLGp1c3RpZnlDb250ZW50OidjZW50ZXInLG1hcmdpbkJvdHRvbTogJzcwcHgnLGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9taWNyb3NvZnQucG5nXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMzBweCcsY3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ29vZ2xlLnBuZ1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzMwcHgnLGN1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2luc3RhZ3JhbS5wbmdcIiBzdHlsZT17e21hcmdpblJpZ2h0OiczMHB4JyxjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb252ZXJzZS5wbmdcIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3twYWRkaW5nOiAnMzBweCcsIHdpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAnCBUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHMgd2hpY2ggZG9uJ3QgbG9vayBldmVuIHNsaWdodGx5IGJlbGlldmFibGUu4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkxlZnQ6ICcyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlci5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyMi5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyMy5qcGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fSB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLG1hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206JzAnfX0+Q2FsZWJvZ2RlbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6JzIwMCcsY29sb3I6ICcjOTVBOEI3Jyxmb250U2l6ZTonMTRweCcsbWFyZ2luVG9wOicwJ319PkFub3RoZXIgY29tcGFueSAsIENpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9TcG9uc29yRGl2PlxyXG4gICAgICAgICAgICA8Q29udGFjdERpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpbkJvdHRvbTonMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlMiBpbnB1dENvbG9yPVwid2hpdGVcIj5CZSBlbmdhZ2VkIE5ld3NsZXR0ZXI8L1RleHRTdHlsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1YjIgaW5wdXRDb2xvcj1cIndoaXRlXCIgc3R5bGU9e3tvcGFjaXR5OicwLjcnfX0+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViMj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0U3Vic2NyaWJlIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwgYWRkcmVzc1wiPjwvSW5wdXRTdWJzY3JpYmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbj5TVUJTQ1JJQkU8L1N1YnNjcmliZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxMnB4JywgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknLCBtYXJnaW5Ub3A6ICczcHgnfX0+WW91IGNhbiB1bi1zdWJzY3JpYmUgYXQgYW55IHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgPC9Db250YWN0RGl2PlxyXG4gICAgICAgICAgICA8U3VwcG9ydERpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzYwJScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknLG1hcmdpbkJvdHRvbTonNzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5ab2Rrb288L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+SG9tZTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkZlYXR1cmVzPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+VGVhbTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkZBUTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5Tb2NpYWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RmFjZWJvb2s8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Ud2l0dGVyPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+QmVoYW5jZTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPkRyaWJiYmxlPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGZsZXhEaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlN1cHBvcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+SGVscCAmIFN1cHBvcnQ8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Qcml2YWN5IFBvbGljeTwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlRlcm1zICYgQ29uZGl0aW9uczwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZScsZm9udFdlaWdodDogJzYwMCd9fT5Db250YWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT43OTUgRm9sc29tIEF2ZSwgU3VpdGUgNjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT5TYW4gRnJhbmNpc2NvLCBDQSA5NDEwNzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsZm9udFNpemU6JzE0cHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnfX0+UDogKDEyMykgNDU2LTc4OTA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RTogZW1haWxAZW1haWwuY29tPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4J319PjIwMjAgwqkgWm9ka29vPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1N1cHBvcnREaXY+XHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==