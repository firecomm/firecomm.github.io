webpackHotUpdate("static/development/pages/docs/gettingstarted/intro.js",{

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
})(["padding-left:20px;padding-right:20px;width:85%;a{color:", ";}@media only screen and (min-width:", "px){width:65%;padding-left:5%;}"], function (props) {
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
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
        source: props.content,
        renderers: {
          code: _CodeBlock__WEBPACK_IMPORTED_MODULE_6__["default"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extraProps, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DocsContent);

/***/ }),

/***/ "./static/docs/GettingStarted/intro2.0.md":
/*!************************************************!*\
  !*** ./static/docs/GettingStarted/intro2.0.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Getting Started\n## Install\n``` \nnpm i --save firecomm\n```\n\n## 1. Define a `.proto` file\nLet's begin by creating a file named `exampleAPI.proto` that will live inside a `proto` folder. This file will define the name of the *Package*, the names of the *Services*, the *RPC methods* and the structured data of each *Message* sent and received.\n\n```protobuf\n// proto/exampleAPI.proto\nsyntax = \"proto3\";\n\npackage exampleAPI;\n\nservice ChattyMath {\n  rpc BidiMath (stream Benchmark) returns (stream Benchmark) {};\n}\n\nmessage Benchmark {\n  double requests = 1;\n  double responses = 2;\n}\n```\n\n> Each *RPC Method* clearly defines the Message object to be sent and received. The Object we send will have the exact properties `peerSocket` with a string value and `req` or `res` with a value of `double`, which can be a Number or a String in JavaScript based on the build configuration.\n\n## 2. Let's `build()` a `package`\n\nLet's pass an absolute path to our `.proto` file to build our *Package*. We will create a `package.js` file which will live in our root folder and `export` an Object containing the compiled *Service* and *RPC method*.\n\n```javascript\n// package.js\nconst { build } = require( 'firecomm' );\nconst path = require( 'path' );\nconst PROTO_PATH = path.join( __dirname, './proto/exampleAPI.proto' );\n\nconst CONFIG_OBJECT = {\n  keepCase: true, // keeps everything camelCased\n  longs: Number, // compiles the potentially enormous `double`s for our BenchmarkMsg requests and responses into a JavaScript Number rather than a String\n}\nconst package = build( PROTO_PATH, CONFIG_OBJECT );\nmodule.exports = package;\n```\n\n## 3. Create a server\nNext, let's construct a *Server* in a new `server` folder and file. \n\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst server = new Server();\n```\n\n## 4. Define the server-side handlers for our `ChattyMath` *Service*.\n\nLet's define handler functions for our `BidiMath` *RPC method*. Server-Side handlers are how we will interact with the Client-side requests.\n\n```javascript\n// /server/chattyMathHandlers.js\nfunction BidiMathHandler(bidi) {\n  let start;\n  let end;\n  bidi\n    .on('metadata', (metadata) => {\n      start = Number(process.hrtime.bigint());\n      bidi.set({thisSetsMetadata: 'responses incoming'})\n      console.log(metadata.getMap());\n    })\n    .on('error', (err) => {\n      console.exception(err)\n    })\n    .on('data', (benchmark) => {\n      bidi.send(\n        {\n          requests: benchmark.requests, \n          responses: benchmark.responses + 1\n        }\n      );\n      if (benchmark.requests % 10000 === 0) {\n        end = Number(process.hrtime.bigint());\n      console.log(\n        'client address:', bidi.getPeer(),\n        '\\nnumber of requests:', benchmark.requests,\n        '\\navg millisecond speed per request:', ((end - start) /1000000) / benchmark.requests\n      );\n    }\n  })\n}\n\nmodule.exports = { \n\tBidiMathHandler,\n}\n```\n\n## 5. Add each *Service* from the package to the `Server`\n\nLet's go back to the `server.js` file and map each *Service* onto our `Server`. Mirroring the structure of the `.proto` file, the *Package* Object we built has each *Service* on it as properties. We use the `Server.addService` method to add each `Service` one at a time and map each *RPC method* to the handler we want to use.  \n\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { BidiMathHandler } = require ( './chattyMathHandlers.js );\n\nnew Server()\n  .addService( package.ChattyMath, {\n  BidiMath: BidiMathHandler,\n})\n```\n\n## 6. Bind the server to sockets\n\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { BidiMathHandler } = require ( './chattyMathHandlers.js' );\n\nnew Server()\n  .addService( package.ChattyMath,   {\n  BidiMath: BidiMathHandler,\n})\n  .bind('0.0.0.0: 3000')\n```\n> Note: `Server`s can be passed an array of strings to bind any number of sockets. For example:\n> ```javascript\n> server.bind( [ \n>   '0.0.0.0: 3000', \n>   '0.0.0.0: 8080', \n>   '0.0.0.0: 9900',\n> ] );\n> ```\n## 7. Start the server\n```javascript\n// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { BidiMathHandler } = require ( './heavyMathHandlers.js' );\n\nnew Server()\n  .addService( \n    package.ChattyMath,   \n    { BidiMath: BidiMathHandler }\n  )\n  .bind('0.0.0.0: 3000')\n  .start();\n```\n> Run your new firecomm/gRPC-Node server with: `node /server/server.js`. It may also be worthwhile to map this command to `npm start` in your `package.json`.\n\n## 8.  Create a *Stub* for the `ChattyMath` service:\nNow that the *Server* is fully fleshed out, let's create a *Stub* with access to each *RPC method* in the  `ChattyMath` *Service*. We'll create a `chattyMath.js` file which will live inside our `clients` folder.\n```javascript\n// /clients/chattyMath.js\nconst { Stub } = require( 'firecomm' );\nconst package = require( '../package.js' )\nconst stub = new Stub( \n\tpackage.ChattyMath, \n\t'localhost: 3000', // also can be '0.0.0.0: 3000'\n);\n```\n> Note: multiple different clients *can* share a long-lived TCP connection with a single socket on the server, but it is likely better to map individual sockets.\n\n## 9. Make requests from the `Stub` and see how many requests and responses a duplex can make!\n```javascript\n// /clients/chattyMath.js\nconst { Stub } = require( 'firecomm' );\nconst package = require( '../package.js' )\nconst stub = new Stub( \n  package.ChattyMath, \n  'localhost: 3000',\n);\n\nlet start;\nlet end;\nconst bidi = stub.bidiMath({thisIsMetadata: 'let the races begin'})\n  .send({requests: 1, responses: 0})\n  .on( 'metadata', (metadata) => {\n    start = Number(process.hrtime.bigint());\n    console.log(metadata.getMap())\n  })\n  .on( 'error', (err) => console.error(err))\n  .on( 'data', (benchmark) => {\n    bidi.send(\n      {\n        requests: benchmark.requests + 1, \n        responses: benchmark.responses\n      }\n    )\n    if (benchmark.responses % 10000 === 0) {\n      end = Number(process.hrtime.bigint());\n    console.log(\n      'server address:', bidi.getPeer(),\n      '\\ntotal number of responses:', benchmark.responses,\n      '\\navg millisecond speed per response:', ((end - start) /1000000) / benchmark.responses\n    )\n  }\n});\n```\n> Run your new firecomm/gRPC-Node client with: `node /clients/chattyMath.js`. It may also be worthwhile to map this command to a custom command like `npm run math` in your `package.json`.\n\nNow enjoy the power of gRPCs! Feel free to construct multiple Stubs to any number of ports, bind any number of ports to the Server, experiment and enjoy!");

/***/ })

})
//# sourceMappingURL=intro.js.3af61dcf009365d4f0d0.hot-update.js.map