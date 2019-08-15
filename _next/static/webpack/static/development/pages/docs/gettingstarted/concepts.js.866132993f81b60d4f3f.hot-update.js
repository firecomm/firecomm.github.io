webpackHotUpdate("static/development/pages/docs/gettingstarted/concepts.js",{

/***/ "./components/Section.jsx":
/*!********************************!*\
  !*** ./components/Section.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.js");
var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/components/Section.jsx";


var SubsectionStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Section__SubsectionStyled",
  componentId: "aao14i-0"
})(["font-weight:100;font-size:18px;margin-top:3px;margin-bottom:3px;margin-left:20px;color:", ";:hover{color:", ";}"], function (props) {
  return props.status === "active" ? props.theme.mainColor : props.theme.black;
}, function (props) {
  return props.theme.mainColor;
});

var SectionStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__SectionStyled",
  componentId: "aao14i-1"
})(["h1{font-size:17.5px;}display:flex;flex-direction:row;justify-content:space-between;padding-left:10px;padding-right:10px;i{font-size:23px;transition:200ms linear;}.rotate0{transform:rotate(0deg);}.rotate90{transform:rotate(90deg);}"]);

var Section = function Section(_ref) {
  var title = _ref.title,
      collapsed = _ref.collapsed,
      subsections = _ref.subsections,
      toggle = _ref.toggle,
      changeActiveSection = _ref.changeActiveSection,
      activeSection = _ref.activeSection;
  var subsectionsToRender = subsections.map(function (subtitle) {
    var section = title.toLowerCase().replace(/[ ]/g, "");
    var subsection = subtitle.toLowerCase().replace(/[ ]/g, "");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/docs/".concat(section, "/").concat(subsection),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubsectionStyled, {
      status: activeSection === subtitle ? "active" : "inactive",
      onClick: function onClick() {
        return changeActiveSection(subtitle);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, subtitle));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionStyled, {
    onClick: function onClick() {
      return toggle(title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_2__["VerticalCenter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, collapsed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    "class": "fa fa-angle-right rotate0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    "class": "fa fa-angle-right rotate90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), collapsed ? null : subsectionsToRender);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ })

})
//# sourceMappingURL=concepts.js.866132993f81b60d4f3f.hot-update.js.map