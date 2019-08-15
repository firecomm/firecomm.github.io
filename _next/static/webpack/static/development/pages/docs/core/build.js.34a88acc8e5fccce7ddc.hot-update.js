webpackHotUpdate("static/development/pages/docs/core/build.js",{

/***/ "./static/docs/core/Build.md":
/*!***********************************!*\
  !*** ./static/docs/core/Build.md ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Build\n\nTo build a gRPC package, you first have to create a `.proto` file. More on that in the .proto section (coming soon) and on the [official protocol buffer page](https://developers.google.com/protocol-buffers/docs/overview).\n\n\nBuild starts with a .proto. Take the following .proto file as an example. \n\n```protobuf\npackage myPackage\n\nservice Greeter {\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user's name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n```\n\nFrom there, you will likely want to access the Services on your .proto packaged object. These can be accessed by the properties on their name. Here's an example of what that would look like.\n\n```javascript\nconst { build } = require( 'firecomm' );\nconst proto_path = require( '../some/proto/path' );\nconst package = build( proto_path, { bytes: String } );\n\n// Packaged service\nconst service = package.Greeter\n\n// export for use in other files\nmodule.exports = {\n  service,\n  package\n};\n```");

/***/ })

})
//# sourceMappingURL=build.js.34a88acc8e5fccce7ddc.hot-update.js.map