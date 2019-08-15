(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"62jG":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),o=t.n(n),r=t("HVSj");a.default=function(e){return o.a.createElement(r.a,{subsection:"Server Calls",content:"# Server Calls\n\nEvery time a  gRPC method is invoked, triggered by a Stub, the gRPC server collects information from the TCP request (metadata, request body) and creates an interactable call object that will allow you to send responses. If you are familiar with Express, think of the server-side call as you would a request in a middleware controller. \n\nFor all methods receiving an inbound call, the Firecomm server will look to that method's middleware stack, as defined in [`Server.addService()`](https://firecomm.github.io/docs/core/server). Firecomm takes the original call object produced by the gRPC library and wraps it with more consistent syntax and some extra methods.\n\nAn example of how to interact with a call server-side.\n\n```javascript\nfunction myMethodHandlerOrMiddelware(call) {\n  call.on('data', data => console.log(data))\n  call.on('metadata', metadata => console.log(metadata));\n  call.send({ message: 'hello world' })\n}\n```"})}},K15q:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/core/servercalls",function(){var e=t("62jG");return{page:e.default||e}}])}},[["K15q",1,0]]]);