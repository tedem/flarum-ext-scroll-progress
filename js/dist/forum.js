module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){
/*!
 * This file is part of tedem/flarum-ext-scroll-progress.
 *
 * Copyright (c) 2021 Medet "tedem" Erdal.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */
app.initializers.add("tedem/flarum-ext-scroll-progress",(function(){document.body.innerHTML+='<div class="scroll-progress" aria-hidden="true"></div>';var e,r=document.documentElement,t=document.body,n="scrollTop",o="scrollHeight",u=document.querySelector(".scroll-progress");document.addEventListener("scroll",(function(){e=(r[n]||t[n])/((r[o]||t[o])-r.clientHeight)*100,u.style.setProperty("--scroll-progress-value",e+"%")}))}))},function(e,r,t){"use strict";t.r(r);var n=t(0);for(var o in n)["default"].indexOf(o)<0&&function(e){t.d(r,e,(function(){return n[e]}))}(o)}]);
//# sourceMappingURL=forum.js.map