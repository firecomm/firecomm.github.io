webpackHotUpdate("static/development/pages/docs/gettingstarted/intro.js",{

/***/ "./layouts/DocsLayout.jsx":
/*!********************************!*\
  !*** ./layouts/DocsLayout.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_HamburgerBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/HamburgerBar */ "./components/HamburgerBar.jsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constants */ "./constants.js");






var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/layouts/DocsLayout.jsx";










var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "DocsLayout__PageContainer",
  componentId: "sc-1wajj7e-0"
})(["display:flex;flex-direction:row;width:", ";"], function (props) {
  return props.big ? "100%" : "75%";
});

var DocsLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DocsLayout, _React$Component);

  function DocsLayout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DocsLayout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DocsLayout).call(this, props));
    var sections = [{
      title: "Getting Started",
      collapsed: false,
      subsections: ["Concepts", "Intro"]
    }, {
      title: "Core",
      collapsed: false,
      subsections: ["Core Overview", "Build", "Server", "Server Calls", "Stub", "Stub Calls"]
    }, {
      title: "Extensions",
      collapsed: false,
      subsections: ["Middleware", "Metadata", "Interceptors"]
    }, // {
    //   title: "Guides",
    //   collapsed: false,
    //   subsections: ["Authentication","Tracing"]
    // },
    {
      title: "API Reference",
      collapsed: true,
      subsections: ["Build Function", "Package Object", "Server ClientStream Call", "Server DuplexCall", "Server Unary Call", "Server ServerStream Call", "Server Class", "Stub ClientStream Call", "Stub DuplexCall", "Stub Unary Call", "Stub ServerStream Call", "Stub Class"] // {
      //   title:"gRPC",
      //   collapsed: false,
      //   subsections: []
      // },
      // {
      //   title:"Protobuf",
      //   collapsed: false,
      //   subsections: []
      // }

    }];
    var linksArray = [];
    var sectionIndeces = {};
    var trueIndex = 0;

    for (var i = 0; i < sections.length; i++) {
      for (var j = 0; j < sections[i].subsections.length; j++) {
        var linkObject = {
          title: sections[i].subsections[j],
          link: "/docs/" + sections[i].title.toLowerCase().replace(/[ ]/g, "") + "/" + sections[i].subsections[j].toLowerCase().replace(/[ ]/g, "")
        };
        linksArray.push(linkObject);
        sectionIndeces[linkObject.title] = trueIndex;
        trueIndex++;
      }
    } // console.log(linksArray);
    // console.log(sectionIndeces);


    _this.state = {
      sidebarActive: false,
      windowWidth: _constants__WEBPACK_IMPORTED_MODULE_15__["mobileBreakpoint"],
      activeSection: "Getting Started",
      sections: sections,
      linksArray: linksArray,
      sectionIndeces: sectionIndeces
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DocsLayout, [{
    key: "handleResize",
    value: function handleResize() {
      this.setState(function (state) {
        console.log("resize");
        return {
          windowWidth: window.innerWidth
        };
      });
    }
  }, {
    key: "changeActiveSection",
    value: function changeActiveSection(section) {
      // console.log(section);
      this.setState(function (state) {
        return {
          activeSection: section
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.handleResize.bind(this));
      this.setState(function (state) {
        return {
          windowWidth: window.innerWidth
        };
      });
    }
  }, {
    key: "toggleSection",
    value: function toggleSection(section) {
      this.setState(function (state) {
        var sections = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(state.sections);

        for (var i = 0; i < sections.length; i++) {
          if (sections[i].title === section) {
            sections[i].collapsed = !state.sections[i].collapsed;
            return {
              sections: sections
            };
          }
        }
      });
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      var _this2 = this;

      this.setState(function (state) {
        var sidebarActive = _this2.state.sidebarActive;
        sidebarActive = !sidebarActive;
        return {
          sidebarActive: sidebarActive
        };
      }, function () {
        return console.log("sidebaractive", _this2.state.sidebarActive);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {
        windowWidth: this.state.windowWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_HamburgerBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        sidebarActive: this.state.sidebarActive,
        activeSection: this.props.subsection,
        toggleSidebar: function toggleSidebar() {
          return _this3.toggleSidebar();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_14__["FlexRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        toggleSection: function toggleSection(section) {
          return _this3.toggleSection(section);
        },
        windowWidth: this.state.windowWidth,
        activeSection: this.props.subsection,
        sections: this.state.sections,
        sidebarActive: this.state.sidebarActive,
        changeActiveSection: function changeActiveSection(section) {
          return _this3.changeActiveSection(section);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), this.state.sidebarActive && this.state.windowWidth <= _constants__WEBPACK_IMPORTED_MODULE_15__["mobileBreakpoint"] ? null : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.props.renderProps({
        linksArray: this.state.linksArray,
        sectionIndeces: this.state.sectionIndeces
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }));
    }
  }]);

  return DocsLayout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DocsLayout);

/***/ })

})
//# sourceMappingURL=intro.js.97babe97d67032713ccf.hot-update.js.map