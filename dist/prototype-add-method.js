!function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=0)}([function(r,t,e){e(1),e(2),e(3),r.exports=e(4)},function(r,t,e){"use strict";!function(){var r={strAllSub:function(r,t,e,n){n="boolean"==typeof n&&"true"===n.toString()?"gi":"g";try{if("string"!=typeof r&&"string"!=typeof t&&"string"!=typeof e)throw new SyntaxError("parameter is not a string.");if(void 0===t)throw new SyntaxError("strAllSub methods lack of parameters.");if(void 0===e)throw new SyntaxError("strAllSub methods lack of parameters.");var o=new RegExp(t,n);return r.replace(o,e)}catch(r){console.error(r)}},strCharPos:function(r,t){var e=[];try{if("string"!=typeof r)throw new SyntaxError("first parameter is not a string.");if(void 0===t)throw new SyntaxError("strCharPos methods lack of parameters.");for(var n=r.indexOf(t);n>-1;)e.push(n),n=r.indexOf(t,n+1);return e}catch(r){console.error(r)}},arrayCharPos:function(r,t){try{if(r instanceof Array){for(var e=[],n=function(n){r[n]instanceof Array&&r[n].filter(function(r,o){return r===t&&e.push([n,o])})},o=0;o<r.length;o++)n(o);return r.filter(function(r,n){return r===t&&e.push(n)}),e}throw new SyntaxError("first parameter is not an Array.")}catch(r){console.error(r)}},arrayDeweight:function(r){function t(r){return/native code/.test(r.toString())&&void 0!==r}try{if(r instanceof Array){for(var e=0;e<r.length;e++)if(r[e]instanceof Array){if(t(Set))r[e]=Array.from(new Set(r[e]));else{for(var n=[],o=r[e].length,a=0;a<o;a++)-1===n.indexOf(r[e][a])&&n.push(r[e][a]);r[e]=n}this.arrayDeweight(r[e])}return Array.from(new Set(r))}throw new SyntaxError("parameter is not an Array.")}catch(r){console.error(r)}},removeItem:function(r,t){try{if(r instanceof Array)return r.filter(function(r){return isNaN(t)?isNaN(r)!=isNaN(t):r!==t});throw new SyntaxError("first parameter is not an Array.")}catch(r){console.error(r)}},addItem:function(r,t,e){try{if(!(r instanceof Array))throw new SyntaxError("first parameter is not an Array.");if(void 0===t)throw new SyntaxError("addItem methods lack of parameters.");void 0===e&&(e=r.length);var n=r.slice(0,e),o=r.slice(e);return n.concat([t],o)}catch(r){console.error(r)}},repeatEle:function(r){try{if(r instanceof Array){for(var t=r.length,e=[],n=[],o=0;o<t;o++)n.push(!0===isNaN(r[o])?JSON.stringify(r[o]):r[o]);for(var a=0;a<t;a++){var i=n[0];n.shift(),-1!=n.indexOf(i)&&-1==e.indexOf(i)&&(i="null"===i?NaN:i,e.push(i))}return e}throw new SyntaxError("parameter is not an Array.")}catch(r){console.error(r)}},screenMousePos:function(r){var t=r||window.event;return{x:t.screenX,y:t.screenY}},browserMousePos:function(r){return{x:(r||window.event).clientX,y:clientY}},documentMousePos:function(r){var t=r||window.event,e=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop;return{x:t.pageX||t.clientX+e,y:t.pageY||t.clientY+n}},isEmpty:function(r){try{if(r instanceof Array||r instanceof Object)return!r&&0!==r&&""!==r||"string"==typeof r&&""===(r=r.replace(/\s*/g,""))||Array.isArray(r)&&0===r.length||Object.prototype.isPrototypeOf(r)&&0===Object.keys(r).length;throw new SyntaxError("parameter is not an Array or an Object.")}catch(r){console.error(r)}},isInclude:function(r,t){try{if(void 0===r||void 0===t)throw new SyntaxError("isInclude methods lack of parameters.");if(!(r instanceof Array)&&"string"!=typeof r)throw new TypeError(r+" is not an array or a string.");if(!(t instanceof Array)&&"string"!=typeof t)throw new TypeError(t+" is not an array or a string.");var e=r instanceof Array?r:r.split(""),n=t instanceof Array?t:t.split("");if(0===e.length||0===n.length)return!1;for(var o=0;o<e.length;o++){if(!(n.length>0))return!0;if(n.indexOf(e[o])>-1){if(n.splice(n.indexOf(e[o]),1),0===n.length)return!0}else n=t.split("")}return!1}catch(r){console.error(r)}},randomCode:function(r){try{if(void 0===r&&(r=4),isNaN(r))throw new SyntaxError("The parameters of the randomCode method is not a valid positive integer.");if("number"!=typeof r&&"number"!=typeof Math.abs(Number(r)))throw new SyntaxError("The parameters of the randomCode method is not a valid positive integer.");for(var t=[0,1,2,3,4,5,6,7,8,9,"q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],e=t.length,n=[],o=0;o<r;o++)n.push(t[Math.floor(Math.random()*e)]);return n.join("")}catch(r){console.error(r)}},stringHTU:function(r){try{if("string"!=typeof r)throw new TypeError(r+" is not a string.");var t=function(r,t){do{r.test(t),0!==r.lastIndex&&r.lastIndex-1!=0&&e.push(r.lastIndex-1)}while(r.lastIndex>0)},e=[],n="";t(/[A-Z]/g,r),t(/[A-Za-z][\d]/g,r),e.sort(function(r,t){return r-t});for(var o=0;o<e.length;o++)n+=0===o?r.slice(0,e[o])+"_":r.slice(e[o-1],e[o])+"_";return n+=r.slice(e[e.length-1]),e=[],n.toLowerCase()}catch(r){console.error(r)}},isUSD:function(r){try{if("string"!=typeof r)throw new TypeError(r+" is not a string.");return/^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/.test(r)}catch(r){console.error(r)}}};try{if("undefined"!=typeof _detanx)throw new Error("_detanx is defined.");window._detanx=r}catch(r){console.error(r)}}()},function(r,t,e){"use strict";r.exports={segArray:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return r.reduce(function(e,n,o){return Array.isArray(r)?t<2?r:(o%t==0&&e.push(r.slice(o,o+t)),e):[]},[])}}},function(r,t,e){"use strict";console.log("hzdgood")},function(r,t,e){"use strict";console.log("mschange")}]);