!function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){t(1),t(2),t(3),r.exports=t(4)},function(r,e,t){"use strict";!function(){var r=0,e=0,t={globalReplace:function(r,e,t,n){n="boolean"==typeof n&&"true"===n.toString()?"gi":"g";try{if(void 0===e)throw new SyntaxError("GlobalReplace methods lack of parameters.");if(void 0===t)throw new SyntaxError("GlobalReplace methods lack of parameters.");var o=new RegExp(e,n);return r.replace(o,t)}catch(r){console.error(r)}},strCharPositions:function(r,e){var t=[];try{if(void 0===e)throw new SyntaxError("findAllPosition methods lack of parameters.");for(var n=r.indexOf(e);n>-1;)t.push(n),n=r.indexOf(e,n+1);return t}catch(r){console.error(r)}},multiArray:function(r){for(var e=1,t=0;t<r.length;t++)r[t]instanceof Array&&(e++,r[t].multiArray());return e},targetOccurs:function(r,e){for(var t=[],n=function(n){r[n]instanceof Array&&r[n].filter(function(r,o){return r===e&&t.push([n,o])})},o=0;o<r.length;o++)n(o);return r.filter(function(r,n){return r===e&&t.push(n)}),t},uniqueElement:function(r){function e(r){return/native code/.test(r.toString())&&void 0!==r}for(var t=0;t<r.length;t++)if(r[t]instanceof Array){if(e(Set))r[t]=Array.from(new Set(r[t]));else{for(var n=[],o=r[t].length,i=0;i<o;i++)-1===n.indexOf(r[t][i])&&n.push(r[t][i]);r[t]=n}r[t].uniqueElement()}return Array.from(new Set(r))},arraySum:function(t){1==++e&&t.forEach(function(e){"number"!=typeof e||isNaN(e)||(r+=e)});for(var n=0;n<t.length;n++)t[n]instanceof Array&&(t[n].forEach(function(e){"number"!=typeof e||isNaN(e)||(r+=e)}),t[n].arraySum());return r},removeItem:function(r,e){return r.filter(function(r){return isNaN(e)?isNaN(r)!=isNaN(e):r!==e})},addItem:function(r,e,t){var n=r.slice(0,t),o=r.slice(t);return n.concat([e],o)},duplicates:function(){for(var r=arr.length,e=[],t=0;t<r;t++){var n=arr[0];arr.shift(),-1!=arr.indexOf(n)&&-1==e.indexOf(n)&&e.push(n)}return e},screenMousePosition:function(r){var e=r||window.event;return{x:e.screenX,y:e.screenY}},browserMousePosition:function(r){return{x:(r||window.event).clientX,y:clientY}},documentMousePosition:function(r){var e=r||window.event,t=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop;return{x:e.pageX||e.clientX+t,y:e.pageY||e.clientY+n}},isEmpty:function(r){return!r&&0!==r&&""!==r||"string"==typeof r&&""===(r=r.replace(/\s*/g,""))||Array.isArray(r)&&0===r.length||Object.prototype.isPrototypeOf(r)&&0===Object.keys(r).length},isInclude:function(r,e){try{if(void 0===r||void 0===e)throw new SyntaxError("isInclude methods lack of parameters.");if(!(r instanceof Array)&&"string"!=typeof r)throw new TypeError(r+" is not an array or a string.");if(!(e instanceof Array)&&"string"!=typeof e)throw new TypeError(e+" is not an array or a string.");var t=r instanceof Array?r:r.split(""),n=e instanceof Array?e:e.split("");if(0===t.length||0===n.length)return!1;for(var o=0;o<t.length;o++){if(!(n.length>0))return!0;if(n.indexOf(t[o])>-1){if(n.splice(n.indexOf(t[o]),1),0===n.length)return!0}else n=e.split("")}return!1}catch(r){console.error(r)}},createVerificode:function(r){try{if(void 0===r&&(r=4),isNaN(r))throw new SyntaxError("The parameters of the createVerificode method is not a valid positive integer.");if("number"!=typeof r&&"number"!=typeof Math.abs(Number(r)))throw new SyntaxError("The parameters of the createVerificode method is not a valid positive integer.");for(var e=[0,1,2,3,4,5,6,7,8,9,"q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t=e.length,n=[],o=0;o<r;o++)n.push(e[Math.floor(Math.random()*t)]);return n.join("")}catch(r){console.error(r)}}};window.CJPlugin=t}()},function(r,e,t){"use strict";r.exports={segArray:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return r.reduce(function(t,n,o){return Array.isArray(r)?e<2?r:(o%e==0&&t.push(r.slice(o,o+e)),t):[]},[])}}},function(r,e,t){"use strict";console.log("hzdgood")},function(r,e,t){"use strict";console.log("mschange")}]);