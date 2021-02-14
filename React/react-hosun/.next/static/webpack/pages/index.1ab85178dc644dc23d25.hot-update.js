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
const FeatureItems1 = [{
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-display1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 378,
    columnNumber: 15
  }, undefined),
  body1: 'Strategy Solutions',
  body2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-science"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 383,
    columnNumber: 15
  }, undefined),
  body1: 'Digital Design',
  body2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera..'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-display1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 388,
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
    lineNumber: 395,
    columnNumber: 15
  }, undefined),
  body1: 'Strategy Solutions',
  body2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-credit"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 15
  }, undefined),
  body1: 'Digital Design',
  body2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera..'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
    className: "pe-7s-headphones"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 405,
    columnNumber: 16
  }, undefined),
  body1: 'Analytics Solutions',
  body2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
}];

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
      lineNumber: 416,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperLeftBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ZodKoo, {
          children: "ZodKoo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 421,
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
            lineNumber: 424,
            columnNumber: 29
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpperRightBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButtonSub, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TryButton, {
          children: "Try for Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 418,
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
            lineNumber: 444,
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
            lineNumber: 445,
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
                lineNumber: 448,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
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
                lineNumber: 449,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
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
                  lineNumber: 452,
                  columnNumber: 32
                }, undefined), "WATCH VIDEO"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 450,
                columnNumber: 38
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 443,
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
              lineNumber: 458,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Full name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Email Address",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 462,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "User name",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 463,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputThing, {
              placeholder: "Password",
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StartNowButton, {
                children: "START NOW"
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  fontSize: '12px',
                  opacity: '0.7',
                  whiteSpace: 'pre'
                },
                children: "By registering you agree to the Zodkoo "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 469,
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
                lineNumber: 470,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 441,
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
          lineNumber: 479,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyle, {
          style: {
            marginBottom: '70px'
          },
          children: "Clean and Ultra Modern Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 478,
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
            lineNumber: 484,
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
            lineNumber: 486,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
            children: "LEARN MORE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/macbook.png",
            width: "650px",
            height: "350px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 477,
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
          lineNumber: 499,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DisplayDiv, {
        style: {
          width: '50%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [FeatureItems1.map((featureItem, idx) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
              children: [featureItem.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
                children: featureItem.body1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 509,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
                children: featureItem.body2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 510,
                columnNumber: 37
              }, undefined)]
            }, idx, true, {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 33
            }, undefined);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 516,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 515,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-display1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 521,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 522,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 523,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 520,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBox, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Strategy Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 529,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 530,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 527,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-credit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Digital Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 535,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 532,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MiniBoxFeature, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMini, {
              className: "pe-7s-headphones"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 538,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecTitle, {
              children: "Analytics Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 539,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpecText, {
              children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 540,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 537,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 497,
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
          lineNumber: 547,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 546,
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
              lineNumber: 554,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$19"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 555,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 556,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 553,
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
                lineNumber: 560,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 561,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 559,
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
                lineNumber: 564,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 565,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 563,
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
                lineNumber: 568,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 567,
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
                lineNumber: 572,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 573,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 575,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 558,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "PREMIUM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 580,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$29"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 581,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 582,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 579,
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
                lineNumber: 586,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 587,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 585,
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
                lineNumber: 590,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 591,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 589,
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
                lineNumber: 594,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 595,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 593,
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
                lineNumber: 598,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 599,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 597,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 601,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 584,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceMenu, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceClass, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle1, {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 606,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle2, {
              children: "$39"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 607,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceTitle3, {
              children: "Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 605,
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
                lineNumber: 612,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "10 GB Storage"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 613,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 611,
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
                lineNumber: 616,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "500 GB Bandwidth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 617,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 615,
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
                lineNumber: 620,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "Email Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 621,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 619,
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
                lineNumber: 624,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PriceDetail, {
                children: "24x7 Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 625,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 623,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CommonButton, {
              children: "SIGNUP NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 627,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 610,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 545,
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
          lineNumber: 634,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub, {
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 633,
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
          lineNumber: 639,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/google.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/instagram.png",
          style: {
            marginRight: '30px',
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/converse.png",
          style: {
            cursor: 'pointer'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 638,
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
              lineNumber: 647,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 646,
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
                lineNumber: 653,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 652,
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
                lineNumber: 656,
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
                lineNumber: 657,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 655,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 651,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 645,
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
              lineNumber: 663,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 662,
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
                lineNumber: 669,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 668,
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
                lineNumber: 672,
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
                lineNumber: 673,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 671,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 667,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 661,
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
              lineNumber: 679,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 678,
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
                lineNumber: 685,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 684,
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
                lineNumber: 688,
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
                lineNumber: 689,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 687,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 683,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 677,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 632,
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
          lineNumber: 697,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextStyleSub2, {
          inputColor: "white",
          style: {
            opacity: '0.7'
          },
          children: "The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 698,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FlexBox2, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputSubscribe, {
          type: "text",
          placeholder: "Enter e-mail address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 702,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubscribeButton, {
          children: "SUBSCRIBE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 703,
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
          lineNumber: 704,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 695,
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
            lineNumber: 710,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 711,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 712,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 714,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 709,
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
            lineNumber: 717,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 718,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 719,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 720,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Dribbble"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 721,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 716,
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
            lineNumber: 724,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Help & Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 725,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 726,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "Terms & Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 727,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 723,
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
            lineNumber: 730,
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
            lineNumber: 731,
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
            lineNumber: 732,
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
            lineNumber: 733,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomEtc, {
            children: "E: email@email.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 734,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 708,
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
          lineNumber: 738,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 415,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZmxleERpcmVjdGlvbiIsIlVwcGVyTGVmdEJveCIsIlVwcGVyUmlnaHRCb3giLCJCb2R5IiwiYm9keSIsIkhlYWRlckRpdiIsIlRvcEhlYWRlciIsIkRlc2NyaXB0aW9uRGl2IiwiRGVzY3JpcHRpb24iLCJNZW51QnV0dG9uIiwiYnV0dG9uIiwiQ29udGVudEJveCIsIklucHV0Qm94IiwiRmxleEJveDIiLCJNZW51QnV0dG9uU3ViIiwiWm9kS29vIiwiVHJ5QnV0dG9uIiwiU3RhcnRCdXR0b24iLCJJbnB1dFRoaW5nIiwiaW5wdXQiLCJJbnB1dFN1YnNjcmliZSIsIlN0YXJ0Tm93QnV0dG9uIiwiQ29tbW9uQnV0dG9uIiwiUHJvZHVjdERpdiIsIlRleHRTdHlsZSIsInAiLCJUZXh0U3R5bGUyIiwiaW5wdXRDb2xvciIsIlRleHRTdHlsZVN1YjIiLCJUZXh0U3R5bGVTdWIiLCJTcGVjaWZpY2F0aW9uRGl2IiwiRGlzcGxheURpdiIsIk1pbmlCb3giLCJNaW5pQm94RmVhdHVyZSIsIlNwZWNUaXRsZSIsIlNwZWNUZXh0IiwiUHJpY2VEaXYiLCJQcmljZU1lbnUiLCJQcmljZUNsYXNzIiwiUHJpY2VUaXRsZTEiLCJQcmljZVRpdGxlMiIsIlByaWNlVGl0bGUzIiwiUHJpY2VEZXRhaWwiLCJTcG9uc29yRGl2IiwiUmV2aWV3VGV4dCIsIlJldmlld0JveCIsIkNvbnRhY3REaXYiLCJTdWJzY3JpYmVCdXR0b24iLCJTdXBwb3J0RGl2IiwiQm90dG9tRXRjIiwiSWNvblBsYXkiLCJpIiwiSWNvbk1pbmkiLCJoZWFkZXJNZW51QnV0dG9uVGV4dHMiLCJGZWF0dXJlSXRlbXMxIiwiaWNvbiIsImJvZHkxIiwiYm9keTIiLCJGZWF0dXJlSXRlbXMyIiwiTWFpbiIsInNlbGVjdGVkSGVhZGVyTWVudUlkeCIsInNldFNlbGVjdGVkSGVhZGVyTWVudUlkeCIsInVzZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsIm1hcCIsImhlYWRlck1lbnVCdXR0b25UZXh0IiwiaWR4IiwiZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJvcGFjaXR5IiwiYm9yZGVyIiwiY3Vyc29yIiwid2hpdGVTcGFjZSIsImp1c3RpZnlDb250ZW50IiwiZmVhdHVyZUl0ZW0iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0EsTUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJO0FBQzNCO0FBQ0Esc0JBQXVCQyxLQUFELElBQ2RBLEtBQUssQ0FBQ0MsYUFBTixHQUFzQkQsS0FBSyxDQUFDQyxhQUE1QixHQUE0QyxLQUFNO0FBQzFELENBSkE7S0FBTUosTztBQU1OLE1BQU1LLFlBQVksR0FBR0osaUVBQU0sQ0FBQ0QsT0FBRCxDQUFVO0FBQ3JDO0FBQ0EsQ0FGQTtNQUFNSyxZO0FBR04sTUFBTUMsYUFBYSxHQUFHTCxpRUFBTSxDQUFDRCxPQUFELENBQVU7QUFDdEM7QUFDQSxDQUZBO01BQU1NLGE7QUFHTixNQUFNQyxJQUFJLEdBQUdOLHlEQUFNLENBQUNPLElBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7TUFBTUQsSTtBQU9OLE1BQU1FLFNBQVMsR0FBR1IseURBQU0sQ0FBQ0MsR0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWEE7TUFBTU8sUztBQVlOLE1BQU1DLFNBQVMsR0FBR1QseURBQU0sQ0FBQ0MsR0FBSTtBQUM3QjtBQUNBO0FB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QThVU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWFiODUxNzhkYzY0NGRjMjNkMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmludGVyZmFjZSBGbGV4Qm94UHJvcHMge1xyXG4gICAgZmxleERpcmVjdGlvbj86c3RyaW5nXHJcbn1cclxuY29uc3QgRmxleEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wczogRmxleEJveFByb3BzKSA9PlxyXG4gICAgICAgIHByb3BzLmZsZXhEaXJlY3Rpb24gPyBwcm9wcy5mbGV4RGlyZWN0aW9uIDogJ3Jvdyd9O1xyXG5gXHJcblxyXG5jb25zdCBVcHBlckxlZnRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICB3aWR0aDoyMCU7IHBhZGRpbmc6MjBweDtcclxuYFxyXG5jb25zdCBVcHBlclJpZ2h0Qm94ID0gc3R5bGVkKEZsZXhCb3gpYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbmBcclxuY29uc3QgQm9keSA9IHN0eWxlZC5ib2R5YFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBIZWFkZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmY4NjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG5gXHJcbmNvbnN0IFRvcEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IERlc2NyaXB0aW9uRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxyXG4gICAgcGFkZGluZy10b3A6MTUwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206MTUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxYmY4NjtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICB3aWR0aDogNTAlOyBcclxuICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbmBcclxuXHJcblxyXG5jb25zdCBNZW51QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIG1hcmdpbi1yaWdodDoxNXB4OyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxYmY4NjtcclxuICAgIGJvcmRlcjogIzAxYmY4NjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IENvbnRlbnRCb3ggPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IFxyXG4gICAgd2lkdGg6NTAlOyBcclxuICAgIHBhZGRpbmc6MzBweDtcclxuYFxyXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOjMwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgXHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6MzMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMjJweCA0NXB4IC0xNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuYFxyXG5cclxuY29uc3QgRmxleEJveDIgPSBzdHlsZWQoRmxleEJveClgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcblxyXG5jb25zdCBNZW51QnV0dG9uU3ViID0gc3R5bGVkKE1lbnVCdXR0b24pYFxyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbmBcclxuY29uc3QgWm9kS29vID0gc3R5bGVkKE1lbnVCdXR0b24pYFxyXG4gICAgbWFyZ2luLXJpZ2h0OjYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbmBcclxuY29uc3QgVHJ5QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiMwMWJmODY7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgXHJcbiAgICBib3JkZXI6d2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFN0YXJ0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxYmY4NjsgXHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lIDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIH1cclxuYFxyXG5jb25zdCBJbnB1dFRoaW5nID0gc3R5bGVkLmlucHV0YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbmBcclxuY29uc3QgSW5wdXRTdWJzY3JpYmUgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBvcGFjaXR5OjAuNTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IFN0YXJ0Tm93QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWJmODY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6ICMwMWJmODY7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAxYmY4NiA7XHJcbiAgICAgICAgY29sb3I6ICMwMWJmODYgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IENvbW1vbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG4gICAgYm9yZGVyOiAjMDFiZjg2O1xyXG4gICAgd2lkdGg6IDE1MHB4O2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7Ym9yZGVyLXJhZGl1czogNDAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMWJmODYgO1xyXG4gICAgICAgIGNvbG9yOiAjMDFiZjg2IDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lIDtcclxuICAgIH1cclxuYFxyXG5jb25zdCBQcm9kdWN0RGl2ID0gc3R5bGVkKEZsZXhCb3gyKWBcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMDBweDtcclxuYFxyXG5jb25zdCBUZXh0U3R5bGUgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiM0OTYxNzQ7IFxyXG4gICAgZm9udC1zaXplOjIycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZTIgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCIjNDk2MTc0XCJ9OyBcclxuICAgIGZvbnQtc2l6ZToyMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuYFxyXG5jb25zdCBUZXh0U3R5bGVTdWIyID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCIjOTVBOEI3XCJ9OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IFRleHRTdHlsZVN1YiA9IHN0eWxlZC5wYFxyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzk1QThCNztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgU3BlY2lmaWNhdGlvbkRpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmZhOyBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlZWY2OyBcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZWY2O1xyXG5gXHJcbmNvbnN0IERpc3BsYXlEaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAwcHg7XHJcbmBcclxuY29uc3QgTWluaUJveCA9IHN0eWxlZChGbGV4Qm94KWBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgTWluaUJveEZlYXR1cmUgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbmBcclxuY29uc3QgU3BlY1RpdGxlID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjojNDk2MTc0O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG5gXHJcbmNvbnN0IFNwZWNUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjogIzk1QThCNyAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBQcmljZURpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDoxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5gXHJcbmNvbnN0IFByaWNlTWVudSA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzk1QThCNztcclxuYFxyXG5jb25zdCBQcmljZUNsYXNzID0gc3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyNXB4O1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUxID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjojMDFiZjg2O1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYFxyXG5jb25zdCBQcmljZVRpdGxlMiA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgY29sb3I6IzQ5NjE3NDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5gXHJcbmNvbnN0IFByaWNlVGl0bGUzID0gc3R5bGVkLnBgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3BhY2l0eTowLjU7IFxyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5gXHJcbmNvbnN0IFByaWNlRGV0YWlsID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmBcclxuY29uc3QgU3BvbnNvckRpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmZhIDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlZWY2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuYFxyXG5jb25zdCBSZXZpZXdUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjOTVBOEI3O1xyXG5gXHJcbmNvbnN0IFJldmlld0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7d2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjIxLDIyMSwyMjEsMC4zMik7XHJcbmBcclxuY29uc3QgQ29udGFjdERpdiA9IHN0eWxlZChGbGV4Qm94MilgXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiZjg2O1xyXG5gXHJcbmNvbnN0IFN1YnNjcmliZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBjb2xvcjojMDFiZjg2OyB3aWR0aDogMTUwcHg7Y3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4OyBmb250LXdlaWdodDogNjAwO2JvcmRlcjp3aGl0ZTtib3JkZXItcmFkaXVzOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFN1cHBvcnREaXYgPSBzdHlsZWQoRmxleEJveDIpYFxyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNlNDc7XHJcbmBcclxuY29uc3QgQm90dG9tRXRjID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuYFxyXG5jb25zdCBJY29uUGxheSA9IHN0eWxlZC5pYFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctdG9wOjNweDsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuYFxyXG5jb25zdCBJY29uTWluaSA9IHN0eWxlZC5pYFxyXG4gICAgY29sb3I6ICMwMWJmODY7IFxyXG4gICAgZm9udC1zaXplOjQ4cHg7XHJcbmBcclxuY29uc3QgaGVhZGVyTWVudUJ1dHRvblRleHRzID0gW1xyXG4gICAgJ0ZlYXR1cmVzJyxcclxuICAgICdQbGFucycsXHJcbiAgICAnQ2xpZW50cycsXHJcbiAgICAnUGFnZXPilrwnXHJcbl1cclxuY29uc3QgRmVhdHVyZUl0ZW1zMSA9IFtcclxuICAgIHtcclxuICAgICAgICBpY29uOiA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtZGlzcGxheTFcIj48L0ljb25NaW5pPixcclxuICAgICAgICBib2R5MTogJ1N0cmF0ZWd5IFNvbHV0aW9ucycsXHJcbiAgICAgICAgYm9keTI6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3Mtc2NpZW5jZVwiPjwvSWNvbk1pbmk+LFxyXG4gICAgICAgIGJvZHkxOiAnRGlnaXRhbCBEZXNpZ24nLFxyXG4gICAgICAgIGJvZHkyOiAnQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbiA6IDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1kaXNwbGF5MVwiPjwvSWNvbk1pbmk+LFxyXG4gICAgICAgIGJvZHkxIDogJ0FuYWx5dGljcyBTb2x1dGlvbnMnLFxyXG4gICAgICAgIGJvZHkyIDogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0uJ1xyXG4gICAgfSxcclxuXVxyXG5jb25zdCBGZWF0dXJlSXRlbXMyID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb246IDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1kYXRlXCI+PC9JY29uTWluaT4sXHJcbiAgICAgICAgYm9keTE6ICdTdHJhdGVneSBTb2x1dGlvbnMnLFxyXG4gICAgICAgIGJvZHkyOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWNyZWRpdFwiPjwvSWNvbk1pbmk+LFxyXG4gICAgICAgIGJvZHkxOiAnRGlnaXRhbCBEZXNpZ24nLFxyXG4gICAgICAgIGJvZHkyOiAnQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbiA6IDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1oZWFkcGhvbmVzXCI+PC9JY29uTWluaT4sXHJcbiAgICAgICAgYm9keTEgOiAnQW5hbHl0aWNzIFNvbHV0aW9ucycsXHJcbiAgICAgICAgYm9keTIgOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS4nXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSGVhZGVyTWVudUlkeCwgc2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRIZWFkZXJNZW51SWR4OiR7c2VsZWN0ZWRIZWFkZXJNZW51SWR4fWApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb2R5IHN0eWxlPXt7bWFyZ2luOicwJ319PlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vaTVzMnprcy82a09vaHdsdXgvcGUtaWNvbi03LXN0cm9rZS5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgPEhlYWRlckRpdj5cclxuICAgICAgICAgICAgICAgIDxVcHBlckxlZnRCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFpvZEtvbz5ab2RLb288L1pvZEtvbz5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbj5Ib21lPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoZWFkZXJNZW51QnV0dG9uVGV4dHMubWFwKChoZWFkZXJNZW51QnV0dG9uVGV4dCxpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRIZWFkZXJNZW51SWR4KGlkeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkSGVhZGVyTWVudUlkeCA9PSBpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlck1lbnVCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1VwcGVyTGVmdEJveD5cclxuICAgICAgICAgICAgICAgIDxVcHBlclJpZ2h0Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uU3ViPkxvZ2luPC9NZW51QnV0dG9uU3ViPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcnlCdXR0b24+VHJ5IGZvciBGcmVlPC9UcnlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1VwcGVyUmlnaHRCb3g+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWRlckRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzAxYmY4Nid9fT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzMwcHgnLGZvbnRXZWlnaHQ6JzIwMCcsd2lkdGg6Jzc1JSd9fT5ab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiAnMjRweCcsIGZvbnRTaXplOicxNnB4JywgbWFyZ2luVG9wOicxMHB4JywgbWFyZ2luQm90dG9tOic1MHB4JywgZm9udFdlaWdodDogJzQwMCcsd2lkdGg6Jzk1JScsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBab2Rrb28gaXMgYSBmdWxseSByZXNwb25zaXZlIGxhbmRpbmcgcGFnZSBidWlsdCB1c2luZyB0aGUgbGF0ZXN0IEJvb3RzdHJhcCBmcmFtZXdvcmsuIEl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy4gVGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48U3RhcnRCdXR0b24+R0VUIFNUQVJURUQ8L1N0YXJ0QnV0dG9uPjwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6J21lZGl1bScsIGNvbG9yOid3aGl0ZScsIG1hcmdpbjogJzAgMjBweCcsIG9wYWNpdHk6JzAuNyd9fT5PUjwvc3Bhbj48L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJyMwMWJmODYnLGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDFiZjg2Jyxmb250U2l6ZTonMTVweCcsZm9udFdlaWdodDonNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PEljb25QbGF5IGNsYXNzTmFtZT1cInBlLTdzLXBsYXlcIj48L0ljb25QbGF5PldBVENIIFZJREVPPC9idXR0b24+PC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJyM3NzhmYTInLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMzBweCcsIG1hcmdpblRvcDogJzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFR0lTVEVSIEZPUiBGUkVFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dFRoaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGhpbmcgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRoaW5nIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXRUaGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJ0Tm93QnV0dG9uPlNUQVJUIE5PVzwvU3RhcnROb3dCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOicxMnB4JyxvcGFjaXR5OicwLjcnLHdoaXRlU3BhY2U6ICdwcmUnfX0+QnkgcmVnaXN0ZXJpbmcgeW91IGFncmVlIHRvIHRoZSBab2Rrb28gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLG9wYWNpdHk6JzAuNycsY29sb3I6J2JsdWUnfX0+VGVybXMgb2YgVXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtbWVkYWxcIiBzdHlsZT17e2ZvbnRTaXplOic0OHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNzBweCd9fT5DbGVhbiBhbmQgVWx0cmEgTW9kZXJuIERlc2lnbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzY1JScsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidjb2x1bW4nLHdpZHRoOiczMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDogJzMwMCcsIGxpbmVIZWlnaHQ6ICcyOHB4JywgY29sb3I6ICcjOTVBOEI3JywgZm9udFNpemU6ICcxOHB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5QcmFlc2VudCBldCB2aXZlcnJhIG1hc3NhIG5vbiB2YXJpdXMgbWFnbmEgZWdldCBuaWJoIHZpdGFlIHZlbGl0IHBvc3VlcmUgZWZmaWNpdHVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6ICc1cHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JywgbGluZUhlaWdodDogJzI2cHgnLCBjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOiAnMTRweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3MgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy5XZSBwdXQgYSBsb3Qgb2YgZWZmb3J0IGluIGRlc2lnbiwgYXMgaXTigJlzIHRoZSBtb3N0IGltcG9ydGFudCBpbmdyZWRpZW50IG9mIHN1Y2Nlc3NmdWwgd2Vic2l0ZS5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQuV2UgcHV0IGEgbG90IG9mIGVmZm9ydCBpbiBkZXNpZ24sIGFzIGl04oCZcyB0aGUgbW9zdCBpbXBvcnRhbnQgaW5ncmVkaWVudCBvZiBzdWNjZXNzZnVsIHdlYnNpdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+TEVBUk4gTU9SRTwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWFjYm9vay5wbmdcIiB3aWR0aD1cIjY1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0RGl2PlxyXG4gICAgICAgICAgICA8U3BlY2lmaWNhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94MiBzdHlsZT17e21hcmdpblRvcDonMTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5JdCdzIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3M8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViPlRoZSBjbGVhbiBhbmQgd2VsbCBjb21tZW50ZWQgY29kZSBhbGxvd3MgZWFzeSBjdXN0b21pemF0aW9uIG9mIHRoZSB0aGVtZS5JdCdzXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWQgZm9yIGRlc2NyaWJpbmcgeW91ciBhcHAsIGFnZW5jeSBvciBidXNpbmVzcy48L1RleHRTdHlsZVN1Yj5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJveDI+XHJcbiAgICAgICAgICAgICAgICA8RGlzcGxheURpdiBzdHlsZT17e3dpZHRoOic1MCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtGZWF0dXJlSXRlbXMxLm1hcCgoZmVhdHVyZUl0ZW0sIGlkeCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVJdGVtLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+e2ZlYXR1cmVJdGVtLmJvZHkxfTwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+e2ZlYXR1cmVJdGVtLmJvZHkyfTwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3Mtc2NpZW5jZVwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkRpZ2l0YWwgRGVzaWduPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+Q29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmEuLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uTWluaSBjbGFzc05hbWU9XCJwZS03cy1kaXNwbGF5MVwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPkFuYWx5dGljcyBTb2x1dGlvbnM8L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5UaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLjwvU3BlY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW5pQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtZGF0ZVwiPjwvSWNvbk1pbmk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RpdGxlPlN0cmF0ZWd5IFNvbHV0aW9uczwvU3BlY1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUZXh0Pkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaUJveEZlYXR1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbk1pbmkgY2xhc3NOYW1lPVwicGUtN3MtY3JlZGl0XCI+PC9JY29uTWluaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGl0bGU+RGlnaXRhbCBEZXNpZ248L1NwZWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjVGV4dD5Db250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYS4uPC9TcGVjVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NaW5pQm94RmVhdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25NaW5pIGNsYXNzTmFtZT1cInBlLTdzLWhlYWRwaG9uZXNcIj48L0ljb25NaW5pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNUaXRsZT5BbmFseXRpY3MgU29sdXRpb25zPC9TcGVjVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY1RleHQ+VGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybS48L1NwZWNUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01pbmlCb3hGZWF0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWluaUJveD5cclxuICAgICAgICAgICAgICAgIDwvRGlzcGxheURpdj5cclxuICAgICAgICAgICAgPC9TcGVjaWZpY2F0aW9uRGl2PlxyXG4gICAgICAgICAgICA8UHJpY2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc0MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+Q2hvb3NlIHlvdXIgcGVyZmVjdCBwbGFuPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZVN1Yj5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuPC9UZXh0U3R5bGVTdWI+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+QkFTSUM8L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQxOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXNlcnZlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtZ3JhcGhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLW1haWwtb3BlblwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtdG9vbHNcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTE+UFJFTUlVTTwvUHJpY2VUaXRsZTE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTI+JDI5PC9QcmljZVRpdGxlMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMz5QZXIgTW9udGg8L1ByaWNlVGl0bGUzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNlQ2xhc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJywgbWFyZ2luQm90dG9tOiAnMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3Mtc2VydmVyXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPjEwIEdCIFN0b3JhZ2U8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy1ncmFwaFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD41MDAgR0IgQmFuZHdpZHRoPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtbWFpbC1vcGVuXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCcsIG1hcmdpblRvcDonMTBweCd9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlRGV0YWlsPkVtYWlsIFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5Cb3R0b206JzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwZS03cy10b29sc1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4yNHg3IFN1cHBvcnQ8L1ByaWNlRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbkJ1dHRvbj5TSUdOVVAgTk9XPC9Db21tb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlTWVudT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRpdGxlMT5ERVZFTE9QRVI8L1ByaWNlVGl0bGUxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGl0bGUyPiQzOTwvUHJpY2VUaXRsZTI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUaXRsZTM+UGVyIE1vbnRoPC9QcmljZVRpdGxlMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljZUNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLXNlcnZlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD4xMCBHQiBTdG9yYWdlPC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtZ3JhcGhcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+NTAwIEdCIEJhbmR3aWR0aDwvUHJpY2VEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e21hcmdpbkJvdHRvbTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLW1haWwtb3BlblwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZURldGFpbD5FbWFpbCBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGUtN3MtdG9vbHNcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOicxMHB4J319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VEZXRhaWw+MjR4NyBTdXBwb3J0PC9QcmljZURldGFpbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24+U0lHTlVQIE5PVzwvQ29tbW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljZU1lbnU+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgIDwvUHJpY2VEaXY+XHJcbiAgICAgICAgICAgIDxTcG9uc29yRGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZT5UcnVzdGVkIGJ5IFRob3VzYW5kczwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGVTdWI+VGhlIGNsZWFuIGFuZCB3ZWxsIGNvbW1lbnRlZCBjb2RlIGFsbG93cyBlYXN5IGN1c3RvbWl6YXRpb24gb2YgdGhlIHRoZW1lLkl0J3NcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZCBmb3IgZGVzY3JpYmluZyB5b3VyIGFwcCwgYWdlbmN5IG9yIGJ1c2luZXNzLjwvVGV4dFN0eWxlU3ViPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7d2lkdGg6JzgwJScsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsbWFyZ2luQm90dG9tOiAnNzBweCcsYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21pY3Jvc29mdC5wbmdcIiBzdHlsZT17e21hcmdpblJpZ2h0OiczMHB4JyxjdXJzb3I6J3BvaW50ZXInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9nb29nbGUucG5nXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMzBweCcsY3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW5zdGFncmFtLnBuZ1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzMwcHgnLGN1cnNvcjoncG9pbnRlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbnZlcnNlLnBuZ1wiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e3BhZGRpbmc6ICczMHB4Jywgd2lkdGg6JzUwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS7igJ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5SaWdodDogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJwgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIyLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5SaWdodDogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJwgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZpZXdUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jldmlld0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIzLmpwZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbicsbWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTonMCd9fT5DYWxlYm9nZGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonMjAwJyxjb2xvcjogJyM5NUE4QjcnLGZvbnRTaXplOicxNHB4JyxtYXJnaW5Ub3A6JzAnfX0+QW5vdGhlciBjb21wYW55ICwgQ2l0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L1Nwb25zb3JEaXY+XHJcbiAgICAgICAgICAgIDxDb250YWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3gyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUyIGlucHV0Q29sb3I9XCJ3aGl0ZVwiPkJlIGVuZ2FnZWQgTmV3c2xldHRlcjwvVGV4dFN0eWxlMj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlU3ViMiBpbnB1dENvbG9yPVwid2hpdGVcIiBzdHlsZT17e29wYWNpdHk6JzAuNyd9fT5UaGUgY2xlYW4gYW5kIHdlbGwgY29tbWVudGVkIGNvZGUgYWxsb3dzIGVhc3kgY3VzdG9taXphdGlvbiBvZiB0aGUgdGhlbWUuSXQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkIGZvciBkZXNjcmliaW5nIHlvdXIgYXBwLCBhZ2VuY3kgb3IgYnVzaW5lc3MuPC9UZXh0U3R5bGVTdWIyPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgIDxGbGV4Qm94Mj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRTdWJzY3JpYmUgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGUtbWFpbCBhZGRyZXNzXCI+PC9JbnB1dFN1YnNjcmliZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uPlNVQlNDUklCRTwvU3Vic2NyaWJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC43KScsIG1hcmdpblRvcDogJzNweCd9fT5Zb3UgY2FuIHVuLXN1YnNjcmliZSBhdCBhbnkgdGltZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3gyPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3REaXY+XHJcbiAgICAgICAgICAgIDxTdXBwb3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsZXhCb3ggc3R5bGU9e3t3aWR0aDonNjAlJywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWV2ZW5seScsbWFyZ2luQm90dG9tOic3MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGZsZXhEaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlpvZGtvbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5Ib21lPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RmVhdHVyZXM8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5UZWFtPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RkFRPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGZsZXhEaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PlNvY2lhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5GYWNlYm9vazwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlR3aXR0ZXI8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5CZWhhbmNlPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+RHJpYmJibGU8L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggZmxleERpcmVjdGlvbj0nY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjond2hpdGUnLGZvbnRXZWlnaHQ6ICc2MDAnfX0+U3VwcG9ydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5IZWxwICYgU3VwcG9ydDwvQm90dG9tRXRjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tRXRjPlByaXZhY3kgUG9saWN5PC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21FdGM+VGVybXMgJiBDb25kaXRpb25zPC9Cb3R0b21FdGM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGZsZXhEaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J3doaXRlJyxmb250V2VpZ2h0OiAnNjAwJ319PkNvbnRhY3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLGZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JywgbWFyZ2luVG9wOiAnNXB4J319Pjc5NSBGb2xzb20gQXZlLCBTdWl0ZSA2MDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLGZvbnRTaXplOicxNHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JywgbWFyZ2luVG9wOiAnNXB4J319PlNhbiBGcmFuY2lzY28sIENBIDk0MTA3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxmb250U2l6ZTonMTRweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIG1hcmdpblRvcDogJzVweCd9fT5QOiAoMTIzKSA0NTYtNzg5MDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUV0Yz5FOiBlbWFpbEBlbWFpbC5jb208L0JvdHRvbUV0Yz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJveCBzdHlsZT17e2FsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnIzk1QThCNycsZm9udFNpemU6JzE0cHgnfX0+MjAyMCDCqSBab2Rrb288L3A+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICAgIDwvU3VwcG9ydERpdj5cclxuICAgICAgICA8L0JvZHk+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iXSwic291cmNlUm9vdCI6IiJ9