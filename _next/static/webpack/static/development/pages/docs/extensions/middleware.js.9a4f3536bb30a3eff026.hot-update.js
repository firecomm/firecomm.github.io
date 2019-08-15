webpackHotUpdate("static/development/pages/docs/extensions/middleware.js",{

/***/ "./components/DocsContent.jsx":
/*!************************************!*\
  !*** ./components/DocsContent.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layouts_DocsLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/DocsLayout */ "./layouts/DocsLayout.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _ButtonBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonBar */ "./components/ButtonBar.jsx");
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CodeBlock */ "./components/CodeBlock.jsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/components/DocsContent.jsx";




var MarkdownStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DocsContent__MarkdownStyles",
  componentId: "sc-11gwkmp-0"
})(["padding-left:20px;padding-right:20px;width:85%;font-size:18px;line-height:5px;a{color:", ";}@media only screen and (min-width:", "px){width:65%;padding-left:5%;}"], function (props) {
  return props.theme.mainColor;
}, _constants__WEBPACK_IMPORTED_MODULE_4__["mobileBreakpoint"]);


 // const wrapMarkup = html => ({
//   __html: html
// });

var DocsContent = function DocsContent(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_DocsLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    subsection: props.subsection,
    renderProps: function renderProps(extraProps) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarkdownStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
        source: props.content,
        renderers: {
          code: _CodeBlock__WEBPACK_IMPORTED_MODULE_6__["default"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extraProps, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DocsContent);

/***/ })

})
//# sourceMappingURL=middleware.js.9a4f3536bb30a3eff026.hot-update.js.map