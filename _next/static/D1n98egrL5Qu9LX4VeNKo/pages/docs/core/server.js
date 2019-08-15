(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{N0N9:function(e,n,r){"use strict";r.r(n);var t=r("q1tI"),o=r.n(t),a=r("HVSj");n.default=function(e){return o.a.createElement(a.a,{subsection:"Server",content:'# Server\n\nTo run your service methods, you will need to create a gRPC server. Firecomm extends the native gRPC-node `Server` class, so any and all methods found on the native class are supported by Firecomm\'s class.\n\nThe Firecomm `Server` class-instances have the following capabilities.\n- Listen on an arbitrary number secure and insecure sockets with `.bind()`\n- Add your service definition and middleware functions with `.addService()`\n- Fire up the server with `.start()`\n- All other native gRPC `Server` class methods\n\n## Server Constructor\n\n```javascript\nconst { Server } = require( "firecomm" );\nconst server = new Server( );\n```\n\nFirst is to understand the constructor. The constructor takes in the following options.\n- config (For more options for the config look [here](https://grpc.github.io/grpc/core/group__grpc__arg__keys.html).)\n- error handler\n\n#### Uncaught Error Handling\n\nIn vanilla gRPC, uncaught errors thrown inside of any method handler crashes the server instance. Firecomm allows you to input your own error-handler to customize your own functionality.\n\nAn example Server with a config object and an error handler.\n\n```javascript\nconst server = new Server(\n  {GRPC_ARG_KEEPALIVE_TIME_MS: 500},\n  (err,call) => {\n    call.throw(err);\n});\n```\n\n## Adding Services\n\nConnects handlers and middleware functionality to your gRPC methods as defined in your `.proto` file. \n\n> NOTE: Any error handler declared at the service level will only handle errors for method handlers within that service. Error handler will overwrite and replace the any error handler defined in instantiation of the server.\n\n```javascript\nconst { Server, build } = require( \'firecomm\' );\nconst server = new Server();\nconst package = require("./builtPackageDefinition")\nserver.addService( \n  package.<Service Name>, \n  {\n    <Method Name>: [<Middleware Function>, <Handler Function>]\n  }, \n  [<Service Middleware Function]],\n  (err, call) => {\n    call.throw(err)\n  }\n);\n```\n\n> NOTE: Middleware functions are blocking. Service-level middleware functions are ran first in the middleware stack, method-level middleware functions are fun in the order they are indexed in the middleware stack array provided in the second argument to Server.addService().\n\n## Binding Secure and Insecure Ports\n\nInvoke this method to connect your server instance to a channel. Allows for the creation of secure and insecure channels. To create a secure SSL channel, pass a config object as the second argument with paths to your SSL certificate and private key.\n\n```javascript\nconst { Server } = require( \'firecomm\' );\nconst server = new Server();\nlet certPath = path.join(__dirname, "/server.crt");\nlet keyPath = path.join(__dirname, "/server.key");\n\nconst result = server.bind(["0.0.0.0:3000", "0.0.0.0:3001"], {\n  privateKey: keyPath,\n  certificate: certPath\n});\nserver.bind("0.0.0.0:8080")\n```'})}},g4qY:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/core/server",function(){var e=r("N0N9");return{page:e.default||e}}])}},[["g4qY",1,0]]]);