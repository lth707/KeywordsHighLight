!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.keywordhighlight=t():e.keywordhighlight=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s="QfWi")}({AxD1:function(e,t,r){"use strict";e.exports=r("PAJd")},GMrE:function(e,t,r){e.exports=r("vlMw")()},PAJd:function(e,t,r){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("zBGz"),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,i,a],l=0;(e=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function S(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function k(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=S.prototype;var j=w.prototype=new k;j.constructor=w,n(j,S.prototype),j.isPureReactComponent=!0;var _={current:null},x={current:null},E=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n=void 0,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:x.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,$=[];function T(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case i:c=!0}}if(c)return n(o,t,""===r?"."+I(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+I(a=t[l],l);c+=e(a,f,n,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(a=t.next()).done;)c+=e(a=a.value,f=r+I(a,l++),n,o);else"object"===a&&b("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,function(e){return e}):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),M(e,L,t=T(t,u,n,o)),A(t)}function q(){var e=_.current;return null===e&&b("321"),e}var z={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,D,t=T(null,null,t,r)),A(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return U(e,t,null,function(e){return e}),t},only:function(e){return N(e)||b("143"),e}},createRef:function(){return{current:null}},Component:S,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,r){return q().useReducer(e,t,r)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:a,StrictMode:c,Suspense:h,createElement:P,cloneElement:function(e,t,r){null==e&&b("267",e);var o=void 0,i=n({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)E.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];i.children=f}return{$$typeof:u,type:e.type,key:a,ref:c,props:i,_owner:l}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentOwner:x,assign:n}},F={default:z},V=F&&z||F;e.exports=V.default||V},QfWi:function(e,t,r){"use strict";r.r(t);var n=r("AxD1"),o=r.n(n),u=r("GMrE"),i=r.n(u);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){var t=e.key,r=e.className,n=e.highlightStr,u=e.color;return o.a.createElement("span",{key:t,className:r,style:c({color:n.highlightColor||u},n.style||{})},"function"==typeof n.render?n.render():n.keyword||n)};f.propTypes={key:i.a.oneOfType([i.a.string,i.a.number]),className:i.a.string,highlightStr:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.shape({keyword:i.a.string,highlightColor:i.a.string,style:i.a.shape({}),className:i.a.string}))]),color:i.a.string};var s=function(e){var t=e.str,r=e.keywords,n=e.highlightClassName,u=e.normalClassName,i=e.regExpOption,c=e.highlightColor,l=e.normalColor,s=0,p=[],y=r instanceof Array?r.filter(function(e){return e&&"object"===a(e)?!!e.keyword:"string"==typeof e&&!!e}):r;if(y instanceof Array){if(0===y.length)return p.push(o.a.createElement(f,{key:1,highlightStr:t,className:u,color:l})),p;for(var h=new RegExp("(".concat(y.map(function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new RegExp(["(\\$)","(\\()","(\\))","(\\*)","(\\+)","(\\.)","(\\[)","(\\])","(\\?)","(\\\\)","(\\^)","(\\{)","(\\})","(\\|)"].join("|"),"g");return e.replace(t,function(e){return"\\".concat(e)})}("object"===a(e)?"".concat(e.keyword):"".concat(e))}).sort(function(e,t){return("object"===a(t)?t.keyword.length:t.length)-("object"===a(e)?e.keyword.length:e.length)}).join("|"),")"),i),d=[],g=h.exec(t);g;)d.push(g),g=h.exec(t);d.forEach(function(e,r){0===r&&(p.push(o.a.createElement(f,{key:s,className:u,highlightStr:t.substring(0,e.index),color:l})),s+=1);var i=e.index,a=e[0],h=y.find(function(e){return e.keyword===a||e===a});if(p.push(o.a.createElement(f,{key:s,className:n,highlightStr:h,color:c})),s+=1,r<d.length-1){var g=d[r+1].index;p.push(o.a.createElement(f,{key:s,className:u,highlightStr:t.substring(i+a.length,g),color:l}))}else p.push(o.a.createElement(f,{key:s,className:u,highlightStr:t.substr(i+a.length),color:l}));s+=1})}else{if(!r)return o.a.createElement(f,{key:1,className:u,highlightStr:t,color:l});var m=new RegExp(r,i),b=t.split(m);b.forEach(function(e,t){p.push(o.a.createElement(f,{key:s,className:u,highlightStr:e,color:l})),s+=1,t<b.length-1&&(p.push(o.a.createElement(f,{key:s,className:n,highlightStr:r,color:c})),s+=1)})}return p};s.propTypes={str:i.a.string,keywords:i.a.arrayOf(i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.shape({keyword:i.a.string,highlightColor:i.a.string,style:i.a.shape({}),className:i.a.string,render:i.a.func}))])),highlightClassName:i.a.string,normalClassName:i.a.string,regExpOption:i.a.string,highlightColor:i.a.string,normalColor:i.a.string},s.defaultProps={str:"",keywords:[],highlightClassName:"",normalClassName:"",regExpOption:"gi",highlightColor:"#00c1de"};var p=s;r.d(t,"default",function(){return p})},pmwL:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},vlMw:function(e,t,r){"use strict";var n=r("pmwL");function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},zBGz:function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))o.call(r,l)&&(a[l]=r[l]);if(n){i=n(r);for(var f=0;f<i.length;f++)u.call(r,i[f])&&(a[i[f]]=r[i[f]])}}return a}}})});