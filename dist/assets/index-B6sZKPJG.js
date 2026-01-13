(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function tx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vg={exports:{}},pu={},Hg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),nx=Symbol.for("react.portal"),ix=Symbol.for("react.fragment"),rx=Symbol.for("react.strict_mode"),sx=Symbol.for("react.profiler"),ox=Symbol.for("react.provider"),ax=Symbol.for("react.context"),lx=Symbol.for("react.forward_ref"),ux=Symbol.for("react.suspense"),cx=Symbol.for("react.memo"),fx=Symbol.for("react.lazy"),cp=Symbol.iterator;function dx(n){return n===null||typeof n!="object"?null:(n=cp&&n[cp]||n["@@iterator"],typeof n=="function"?n:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,Xg={};function no(n,e,t){this.props=n,this.context=e,this.refs=Xg,this.updater=t||Gg}no.prototype.isReactComponent={};no.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};no.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function jg(){}jg.prototype=no.prototype;function zd(n,e,t){this.props=n,this.context=e,this.refs=Xg,this.updater=t||Gg}var Vd=zd.prototype=new jg;Vd.constructor=zd;Wg(Vd,no.prototype);Vd.isPureReactComponent=!0;var fp=Array.isArray,Yg=Object.prototype.hasOwnProperty,Hd={current:null},qg={key:!0,ref:!0,__self:!0,__source:!0};function Kg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yg.call(e,i)&&!qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:n,key:s,ref:o,props:r,_owner:Hd.current}}function hx(n,e){return{$$typeof:xa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gd(n){return typeof n=="object"&&n!==null&&n.$$typeof===xa}function px(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dp=/\/+/g;function zu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?px(""+n.key):e.toString(36)}function _l(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case xa:case nx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+zu(o,0):i,fp(r)?(t="",n!=null&&(t=n.replace(dp,"$&/")+"/"),_l(r,e,t,"",function(u){return u})):r!=null&&(Gd(r)&&(r=hx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+zu(s,a);o+=_l(s,e,t,l,r)}else if(l=dx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+zu(s,a++),o+=_l(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(n,e,t){if(n==null)return n;var i=[],r=0;return _l(n,i,"","",function(s){return e.call(t,s,r++)}),i}function mx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var an={current:null},vl={transition:null},gx={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:vl,ReactCurrentOwner:Hd};function $g(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ba,forEach:function(n,e,t){ba(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ba(n,function(){e++}),e},toArray:function(n){return ba(n,function(e){return e})||[]},only:function(n){if(!Gd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=no;Xe.Fragment=ix;Xe.Profiler=sx;Xe.PureComponent=zd;Xe.StrictMode=rx;Xe.Suspense=ux;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;Xe.act=$g;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Wg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Yg.call(e,l)&&!qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:xa,type:n.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(n){return n={$$typeof:ax,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ox,_context:n},n.Consumer=n};Xe.createElement=Kg;Xe.createFactory=function(n){var e=Kg.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:lx,render:n}};Xe.isValidElement=Gd;Xe.lazy=function(n){return{$$typeof:fx,_payload:{_status:-1,_result:n},_init:mx}};Xe.memo=function(n,e){return{$$typeof:cx,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=vl.transition;vl.transition={};try{n()}finally{vl.transition=e}};Xe.unstable_act=$g;Xe.useCallback=function(n,e){return an.current.useCallback(n,e)};Xe.useContext=function(n){return an.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return an.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return an.current.useEffect(n,e)};Xe.useId=function(){return an.current.useId()};Xe.useImperativeHandle=function(n,e,t){return an.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return an.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return an.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return an.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return an.current.useReducer(n,e,t)};Xe.useRef=function(n){return an.current.useRef(n)};Xe.useState=function(n){return an.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return an.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return an.current.useTransition()};Xe.version="18.3.1";Hg.exports=Xe;var di=Hg.exports;const fr=tx(di);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=di,vx=Symbol.for("react.element"),xx=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,Sx=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mx={key:!0,ref:!0,__self:!0,__source:!0};function Zg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)yx.call(e,i)&&!Mx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vx,type:n,key:s,ref:o,props:r,_owner:Sx.current}}pu.Fragment=xx;pu.jsx=Zg;pu.jsxs=Zg;Vg.exports=pu;var ge=Vg.exports,Kc={},Jg={exports:{}},Rn={},Qg={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,$){var q=U.length;U.push($);e:for(;0<q;){var ie=q-1>>>1,we=U[ie];if(0<r(we,$))U[ie]=$,U[q]=we,q=ie;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],q=U.pop();if(q!==$){U[0]=q;e:for(var ie=0,we=U.length,Ne=we>>>1;ie<Ne;){var Je=2*(ie+1)-1,et=U[Je],X=Je+1,Q=U[X];if(0>r(et,q))X<we&&0>r(Q,et)?(U[ie]=Q,U[X]=q,ie=X):(U[ie]=et,U[Je]=q,ie=Je);else if(X<we&&0>r(Q,q))U[ie]=Q,U[X]=q,ie=X;else break e}}return $}function r(U,$){var q=U.sortIndex-$.sortIndex;return q!==0?q:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=U)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function S(U){if(v=!1,x(U),!g)if(t(l)!==null)g=!0,W(w);else{var $=t(u);$!==null&&z(S,$.startTime-U)}}function w(U,$){g=!1,v&&(v=!1,h(C),C=-1),p=!0;var q=d;try{for(x($),f=t(l);f!==null&&(!(f.expirationTime>$)||U&&!L());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,d=f.priorityLevel;var we=ie(f.expirationTime<=$);$=n.unstable_now(),typeof we=="function"?f.callback=we:f===t(l)&&i(l),x($)}else i(l);f=t(l)}if(f!==null)var Ne=!0;else{var Je=t(u);Je!==null&&z(S,Je.startTime-$),Ne=!1}return Ne}finally{f=null,d=q,p=!1}}var A=!1,R=null,C=-1,M=5,T=-1;function L(){return!(n.unstable_now()-T<M)}function H(){if(R!==null){var U=n.unstable_now();T=U;var $=!0;try{$=R(!0,U)}finally{$?B():(A=!1,R=null)}}else A=!1}var B;if(typeof _=="function")B=function(){_(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Y=K.port2;K.port1.onmessage=H,B=function(){Y.postMessage(null)}}else B=function(){m(H,0)};function W(U){R=U,A||(A=!0,B())}function z(U,$){C=m(function(){U(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,W(w))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var q=d;d=$;try{return U()}finally{d=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=d;d=U;try{return $()}finally{d=q}},n.unstable_scheduleCallback=function(U,$,q){var ie=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ie+q:ie):q=ie,U){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=q+we,U={id:c++,callback:$,priorityLevel:U,startTime:q,expirationTime:we,sortIndex:-1},q>ie?(U.sortIndex=q,e(u,U),t(l)===null&&U===t(u)&&(v?(h(C),C=-1):v=!0,z(S,q-ie))):(U.sortIndex=we,e(l,U),g||p||(g=!0,W(w))),U},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(U){var $=d;return function(){var q=d;d=$;try{return U.apply(this,arguments)}finally{d=q}}}})(e0);Qg.exports=e0;var Ex=Qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx=di,wn=Ex;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,Ko={};function Qr(n,e){zs(n,e),zs(n+"Capture",e)}function zs(n,e){for(Ko[n]=e,n=0;n<e.length;n++)t0.add(e[n])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hp={},pp={};function Ax(n){return $c.call(pp,n)?!0:$c.call(hp,n)?!1:wx.test(n)?pp[n]=!0:(hp[n]=!0,!1)}function Rx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function bx(n,e,t,i){if(e===null||typeof e>"u"||Rx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Xt[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Xt[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Xt[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Xt[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Xt[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Xt[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Xt[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Xt[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Xt[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Xd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Wd,Xd);Xt[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Wd,Xd);Xt[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Wd,Xd);Xt[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Xt[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Xt[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function jd(n,e,t,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bx(e,t,r,i)&&(t=null),i||r===null?Ax(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Yi=Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),xs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),r0=Symbol.for("react.offscreen"),mp=Symbol.iterator;function fo(n){return n===null||typeof n!="object"?null:(n=mp&&n[mp]||n["@@iterator"],typeof n=="function"?n:null)}var Mt=Object.assign,Vu;function Po(n){if(Vu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+n}var Hu=!1;function Gu(n,e){if(!n||Hu)return"";Hu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Po(n):""}function Cx(n){switch(n.tag){case 5:return Po(n.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return n=Gu(n.type,!1),n;case 11:return n=Gu(n.type.render,!1),n;case 1:return n=Gu(n.type,!0),n;default:return""}}function ef(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ys:return"Fragment";case xs:return"Portal";case Zc:return"Profiler";case Yd:return"StrictMode";case Jc:return"Suspense";case Qc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case i0:return(n.displayName||"Context")+".Consumer";case n0:return(n._context.displayName||"Context")+".Provider";case qd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Kd:return e=n.displayName||null,e!==null?e:ef(n.type)||"Memo";case ir:e=n._payload,n=n._init;try{return ef(n(e))}catch{}}return null}function Px(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function s0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lx(n){var e=s0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Pa(n){n._valueTracker||(n._valueTracker=Lx(n))}function o0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=s0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Fl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function tf(n,e){var t=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function gp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=yr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(n,e){e=e.checked,e!=null&&jd(n,"checked",e,!1)}function nf(n,e){a0(n,e);var t=yr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?rf(n,e.type,t):e.hasOwnProperty("defaultValue")&&rf(n,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function _p(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function rf(n,e,t){(e!=="number"||Fl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Lo=Array.isArray;function Ls(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+yr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function sf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Lo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:yr(t)}}function l0(n,e){var t=yr(e.value),i=yr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function xp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function u0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?u0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var La,c0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $o(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ix=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(n){Ix.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Oo[e]=Oo[n]})});function f0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Oo.hasOwnProperty(n)&&Oo[n]?(""+e).trim():e+"px"}function d0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=f0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Nx=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(n,e){if(e){if(Nx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function lf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function $d(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var cf=null,Is=null,Ns=null;function yp(n){if(n=Ma(n)){if(typeof cf!="function")throw Error(te(280));var e=n.stateNode;e&&(e=xu(e),cf(n.stateNode,n.type,e))}}function h0(n){Is?Ns?Ns.push(n):Ns=[n]:Is=n}function p0(){if(Is){var n=Is,e=Ns;if(Ns=Is=null,yp(n),e)for(n=0;n<e.length;n++)yp(e[n])}}function m0(n,e){return n(e)}function g0(){}var Wu=!1;function _0(n,e,t){if(Wu)return n(e,t);Wu=!0;try{return m0(n,e,t)}finally{Wu=!1,(Is!==null||Ns!==null)&&(g0(),p0())}}function Zo(n,e){var t=n.stateNode;if(t===null)return null;var i=xu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var ff=!1;if(zi)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){ff=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{ff=!1}function Dx(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ko=!1,Ol=null,kl=!1,df=null,Ux={onError:function(n){ko=!0,Ol=n}};function Fx(n,e,t,i,r,s,o,a,l){ko=!1,Ol=null,Dx.apply(Ux,arguments)}function Ox(n,e,t,i,r,s,o,a,l){if(Fx.apply(this,arguments),ko){if(ko){var u=Ol;ko=!1,Ol=null}else throw Error(te(198));kl||(kl=!0,df=u)}}function es(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function v0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(n){if(es(n)!==n)throw Error(te(188))}function kx(n){var e=n.alternate;if(!e){if(e=es(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Sp(r),n;if(s===i)return Sp(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function x0(n){return n=kx(n),n!==null?y0(n):null}function y0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=y0(n);if(e!==null)return e;n=n.sibling}return null}var S0=wn.unstable_scheduleCallback,Mp=wn.unstable_cancelCallback,Bx=wn.unstable_shouldYield,zx=wn.unstable_requestPaint,At=wn.unstable_now,Vx=wn.unstable_getCurrentPriorityLevel,Zd=wn.unstable_ImmediatePriority,M0=wn.unstable_UserBlockingPriority,Bl=wn.unstable_NormalPriority,Hx=wn.unstable_LowPriority,E0=wn.unstable_IdlePriority,mu=null,hi=null;function Gx(n){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(mu,n,void 0,(n.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:jx,Wx=Math.log,Xx=Math.LN2;function jx(n){return n>>>=0,n===0?32:31-(Wx(n)/Xx|0)|0}var Ia=64,Na=4194304;function Io(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=t&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-$n(e),r=1<<t,i|=n[t],e&=~r;return i}function Yx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Yx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function hf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function T0(){var n=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),n}function Xu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ya(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-$n(e),n[e]=t}function Kx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-$n(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Jd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-$n(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var at=0;function w0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var A0,Qd,R0,b0,C0,pf=!1,Da=[],dr=null,hr=null,pr=null,Jo=new Map,Qo=new Map,sr=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(n,e){switch(n){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function po(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&Qd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Zx(n,e,t,i,r){switch(e){case"focusin":return dr=po(dr,n,e,t,i,r),!0;case"dragenter":return hr=po(hr,n,e,t,i,r),!0;case"mouseover":return pr=po(pr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,po(Jo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qo.set(s,po(Qo.get(s)||null,n,e,t,i,r)),!0}return!1}function P0(n){var e=zr(n.target);if(e!==null){var t=es(e);if(t!==null){if(e=t.tag,e===13){if(e=v0(t),e!==null){n.blockedOn=e,C0(n.priority,function(){R0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=mf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);uf=i,t.target.dispatchEvent(i),uf=null}else return e=Ma(t),e!==null&&Qd(e),n.blockedOn=t,!1;e.shift()}return!0}function Tp(n,e,t){xl(n)&&t.delete(e)}function Jx(){pf=!1,dr!==null&&xl(dr)&&(dr=null),hr!==null&&xl(hr)&&(hr=null),pr!==null&&xl(pr)&&(pr=null),Jo.forEach(Tp),Qo.forEach(Tp)}function mo(n,e){n.blockedOn===e&&(n.blockedOn=null,pf||(pf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,Jx)))}function ea(n){function e(r){return mo(r,n)}if(0<Da.length){mo(Da[0],n);for(var t=1;t<Da.length;t++){var i=Da[t];i.blockedOn===n&&(i.blockedOn=null)}}for(dr!==null&&mo(dr,n),hr!==null&&mo(hr,n),pr!==null&&mo(pr,n),Jo.forEach(e),Qo.forEach(e),t=0;t<sr.length;t++)i=sr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<sr.length&&(t=sr[0],t.blockedOn===null);)P0(t),t.blockedOn===null&&sr.shift()}var Ds=Yi.ReactCurrentBatchConfig,Vl=!0;function Qx(n,e,t,i){var r=at,s=Ds.transition;Ds.transition=null;try{at=1,eh(n,e,t,i)}finally{at=r,Ds.transition=s}}function ey(n,e,t,i){var r=at,s=Ds.transition;Ds.transition=null;try{at=4,eh(n,e,t,i)}finally{at=r,Ds.transition=s}}function eh(n,e,t,i){if(Vl){var r=mf(n,e,t,i);if(r===null)tc(n,e,i,Hl,t),Ep(n,i);else if(Zx(r,n,e,t,i))i.stopPropagation();else if(Ep(n,i),e&4&&-1<$x.indexOf(n)){for(;r!==null;){var s=Ma(r);if(s!==null&&A0(s),s=mf(n,e,t,i),s===null&&tc(n,e,i,Hl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else tc(n,e,i,null,t)}}var Hl=null;function mf(n,e,t,i){if(Hl=null,n=$d(i),n=zr(n),n!==null)if(e=es(n),e===null)n=null;else if(t=e.tag,t===13){if(n=v0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Hl=n,null}function L0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vx()){case Zd:return 1;case M0:return 4;case Bl:case Hx:return 16;case E0:return 536870912;default:return 16}default:return 16}}var lr=null,th=null,yl=null;function I0(){if(yl)return yl;var n,e=th,t=e.length,i,r="value"in lr?lr.value:lr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return yl=r.slice(n,1<i?1-i:void 0)}function Sl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ua(){return!0}function wp(){return!1}function bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:wp,this.isPropagationStopped=wp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nh=bn(io),Sa=Mt({},io,{view:0,detail:0}),ty=bn(Sa),ju,Yu,go,gu=Mt({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ih,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==go&&(go&&n.type==="mousemove"?(ju=n.screenX-go.screenX,Yu=n.screenY-go.screenY):Yu=ju=0,go=n),ju)},movementY:function(n){return"movementY"in n?n.movementY:Yu}}),Ap=bn(gu),ny=Mt({},gu,{dataTransfer:0}),iy=bn(ny),ry=Mt({},Sa,{relatedTarget:0}),qu=bn(ry),sy=Mt({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=bn(sy),ay=Mt({},io,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ly=bn(ay),uy=Mt({},io,{data:0}),Rp=bn(uy),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=dy[n])?!!e[n]:!1}function ih(){return hy}var py=Mt({},Sa,{key:function(n){if(n.key){var e=cy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ih,charCode:function(n){return n.type==="keypress"?Sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),my=bn(py),gy=Mt({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=bn(gy),_y=Mt({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ih}),vy=bn(_y),xy=Mt({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=bn(xy),Sy=Mt({},gu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),My=bn(Sy),Ey=[9,13,27,32],rh=zi&&"CompositionEvent"in window,Bo=null;zi&&"documentMode"in document&&(Bo=document.documentMode);var Ty=zi&&"TextEvent"in window&&!Bo,N0=zi&&(!rh||Bo&&8<Bo&&11>=Bo),Cp=" ",Pp=!1;function D0(n,e){switch(n){case"keyup":return Ey.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function wy(n,e){switch(n){case"compositionend":return U0(e);case"keypress":return e.which!==32?null:(Pp=!0,Cp);case"textInput":return n=e.data,n===Cp&&Pp?null:n;default:return null}}function Ay(n,e){if(Ss)return n==="compositionend"||!rh&&D0(n,e)?(n=I0(),yl=th=lr=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ry[n.type]:e==="textarea"}function F0(n,e,t,i){h0(i),e=Gl(e,"onChange"),0<e.length&&(t=new nh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var zo=null,ta=null;function by(n){Y0(n,0)}function _u(n){var e=Ts(n);if(o0(e))return n}function Cy(n,e){if(n==="change")return e}var O0=!1;if(zi){var Ku;if(zi){var $u="oninput"in document;if(!$u){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),$u=typeof Ip.oninput=="function"}Ku=$u}else Ku=!1;O0=Ku&&(!document.documentMode||9<document.documentMode)}function Np(){zo&&(zo.detachEvent("onpropertychange",k0),ta=zo=null)}function k0(n){if(n.propertyName==="value"&&_u(ta)){var e=[];F0(e,ta,n,$d(n)),_0(by,e)}}function Py(n,e,t){n==="focusin"?(Np(),zo=e,ta=t,zo.attachEvent("onpropertychange",k0)):n==="focusout"&&Np()}function Ly(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _u(ta)}function Iy(n,e){if(n==="click")return _u(e)}function Ny(n,e){if(n==="input"||n==="change")return _u(e)}function Dy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ei=typeof Object.is=="function"?Object.is:Dy;function na(n,e){if(ei(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$c.call(e,r)||!ei(n[r],e[r]))return!1}return!0}function Dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Up(n,e){var t=Dp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dp(t)}}function B0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?B0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function z0(){for(var n=window,e=Fl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Fl(n.document)}return e}function sh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Uy(n){var e=z0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&B0(t.ownerDocument.documentElement,t)){if(i!==null&&sh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Up(t,s);var o=Up(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fy=zi&&"documentMode"in document&&11>=document.documentMode,Ms=null,gf=null,Vo=null,_f=!1;function Fp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_f||Ms==null||Ms!==Fl(i)||(i=Ms,"selectionStart"in i&&sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&na(Vo,i)||(Vo=i,i=Gl(gf,"onSelect"),0<i.length&&(e=new nh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ms)))}function Fa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Es={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Zu={},V0={};zi&&(V0=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function vu(n){if(Zu[n])return Zu[n];if(!Es[n])return n;var e=Es[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in V0)return Zu[n]=e[t];return n}var H0=vu("animationend"),G0=vu("animationiteration"),W0=vu("animationstart"),X0=vu("transitionend"),j0=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(n,e){j0.set(n,e),Qr(e,[n])}for(var Ju=0;Ju<Op.length;Ju++){var Qu=Op[Ju],Oy=Qu.toLowerCase(),ky=Qu[0].toUpperCase()+Qu.slice(1);Mr(Oy,"on"+ky)}Mr(H0,"onAnimationEnd");Mr(G0,"onAnimationIteration");Mr(W0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(X0,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function kp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Ox(i,e,void 0,n),n.currentTarget=null}function Y0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,u),s=l}}}if(kl)throw n=df,kl=!1,df=null,n}function mt(n,e){var t=e[Mf];t===void 0&&(t=e[Mf]=new Set);var i=n+"__bubble";t.has(i)||(q0(e,n,2,!1),t.add(i))}function ec(n,e,t){var i=0;e&&(i|=4),q0(t,n,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[Oa]){n[Oa]=!0,t0.forEach(function(t){t!=="selectionchange"&&(By.has(t)||ec(t,!1,n),ec(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,ec("selectionchange",!1,e))}}function q0(n,e,t,i){switch(L0(e)){case 1:var r=Qx;break;case 4:r=ey;break;default:r=eh}t=r.bind(null,e,t,n),r=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function tc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_0(function(){var u=s,c=$d(t),f=[];e:{var d=j0.get(n);if(d!==void 0){var p=nh,g=n;switch(n){case"keypress":if(Sl(t)===0)break e;case"keydown":case"keyup":p=my;break;case"focusin":g="focus",p=qu;break;case"focusout":g="blur",p=qu;break;case"beforeblur":case"afterblur":p=qu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vy;break;case H0:case G0:case W0:p=oy;break;case X0:p=yy;break;case"scroll":p=ty;break;case"wheel":p=My;break;case"copy":case"cut":case"paste":p=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bp}var v=(e&4)!==0,m=!v&&n==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var _=u,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=Zo(_,h),S!=null&&v.push(ra(_,S,x)))),m)break;_=_.return}0<v.length&&(d=new p(d,g,null,t,c),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==uf&&(g=t.relatedTarget||t.fromElement)&&(zr(g)||g[Vi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?zr(g):null,g!==null&&(m=es(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Ap,S="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=bp,S="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:Ts(p),x=g==null?d:Ts(g),d=new v(S,_+"leave",p,t,c),d.target=m,d.relatedTarget=x,S=null,zr(c)===u&&(v=new v(h,_+"enter",g,t,c),v.target=x,v.relatedTarget=m,S=v),m=S,p&&g)t:{for(v=p,h=g,_=0,x=v;x;x=ns(x))_++;for(x=0,S=h;S;S=ns(S))x++;for(;0<_-x;)v=ns(v),_--;for(;0<x-_;)h=ns(h),x--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=ns(v),h=ns(h)}v=null}else v=null;p!==null&&Bp(f,d,p,v,!1),g!==null&&m!==null&&Bp(f,m,g,v,!0)}}e:{if(d=u?Ts(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=Cy;else if(Lp(d))if(O0)w=Ny;else{w=Ly;var A=Py}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=Iy);if(w&&(w=w(n,u))){F0(f,w,t,c);break e}A&&A(n,d,u),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&rf(d,"number",d.value)}switch(A=u?Ts(u):window,n){case"focusin":(Lp(A)||A.contentEditable==="true")&&(Ms=A,gf=u,Vo=null);break;case"focusout":Vo=gf=Ms=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Fp(f,t,c);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":Fp(f,t,c)}var R;if(rh)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ss?D0(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(N0&&t.locale!=="ko"&&(Ss||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ss&&(R=I0()):(lr=c,th="value"in lr?lr.value:lr.textContent,Ss=!0)),A=Gl(u,C),0<A.length&&(C=new Rp(C,n,null,t,c),f.push({event:C,listeners:A}),R?C.data=R:(R=U0(t),R!==null&&(C.data=R)))),(R=Ty?wy(n,t):Ay(n,t))&&(u=Gl(u,"onBeforeInput"),0<u.length&&(c=new Rp("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=R))}Y0(f,e)})}function ra(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Gl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Zo(n,t),s!=null&&i.unshift(ra(n,s,r)),s=Zo(n,e),s!=null&&i.push(ra(n,s,r))),n=n.return}return i}function ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Zo(t,s),l!=null&&o.unshift(ra(t,l,a))):r||(l=Zo(t,s),l!=null&&o.push(ra(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var zy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function zp(n){return(typeof n=="string"?n:""+n).replace(zy,`
`).replace(Vy,"")}function ka(n,e,t){if(e=zp(e),zp(n)!==e&&t)throw Error(te(425))}function Wl(){}var vf=null,xf=null;function yf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(n){return Vp.resolve(null).then(n).catch(Wy)}:Sf;function Wy(n){setTimeout(function(){throw n})}function nc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ea(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ea(e)}function mr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),li="__reactFiber$"+ro,sa="__reactProps$"+ro,Vi="__reactContainer$"+ro,Mf="__reactEvents$"+ro,Xy="__reactListeners$"+ro,jy="__reactHandles$"+ro;function zr(n){var e=n[li];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vi]||t[li]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hp(n);n!==null;){if(t=n[li])return t;n=Hp(n)}return e}n=t,t=n.parentNode}return null}function Ma(n){return n=n[li]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function xu(n){return n[sa]||null}var Ef=[],ws=-1;function Er(n){return{current:n}}function _t(n){0>ws||(n.current=Ef[ws],Ef[ws]=null,ws--)}function pt(n,e){ws++,Ef[ws]=n.current,n.current=e}var Sr={},Jt=Er(Sr),hn=Er(!1),Yr=Sr;function Vs(n,e){var t=n.type.contextTypes;if(!t)return Sr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function pn(n){return n=n.childContextTypes,n!=null}function Xl(){_t(hn),_t(Jt)}function Gp(n,e,t){if(Jt.current!==Sr)throw Error(te(168));pt(Jt,e),pt(hn,t)}function K0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Px(n)||"Unknown",r));return Mt({},t,i)}function jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Sr,Yr=Jt.current,pt(Jt,n),pt(hn,hn.current),!0}function Wp(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=K0(n,e,Yr),i.__reactInternalMemoizedMergedChildContext=n,_t(hn),_t(Jt),pt(Jt,n)):_t(hn),pt(hn,t)}var Li=null,yu=!1,ic=!1;function $0(n){Li===null?Li=[n]:Li.push(n)}function Yy(n){yu=!0,$0(n)}function Tr(){if(!ic&&Li!==null){ic=!0;var n=0,e=at;try{var t=Li;for(at=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Li=null,yu=!1}catch(r){throw Li!==null&&(Li=Li.slice(n+1)),S0(Zd,Tr),r}finally{at=e,ic=!1}}return null}var As=[],Rs=0,Yl=null,ql=0,In=[],Nn=0,qr=null,Ii=1,Ni="";function Ur(n,e){As[Rs++]=ql,As[Rs++]=Yl,Yl=n,ql=e}function Z0(n,e,t){In[Nn++]=Ii,In[Nn++]=Ni,In[Nn++]=qr,qr=n;var i=Ii;n=Ni;var r=32-$n(i)-1;i&=~(1<<r),t+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-$n(e)+r|t<<r|i,Ni=s+n}else Ii=1<<s|t<<r|i,Ni=n}function oh(n){n.return!==null&&(Ur(n,1),Z0(n,1,0))}function ah(n){for(;n===Yl;)Yl=As[--Rs],As[Rs]=null,ql=As[--Rs],As[Rs]=null;for(;n===qr;)qr=In[--Nn],In[Nn]=null,Ni=In[--Nn],In[Nn]=null,Ii=In[--Nn],In[Nn]=null}var Tn=null,En=null,vt=!1,Yn=null;function J0(n,e){var t=Dn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Xp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,En=mr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=qr!==null?{id:Ii,overflow:Ni}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Dn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,En=null,!0):!1;default:return!1}}function Tf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wf(n){if(vt){var e=En;if(e){var t=e;if(!Xp(n,e)){if(Tf(n))throw Error(te(418));e=mr(t.nextSibling);var i=Tn;e&&Xp(n,e)?J0(i,t):(n.flags=n.flags&-4097|2,vt=!1,Tn=n)}}else{if(Tf(n))throw Error(te(418));n.flags=n.flags&-4097|2,vt=!1,Tn=n}}}function jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function Ba(n){if(n!==Tn)return!1;if(!vt)return jp(n),vt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!yf(n.type,n.memoizedProps)),e&&(e=En)){if(Tf(n))throw Q0(),Error(te(418));for(;e;)J0(n,e),e=mr(e.nextSibling)}if(jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){En=mr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}En=null}}else En=Tn?mr(n.stateNode.nextSibling):null;return!0}function Q0(){for(var n=En;n;)n=mr(n.nextSibling)}function Hs(){En=Tn=null,vt=!1}function lh(n){Yn===null?Yn=[n]:Yn.push(n)}var qy=Yi.ReactCurrentBatchConfig;function _o(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function za(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Yp(n){var e=n._init;return e(n._payload)}function e_(n){function e(h,_){if(n){var x=h.deletions;x===null?(h.deletions=[_],h.flags|=16):x.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=xr(h,_),h.index=0,h.sibling=null,h}function s(h,_,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<_?(h.flags|=2,_):x):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,_,x,S){return _===null||_.tag!==6?(_=cc(x,h.mode,S),_.return=h,_):(_=r(_,x),_.return=h,_)}function l(h,_,x,S){var w=x.type;return w===ys?c(h,_,x.props.children,S,x.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ir&&Yp(w)===_.type)?(S=r(_,x.props),S.ref=_o(h,_,x),S.return=h,S):(S=bl(x.type,x.key,x.props,null,h.mode,S),S.ref=_o(h,_,x),S.return=h,S)}function u(h,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=fc(x,h.mode,S),_.return=h,_):(_=r(_,x.children||[]),_.return=h,_)}function c(h,_,x,S,w){return _===null||_.tag!==7?(_=jr(x,h.mode,S,w),_.return=h,_):(_=r(_,x),_.return=h,_)}function f(h,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=cc(""+_,h.mode,x),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ca:return x=bl(_.type,_.key,_.props,null,h.mode,x),x.ref=_o(h,null,_),x.return=h,x;case xs:return _=fc(_,h.mode,x),_.return=h,_;case ir:var S=_._init;return f(h,S(_._payload),x)}if(Lo(_)||fo(_))return _=jr(_,h.mode,x,null),_.return=h,_;za(h,_)}return null}function d(h,_,x,S){var w=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(h,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ca:return x.key===w?l(h,_,x,S):null;case xs:return x.key===w?u(h,_,x,S):null;case ir:return w=x._init,d(h,_,w(x._payload),S)}if(Lo(x)||fo(x))return w!==null?null:c(h,_,x,S,null);za(h,x)}return null}function p(h,_,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(_,h,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ca:return h=h.get(S.key===null?x:S.key)||null,l(_,h,S,w);case xs:return h=h.get(S.key===null?x:S.key)||null,u(_,h,S,w);case ir:var A=S._init;return p(h,_,x,A(S._payload),w)}if(Lo(S)||fo(S))return h=h.get(x)||null,c(_,h,S,w,null);za(_,S)}return null}function g(h,_,x,S){for(var w=null,A=null,R=_,C=_=0,M=null;R!==null&&C<x.length;C++){R.index>C?(M=R,R=null):M=R.sibling;var T=d(h,R,x[C],S);if(T===null){R===null&&(R=M);break}n&&R&&T.alternate===null&&e(h,R),_=s(T,_,C),A===null?w=T:A.sibling=T,A=T,R=M}if(C===x.length)return t(h,R),vt&&Ur(h,C),w;if(R===null){for(;C<x.length;C++)R=f(h,x[C],S),R!==null&&(_=s(R,_,C),A===null?w=R:A.sibling=R,A=R);return vt&&Ur(h,C),w}for(R=i(h,R);C<x.length;C++)M=p(R,h,C,x[C],S),M!==null&&(n&&M.alternate!==null&&R.delete(M.key===null?C:M.key),_=s(M,_,C),A===null?w=M:A.sibling=M,A=M);return n&&R.forEach(function(L){return e(h,L)}),vt&&Ur(h,C),w}function v(h,_,x,S){var w=fo(x);if(typeof w!="function")throw Error(te(150));if(x=w.call(x),x==null)throw Error(te(151));for(var A=w=null,R=_,C=_=0,M=null,T=x.next();R!==null&&!T.done;C++,T=x.next()){R.index>C?(M=R,R=null):M=R.sibling;var L=d(h,R,T.value,S);if(L===null){R===null&&(R=M);break}n&&R&&L.alternate===null&&e(h,R),_=s(L,_,C),A===null?w=L:A.sibling=L,A=L,R=M}if(T.done)return t(h,R),vt&&Ur(h,C),w;if(R===null){for(;!T.done;C++,T=x.next())T=f(h,T.value,S),T!==null&&(_=s(T,_,C),A===null?w=T:A.sibling=T,A=T);return vt&&Ur(h,C),w}for(R=i(h,R);!T.done;C++,T=x.next())T=p(R,h,C,T.value,S),T!==null&&(n&&T.alternate!==null&&R.delete(T.key===null?C:T.key),_=s(T,_,C),A===null?w=T:A.sibling=T,A=T);return n&&R.forEach(function(H){return e(h,H)}),vt&&Ur(h,C),w}function m(h,_,x,S){if(typeof x=="object"&&x!==null&&x.type===ys&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ca:e:{for(var w=x.key,A=_;A!==null;){if(A.key===w){if(w=x.type,w===ys){if(A.tag===7){t(h,A.sibling),_=r(A,x.props.children),_.return=h,h=_;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ir&&Yp(w)===A.type){t(h,A.sibling),_=r(A,x.props),_.ref=_o(h,A,x),_.return=h,h=_;break e}t(h,A);break}else e(h,A);A=A.sibling}x.type===ys?(_=jr(x.props.children,h.mode,S,x.key),_.return=h,h=_):(S=bl(x.type,x.key,x.props,null,h.mode,S),S.ref=_o(h,_,x),S.return=h,h=S)}return o(h);case xs:e:{for(A=x.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(h,_.sibling),_=r(_,x.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=fc(x,h.mode,S),_.return=h,h=_}return o(h);case ir:return A=x._init,m(h,_,A(x._payload),S)}if(Lo(x))return g(h,_,x,S);if(fo(x))return v(h,_,x,S);za(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,x),_.return=h,h=_):(t(h,_),_=cc(x,h.mode,S),_.return=h,h=_),o(h)):t(h,_)}return m}var Gs=e_(!0),t_=e_(!1),Kl=Er(null),$l=null,bs=null,uh=null;function ch(){uh=bs=$l=null}function fh(n){var e=Kl.current;_t(Kl),n._currentValue=e}function Af(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Us(n,e){$l=n,uh=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(dn=!0),n.firstContext=null)}function kn(n){var e=n._currentValue;if(uh!==n)if(n={context:n,memoizedValue:e,next:null},bs===null){if($l===null)throw Error(te(308));bs=n,$l.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return e}var Vr=null;function dh(n){Vr===null?Vr=[n]:Vr.push(n)}function n_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,dh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Hi(n,i)}function Hi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var rr=!1;function hh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(n,t)}return r=i.interleaved,r===null?(e.next=e,dh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(n,t)}function Ml(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jd(n,t)}}function qp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Zl(n,e,t,i){var r=n.updateQueue;rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(d=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=Mt({},f,d);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,n.lanes=o,n.memoizedState=f}}function Kp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ea={},pi=Er(Ea),oa=Er(Ea),aa=Er(Ea);function Hr(n){if(n===Ea)throw Error(te(174));return n}function ph(n,e){switch(pt(aa,e),pt(oa,n),pt(pi,Ea),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:of(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=of(e,n)}_t(pi),pt(pi,e)}function Ws(){_t(pi),_t(oa),_t(aa)}function r_(n){Hr(aa.current);var e=Hr(pi.current),t=of(e,n.type);e!==t&&(pt(oa,n),pt(pi,t))}function mh(n){oa.current===n&&(_t(pi),_t(oa))}var xt=Er(0);function Jl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rc=[];function gh(){for(var n=0;n<rc.length;n++)rc[n]._workInProgressVersionPrimary=null;rc.length=0}var El=Yi.ReactCurrentDispatcher,sc=Yi.ReactCurrentBatchConfig,Kr=0,yt=null,Lt=null,Bt=null,Ql=!1,Ho=!1,la=0,Ky=0;function jt(){throw Error(te(321))}function _h(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ei(n[t],e[t]))return!1;return!0}function vh(n,e,t,i,r,s){if(Kr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=n===null||n.memoizedState===null?Qy:eS,n=t(i,r),Ho){s=0;do{if(Ho=!1,la=0,25<=s)throw Error(te(301));s+=1,Bt=Lt=null,e.updateQueue=null,El.current=tS,n=t(i,r)}while(Ho)}if(El.current=eu,e=Lt!==null&&Lt.next!==null,Kr=0,Bt=Lt=yt=null,Ql=!1,e)throw Error(te(300));return n}function xh(){var n=la!==0;return la=0,n}function si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?yt.memoizedState=Bt=n:Bt=Bt.next=n,Bt}function Bn(){if(Lt===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=Lt.next;var e=Bt===null?yt.memoizedState:Bt.next;if(e!==null)Bt=e,Lt=n;else{if(n===null)throw Error(te(310));Lt=n,n={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Bt===null?yt.memoizedState=Bt=n:Bt=Bt.next=n}return Bt}function ua(n,e){return typeof e=="function"?e(n):e}function oc(n){var e=Bn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Lt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=c,$r|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,yt.lanes|=s,$r|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ac(n){var e=Bn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function s_(){}function o_(n,e){var t=yt,i=Bn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,yh(u_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(t.flags|=2048,ca(9,l_.bind(null,t,i,r,e),void 0,null),zt===null)throw Error(te(349));Kr&30||a_(t,e,r)}return r}function a_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function l_(n,e,t,i){e.value=t,e.getSnapshot=i,c_(e)&&f_(n)}function u_(n,e,t){return t(function(){c_(e)&&f_(n)})}function c_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ei(n,t)}catch{return!0}}function f_(n){var e=Hi(n,1);e!==null&&Zn(e,n,1,-1)}function $p(n){var e=si();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},e.queue=n,n=n.dispatch=Jy.bind(null,yt,n),[e.memoizedState,n]}function ca(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function d_(){return Bn().memoizedState}function Tl(n,e,t,i){var r=si();yt.flags|=n,r.memoizedState=ca(1|e,t,void 0,i===void 0?null:i)}function Su(n,e,t,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&_h(i,o.deps)){r.memoizedState=ca(e,t,s,i);return}}yt.flags|=n,r.memoizedState=ca(1|e,t,s,i)}function Zp(n,e){return Tl(8390656,8,n,e)}function yh(n,e){return Su(2048,8,n,e)}function h_(n,e){return Su(4,2,n,e)}function p_(n,e){return Su(4,4,n,e)}function m_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function g_(n,e,t){return t=t!=null?t.concat([n]):null,Su(4,4,m_.bind(null,e,n),t)}function Sh(){}function __(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function v_(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function x_(n,e,t){return Kr&21?(ei(t,e)||(t=T0(),yt.lanes|=t,$r|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,dn=!0),n.memoizedState=t)}function $y(n,e){var t=at;at=t!==0&&4>t?t:4,n(!0);var i=sc.transition;sc.transition={};try{n(!1),e()}finally{at=t,sc.transition=i}}function y_(){return Bn().memoizedState}function Zy(n,e,t){var i=vr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},S_(n))M_(e,t);else if(t=n_(n,e,t,i),t!==null){var r=rn();Zn(t,n,i,r),E_(t,e,i)}}function Jy(n,e,t){var i=vr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(S_(n))M_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,dh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=n_(n,e,r,i),t!==null&&(r=rn(),Zn(t,n,i,r),E_(t,e,i))}}function S_(n){var e=n.alternate;return n===yt||e!==null&&e===yt}function M_(n,e){Ho=Ql=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function E_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jd(n,t)}}var eu={readContext:kn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Qy={readContext:kn,useCallback:function(n,e){return si().memoizedState=[n,e===void 0?null:e],n},useContext:kn,useEffect:Zp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Tl(4194308,4,m_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Tl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Tl(4,2,n,e)},useMemo:function(n,e){var t=si();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=si();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Zy.bind(null,yt,n),[i.memoizedState,n]},useRef:function(n){var e=si();return n={current:n},e.memoizedState=n},useState:$p,useDebugValue:Sh,useDeferredValue:function(n){return si().memoizedState=n},useTransition:function(){var n=$p(!1),e=n[0];return n=$y.bind(null,n[1]),si().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=yt,r=si();if(vt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),zt===null)throw Error(te(349));Kr&30||a_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Zp(u_.bind(null,i,s,n),[n]),i.flags|=2048,ca(9,l_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=si(),e=zt.identifierPrefix;if(vt){var t=Ni,i=Ii;t=(i&~(1<<32-$n(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=la++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ky++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},eS={readContext:kn,useCallback:__,useContext:kn,useEffect:yh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:v_,useReducer:oc,useRef:d_,useState:function(){return oc(ua)},useDebugValue:Sh,useDeferredValue:function(n){var e=Bn();return x_(e,Lt.memoizedState,n)},useTransition:function(){var n=oc(ua)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:y_,unstable_isNewReconciler:!1},tS={readContext:kn,useCallback:__,useContext:kn,useEffect:yh,useImperativeHandle:g_,useInsertionEffect:h_,useLayoutEffect:p_,useMemo:v_,useReducer:ac,useRef:d_,useState:function(){return ac(ua)},useDebugValue:Sh,useDeferredValue:function(n){var e=Bn();return Lt===null?e.memoizedState=n:x_(e,Lt.memoizedState,n)},useTransition:function(){var n=ac(ua)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:y_,unstable_isNewReconciler:!1};function Xn(n,e){if(n&&n.defaultProps){e=Mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Rf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Mu={isMounted:function(n){return(n=n._reactInternals)?es(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=rn(),r=vr(n),s=Oi(i,r);s.payload=e,t!=null&&(s.callback=t),e=gr(n,s,r),e!==null&&(Zn(e,n,r,i),Ml(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=rn(),r=vr(n),s=Oi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=gr(n,s,r),e!==null&&(Zn(e,n,r,i),Ml(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=rn(),i=vr(n),r=Oi(t,i);r.tag=2,e!=null&&(r.callback=e),e=gr(n,r,i),e!==null&&(Zn(e,n,i,t),Ml(e,n,i))}};function Jp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(t,i)||!na(r,s):!0}function T_(n,e,t){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=pn(e)?Yr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Vs(n,r):Sr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Mu.enqueueReplaceState(e,e.state,null)}function bf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},hh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=pn(e)?Yr:Jt.current,r.context=Vs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mu.enqueueReplaceState(r,r.state,null),Zl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,e){try{var t="",i=e;do t+=Cx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function lc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Cf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var nS=typeof WeakMap=="function"?WeakMap:Map;function w_(n,e,t){t=Oi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){nu||(nu=!0,Bf=i),Cf(n,e)},t}function A_(n,e,t){t=Oi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Cf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Cf(n,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function em(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new nS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=gS.bind(null,n,e,t),e.then(n,n))}function tm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function nm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Oi(-1,1),e.tag=2,gr(t,e,1))),t.lanes|=1),n)}var iS=Yi.ReactCurrentOwner,dn=!1;function nn(n,e,t,i){e.child=n===null?t_(e,null,t,i):Gs(e,n.child,t,i)}function im(n,e,t,i,r){t=t.render;var s=e.ref;return Us(e,r),i=vh(n,e,t,i,s,r),t=xh(),n!==null&&!dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gi(n,e,r)):(vt&&t&&oh(e),e.flags|=1,nn(n,e,i,r),e.child)}function rm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,R_(n,e,s,i,r)):(n=bl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:na,t(o,i)&&n.ref===e.ref)return Gi(n,e,r)}return e.flags|=1,n=xr(s,i),n.ref=e.ref,n.return=e,e.child=n}function R_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(na(s,i)&&n.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(dn=!0);else return e.lanes=n.lanes,Gi(n,e,r)}return Pf(n,e,t,i,r)}function b_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Ps,Sn),Sn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,pt(Ps,Sn),Sn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,pt(Ps,Sn),Sn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,pt(Ps,Sn),Sn|=i;return nn(n,e,r,t),e.child}function C_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Pf(n,e,t,i,r){var s=pn(t)?Yr:Jt.current;return s=Vs(e,s),Us(e,r),t=vh(n,e,t,i,s,r),i=xh(),n!==null&&!dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gi(n,e,r)):(vt&&i&&oh(e),e.flags|=1,nn(n,e,t,r),e.child)}function sm(n,e,t,i,r){if(pn(t)){var s=!0;jl(e)}else s=!1;if(Us(e,r),e.stateNode===null)wl(n,e),T_(e,t,i),bf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=pn(t)?Yr:Jt.current,u=Vs(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Qp(e,o,i,u),rr=!1;var d=e.memoizedState;o.state=d,Zl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||hn.current||rr?(typeof c=="function"&&(Rf(e,t,c,i),l=e.memoizedState),(a=rr||Jp(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,i_(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=pn(t)?Yr:Jt.current,l=Vs(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Qp(e,o,i,l),rr=!1,d=e.memoizedState,o.state=d,Zl(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||hn.current||rr?(typeof p=="function"&&(Rf(e,t,p,i),g=e.memoizedState),(u=rr||Jp(e,t,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Lf(n,e,t,i,s,r)}function Lf(n,e,t,i,r,s){C_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wp(e,t,!1),Gi(n,e,s);i=e.stateNode,iS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Gs(e,n.child,null,s),e.child=Gs(e,null,a,s)):nn(n,e,a,s),e.memoizedState=i.state,r&&Wp(e,t,!0),e.child}function P_(n){var e=n.stateNode;e.pendingContext?Gp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(n,e.context,!1),ph(n,e.containerInfo)}function om(n,e,t,i,r){return Hs(),lh(r),e.flags|=256,nn(n,e,t,i),e.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Nf(n){return{baseLanes:n,cachePool:null,transitions:null}}function L_(n,e,t){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),pt(xt,r&1),n===null)return wf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,i,0,null),n=jr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Nf(t),e.memoizedState=If,n):Mh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=jr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Nf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=If,i}return s=n.child,n=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Mh(n,e){return e=wu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Va(n,e,t,i){return i!==null&&lh(i),Gs(e,n.child,null,t),n=Mh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function rS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=lc(Error(te(422))),Va(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wu({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,n.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=If,s);if(!(e.mode&1))return Va(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=lc(s,i,void 0),Va(n,e,o,i)}if(a=(o&n.childLanes)!==0,dn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(n,r),Zn(i,n,r,-1))}return bh(),i=lc(Error(te(421))),Va(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=_S.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,En=mr(r.nextSibling),Tn=e,vt=!0,Yn=null,n!==null&&(In[Nn++]=Ii,In[Nn++]=Ni,In[Nn++]=qr,Ii=n.id,Ni=n.overflow,qr=e),e=Mh(e,i.children),e.flags|=4096,e)}function am(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Af(n.return,e,t)}function uc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function I_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(n,e,i.children,t),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,t,e);else if(n.tag===19)am(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(pt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Jl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),uc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Jl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}uc(e,!0,t,null,s);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Gi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),$r|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=xr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=xr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function sS(n,e,t){switch(e.tag){case 3:P_(e),Hs();break;case 5:r_(e);break;case 1:pn(e.type)&&jl(e);break;case 4:ph(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(xt,xt.current&1),e.flags|=128,null):t&e.child.childLanes?L_(n,e,t):(pt(xt,xt.current&1),n=Gi(n,e,t),n!==null?n.sibling:null);pt(xt,xt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return I_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,b_(n,e,t)}return Gi(n,e,t)}var N_,Df,D_,U_;N_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Df=function(){};D_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Hr(pi.current);var s=null;switch(t){case"input":r=tf(n,r),i=tf(n,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=sf(n,r),i=sf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Wl)}af(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};U_=function(n,e,t,i){t!==i&&(e.flags|=4)};function vo(n,e){if(!vt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function oS(n,e,t){var i=e.pendingProps;switch(ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return pn(e.type)&&Xl(),Yt(e),null;case 3:return i=e.stateNode,Ws(),_t(hn),_t(Jt),gh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ba(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Hf(Yn),Yn=null))),Df(n,e),Yt(e),null;case 5:mh(e);var r=Hr(aa.current);if(t=e.type,n!==null&&e.stateNode!=null)D_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Yt(e),null}if(n=Hr(pi.current),Ba(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[li]=e,i[sa]=s,n=(e.mode&1)!==0,t){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)mt(No[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":gp(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":vp(i,s),mt("invalid",i)}af(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,n),r=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(t){case"input":Pa(i),_p(i,s,!0);break;case"textarea":Pa(i),xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=u0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[li]=e,n[sa]=i,N_(n,e,!1,!1),e.stateNode=n;e:{switch(o=lf(t,i),t){case"dialog":mt("cancel",n),mt("close",n),r=i;break;case"iframe":case"object":case"embed":mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)mt(No[r],n);r=i;break;case"source":mt("error",n),r=i;break;case"img":case"image":case"link":mt("error",n),mt("load",n),r=i;break;case"details":mt("toggle",n),r=i;break;case"input":gp(n,i),r=tf(n,i),mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),mt("invalid",n);break;case"textarea":vp(n,i),r=sf(n,i),mt("invalid",n);break;default:r=i}af(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?d0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&$o(n,l):typeof l=="number"&&$o(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",n):l!=null&&jd(n,s,l,o))}switch(t){case"input":Pa(n),_p(n,i,!1);break;case"textarea":Pa(n),xp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+yr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ls(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Wl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)U_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Hr(aa.current),Hr(pi.current),Ba(e)){if(i=e.stateNode,t=e.memoizedProps,i[li]=e,(s=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:ka(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ka(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Yt(e),null;case 13:if(_t(xt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(vt&&En!==null&&e.mode&1&&!(e.flags&128))Q0(),Hs(),e.flags|=98560,s=!1;else if(s=Ba(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[li]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Yn!==null&&(Hf(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||xt.current&1?It===0&&(It=3):bh())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Ws(),Df(n,e),n===null&&ia(e.stateNode.containerInfo),Yt(e),null;case 10:return fh(e.type._context),Yt(e),null;case 17:return pn(e.type)&&Xl(),Yt(e),null;case 19:if(_t(xt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(It!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Jl(n),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return pt(xt,xt.current&1|2),e.child}n=n.sibling}s.tail!==null&&At()>js&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Jl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Yt(e),null}else 2*At()-s.renderingStartTime>js&&t!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,t=xt.current,pt(xt,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return Rh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function aS(n,e){switch(ah(e),e.tag){case 1:return pn(e.type)&&Xl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ws(),_t(hn),_t(Jt),gh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return mh(e),null;case 13:if(_t(xt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Hs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _t(xt),null;case 4:return Ws(),null;case 10:return fh(e.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var Ha=!1,$t=!1,lS=typeof WeakSet=="function"?WeakSet:Set,me=null;function Cs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){wt(n,e,i)}else t.current=null}function Uf(n,e,t){try{t()}catch(i){wt(n,e,i)}}var lm=!1;function uS(n,e){if(vf=Vl,n=z0(),sh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(xf={focusedElem:n,selectionRange:t},Vl=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Xn(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){wt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return g=lm,lm=!1,g}function Go(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uf(e,t,s)}r=r.next}while(r!==i)}}function Eu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ff(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function F_(n){var e=n.alternate;e!==null&&(n.alternate=null,F_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[li],delete e[sa],delete e[Mf],delete e[Xy],delete e[jy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function O_(n){return n.tag===5||n.tag===3||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||O_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Of(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(n=n.child,n!==null))for(Of(n,e,t),n=n.sibling;n!==null;)Of(n,e,t),n=n.sibling}function kf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(kf(n,e,t),n=n.sibling;n!==null;)kf(n,e,t),n=n.sibling}var Ht=null,jn=!1;function Ki(n,e,t){for(t=t.child;t!==null;)k_(n,e,t),t=t.sibling}function k_(n,e,t){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(mu,t)}catch{}switch(t.tag){case 5:$t||Cs(t,e);case 6:var i=Ht,r=jn;Ht=null,Ki(n,e,t),Ht=i,jn=r,Ht!==null&&(jn?(n=Ht,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ht.removeChild(t.stateNode));break;case 18:Ht!==null&&(jn?(n=Ht,t=t.stateNode,n.nodeType===8?nc(n.parentNode,t):n.nodeType===1&&nc(n,t),ea(n)):nc(Ht,t.stateNode));break;case 4:i=Ht,r=jn,Ht=t.stateNode.containerInfo,jn=!0,Ki(n,e,t),Ht=i,jn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uf(t,e,o),r=r.next}while(r!==i)}Ki(n,e,t);break;case 1:if(!$t&&(Cs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){wt(t,e,a)}Ki(n,e,t);break;case 21:Ki(n,e,t);break;case 22:t.mode&1?($t=(i=$t)||t.memoizedState!==null,Ki(n,e,t),$t=i):Ki(n,e,t);break;default:Ki(n,e,t)}}function cm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new lS),e.forEach(function(i){var r=vS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Vn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,jn=!1;break e;case 3:Ht=a.stateNode.containerInfo,jn=!0;break e;case 4:Ht=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ht===null)throw Error(te(160));k_(s,o,r),Ht=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B_(e,n),e=e.sibling}function B_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(e,n),ii(n),i&4){try{Go(3,n,n.return),Eu(3,n)}catch(v){wt(n,n.return,v)}try{Go(5,n,n.return)}catch(v){wt(n,n.return,v)}}break;case 1:Vn(e,n),ii(n),i&512&&t!==null&&Cs(t,t.return);break;case 5:if(Vn(e,n),ii(n),i&512&&t!==null&&Cs(t,t.return),n.flags&32){var r=n.stateNode;try{$o(r,"")}catch(v){wt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a0(r,s),lf(a,o);var u=lf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?d0(r,f):c==="dangerouslySetInnerHTML"?c0(r,f):c==="children"?$o(r,f):jd(r,c,f,u)}switch(a){case"input":nf(r,s);break;case"textarea":l0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ls(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[sa]=s}catch(v){wt(n,n.return,v)}}break;case 6:if(Vn(e,n),ii(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){wt(n,n.return,v)}}break;case 3:if(Vn(e,n),ii(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(v){wt(n,n.return,v)}break;case 4:Vn(e,n),ii(n);break;case 13:Vn(e,n),ii(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wh=At())),i&4&&cm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?($t=(u=$t)||c,Vn(e,n),$t=u):Vn(e,n),ii(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(me=n,c=n.child;c!==null;){for(f=me=c;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Go(4,d,d.return);break;case 1:Cs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){wt(i,t,v)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){dm(f);continue}}p!==null?(p.return=d,me=p):dm(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f0("display",o))}catch(v){wt(n,n.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){wt(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,n),ii(n),i&4&&cm(n);break;case 21:break;default:Vn(e,n),ii(n)}}function ii(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(O_(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($o(r,""),i.flags&=-33);var s=um(n);kf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=um(n);Of(n,a,o);break;default:throw Error(te(161))}}catch(l){wt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function cS(n,e,t){me=n,z_(n)}function z_(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ha;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Ha;var u=$t;if(Ha=o,($t=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?hm(r):l!==null?(l.return=o,me=l):hm(r);for(;s!==null;)me=s,z_(s),s=s.sibling;me=r,Ha=a,$t=u}fm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):fm(n)}}function fm(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Xn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Kp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ea(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}$t||e.flags&512&&Ff(e)}catch(d){wt(e,e.return,d)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function dm(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function hm(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Eu(4,e)}catch(l){wt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Ff(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Ff(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var fS=Math.ceil,tu=Yi.ReactCurrentDispatcher,Eh=Yi.ReactCurrentOwner,On=Yi.ReactCurrentBatchConfig,Ke=0,zt=null,Pt=null,Wt=0,Sn=0,Ps=Er(0),It=0,fa=null,$r=0,Tu=0,Th=0,Wo=null,fn=null,wh=0,js=1/0,Pi=null,nu=!1,Bf=null,_r=null,Ga=!1,ur=null,iu=0,Xo=0,zf=null,Al=-1,Rl=0;function rn(){return Ke&6?At():Al!==-1?Al:Al=At()}function vr(n){return n.mode&1?Ke&2&&Wt!==0?Wt&-Wt:qy.transition!==null?(Rl===0&&(Rl=T0()),Rl):(n=at,n!==0||(n=window.event,n=n===void 0?16:L0(n.type)),n):1}function Zn(n,e,t,i){if(50<Xo)throw Xo=0,zf=null,Error(te(185));ya(n,t,i),(!(Ke&2)||n!==zt)&&(n===zt&&(!(Ke&2)&&(Tu|=t),It===4&&or(n,Wt)),mn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(js=At()+500,yu&&Tr()))}function mn(n,e){var t=n.callbackNode;qx(n,e);var i=zl(n,n===zt?Wt:0);if(i===0)t!==null&&Mp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Mp(t),e===1)n.tag===0?Yy(pm.bind(null,n)):$0(pm.bind(null,n)),Gy(function(){!(Ke&6)&&Tr()}),t=null;else{switch(w0(i)){case 1:t=Zd;break;case 4:t=M0;break;case 16:t=Bl;break;case 536870912:t=E0;break;default:t=Bl}t=q_(t,V_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function V_(n,e){if(Al=-1,Rl=0,Ke&6)throw Error(te(327));var t=n.callbackNode;if(Fs()&&n.callbackNode!==t)return null;var i=zl(n,n===zt?Wt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ru(n,i);else{e=i;var r=Ke;Ke|=2;var s=G_();(zt!==n||Wt!==e)&&(Pi=null,js=At()+500,Xr(n,e));do try{pS();break}catch(a){H_(n,a)}while(!0);ch(),tu.current=s,Ke=r,Pt!==null?e=0:(zt=null,Wt=0,e=It)}if(e!==0){if(e===2&&(r=hf(n),r!==0&&(i=r,e=Vf(n,r))),e===1)throw t=fa,Xr(n,0),or(n,i),mn(n,At()),t;if(e===6)or(n,i);else{if(r=n.current.alternate,!(i&30)&&!dS(r)&&(e=ru(n,i),e===2&&(s=hf(n),s!==0&&(i=s,e=Vf(n,s))),e===1))throw t=fa,Xr(n,0),or(n,i),mn(n,At()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Fr(n,fn,Pi);break;case 3:if(or(n,i),(i&130023424)===i&&(e=wh+500-At(),10<e)){if(zl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){rn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Sf(Fr.bind(null,n,fn,Pi),e);break}Fr(n,fn,Pi);break;case 4:if(or(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fS(i/1960))-i,10<i){n.timeoutHandle=Sf(Fr.bind(null,n,fn,Pi),i);break}Fr(n,fn,Pi);break;case 5:Fr(n,fn,Pi);break;default:throw Error(te(329))}}}return mn(n,At()),n.callbackNode===t?V_.bind(null,n):null}function Vf(n,e){var t=Wo;return n.current.memoizedState.isDehydrated&&(Xr(n,e).flags|=256),n=ru(n,e),n!==2&&(e=fn,fn=t,e!==null&&Hf(e)),n}function Hf(n){fn===null?fn=n:fn.push.apply(fn,n)}function dS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(n,e){for(e&=~Th,e&=~Tu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-$n(e),i=1<<t;n[t]=-1,e&=~i}}function pm(n){if(Ke&6)throw Error(te(327));Fs();var e=zl(n,0);if(!(e&1))return mn(n,At()),null;var t=ru(n,e);if(n.tag!==0&&t===2){var i=hf(n);i!==0&&(e=i,t=Vf(n,i))}if(t===1)throw t=fa,Xr(n,0),or(n,e),mn(n,At()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Fr(n,fn,Pi),mn(n,At()),null}function Ah(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(js=At()+500,yu&&Tr())}}function Zr(n){ur!==null&&ur.tag===0&&!(Ke&6)&&Fs();var e=Ke;Ke|=1;var t=On.transition,i=at;try{if(On.transition=null,at=1,n)return n()}finally{at=i,On.transition=t,Ke=e,!(Ke&6)&&Tr()}}function Rh(){Sn=Ps.current,_t(Ps)}function Xr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Hy(t)),Pt!==null)for(t=Pt.return;t!==null;){var i=t;switch(ah(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xl();break;case 3:Ws(),_t(hn),_t(Jt),gh();break;case 5:mh(i);break;case 4:Ws();break;case 13:_t(xt);break;case 19:_t(xt);break;case 10:fh(i.type._context);break;case 22:case 23:Rh()}t=t.return}if(zt=n,Pt=n=xr(n.current,null),Wt=Sn=e,It=0,fa=null,Th=Tu=$r=0,fn=Wo=null,Vr!==null){for(e=0;e<Vr.length;e++)if(t=Vr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Vr=null}return n}function H_(n,e){do{var t=Pt;try{if(ch(),El.current=eu,Ql){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Kr=0,Bt=Lt=yt=null,Ho=!1,la=0,Eh.current=null,t===null||t.return===null){It=1,fa=e,Pt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=tm(o);if(p!==null){p.flags&=-257,nm(p,o,a,s,e),p.mode&1&&em(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){em(s,u,e),bh();break e}l=Error(te(426))}}else if(vt&&a.mode&1){var m=tm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),nm(m,o,a,s,e),lh(Xs(l,a));break e}}s=l=Xs(l,a),It!==4&&(It=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=w_(s,l,e);qp(s,h);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(_r===null||!_r.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=A_(s,a,e);qp(s,S);break e}}s=s.return}while(s!==null)}X_(t)}catch(w){e=w,Pt===t&&t!==null&&(Pt=t=t.return);continue}break}while(!0)}function G_(){var n=tu.current;return tu.current=eu,n===null?eu:n}function bh(){(It===0||It===3||It===2)&&(It=4),zt===null||!($r&268435455)&&!(Tu&268435455)||or(zt,Wt)}function ru(n,e){var t=Ke;Ke|=2;var i=G_();(zt!==n||Wt!==e)&&(Pi=null,Xr(n,e));do try{hS();break}catch(r){H_(n,r)}while(!0);if(ch(),Ke=t,tu.current=i,Pt!==null)throw Error(te(261));return zt=null,Wt=0,It}function hS(){for(;Pt!==null;)W_(Pt)}function pS(){for(;Pt!==null&&!Bx();)W_(Pt)}function W_(n){var e=Y_(n.alternate,n,Sn);n.memoizedProps=n.pendingProps,e===null?X_(n):Pt=e,Eh.current=null}function X_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=aS(t,e),t!==null){t.flags&=32767,Pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,Pt=null;return}}else if(t=oS(t,e,Sn),t!==null){Pt=t;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=n}while(e!==null);It===0&&(It=5)}function Fr(n,e,t){var i=at,r=On.transition;try{On.transition=null,at=1,mS(n,e,t,i)}finally{On.transition=r,at=i}return null}function mS(n,e,t,i){do Fs();while(ur!==null);if(Ke&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Kx(n,s),n===zt&&(Pt=zt=null,Wt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ga||(Ga=!0,q_(Bl,function(){return Fs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=at;at=1;var a=Ke;Ke|=4,Eh.current=null,uS(n,t),B_(t,n),Uy(xf),Vl=!!vf,xf=vf=null,n.current=t,cS(t),zx(),Ke=a,at=o,On.transition=s}else n.current=t;if(Ga&&(Ga=!1,ur=n,iu=r),s=n.pendingLanes,s===0&&(_r=null),Gx(t.stateNode),mn(n,At()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(nu)throw nu=!1,n=Bf,Bf=null,n;return iu&1&&n.tag!==0&&Fs(),s=n.pendingLanes,s&1?n===zf?Xo++:(Xo=0,zf=n):Xo=0,Tr(),null}function Fs(){if(ur!==null){var n=w0(iu),e=On.transition,t=at;try{if(On.transition=null,at=16>n?16:n,ur===null)var i=!1;else{if(n=ur,ur=null,iu=0,Ke&6)throw Error(te(331));var r=Ke;for(Ke|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:Go(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var d=c.sibling,p=c.return;if(F_(c),c===u){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Go(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var _=n.current;for(me=_;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=_;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(w){wt(a,a.return,w)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(Ke=r,Tr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(mu,n)}catch{}i=!0}return i}finally{at=t,On.transition=e}}return!1}function mm(n,e,t){e=Xs(t,e),e=w_(n,e,1),n=gr(n,e,1),e=rn(),n!==null&&(ya(n,1,e),mn(n,e))}function wt(n,e,t){if(n.tag===3)mm(n,n,t);else for(;e!==null;){if(e.tag===3){mm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){n=Xs(t,n),n=A_(e,n,1),e=gr(e,n,1),n=rn(),e!==null&&(ya(e,1,n),mn(e,n));break}}e=e.return}}function gS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=rn(),n.pingedLanes|=n.suspendedLanes&t,zt===n&&(Wt&t)===t&&(It===4||It===3&&(Wt&130023424)===Wt&&500>At()-wh?Xr(n,0):Th|=t),mn(n,e)}function j_(n,e){e===0&&(n.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var t=rn();n=Hi(n,e),n!==null&&(ya(n,e,t),mn(n,t))}function _S(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),j_(n,t)}function vS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),j_(n,t)}var Y_;Y_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return dn=!1,sS(n,e,t);dn=!!(n.flags&131072)}else dn=!1,vt&&e.flags&1048576&&Z0(e,ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(n,e),n=e.pendingProps;var r=Vs(e,Jt.current);Us(e,t),r=vh(null,e,i,n,r,t);var s=xh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hh(e),r.updater=Mu,e.stateNode=r,r._reactInternals=e,bf(e,i,n,t),e=Lf(null,e,i,!0,s,t)):(e.tag=0,vt&&s&&oh(e),nn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yS(i),n=Xn(i,n),r){case 0:e=Pf(null,e,i,n,t);break e;case 1:e=sm(null,e,i,n,t);break e;case 11:e=im(null,e,i,n,t);break e;case 14:e=rm(null,e,i,Xn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Pf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),sm(n,e,i,r,t);case 3:e:{if(P_(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i_(n,e),Zl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(te(423)),e),e=om(n,e,i,t,r);break e}else if(i!==r){r=Xs(Error(te(424)),e),e=om(n,e,i,t,r);break e}else for(En=mr(e.stateNode.containerInfo.firstChild),Tn=e,vt=!0,Yn=null,t=t_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Hs(),i===r){e=Gi(n,e,t);break e}nn(n,e,i,t)}e=e.child}return e;case 5:return r_(e),n===null&&wf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,yf(i,r)?o=null:s!==null&&yf(i,s)&&(e.flags|=32),C_(n,e),nn(n,e,o,t),e.child;case 6:return n===null&&wf(e),null;case 13:return L_(n,e,t);case 4:return ph(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Gs(e,null,i,t):nn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),im(n,e,i,r,t);case 7:return nn(n,e,e.pendingProps,t),e.child;case 8:return nn(n,e,e.pendingProps.children,t),e.child;case 12:return nn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Kl,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!hn.current){e=Gi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Af(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Af(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,t),r=kn(r),i=i(r),e.flags|=1,nn(n,e,i,t),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),rm(n,e,i,r,t);case 15:return R_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),wl(n,e),e.tag=1,pn(i)?(n=!0,jl(e)):n=!1,Us(e,t),T_(e,i,r),bf(e,i,r,t),Lf(null,e,i,!0,n,t);case 19:return I_(n,e,t);case 22:return b_(n,e,t)}throw Error(te(156,e.tag))};function q_(n,e){return S0(n,e)}function xS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,e,t,i){return new xS(n,e,t,i)}function Ch(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yS(n){if(typeof n=="function")return Ch(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qd)return 11;if(n===Kd)return 14}return 2}function xr(n,e){var t=n.alternate;return t===null?(t=Dn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function bl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Ch(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ys:return jr(t.children,r,s,e);case Yd:o=8,r|=8;break;case Zc:return n=Dn(12,t,e,r|2),n.elementType=Zc,n.lanes=s,n;case Jc:return n=Dn(13,t,e,r),n.elementType=Jc,n.lanes=s,n;case Qc:return n=Dn(19,t,e,r),n.elementType=Qc,n.lanes=s,n;case r0:return wu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case n0:o=10;break e;case i0:o=9;break e;case qd:o=11;break e;case Kd:o=14;break e;case ir:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Dn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function jr(n,e,t,i){return n=Dn(7,n,i,e),n.lanes=t,n}function wu(n,e,t,i){return n=Dn(22,n,i,e),n.elementType=r0,n.lanes=t,n.stateNode={isHidden:!1},n}function cc(n,e,t){return n=Dn(6,n,null,e),n.lanes=t,n}function fc(n,e,t){return e=Dn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function SS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ph(n,e,t,i,r,s,o,a,l){return n=new SS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(s),n}function MS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function K_(n){if(!n)return Sr;n=n._reactInternals;e:{if(es(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(pn(t))return K0(n,t,e)}return e}function $_(n,e,t,i,r,s,o,a,l){return n=Ph(t,i,!0,n,r,s,o,a,l),n.context=K_(null),t=n.current,i=rn(),r=vr(t),s=Oi(i,r),s.callback=e??null,gr(t,s,r),n.current.lanes=r,ya(n,r,i),mn(n,i),n}function Au(n,e,t,i){var r=e.current,s=rn(),o=vr(r);return t=K_(t),e.context===null?e.context=t:e.pendingContext=t,e=Oi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=gr(r,e,o),n!==null&&(Zn(n,r,o,s),Ml(n,r,o)),o}function su(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lh(n,e){gm(n,e),(n=n.alternate)&&gm(n,e)}function ES(){return null}var Z_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ih(n){this._internalRoot=n}Ru.prototype.render=Ih.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Au(n,e,null,null)};Ru.prototype.unmount=Ih.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Zr(function(){Au(null,n,null,null)}),e[Vi]=null}};function Ru(n){this._internalRoot=n}Ru.prototype.unstable_scheduleHydration=function(n){if(n){var e=b0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<sr.length&&e!==0&&e<sr[t].priority;t++);sr.splice(t,0,n),t===0&&P0(n)}};function Nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _m(){}function TS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=su(o);s.call(u)}}var o=$_(e,i,n,0,null,!1,!1,"",_m);return n._reactRootContainer=o,n[Vi]=o.current,ia(n.nodeType===8?n.parentNode:n),Zr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=su(l);a.call(u)}}var l=Ph(n,0,!1,null,null,!1,!1,"",_m);return n._reactRootContainer=l,n[Vi]=l.current,ia(n.nodeType===8?n.parentNode:n),Zr(function(){Au(e,l,t,i)}),l}function Cu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=su(o);a.call(l)}}Au(e,o,n,r)}else o=TS(t,e,n,r,i);return su(o)}A0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Io(e.pendingLanes);t!==0&&(Jd(e,t|1),mn(e,At()),!(Ke&6)&&(js=At()+500,Tr()))}break;case 13:Zr(function(){var i=Hi(n,1);if(i!==null){var r=rn();Zn(i,n,1,r)}}),Lh(n,1)}};Qd=function(n){if(n.tag===13){var e=Hi(n,134217728);if(e!==null){var t=rn();Zn(e,n,134217728,t)}Lh(n,134217728)}};R0=function(n){if(n.tag===13){var e=vr(n),t=Hi(n,e);if(t!==null){var i=rn();Zn(t,n,e,i)}Lh(n,e)}};b0=function(){return at};C0=function(n,e){var t=at;try{return at=n,e()}finally{at=t}};cf=function(n,e,t){switch(e){case"input":if(nf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xu(i);if(!r)throw Error(te(90));o0(i),nf(i,r)}}}break;case"textarea":l0(n,t);break;case"select":e=t.value,e!=null&&Ls(n,!!t.multiple,e,!1)}};m0=Ah;g0=Zr;var wS={usingClientEntryPoint:!1,Events:[Ma,Ts,xu,h0,p0,Ah]},xo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AS={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=x0(n),n===null?null:n.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{mu=Wa.inject(AS),hi=Wa}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;Rn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nh(e))throw Error(te(200));return MS(n,e,null,t)};Rn.createRoot=function(n,e){if(!Nh(n))throw Error(te(299));var t=!1,i="",r=Z_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ph(n,1,!1,null,null,t,!1,i,r),n[Vi]=e.current,ia(n.nodeType===8?n.parentNode:n),new Ih(e)};Rn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=x0(e),n=n===null?null:n.stateNode,n};Rn.flushSync=function(n){return Zr(n)};Rn.hydrate=function(n,e,t){if(!bu(e))throw Error(te(200));return Cu(null,n,e,!0,t)};Rn.hydrateRoot=function(n,e,t){if(!Nh(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Z_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=$_(e,null,n,1,t??null,r,!1,s,o),n[Vi]=e.current,ia(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ru(e)};Rn.render=function(n,e,t){if(!bu(e))throw Error(te(200));return Cu(null,n,e,!1,t)};Rn.unmountComponentAtNode=function(n){if(!bu(n))throw Error(te(40));return n._reactRootContainer?(Zr(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Ah;Rn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!bu(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Cu(n,e,t,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function J_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J_)}catch(n){console.error(n)}}J_(),Jg.exports=Rn;var RS=Jg.exports,vm=RS;Kc.createRoot=vm.createRoot,Kc.hydrateRoot=vm.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="182",bS=0,xm=1,CS=2,Cl=1,PS=2,Do=3,Wi=0,gn=1,ui=2,ki=0,Os=1,ym=2,Sm=3,Mm=4,LS=5,kr=100,IS=101,NS=102,DS=103,US=104,FS=200,OS=201,kS=202,BS=203,Gf=204,Wf=205,zS=206,VS=207,HS=208,GS=209,WS=210,XS=211,jS=212,YS=213,qS=214,Xf=0,jf=1,Yf=2,Ys=3,qf=4,Kf=5,$f=6,Zf=7,Q_=0,KS=1,$S=2,mi=0,ev=1,tv=2,nv=3,iv=4,rv=5,sv=6,ov=7,Em="attached",ZS="detached",av=300,Jr=301,qs=302,Jf=303,Qf=304,Pu=306,Ks=1e3,ci=1001,ou=1002,Nt=1003,lv=1004,Uo=1005,Dt=1006,Pl=1007,Di=1008,Mn=1009,uv=1010,cv=1011,da=1012,Uh=1013,vi=1014,Un=1015,Xi=1016,Fh=1017,Oh=1018,ha=1020,fv=35902,dv=35899,hv=1021,pv=1022,Fn=1023,ji=1026,Gr=1027,kh=1028,Bh=1029,$s=1030,zh=1031,Vh=1033,Ll=33776,Il=33777,Nl=33778,Dl=33779,ed=35840,td=35841,nd=35842,id=35843,rd=36196,sd=37492,od=37496,ad=37488,ld=37489,ud=37490,cd=37491,fd=37808,dd=37809,hd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,yd=37817,Sd=37818,Md=37819,Ed=37820,Td=37821,wd=36492,Ad=36494,Rd=36495,bd=36283,Cd=36284,Pd=36285,Ld=36286,pa=2300,ma=2301,dc=2302,Tm=2400,wm=2401,Am=2402,JS=2500,QS=0,mv=1,Id=2,eM=3200,gv=0,tM=1,ar="",Gt="srgb",on="srgb-linear",au="linear",rt="srgb",is=7680,Rm=519,nM=512,iM=513,rM=514,Hh=515,sM=516,oM=517,Gh=518,aM=519,Nd=35044,bm="300 es",fi=2e3,lu=2001;function _v(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uM(){const n=ga("canvas");return n.style.display="block",n}const Cm={};function uu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Re(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Le(...n){const e="THREE."+n.shift();console.error(e,...n)}function _a(...n){const e=n.join(" ");e in Cm||(Cm[e]=!0,Re(...n))}function cM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class so{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const jo=Math.PI/180,Zs=180/Math.PI;function Jn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Wh(n,e){return(n%e+e)%e}function fM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function dM(n,e,t){return n!==e?(t-n)/(e-n):0}function Yo(n,e,t){return(1-t)*n+t*e}function hM(n,e,t,i){return Yo(n,e,1-Math.exp(-t*i))}function pM(n,e=1){return e-Math.abs(Wh(n,e*2)-e)}function mM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _M(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vM(n,e){return n+Math.random()*(e-n)}function xM(n){return n*(.5-Math.random())}function yM(n){n!==void 0&&(Pm=n);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SM(n){return n*jo}function MM(n){return n*Zs}function EM(n){return(n&n-1)===0&&n!==0}function TM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function AM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*p,a*c,a*u);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const RM={DEG2RAD:jo,RAD2DEG:Zs,generateUUID:Jn,clamp:Ge,euclideanModulo:Wh,mapLinear:fM,inverseLerp:dM,lerp:Yo,damp:hM,pingpong:pM,smoothstep:mM,smootherstep:gM,randInt:_M,randFloat:vM,randFloatSpread:xM,seededRandom:yM,degToRad:SM,radToDeg:MM,isPowerOfTwo:EM,ceilPowerOfTwo:TM,floorPowerOfTwo:wM,setQuaternionFromProperEuler:AM,normalize:st,denormalize:qn};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||u!==p||c!==g){let m=l*d+u*p+c*g+f*v;m<0&&(d=-d,p=-p,g=-g,v=-v,m=-m);let h=1-a;if(m<.9995){const _=Math.acos(m),x=Math.sin(_);h=Math.sin(h*_)/x,a=Math.sin(a*_)/x,l=l*h+d*a,u=u*h+p*a,c=c*h+g*a,f=f*h+v*a}else{l=l*h+d*a,u=u*h+p*a,c=c*h+g*a,f=f*h+v*a;const _=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=_,u*=_,c*=_,f*=_}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*d,e[t+1]=l*g+c*d+u*f-a*p,e[t+2]=u*g+c*p+a*d-l*f,e[t+3]=c*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new F,Lm=new wr;class Oe{constructor(e,t,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],_=r[1],x=r[4],S=r[7],w=r[2],A=r[5],R=r[8];return s[0]=o*v+a*_+l*w,s[3]=o*m+a*x+l*A,s[6]=o*h+a*S+l*R,s[1]=u*v+c*_+f*w,s[4]=u*m+c*x+f*A,s[7]=u*h+c*S+f*R,s[2]=d*v+p*_+g*w,s[5]=d*m+p*x+g*A,s[8]=d*h+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Oe,Im=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bM(){const n={enabled:!0,workingColorSpace:on,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?au:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[on]:{primaries:e,whitePoint:i,transfer:au,toXYZ:Im,fromXYZ:Nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Im,fromXYZ:Nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const je=bM();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class CM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=ga("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class Xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mc(r[o].image)):s.push(mc(r[o]))}else s=mc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?CM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let LM=0;const gc=new F;class Vt extends so{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=ci,r=ci,s=Dt,o=Di,a=Fn,l=Mn,u=Vt.DEFAULT_ANISOTROPY,c=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Jn(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==av)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=av;Vt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,w=(h+1)/2,A=(c+d)/4,R=(f+v)/4,C=(g+m)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=C/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IM extends so{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Vt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends IM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vv extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),ja.subVectors(this.max,yo),ss.subVectors(e.a,yo),os.subVectors(e.b,yo),as.subVectors(e.c,yo),$i.subVectors(os,ss),Zi.subVectors(as,os),br.subVectors(ss,as);let t=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-br.z,br.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,br.z,0,-br.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-br.y,br.x,0];return!_c(t,ss,os,as,ja)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,ss,os,as,ja))?!1:(Ya.crossVectors($i,Zi),t=[Ya.x,Ya.y,Ya.z],_c(t,ss,os,as,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,Xa=new qi,ss=new F,os=new F,as=new F,$i=new F,Zi=new F,br=new F,yo=new F,ja=new F,Ya=new F,Cr=new F;function _c(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Cr.fromArray(n,s);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),u=t.dot(Cr),c=i.dot(Cr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const DM=new qi,So=new F,vc=new F;class Si{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):DM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(So,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(vc)),this.expandByPoint(So.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new F,xc=new F,qa=new F,Ji=new F,yc=new F,Ka=new F,Sc=new F;class Lu{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(xc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=Ji.dot(this.direction),l=-Ji.dot(qa),u=Ji.lengthSq(),c=Math.abs(1-o*o);let f,d,p,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const v=1/c;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xc).addScaledVector(qa,d),p}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,s){yc.subVectors(t,e),Ka.subVectors(i,e),Sc.crossVectors(yc,Ka);let o=this.direction.dot(Sc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(Ji,Ka));if(l<0)return null;const u=a*this.direction.dot(yc.cross(Ji));if(u<0||l+u>o)return null;const c=-a*Ji.dot(Sc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,i,r,s,o,a,l,u,c,f,d,p,g,v,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,p,g,v,m)}set(e,t,i,r,s,o,a,l,u,c,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=d-v*u,t[9]=-a*l,t[2]=v-d*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,v=u*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,v=u*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=v-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=d*u+v,t[1]=l*f,t[5]=v*u+d,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+v,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,FM)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Qi.crossVectors(i,xn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Qi.crossVectors(i,xn)),Qi.normalize(),$a.crossVectors(xn,Qi),r[0]=Qi.x,r[4]=$a.x,r[8]=xn.x,r[1]=Qi.y,r[5]=$a.y,r[9]=xn.y,r[2]=Qi.z,r[6]=$a.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],x=i[7],S=i[11],w=i[15],A=r[0],R=r[4],C=r[8],M=r[12],T=r[1],L=r[5],H=r[9],B=r[13],K=r[2],Y=r[6],W=r[10],z=r[14],U=r[3],$=r[7],q=r[11],ie=r[15];return s[0]=o*A+a*T+l*K+u*U,s[4]=o*R+a*L+l*Y+u*$,s[8]=o*C+a*H+l*W+u*q,s[12]=o*M+a*B+l*z+u*ie,s[1]=c*A+f*T+d*K+p*U,s[5]=c*R+f*L+d*Y+p*$,s[9]=c*C+f*H+d*W+p*q,s[13]=c*M+f*B+d*z+p*ie,s[2]=g*A+v*T+m*K+h*U,s[6]=g*R+v*L+m*Y+h*$,s[10]=g*C+v*H+m*W+h*q,s[14]=g*M+v*B+m*z+h*ie,s[3]=_*A+x*T+S*K+w*U,s[7]=_*R+x*L+S*Y+w*$,s[11]=_*C+x*H+S*W+w*q,s[15]=_*M+x*B+S*z+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15],_=l*p-u*d,x=a*p-u*f,S=a*d-l*f,w=o*p-u*c,A=o*d-l*c,R=o*f-a*c;return t*(v*_-m*x+h*S)-i*(g*_-m*w+h*A)+r*(g*x-v*w+h*R)-s*(g*S-v*A+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=f*m*u-v*d*u+v*l*p-a*m*p-f*l*h+a*d*h,x=g*d*u-c*m*u-g*l*p+o*m*p+c*l*h-o*d*h,S=c*v*u-g*f*u+g*a*p-o*v*p-c*a*h+o*f*h,w=g*f*l-c*v*l-g*a*d+o*v*d+c*a*m-o*f*m,A=t*_+i*x+r*S+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*R,e[2]=(a*m*s-v*l*s+v*r*u-i*m*u-a*r*h+i*l*h)*R,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*R,e[4]=x*R,e[5]=(c*m*s-g*d*s+g*r*p-t*m*p-c*r*h+t*d*h)*R,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*R,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*R,e[8]=S*R,e[9]=(g*f*s-c*v*s-g*i*p+t*v*p+c*i*h-t*f*h)*R,e[10]=(o*v*s-g*a*s+g*i*u-t*v*u-o*i*h+t*a*h)*R,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*R,e[12]=w*R,e[13]=(c*v*r-g*f*r+g*i*d-t*v*d-c*i*m+t*f*m)*R,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,g=s*f,v=o*c,m=o*f,h=a*f,_=l*u,x=l*c,S=l*f,w=i.x,A=i.y,R=i.z;return r[0]=(1-(v+h))*w,r[1]=(p+S)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+x)*R,r[9]=(m-_)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),a=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Gn.copy(this);const u=1/s,c=1/o,f=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=fi,l=!1){const u=this.elements,c=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===fi)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===lu)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fi,l=!1){const u=this.elements,c=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===fi)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===lu)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new F,Gn=new Be,UM=new F(0,0,0),FM=new F(1,1,1),Qi=new F,$a=new F,xn=new F,Dm=new Be,Um=new wr;class xi{constructor(e=0,t=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class xv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const Fm=new F,us=new wr,Ai=new Be,Za=new F,Mo=new F,kM=new F,BM=new wr,Om=new F(1,0,0),km=new F(0,1,0),Bm=new F(0,0,1),zm={type:"added"},zM={type:"removed"},cs={type:"childadded",child:null},Mc={type:"childremoved",child:null};class St extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new F,t=new xi,i=new wr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new Oe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Mo,Za,this.up):Ai.lookAt(Za,Mo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Ai),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),cs.child=e,this.dispatchEvent(cs),cs.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zM),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,kM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new F(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new F,Ri=new F,Ec=new F,bi=new F,fs=new F,ds=new F,Vm=new F,Tc=new F,wc=new F,Ac=new F,Rc=new gt,bc=new gt,Cc=new gt;class Kn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Ri.subVectors(i,t),Ec.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Ri),l=Wn.dot(Ec),u=Ri.dot(Ri),c=Ri.dot(Ec),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Rc.setScalar(0),bc.setScalar(0),Cc.setScalar(0),Rc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(bc,s.y),o.addScaledVector(Cc,s.z),o}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Ri.subVectors(e,t),Wn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Wn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),ds.subVectors(s,i),Tc.subVectors(e,i);const l=fs.dot(Tc),u=ds.dot(Tc);if(l<=0&&u<=0)return t.copy(i);wc.subVectors(e,r);const c=fs.dot(wc),f=ds.dot(wc);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(fs,o);Ac.subVectors(e,s);const p=fs.dot(Ac),g=ds.dot(Ac);if(g>=0&&p<=g)return t.copy(s);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ds,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Vm.subVectors(s,r),a=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(Vm,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Pc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Wh(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Pc(o,s,e+1/3),this.g=Pc(o,s,e),this.b=Pc(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=yv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return je.workingToColorSpace(Kt.copy(this),e),Math.round(Ge(Kt.r*255,0,255))*65536+Math.round(Ge(Kt.g*255,0,255))*256+Math.round(Ge(Kt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Gt){je.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Ja);const i=Yo(er.h,Ja.h,t),r=Yo(er.s,Ja.s,t),s=Yo(er.l,Ja.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ue;Ue.NAMES=yv;let VM=0;class _i extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Os,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Wf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gf&&(i.blendSrc=this.blendSrc),this.blendDst!==Wf&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ui extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new F,Qa=new Ye;let HM=0;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nd,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nd&&(e.usage=this.usage),e}}class Sv extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mv extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qn extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let GM=0;const Pn=new Be,Lc=new St,hs=new F,yn=new qi,Eo=new qi,kt=new F;class zn extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_v(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(yn.min,Eo.min),yn.expandByPoint(kt),kt.addVectors(yn.max,Eo.max),yn.expandByPoint(kt)):(yn.expandByPoint(Eo.min),yn.expandByPoint(Eo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)kt.fromBufferAttribute(a,u),l&&(hs.fromBufferAttribute(e,u),kt.add(hs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new F,l[C]=new F;const u=new F,c=new F,f=new F,d=new Ye,p=new Ye,g=new Ye,v=new F,m=new F;function h(C,M,T){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,T),c.sub(u),f.sub(u),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[C].add(v),a[M].add(v),a[T].add(v),l[C].add(m),l[M].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,M=_.length;C<M;++C){const T=_[C],L=T.start,H=T.count;for(let B=L,K=L+H;B<K;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new F,S=new F,w=new F,A=new F;function R(C){w.fromBufferAttribute(r,C),A.copy(w);const M=a[C];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(A,M);const L=S.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,M=_.length;C<M;++C){const T=_[C],L=T.start,H=T.count;for(let B=L,K=L+H;B<K;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new sn(d,c,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hm=new Be,Pr=new Lu,el=new Si,Gm=new F,tl=new F,nl=new F,il=new F,Ic=new F,rl=new F,Wm=new F,sl=new F;class An extends St{constructor(e=new zn,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ic.fromBufferAttribute(f,e),o?rl.addScaledVector(Ic,c):rl.addScaledVector(Ic.sub(t),c))}t.add(rl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(el.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(el,Gm)===null||Pr.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Hm.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Hm),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,w=x;S<w;S+=3){const A=a.getX(S),R=a.getX(S+1),C=a.getX(S+2);r=ol(this,h,e,i,u,c,f,A,R,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=ol(this,o,e,i,u,c,f,_,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,w=x;S<w;S+=3){const A=S,R=S+1,C=S+2;r=ol(this,h,e,i,u,c,f,A,R,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,x=m+1,S=m+2;r=ol(this,o,e,i,u,c,f,_,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function WM(n,e,t,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;sl.copy(a),sl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(sl);return u<t.near||u>t.far?null:{distance:u,point:sl.clone(),object:n}}function ol(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,tl),n.getVertexPosition(l,nl),n.getVertexPosition(u,il);const c=WM(n,e,t,i,tl,nl,il,Wm);if(c){const f=new F;Kn.getBarycoord(Wm,tl,nl,il,f),r&&(c.uv=Kn.getInterpolatedAttribute(r,a,l,u,f,new Ye)),s&&(c.uv1=Kn.getInterpolatedAttribute(s,a,l,u,f,new Ye)),o&&(c.normal=Kn.getInterpolatedAttribute(o,a,l,u,f,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new F,materialIndex:0};Kn.getNormal(tl,nl,il,d.normal),c.face=d,c.barycoord=f}return c}class Ta extends zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qn(u,3)),this.setAttribute("normal",new Qn(c,3)),this.setAttribute("uv",new Qn(f,2));function g(v,m,h,_,x,S,w,A,R,C,M){const T=S/R,L=w/C,H=S/2,B=w/2,K=A/2,Y=R+1,W=C+1;let z=0,U=0;const $=new F;for(let q=0;q<W;q++){const ie=q*L-B;for(let we=0;we<Y;we++){const Ne=we*T-H;$[v]=Ne*_,$[m]=ie*x,$[h]=K,u.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[h]=A>0?1:-1,c.push($.x,$.y,$.z),f.push(we/R),f.push(1-q/C),z+=1}}for(let q=0;q<C;q++)for(let ie=0;ie<R;ie++){const we=d+ie+Y*q,Ne=d+ie+Y*(q+1),Je=d+(ie+1)+Y*(q+1),et=d+(ie+1)+Y*q;l.push(we,Ne,et),l.push(Ne,Je,et),U+=6}a.addGroup(p,U,M),p+=U,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Js(n[t]);for(const r in i)e[r]=i[r]}return e}function XM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ev(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const jM={clone:Js,merge:tn};var YM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YM,this.fragmentShader=qM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=XM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Tv extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new F,Xm=new Ye,jm=new Ye;class Zt extends Tv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,jm),t.subVectors(jm,Xm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class KM extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(ps,ms,e,t);r.layers=this.layers,this.add(r);const s=new Zt(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new Zt(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new Zt(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new Zt(ps,ms,e,t);l.layers=this.layers,this.add(l);const u=new Zt(ps,ms,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wv extends Vt{constructor(e=[],t=Jr,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Av extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ta(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ki});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Dt),new KM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Wr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(u,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($M)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rv extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ZM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nd,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new F;class jh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ym=new F,qm=new gt,Km=new gt,JM=new F,$m=new Be,al=new F,Dc=new Si,Zm=new Be,Uc=new Lu;class QM extends An{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Em,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,al),this.boundingBox.expandByPoint(al)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,al),this.boundingSphere.expandByPoint(al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dc.copy(this.boundingSphere),Dc.applyMatrix4(r),e.ray.intersectsSphere(Dc)!==!1&&(Zm.copy(r).invert(),Uc.copy(e.ray).applyMatrix4(Zm),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Em?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ZS?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;qm.fromBufferAttribute(r.attributes.skinIndex,e),Km.fromBufferAttribute(r.attributes.skinWeight,e),Ym.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Km.getComponent(s);if(o!==0){const a=qm.getComponent(s);$m.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(JM.copy(Ym).applyMatrix4($m),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bv extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yh extends Vt{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Nt,c=Nt,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jm=new Be,eE=new Be;class qh{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:eE;Jm.multiplyMatrices(a,t[s]),Jm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new qh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Yh(t,e,e,Fn,Un);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(Re("Skeleton: No bone found with UUID:",s),o=new bv),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Dd extends sn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new Be,Qm=new Be,ll=[],eg=new qi,tE=new Be,To=new An,wo=new Si;class nE extends An{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,tE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),eg.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(eg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),wo.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gs),Qm.multiplyMatrices(i,gs),To.matrixWorld=Qm,To.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){const l=ll[o];l.instanceId=s,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yh(new Float32Array(r*this.count),r,this.count,kh,Un));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fc=new F,iE=new F,rE=new Oe;class Or{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fc.subVectors(i,t).cross(iE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rE.getNormalMatrix(e),r=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Si,sE=new Ye(.5,.5),ul=new F;class Kh{constructor(e=new Or,t=new Or,i=new Or,r=new Or,s=new Or,o=new Or){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],f=s[5],d=s[6],p=s[7],g=s[8],v=s[9],m=s[10],h=s[11],_=s[12],x=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-o,p-c,h-g,w-_).normalize(),r[1].setComponents(u+o,p+c,h+g,w+_).normalize(),r[2].setComponents(u+a,p+f,h+v,w+x).normalize(),r[3].setComponents(u-a,p-f,h-v,w-x).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(u-l,p-d,h-m,w-S).normalize();else if(r[4].setComponents(u-l,p-d,h-m,w-S).normalize(),t===fi)r[5].setComponents(u+l,p+d,h+m,w+S).normalize();else if(t===lu)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const t=sE.distanceTo(e.center);return Lr.radius=.7071067811865476+t,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cv extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new F,fu=new F,tg=new Be,Ao=new Lu,cl=new Si,Oc=new F,ng=new F;class $h extends St{constructor(e=new zn,t=new Cv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)cu.fromBufferAttribute(t,r-1),fu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=cu.distanceTo(fu);e.setAttribute("lineDistance",new Qn(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;tg.copy(r).invert(),Ao.copy(e.ray).applyMatrix4(tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=u){const h=c.getX(v),_=c.getX(v+1),x=fl(this,e,Ao,l,h,_,v);x&&t.push(x)}if(this.isLineLoop){const v=c.getX(g-1),m=c.getX(p),h=fl(this,e,Ao,l,v,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=u){const h=fl(this,e,Ao,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=fl(this,e,Ao,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fl(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(cu.fromBufferAttribute(a,r),fu.fromBufferAttribute(a,s),t.distanceSqToSegment(cu,fu,Oc,ng)>i)return;Oc.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Oc);if(!(u<e.near||u>e.far))return{distance:u,point:ng.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const ig=new F,rg=new F;class oE extends $h{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ig.fromBufferAttribute(t,r),rg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ig.distanceTo(rg);e.setAttribute("lineDistance",new Qn(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aE extends $h{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pv extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sg=new Be,Ud=new Lu,dl=new Si,hl=new F;class lE extends St{constructor(e=new zn,t=new Pv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(r),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;sg.copy(r).invert(),Ud.copy(e.ray).applyMatrix4(sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=u.getX(g);hl.fromBufferAttribute(f,m),og(hl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)hl.fromBufferAttribute(f,g),og(hl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function og(n,e,t,i,r,s,o){const a=Ud.distanceSqToPoint(n);if(a<t){const l=new F;Ud.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class va extends Vt{constructor(e,t,i=vi,r,s,o,a=Nt,l=Nt,u,c=ji,f=1){if(c!==ji&&c!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uE extends va{constructor(e,t=vi,i=Jr,r,s,o=Nt,a=Nt,l,u=ji){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lv extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Iu extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<c;h++){const _=h*d-o;for(let x=0;x<u;x++){const S=x*f-s;g.push(S,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const x=_+u*h,S=_+u*(h+1),w=_+1+u*(h+1),A=_+1+u*h;p.push(x,S,A),p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new Qn(g,3)),this.setAttribute("normal",new Qn(v,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class cE extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zh extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gv,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mi extends Zh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fE extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dE extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function pl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function ag(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Iv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class wa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pE extends wa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tm,endingEnd:Tm}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case wm:s=e,a=2*t-i;break;case Am:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wm:o=e,l=2*i-t;break;case Am:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,h=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,S=p*m-p*v;for(let w=0;w!==a;++w)s[w]=h*o[c+w]+_*o[u+w]+x*o[l+w]+S*o[f+w];return s}}class mE extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),f=1-c;for(let d=0;d!==a;++d)s[d]=o[u+d]*f+o[l+d]*c;return s}}class gE extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pl(t,this.TimeBufferType),this.values=pl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pl(e.times,Array),values:pl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Le("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lM(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){Le("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===dc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=ma;class oo extends ti{constructor(e,t,i){super(e,t,i)}}oo.prototype.ValueTypeName="bool";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=pa;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class Nv extends ti{constructor(e,t,i,r){super(e,t,i,r)}}Nv.prototype.ValueTypeName="color";class Qs extends ti{constructor(e,t,i,r){super(e,t,i,r)}}Qs.prototype.ValueTypeName="number";class _E extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let c=u+a;u!==c;u+=4)wr.slerpFlat(s,0,o,u-a,o,u,l);return s}}class eo extends ti{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new _E(this.times,this.values,this.getValueSize(),e)}}eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends ti{constructor(e,t,i){super(e,t,i)}}ao.prototype.ValueTypeName="string";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=pa;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends ti{constructor(e,t,i,r){super(e,t,i,r)}}to.prototype.ValueTypeName="vector";class vE{constructor(e="",t=-1,i=[],r=JS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(yE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(ti.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const c=hE(l);l=ag(l,1,c),u=ag(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new Qs(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let d=r[f];d||(r[f]=d=[]),d.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Le("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,g,v){if(p.length!==0){const m=[],h=[];Iv(p,m,h,g),m.length!==0&&v.push(new f(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],h=[];for(let _=0;_!==d[g].morphTargets.length;++_){const x=d[g];m.push(x.time),h.push(x.morphTarget===v?1:0)}r.push(new Qs(".morphTargetInfluence["+v+"]",m,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(to,p+".position",d,"pos",r),i(eo,p+".quaternion",d,"rot",r),i(to,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qs;case"vector":case"vector2":case"vector3":case"vector4":return to;case"color":return Nv;case"quaternion":return eo;case"bool":case"boolean":return oo;case"string":return ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function yE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xE(n.type);if(n.times===void 0){const t=[],i=[];Iv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Fi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class SE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ME=new SE;class lo{constructor(e){this.manager=e!==void 0?e:ME,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class EE extends Error{constructor(e,t){super(e),this.response=t}}class Dv extends lo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:i,onError:r});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=Ci[e],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){_();function _(){f.read().then(({done:x,value:S})=>{if(x)h.close();else{v+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,R=c.length;A<R;A++){const C=c[A];C.onProgress&&C.onProgress(w)}h.enqueue(S),_()}},x=>{h.error(x)})}}});return new Response(m)}else throw new EE(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{Fi.add(`file:${e}`,u);const c=Ci[e];delete Ci[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=Ci[e];if(c===void 0)throw this.manager.itemError(e),u;delete Ci[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _s=new WeakMap;class TE extends lo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=_s.get(o);f===void 0&&(f=[],_s.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=ga("img");function l(){c(),t&&t(this);const f=_s.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}_s.delete(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),Fi.remove(`image:${e}`);const d=_s.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(f)}_s.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class wE extends lo{constructor(e){super(e)}load(e,t,i,r){const s=new Vt,o=new TE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Nu extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kc=new Be,lg=new F,ug=new F;class Jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),t.position.copy(lg),ug.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ug),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AE extends Jh{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Zs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RE extends Nu{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new AE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class bE extends Jh{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class CE extends Nu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Du extends Tv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class PE extends Jh{constructor(){super(new Du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LE extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new PE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Uv extends Nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Bc=new WeakMap;class IE extends lo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(u=>{if(Bc.has(o)===!0)r&&r(Bc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(u),s.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Fi.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Bc.set(l,u),Fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Fi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class NE extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qh="\\[\\]\\.:\\/",DE=new RegExp("["+Qh+"]","g"),ep="[^"+Qh+"]",UE="[^"+Qh.replace("\\.","")+"]",FE=/((?:WC+[\/:])*)/.source.replace("WC",ep),OE=/(WCOD+)?/.source.replace("WCOD",UE),kE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ep),BE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ep),zE=new RegExp("^"+FE+OE+kE+BE+"$"),VE=["material","materials","bones","map"];class HE{constructor(e,t,i){const r=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DE,"")}static parseTrackName(e){const t=zE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);VE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=HE;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function cg(n,e,t,i){const r=GE(i);switch(t){case hv:return n*e;case kh:return n*e/r.components*r.byteLength;case Bh:return n*e/r.components*r.byteLength;case $s:return n*e*2/r.components*r.byteLength;case zh:return n*e*2/r.components*r.byteLength;case pv:return n*e*3/r.components*r.byteLength;case Fn:return n*e*4/r.components*r.byteLength;case Vh:return n*e*4/r.components*r.byteLength;case Ll:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(n,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(n,8)*Math.max(e,8)/2;case rd:case sd:case ad:case ld:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case od:case ud:case cd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wd:case Ad:case Rd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bd:case Cd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pd:case Ld:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GE(n){switch(n){case Mn:case uv:return{byteLength:1,components:1};case da:case cv:case Xi:return{byteLength:2,components:1};case Fh:case Oh:return{byteLength:2,components:4};case vi:case Uh:case Un:return{byteLength:4,components:1};case fv:case dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WE(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",MT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:XE,alphahash_pars_fragment:jE,alphamap_fragment:YE,alphamap_pars_fragment:qE,alphatest_fragment:KE,alphatest_pars_fragment:$E,aomap_fragment:ZE,aomap_pars_fragment:JE,batching_pars_vertex:QE,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:rT,bumpmap_pars_fragment:sT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:uT,color_fragment:cT,color_pars_fragment:fT,color_pars_vertex:dT,color_vertex:hT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:_T,displacementmap_vertex:vT,emissivemap_fragment:xT,emissivemap_pars_fragment:yT,colorspace_fragment:ST,colorspace_pars_fragment:MT,envmap_fragment:ET,envmap_common_pars_fragment:TT,envmap_pars_fragment:wT,envmap_pars_vertex:AT,envmap_physical_pars_fragment:OT,envmap_vertex:RT,fog_vertex:bT,fog_pars_vertex:CT,fog_fragment:PT,fog_pars_fragment:LT,gradientmap_pars_fragment:IT,lightmap_pars_fragment:NT,lights_lambert_fragment:DT,lights_lambert_pars_fragment:UT,lights_pars_begin:FT,lights_toon_fragment:kT,lights_toon_pars_fragment:BT,lights_phong_fragment:zT,lights_phong_pars_fragment:VT,lights_physical_fragment:HT,lights_physical_pars_fragment:GT,lights_fragment_begin:WT,lights_fragment_maps:XT,lights_fragment_end:jT,logdepthbuf_fragment:YT,logdepthbuf_pars_fragment:qT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:$T,map_fragment:ZT,map_pars_fragment:JT,map_particle_fragment:QT,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphinstance_vertex:i1,morphcolor_vertex:r1,morphnormal_vertex:s1,morphtarget_pars_vertex:o1,morphtarget_vertex:a1,normal_fragment_begin:l1,normal_fragment_maps:u1,normal_pars_fragment:c1,normal_pars_vertex:f1,normal_vertex:d1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:g1,iridescence_pars_fragment:_1,opaque_fragment:v1,packing:x1,premultiplied_alpha_fragment:y1,project_vertex:S1,dithering_fragment:M1,dithering_pars_fragment:E1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:A1,shadowmap_pars_vertex:R1,shadowmap_vertex:b1,shadowmask_pars_fragment:C1,skinbase_vertex:P1,skinning_pars_vertex:L1,skinning_vertex:I1,skinnormal_vertex:N1,specularmap_fragment:D1,specularmap_pars_fragment:U1,tonemapping_fragment:F1,tonemapping_pars_fragment:O1,transmission_fragment:k1,transmission_pars_fragment:B1,uv_pars_fragment:z1,uv_pars_vertex:V1,uv_vertex:H1,worldpos_vertex:G1,background_vert:W1,background_frag:X1,backgroundCube_vert:j1,backgroundCube_frag:Y1,cube_vert:q1,cube_frag:K1,depth_vert:$1,depth_frag:Z1,distance_vert:J1,distance_frag:Q1,equirect_vert:ew,equirect_frag:tw,linedashed_vert:nw,linedashed_frag:iw,meshbasic_vert:rw,meshbasic_frag:sw,meshlambert_vert:ow,meshlambert_frag:aw,meshmatcap_vert:lw,meshmatcap_frag:uw,meshnormal_vert:cw,meshnormal_frag:fw,meshphong_vert:dw,meshphong_frag:hw,meshphysical_vert:pw,meshphysical_frag:mw,meshtoon_vert:gw,meshtoon_frag:_w,points_vert:vw,points_frag:xw,shadow_vert:yw,shadow_frag:Sw,sprite_vert:Mw,sprite_frag:Ew},ce={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ai={basic:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:tn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:tn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:tn([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:tn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:tn([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:tn([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:tn([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:tn([ce.lights,ce.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ai.physical={uniforms:tn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ml={r:0,b:0,g:0},Ir=new xi,Tw=new Be;function ww(n,e,t,i,r,s,o){const a=new Ue(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function v(x){let S=!1;const w=g(x);w===null?h(a,l):w&&w.isColor&&(h(w,1),S=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===Pu)?(c===void 0&&(c=new An(new Ta(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Js(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ir.copy(S.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(Ir)),c.material.toneMapped=je.getTransfer(w.colorSpace)!==rt,(f!==w||d!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new An(new Iu(2,2),new yi({name:"BackgroundMaterial",uniforms:Js(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=je.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,S){x.getRGB(ml,Ev(n)),i.buffers.color.setClear(ml.r,ml.g,ml.b,S,o)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:v,addToRenderList:m,dispose:_}}function Aw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(T,L,H,B,K){let Y=!1;const W=f(B,H,L);s!==W&&(s=W,u(s.object)),Y=p(T,B,H,K),Y&&g(T,B,H,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(T,L,H,B),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function u(T){return n.bindVertexArray(T)}function c(T){return n.deleteVertexArray(T)}function f(T,L,H){const B=H.wireframe===!0;let K=i[T.id];K===void 0&&(K={},i[T.id]=K);let Y=K[L.id];Y===void 0&&(Y={},K[L.id]=Y);let W=Y[B];return W===void 0&&(W=d(l()),Y[B]=W),W}function d(T){const L=[],H=[],B=[];for(let K=0;K<t;K++)L[K]=0,H[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:T,attributes:{},index:null}}function p(T,L,H,B){const K=s.attributes,Y=L.attributes;let W=0;const z=H.getAttributes();for(const U in z)if(z[U].location>=0){const q=K[U];let ie=Y[U];if(ie===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function g(T,L,H,B){const K={},Y=L.attributes;let W=0;const z=H.getAttributes();for(const U in z)if(z[U].location>=0){let q=Y[U];q===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(q=T.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),K[U]=ie,W++}s.attributes=K,s.attributesNum=W,s.index=B}function v(){const T=s.newAttributes;for(let L=0,H=T.length;L<H;L++)T[L]=0}function m(T){h(T,0)}function h(T,L){const H=s.newAttributes,B=s.enabledAttributes,K=s.attributeDivisors;H[T]=1,B[T]===0&&(n.enableVertexAttribArray(T),B[T]=1),K[T]!==L&&(n.vertexAttribDivisor(T,L),K[T]=L)}function _(){const T=s.newAttributes,L=s.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==T[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function x(T,L,H,B,K,Y,W){W===!0?n.vertexAttribIPointer(T,L,H,K,Y):n.vertexAttribPointer(T,L,H,B,K,Y)}function S(T,L,H,B){v();const K=B.attributes,Y=H.getAttributes(),W=L.defaultAttributeValues;for(const z in Y){const U=Y[z];if(U.location>=0){let $=K[z];if($===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),$!==void 0){const q=$.normalized,ie=$.itemSize,we=e.get($);if(we===void 0)continue;const Ne=we.buffer,Je=we.type,et=we.bytesPerElement,X=Je===n.INT||Je===n.UNSIGNED_INT||$.gpuType===Uh;if($.isInterleavedBufferAttribute){const Q=$.data,_e=Q.stride,Fe=$.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<U.locationSize;ye++)h(U.location+ye,Q.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<U.locationSize;ye++)m(U.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ye=0;ye<U.locationSize;ye++)x(U.location+ye,ie/U.locationSize,Je,q,_e*et,(Fe+ie/U.locationSize*ye)*et,X)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<U.locationSize;Q++)h(U.location+Q,$.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<U.locationSize;Q++)m(U.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Q=0;Q<U.locationSize;Q++)x(U.location+Q,ie/U.locationSize,Je,q,ie*et,ie/U.locationSize*Q*et,X)}}else if(W!==void 0){const q=W[z];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(U.location,q);break;case 3:n.vertexAttrib3fv(U.location,q);break;case 4:n.vertexAttrib4fv(U.location,q);break;default:n.vertexAttrib1fv(U.location,q)}}}}_()}function w(){C();for(const T in i){const L=i[T];for(const H in L){const B=L[H];for(const K in B)c(B[K].object),delete B[K];delete L[H]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const L=i[T.id];for(const H in L){const B=L[H];for(const K in B)c(B[K].object),delete B[K];delete L[H]}delete i[T.id]}function R(T){for(const L in i){const H=i[L];if(H[T.id]===void 0)continue;const B=H[T.id];for(const K in B)c(B[K].object),delete B[K];delete H[T.id]}}function C(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Rw(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];t.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=c[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Un&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Re("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:A}}function Cw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Or,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,x=_*4;let S=h.clippingState||null;l.value=S,S=c(g,d,x,p);for(let w=0;w!==x;++w)S[w]=t[w];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Pw(n){let e=new WeakMap;function t(o,a){return a===Jf?o.mapping=Jr:a===Qf&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jf||a===Qf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Av(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const cr=4,fg=[.125,.215,.35,.446,.526,.582],Br=20,Lw=256,Ro=new Du,dg=new Ue;let zc=null,Vc=0,Hc=0,Gc=!1;const Iw=new F;class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Iw}=s;zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Vc,Hc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Xi,format:Fn,colorSpace:on,depthBuffer:!1},r=pg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nw(s)),this._blurMaterial=Uw(s,e,t),this._ggxMaterial=Dw(s,e,t)}return r}_compileMaterial(e){const t=new An(new zn,e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,r,s){const l=new Zt(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(dg),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new Ta,new Ui({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,h=!0):(m.color.copy(dg),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const w=this._cubeSize;vs(r,S*w,x>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Jr||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),d=0+u*1.25,p=f*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-cr?i-g+cr:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,vs(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(a,Ro),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,vs(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(a,Ro)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),v=s/g,m=isFinite(s)?1+Math.floor(c*v):Br;m>Br&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const h=[];let _=0;for(let R=0;R<Br;++R){const C=R/v,M=Math.exp(-C*C/2);h.push(M),R===0?_+=M:R<m&&(_+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-cr?r-x+cr:0),A=4*(this._cubeSize-S);vs(t,w,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Ro)}}function Nw(n){const e=[],t=[],i=[];let r=n;const s=n-cr+1+fg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-cr?l=fg[o-n+cr-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,C=A>2?0:-1,M=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];_.set(M,v*g*A),x.set(d,m*g*A);const T=[A,A,A,A,A,A];S.set(T,h*g*A)}const w=new zn;w.setAttribute("position",new sn(_,v)),w.setAttribute("uv",new sn(x,m)),w.setAttribute("faceIndex",new sn(S,h)),i.push(new An(w,null)),r>cr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function pg(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dw(n,e,t){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Uw(n,e,t){const i=new Float32Array(Br),r=new F(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function mg(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function gg(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Jf||l===Qf,c=l===Jr||l===qs;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hg(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new hg(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ow(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_a("WebGLRenderer: "+i+" extension not supported."),r}}}function kw(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,S=_.length;x<S;x+=3){const w=_[x+0],A=_[x+1],R=_[x+2];d.push(w,A,A,R,R,w)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const w=x+0,A=x+1,R=x+2;d.push(w,A,A,R,R,w)}}else return;const m=new(_v(d)?Mv:Sv)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Bw(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function u(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_]*v[_];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function zw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Le("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Vw(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*f),C=new vv(R,w,A,f);C.type=Un,C.needsUpdate=!0;const M=S*4;for(let L=0;L<f;L++){const H=h[L],B=_[L],K=x[L],Y=w*A*4*L;for(let W=0;W<H.count;W++){const z=W*M;g===!0&&(r.fromBufferAttribute(H,W),R[Y+z+0]=r.x,R[Y+z+1]=r.y,R[Y+z+2]=r.z,R[Y+z+3]=0),v===!0&&(r.fromBufferAttribute(B,W),R[Y+z+4]=r.x,R[Y+z+5]=r.y,R[Y+z+6]=r.z,R[Y+z+7]=0),m===!0&&(r.fromBufferAttribute(K,W),R[Y+z+8]=r.x,R[Y+z+9]=r.y,R[Y+z+10]=r.z,R[Y+z+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ye(w,A)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Hw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Gw={[ev]:"LINEAR_TONE_MAPPING",[tv]:"REINHARD_TONE_MAPPING",[nv]:"CINEON_TONE_MAPPING",[iv]:"ACES_FILMIC_TONE_MAPPING",[sv]:"AGX_TONE_MAPPING",[ov]:"NEUTRAL_TONE_MAPPING",[rv]:"CUSTOM_TONE_MAPPING"};function Ww(n,e,t,i,r){const s=new gi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new gi(e,t,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),a=new zn;a.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qn([0,2,0,0,2,0],2));const l=new cE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new An(a,l),c=new Du(-1,1,1,-1,0,1);let f=null,d=null,p=!1,g,v=null,m=[],h=!1;this.setSize=function(_,x){s.setSize(_,x),o.setSize(_,x);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(_,x)}},this.setEffects=function(_){m=_,h=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(x,S)}},this.begin=function(_,x){if(p||_.toneMapping===mi&&m.length===0)return!1;if(v=x,x!==null){const S=x.width,w=x.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return h===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=mi,!0},this.hasRenderPass=function(){return h},this.end=function(_,x){_.toneMapping=g,p=!0;let S=s,w=o;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(_,w,S,x),R.needsSwap!==!1)){const C=S;S=w,w=C}}if(f!==_.outputColorSpace||d!==_.toneMapping){f=_.outputColorSpace,d=_.toneMapping,l.defines={},je.getTransfer(f)===rt&&(l.defines.SRGB_TRANSFER="");const A=Gw[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(v),_.render(u,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ov=new Vt,Fd=new va(1,1),kv=new vv,Bv=new NM,zv=new wv,_g=[],vg=[],xg=new Float32Array(16),yg=new Float32Array(9),Sg=new Float32Array(4);function uo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_g[r];if(s===void 0&&(s=new Float32Array(r),_g[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fu(n,e){let t=vg[e];t===void 0&&(t=new Int32Array(e),vg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function Kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,i))return;Sg.set(i),n.uniformMatrix2fv(this.addr,!1,Sg),Ft(t,i)}}function $w(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,i))return;yg.set(i),n.uniformMatrix3fv(this.addr,!1,yg),Ft(t,i)}}function Zw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,i))return;xg.set(i),n.uniformMatrix4fv(this.addr,!1,xg),Ft(t,i)}}function Jw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function eA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function tA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function nA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function rA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function sA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function oA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fd.compareFunction=t.isReversedDepthBuffer()?Gh:Hh,s=Fd):s=Ov,t.setTexture2D(e||s,r)}function aA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bv,r)}function lA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zv,r)}function uA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kv,r)}function cA(n){switch(n){case 5126:return Xw;case 35664:return jw;case 35665:return Yw;case 35666:return qw;case 35674:return Kw;case 35675:return $w;case 35676:return Zw;case 5124:case 35670:return Jw;case 35667:case 35671:return Qw;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return uA}}function fA(n,e){n.uniform1fv(this.addr,e)}function dA(n,e){const t=uo(e,this.size,2);n.uniform2fv(this.addr,t)}function hA(n,e){const t=uo(e,this.size,3);n.uniform3fv(this.addr,t)}function pA(n,e){const t=uo(e,this.size,4);n.uniform4fv(this.addr,t)}function mA(n,e){const t=uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gA(n,e){const t=uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _A(n,e){const t=uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vA(n,e){n.uniform1iv(this.addr,e)}function xA(n,e){n.uniform2iv(this.addr,e)}function yA(n,e){n.uniform3iv(this.addr,e)}function SA(n,e){n.uniform4iv(this.addr,e)}function MA(n,e){n.uniform1uiv(this.addr,e)}function EA(n,e){n.uniform2uiv(this.addr,e)}function TA(n,e){n.uniform3uiv(this.addr,e)}function wA(n,e){n.uniform4uiv(this.addr,e)}function AA(n,e,t){const i=this.cache,r=e.length,s=Fu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fd:o=Ov;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function RA(n,e,t){const i=this.cache,r=e.length,s=Fu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bv,s[o])}function bA(n,e,t){const i=this.cache,r=e.length,s=Fu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zv,s[o])}function CA(n,e,t){const i=this.cache,r=e.length,s=Fu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kv,s[o])}function PA(n){switch(n){case 5126:return fA;case 35664:return dA;case 35665:return hA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return _A;case 5124:case 35670:return vA;case 35667:case 35671:return xA;case 35668:case 35672:return yA;case 35669:case 35673:return SA;case 5125:return MA;case 36294:return EA;case 36295:return TA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return CA}}class LA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cA(t.type)}}class IA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PA(t.type)}}class NA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function Mg(n,e){n.seq.push(e),n.map[e.id]=e}function DA(n,e,t){const i=n.name,r=i.length;for(Wc.lastIndex=0;;){const s=Wc.exec(i),o=Wc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Mg(t,u===void 0?new LA(a,n,e):new IA(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new NA(a),Mg(t,f)),t=f}}}class Ul{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);DA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Eg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const UA=37297;let FA=0;function OA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Tg=new Oe;function kA(n){je._getMatrix(Tg,je.workingColorSpace,n);const e=`mat3( ${Tg.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case au:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+OA(n.getShaderSource(e),a)}else return s}function BA(n,e){const t=kA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zA={[ev]:"Linear",[tv]:"Reinhard",[nv]:"Cineon",[iv]:"ACESFilmic",[sv]:"AgX",[ov]:"Neutral",[rv]:"Custom"};function VA(n,e){const t=zA[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gl=new F;function HA(){je.getLuminanceCoefficients(gl);const n=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function WA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fo(n){return n!==""}function Ag(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(n){return n.replace(jA,qA)}const YA=new Map;function qA(n,e){let t=ke[e];if(t===void 0){const i=YA.get(e);if(i!==void 0)t=ke[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Od(t)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bg(n){return n.replace(KA,$A)}function $A(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZA={[Cl]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function JA(n){return ZA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QA={[Jr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function eR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":QA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const tR={[qs]:"ENVMAP_MODE_REFRACTION"};function nR(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iR={[Q_]:"ENVMAP_BLENDING_MULTIPLY",[KS]:"ENVMAP_BLENDING_MIX",[$S]:"ENVMAP_BLENDING_ADD"};function rR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iR[n.combine]||"ENVMAP_BLENDING_NONE"}function sR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function oR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JA(t),u=eR(t),c=nR(t),f=rR(t),d=sR(t),p=GA(t),g=WA(s),v=r.createProgram();let m,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fo).join(`
`),h.length>0&&(h+=`
`)):(m=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),h=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ke.tonemapping_pars_fragment:"",t.toneMapping!==mi?VA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,BA("linearToOutputTexel",t.outputColorSpace),HA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Od(o),o=Ag(o,t),o=Rg(o,t),a=Od(a),a=Ag(a,t),a=Rg(a,t),o=bg(o),a=bg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=_+m+o,S=_+h+a,w=Eg(r,r.VERTEX_SHADER,x),A=Eg(r,r.FRAGMENT_SHADER,S);r.attachShader(v,w),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(w)||"",K=r.getShaderInfoLog(A)||"",Y=H.trim(),W=B.trim(),z=K.trim();let U=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,A);else{const q=wg(r,w,"vertex"),ie=wg(r,A,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+q+`
`+ie)}else Y!==""?Re("WebGLProgram: Program Info Log:",Y):(W===""||z==="")&&($=!1);$&&(L.diagnostics={runnable:U,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:z,prefix:h}})}r.deleteShader(w),r.deleteShader(A),C=new Ul(r,v),M=XA(r,v)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,UA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let aR=0;class lR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uR(e),t.set(e,i)),i}}class uR{constructor(e){this.id=aR++,this.code=e,this.usedTimes=0}}function cR(n,e,t,i,r,s,o){const a=new xv,l=new lR,u=new Set,c=[],f=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,T,L,H,B){const K=H.fog,Y=B.geometry,W=M.isMeshStandardMaterial?H.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),U=z&&z.mapping===Pu?z.image.height:null,$=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Re("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ie=q!==void 0?q.length:0;let we=0;Y.morphAttributes.position!==void 0&&(we=1),Y.morphAttributes.normal!==void 0&&(we=2),Y.morphAttributes.color!==void 0&&(we=3);let Ne,Je,et,X;if($){const nt=ai[$];Ne=nt.vertexShader,Je=nt.fragmentShader}else Ne=M.vertexShader,Je=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);const Q=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,ye=B.isBatchedMesh===!0,$e=!!M.map,Ot=!!M.matcap,qe=!!z,tt=!!M.aoMap,ut=!!M.lightMap,ze=!!M.bumpMap,Rt=!!M.normalMap,P=!!M.displacementMap,bt=!!M.emissiveMap,Qe=!!M.metalnessMap,ft=!!M.roughnessMap,Me=M.anisotropy>0,b=M.clearcoat>0,y=M.dispersion>0,N=M.iridescence>0,j=M.sheen>0,J=M.transmission>0,G=Me&&!!M.anisotropyMap,Te=b&&!!M.clearcoatMap,oe=b&&!!M.clearcoatNormalMap,Se=b&&!!M.clearcoatRoughnessMap,Ie=N&&!!M.iridescenceMap,ne=N&&!!M.iridescenceThicknessMap,le=j&&!!M.sheenColorMap,xe=j&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ae=!!M.specularColorMap,Ve=!!M.specularIntensityMap,I=J&&!!M.transmissionMap,de=J&&!!M.thicknessMap,re=!!M.gradientMap,he=!!M.alphaMap,ee=M.alphaTest>0,Z=!!M.alphaHash,se=!!M.extensions;let De=mi;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(De=n.toneMapping);const dt={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Ne,fragmentShader:Je,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ye,batchingColor:ye&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:on,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:Ot,envMap:qe,envMapMode:qe&&z.mapping,envMapCubeUVHeight:U,aoMap:tt,lightMap:ut,bumpMap:ze,normalMap:Rt,displacementMap:P,emissiveMap:bt,normalMapObjectSpace:Rt&&M.normalMapType===tM,normalMapTangentSpace:Rt&&M.normalMapType===gv,metalnessMap:Qe,roughnessMap:ft,anisotropy:Me,anisotropyMap:G,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:Se,dispersion:y,iridescence:N,iridescenceMap:Ie,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:le,sheenRoughnessMap:xe,specularMap:Ee,specularColorMap:ae,specularIntensityMap:Ve,transmission:J,transmissionMap:I,thicknessMap:de,gradientMap:re,opaque:M.transparent===!1&&M.blending===Os&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:ee,alphaHash:Z,combine:M.combine,mapUv:$e&&v(M.map.channel),aoMapUv:tt&&v(M.aoMap.channel),lightMapUv:ut&&v(M.lightMap.channel),bumpMapUv:ze&&v(M.bumpMap.channel),normalMapUv:Rt&&v(M.normalMap.channel),displacementMapUv:P&&v(M.displacementMap.channel),emissiveMapUv:bt&&v(M.emissiveMap.channel),metalnessMapUv:Qe&&v(M.metalnessMap.channel),roughnessMapUv:ft&&v(M.roughnessMap.channel),anisotropyMapUv:G&&v(M.anisotropyMap.channel),clearcoatMapUv:Te&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(M.sheenRoughnessMap.channel),specularMapUv:Ee&&v(M.specularMap.channel),specularColorMapUv:ae&&v(M.specularColorMap.channel),specularIntensityMapUv:Ve&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:de&&v(M.thicknessMap.channel),alphaMapUv:he&&v(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Rt||Me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&($e||he),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:we,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:bt&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ui,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:se&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&M.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=u.has(1),dt.vertexUv2s=u.has(2),dt.vertexUv3s=u.has(3),u.clear(),dt}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)T.push(L),T.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(_(T,M),x(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const T=g[M.type];let L;if(T){const H=ai[T];L=jM.clone(H.uniforms)}else L=M.uniforms;return L}function w(M,T){let L=f.get(T);return L!==void 0?++L.usedTimes:(L=new oR(n,T,M,s),c.push(L),f.set(T,L)),L}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),f.delete(M.cacheKey),M.destroy()}}function R(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:C}}function fR(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function dR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||dR),i.length>1&&i.sort(d||Pg),r.length>1&&r.sort(d||Pg)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function hR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Lg,n.set(i,[o])):r>=s.length?(o=new Lg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ue};break;case"SpotLight":t={position:new F,direction:new F,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function mR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gR=0;function _R(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vR(n){const e=new pR,t=mR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new Be,o=new Be;function a(u){let c=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,_=0,x=0,S=0,w=0,A=0,R=0;u.sort(_R);for(let M=0,T=u.length;M<T;M++){const L=u[M],H=L.color,B=L.intensity,K=L.distance;let Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$s?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=H.r*B,f+=H.g*B,d+=H.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],B);R++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,U=t.get(L);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(H).multiplyScalar(B),W.distance=K,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[v]=W;const z=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,z.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=z.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=Y,S++}v++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const z=L.shadow,U=t.get(L);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[h]=W,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==_||C.numPointShadows!==x||C.numSpotShadows!==S||C.numSpotMaps!==w||C.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=_,C.numPointShadows=x,C.numSpotShadows=S,C.numSpotMaps=w,C.numLightProbes=R,i.version=gR++)}function l(u,c){let f=0,d=0,p=0,g=0,v=0;const m=c.matrixWorldInverse;for(let h=0,_=u.length;h<_;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Ig(n){const e=new vR(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xR(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ig(n),e.set(r,[a])):s>=o.length?(a=new Ig(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const yR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MR=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ER=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ng=new Be,bo=new F,Xc=new F;function TR(n,e,t){let i=new Kh;const r=new Ye,s=new Ye,o=new gt,a=new fE,l=new dE,u={},c=t.maxTextureSize,f={[Wi]:gn,[gn]:Wi,[ui]:ui},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:yR,fragmentShader:SR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new zn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new An(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let h=this.type;this.render=function(A,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===PS&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Cl);const M=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ki),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=h!==this.type;B&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Y=>Y.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Y=A.length;K<Y;K++){const W=A[K],z=W.shadow;if(z===void 0){Re("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const U=z.getFrameExtents();if(r.multiply(U),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,z.mapSize.y=s.y)),z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Do){if(W.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new gi(r.x,r.y,{format:$s,type:Xi,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new va(r.x,r.y,Un),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=ji,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nt,z.map.depthTexture.magFilter=Nt}else{W.isPointLight?(z.map=new Av(r.x),z.map.depthTexture=new uE(r.x,vi)):(z.map=new gi(r.x,r.y),z.map.depthTexture=new va(r.x,r.y,vi)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=ji;const q=n.state.buffers.depth.getReversed();this.type===Cl?(z.map.depthTexture.compareFunction=q?Gh:Hh,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nt,z.map.depthTexture.magFilter=Nt)}z.camera.updateProjectionMatrix()}const $=z.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<$;q++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,q),n.clear();else{q===0&&(n.setRenderTarget(z.map),n.clear());const ie=z.getViewport(q);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),H.viewport(o)}if(W.isPointLight){const ie=z.camera,we=z.matrix,Ne=W.distance||ie.far;Ne!==ie.far&&(ie.far=Ne,ie.updateProjectionMatrix()),bo.setFromMatrixPosition(W.matrixWorld),ie.position.copy(bo),Xc.copy(ie.position),Xc.add(MR[q]),ie.up.copy(ER[q]),ie.lookAt(Xc),ie.updateMatrixWorld(),we.makeTranslation(-bo.x,-bo.y,-bo.z),Ng.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ng,ie.coordinateSystem,ie.reversedDepth)}else z.updateMatrices(W);i=z.getFrustum(),S(R,C,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===Do&&_(z,C),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,T,L)};function _(A,R){const C=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gi(r.x,r.y,{format:$s,type:Xi})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,C,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,C,p,v,null)}function x(A,R,C,M){let T=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)T=L;else if(T=C.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const H=T.uuid,B=R.uuid;let K=u[H];K===void 0&&(K={},u[H]=K);let Y=K[B];Y===void 0&&(Y=T.clone(),K[B]=Y,R.addEventListener("dispose",w)),T=Y}if(T.visible=R.visible,T.wireframe=R.wireframe,M===Do?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=n.properties.get(T);H.light=C}return T}function S(A,R,C,M,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Do)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=e.update(A),K=A.material;if(Array.isArray(K)){const Y=B.groups;for(let W=0,z=Y.length;W<z;W++){const U=Y[W],$=K[U.materialIndex];if($&&$.visible){const q=x(A,$,M,T);A.onBeforeShadow(n,A,R,C,B,q,U),n.renderBufferDirect(C,null,B,q,A,U),A.onAfterShadow(n,A,R,C,B,q,U)}}}else if(K.visible){const Y=x(A,K,M,T);A.onBeforeShadow(n,A,R,C,B,Y,null),n.renderBufferDirect(C,null,B,Y,A,null),A.onAfterShadow(n,A,R,C,B,Y,null)}}const H=A.children;for(let B=0,K=H.length;B<K;B++)S(H[B],R,C,M,T)}function w(A){A.target.removeEventListener("dispose",w);for(const C in u){const M=u[C],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const wR={[Xf]:jf,[Yf]:$f,[qf]:Zf,[Ys]:Kf,[jf]:Xf,[$f]:Yf,[Zf]:qf,[Kf]:Ys};function AR(n,e){function t(){let I=!1;const de=new gt;let re=null;const he=new gt(0,0,0,0);return{setMask:function(ee){re!==ee&&!I&&(n.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){I=ee},setClear:function(ee,Z,se,De,dt){dt===!0&&(ee*=De,Z*=De,se*=De),de.set(ee,Z,se,De),he.equals(de)===!1&&(n.clearColor(ee,Z,se,De),he.copy(de))},reset:function(){I=!1,re=null,he.set(-1,0,0,0)}}}function i(){let I=!1,de=!1,re=null,he=null,ee=null;return{setReversed:function(Z){if(de!==Z){const se=e.get("EXT_clip_control");Z?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),de=Z;const De=ee;ee=null,this.setClear(De)}},getReversed:function(){return de},setTest:function(Z){Z?Q(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(Z){re!==Z&&!I&&(n.depthMask(Z),re=Z)},setFunc:function(Z){if(de&&(Z=wR[Z]),he!==Z){switch(Z){case Xf:n.depthFunc(n.NEVER);break;case jf:n.depthFunc(n.ALWAYS);break;case Yf:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case qf:n.depthFunc(n.EQUAL);break;case Kf:n.depthFunc(n.GEQUAL);break;case $f:n.depthFunc(n.GREATER);break;case Zf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Z}},setLocked:function(Z){I=Z},setClear:function(Z){ee!==Z&&(de&&(Z=1-Z),n.clearDepth(Z),ee=Z)},reset:function(){I=!1,re=null,he=null,ee=null,de=!1}}}function r(){let I=!1,de=null,re=null,he=null,ee=null,Z=null,se=null,De=null,dt=null;return{setTest:function(nt){I||(nt?Q(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(nt){de!==nt&&!I&&(n.stencilMask(nt),de=nt)},setFunc:function(nt,ni,Ei){(re!==nt||he!==ni||ee!==Ei)&&(n.stencilFunc(nt,ni,Ei),re=nt,he=ni,ee=Ei)},setOp:function(nt,ni,Ei){(Z!==nt||se!==ni||De!==Ei)&&(n.stencilOp(nt,ni,Ei),Z=nt,se=ni,De=Ei)},setLocked:function(nt){I=nt},setClear:function(nt){dt!==nt&&(n.clearStencil(nt),dt=nt)},reset:function(){I=!1,de=null,re=null,he=null,ee=null,Z=null,se=null,De=null,dt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,x=null,S=null,w=null,A=null,R=new Ue(0,0,0),C=0,M=!1,T=null,L=null,H=null,B=null,K=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),W=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),W=z>=2);let $=null,q={};const ie=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Ne=new gt().fromArray(ie),Je=new gt().fromArray(we);function et(I,de,re,he){const ee=new Uint8Array(4),Z=n.createTexture();n.bindTexture(I,Z),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<re;se++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(de+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return Z}const X={};X[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(Ys),ze(!1),Rt(xm),Q(n.CULL_FACE),tt(ki);function Q(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function _e(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Fe(I,de){return f[I]!==de?(n.bindFramebuffer(I,de),f[I]=de,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=de),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(I,de){let re=p,he=!1;if(I){re=d.get(de),re===void 0&&(re=[],d.set(de,re));const ee=I.textures;if(re.length!==ee.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,se=ee.length;Z<se;Z++)re[Z]=n.COLOR_ATTACHMENT0+Z;re.length=ee.length,he=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,he=!0);he&&n.drawBuffers(re)}function $e(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Ot={[kr]:n.FUNC_ADD,[IS]:n.FUNC_SUBTRACT,[NS]:n.FUNC_REVERSE_SUBTRACT};Ot[DS]=n.MIN,Ot[US]=n.MAX;const qe={[FS]:n.ZERO,[OS]:n.ONE,[kS]:n.SRC_COLOR,[Gf]:n.SRC_ALPHA,[WS]:n.SRC_ALPHA_SATURATE,[HS]:n.DST_COLOR,[zS]:n.DST_ALPHA,[BS]:n.ONE_MINUS_SRC_COLOR,[Wf]:n.ONE_MINUS_SRC_ALPHA,[GS]:n.ONE_MINUS_DST_COLOR,[VS]:n.ONE_MINUS_DST_ALPHA,[XS]:n.CONSTANT_COLOR,[jS]:n.ONE_MINUS_CONSTANT_COLOR,[YS]:n.CONSTANT_ALPHA,[qS]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(I,de,re,he,ee,Z,se,De,dt,nt){if(I===ki){v===!0&&(_e(n.BLEND),v=!1);return}if(v===!1&&(Q(n.BLEND),v=!0),I!==LS){if(I!==m||nt!==M){if((h!==kr||S!==kr)&&(n.blendEquation(n.FUNC_ADD),h=kr,S=kr),nt)switch(I){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ym:n.blendFunc(n.ONE,n.ONE);break;case Sm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Le("WebGLState: Invalid blending: ",I);break}else switch(I){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ym:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sm:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mm:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",I);break}_=null,x=null,w=null,A=null,R.set(0,0,0),C=0,m=I,M=nt}return}ee=ee||de,Z=Z||re,se=se||he,(de!==h||ee!==S)&&(n.blendEquationSeparate(Ot[de],Ot[ee]),h=de,S=ee),(re!==_||he!==x||Z!==w||se!==A)&&(n.blendFuncSeparate(qe[re],qe[he],qe[Z],qe[se]),_=re,x=he,w=Z,A=se),(De.equals(R)===!1||dt!==C)&&(n.blendColor(De.r,De.g,De.b,dt),R.copy(De),C=dt),m=I,M=!1}function ut(I,de){I.side===ui?_e(n.CULL_FACE):Q(n.CULL_FACE);let re=I.side===gn;de&&(re=!re),ze(re),I.blending===Os&&I.transparent===!1?tt(ki):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;a.setTest(he),he&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){T!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),T=I)}function Rt(I){I!==bS?(Q(n.CULL_FACE),I!==L&&(I===xm?n.cullFace(n.BACK):I===CS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),L=I}function P(I){I!==H&&(W&&n.lineWidth(I),H=I)}function bt(I,de,re){I?(Q(n.POLYGON_OFFSET_FILL),(B!==de||K!==re)&&(n.polygonOffset(de,re),B=de,K=re)):_e(n.POLYGON_OFFSET_FILL)}function Qe(I){I?Q(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function ft(I){I===void 0&&(I=n.TEXTURE0+Y-1),$!==I&&(n.activeTexture(I),$=I)}function Me(I,de,re){re===void 0&&($===null?re=n.TEXTURE0+Y-1:re=$);let he=q[re];he===void 0&&(he={type:void 0,texture:void 0},q[re]=he),(he.type!==I||he.texture!==de)&&($!==re&&(n.activeTexture(re),$=re),n.bindTexture(I,de||X[I]),he.type=I,he.texture=de)}function b(){const I=q[$];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function j(){try{n.texSubImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function J(){try{n.texSubImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function oe(){try{n.texStorage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function Se(){try{n.texStorage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function Ie(){try{n.texImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function ne(){try{n.texImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function le(I){Ne.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ne.copy(I))}function xe(I){Je.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Je.copy(I))}function Ee(I,de){let re=u.get(de);re===void 0&&(re=new WeakMap,u.set(de,re));let he=re.get(I);he===void 0&&(he=n.getUniformBlockIndex(de,I.name),re.set(I,he))}function ae(I,de){const he=u.get(de).get(I);l.get(de)!==he&&(n.uniformBlockBinding(de,he,I.__bindingPointIndex),l.set(de,he))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,q={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,x=null,S=null,w=null,A=null,R=new Ue(0,0,0),C=0,M=!1,T=null,L=null,H=null,B=null,K=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:_e,bindFramebuffer:Fe,drawBuffers:ye,useProgram:$e,setBlending:tt,setMaterial:ut,setFlipSided:ze,setCullFace:Rt,setLineWidth:P,setPolygonOffset:bt,setScissorTest:Qe,activeTexture:ft,bindTexture:Me,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:Ie,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:ae,texStorage2D:oe,texStorage3D:Se,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:Te,scissor:le,viewport:xe,reset:Ve}}function RR(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):ga("canvas")}function v(b,y,N){let j=1;const J=Me(b);if((J.width>N||J.height>N)&&(j=N/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(j*J.width),Te=Math.floor(j*J.height);f===void 0&&(f=g(G,Te));const oe=y?g(G,Te):f;return oe.width=G,oe.height=Te,oe.getContext("2d").drawImage(b,0,0,G,Te),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Te+")."),oe}else return"data"in b&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(b,y,N,j,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=y;if(y===n.RED&&(N===n.FLOAT&&(G=n.R32F),N===n.HALF_FLOAT&&(G=n.R16F),N===n.UNSIGNED_BYTE&&(G=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.R8UI),N===n.UNSIGNED_SHORT&&(G=n.R16UI),N===n.UNSIGNED_INT&&(G=n.R32UI),N===n.BYTE&&(G=n.R8I),N===n.SHORT&&(G=n.R16I),N===n.INT&&(G=n.R32I)),y===n.RG&&(N===n.FLOAT&&(G=n.RG32F),N===n.HALF_FLOAT&&(G=n.RG16F),N===n.UNSIGNED_BYTE&&(G=n.RG8)),y===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.RG8UI),N===n.UNSIGNED_SHORT&&(G=n.RG16UI),N===n.UNSIGNED_INT&&(G=n.RG32UI),N===n.BYTE&&(G=n.RG8I),N===n.SHORT&&(G=n.RG16I),N===n.INT&&(G=n.RG32I)),y===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.RGB8UI),N===n.UNSIGNED_SHORT&&(G=n.RGB16UI),N===n.UNSIGNED_INT&&(G=n.RGB32UI),N===n.BYTE&&(G=n.RGB8I),N===n.SHORT&&(G=n.RGB16I),N===n.INT&&(G=n.RGB32I)),y===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),N===n.UNSIGNED_INT&&(G=n.RGBA32UI),N===n.BYTE&&(G=n.RGBA8I),N===n.SHORT&&(G=n.RGBA16I),N===n.INT&&(G=n.RGBA32I)),y===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),y===n.RGBA){const Te=J?au:je.getTransfer(j);N===n.FLOAT&&(G=n.RGBA32F),N===n.HALF_FLOAT&&(G=n.RGBA16F),N===n.UNSIGNED_BYTE&&(G=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(b,y){let N;return b?y===null||y===vi||y===ha?N=n.DEPTH24_STENCIL8:y===Un?N=n.DEPTH32F_STENCIL8:y===da&&(N=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vi||y===ha?N=n.DEPTH_COMPONENT24:y===Un?N=n.DEPTH_COMPONENT32F:y===da&&(N=n.DEPTH_COMPONENT16),N}function w(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Nt&&b.minFilter!==Dt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function A(b){const y=b.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&c.delete(y)}function R(b){const y=b.target;y.removeEventListener("dispose",R),T(y)}function C(b){const y=i.get(b);if(y.__webglInit===void 0)return;const N=b.source,j=d.get(N);if(j){const J=j[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys(j).length===0&&d.delete(N)}i.remove(b)}function M(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const N=b.source,j=d.get(N);delete j[y.__cacheKey],o.memory.textures--}function T(b){const y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let J=0;J<y.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(y.__webglFramebuffer[j][J]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=b.textures;for(let j=0,J=N.length;j<J;j++){const G=i.get(N[j]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(N[j])}i.remove(b)}let L=0;function H(){L=0}function B(){const b=L;return b>=r.maxTextures&&Re("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function K(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Y(b,y){const N=i.get(b);if(b.isVideoTexture&&Qe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){const j=b.image;if(j===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,b,y);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function W(b,y){const N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){X(N,b,y);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function z(b,y){const N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){X(N,b,y);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function U(b,y){const N=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&N.__version!==b.version){Q(N,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}const $={[Ks]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[ou]:n.MIRRORED_REPEAT},q={[Nt]:n.NEAREST,[lv]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},ie={[nM]:n.NEVER,[aM]:n.ALWAYS,[iM]:n.LESS,[Hh]:n.LEQUAL,[rM]:n.EQUAL,[Gh]:n.GEQUAL,[sM]:n.GREATER,[oM]:n.NOTEQUAL};function we(b,y){if(y.type===Un&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Dt||y.magFilter===Pl||y.magFilter===Uo||y.magFilter===Di||y.minFilter===Dt||y.minFilter===Pl||y.minFilter===Uo||y.minFilter===Di)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,$[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,$[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,$[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,q[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nt||y.minFilter!==Uo&&y.minFilter!==Di||y.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(b,y){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const j=y.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const G=K(y);if(G!==b.__cacheKey){J[G]===void 0&&(J[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[G].usedTimes++;const Te=J[b.__cacheKey];Te!==void 0&&(J[b.__cacheKey].usedTimes--,Te.usedTimes===0&&M(y)),b.__cacheKey=G,b.__webglTexture=J[G].texture}return N}function Je(b,y,N){return Math.floor(Math.floor(b/N)/y)}function et(b,y,N,j){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,N,j,y.data);else{G.sort((ne,le)=>ne.start-le.start);let Te=0;for(let ne=1;ne<G.length;ne++){const le=G[Te],xe=G[ne],Ee=le.start+le.count,ae=Je(xe.start,y.width,4),Ve=Je(le.start,y.width,4);xe.start<=Ee+1&&ae===Ve&&Je(xe.start+xe.count-1,y.width,4)===ae?le.count=Math.max(le.count,xe.start+xe.count-le.start):(++Te,G[Te]=xe)}G.length=Te+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ne=0,le=G.length;ne<le;ne++){const xe=G[ne],Ee=Math.floor(xe.start/4),ae=Math.ceil(xe.count/4),Ve=Ee%y.width,I=Math.floor(Ee/y.width),de=ae,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ve,I,de,re,N,j,y.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function X(b,y,N){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const J=Ne(b,y),G=y.source;t.bindTexture(j,b.__webglTexture,n.TEXTURE0+N);const Te=i.get(G);if(G.version!==Te.__version||J===!0){t.activeTexture(n.TEXTURE0+N);const oe=je.getPrimaries(je.workingColorSpace),Se=y.colorSpace===ar?null:je.getPrimaries(y.colorSpace),Ie=y.colorSpace===ar||oe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ne=v(y.image,!1,r.maxTextureSize);ne=ft(y,ne);const le=s.convert(y.format,y.colorSpace),xe=s.convert(y.type);let Ee=x(y.internalFormat,le,xe,y.colorSpace,y.isVideoTexture);we(j,y);let ae;const Ve=y.mipmaps,I=y.isVideoTexture!==!0,de=Te.__version===void 0||J===!0,re=G.dataReady,he=w(y,ne);if(y.isDepthTexture)Ee=S(y.format===Gr,y.type),de&&(I?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,le,xe,null));else if(y.isDataTexture)if(Ve.length>0){I&&de&&t.texStorage2D(n.TEXTURE_2D,he,Ee,Ve[0].width,Ve[0].height);for(let ee=0,Z=Ve.length;ee<Z;ee++)ae=Ve[ee],I?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ae.width,ae.height,le,xe,ae.data):t.texImage2D(n.TEXTURE_2D,ee,Ee,ae.width,ae.height,0,le,xe,ae.data);y.generateMipmaps=!1}else I?(de&&t.texStorage2D(n.TEXTURE_2D,he,Ee,ne.width,ne.height),re&&et(y,ne,le,xe)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,le,xe,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ee,Ve[0].width,Ve[0].height,ne.depth);for(let ee=0,Z=Ve.length;ee<Z;ee++)if(ae=Ve[ee],y.format!==Fn)if(le!==null)if(I){if(re)if(y.layerUpdates.size>0){const se=cg(ae.width,ae.height,y.format,y.type);for(const De of y.layerUpdates){const dt=ae.data.subarray(De*se/ae.data.BYTES_PER_ELEMENT,(De+1)*se/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,De,ae.width,ae.height,1,le,dt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,ne.depth,le,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ee,ae.width,ae.height,ne.depth,0,ae.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,ne.depth,le,xe,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ee,ae.width,ae.height,ne.depth,0,le,xe,ae.data)}else{I&&de&&t.texStorage2D(n.TEXTURE_2D,he,Ee,Ve[0].width,Ve[0].height);for(let ee=0,Z=Ve.length;ee<Z;ee++)ae=Ve[ee],y.format!==Fn?le!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ee,ae.width,ae.height,0,ae.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ae.width,ae.height,le,xe,ae.data):t.texImage2D(n.TEXTURE_2D,ee,Ee,ae.width,ae.height,0,le,xe,ae.data)}else if(y.isDataArrayTexture)if(I){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ee,ne.width,ne.height,ne.depth),re)if(y.layerUpdates.size>0){const ee=cg(ne.width,ne.height,y.format,y.type);for(const Z of y.layerUpdates){const se=ne.data.subarray(Z*ee/ne.data.BYTES_PER_ELEMENT,(Z+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,le,xe,se)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,xe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,le,xe,ne.data);else if(y.isData3DTexture)I?(de&&t.texStorage3D(n.TEXTURE_3D,he,Ee,ne.width,ne.height,ne.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,xe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,le,xe,ne.data);else if(y.isFramebufferTexture){if(de)if(I)t.texStorage2D(n.TEXTURE_2D,he,Ee,ne.width,ne.height);else{let ee=ne.width,Z=ne.height;for(let se=0;se<he;se++)t.texImage2D(n.TEXTURE_2D,se,Ee,ee,Z,0,le,xe,null),ee>>=1,Z>>=1}}else if(Ve.length>0){if(I&&de){const ee=Me(Ve[0]);t.texStorage2D(n.TEXTURE_2D,he,Ee,ee.width,ee.height)}for(let ee=0,Z=Ve.length;ee<Z;ee++)ae=Ve[ee],I?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,le,xe,ae):t.texImage2D(n.TEXTURE_2D,ee,Ee,le,xe,ae);y.generateMipmaps=!1}else if(I){if(de){const ee=Me(ne);t.texStorage2D(n.TEXTURE_2D,he,Ee,ee.width,ee.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,xe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ee,le,xe,ne);m(y)&&h(j),Te.__version=G.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Q(b,y,N){if(y.image.length!==6)return;const j=Ne(b,y),J=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);const G=i.get(J);if(J.version!==G.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const Te=je.getPrimaries(je.workingColorSpace),oe=y.colorSpace===ar?null:je.getPrimaries(y.colorSpace),Se=y.colorSpace===ar||Te===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!Ie&&!ne?le[Z]=v(y.image[Z],!0,r.maxCubemapSize):le[Z]=ne?y.image[Z].image:y.image[Z],le[Z]=ft(y,le[Z]);const xe=le[0],Ee=s.convert(y.format,y.colorSpace),ae=s.convert(y.type),Ve=x(y.internalFormat,Ee,ae,y.colorSpace),I=y.isVideoTexture!==!0,de=G.__version===void 0||j===!0,re=J.dataReady;let he=w(y,xe);we(n.TEXTURE_CUBE_MAP,y);let ee;if(Ie){I&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ve,xe.width,xe.height);for(let Z=0;Z<6;Z++){ee=le[Z].mipmaps;for(let se=0;se<ee.length;se++){const De=ee[se];y.format!==Fn?Ee!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,Ve,De.width,De.height,0,De.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,De.width,De.height,Ee,ae,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,Ve,De.width,De.height,0,Ee,ae,De.data)}}}else{if(ee=y.mipmaps,I&&de){ee.length>0&&he++;const Z=Me(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,Ee,ae,le[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,le[Z].width,le[Z].height,0,Ee,ae,le[Z].data);for(let se=0;se<ee.length;se++){const dt=ee[se].image[Z].image;I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,dt.width,dt.height,Ee,ae,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,Ve,dt.width,dt.height,0,Ee,ae,dt.data)}}else{I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,ae,le[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Ee,ae,le[Z]);for(let se=0;se<ee.length;se++){const De=ee[se];I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Ee,ae,De.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,Ve,Ee,ae,De.image[Z])}}}m(y)&&h(n.TEXTURE_CUBE_MAP),G.__version=J.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function _e(b,y,N,j,J,G){const Te=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),Se=x(N.internalFormat,Te,oe,N.colorSpace),Ie=i.get(y),ne=i.get(N);if(ne.__renderTarget=y,!Ie.__hasExternalTextures){const le=Math.max(1,y.width>>G),xe=Math.max(1,y.height>>G);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,G,Se,le,xe,y.depth,0,Te,oe,null):t.texImage2D(J,G,Se,le,xe,0,Te,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),bt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,ne.__webglTexture,0,P(y)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,ne.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(b,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){const j=y.depthTexture,J=j&&j.isDepthTexture?j.type:null,G=S(y.stencilBuffer,J),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;bt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(y),G,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(y),G,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,G,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const j=y.textures;for(let J=0;J<j.length;J++){const G=j[J],Te=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Se=x(G.internalFormat,Te,oe,G.colorSpace);bt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(y),Se,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(y),Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(b,y,N){const j=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),we(n.TEXTURE_CUBE_MAP,y.depthTexture);const Ie=s.convert(y.depthTexture.format),ne=s.convert(y.depthTexture.type);let le;y.depthTexture.format===ji?le=n.DEPTH_COMPONENT24:y.depthTexture.format===Gr&&(le=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,y.width,y.height,0,Ie,ne,null)}}else Y(y.depthTexture,0);const G=J.__webglTexture,Te=P(y),oe=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Se=y.depthTexture.format===Gr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===ji)bt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,oe,G,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Se,oe,G,0);else if(y.depthTexture.format===Gr)bt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,oe,G,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Se,oe,G,0);else throw new Error("Unknown depthTexture format")}function $e(b){const y=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=j}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(N)for(let j=0;j<6;j++)ye(y.__webglFramebuffer[j],b,j);else{const j=b.texture.mipmaps;j&&j.length>0?ye(y.__webglFramebuffer[0],b,0):ye(y.__webglFramebuffer,b,0)}else if(N){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),Fe(y.__webglDepthbuffer[j],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,G)}}else{const j=b.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Fe(y.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(b,y,N){const j=i.get(b);y!==void 0&&_e(j.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&$e(b)}function qe(b){const y=b.texture,N=i.get(b),j=i.get(y);b.addEventListener("dispose",R);const J=b.textures,G=b.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),G){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let Se=0;Se<y.mipmaps.length;Se++)N.__webglFramebuffer[oe][Se]=n.createFramebuffer()}else N.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)N.__webglFramebuffer[oe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Te)for(let oe=0,Se=J.length;oe<Se;oe++){const Ie=i.get(J[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&bt(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Se=J[oe];N.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const Ie=s.convert(Se.format,Se.colorSpace),ne=s.convert(Se.type),le=x(Se.internalFormat,Ie,ne,Se.colorSpace,b.isXRRenderTarget===!0),xe=P(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,le,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),we(n.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)_e(N.__webglFramebuffer[oe][Se],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se);else _e(N.__webglFramebuffer[oe],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,Se=J.length;oe<Se;oe++){const Ie=J[oe],ne=i.get(Ie);let le=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),we(le,Ie),_e(N.__webglFramebuffer,b,Ie,n.COLOR_ATTACHMENT0+oe,le,0),m(Ie)&&h(le)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),we(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)_e(N.__webglFramebuffer[Se],b,y,n.COLOR_ATTACHMENT0,oe,Se);else _e(N.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,oe,0);m(y)&&h(oe),t.unbindTexture()}b.depthBuffer&&$e(b)}function tt(b){const y=b.textures;for(let N=0,j=y.length;N<j;N++){const J=y[N];if(m(J)){const G=_(b),Te=i.get(J).__webglTexture;t.bindTexture(G,Te),h(G),t.unbindTexture()}}}const ut=[],ze=[];function Rt(b){if(b.samples>0){if(bt(b)===!1){const y=b.textures,N=b.width,j=b.height;let J=n.COLOR_BUFFER_BIT;const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),oe=y.length>1;if(oe)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=b.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ie]);const ne=i.get(y[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,N,j,0,0,N,j,J,n.NEAREST),l===!0&&(ut.length=0,ze.length=0,ut.push(n.COLOR_ATTACHMENT0+Ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ut.push(G),ze.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ie]);const ne=i.get(y[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function P(b){return Math.min(r.maxSamples,b.samples)}function bt(b){const y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qe(b){const y=o.render.frame;c.get(b)!==y&&(c.set(b,y),b.update())}function ft(b,y){const N=b.colorSpace,j=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==on&&N!==ar&&(je.getTransfer(N)===rt?(j!==Fn||J!==Mn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",N)),y}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=U,this.rebindTextures=Ot,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bR(n,e){function t(i,r=ar){let s;const o=je.getTransfer(r);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Fh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uv)return n.BYTE;if(i===cv)return n.SHORT;if(i===da)return n.UNSIGNED_SHORT;if(i===Uh)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Xi)return n.HALF_FLOAT;if(i===hv)return n.ALPHA;if(i===pv)return n.RGB;if(i===Fn)return n.RGBA;if(i===ji)return n.DEPTH_COMPONENT;if(i===Gr)return n.DEPTH_STENCIL;if(i===kh)return n.RED;if(i===Bh)return n.RED_INTEGER;if(i===$s)return n.RG;if(i===zh)return n.RG_INTEGER;if(i===Vh)return n.RGBA_INTEGER;if(i===Ll||i===Il||i===Nl||i===Dl)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ed||i===td||i===nd||i===id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rd||i===sd||i===od||i===ad||i===ld||i===ud||i===cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rd||i===sd)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===od)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ad)return s.COMPRESSED_R11_EAC;if(i===ld)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ud)return s.COMPRESSED_RG11_EAC;if(i===cd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===yd||i===Sd||i===Md||i===Ed||i===Td)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===md)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_d)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Md)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Td)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wd||i===Ad||i===Rd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wd)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ad)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bd||i===Cd||i===Pd||i===Ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const CR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Lv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:CR,fragmentShader:PR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Iu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IR extends so{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new LR,h={},_=t.getContextAttributes();let x=null,S=null;const w=[],A=[],R=new Ye;let C=null;const M=new Zt;M.viewport=new gt;const T=new Zt;T.viewport=new gt;const L=[M,T],H=new NE;let B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=w[X];return Q===void 0&&(Q=new Nc,w[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=w[X];return Q===void 0&&(Q=new Nc,w[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=w[X];return Q===void 0&&(Q=new Nc,w[X]=Q),Q.getHandSpace()};function Y(X){const Q=A.indexOf(X.inputSource);if(Q===-1)return;const _e=w[Q];_e!==void 0&&(_e.update(X.inputSource,X.frame,u||o),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",z);for(let X=0;X<w.length;X++){const Q=A[X];Q!==null&&(A[X]=null,w[X].disconnect(Q))}B=null,K=null,m.reset();for(const X in h)delete h[X];e.setRenderTarget(x),p=null,d=null,f=null,r=null,S=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Fe=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=_.stencil?Gr:ji,Fe=_.stencil?ha:vi);const $e={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:Fn,type:Mn,depthTexture:new va(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new gi(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(X){for(let Q=0;Q<X.removed.length;Q++){const _e=X.removed[Q],Fe=A.indexOf(_e);Fe>=0&&(A[Fe]=null,w[Fe].disconnect(_e))}for(let Q=0;Q<X.added.length;Q++){const _e=X.added[Q];let Fe=A.indexOf(_e);if(Fe===-1){for(let $e=0;$e<w.length;$e++)if($e>=A.length){A.push(_e),Fe=$e;break}else if(A[$e]===null){A[$e]=_e,Fe=$e;break}if(Fe===-1)break}const ye=w[Fe];ye&&ye.connect(_e)}}const U=new F,$=new F;function q(X,Q,_e){U.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);const Fe=U.distanceTo($),ye=Q.projectionMatrix.elements,$e=_e.projectionMatrix.elements,Ot=ye[14]/(ye[10]-1),qe=ye[14]/(ye[10]+1),tt=(ye[9]+1)/ye[5],ut=(ye[9]-1)/ye[5],ze=(ye[8]-1)/ye[0],Rt=($e[8]+1)/$e[0],P=Ot*ze,bt=Ot*Rt,Qe=Fe/(-ze+Rt),ft=Qe*-ze;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ft),X.translateZ(Qe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ye[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Me=Ot+Qe,b=qe+Qe,y=P-ft,N=bt+(Fe-ft),j=tt*qe/b*Me,J=ut*qe/b*Me;X.projectionMatrix.makePerspective(y,N,j,J,Me,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Q=X.near,_e=X.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),H.near=T.near=M.near=Q,H.far=T.far=M.far=_e,(B!==H.near||K!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,K=H.far),H.layers.mask=X.layers.mask|6,M.layers.mask=H.layers.mask&3,T.layers.mask=H.layers.mask&5;const Fe=X.parent,ye=H.cameras;ie(H,Fe);for(let $e=0;$e<ye.length;$e++)ie(ye[$e],Fe);ye.length===2?q(H,M,T):H.projectionMatrix.copy(M.projectionMatrix),we(X,H,Fe)};function we(X,Q,_e){_e===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(X){return h[X]};let Ne=null;function Je(X,Q){if(c=Q.getViewerPose(u||o),g=Q,c!==null){const _e=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;_e.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let qe=0;qe<_e.length;qe++){const tt=_e[qe];let ut=null;if(p!==null)ut=p.getViewport(tt);else{const Rt=f.getViewSubImage(d,tt);ut=Rt.viewport,qe===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(S))}let ze=L[qe];ze===void 0&&(ze=new Zt,ze.layers.enable(qe),ze.viewport=new gt,L[qe]=ze),ze.matrix.fromArray(tt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(tt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ut.x,ut.y,ut.width,ut.height),qe===0&&(H.matrix.copy(ze.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(ze)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const qe=f.getDepthInformation(_e[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,r.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<_e.length;qe++){const tt=_e[qe].camera;if(tt){let ut=h[tt];ut||(ut=new Lv,h[tt]=ut);const ze=f.getCameraImage(tt);ut.sourceTexture=ze}}}}for(let _e=0;_e<w.length;_e++){const Fe=A[_e],ye=w[_e];Fe!==null&&ye!==void 0&&ye.update(Fe,Q,u||o)}Ne&&Ne(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const et=new Fv;et.setAnimationLoop(Je),this.setAnimationLoop=function(X){Ne=X},this.dispose=function(){}}}const Nr=new xi,NR=new Be;function DR(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Ev(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===gn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===gn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),x=_.envMap,S=_.envMapRotation;x&&(m.envMap.value=x,Nr.copy(S),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(NR.makeRotationFromEuler(Nr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function u(_,x){let S=r[_.id];S===void 0&&(g(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(_,w);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function c(_){const x=f();_.__bindingPointIndex=x;const S=n.createBuffer(),w=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],S=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,R=S.length;A<R;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,T=C.length;M<T;M++){const L=C[M];if(p(L,A,M,w)===!0){const H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let Y=0;Y<B.length;Y++){const W=B[Y],z=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,H+K,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,K),K+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,S,w){const A=_.value,R=x+"_"+S;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const C=w[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return w[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(_){const x=_.uniforms;let S=0;const w=16;for(let R=0,C=x.length;R<C;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let T=0,L=M.length;T<L;T++){const H=M[T],B=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Y=B.length;K<Y;K++){const W=B[K],z=v(W),U=S%w,$=U%z.boundary,q=U+$;S+=$,q!==0&&w-q<z.storage&&(S+=w-q),H.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=z.storage}}}const A=S%w;return A>0&&(S+=w-A),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}const FR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function OR(){return ri===null&&(ri=new Yh(FR,16,16,$s,Xi),ri.name="DFG_LUT",ri.minFilter=Dt,ri.magFilter=Dt,ri.wrapS=ci,ri.wrapT=ci,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class Vv{constructor(e={}){const{canvas:t=uM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([Vh,zh,Bh]),h=new Set([Mn,vi,da,ha,Fh,Oh]),_=new Uint32Array(4),x=new Int32Array(4);let S=null,w=null;const A=[],R=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=Gt;let L=0,H=0,B=null,K=-1,Y=null;const W=new gt,z=new gt;let U=null;const $=new Ue(0);let q=0,ie=t.width,we=t.height,Ne=1,Je=null,et=null;const X=new gt(0,0,ie,we),Q=new gt(0,0,ie,we);let _e=!1;const Fe=new Kh;let ye=!1,$e=!1;const Ot=new Be,qe=new F,tt=new gt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Rt(){return B===null?Ne:1}let P=i;function bt(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),P===null){const D="webgl2";if(P=bt(D,E),P===null)throw bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Le("WebGLRenderer: "+E.message),E}let Qe,ft,Me,b,y,N,j,J,G,Te,oe,Se,Ie,ne,le,xe,Ee,ae,Ve,I,de,re,he,ee;function Z(){Qe=new Ow(P),Qe.init(),re=new bR(P,Qe),ft=new bw(P,Qe,e,re),Me=new AR(P,Qe),ft.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),b=new zw(P),y=new fR,N=new RR(P,Qe,Me,y,ft,re,b),j=new Pw(M),J=new Fw(M),G=new WE(P),he=new Aw(P,G),Te=new kw(P,G,b,he),oe=new Hw(P,Te,G,b),Ve=new Vw(P,ft,N),xe=new Cw(y),Se=new cR(M,j,J,Qe,ft,he,xe),Ie=new DR(M,y),ne=new hR,le=new xR(Qe),ae=new ww(M,j,J,Me,oe,g,l),Ee=new TR(M,oe,ft),ee=new UR(P,b,ft,Me),I=new Rw(P,Qe,b),de=new Bw(P,Qe,b),b.programs=Se.programs,M.capabilities=ft,M.extensions=Qe,M.properties=y,M.renderLists=ne,M.shadowMap=Ee,M.state=Me,M.info=b}Z(),v!==Mn&&(C=new Ww(v,t.width,t.height,r,s));const se=new IR(M,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(ie,we,!1))},this.getSize=function(E){return E.set(ie,we)},this.setSize=function(E,D,V=!0){if(se.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=E,we=D,t.width=Math.floor(E*Ne),t.height=Math.floor(D*Ne),V===!0&&(t.style.width=E+"px",t.style.height=D+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(ie*Ne,we*Ne).floor()},this.setDrawingBufferSize=function(E,D,V){ie=E,we=D,Ne=V,t.width=Math.floor(E*V),t.height=Math.floor(D*V),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(v===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(X)},this.setViewport=function(E,D,V,k){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,D,V,k),Me.viewport(W.copy(X).multiplyScalar(Ne).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,D,V,k){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,D,V,k),Me.scissor(z.copy(Q).multiplyScalar(Ne).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(E){Me.setScissorTest(_e=E)},this.setOpaqueSort=function(E){Je=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,V=!0){let k=0;if(E){let O=!1;if(B!==null){const ue=B.texture.format;O=m.has(ue)}if(O){const ue=B.texture.type,pe=h.has(ue),fe=ae.getClearColor(),ve=ae.getClearAlpha(),Ae=fe.r,Pe=fe.g,be=fe.b;pe?(_[0]=Ae,_[1]=Pe,_[2]=be,_[3]=ve,P.clearBufferuiv(P.COLOR,0,_)):(x[0]=Ae,x[1]=Pe,x[2]=be,x[3]=ve,P.clearBufferiv(P.COLOR,0,x))}else k|=P.COLOR_BUFFER_BIT}D&&(k|=P.DEPTH_BUFFER_BIT),V&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ae.dispose(),ne.dispose(),le.dispose(),y.dispose(),j.dispose(),J.dispose(),oe.dispose(),he.dispose(),ee.dispose(),Se.dispose(),se.dispose(),se.removeEventListener("sessionstart",ip),se.removeEventListener("sessionend",rp),Ar.stop()};function De(E){E.preventDefault(),uu("WebGLRenderer: Context Lost."),T=!0}function dt(){uu("WebGLRenderer: Context Restored."),T=!1;const E=b.autoReset,D=Ee.enabled,V=Ee.autoUpdate,k=Ee.needsUpdate,O=Ee.type;Z(),b.autoReset=E,Ee.enabled=D,Ee.autoUpdate=V,Ee.needsUpdate=k,Ee.type=O}function nt(E){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ni(E){const D=E.target;D.removeEventListener("dispose",ni),Ei(D)}function Ei(E){Yv(E),y.remove(E)}function Yv(E){const D=y.get(E).programs;D!==void 0&&(D.forEach(function(V){Se.releaseProgram(V)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,V,k,O,ue){D===null&&(D=ut);const pe=O.isMesh&&O.matrixWorld.determinant()<0,fe=Kv(E,D,V,k,O);Me.setMaterial(k,pe);let ve=V.index,Ae=1;if(k.wireframe===!0){if(ve=Te.getWireframeAttribute(V),ve===void 0)return;Ae=2}const Pe=V.drawRange,be=V.attributes.position;let He=Pe.start*Ae,lt=(Pe.start+Pe.count)*Ae;ue!==null&&(He=Math.max(He,ue.start*Ae),lt=Math.min(lt,(ue.start+ue.count)*Ae)),ve!==null?(He=Math.max(He,0),lt=Math.min(lt,ve.count)):be!=null&&(He=Math.max(He,0),lt=Math.min(lt,be.count));const Et=lt-He;if(Et<0||Et===1/0)return;he.setup(O,k,fe,V,ve);let Tt,ct=I;if(ve!==null&&(Tt=G.get(ve),ct=de,ct.setIndex(Tt)),O.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*Rt()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(O.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*Rt()),O.isLineSegments?ct.setMode(P.LINES):O.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else O.isPoints?ct.setMode(P.POINTS):O.isSprite&&ct.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)_a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ct.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,it=O._multiDrawCounts,Ze=O._multiDrawCount,_n=ve?G.get(ve).bytesPerElement:1,ts=y.get(k).currentProgram.getUniforms();for(let vn=0;vn<Ze;vn++)ts.setValue(P,"_gl_DrawID",vn),ct.render(Ce[vn]/_n,it[vn])}else if(O.isInstancedMesh)ct.renderInstances(He,Et,O.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,it=Math.min(V.instanceCount,Ce);ct.renderInstances(He,Et,it)}else ct.render(He,Et)};function np(E,D,V){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,Ra(E,D,V),E.side=Wi,E.needsUpdate=!0,Ra(E,D,V),E.side=ui):Ra(E,D,V)}this.compile=function(E,D,V=null){V===null&&(V=E),w=le.get(V),w.init(D),R.push(w),V.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights();const k=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const fe=ue[pe];np(fe,V,O),k.add(fe)}else np(ue,V,O),k.add(ue)}),w=R.pop(),k},this.compileAsync=function(E,D,V=null){const k=this.compile(E,D,V);return new Promise(O=>{function ue(){if(k.forEach(function(pe){y.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){O(E);return}setTimeout(ue,10)}Qe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ou=null;function qv(E){Ou&&Ou(E)}function ip(){Ar.stop()}function rp(){Ar.start()}const Ar=new Fv;Ar.setAnimationLoop(qv),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(E){Ou=E,se.setAnimationLoop(E),E===null?Ar.stop():Ar.start()},se.addEventListener("sessionstart",ip),se.addEventListener("sessionend",rp),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const V=se.enabled===!0&&se.isPresenting===!0,k=C!==null&&(B===null||V)&&C.begin(M,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,D,B),w=le.get(E,R.length),w.init(D),R.push(w),Ot.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Fe.setFromProjectionMatrix(Ot,fi,D.reversedDepth),$e=this.localClippingEnabled,ye=xe.init(this.clippingPlanes,$e),S=ne.get(E,A.length),S.init(),A.push(S),se.enabled===!0&&se.isPresenting===!0){const pe=M.xr.getDepthSensingMesh();pe!==null&&ku(pe,D,-1/0,M.sortObjects)}ku(E,D,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(Je,et),ze=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ze&&ae.addToRenderList(S,E),this.info.render.frame++,ye===!0&&xe.beginShadows();const O=w.state.shadowsArray;if(Ee.render(O,E,D),ye===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&C.hasRenderPass())===!1){const pe=S.opaque,fe=S.transmissive;if(w.setupLights(),D.isArrayCamera){const ve=D.cameras;if(fe.length>0)for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const be=ve[Ae];op(pe,fe,E,be)}ze&&ae.render(E);for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const be=ve[Ae];sp(S,E,be,be.viewport)}}else fe.length>0&&op(pe,fe,E,D),ze&&ae.render(E),sp(S,E,D)}B!==null&&H===0&&(N.updateMultisampleRenderTarget(B),N.updateRenderTargetMipmap(B)),k&&C.end(M),E.isScene===!0&&E.onAfterRender(M,E,D),he.resetDefaultState(),K=-1,Y=null,R.pop(),R.length>0?(w=R[R.length-1],ye===!0&&xe.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function ku(E,D,V,k){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){k&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ot);const pe=oe.update(E),fe=E.material;fe.visible&&S.push(E,pe,fe,V,tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const pe=oe.update(E),fe=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),tt.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),tt.copy(pe.boundingSphere.center)),tt.applyMatrix4(E.matrixWorld).applyMatrix4(Ot)),Array.isArray(fe)){const ve=pe.groups;for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const be=ve[Ae],He=fe[be.materialIndex];He&&He.visible&&S.push(E,pe,He,V,tt.z,be)}}else fe.visible&&S.push(E,pe,fe,V,tt.z,null)}}const ue=E.children;for(let pe=0,fe=ue.length;pe<fe;pe++)ku(ue[pe],D,V,k)}function sp(E,D,V,k){const{opaque:O,transmissive:ue,transparent:pe}=E;w.setupLightsView(V),ye===!0&&xe.setGlobalState(M.clippingPlanes,V),k&&Me.viewport(W.copy(k)),O.length>0&&Aa(O,D,V),ue.length>0&&Aa(ue,D,V),pe.length>0&&Aa(pe,D,V),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function op(E,D,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const He=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new gi(1,1,{generateMipmaps:!0,type:He?Xi:Mn,minFilter:Di,samples:ft.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ue=w.state.transmissionRenderTarget[k.id],pe=k.viewport||W;ue.setSize(pe.z*M.transmissionResolutionScale,pe.w*M.transmissionResolutionScale);const fe=M.getRenderTarget(),ve=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(ue),M.getClearColor($),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),ze&&ae.render(V);const Pe=M.toneMapping;M.toneMapping=mi;const be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),ye===!0&&xe.setGlobalState(M.clippingPlanes,k),Aa(E,V,k),N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let lt=0,Et=D.length;lt<Et;lt++){const Tt=D[lt],{object:ct,geometry:Ce,material:it,group:Ze}=Tt;if(it.side===ui&&ct.layers.test(k.layers)){const _n=it.side;it.side=gn,it.needsUpdate=!0,ap(ct,V,k,Ce,it,Ze),it.side=_n,it.needsUpdate=!0,He=!0}}He===!0&&(N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue))}M.setRenderTarget(fe,ve,Ae),M.setClearColor($,q),be!==void 0&&(k.viewport=be),M.toneMapping=Pe}function Aa(E,D,V){const k=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ue=E.length;O<ue;O++){const pe=E[O],{object:fe,geometry:ve,group:Ae}=pe;let Pe=pe.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),fe.layers.test(V.layers)&&ap(fe,D,V,ve,Pe,Ae)}}function ap(E,D,V,k,O,ue){E.onBeforeRender(M,D,V,k,O,ue),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,D,V,k,E,ue),O.transparent===!0&&O.side===ui&&O.forceSinglePass===!1?(O.side=gn,O.needsUpdate=!0,M.renderBufferDirect(V,D,k,O,E,ue),O.side=Wi,O.needsUpdate=!0,M.renderBufferDirect(V,D,k,O,E,ue),O.side=ui):M.renderBufferDirect(V,D,k,O,E,ue),E.onAfterRender(M,D,V,k,O,ue)}function Ra(E,D,V){D.isScene!==!0&&(D=ut);const k=y.get(E),O=w.state.lights,ue=w.state.shadowsArray,pe=O.state.version,fe=Se.getParameters(E,O.state,ue,D,V),ve=Se.getProgramCacheKey(fe);let Ae=k.programs;k.environment=E.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(E.isMeshStandardMaterial?J:j).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ni),Ae=new Map,k.programs=Ae);let Pe=Ae.get(ve);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===pe)return up(E,fe),Pe}else fe.uniforms=Se.getUniforms(E),E.onBeforeCompile(fe,M),Pe=Se.acquireProgram(fe,ve),Ae.set(ve,Pe),k.uniforms=fe.uniforms;const be=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=xe.uniform),up(E,fe),k.needsLights=Zv(E),k.lightsStateVersion=pe,k.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.directionalShadowMap.value=O.state.directionalShadowMap,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotShadowMap.value=O.state.spotShadowMap,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMap.value=O.state.pointShadowMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function lp(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Ul.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function up(E,D){const V=y.get(E);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Kv(E,D,V,k,O){D.isScene!==!0&&(D=ut),N.resetTextureUnits();const ue=D.fog,pe=k.isMeshStandardMaterial?D.environment:null,fe=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:on,ve=(k.isMeshStandardMaterial?J:j).get(k.envMap||pe),Ae=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!V.morphAttributes.position,He=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let Et=mi;k.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Et=M.toneMapping);const Tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=Tt!==void 0?Tt.length:0,Ce=y.get(k),it=w.state.lights;if(ye===!0&&($e===!0||E!==Y)){const Qt=E===Y&&k.id===K;xe.setState(k,E,Qt)}let Ze=!1;k.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==it.state.version||Ce.outputColorSpace!==fe||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==ve||k.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==xe.numPlanes||Ce.numIntersection!==xe.numIntersection)||Ce.vertexAlphas!==Ae||Ce.vertexTangents!==Pe||Ce.morphTargets!==be||Ce.morphNormals!==He||Ce.morphColors!==lt||Ce.toneMapping!==Et||Ce.morphTargetsCount!==ct)&&(Ze=!0):(Ze=!0,Ce.__version=k.version);let _n=Ce.currentProgram;Ze===!0&&(_n=Ra(k,D,O));let ts=!1,vn=!1,co=!1;const ht=_n.getUniforms(),un=Ce.uniforms;if(Me.useProgram(_n.program)&&(ts=!0,vn=!0,co=!0),k.id!==K&&(K=k.id,vn=!0),ts||Y!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",E.projectionMatrix),ht.setValue(P,"viewMatrix",E.matrixWorldInverse);const cn=ht.map.cameraPosition;cn!==void 0&&cn.setValue(P,qe.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,vn=!0,co=!0)}if(Ce.needsLights&&(it.state.directionalShadowMap.length>0&&ht.setValue(P,"directionalShadowMap",it.state.directionalShadowMap,N),it.state.spotShadowMap.length>0&&ht.setValue(P,"spotShadowMap",it.state.spotShadowMap,N),it.state.pointShadowMap.length>0&&ht.setValue(P,"pointShadowMap",it.state.pointShadowMap,N)),O.isSkinnedMesh){ht.setOptional(P,O,"bindMatrix"),ht.setOptional(P,O,"bindMatrixInverse");const Qt=O.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),ht.setValue(P,"boneTexture",Qt.boneTexture,N))}O.isBatchedMesh&&(ht.setOptional(P,O,"batchingTexture"),ht.setValue(P,"batchingTexture",O._matricesTexture,N),ht.setOptional(P,O,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",O._indirectTexture,N),ht.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",O._colorsTexture,N));const Cn=V.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Ve.update(O,V,_n),(vn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,ht.setValue(P,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(un.envMap.value=ve,un.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(un.envMapIntensity.value=D.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=OR()),vn&&(ht.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&$v(un,co),ue&&k.fog===!0&&Ie.refreshFogUniforms(un,ue),Ie.refreshMaterialUniforms(un,k,Ne,we,w.state.transmissionRenderTarget[E.id]),Ul.upload(P,lp(Ce),un,N)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ul.upload(P,lp(Ce),un,N),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(P,"center",O.center),ht.setValue(P,"modelViewMatrix",O.modelViewMatrix),ht.setValue(P,"normalMatrix",O.normalMatrix),ht.setValue(P,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Qt=k.uniformsGroups;for(let cn=0,Bu=Qt.length;cn<Bu;cn++){const Rr=Qt[cn];ee.update(Rr,_n),ee.bind(Rr,_n)}}return _n}function $v(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Zv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,D,V){const k=y.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=D,y.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){const V=y.get(E);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0};const Jv=P.createFramebuffer();this.setRenderTarget=function(E,D=0,V=0){B=E,L=D,H=V;let k=null,O=!1,ue=!1;if(E){const fe=y.get(E);if(fe.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,fe.__webglFramebuffer),W.copy(E.viewport),z.copy(E.scissor),U=E.scissorTest,Me.viewport(W),Me.scissor(z),Me.setScissorTest(U),K=-1;return}else if(fe.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(fe.__hasExternalTextures)N.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(fe.__boundDepthTexture!==Pe){if(Pe!==null&&y.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);const Ae=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?k=Ae[D][V]:k=Ae[D],O=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?k=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[V]:k=Ae,W.copy(E.viewport),z.copy(E.scissor),U=E.scissorTest}else W.copy(X).multiplyScalar(Ne).floor(),z.copy(Q).multiplyScalar(Ne).floor(),U=_e;if(V!==0&&(k=Jv),Me.bindFramebuffer(P.FRAMEBUFFER,k)&&Me.drawBuffers(E,k),Me.viewport(W),Me.scissor(z),Me.setScissorTest(U),O){const fe=y.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,V)}else if(ue){const fe=D;for(let ve=0;ve<E.textures.length;ve++){const Ae=y.get(E.textures[ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ve,Ae.__webglTexture,V,fe)}}else if(E!==null&&V!==0){const fe=y.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,V)}K=-1},this.readRenderTargetPixels=function(E,D,V,k,O,ue,pe,fe=0){if(!(E&&E.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){Me.bindFramebuffer(P.FRAMEBUFFER,ve);try{const Ae=E.textures[fe],Pe=Ae.format,be=Ae.type;if(!ft.textureFormatReadable(Pe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(be)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-k&&V>=0&&V<=E.height-O&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(D,V,k,O,re.convert(Pe),re.convert(be),ue))}finally{const Ae=B!==null?y.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,D,V,k,O,ue,pe,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve)if(D>=0&&D<=E.width-k&&V>=0&&V<=E.height-O){Me.bindFramebuffer(P.FRAMEBUFFER,ve);const Ae=E.textures[fe],Pe=Ae.format,be=Ae.type;if(!ft.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,He),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(D,V,k,O,re.convert(Pe),re.convert(be),0);const lt=B!==null?y.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,lt);const Et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await cM(P,Et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,He),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue),P.deleteBuffer(He),P.deleteSync(Et),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,V=0){const k=Math.pow(2,-V),O=Math.floor(E.image.width*k),ue=Math.floor(E.image.height*k),pe=D!==null?D.x:0,fe=D!==null?D.y:0;N.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,pe,fe,O,ue),Me.unbindTexture()};const Qv=P.createFramebuffer(),ex=P.createFramebuffer();this.copyTextureToTexture=function(E,D,V=null,k=null,O=0,ue=null){ue===null&&(O!==0?(_a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=O,O=0):ue=0);let pe,fe,ve,Ae,Pe,be,He,lt,Et;const Tt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(V!==null)pe=V.max.x-V.min.x,fe=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Ae=V.min.x,Pe=V.min.y,be=V.isBox3?V.min.z:0;else{const Cn=Math.pow(2,-O);pe=Math.floor(Tt.width*Cn),fe=Math.floor(Tt.height*Cn),E.isDataArrayTexture?ve=Tt.depth:E.isData3DTexture?ve=Math.floor(Tt.depth*Cn):ve=1,Ae=0,Pe=0,be=0}k!==null?(He=k.x,lt=k.y,Et=k.z):(He=0,lt=0,Et=0);const ct=re.convert(D.format),Ce=re.convert(D.type);let it;D.isData3DTexture?(N.setTexture3D(D,0),it=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(N.setTexture2DArray(D,0),it=P.TEXTURE_2D_ARRAY):(N.setTexture2D(D,0),it=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),_n=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ts=P.getParameter(P.UNPACK_SKIP_PIXELS),vn=P.getParameter(P.UNPACK_SKIP_ROWS),co=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be);const ht=E.isDataArrayTexture||E.isData3DTexture,un=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){const Cn=y.get(E),Qt=y.get(D),cn=y.get(Cn.__renderTarget),Bu=y.get(Qt.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,cn.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bu.__webglFramebuffer);for(let Rr=0;Rr<ve;Rr++)ht&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,y.get(E).__webglTexture,O,be+Rr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,y.get(D).__webglTexture,ue,Et+Rr)),P.blitFramebuffer(Ae,Pe,pe,fe,He,lt,pe,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||y.has(E)){const Cn=y.get(E),Qt=y.get(D);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Qv),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,ex);for(let cn=0;cn<ve;cn++)ht?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,O,be+cn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,O),un?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qt.__webglTexture,ue,Et+cn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qt.__webglTexture,ue),O!==0?P.blitFramebuffer(Ae,Pe,pe,fe,He,lt,pe,fe,P.COLOR_BUFFER_BIT,P.NEAREST):un?P.copyTexSubImage3D(it,ue,He,lt,Et+cn,Ae,Pe,pe,fe):P.copyTexSubImage2D(it,ue,He,lt,Ae,Pe,pe,fe);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else un?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(it,ue,He,lt,Et,pe,fe,ve,ct,Ce,Tt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(it,ue,He,lt,Et,pe,fe,ve,ct,Tt.data):P.texSubImage3D(it,ue,He,lt,Et,pe,fe,ve,ct,Ce,Tt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ue,He,lt,pe,fe,ct,Ce,Tt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ue,He,lt,Tt.width,Tt.height,ct,Tt.data):P.texSubImage2D(P.TEXTURE_2D,ue,He,lt,pe,fe,ct,Ce,Tt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_n),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ts),P.pixelStorei(P.UNPACK_SKIP_ROWS,vn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,co),ue===0&&D.generateMipmaps&&P.generateMipmap(it),Me.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){L=0,H=0,B=null,Me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function Dg(n,e){if(e===QS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Id||e===mv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Id)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Hv extends lo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new HR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new JR(t)}),this.register(function(t){return new QR(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new qR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new nb(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=qo.extractUrlBase(e);o=qo.resolveURL(u,this.path)}else o=qo.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Dv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(c){t(c),s.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gv){try{o[We.KHR_BINARY_GLTF]=new ib(e)}catch(f){r&&r(f);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new gb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const f=s.extensionsUsed[c],d=s.extensionsRequired||[];switch(f){case We.KHR_MATERIALS_UNLIT:o[f]=new zR;break;case We.KHR_DRACO_MESH_COMPRESSION:o[f]=new rb(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[f]=new sb;break;case We.KHR_MESH_QUANTIZATION:o[f]=new ob;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function kR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BR{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Ue(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],on);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new LE(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new CE(c),u.distance=f;break;case"spot":u=new RE(c),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),oi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class zR{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Ui}extendParams(e,t,i){const r=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Gt))}return Promise.all(r)}}class VR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class HR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(a,a)}return Promise.all(s)}}class GR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class WR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class XR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class jR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class YR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],on),Promise.all(s)}}class qR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class KR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(s)}}class $R{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class ZR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class JR{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class QR{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return i.loadTextureImage(e,o.source,l)}}class eb{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return i.loadTextureImage(e,o.source,l)}}class tb{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,f=r.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,f,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(c*f);return o.decodeGltfBuffer(new Uint8Array(p),c,f,d,r.mode,r.filter),p})})}else return null}}class nb{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==Ln.TRIANGLES&&u.mode!==Ln.TRIANGLE_STRIP&&u.mode!==Ln.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(c=>(l[u]=c,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const c=u.pop(),f=c.isGroup?c.children:[c],d=u[0].count,p=[];for(const g of f){const v=new Be,m=new F,h=new wr,_=new F(1,1,1),x=new nE(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,v.compose(m,h,_));for(const S in l)if(S==="_COLOR_0"){const w=l[S];x.instanceColor=new Dd(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);St.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const Gv="glTF",Co=12,Ug={JSON:1313821514,BIN:5130562};class ib{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Co),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Co,s=new DataView(e,Co);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Ug.JSON){const u=new Uint8Array(e,Co+o,a);this.content=i.decode(u)}else if(l===Ug.BIN){const u=Co+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const c in o){const f=kd[c]||c.toLowerCase();a[f]=o[c]}for(const c in e.attributes){const f=kd[c]||c.toLowerCase();if(o[c]!==void 0){const d=i.accessors[e.attributes[c]],p=Bs[d.componentType];u[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(f,d){r.decodeDracoFile(c,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}f(p)},a,u,on,d)})})}}class sb{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ob{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Wv extends wa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,c=r-t,f=(i-t)/c,d=f*f,p=d*f,g=e*u,v=g-u,m=-2*p+3*d,h=p-d,_=1-m,x=h-d+f;for(let S=0;S!==a;S++){const w=o[v+S+a],A=o[v+S+l]*c,R=o[g+S+a],C=o[g+S]*c;s[S]=_*w+x*A+m*R+h*C}return s}}const ab=new wr;class lb extends Wv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return ab.fromArray(s).normalize().toArray(s),s}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fg={9728:Nt,9729:Dt,9984:lv,9985:Pl,9986:Uo,9987:Di},Og={33071:ci,33648:ou,10497:Ks},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ub={CUBICSPLINE:void 0,LINEAR:ma,STEP:pa},Yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Zh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),n.DefaultMaterial}function Dr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function oi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fb(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,c=e.length;u<c;u++){const f=e[u];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],d=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function db(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hb(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qc(t.attributes):e=n.indices+":"+qc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+qc(n.targets[i]);return e}function qc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Bd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mb=new Be;class gb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new wE(this.options.manager):this.textureLoader=new IE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Dr(s,a,r),oi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,c]of o.children.entries())s(c,a.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(qo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=jc[r.type],a=Bs[r.componentType],l=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new sn(u,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=jc[r.type],u=Bs[r.componentType],c=u.BYTES_PER_ELEMENT,f=c*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==f){const h=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let x=t.cache.get(_);x||(v=new u(a,h*p,r.count*p/c),x=new ZM(v,p/c),t.cache.add(_,x)),m=new jh(x,l,d%p/c,g)}else a===null?v=new u(r.count*l):v=new u(a,d,r.count*l),m=new sn(v,l,g);if(r.sparse!==void 0){const h=jc.SCALAR,_=Bs[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,w=new _(o[1],x,r.sparse.count*h),A=new u(o[2],S,r.sparse.count*l);a!==null&&(m=new sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=w.length;R<C;R++){const M=w[R];if(m.setX(M,A[R*l]),l>=2&&m.setY(M,A[R*l+1]),l>=3&&m.setZ(M,A[R*l+2]),l>=4&&m.setW(M,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return c.magFilter=Fg[d.magFilter]||Dt,c.minFilter=Fg[d.minFilter]||Di,c.wrapS=Og[d.wrapS]||Ks,c.wrapT=Og[d.wrapT]||Ks,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Nt&&c.minFilter!==Dt,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Vt(v);m.needsUpdate=!0,d(m)}),t.load(qo.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return u===!0&&a.revokeObjectURL(l),oi(f,o),f.userData.mimeType=o.mimeType||pb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Pv,_i.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Cv,_i.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Zh}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[We.KHR_MATERIALS_UNLIT]){const f=r[We.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),u.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",f.baseColorTexture,Gt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ui);const c=s.alphaMode||Yc.OPAQUE;if(c===Yc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===Yc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ui&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ye(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Ui&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ui){const f=s.emissiveFactor;a.emissive=new Ue().setRGB(f[0],f[1],f[2],on)}return s.emissiveTexture!==void 0&&o!==Ui&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Gt)),Promise.all(u).then(function(){const f=new o(a);return s.name&&(f.name=s.name),oi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Dr(r,f,s),f})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return kg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],c=hb(u),f=r[c];if(f)o.push(f.promise);else{let d;u.extensions&&u.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=kg(new zn,u,t),r[c]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const c=o[l].material===void 0?cb(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],f=[];for(let p=0,g=c.length;p<g;p++){const v=c[p],m=o[p];let h;const _=u[p];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new QM(v,_):new An(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?h.geometry=Dg(h.geometry,mv):m.mode===Ln.TRIANGLE_FAN&&(h.geometry=Dg(h.geometry,Id));else if(m.mode===Ln.LINES)h=new oE(v,_);else if(m.mode===Ln.LINE_STRIP)h=new $h(v,_);else if(m.mode===Ln.LINE_LOOP)h=new aE(v,_);else if(m.mode===Ln.POINTS)h=new lE(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&db(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),oi(h,s),m.extensions&&Dr(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Dr(r,f[0],s),f[0];const d=new Wr;s.extensions&&Dr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(RM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Du(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),oi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let u=0,c=o.length;u<c;u++){const f=o[u];if(f){a.push(f);const d=new Be;s!==null&&d.fromArray(s.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new qh(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],u=[],c=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],g=r.samplers[p.sampler],v=p.target,m=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),u.push(g),c.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(f){const d=f[0],p=f[1],g=f[2],v=f[3],m=f[4],h=[];for(let x=0,S=d.length;x<S;x++){const w=d[x],A=p[x],R=g[x],C=v[x],M=m[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const T=i._createAnimationTracks(w,A,R,C,M);if(T)for(let L=0;L<T.length;L++)h.push(T[L])}const _=new vE(s,void 0,h);return oi(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,c=a.length;u<c;u++)o.push(i.getDependency("node",a[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(u){const c=u[0],f=u[1],d=u[2];d!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(d,mb)});for(let p=0,g=f.length;p<g;p++)c.add(f[p]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let c;if(s.isBone===!0?c=new bv:u.length>1?c=new Wr:u.length===1?c=u[0]:c=new St,c!==u[0])for(let f=0,d=u.length;f<d;f++)c.add(u[f]);if(s.name&&(c.userData.name=s.name,c.name=o),oi(c,s),s.extensions&&Dr(i,c,s),s.matrix!==void 0){const f=new Be;f.fromArray(s.matrix),c.applyMatrix4(f)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);if(!r.associations.has(c))r.associations.set(c,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(c);r.associations.set(c,{...f})}return r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Wr;i.name&&(s.name=r.createUniqueName(i.name)),oi(s,i),i.extensions&&Dr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,f=l.length;c<f;c++)s.add(l[c]);const u=c=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof _i||d instanceof Vt)&&f.set(d,p);return c.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];nr[s.path]===nr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let u;switch(nr[s.path]){case nr.weights:u=Qs;break;case nr.rotation:u=eo;break;case nr.translation:case nr.scale:u=to;break;default:switch(i.itemSize){case 1:u=Qs;break;case 2:case 3:default:u=to;break}break}const c=r.interpolation!==void 0?ub[r.interpolation]:ma,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new u(l[d]+"."+nr[s.path],t.array,f,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Bd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof eo?lb:Wv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _b(n,e,t){const i=e.attributes,r=new qi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new F(l[0],l[1],l[2]),new F(u[0],u[1],u[2])),a.normalized){const c=Bd(Bs[a.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let u=0,c=s.length;u<c;u++){const f=s[u];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=Bd(Bs[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Si;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function kg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=kd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return je.workingColorSpace!==on&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),oi(n,e),_b(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?fb(n,e.targets,t):n})}function vb({active:n}){const e=di.useRef();return di.useEffect(()=>{if(!n)return;const t=new Rv,i=new Zt(40,1,.1,100);i.position.set(0,.4,6.5);const r=new Vv({alpha:!0,antialias:!0});return r.setSize(e.current.clientWidth,e.current.clientHeight),e.current.appendChild(r.domElement),t.add(new Uv(49151,1.4)),new Hv().load("/models/f15.glb",s=>{const o=s.scene;o.traverse(l=>{l.isMesh&&(l.material=new Ui({color:49151,wireframe:!0}))}),o.scale.set(.02,.02,.02),o.position.set(0,-.5,0),t.add(o);const a=()=>{requestAnimationFrame(a),o.rotation.y+=.0015,r.render(t,i)};a()}),()=>e.current.innerHTML=""},[n]),ge.jsx("div",{ref:e,className:"three-container"})}function xb({active:n}){const e=di.useRef();return di.useEffect(()=>{if(!n)return;const t=new Rv,i=new Zt(40,1,.1,100);i.position.set(0,.3,6);const r=new Vv({alpha:!0,antialias:!0});return r.setSize(e.current.clientWidth,e.current.clientHeight),e.current.appendChild(r.domElement),t.add(new Uv(49151,1.4)),new Hv().load("/models/helicopter.glb",s=>{const o=s.scene;o.traverse(l=>{l.isMesh&&(l.material=new Ui({color:49151,wireframe:!0}))}),o.scale.set(.3,.3,.3),t.add(o);const a=()=>{requestAnimationFrame(a),o.rotation.y-=.0015,r.render(t,i)};a()}),()=>e.current.innerHTML=""},[n]),ge.jsx("div",{ref:e,className:"three-container"})}var Xv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bg=fr.createContext&&fr.createContext(Xv),yb=["attr","size","title"];function Sb(n,e){if(n==null)return{};var t=Mb(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Mb(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function du(){return du=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},du.apply(this,arguments)}function zg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function hu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zg(Object(t),!0).forEach(function(i){Eb(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zg(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Eb(n,e,t){return e=Tb(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tb(n){var e=wb(n,"string");return typeof e=="symbol"?e:e+""}function wb(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jv(n){return n&&n.map((e,t)=>fr.createElement(e.tag,hu({key:t},e.attr),jv(e.child)))}function tp(n){return e=>fr.createElement(Ab,du({attr:hu({},n.attr)},e),jv(n.child))}function Ab(n){var e=t=>{var{attr:i,size:r,title:s}=n,o=Sb(n,yb),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),fr.createElement("svg",du({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:hu(hu({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&fr.createElement("title",null,s),n.children)};return Bg!==void 0?fr.createElement(Bg.Consumer,null,t=>e(t)):e(Xv)}function Rb(n){return tp({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(n)}function bb(n){return tp({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(n)}function Cb(n){return tp({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(n)}function Pb(){const[n,e]=di.useState(!1),[t,i]=di.useState(!1);return di.useEffect(()=>{const r=()=>{const s=window.scrollY,o=window.innerHeight;e(s>o*.6),i(s>o*1.6)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),ge.jsxs(ge.Fragment,{children:[ge.jsxs("section",{className:"hero",children:[ge.jsx("video",{className:"hero-video",src:"/hero-video.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),ge.jsx("div",{className:"hero-content",children:ge.jsxs("div",{className:"hero-text",children:[ge.jsxs("h1",{children:["Hi, I’m ",ge.jsx("span",{children:"Raj Agrahari"})]}),ge.jsx("h3",{children:"Unity & XR Developer"}),ge.jsx("p",{children:"I build immersive AR/VR simulations, serious games and interactive training systems with real-world impact."}),ge.jsxs("div",{className:"actions",children:[ge.jsx("button",{children:"View Tech"}),ge.jsx("button",{className:"outline",children:"Hire Me"})]})]})})]}),ge.jsxs("section",{className:"about-section",children:[ge.jsx("h2",{children:"About Me"}),ge.jsx("p",{children:"XR-focused developer specializing in Unity-based simulations, AR/VR training systems, and real-time 3D applications for defense, education, and industrial use-cases."})]}),ge.jsxs("section",{className:"split",children:[ge.jsx("div",{className:"split-left",children:ge.jsx(vb,{active:n})}),ge.jsxs("div",{className:"split-right",children:[ge.jsx("h2",{children:"Fighter Jet Simulation"}),ge.jsx("p",{children:"High-fidelity real-time jet visualization using Three.js and GLTF models with neon wireframe aesthetics, optimized for XR pipelines."})]})]}),ge.jsxs("section",{className:"split reverse",children:[ge.jsxs("div",{className:"split-left",children:[ge.jsx("h2",{children:"Helicopter Systems"}),ge.jsx("p",{children:"Rotary-wing visualization built for XR-based training simulations, procedural maintenance walkthroughs, and real-time interaction."})]}),ge.jsx("div",{className:"split-right",children:ge.jsx(xb,{active:t})})]}),ge.jsxs("section",{className:"skills-section",children:[ge.jsx("h2",{className:"skills-title",children:"Core Skills"}),ge.jsx("div",{className:"skills-grid",children:["Unity 3D","AR / VR / MR","Three.js","XR Simulations","C#","WebGL","Blender","Web3"].map(r=>ge.jsx("div",{className:"skill-btn",children:r},r))})]}),ge.jsxs("section",{className:"projects-section",children:[ge.jsx("h2",{children:"Selected Projects"}),ge.jsxs("div",{className:"projects-grid",children:[ge.jsxs("div",{className:"project-card",children:[ge.jsx("h3",{children:"VR Aircraft Maintenance Simulator"}),ge.jsx("p",{children:"Interactive VR training system with task assessment, hardware interaction, and real-time feedback."}),ge.jsx("span",{children:"Unity · VR · Training"})]}),ge.jsxs("div",{className:"project-card",children:[ge.jsx("h3",{children:"XR Training Assessment"}),ge.jsx("p",{children:"Performance tracking system measuring accuracy, time, and errors in XR environments."}),ge.jsx("span",{children:"Unity · XR · Analytics"})]}),ge.jsxs("div",{className:"project-card",children:[ge.jsx("h3",{children:"Web3 Unity Integration"}),ge.jsx("p",{children:"Wallet connect, NFT ownership, and token-based progression inside Unity WebGL."}),ge.jsx("span",{children:"Unity · Web3 · WebGL"})]})]})]}),ge.jsxs("section",{className:"contact-section",children:[ge.jsx("h2",{children:"Let’s Build Something Immersive"}),ge.jsx("p",{children:"Open for freelance, contracts and XR collaborations."}),ge.jsxs("div",{className:"contact-actions",children:[ge.jsxs("a",{href:"mailto:yourmail@gmail.com",className:"icon-btn email",children:[ge.jsx(Cb,{className:"icon"}),ge.jsx("span",{children:"Email Me"})]}),ge.jsxs("a",{href:"https://www.linkedin.com/in/raj-agrahari-72450621b/",target:"_blank",rel:"noreferrer",className:"icon-btn linkedin",children:[ge.jsx(bb,{className:"icon"}),ge.jsx("span",{children:"LinkedIn"})]}),ge.jsxs("a",{href:"https://discord.gg/cheMEzxA",target:"_blank",rel:"noreferrer",className:"icon-btn discord",children:[ge.jsx(Rb,{className:"icon"}),ge.jsx("span",{children:"Discord"})]})]})]})]})}Kc.createRoot(document.getElementById("root")).render(ge.jsx(fr.StrictMode,{children:ge.jsx(Pb,{})}));
