!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){t(1),t(2),t(3),e.exports=t(4)},function(e,r,t){"use strict";!function(){var e=[],r=0,t=0,n={strAllSub:function(e,r,t,n){n="boolean"==typeof n&&"true"===n.toString()?"gi":"g";try{if(void 0===r)throw new SyntaxError("GlobalReplace methods lack of parameters.");if(void 0===t)throw new SyntaxError("GlobalReplace methods lack of parameters.");var o=new RegExp(r,n);return e.replace(o,t)}catch(e){console.error(e)}},strCharPos:function(e,r){var t=[];try{if(void 0===r)throw new SyntaxError("findAllPosition methods lack of parameters.");for(var n=e.indexOf(r);n>-1;)t.push(n),n=e.indexOf(r,n+1);return t}catch(e){console.error(e)}},arrayDimen:function(e){for(var r=1,t=0;t<e.length;t++)e[t]instanceof Array&&(r++,e[t].multiArray());return r},arrayCharPos:function(e,r){for(var t=[],n=function(n){e[n]instanceof Array&&e[n].filter(function(e,o){return e===r&&t.push([n,o])})},o=0;o<e.length;o++)n(o);return e.filter(function(e,n){return e===r&&t.push(n)}),t},arrayDeweight:function(e){function r(e){return/native code/.test(e.toString())&&void 0!==e}for(var t=0;t<e.length;t++)if(e[t]instanceof Array){if(r(Set))e[t]=Array.from(new Set(e[t]));else{for(var n=[],o=e[t].length,i=0;i<o;i++)-1===n.indexOf(e[t][i])&&n.push(e[t][i]);e[t]=n}e[t].uniqueElement()}return Array.from(new Set(e))},arraySum:function(e){1==++t&&e.forEach(function(e){"number"!=typeof e||isNaN(e)||(r+=e)});for(var n=0;n<e.length;n++)e[n]instanceof Array&&(e[n].forEach(function(e){"number"!=typeof e||isNaN(e)||(r+=e)}),e[n].arraySum());return r},removeItem:function(e,r){return e.filter(function(e){return isNaN(r)?isNaN(e)!=isNaN(r):e!==r})},addItem:function(e,r,t){var n=e.slice(0,t),o=e.slice(t);return n.concat([r],o)},repeatEle:function(){for(var e=arr.length,r=[],t=0;t<e;t++){var n=arr[0];arr.shift(),-1!=arr.indexOf(n)&&-1==r.indexOf(n)&&r.push(n)}return r},screenMousePos:function(e){var r=e||window.event;return{x:r.screenX,y:r.screenY}},browserMousePos:function(e){return{x:(e||window.event).clientX,y:clientY}},documentMousePos:function(e){var r=e||window.event,t=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop;return{x:r.pageX||r.clientX+t,y:r.pageY||r.clientY+n}},isEmpty:function(e){return!e&&0!==e&&""!==e||"string"==typeof e&&""===(e=e.replace(/\s*/g,""))||Array.isArray(e)&&0===e.length||Object.prototype.isPrototypeOf(e)&&0===Object.keys(e).length},isInclude:function(e,r){try{if(void 0===e||void 0===r)throw new SyntaxError("isInclude methods lack of parameters.");if(!(e instanceof Array)&&"string"!=typeof e)throw new TypeError(e+" is not an array or a string.");if(!(r instanceof Array)&&"string"!=typeof r)throw new TypeError(r+" is not an array or a string.");var t=e instanceof Array?e:e.split(""),n=r instanceof Array?r:r.split("");if(0===t.length||0===n.length)return!1;for(var o=0;o<t.length;o++){if(!(n.length>0))return!0;if(n.indexOf(t[o])>-1){if(n.splice(n.indexOf(t[o]),1),0===n.length)return!0}else n=r.split("")}return!1}catch(e){console.error(e)}},randomCode:function(e){try{if(void 0===e&&(e=4),isNaN(e))throw new SyntaxError("The parameters of the createVerificode method is not a valid positive integer.");if("number"!=typeof e&&"number"!=typeof Math.abs(Number(e)))throw new SyntaxError("The parameters of the createVerificode method is not a valid positive integer.");for(var r=[0,1,2,3,4,5,6,7,8,9,"q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t=r.length,n=[],o=0;o<e;o++)n.push(r[Math.floor(Math.random()*t)]);return n.join("")}catch(e){console.error(e)}},stringHTU:function(r){var t="";getIndex(/[A-Z]/g,r),getIndex(/[A-Za-z][\d]/g,r),e.sort(function(e,r){return e-r});for(var n=0;n<e.length;n++)t+=0===n?r.slice(0,e[n])+"_":r.slice(e[n-1],e[n])+"_";return(t+=r.slice(e[e.length-1])).toLowerCase()},getIndex:function(r,t){do{r.test(t),0!==r.lastIndex&&r.lastIndex-1!=0&&e.push(r.lastIndex-1)}while(r.lastIndex>0)}};"undefined"!=typeof _detanx&&(window._detanx=n)}()},function(e,r,t){"use strict";e.exports={segArray:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.reduce(function(t,n,o){return Array.isArray(e)?r<2?e:(o%r==0&&t.push(e.slice(o,o+r)),t):[]},[])}}},function(e,r,t){"use strict";console.log("hzdgood")},function(e,r,t){"use strict";console.log("mschange")}]);