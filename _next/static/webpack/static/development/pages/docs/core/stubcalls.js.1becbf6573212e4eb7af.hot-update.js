webpackHotUpdate("static/development/pages/docs/core/stubcalls.js",{

/***/ "./static/docs/core/StubCalls.md":
/*!***************************************!*\
  !*** ./static/docs/core/StubCalls.md ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Stub Calls\n\nEvery time a  gRPC method is invoked, triggered by a Stub, the gRPC server collects information from the TCP request (metadata, request body) and creates an interactable call object that will allow you to send responses. If you are familiar with Express, think of the server-side call as you would a request in a middleware controller. \n\nFor all methods receiving an inbound call, the Firecomm server will look to that method's middleware stack, as defined in [`Server.addService()`](https://firecomm.github.io/docs/core/server). Firecomm takes the original call object produced by the gRPC library and wraps it with more consistent syntax and some extra methods.\n\nAn example of how to interact with a call server-side.\n\n```javascript\nfunction myMethodHandlerOrMiddelware(call) {\n  call.on('data', data => console.log(data))\n  call.on('metadata', metadata => console.log(metadata));\n  call.send({ message: 'hello world' })\n}\n```");

/***/ })

})
//# sourceMappingURL=stubcalls.js.1becbf6573212e4eb7af.hot-update.js.map