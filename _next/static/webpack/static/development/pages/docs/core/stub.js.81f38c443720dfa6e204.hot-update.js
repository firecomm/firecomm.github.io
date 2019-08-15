webpackHotUpdate("static/development/pages/docs/core/stub.js",{

/***/ "./static/docs/core/Stub.md":
/*!**********************************!*\
  !*** ./static/docs/core/Stub.md ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Stub\n\nHow to create a channel and invoke gRPC methods client side. \n\n> NOTE: The service in this instance comes from a built .proto packaged object, using the [build](https://firecomm.github.io/docs/core/build) function.\n\n```javascript\nconst { Stub } = require( \"firecomm\" );\nconst service = require(\"./service.js\");\nconst sslCertificate = require(\"./sslCertificate.crt\");\nconst stub = new Stub(\n  service, \n  \"localhost:3000\", \n  { certificate: sslCertificate }\n);\n\nstub.sayHello().send( { greeting:\"Hello world.\" } );\n```\n\nThe primary functionality for the stub can be broken down as follows.\n\n  1.  The constructor, which will allow you to instantiate a channel for that service.\n  2.  Your gRPC methods from your proto service, which have been extended by Firecomm with added functionality and simplified syntax;\n  3.  The methods that are available on an ordinary gRPC client/channel.\n\n## Constructor\n\nThe `Stub` constructor generates an instance of Firecomm's `Stub` class, which extends the native gRPC client-service instance.\n\n```javascript\nconst { Stub } = require( \"firecomm\" );\nconst service = require(\"./service.js\");\nconst sslCertificate = require(\"./sslCertificate.crt\");\nconst stub = new Stub(\n  service, \n  \"localhost:3000\", \n  { certificate: sslCertificate }\n);\n```\n\n# gRPC ");

/***/ })

})
//# sourceMappingURL=stub.js.81f38c443720dfa6e204.hot-update.js.map