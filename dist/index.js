!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){},function(t,e,r){"use strict";r.r(e);var n=r(0),o=function(){function t(t){this.sdk=t,this.type="game",this.requireVersion="0.0.1",this.showOnStart=!0}return t.prototype.init=function(){},t.prototype.start=function(t){var e=this;this.sdk.getGamePath("arma3",["test.exe"]).then(function(r){var n=e.sdk.createDownloader(t.id);n.add({name:"test1.zip",url:"http://emodyz.eu/10MB.zip",path:r}),n.add({name:"test2.zip",url:"http://emodyz.eu/5MB.zip",path:r}),n.add({name:"test3.zip",url:"http://emodyz.eu/10MB.zip",path:r}),n.add({name:"test4.zip",url:"http://emodyz.eu/5MB.zip",path:r}),n.add({name:"test5.zip",url:"http://emodyz.eu/10MB.zip",path:r}),n.add({name:"test6.zip",url:"http://emodyz.eu/10MB.zip",path:r}),n.add({name:"test7.zip",url:"http://emodyz.eu/10MB.zip",path:r}),n.downloadAll()}),console.log("MODULE STARTED")},t.prototype.getServerStatus=function(){return 1===Math.random()?n.ServerStatus.ONLINE:n.ServerStatus.OFFLINE},t}();e.default=o}]));