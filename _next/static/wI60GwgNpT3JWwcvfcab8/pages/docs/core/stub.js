(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4R/9":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/core/stub",function(){var e=n("ElIL");return{page:e.default||e}}])},ElIL:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),s=n("HVSj");t.default=function(e){return i.a.createElement(s.a,{subsection:"Stub",content:'# Stub\n\nHow to create a channel and invoke gRPC methods client side. One service per stub; however, you can have multiple stubs for the same service.\n\nTo construct the stub, pass the gRPC service as the first parameter and the IP:PORT you would like to connect to the server on for the second parameter. \n\n> NOTE: You may optionally pass a third parameter, a config object. The config matches the channel options that you can pass into the [vanilla gRPC client constructor](https://grpc.github.io/grpc/core/group__grpc__arg__keys.html). If you instantiated your server with SSL for the port you are trying to connect to, you must pass the same certificate to the stub.\n\n> NOTE: The service in this instance comes from a built .proto packaged object, using the [build](https://firecomm.github.io/docs/core/build) function.\n\n```javascript\nconst { Stub } = require( "firecomm" );\nconst service = require("./service.js");\nconst sslCertificate = require("./sslCertificate.crt");\nconst stub = new Stub(\n  service, \n  "localhost:3000", \n  { certificate: sslCertificate }\n);\n\nstub.sayHello().send( { greeting:"Hello world." } );\n```\n\nThe primary functionality for the stub can be broken down as follows.\n\n  1.  The constructor, which will allow you to instantiate a channel for that service.\n  2.  Your gRPC methods from your proto service, which have been extended by Firecomm with added functionality and simplified syntax;\n  3.  The methods that are available on an ordinary gRPC client/channel.\n\n## Constructor\n\nThe `Stub` constructor generates an instance of Firecomm\'s `Stub` class, which extends the native gRPC client-service instance. To connect with SSL, pass a cerificate path directly into the Stub.\n\n```javascript\nconst { Stub } = require( "firecomm" );\nconst service = require("./service.js");\nconst path = require("path");\nconst sslCertificate = path.join(__dirname, "./sslCertificate.crt");\nconst stub = new Stub(\n  service, \n  "localhost:3000", \n  { certificate: sslCertificate }\n);\n```\n\n## gRPC Service Method Calls\n\nAfter constructing a new instance of your service stub, all methods that are on the gRPC service will be available as methods on your stub. \n\n## gRPC client/channel methods\n\nFor a list of all of the gRPC options that can be passed into Stubs please see the [gRPC-node official API reference](https://grpc.github.io/grpc/node/grpc.Client.html).'})}}},[["4R/9",1,0]]]);