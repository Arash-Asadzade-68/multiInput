/*! For license information please see index.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"23aj":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("AqDF"),u=n.n(a),i=o.a.createElement,c=function(t){return i("div",{className:u.a.container},t.children)},l=n("8Kt/"),f=n.n(l),s=o.a.createElement,p=function(t){var e=t.pageTitle;return s(f.a,null,s("title",null,e),s("meta",{charSet:"utf-8"}),s("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),s("link",{rel:"stylesheet",type:"text/css",href:"/css/global.css"}))};function d(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=n("dBMs"),y=n.n(v),m=o.a.createElement,h=function(t){var e=t.setValues,n=t.savedValue,o=t.valuesArrayLength,a=t.currentIndex,u=t.appendInput,i=Object(r.useState)(n),c=i[0],l=i[1];return m("div",{className:y.a.container},m("input",{type:"text",className:y.a.input,required:!0,value:c,onBlur:function(){c.length>0&&e(c)},onChange:function(t){return function(t){var e=t.target.value;l(e),a+1===o&&u()}(t)}}),m("span",{className:y.a.label},"test attribute"))},b=o.a.createContext([{id:Math.random(),value:""}]),g=n("dnns"),S=n.n(g),w=n("TSYQ"),x=n.n(w),_=o.a.createElement,O=function(){var t=Object(r.useContext)(b),e=Object(r.useState)(t),n=e[0],o=e[1],a=[{id:Math.random(),value:""}];return _("div",{className:S.a.container},_("div",{className:S.a.cardHeader},_("h3",null,"Test")),_("div",{className:S.a.cardBody},_("div",null,n.map((function(t,e){return _("div",{key:t.id,className:S.a.groupField},_(h,{id:t.id,setValues:function(e){return function(t,e){var r=d(n);r.find((function(n){n.id===e&&(n.value=t)})),o(r)}(e,t.id)},valuesArrayLength:n.length,currentIndex:e,appendInput:function(){o(n.concat(a))},savedValue:t.value}),_("i",{className:x()(S.a.deleteBtn),onClick:function(){return function(t){var e=d(n.filter((function(e){return e.id!==t})));0===e.length?o(a):o(e),localStorage.setItem("results",JSON.stringify(e))}(t.id)}},"\xd7"))})))),_("div",{className:S.a.cardFooter},_("button",{onClick:function(){return function(){var t=d(n.filter((function(t){return t.value.length>0}))),e=[t.map((function(t){return t.value}))];localStorage.setItem("results",JSON.stringify(t)),alert(e)}()}},"save"),_("button",{style:{color:"#616161"},onClick:function(){return o(a),void localStorage.setItem("results",JSON.stringify(a))}},"cancel")))},j=o.a.createElement;e.default=function(){return j(c,null,j(p,{pageTitle:"Multi Input"}),j(b.Provider,{value:function(){var t=JSON.parse(localStorage.getItem("results"));return t.length>0?t:[{id:Math.random(),value:""}]}()},j(O,null)))}},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var l=s[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?a=!1:(p.add(f),r[l]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=a.default();function v(t){var e=t.children;return o.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}v.rewind=d.rewind,e.default=v},Bldr:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"C+bE":function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),u=n("48fX"),i=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){u(l,i);var c=f(l);function l(t){var a;return r(this,l),a=c.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component))}},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");t.exports=function(t){return r(t)||o(t)||a()}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}}},[["Bldr",0,1,8]]]);