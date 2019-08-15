webpackHotUpdate("static/development/pages/docs/core/stubcalls.js",{

/***/ "./static/docs/core/StubCalls.md":
/*!***************************************!*\
  !*** ./static/docs/core/StubCalls.md ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Stub Calls\n\nStub calls are generated when you invoke a gRPC method on a Stub instance. They have slightly different syntax.\n\n> NOTE: To send messages with vanilla gRPC stub methods, you would pass the message, interceptors, and metadata into the main function. For separation of concerns, you now pass messages through the .send() method.\n\n```javascript\nconst { Stub } = require(\"firecomm\");\n\nconst stubInstance = new Stub(\"localhost:3000\");\n\n// create a call by invoking the method\nconst call = stubInstance.duplexStreamingMethod();\n// send data\ncall.send({message: \"second message\" });\ncall.on('data', data => console.log(data));\n```\n\n## Chaining\n\nThe following is functinally the same.\n\n```javascript\nconst { Stub } = require(\"firecomm\");\n\nconst stubInstance = new Stub(\"localhost:3000\");\n\n// create a call by invoking the method and chain the sending and adding listeners to the response\nstubInstance.duplexStreamingMethod()\n.send({message: \"second message\" })\n.on('data', data => console.log(data));\n```");

/***/ })

})
//# sourceMappingURL=stubcalls.js.a62ef228c9eb4b39fc2f.hot-update.js.map