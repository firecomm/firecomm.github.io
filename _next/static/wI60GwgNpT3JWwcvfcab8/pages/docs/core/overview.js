(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"02k7":function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),i=o.n(t),r=o("HVSj");n.default=function(e){return i.a.createElement(r.a,{subsection:"Overview",content:"# Core Concepts\n\nAs mentioned previously, Firecomm can be broken into several core pieces.\n\n- `build` - defines the logic for Servers and Stub methods\n  - accessible through a top-level constructor function\n- `Server` - where the handlers for those methods live\n  - accessible through a top-level constructor function\n- `Stub` - Stubs initiate communication with the Server by invoking Server methods\n  - accessible through a top-level constructor function\n- Calls - Calls are the individual unit of communication for each method invocation\n  - accessible Server-side as the primary argument for method handlers and middleware functions\n  - accessible as the output of a Stub-side, invoked gRPC method\n\n"})}},zDEr:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/core/overview",function(){var e=o("02k7");return{page:e.default||e}}])}},[["zDEr",1,0]]]);