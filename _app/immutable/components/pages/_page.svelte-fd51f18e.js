import{S as Ze,i as Je,s as Qe,D as Re,I as Fe,J as Pe,K as De,f as U,t as P,a2 as fr,U as Mr,a0 as Us,a3 as ur,C as Wr,$ as Ar,w as hi,x as se,e as at,y as le,z as oe,b as M,L as Ge,_ as yt,g as qe,A as ae,d as We,h as E,O as Xe,P as on,E as ge,R as Dt,v as ye,k as R,a as V,l as F,m as D,c as j,n as wt,o as gn,F as ze,H as Me,M as Et,N as Tt,Y as rt,a1 as A,G as Ie,V as jn,a4 as pi,a5 as oa,B as aa,q as K,r as G,u as He,a6 as tt,a7 as nt,W as pn,a8 as Nr}from"../../chunks/index-3cc77633.js";import{_ as Tn,a as dt,e as en,M as Un,c as Te,f as an,S as mi,d as Ht,u as Nt,b as Xr}from"../../chunks/classAdderBuilder-613bd1e9.js";/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function la(t){return t===void 0&&(t=window),ua(t)?{passive:!0}:!1}function ua(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},r=function(){};t.document.addEventListener("test",r,n),t.document.removeEventListener("test",r,n)}catch{e=!1}return e}const Bs=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:la},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ca(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Os(n,e))return n;n=n.parentElement}return null}function Os(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function fa(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var r=n.scrollWidth;return document.documentElement.removeChild(n),r}const da=Object.freeze(Object.defineProperty({__proto__:null,closest:ca,estimateScrollWidth:fa,matches:Os},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ha={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},pa={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},gi={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},Qn;function ma(t,e){e===void 0&&(e=!1);var n=t.CSS,r=Qn;if(typeof Qn=="boolean"&&!e)return Qn;var i=n&&typeof n.supports=="function";if(!i)return!1;var s=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=s||o,e||(Qn=r),r}function ga(t,e,n){if(!t)return{x:0,y:0};var r=e.x,i=e.y,s=r+n.left,o=i+n.top,a,l;if(t.type==="touchstart"){var u=t;a=u.changedTouches[0].pageX-s,l=u.changedTouches[0].pageY-o}else{var f=t;a=f.pageX-s,l=f.pageY-o}return{x:a,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bi=["touchstart","pointerdown","mousedown","keydown"],yi=["touchend","pointerup","mouseup","contextmenu"],Yn=[],ba=function(t){Tn(e,t);function e(n){var r=t.call(this,dt(dt({},e.defaultAdapter),n))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(i){r.activateImpl(i)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return ha},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return gi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var i=e.cssClasses,s=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(s),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var r=e.cssClasses,i=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(i),n.adapter.removeClass(s),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var r=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var r,i;if(n){try{for(var s=en(bi),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){r={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var r,i;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=en(yi),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){r={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},e.prototype.deregisterRootHandlers=function(){var n,r;try{for(var i=en(bi),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=en(yi),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,r=e.strings,i=Object.keys(r);i.forEach(function(s){s.indexOf("VAR_")===0&&n.adapter.updateCssVariable(r[s],null)})},e.prototype.activateImpl=function(n){var r=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var s=this.previousActivationEvent,o=s&&n!==void 0&&s.type!==n.type;if(!o){i.isActivated=!0,i.isProgrammatic=n===void 0,i.activationEvent=n,i.wasActivatedByPointer=i.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&Yn.length>0&&Yn.some(function(l){return r.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&(Yn.push(n.target),this.registerDeactivationHandlers(n)),i.wasElementMadeActive=this.checkElementMadeActive(n),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Yn=[],!i.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(i.wasElementMadeActive=r.checkElementMadeActive(n),i.wasElementMadeActive&&r.animateActivation()),i.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,r=e.strings,i=r.VAR_FG_TRANSLATE_START,s=r.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var f="",c="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),p=d.startPoint,m=d.endPoint;f=p.x+"px, "+p.y+"px",c=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(i,f),this.adapter.updateCssVariable(s,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,r=n.activationEvent,i=n.wasActivatedByPointer,s;i?s=ga(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,r=e.cssClasses.FG_DEACTIVATION,i=this.activationState,s=i.hasDeactivationUXRun,o=i.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(r)},gi.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,r=this.activationState;if(r.isActivated){var i=dt({},r);r.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(i),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var r=n.wasActivatedByPointer,i=n.wasElementMadeActive;(r||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:i();var s=Math.floor(r*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!==0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,r=n.VAR_FG_SIZE,i=n.VAR_LEFT,s=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Un);function dr(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i],o=s.indexOf("$");o!==-1&&e.indexOf(s.substring(0,o+1))!==-1||e.indexOf(s)===-1&&(r[s]=t[s])}return r}function lt(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i];s.substring(0,e.length)===e&&(r[s.substring(e.length)]=t[s])}return r}function ya(t){let e;const n=t[4].default,r=Re(n,t,t[3],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,[s]){r&&r.p&&(!e||s&8)&&Fe(r,n,i,i[3],e?De(n,i[3],s,null):Pe(i[3]),null)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function va(t,e,n){let r,{$$slots:i={},$$scope:s}=e,{key:o}=e,{value:a}=e;const l=Wr(a);return fr(t,l,u=>n(5,r=u)),Mr(o,l),Us(()=>{l.set(void 0)}),t.$$set=u=>{"key"in u&&n(1,o=u.key),"value"in u&&n(2,a=u.value),"$$scope"in u&&n(3,s=u.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&ur(l,r=a,r)},[l,o,a,s,i]}class hr extends Ze{constructor(e){super(),Je(this,e,va,ya,Qe,{key:1,value:2})}}const{applyPassive:$n}=Bs,{matches:_a}=da;function pr(t,{ripple:e=!0,surface:n=!1,unbounded:r=!1,disabled:i=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:f=m=>t.classList.add(m),removeClass:c=m=>t.classList.remove(m),addStyle:d=(m,b)=>t.style.setProperty(m,b),initPromise:p=Promise.resolve()}={}){let m,b=Ar("SMUI:addLayoutListener"),g,L=o,C=l,H=u;function v(){n?(f("mdc-ripple-surface"),s==="primary"?(f("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):s==="secondary"?(c("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),m&&L!==o&&(L=o,o?m.activate():o===!1&&m.deactivate()),e&&!m?(m=new ba({addClass:f,browserSupportsCssVars:()=>ma(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:w=>t.contains(w),deregisterDocumentInteractionHandler:(w,h)=>document.documentElement.removeEventListener(w,h,$n()),deregisterInteractionHandler:(w,h)=>(l||t).removeEventListener(w,h,$n()),deregisterResizeHandler:w=>window.removeEventListener("resize",w),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??_a(u||t,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!r,registerDocumentInteractionHandler:(w,h)=>document.documentElement.addEventListener(w,h,$n()),registerInteractionHandler:(w,h)=>(l||t).addEventListener(w,h,$n()),registerResizeHandler:w=>window.addEventListener("resize",w),removeClass:c,updateCssVariable:d}),p.then(()=>{m&&(m.init(),m.setUnbounded(r))})):m&&!e&&p.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(C!==l||H!==u)&&(C=l,H=u,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(r))})),!e&&r&&f("mdc-ripple-upgraded--unbounded")}v(),b&&(g=b(_));function _(){m&&m.layout()}return{update(w){({ripple:e,surface:n,unbounded:r,disabled:i,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:f,removeClass:c,addStyle:d,initPromise:p}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:h=>t.classList.add(h),removeClass:h=>t.classList.remove(h),addStyle:(h,y)=>t.style.setProperty(h,y),initPromise:Promise.resolve()},w)),v()},destroy(){m&&(m.destroy(),m=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),g&&g()}}}const wa={},Ea=Object.freeze(Object.defineProperty({__proto__:null,default:wa},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const pe=BigInt(0),Ce=BigInt(1),tn=BigInt(2),Nn=BigInt(3),vi=BigInt(8),Ee=Object.freeze({a:pe,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:Ce,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),_i=(t,e)=>(t+e/tn)/e,er={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(t){const{n:e}=Ee,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Ce*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=n,o=BigInt("0x100000000000000000000000000000000"),a=_i(s*t,e),l=_i(-r*t,e);let u=W(t-a*n-l*i,e),f=W(-a*r-l*s,e);const c=u>o,d=f>o;if(c&&(u=e-u),d&&(f=e-f),u>o||f>o)throw new Error("splitScalarEndo: Endomorphism failed, k="+t);return{k1neg:c,k1:u,k2neg:d,k2:f}}},_t=32,An=32,Aa=32,mr=_t+1,gr=2*_t+1;function wi(t){const{a:e,b:n}=Ee,r=W(t*t),i=W(r*t);return W(i+e*t+n)}const tr=Ee.a===pe;class Zr extends Error{constructor(e){super(e)}}function Ei(t){if(!(t instanceof be))throw new TypeError("JacobianPoint expected")}class be{constructor(e,n,r){this.x=e,this.y=n,this.z=r}static fromAffine(e){if(!(e instanceof me))throw new TypeError("JacobianPoint#fromAffine: expected Point");return e.equals(me.ZERO)?be.ZERO:new be(e.x,e.y,Ce)}static toAffineBatch(e){const n=Ca(e.map(r=>r.z));return e.map((r,i)=>r.toAffine(n[i]))}static normalizeZ(e){return be.toAffineBatch(e).map(be.fromAffine)}equals(e){Ei(e);const{x:n,y:r,z:i}=this,{x:s,y:o,z:a}=e,l=W(i*i),u=W(a*a),f=W(n*u),c=W(s*l),d=W(W(r*a)*u),p=W(W(o*i)*l);return f===c&&d===p}negate(){return new be(this.x,W(-this.y),this.z)}double(){const{x:e,y:n,z:r}=this,i=W(e*e),s=W(n*n),o=W(s*s),a=e+s,l=W(tn*(W(a*a)-i-o)),u=W(Nn*i),f=W(u*u),c=W(f-tn*l),d=W(u*(l-c)-vi*o),p=W(tn*n*r);return new be(c,d,p)}add(e){Ei(e);const{x:n,y:r,z:i}=this,{x:s,y:o,z:a}=e;if(s===pe||o===pe)return this;if(n===pe||r===pe)return e;const l=W(i*i),u=W(a*a),f=W(n*u),c=W(s*l),d=W(W(r*a)*u),p=W(W(o*i)*l),m=W(c-f),b=W(p-d);if(m===pe)return b===pe?this.double():be.ZERO;const g=W(m*m),L=W(m*g),C=W(f*g),H=W(b*b-L-tn*C),v=W(b*(C-H)-d*L),_=W(i*a*m);return new be(H,v,_)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){const n=be.ZERO;if(typeof e=="bigint"&&e===pe)return n;let r=ki(e);if(r===Ce)return this;if(!tr){let c=n,d=this;for(;r>pe;)r&Ce&&(c=c.add(d)),d=d.double(),r>>=Ce;return c}let{k1neg:i,k1:s,k2neg:o,k2:a}=er.splitScalar(r),l=n,u=n,f=this;for(;s>pe||a>pe;)s&Ce&&(l=l.add(f)),a&Ce&&(u=u.add(f)),f=f.double(),s>>=Ce,a>>=Ce;return i&&(l=l.negate()),o&&(u=u.negate()),u=new be(W(u.x*er.beta),u.y,u.z),l.add(u)}precomputeWindow(e){const n=tr?128/e+1:256/e+1,r=[];let i=this,s=i;for(let o=0;o<n;o++){s=i,r.push(s);for(let a=1;a<2**(e-1);a++)s=s.add(i),r.push(s);i=s.double()}return r}wNAF(e,n){!n&&this.equals(be.BASE)&&(n=me.BASE);const r=n&&n._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let i=n&&Vr.get(n);i||(i=this.precomputeWindow(r),n&&r!==1&&(i=be.normalizeZ(i),Vr.set(n,i)));let s=be.ZERO,o=be.BASE;const a=1+(tr?128/r:256/r),l=2**(r-1),u=BigInt(2**r-1),f=2**r,c=BigInt(r);for(let d=0;d<a;d++){const p=d*l;let m=Number(e&u);e>>=c,m>l&&(m-=f,e+=Ce);const b=p,g=p+Math.abs(m)-1,L=d%2!==0,C=m<0;m===0?o=o.add(nr(L,i[b])):s=s.add(nr(C,i[g]))}return{p:s,f:o}}multiply(e,n){let r=ki(e),i,s;if(tr){const{k1neg:o,k1:a,k2neg:l,k2:u}=er.splitScalar(r);let{p:f,f:c}=this.wNAF(a,n),{p:d,f:p}=this.wNAF(u,n);f=nr(o,f),d=nr(l,d),d=new be(W(d.x*er.beta),d.y,d.z),i=f.add(d),s=c.add(p)}else{const{p:o,f:a}=this.wNAF(r,n);i=o,s=a}return be.normalizeZ([i,s])[0]}toAffine(e){const{x:n,y:r,z:i}=this,s=this.equals(be.ZERO);e==null&&(e=s?vi:Bn(i));const o=e,a=W(o*o),l=W(a*o),u=W(n*a),f=W(r*l),c=W(i*o);if(s)return me.ZERO;if(c!==Ce)throw new Error("invZ was invalid");return new me(u,f)}}be.BASE=new be(Ee.Gx,Ee.Gy,Ce);be.ZERO=new be(pe,Ce,pe);function nr(t,e){const n=e.negate();return t?n:e}const Vr=new WeakMap;class me{constructor(e,n){this.x=e,this.y=n}_setWindowSize(e){this._WINDOW_SIZE=e,Vr.delete(this)}hasEvenY(){return this.y%tn===pe}static fromCompressedHex(e){const n=e.length===32,r=ht(n?e:e.subarray(1));if(!cr(r))throw new Error("Point is not on curve");const i=wi(r);let s=La(i);const o=(s&Ce)===Ce;n?o&&(s=W(-s)):(e[0]&1)===1!==o&&(s=W(-s));const a=new me(r,s);return a.assertValidity(),a}static fromUncompressedHex(e){const n=ht(e.subarray(1,_t+1)),r=ht(e.subarray(_t+1,_t*2+1)),i=new me(n,r);return i.assertValidity(),i}static fromHex(e){const n=xt(e),r=n.length,i=n[0];if(r===_t)return this.fromCompressedHex(n);if(r===mr&&(i===2||i===3))return this.fromCompressedHex(n);if(r===gr&&i===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${mr} compressed bytes or ${gr} uncompressed bytes, not ${r}`)}static fromPrivateKey(e){return me.BASE.multiply(mn(e))}static fromSignature(e,n,r){const{r:i,s}=Rs(n);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const o=Jr(xt(e)),{n:a}=Ee,l=r===2||r===3?i+a:i,u=Bn(l,a),f=W(-o*u,a),c=W(s*u,a),d=r&1?"03":"02",p=me.fromHex(d+nn(l)),m=me.BASE.multiplyAndAddUnsafe(p,f,c);if(!m)throw new Error("Cannot recover signature: point at infinify");return m.assertValidity(),m}toRawBytes(e=!1){return rn(this.toHex(e))}toHex(e=!1){const n=nn(this.x);return e?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${nn(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const e="Point is not on elliptic curve",{x:n,y:r}=this;if(!cr(n)||!cr(r))throw new Error(e);const i=W(r*r),s=wi(n);if(W(i-s)!==pe)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new me(this.x,W(-this.y))}double(){return be.fromAffine(this).double().toAffine()}add(e){return be.fromAffine(this).add(be.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return be.fromAffine(this).multiply(e,this).toAffine()}multiplyAndAddUnsafe(e,n,r){const i=be.fromAffine(this),s=n===pe||n===Ce||this!==me.BASE?i.multiplyUnsafe(n):i.multiply(n),o=be.fromAffine(e).multiplyUnsafe(r),a=s.add(o);return a.equals(be.ZERO)?void 0:a.toAffine()}}me.BASE=new me(Ee.Gx,Ee.Gy);me.ZERO=new me(pe,pe);function Ai(t){return Number.parseInt(t[0],16)>=8?"00"+t:t}function Ii(t){if(t.length<2||t[0]!==2)throw new Error(`Invalid signature integer tag: ${In(t)}`);const e=t[1],n=t.subarray(2,e+2);if(!e||n.length!==e)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:ht(n),left:t.subarray(e+2)}}function Ia(t){if(t.length<2||t[0]!=48)throw new Error(`Invalid signature tag: ${In(t)}`);if(t[1]!==t.length-2)throw new Error("Invalid signature: incorrect length");const{data:e,left:n}=Ii(t.subarray(2)),{data:r,left:i}=Ii(n);if(i.length)throw new Error(`Invalid signature: left bytes after parsing: ${In(i)}`);return{r:e,s:r}}class Pt{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromCompact(e){const n=e instanceof Uint8Array,r="Signature.fromCompact";if(typeof e!="string"&&!n)throw new TypeError(`${r}: Expected string or Uint8Array`);const i=n?In(e):e;if(i.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new Pt(br(i.slice(0,64)),br(i.slice(64,128)))}static fromDER(e){const n=e instanceof Uint8Array;if(typeof e!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r,s:i}=Ia(n?e:rn(e));return new Pt(r,i)}static fromHex(e){return this.fromDER(e)}assertValidity(){const{r:e,s:n}=this;if(!Sn(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Sn(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const e=Ee.n>>Ce;return this.s>e}normalizeS(){return this.hasHighS()?new Pt(this.r,W(-this.s,Ee.n)):this}toDERRawBytes(){return rn(this.toDERHex())}toDERHex(){const e=Ai(Fn(this.s)),n=Ai(Fn(this.r)),r=e.length/2,i=n.length/2,s=Fn(r),o=Fn(i);return`30${Fn(i+r+4)}02${o}${n}02${s}${e}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return rn(this.toCompactHex())}toCompactHex(){return nn(this.r)+nn(this.s)}}function $t(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];const e=t.reduce((r,i)=>r+i.length,0),n=new Uint8Array(e);for(let r=0,i=0;r<t.length;r++){const s=t[r];n.set(s,i),i+=s.length}return n}const ka=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function In(t){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");let e="";for(let n=0;n<t.length;n++)e+=ka[t[n]];return e}const Sa=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function nn(t){if(typeof t!="bigint")throw new Error("Expected bigint");if(!(pe<=t&&t<Sa))throw new Error("Expected number 0 <= n < 2^256");return t.toString(16).padStart(64,"0")}function kn(t){const e=rn(nn(t));if(e.length!==32)throw new Error("Error: expected 32 bytes");return e}function Fn(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function br(t){if(typeof t!="string")throw new TypeError("hexToNumber: expected string, got "+typeof t);return BigInt(`0x${t}`)}function rn(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+t.length);const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){const r=n*2,i=t.slice(r,r+2),s=Number.parseInt(i,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}function ht(t){return br(In(t))}function xt(t){return t instanceof Uint8Array?Uint8Array.from(t):rn(t)}function ki(t){if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)return BigInt(t);if(typeof t=="bigint"&&Sn(t))return t;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function W(t,e=Ee.P){const n=t%e;return n>=pe?n:e+n}function mt(t,e){const{P:n}=Ee;let r=t;for(;e-- >pe;)r*=r,r%=n;return r}function La(t){const{P:e}=Ee,n=BigInt(6),r=BigInt(11),i=BigInt(22),s=BigInt(23),o=BigInt(44),a=BigInt(88),l=t*t*t%e,u=l*l*t%e,f=mt(u,Nn)*u%e,c=mt(f,Nn)*u%e,d=mt(c,tn)*l%e,p=mt(d,r)*d%e,m=mt(p,i)*p%e,b=mt(m,o)*m%e,g=mt(b,a)*b%e,L=mt(g,o)*m%e,C=mt(L,Nn)*u%e,H=mt(C,s)*p%e,v=mt(H,n)*l%e,_=mt(v,tn);if(_*_%e!==t)throw new Error("Cannot find square root");return _}function Bn(t,e=Ee.P){if(t===pe||e<=pe)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=W(t,e),r=e,i=pe,s=Ce;for(;n!==pe;){const a=r/n,l=r%n,u=i-s*a;r=n,n=l,i=s,s=u}if(r!==Ce)throw new Error("invert: does not exist");return W(i,e)}function Ca(t,e=Ee.P){const n=new Array(t.length),r=t.reduce((s,o,a)=>o===pe?s:(n[a]=s,W(s*o,e)),Ce),i=Bn(r,e);return t.reduceRight((s,o,a)=>o===pe?s:(n[a]=W(s*n[a],e),W(s*o,e)),i),n}function Ha(t){const e=t.length*8-An*8,n=ht(t);return e>0?n>>BigInt(e):n}function Jr(t,e=!1){const n=Ha(t);if(e)return n;const{n:r}=Ee;return n>=r?n-r:n}let wn,Vn;class xa{constructor(e,n){if(this.hashLen=e,this.qByteLen=n,typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(e).fill(1),this.k=new Uint8Array(e).fill(0),this.counter=0}hmac(...e){return de.hmacSha256(this.k,...e)}hmacSync(...e){return Vn(this.k,...e)}checkSync(){if(typeof Vn!="function")throw new Zr("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(e=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),e),this.v=await this.hmac(this.v),e.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),e),this.v=await this.hmac(this.v))}reseedSync(e=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),e),this.v=this.hmacSync(this.v),e.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),e),this.v=this.hmacSync(this.v))}async generate(){this.incr();let e=0;const n=[];for(;e<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();n.push(r),e+=this.v.length}return $t(...n)}generateSync(){this.checkSync(),this.incr();let e=0;const n=[];for(;e<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();n.push(r),e+=this.v.length}return $t(...n)}}function Sn(t){return pe<t&&t<Ee.n}function cr(t){return pe<t&&t<Ee.P}function Ta(t,e,n,r=!0){const{n:i}=Ee,s=Jr(t,!0);if(!Sn(s))return;const o=Bn(s,i),a=me.BASE.multiply(s),l=W(a.x,i);if(l===pe)return;const u=W(o*W(e+n*l,i),i);if(u===pe)return;let f=new Pt(l,u),c=(a.x===f.r?0:2)|Number(a.y&Ce);return r&&f.hasHighS()&&(f=f.normalizeS(),c^=1),{sig:f,recovery:c}}function mn(t){let e;if(typeof t=="bigint")e=t;else if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)e=BigInt(t);else if(typeof t=="string"){if(t.length!==2*An)throw new Error("Expected 32 bytes of private key");e=br(t)}else if(t instanceof Uint8Array){if(t.length!==An)throw new Error("Expected 32 bytes of private key");e=ht(t)}else throw new TypeError("Expected valid private key");if(!Sn(e))throw new Error("Expected private key: 0 < key < n");return e}function Qr(t){return t instanceof me?(t.assertValidity(),t):me.fromHex(t)}function Rs(t){if(t instanceof Pt)return t.assertValidity(),t;try{return Pt.fromDER(t)}catch{return Pt.fromCompact(t)}}function Ua(t,e=!1){return me.fromPrivateKey(t).toRawBytes(e)}function Si(t){const e=t instanceof Uint8Array,n=typeof t=="string",r=(e||n)&&t.length;return e?r===mr||r===gr:n?r===mr*2||r===gr*2:t instanceof me}function Fs(t,e,n=!1){if(Si(t))throw new TypeError("getSharedSecret: first arg must be private key");if(!Si(e))throw new TypeError("getSharedSecret: second arg must be public key");const r=Qr(e);return r.assertValidity(),r.multiply(mn(t)).toRawBytes(n)}function Ps(t){const e=t.length>_t?t.slice(0,_t):t;return ht(e)}function Ba(t){const e=Ps(t),n=W(e,Ee.n);return Ds(n<pe?e:n)}function Ds(t){return kn(t)}function Oa(t,e,n){if(t==null)throw new Error(`sign: expected valid message hash, not "${t}"`);const r=xt(t),i=mn(e),s=[Ds(i),Ba(r)];if(n!=null){n===!0&&(n=de.randomBytes(_t));const l=xt(n);if(l.length!==_t)throw new Error(`sign: Expected ${_t} bytes of extra data`);s.push(l)}const o=$t(...s),a=Ps(r);return{seed:o,m:a,d:i}}function Ra(t,e){const{sig:n,recovery:r}=t,{der:i,recovered:s}=Object.assign({canonical:!0,der:!0},e),o=i?n.toDERRawBytes():n.toCompactRawBytes();return s?[o,r]:o}function Fa(t,e,n={}){const{seed:r,m:i,d:s}=Oa(t,e,n.extraEntropy),o=new xa(Aa,An);o.reseedSync(r);let a;for(;!(a=Ta(o.generateSync(),i,s,n.canonical));)o.reseedSync();return Ra(a,n)}const Pa={strict:!0};function Da(t,e,n,r=Pa){let i;try{i=Rs(t),e=xt(e)}catch{return!1}const{r:s,s:o}=i;if(r.strict&&i.hasHighS())return!1;const a=Jr(e);let l;try{l=Qr(n)}catch{return!1}const{n:u}=Ee,f=Bn(o,u),c=W(a*f,u),d=W(s*f,u),p=me.BASE.multiplyAndAddUnsafe(l,c,d);return p?W(p.x,u)===s:!1}function yr(t){return W(ht(t),Ee.n)}class Ln{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromHex(e){const n=xt(e);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const r=ht(n.subarray(0,32)),i=ht(n.subarray(32,64));return new Ln(r,i)}assertValidity(){const{r:e,s:n}=this;if(!cr(e)||!Sn(n))throw new Error("Invalid signature")}toHex(){return nn(this.r)+nn(this.s)}toRawBytes(){return rn(this.toHex())}}function Ma(t){return me.fromPrivateKey(t).toRawX()}class Ms{constructor(e,n,r=de.randomBytes()){if(e==null)throw new TypeError(`sign: Expected valid message, not "${e}"`);this.m=xt(e);const{x:i,scalar:s}=this.getScalar(mn(n));if(this.px=i,this.d=s,this.rand=xt(r),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(e){const n=me.fromPrivateKey(e),r=n.hasEvenY()?e:Ee.n-e;return{point:n,scalar:r,x:n.toRawX()}}initNonce(e,n){return kn(e^ht(n))}finalizeNonce(e){const n=W(ht(e),Ee.n);if(n===pe)throw new Error("sign: Creation of signature failed. k is zero");const{point:r,x:i,scalar:s}=this.getScalar(n);return{R:r,rx:i,k:s}}finalizeSig(e,n,r,i){return new Ln(e.x,W(n+r*i,Ee.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:e,d:n,px:r,rand:i}=this,s=de.taggedHash,o=this.initNonce(n,await s(Yt.aux,i)),{R:a,rx:l,k:u}=this.finalizeNonce(await s(Yt.nonce,o,r,e)),f=yr(await s(Yt.challenge,l,r,e)),c=this.finalizeSig(a,u,f,n);return await js(c,e,r)||this.error(),c}calcSync(){const{m:e,d:n,px:r,rand:i}=this,s=de.taggedHashSync,o=this.initNonce(n,s(Yt.aux,i)),{R:a,rx:l,k:u}=this.finalizeNonce(s(Yt.nonce,o,r,e)),f=yr(s(Yt.challenge,l,r,e)),c=this.finalizeSig(a,u,f,n);return zs(c,e,r)||this.error(),c}}async function Na(t,e,n){return new Ms(t,e,n).calc()}function Va(t,e,n){return new Ms(t,e,n).calcSync()}function Ns(t,e,n){const r=t instanceof Ln,i=r?t:Ln.fromHex(t);return r&&i.assertValidity(),{...i,m:xt(e),P:Qr(n)}}function Vs(t,e,n,r){const i=me.BASE.multiplyAndAddUnsafe(e,mn(n),W(-r,Ee.n));return!(!i||!i.hasEvenY()||i.x!==t)}async function js(t,e,n){try{const{r,s:i,m:s,P:o}=Ns(t,e,n),a=yr(await de.taggedHash(Yt.challenge,kn(r),o.toRawX(),s));return Vs(r,o,i,a)}catch{return!1}}function zs(t,e,n){try{const{r,s:i,m:s,P:o}=Ns(t,e,n),a=yr(de.taggedHashSync(Yt.challenge,kn(r),o.toRawX(),s));return Vs(r,o,i,a)}catch(r){if(r instanceof Zr)throw r;return!1}}const Gn={Signature:Ln,getPublicKey:Ma,sign:Na,verify:js,signSync:Va,verifySync:zs};me.BASE._setWindowSize(8);const ct={node:Ea,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Yt={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},rr={},de={bytesToHex:In,hexToBytes:rn,concatBytes:$t,mod:W,invert:Bn,isValidPrivateKey(t){try{return mn(t),!0}catch{return!1}},_bigintTo32Bytes:kn,_normalizePrivateKey:mn,hashToPrivateKey:t=>{t=xt(t);const e=An+8;if(t.length<e||t.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=W(ht(t),Ee.n-Ce)+Ce;return kn(n)},randomBytes:(t=32)=>{if(ct.web)return ct.web.getRandomValues(new Uint8Array(t));if(ct.node){const{randomBytes:e}=ct.node;return Uint8Array.from(e(t))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>de.hashToPrivateKey(de.randomBytes(An+8)),precompute(t=8,e=me.BASE){const n=e===me.BASE?e:new me(e.x,e.y);return n._setWindowSize(t),n.multiply(Nn),n},sha256:async(...t)=>{if(ct.web){const e=await ct.web.subtle.digest("SHA-256",$t(...t));return new Uint8Array(e)}else if(ct.node){const{createHash:e}=ct.node,n=e("sha256");return t.forEach(r=>n.update(r)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(t,...e)=>{if(ct.web){const n=await ct.web.subtle.importKey("raw",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=$t(...e),i=await ct.web.subtle.sign("HMAC",n,r);return new Uint8Array(i)}else if(ct.node){const{createHmac:n}=ct.node,r=n("sha256",t);return e.forEach(i=>r.update(i)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(t,...e)=>{let n=rr[t];if(n===void 0){const r=await de.sha256(Uint8Array.from(t,i=>i.charCodeAt(0)));n=$t(r,r),rr[t]=n}return de.sha256(n,...e)},taggedHashSync:(t,...e)=>{if(typeof wn!="function")throw new Zr("sha256Sync is undefined, you need to set it");let n=rr[t];if(n===void 0){const r=wn(Uint8Array.from(t,i=>i.charCodeAt(0)));n=$t(r,r),rr[t]=n}return wn(n,...e)},_JacobianPoint:be};Object.defineProperties(de,{sha256Sync:{configurable:!1,get(){return wn},set(t){wn||(wn=t)}},hmacSha256Sync:{configurable:!1,get(){return Vn},set(t){Vn||(Vn=t)}}});const Li={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ur=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Lt=(t,e)=>t<<32-e|t>>>e,ja=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!ja)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));(()=>{const t=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(t){const{setImmediate:e}=t("timers");return()=>new Promise(n=>e(n))}}catch{}return()=>new Promise(e=>setTimeout(e,0))})();function za(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function Yr(t){if(typeof t=="string"&&(t=za(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function Ci(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Ka(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ci(t.outputLen),Ci(t.blockLen)}let jr=class{clone(){return this._cloneInto()}};function Ga(t){const e=r=>t().update(Yr(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function qa(t=32){if(Li.web)return Li.web.getRandomValues(new Uint8Array(t));throw new Error("The environment doesn't have randomBytes function")}function Wa(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const i=BigInt(32),s=BigInt(4294967295),o=Number(n>>i&s),a=Number(n&s),l=r?4:0,u=r?0:4;t.setUint32(e+l,o,r),t.setUint32(e+u,a,r)}let Xa=class extends jr{constructor(e,n,r,i){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Ur(this.buffer)}update(e){if(this.destroyed)throw new Error("instance is destroyed");const{view:n,buffer:r,blockLen:i,finished:s}=this;if(s)throw new Error("digest() was already called");e=Yr(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){const u=Ur(e);for(;i<=o-a;a+=i)this.process(u,a);continue}r.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;const{buffer:n,view:r,blockLen:i,isLE:s}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>i-o&&(this.process(r,0),o=0);for(let l=o;l<i;l++)n[l]=0;Wa(r,i-8,BigInt(this.length*8),s),this.process(r,0);const a=Ur(e);this.get().forEach((l,u)=>a.setUint32(4*u,l,s))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:i,finished:s,destroyed:o,pos:a}=this;return e.length=i,e.pos=a,e.finished=s,e.destroyed=o,i%n&&e.buffer.set(r),e}};const Za=(t,e,n)=>t&e^~t&n,Ja=(t,e,n)=>t&e^t&n^e&n,Qa=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),qt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Wt=new Uint32Array(64);let Ya=class extends Xa{constructor(){super(64,32,8,!1),this.A=qt[0]|0,this.B=qt[1]|0,this.C=qt[2]|0,this.D=qt[3]|0,this.E=qt[4]|0,this.F=qt[5]|0,this.G=qt[6]|0,this.H=qt[7]|0}get(){const{A:e,B:n,C:r,D:i,E:s,F:o,G:a,H:l}=this;return[e,n,r,i,s,o,a,l]}set(e,n,r,i,s,o,a,l){this.A=e|0,this.B=n|0,this.C=r|0,this.D=i|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=l|0}process(e,n){for(let c=0;c<16;c++,n+=4)Wt[c]=e.getUint32(n,!1);for(let c=16;c<64;c++){const d=Wt[c-15],p=Wt[c-2],m=Lt(d,7)^Lt(d,18)^d>>>3,b=Lt(p,17)^Lt(p,19)^p>>>10;Wt[c]=b+Wt[c-7]+m+Wt[c-16]|0}let{A:r,B:i,C:s,D:o,E:a,F:l,G:u,H:f}=this;for(let c=0;c<64;c++){const d=Lt(a,6)^Lt(a,11)^Lt(a,25),p=f+d+Za(a,l,u)+Qa[c]+Wt[c]|0,b=(Lt(r,2)^Lt(r,13)^Lt(r,22))+Ja(r,i,s)|0;f=u,u=l,l=a,a=o+p|0,o=s,s=i,i=r,r=p+b|0}r=r+this.A|0,i=i+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,l=l+this.F|0,u=u+this.G|0,f=f+this.H|0,this.set(r,i,s,o,a,l,u,f)}roundClean(){Wt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}};const qn=Ga(()=>new Ya);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ln(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function At(...t){const e=(i,s)=>o=>i(s(o)),n=Array.from(t).reverse().reduce((i,s)=>i?e(i,s.encode):s.encode,void 0),r=t.reduce((i,s)=>i?e(i,s.decode):s.decode,void 0);return{encode:n,decode:r}}function Ut(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(ln(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const r=t.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return r})}}}function Bt(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function Wn(t,e="="){if(ln(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.decode: non-string input=${i}`);let r=n.length;if(r*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===e;r--)if(!((r-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function Ks(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Hi(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let r=0;const i=[],s=Array.from(t);for(s.forEach(o=>{if(ln(o),o<0||o>=e)throw new Error(`Wrong integer: ${o}`)});;){let o=0,a=!0;for(let l=r;l<s.length;l++){const u=s[l],f=e*o+u;if(!Number.isSafeInteger(f)||e*o/e!==o||f-u!==e*o)throw new Error("convertRadix: carry overflow");if(o=f%n,s[l]=Math.floor(f/n),!Number.isSafeInteger(s[l])||s[l]*n+o!==f)throw new Error("convertRadix: carry overflow");if(a)s[l]?a=!1:r=l;else continue}if(i.push(o),a)break}for(let o=0;o<t.length-1&&t[o]===0;o++)i.push(0);return i.reverse()}const Gs=(t,e)=>e?Gs(e,t%e):t,vr=(t,e)=>t+(e-Gs(t,e));function zr(t,e,n,r){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(vr(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${vr(e,n)}`);let i=0,s=0;const o=2**n-1,a=[];for(const l of t){if(ln(l),l>=2**e)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(i=i<<e|l,s+e>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);for(s+=e;s>=n;s-=n)a.push((i>>s-n&o)>>>0);i&=2**s-1}if(i=i<<n-s&o,!r&&s>=e)throw new Error("Excess padding");if(!r&&i)throw new Error(`Non-zero padding: ${i}`);return r&&s>0&&a.push(i>>>0),a}function qs(t){return ln(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Hi(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Hi(e,t,2**8))}}}function Vt(t,e=!1){if(ln(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(vr(8,t)>32||vr(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return zr(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(zr(n,t,8,e))}}}function xi(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function Ws(t,e){if(ln(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const r=e(n).slice(0,t),i=new Uint8Array(n.length+t);return i.set(n),i.set(r,n.length),i},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const r=n.slice(0,-t),i=e(r).slice(0,t),s=n.slice(-t);for(let o=0;o<t;o++)if(i[o]!==s[o])throw new Error("Invalid checksum");return r}}}const $a={alphabet:Ut,chain:At,checksum:Ws,radix:qs,radix2:Vt,join:Bt,padding:Wn},Xs=At(Vt(4),Ut("0123456789ABCDEF"),Bt("")),Zs=At(Vt(5),Ut("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Wn(5),Bt("")),el=At(Vt(5),Ut("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Wn(5),Bt("")),tl=At(Vt(5),Ut("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Bt(""),Ks(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Cn=At(Vt(6),Ut("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Wn(6),Bt("")),Js=At(Vt(6),Ut("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Wn(6),Bt("")),$r=t=>At(qs(58),Ut(t),Bt("")),zn=$r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),nl=$r("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),rl=$r("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Ti=[0,2,3,5,6,7,9,10,11],Qs={encode(t){let e="";for(let n=0;n<t.length;n+=8){const r=t.subarray(n,n+8);e+=zn.encode(r).padStart(Ti[r.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const r=t.slice(n,n+11),i=Ti.indexOf(r.length),s=zn.decode(r);for(let o=0;o<s.length-i;o++)if(s[o]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(s.slice(s.length-i)))}return Uint8Array.from(e)}},Ys=t=>At(Ws(4,e=>t(t(e))),zn),Kr=At(Ut("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Bt("")),Ui=[996825010,642813549,513874426,1027748829,705979059];function Pn(t){const e=t>>25;let n=(t&33554431)<<5;for(let r=0;r<Ui.length;r++)(e>>r&1)===1&&(n^=Ui[r]);return n}function Bi(t,e,n=1){const r=t.length;let i=1;for(let s=0;s<r;s++){const o=t.charCodeAt(s);if(o<33||o>126)throw new Error(`Invalid prefix (${t})`);i=Pn(i)^o>>5}i=Pn(i);for(let s=0;s<r;s++)i=Pn(i)^t.charCodeAt(s)&31;for(let s of e)i=Pn(i)^s;for(let s=0;s<6;s++)i=Pn(i);return i^=n,Kr.encode(zr([i%2**30],30,5,!1))}function $s(t){const e=t==="bech32"?1:734539939,n=Vt(5),r=n.decode,i=n.encode,s=xi(r);function o(f,c,d=90){if(typeof f!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof f}`);if(!Array.isArray(c)||c.length&&typeof c[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof c}`);const p=f.length+7+c.length;if(d!==!1&&p>d)throw new TypeError(`Length ${p} exceeds limit ${d}`);return f=f.toLowerCase(),`${f}1${Kr.encode(c)}${Bi(f,c,e)}`}function a(f,c=90){if(typeof f!="string")throw new Error(`bech32.decode input should be string, not ${typeof f}`);if(f.length<8||c!==!1&&f.length>c)throw new TypeError(`Wrong string length: ${f.length} (${f}). Expected (8..${c})`);const d=f.toLowerCase();if(f!==d&&f!==f.toUpperCase())throw new Error("String must be lowercase or uppercase");f=d;const p=f.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');const m=f.slice(0,p),b=f.slice(p+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");const g=Kr.decode(b).slice(0,-6),L=Bi(m,g,e);if(!b.endsWith(L))throw new Error(`Invalid checksum in ${f}: expected "${L}"`);return{prefix:m,words:g}}const l=xi(a);function u(f){const{prefix:c,words:d}=a(f,!1);return{prefix:c,words:d,bytes:r(d)}}return{encode:o,decode:a,decodeToBytes:u,decodeUnsafe:l,fromWords:r,fromWordsUnsafe:s,toWords:i}}const Mt=$s("bech32"),il=$s("bech32m"),eo={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},to=At(Vt(4),Ut("0123456789abcdef"),Bt(""),Ks(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),Kn={utf8:eo,hex:to,base16:Xs,base32:Zs,base64:Cn,base64url:Js,base58:zn,base58xmr:Qs},no=`Invalid encoding type. Available types: ${Object.keys(Kn).join(", ")}`,ro=(t,e)=>{if(typeof t!="string"||!Kn.hasOwnProperty(t))throw new TypeError(no);if(!(e instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Kn[t].encode(e)},sl=ro,io=(t,e)=>{if(!Kn.hasOwnProperty(t))throw new TypeError(no);if(typeof e!="string")throw new TypeError("stringToBytes() expects string");return Kn[t].decode(e)},ol=io,al=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:ln,base16:Xs,base32:Zs,base32crockford:tl,base32hex:el,base58:zn,base58check:Ys,base58flickr:nl,base58xmr:Qs,base58xrp:rl,base64:Cn,base64url:Js,bech32:Mt,bech32m:il,bytes:ol,bytesToString:ro,hex:to,str:sl,stringToBytes:io,utf8:eo,utils:$a},Symbol.toStringTag,{value:"Module"}));function ll(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var ei={};Object.defineProperty(ei,"__esModule",{value:!0});var ti=ei.wordlist=void 0;ti=ei.wordlist=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);var ft={},je={};Object.defineProperty(je,"__esModule",{value:!0});je.output=je.exists=je.hash=_n=je.bytes=je.bool=je.number=void 0;function _r(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}je.number=_r;function so(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}je.bool=so;function ni(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}var _n=je.bytes=ni;function oo(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");_r(t.outputLen),_r(t.blockLen)}je.hash=oo;function ao(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}je.exists=ao;function lo(t,e){ni(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}je.output=lo;const ul={number:_r,bool:so,bytes:ni,hash:oo,exists:ao,output:lo};je.default=ul;var Hn={},uo={},Ke={},Ir={};Object.defineProperty(Ir,"__esModule",{value:!0});Ir.crypto=void 0;Ir.crypto={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};(function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.isLE=t.rotr=t.createView=t.u32=t.u8=void 0;const e=Ir,n=v=>new Uint8Array(v.buffer,v.byteOffset,v.byteLength);t.u8=n;const r=v=>new Uint32Array(v.buffer,v.byteOffset,Math.floor(v.byteLength/4));t.u32=r;const i=v=>new DataView(v.buffer,v.byteOffset,v.byteLength);t.createView=i;const s=(v,_)=>v<<32-_|v>>>_;if(t.rotr=s,t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!t.isLE)throw new Error("Non little-endian hardware is not supported");const o=Array.from({length:256},(v,_)=>_.toString(16).padStart(2,"0"));function a(v){if(!(v instanceof Uint8Array))throw new Error("Uint8Array expected");let _="";for(let w=0;w<v.length;w++)_+=o[v[w]];return _}t.bytesToHex=a;function l(v){if(typeof v!="string")throw new TypeError("hexToBytes: expected string, got "+typeof v);if(v.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const _=new Uint8Array(v.length/2);for(let w=0;w<_.length;w++){const h=w*2,y=v.slice(h,h+2),B=Number.parseInt(y,16);if(Number.isNaN(B)||B<0)throw new Error("Invalid byte sequence");_[w]=B}return _}t.hexToBytes=l;const u=async()=>{};t.nextTick=u;async function f(v,_,w){let h=Date.now();for(let y=0;y<v;y++){w(y);const B=Date.now()-h;B>=0&&B<_||(await(0,t.nextTick)(),h+=B)}}t.asyncLoop=f;function c(v){if(typeof v!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof v}`);return new TextEncoder().encode(v)}t.utf8ToBytes=c;function d(v){if(typeof v=="string"&&(v=c(v)),!(v instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof v})`);return v}t.toBytes=d;function p(...v){if(!v.every(h=>h instanceof Uint8Array))throw new Error("Uint8Array list expected");if(v.length===1)return v[0];const _=v.reduce((h,y)=>h+y.length,0),w=new Uint8Array(_);for(let h=0,y=0;h<v.length;h++){const B=v[h];w.set(B,y),y+=B.length}return w}t.concatBytes=p;class m{clone(){return this._cloneInto()}}t.Hash=m;const b=v=>Object.prototype.toString.call(v)==="[object Object]"&&v.constructor===Object;function g(v,_){if(_!==void 0&&(typeof _!="object"||!b(_)))throw new TypeError("Options should be object or undefined");return Object.assign(v,_)}t.checkOpts=g;function L(v){const _=h=>v().update(d(h)).digest(),w=v();return _.outputLen=w.outputLen,_.blockLen=w.blockLen,_.create=()=>v(),_}t.wrapConstructor=L;function C(v){const _=(h,y)=>v(y).update(d(h)).digest(),w=v({});return _.outputLen=w.outputLen,_.blockLen=w.blockLen,_.create=h=>v(h),_}t.wrapConstructorWithOpts=C;function H(v=32){if(e.crypto.web)return e.crypto.web.getRandomValues(new Uint8Array(v));if(e.crypto.node)return new Uint8Array(e.crypto.node.randomBytes(v).buffer);throw new Error("The environment doesn't have randomBytes function")}t.randomBytes=H})(Ke);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.hmac=void 0;const e=je,n=Ke;class r extends n.Hash{constructor(o,a){super(),this.finished=!1,this.destroyed=!1,e.default.hash(o);const l=(0,n.toBytes)(a);if(this.iHash=o.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const u=this.blockLen,f=new Uint8Array(u);f.set(l.length>u?o.create().update(l).digest():l);for(let c=0;c<f.length;c++)f[c]^=54;this.iHash.update(f),this.oHash=o.create();for(let c=0;c<f.length;c++)f[c]^=106;this.oHash.update(f),f.fill(0)}update(o){return e.default.exists(this),this.iHash.update(o),this}digestInto(o){e.default.exists(this),e.default.bytes(o,this.outputLen),this.finished=!0,this.iHash.digestInto(o),this.oHash.update(o),this.oHash.digestInto(o),this.destroy()}digest(){const o=new Uint8Array(this.oHash.outputLen);return this.digestInto(o),o}_cloneInto(o){o||(o=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:l,finished:u,destroyed:f,blockLen:c,outputLen:d}=this;return o=o,o.finished=u,o.destroyed=f,o.blockLen=c,o.outputLen=d,o.oHash=a._cloneInto(o.oHash),o.iHash=l._cloneInto(o.iHash),o}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const i=(s,o,a)=>new r(s,o).update(a).digest();t.hmac=i,t.hmac.create=(s,o)=>new r(s,o)})(uo);Object.defineProperty(Hn,"__esModule",{value:!0});Hn.pbkdf2Async=Hn.pbkdf2=void 0;const ir=je,cl=uo,En=Ke;function co(t,e,n,r){ir.default.hash(t);const i=(0,En.checkOpts)({dkLen:32,asyncTick:10},r),{c:s,dkLen:o,asyncTick:a}=i;if(ir.default.number(s),ir.default.number(o),ir.default.number(a),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const l=(0,En.toBytes)(e),u=(0,En.toBytes)(n),f=new Uint8Array(o),c=cl.hmac.create(t,l),d=c._cloneInto().update(u);return{c:s,dkLen:o,asyncTick:a,DK:f,PRF:c,PRFSalt:d}}function fo(t,e,n,r,i){return t.destroy(),e.destroy(),r&&r.destroy(),i.fill(0),n}function fl(t,e,n,r){const{c:i,dkLen:s,DK:o,PRF:a,PRFSalt:l}=co(t,e,n,r);let u;const f=new Uint8Array(4),c=(0,En.createView)(f),d=new Uint8Array(a.outputLen);for(let p=1,m=0;m<s;p++,m+=a.outputLen){const b=o.subarray(m,m+a.outputLen);c.setInt32(0,p,!1),(u=l._cloneInto(u)).update(f).digestInto(d),b.set(d.subarray(0,b.length));for(let g=1;g<i;g++){a._cloneInto(u).update(d).digestInto(d);for(let L=0;L<b.length;L++)b[L]^=d[L]}}return fo(a,l,o,u,d)}Hn.pbkdf2=fl;async function dl(t,e,n,r){const{c:i,dkLen:s,asyncTick:o,DK:a,PRF:l,PRFSalt:u}=co(t,e,n,r);let f;const c=new Uint8Array(4),d=(0,En.createView)(c),p=new Uint8Array(l.outputLen);for(let m=1,b=0;b<s;m++,b+=l.outputLen){const g=a.subarray(b,b+l.outputLen);d.setInt32(0,m,!1),(f=u._cloneInto(f)).update(c).digestInto(p),g.set(p.subarray(0,g.length)),await(0,En.asyncLoop)(i-1,o,L=>{l._cloneInto(f).update(p).digestInto(p);for(let C=0;C<g.length;C++)g[C]^=p[C]})}return fo(l,u,a,f,p)}Hn.pbkdf2Async=dl;var xn={},Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.SHA2=void 0;const Br=je,Dn=Ke;function hl(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const i=BigInt(32),s=BigInt(4294967295),o=Number(n>>i&s),a=Number(n&s),l=r?4:0,u=r?0:4;t.setUint32(e+l,o,r),t.setUint32(e+u,a,r)}let pl=class extends Dn.Hash{constructor(e,n,r,i){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,Dn.createView)(this.buffer)}update(e){Br.default.exists(this);const{view:n,buffer:r,blockLen:i}=this;e=(0,Dn.toBytes)(e);const s=e.length;for(let o=0;o<s;){const a=Math.min(i-this.pos,s-o);if(a===i){const l=(0,Dn.createView)(e);for(;i<=s-o;o+=i)this.process(l,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===i&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Br.default.exists(this),Br.default.output(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:i,isLE:s}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>i-o&&(this.process(r,0),o=0);for(let c=o;c<i;c++)n[c]=0;hl(r,i-8,BigInt(this.length*8),s),this.process(r,0);const a=(0,Dn.createView)(e),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=l/4,f=this.get();if(u>f.length)throw new Error("_sha2: outputLen bigger than state");for(let c=0;c<u;c++)a.setUint32(4*c,f[c],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:i,finished:s,destroyed:o,pos:a}=this;return e.length=i,e.pos=a,e.finished=s,e.destroyed=o,i%n&&e.buffer.set(r),e}};Xn.SHA2=pl;Object.defineProperty(xn,"__esModule",{value:!0});xn.sha224=kr=xn.sha256=void 0;const ml=Xn,gt=Ke,gl=(t,e,n)=>t&e^~t&n,bl=(t,e,n)=>t&e^t&n^e&n,yl=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Xt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Zt=new Uint32Array(64);class ho extends ml.SHA2{constructor(){super(64,32,8,!1),this.A=Xt[0]|0,this.B=Xt[1]|0,this.C=Xt[2]|0,this.D=Xt[3]|0,this.E=Xt[4]|0,this.F=Xt[5]|0,this.G=Xt[6]|0,this.H=Xt[7]|0}get(){const{A:e,B:n,C:r,D:i,E:s,F:o,G:a,H:l}=this;return[e,n,r,i,s,o,a,l]}set(e,n,r,i,s,o,a,l){this.A=e|0,this.B=n|0,this.C=r|0,this.D=i|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=l|0}process(e,n){for(let c=0;c<16;c++,n+=4)Zt[c]=e.getUint32(n,!1);for(let c=16;c<64;c++){const d=Zt[c-15],p=Zt[c-2],m=(0,gt.rotr)(d,7)^(0,gt.rotr)(d,18)^d>>>3,b=(0,gt.rotr)(p,17)^(0,gt.rotr)(p,19)^p>>>10;Zt[c]=b+Zt[c-7]+m+Zt[c-16]|0}let{A:r,B:i,C:s,D:o,E:a,F:l,G:u,H:f}=this;for(let c=0;c<64;c++){const d=(0,gt.rotr)(a,6)^(0,gt.rotr)(a,11)^(0,gt.rotr)(a,25),p=f+d+gl(a,l,u)+yl[c]+Zt[c]|0,b=((0,gt.rotr)(r,2)^(0,gt.rotr)(r,13)^(0,gt.rotr)(r,22))+bl(r,i,s)|0;f=u,u=l,l=a,a=o+p|0,o=s,s=i,i=r,r=p+b|0}r=r+this.A|0,i=i+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,l=l+this.F|0,u=u+this.G|0,f=f+this.H|0,this.set(r,i,s,o,a,l,u,f)}roundClean(){Zt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class vl extends ho{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}var kr=xn.sha256=(0,gt.wrapConstructor)(()=>new ho);xn.sha224=(0,gt.wrapConstructor)(()=>new vl);var bt={},po={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.add=t.toBig=t.split=t.fromBig=void 0;const e=BigInt(2**32-1),n=BigInt(32);function r(I,k=!1){return k?{h:Number(I&e),l:Number(I>>n&e)}:{h:Number(I>>n&e)|0,l:Number(I&e)|0}}t.fromBig=r;function i(I,k=!1){let O=new Uint32Array(I.length),T=new Uint32Array(I.length);for(let N=0;N<I.length;N++){const{h:re,l:he}=r(I[N],k);[O[N],T[N]]=[re,he]}return[O,T]}t.split=i;const s=(I,k)=>BigInt(I>>>0)<<n|BigInt(k>>>0);t.toBig=s;const o=(I,k,O)=>I>>>O,a=(I,k,O)=>I<<32-O|k>>>O,l=(I,k,O)=>I>>>O|k<<32-O,u=(I,k,O)=>I<<32-O|k>>>O,f=(I,k,O)=>I<<64-O|k>>>O-32,c=(I,k,O)=>I>>>O-32|k<<64-O,d=(I,k)=>k,p=(I,k)=>I,m=(I,k,O)=>I<<O|k>>>32-O,b=(I,k,O)=>k<<O|I>>>32-O,g=(I,k,O)=>k<<O-32|I>>>64-O,L=(I,k,O)=>I<<O-32|k>>>64-O;function C(I,k,O,T){const N=(k>>>0)+(T>>>0);return{h:I+O+(N/2**32|0)|0,l:N|0}}t.add=C;const H=(I,k,O)=>(I>>>0)+(k>>>0)+(O>>>0),v=(I,k,O,T)=>k+O+T+(I/2**32|0)|0,_=(I,k,O,T)=>(I>>>0)+(k>>>0)+(O>>>0)+(T>>>0),w=(I,k,O,T,N)=>k+O+T+N+(I/2**32|0)|0,h=(I,k,O,T,N)=>(I>>>0)+(k>>>0)+(O>>>0)+(T>>>0)+(N>>>0),y=(I,k,O,T,N,re)=>k+O+T+N+re+(I/2**32|0)|0,B={fromBig:r,split:i,toBig:t.toBig,shrSH:o,shrSL:a,rotrSH:l,rotrSL:u,rotrBH:f,rotrBL:c,rotr32H:d,rotr32L:p,rotlSH:m,rotlSL:b,rotlBH:g,rotlBL:L,add:C,add3L:H,add3H:v,add4L:_,add4H:w,add5H:y,add5L:h};t.default=B})(po);Object.defineProperty(bt,"__esModule",{value:!0});bt.sha384=bt.sha512_256=bt.sha512_224=Gr=bt.sha512=bt.SHA512=void 0;const _l=Xn,fe=po,Sr=Ke,[wl,El]=fe.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Jt=new Uint32Array(80),Qt=new Uint32Array(80);class Zn extends _l.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:r,Bl:i,Ch:s,Cl:o,Dh:a,Dl:l,Eh:u,El:f,Fh:c,Fl:d,Gh:p,Gl:m,Hh:b,Hl:g}=this;return[e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g]}set(e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=i|0,this.Ch=s|0,this.Cl=o|0,this.Dh=a|0,this.Dl=l|0,this.Eh=u|0,this.El=f|0,this.Fh=c|0,this.Fl=d|0,this.Gh=p|0,this.Gl=m|0,this.Hh=b|0,this.Hl=g|0}process(e,n){for(let H=0;H<16;H++,n+=4)Jt[H]=e.getUint32(n),Qt[H]=e.getUint32(n+=4);for(let H=16;H<80;H++){const v=Jt[H-15]|0,_=Qt[H-15]|0,w=fe.default.rotrSH(v,_,1)^fe.default.rotrSH(v,_,8)^fe.default.shrSH(v,_,7),h=fe.default.rotrSL(v,_,1)^fe.default.rotrSL(v,_,8)^fe.default.shrSL(v,_,7),y=Jt[H-2]|0,B=Qt[H-2]|0,I=fe.default.rotrSH(y,B,19)^fe.default.rotrBH(y,B,61)^fe.default.shrSH(y,B,6),k=fe.default.rotrSL(y,B,19)^fe.default.rotrBL(y,B,61)^fe.default.shrSL(y,B,6),O=fe.default.add4L(h,k,Qt[H-7],Qt[H-16]),T=fe.default.add4H(O,w,I,Jt[H-7],Jt[H-16]);Jt[H]=T|0,Qt[H]=O|0}let{Ah:r,Al:i,Bh:s,Bl:o,Ch:a,Cl:l,Dh:u,Dl:f,Eh:c,El:d,Fh:p,Fl:m,Gh:b,Gl:g,Hh:L,Hl:C}=this;for(let H=0;H<80;H++){const v=fe.default.rotrSH(c,d,14)^fe.default.rotrSH(c,d,18)^fe.default.rotrBH(c,d,41),_=fe.default.rotrSL(c,d,14)^fe.default.rotrSL(c,d,18)^fe.default.rotrBL(c,d,41),w=c&p^~c&b,h=d&m^~d&g,y=fe.default.add5L(C,_,h,El[H],Qt[H]),B=fe.default.add5H(y,L,v,w,wl[H],Jt[H]),I=y|0,k=fe.default.rotrSH(r,i,28)^fe.default.rotrBH(r,i,34)^fe.default.rotrBH(r,i,39),O=fe.default.rotrSL(r,i,28)^fe.default.rotrBL(r,i,34)^fe.default.rotrBL(r,i,39),T=r&s^r&a^s&a,N=i&o^i&l^o&l;L=b|0,C=g|0,b=p|0,g=m|0,p=c|0,m=d|0,{h:c,l:d}=fe.default.add(u|0,f|0,B|0,I|0),u=a|0,f=l|0,a=s|0,l=o|0,s=r|0,o=i|0;const re=fe.default.add3L(I,O,N);r=fe.default.add3H(re,B,k,T),i=re|0}({h:r,l:i}=fe.default.add(this.Ah|0,this.Al|0,r|0,i|0)),{h:s,l:o}=fe.default.add(this.Bh|0,this.Bl|0,s|0,o|0),{h:a,l}=fe.default.add(this.Ch|0,this.Cl|0,a|0,l|0),{h:u,l:f}=fe.default.add(this.Dh|0,this.Dl|0,u|0,f|0),{h:c,l:d}=fe.default.add(this.Eh|0,this.El|0,c|0,d|0),{h:p,l:m}=fe.default.add(this.Fh|0,this.Fl|0,p|0,m|0),{h:b,l:g}=fe.default.add(this.Gh|0,this.Gl|0,b|0,g|0),{h:L,l:C}=fe.default.add(this.Hh|0,this.Hl|0,L|0,C|0),this.set(r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C)}roundClean(){Jt.fill(0),Qt.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}bt.SHA512=Zn;class Al extends Zn{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Il extends Zn{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class kl extends Zn{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Gr=bt.sha512=(0,Sr.wrapConstructor)(()=>new Zn);bt.sha512_224=(0,Sr.wrapConstructor)(()=>new Al);bt.sha512_256=(0,Sr.wrapConstructor)(()=>new Il);bt.sha384=(0,Sr.wrapConstructor)(()=>new kl);const Sl=ll(al);Object.defineProperty(ft,"__esModule",{value:!0});var mo=ft.mnemonicToSeedSync=ft.mnemonicToSeed=ko=ft.validateMnemonic=ft.entropyToMnemonic=ft.mnemonicToEntropy=wo=ft.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const go=je,bo=Hn,Ll=xn,yo=bt,Cl=Ke,sr=Sl,Hl=t=>t[0]==="あいこくしん";function vo(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function ri(t){const e=vo(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function _o(t){go.default.bytes(t,16,20,24,28,32)}function xl(t,e=128){if(go.default.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return Io((0,Cl.randomBytes)(e/8),t)}var wo=ft.generateMnemonic=xl;const Tl=t=>{const e=8-t.length/4;return new Uint8Array([(0,Ll.sha256)(t)[0]>>e<<e])};function Eo(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),sr.utils.chain(sr.utils.checksum(1,Tl),sr.utils.radix2(11,!0),sr.utils.alphabet(t))}function Ao(t,e){const{words:n}=ri(t),r=Eo(e).decode(n);return _o(r),r}ft.mnemonicToEntropy=Ao;function Io(t,e){return _o(t),Eo(e).encode(t).join(Hl(e)?"　":" ")}ft.entropyToMnemonic=Io;function Ul(t,e){try{Ao(t,e)}catch{return!1}return!0}var ko=ft.validateMnemonic=Ul;const So=t=>vo(`mnemonic${t}`);function Bl(t,e=""){return(0,bo.pbkdf2Async)(yo.sha512,ri(t).nfkd,So(e),{c:2048,dkLen:64})}ft.mnemonicToSeed=Bl;function Ol(t,e=""){return(0,bo.pbkdf2)(yo.sha512,ri(t).nfkd,So(e),{c:2048,dkLen:64})}mo=ft.mnemonicToSeedSync=Ol;function qr(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Rl(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function Lo(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Fl(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");qr(t.outputLen),qr(t.blockLen)}function Pl(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Dl(t,e){Lo(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const hn={number:qr,bool:Rl,bytes:Lo,hash:Fl,exists:Pl,output:Dl};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Or=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Ml=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Ml)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Nl(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function ii(t){if(typeof t=="string"&&(t=Nl(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}class Co{clone(){return this._cloneInto()}}function Vl(t){const e=r=>t().update(ii(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}let Ho=class extends Co{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,hn.hash(e);const r=ii(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const i=this.blockLen,s=new Uint8Array(i);s.set(r.length>i?e.create().update(r).digest():r);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=e.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),s.fill(0)}update(e){return hn.exists(this),this.iHash.update(e),this}digestInto(e){hn.exists(this),hn.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:i,destroyed:s,blockLen:o,outputLen:a}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const wr=(t,e,n)=>new Ho(t,e).update(n).digest();wr.create=(t,e)=>new Ho(t,e);function jl(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const i=BigInt(32),s=BigInt(4294967295),o=Number(n>>i&s),a=Number(n&s),l=r?4:0,u=r?0:4;t.setUint32(e+l,o,r),t.setUint32(e+u,a,r)}class zl extends Co{constructor(e,n,r,i){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Or(this.buffer)}update(e){hn.exists(this);const{view:n,buffer:r,blockLen:i}=this;e=ii(e);const s=e.length;for(let o=0;o<s;){const a=Math.min(i-this.pos,s-o);if(a===i){const l=Or(e);for(;i<=s-o;o+=i)this.process(l,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===i&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){hn.exists(this),hn.output(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:i,isLE:s}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>i-o&&(this.process(r,0),o=0);for(let c=o;c<i;c++)n[c]=0;jl(r,i-8,BigInt(this.length*8),s),this.process(r,0);const a=Or(e),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=l/4,f=this.get();if(u>f.length)throw new Error("_sha2: outputLen bigger than state");for(let c=0;c<u;c++)a.setUint32(4*c,f[c],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:i,finished:s,destroyed:o,pos:a}=this;return e.length=i,e.pos=a,e.finished=s,e.destroyed=o,i%n&&e.buffer.set(r),e}}const Kl=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),xo=Uint8Array.from({length:16},(t,e)=>e),Gl=xo.map(t=>(9*t+5)%16);let si=[xo],oi=[Gl];for(let t=0;t<4;t++)for(let e of[si,oi])e.push(e[t].map(n=>Kl[n]));const To=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),ql=si.map((t,e)=>t.map(n=>To[e][n])),Wl=oi.map((t,e)=>t.map(n=>To[e][n])),Xl=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Zl=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),or=(t,e)=>t<<e|t>>>32-e;function Oi(t,e,n,r){return t===0?e^n^r:t===1?e&n|~e&r:t===2?(e|~n)^r:t===3?e&r|n&~r:e^(n|~r)}const ar=new Uint32Array(16);class Jl extends zl{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:r,h3:i,h4:s}=this;return[e,n,r,i,s]}set(e,n,r,i,s){this.h0=e|0,this.h1=n|0,this.h2=r|0,this.h3=i|0,this.h4=s|0}process(e,n){for(let p=0;p<16;p++,n+=4)ar[p]=e.getUint32(n,!0);let r=this.h0|0,i=r,s=this.h1|0,o=s,a=this.h2|0,l=a,u=this.h3|0,f=u,c=this.h4|0,d=c;for(let p=0;p<5;p++){const m=4-p,b=Xl[p],g=Zl[p],L=si[p],C=oi[p],H=ql[p],v=Wl[p];for(let _=0;_<16;_++){const w=or(r+Oi(p,s,a,u)+ar[L[_]]+b,H[_])+c|0;r=c,c=u,u=or(a,10)|0,a=s,s=w}for(let _=0;_<16;_++){const w=or(i+Oi(m,o,l,f)+ar[C[_]]+g,v[_])+d|0;i=d,d=f,f=or(l,10)|0,l=o,o=w}}this.set(this.h1+a+f|0,this.h2+u+d|0,this.h3+c+i|0,this.h4+r+o|0,this.h0+s+l|0)}roundClean(){ar.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const Ql=Vl(()=>new Jl);de.hmacSha256Sync=(t,...e)=>wr(kr,t,de.concatBytes(...e));const Rr=Ys(kr);function Ri(t){return BigInt(`0x${Ke.bytesToHex(t)}`)}function Yl(t){return Ke.hexToBytes(t.toString(16).padStart(64,"0"))}const $l=Ke.utf8ToBytes("Bitcoin seed"),Fr={private:76066276,public:76067358},Pr=2147483648,eu=t=>Ql(kr(t)),tu=t=>Ke.createView(t).getUint32(0,!1),lr=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return Ke.createView(e).setUint32(0,t,!1),e};class fn{constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||Fr,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!de.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:Ri(e.privateKey),this.privKeyBytes=Yl(this.privKey),this.pubKey=Ua(e.privateKey,!0)}else if(e.publicKey)this.pubKey=me.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=eu(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return tu(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return Rr.encode(this.serialize(this.versions.private,Ke.concatBytes(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Rr.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=Fr){if(_n(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const r=wr(Gr,$l,e);return new fn({versions:n,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(e,n=Fr){const r=Rr.decode(e),i=Ke.createView(r),s=i.getUint32(0,!1),o={versions:n,depth:r[4],parentFingerprint:i.getUint32(5,!1),index:i.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),l=a[0]===0;if(s!==n[l?"private":"public"])throw new Error("Version mismatch");return l?new fn({...o,privateKey:a.slice(1)}):new fn({...o,publicKey:a})}static fromJSON(e){return fn.fromExtendedKey(e.xpriv)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let r=this;for(const i of n){const s=/^(\d+)('?)$/.exec(i);if(!s||s.length!==3)throw new Error(`Invalid child index: ${i}`);let o=+s[1];if(!Number.isSafeInteger(o)||o>=Pr)throw new Error("Invalid index");s[2]==="'"&&(o+=Pr),r=r.deriveChild(o)}return r}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=lr(e);if(e>=Pr){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Ke.concatBytes(new Uint8Array([0]),a,n)}else n=Ke.concatBytes(this.pubKey,n);const r=wr(Gr,this.chainCode,n),i=Ri(r.slice(0,32)),s=r.slice(32);if(!de.isValidPrivateKey(i))throw new Error("Tweak bigger than curve order");const o={versions:this.versions,chainCode:s,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const a=de.mod(this.privKey+i,Ee.n);if(!de.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");o.privateKey=a}else{const a=me.fromHex(this.pubKey).add(me.fromPrivateKey(i));if(a.equals(me.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");o.publicKey=a.toRawBytes(!0)}return new fn(o)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return _n(e,32),Fa(e,this.privKey,{canonical:!0,der:!1})}verify(e,n){if(_n(e,32),_n(n,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=Pt.fromCompact(n)}catch{return!1}return Da(r,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return _n(n,33),Ke.concatBytes(lr(e),new Uint8Array([this.depth]),lr(this.parentFingerprint),lr(this.index),this.chainCode,n)}}class Uo extends jr{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Ka(e);const r=Yr(n);if(this.iHash=e.create(),!(this.iHash instanceof jr))throw new TypeError("Expected instance of class which extends utils.Hash");const i=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const s=new Uint8Array(i);s.set(r.length>this.iHash.blockLen?e.create().update(r).digest():r);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=e.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),s.fill(0)}update(e){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(e),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:i,destroyed:s,blockLen:o,outputLen:a}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Bo=(t,e,n)=>new Uo(t,e).update(n).digest();Bo.create=(t,e)=>new Uo(t,e);var nu=Object.defineProperty,bn=(t,e)=>{for(var n in e)nu(t,n,{get:e[n],enumerable:!0})};function ru(){return de.bytesToHex(de.randomPrivateKey())}function ai(t){return de.bytesToHex(Gn.getPublicKey(t))}var iu={};bn(iu,{insertEventIntoAscendingList:()=>au,insertEventIntoDescendingList:()=>ou,normalizeURL:()=>su,utf8Decoder:()=>Er,utf8Encoder:()=>yn});var Er=new TextDecoder("utf-8"),yn=new TextEncoder;function su(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function ou(t,e){var o;let n=0,r=t.length-1,i,s=n;if(r<0)s=0;else if(e.created_at<t[r].created_at)s=r+1;else if(e.created_at>=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(i=Math.floor(n+(r-n)/2),t[i].created_at>e.created_at)n=i;else if(t[i].created_at<e.created_at)r=i;else{s=i;break}}return((o=t[s])==null?void 0:o.id)!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function au(t,e){var o;let n=0,r=t.length-1,i,s=n;if(r<0)s=0;else if(e.created_at>t[r].created_at)s=r+1;else if(e.created_at<=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(i=Math.floor(n+(r-n)/2),t[i].created_at<e.created_at)n=i;else if(t[i].created_at>e.created_at)r=i;else{s=i;break}}return((o=t[s])==null?void 0:o.id)!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function lu(t){if(!ui(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function li(t){let e=qn(yn.encode(lu(t)));return de.bytesToHex(e)}function ui(t){if(typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let r=0;r<n.length;r++)if(typeof n[r]=="object")return!1}return!0}function uu(t){return Gn.verifySync(t.sig,li(t),t.pubkey)}function cu(t,e){return de.bytesToHex(Gn.signSync(li(t),e))}function fu(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1)return!1;for(let n in t)if(n[0]==="#"){let r=n.slice(1),i=t[`#${r}`];if(i&&!e.tags.find(([s,o])=>s===n.slice(1)&&i.indexOf(o)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>=t.until)}function du(t,e){for(let n=0;n<t.length;n++)if(fu(t[n],e))return!0;return!1}var hu={};bn(hu,{getHex64:()=>Lr,getInt:()=>Oo,getSubscriptionId:()=>Ro,matchEventId:()=>pu,matchEventKind:()=>gu,matchEventPubkey:()=>mu});function Lr(t,e){let n=e.length+3,r=t.indexOf(`"${e}":`)+n,i=t.slice(r).indexOf('"')+r+1;return t.slice(i,i+64)}function Oo(t,e){let n=e.length,r=t.indexOf(`"${e}":`)+n+3,i=t.slice(r),s=Math.min(i.indexOf(","),i.indexOf("}"));return parseInt(i.slice(0,s),10)}function Ro(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let r=e+7+1+n,i=t.slice(r+1,80).indexOf('"');if(i===-1)return null;let s=r+1+i;return t.slice(r+1,s)}function pu(t,e){return e===Lr(t,"id")}function mu(t,e){return e===Lr(t,"pubkey")}function gu(t,e){return e===Oo(t,"kind")}function bu(t){var e,n,r={},i={connect:[],disconnect:[],error:[],notice:[]},s={},o={};async function a(){return new Promise((c,d)=>{e=new WebSocket(t),e.onopen=()=>{i.connect.forEach(g=>g()),c()},e.onerror=()=>{i.error.forEach(g=>g()),d()},e.onclose=async()=>{i.disconnect.forEach(g=>g()),n&&n()};let p=[],m;e.onmessage=g=>{p.push(g.data),m||(m=setInterval(b,0))};function b(){var C,H,v,_;if(p.length===0){clearInterval(m),m=null;return}var g=p.shift();if(!g)return;let L=Ro(g);if(L){let w=r[L];if(w&&w.alreadyHaveEvent&&w.alreadyHaveEvent(Lr(g,"id"),t))return}try{let w=JSON.parse(g);switch(w[0]){case"EVENT":let h=w[1],y=w[2];ui(y)&&r[h]&&(r[h].skipVerification||uu(y))&&du(r[h].filters,y)&&(r[h],(((C=s[h])==null?void 0:C.event)||[]).forEach(I=>I(y)));return;case"EOSE":{let I=w[1];(((H=s[I])==null?void 0:H.eose)||[]).forEach(k=>k());return}case"OK":{let I=w[1],k=w[2],O=w[3]||"";k?(v=o[I])==null||v.ok.forEach(T=>T()):(_=o[I])==null||_.failed.forEach(T=>T(O));return}case"NOTICE":let B=w[1];i.notice.forEach(I=>I(B));return}}catch{return}}})}async function l(){e!=null&&e.readyState&&e.readyState===1||await a()}async function u(c){let d=JSON.stringify(c);try{e.send(d)}catch(p){console.log(p)}}const f=(c,{skipVerification:d=!1,alreadyHaveEvent:p=null,id:m=Math.random().toString().slice(2)}={})=>{let b=m;return r[b]={id:b,filters:c,skipVerification:d,alreadyHaveEvent:p},u(["REQ",b,...c]),{sub:(g,L={})=>f(g||c,{skipVerification:L.skipVerification||d,alreadyHaveEvent:L.alreadyHaveEvent||p,id:b}),unsub:()=>{delete r[b],delete s[b],u(["CLOSE",b])},on:(g,L)=>{s[b]=s[b]||{event:[],eose:[]},s[b][g].push(L)},off:(g,L)=>{let C=s[b],H=C[g].indexOf(L);H>=0&&C[g].splice(H,1)}}};return{url:t,sub:f,on:(c,d)=>{i[c].push(d),c==="connect"&&(e==null?void 0:e.readyState)===1&&d()},off:(c,d)=>{let p=i[c].indexOf(d);p!==-1&&i[c].splice(p,1)},list:(c,d)=>new Promise(p=>{let m=f(c,d),b=[],g=setTimeout(()=>{m.unsub(),p(b)},1500);m.on("eose",()=>{m.unsub(),clearTimeout(g),p(b)}),m.on("event",L=>{b.push(L)})}),get:(c,d)=>new Promise(p=>{let m=f([c],d),b=setTimeout(()=>{m.unsub(),p(null)},1500);m.on("event",g=>{m.unsub(),clearTimeout(b),p(g)})}),publish(c){if(!c.id)throw new Error(`event ${c} has no id`);let d=c.id;var p=!1,m=!1;u(["EVENT",c]).then(()=>{p=!0,m&&(b(),m=!1)}).catch(()=>{});const b=()=>{let g=f([{ids:[d]}],{id:`monitor-${d.slice(0,5)}`}),L=setTimeout(()=>{var C;(((C=o[d])==null?void 0:C.failed)||[]).forEach(H=>H("event not seen after 5 seconds")),g.unsub()},5e3);g.on("event",()=>{var C;clearTimeout(L),(((C=o[d])==null?void 0:C.seen)||[]).forEach(H=>H())})};return{on:(g,L)=>{o[d]=o[d]||{ok:[],seen:[],failed:[]},o[d][g].push(L),g==="seen"&&(p?b():m=!0)},off:(g,L)=>{let C=o[d];if(!C)return;let H=C[g].indexOf(L);H>=0&&C[g].splice(H,1)}}},connect:l,close(){return e.readyState>1?Promise.resolve():(e.close(),new Promise(c=>{n=c}))},get status(){return(e==null?void 0:e.readyState)??3}}}var yu={};bn(yu,{decrypt:()=>_u,encrypt:()=>vu});async function vu(t,e,n){const r=Fs(t,"02"+e),i=Fo(r);let s=Uint8Array.from(qa(16)),o=yn.encode(n),a=await crypto.subtle.importKey("raw",i,{name:"AES-CBC"},!1,["encrypt"]),l=await crypto.subtle.encrypt({name:"AES-CBC",iv:s},a,o),u=Cn.encode(new Uint8Array(l)),f=Cn.encode(new Uint8Array(s.buffer));return`${u}?iv=${f}`}async function _u(t,e,n){let[r,i]=n.split("?iv="),s=Fs(t,"02"+e),o=Fo(s),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["decrypt"]),l=Cn.decode(r),u=Cn.decode(i),f=await crypto.subtle.decrypt({name:"AES-CBC",iv:u},a,l);return Er.decode(f)}function Fo(t){return t.slice(1,33)}var Po={};bn(Po,{queryProfile:()=>Au,searchDomain:()=>Eu,useFetchImplementation:()=>wu});var Cr;try{Cr=fetch}catch{}function wu(t){Cr=t}async function Eu(t,e=""){try{return(await(await Cr(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function Au(t){var o,a;let[e,n]=t.split("@");if(n||(n=e,e="_"),!e.match(/^[A-Za-z0-9-_]+$/))return null;let r=await(await Cr(`https://${n}/.well-known/nostr.json?name=${e}`)).json();if(!((o=r==null?void 0:r.names)!=null&&o[e]))return null;let i=r.names[e],s=((a=r.relays)==null?void 0:a[i])||[];return{pubkey:i,relays:s}}var Iu={};bn(Iu,{generateSeedWords:()=>Su,privateKeyFromSeedWords:()=>ku,validateWords:()=>Lu});function ku(t,e){let r=fn.fromMasterSeed(mo(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return de.bytesToHex(r)}function Su(){return wo(ti)}function Lu(t){return ko(t,ti)}var dn={};bn(dn,{decode:()=>Cu,neventEncode:()=>Bu,noteEncode:()=>Tu,nprofileEncode:()=>Uu,npubEncode:()=>xu,nsecEncode:()=>Hu});var Hr=5e3;function Cu(t){var i,s;let{prefix:e,words:n}=Mt.decode(t,Hr),r=new Uint8Array(Mt.fromWords(n));if(e==="nprofile"){let o=Fi(r);if(!((i=o[0])!=null&&i[0]))throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:de.bytesToHex(o[0][0]),relays:o[1].map(a=>Er.decode(a))}}}if(e==="nevent"){let o=Fi(r);if(!((s=o[0])!=null&&s[0]))throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:de.bytesToHex(o[0][0]),relays:o[1].map(a=>Er.decode(a))}}}if(e==="nsec"||e==="npub"||e==="note")return{type:e,data:de.bytesToHex(r)};throw new Error(`unknown prefix ${e}`)}function Fi(t){let e={},n=t;for(;n.length>0;){let r=n[0],i=n[1],s=n.slice(2,2+i);n=n.slice(2+i),!(s.length<i)&&(e[r]=e[r]||[],e[r].push(s))}return e}function Hu(t){return ci("nsec",t)}function xu(t){return ci("npub",t)}function Tu(t){return ci("note",t)}function ci(t,e){let n=de.hexToBytes(e),r=Mt.toWords(n);return Mt.encode(t,r,Hr)}function Uu(t){let e=Do({0:[de.hexToBytes(t.pubkey)],1:(t.relays||[]).map(r=>yn.encode(r))}),n=Mt.toWords(e);return Mt.encode("nprofile",n,Hr)}function Bu(t){let e=Do({0:[de.hexToBytes(t.id)],1:(t.relays||[]).map(r=>yn.encode(r))}),n=Mt.toWords(e);return Mt.encode("nevent",n,Hr)}function Do(t){let e=[];return Object.entries(t).forEach(([n,r])=>{r.forEach(i=>{let s=new Uint8Array(i.length+2);s.set([parseInt(n)],0),s.set([i.length],1),s.set(i,2),e.push(s)})}),de.concatBytes(...e)}var Ou={};bn(Ou,{createDelegation:()=>Ru,getDelegator:()=>Fu});function Ru(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let r=n.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let i=qn(yn.encode(`nostr:delegation:${e.pubkey}:${r}`)),s=de.bytesToHex(Gn.signSync(i,t));return{from:ai(t),to:e.pubkey,cond:r,sig:s}}function Fu(t){let e=t.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!e)return null;let n=e[1],r=e[2],i=e[3],s=r.split("&");for(let a=0;a<s.length;a++){let[l,u,f]=s[a].split(/\b/);if(!(l==="kind"&&u==="="&&t.kind===parseInt(f))){if(l==="created_at"&&u==="<"&&t.created_at<parseInt(f))continue;if(l==="created_at"&&u===">"&&t.created_at>parseInt(f))continue;return null}}let o=qn(yn.encode(`nostr:delegation:${t.pubkey}:${r}`));return Gn.verifySync(i,o,n)?n:null}de.hmacSha256Sync=(t,...e)=>Bo(qn,t,de.concatBytes(...e));de.sha256Sync=(...t)=>qn(de.concatBytes(...t));function Pi(t){let e;return{c(){e=R("div"),this.h()},l(n){e=F(n,"DIV",{class:!0}),D(e).forEach(E),this.h()},h(){wt(e,"class","mdc-button__touch")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function Pu(t){let e,n,r,i;const s=t[28].default,o=Re(s,t,t[30],null);let a=t[6]&&Pi();return{c(){e=R("div"),n=V(),o&&o.c(),a&&a.c(),r=at(),this.h()},l(l){e=F(l,"DIV",{class:!0}),D(e).forEach(E),n=j(l),o&&o.l(l),a&&a.l(l),r=at(),this.h()},h(){wt(e,"class","mdc-button__ripple")},m(l,u){M(l,e,u),M(l,n,u),o&&o.m(l,u),a&&a.m(l,u),M(l,r,u),i=!0},p(l,u){o&&o.p&&(!i||u[0]&1073741824)&&Fe(o,s,l,l[30],i?De(s,l[30],u,null):Pe(l[30]),null),l[6]?a||(a=Pi(),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},i(l){i||(U(o,l),i=!0)},o(l){P(o,l),i=!1},d(l){l&&E(e),l&&E(n),o&&o.d(l),a&&a.d(l),l&&E(r)}}}function Du(t){let e,n,r;const i=[{tag:t[10]},{use:[[pr,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[23].disabled,addClass:t[19],removeClass:t[20],addStyle:t[21]}],t[17],...t[0]]},{class:Te({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[18]==="card:action","mdc-card__action--button":t[18]==="card:action","mdc-dialog__button":t[18]==="dialog:action","mdc-top-app-bar__navigation-icon":t[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[18]==="top-app-bar:action","mdc-snackbar__action":t[18]==="snackbar:actions","mdc-banner__secondary-action":t[18]==="banner"&&t[8],"mdc-banner__primary-action":t[18]==="banner"&&!t[8],"mdc-tooltip__action":t[18]==="tooltip:rich-actions",...t[12]})},{style:Object.entries(t[13]).map(Di).concat([t[2]]).join(" ")},t[16],t[15],t[14],{href:t[7]},t[23]];var s=t[9];function o(a){let l={$$slots:{default:[Pu]},$$scope:{ctx:a}};for(let u=0;u<i.length;u+=1)l=ge(l,i[u]);return{props:l}}return s&&(e=hi(s,o(t)),t[29](e),e.$on("click",t[22])),{c(){e&&se(e.$$.fragment),n=at()},l(a){e&&le(e.$$.fragment,a),n=at()},m(a,l){e&&oe(e,a,l),M(a,n,l),r=!0},p(a,l){const u=l[0]&12580351?Ge(i,[l[0]&1024&&{tag:a[10]},l[0]&12189721&&{use:[[pr,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[23].disabled,addClass:a[19],removeClass:a[20],addStyle:a[21]}],a[17],...a[0]]},l[0]&266610&&{class:Te({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[18]==="card:action","mdc-card__action--button":a[18]==="card:action","mdc-dialog__button":a[18]==="dialog:action","mdc-top-app-bar__navigation-icon":a[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[18]==="top-app-bar:action","mdc-snackbar__action":a[18]==="snackbar:actions","mdc-banner__secondary-action":a[18]==="banner"&&a[8],"mdc-banner__primary-action":a[18]==="banner"&&!a[8],"mdc-tooltip__action":a[18]==="tooltip:rich-actions",...a[12]})},l[0]&8196&&{style:Object.entries(a[13]).map(Di).concat([a[2]]).join(" ")},l[0]&65536&&yt(a[16]),l[0]&32768&&yt(a[15]),l[0]&16384&&yt(a[14]),l[0]&128&&{href:a[7]},l[0]&8388608&&yt(a[23])]):{};if(l[0]&1073741888&&(u.$$scope={dirty:l,ctx:a}),s!==(s=a[9])){if(e){qe();const f=e;P(f.$$.fragment,1,0,()=>{ae(f,1)}),We()}s?(e=hi(s,o(a)),a[29](e),e.$on("click",a[22]),se(e.$$.fragment),U(e.$$.fragment,1),oe(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(a){r||(e&&U(e.$$.fragment,a),r=!0)},o(a){e&&P(e.$$.fragment,a),r=!1},d(a){t[29](null),a&&E(n),e&&ae(e,a)}}}const Di=([t,e])=>`${t}: ${e};`;function Mu(t,e,n){let r,i,s;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","tag","getElement"];let a=Xe(e,o),{$$slots:l={},$$scope:u}=e;const f=an(on());let{use:c=[]}=e,{class:d=""}=e,{style:p=""}=e,{ripple:m=!0}=e,{color:b="primary"}=e,{variant:g="text"}=e,{touch:L=!1}=e,{href:C=void 0}=e,{action:H="close"}=e,{defaultAction:v=!1}=e,{secondary:_=!1}=e,w,h={},y={},B=Ar("SMUI:button:context"),{component:I=mi}=e,{tag:k=I===mi?C==null?"button":"a":void 0}=e,O=a.disabled;Mr("SMUI:label:context","button"),Mr("SMUI:icon:context","button");function T(x){h[x]||n(12,h[x]=!0,h)}function N(x){(!(x in h)||h[x])&&n(12,h[x]=!1,h)}function re(x,q){y[x]!=q&&(q===""||q==null?(delete y[x],n(13,y)):n(13,y[x]=q,y))}function he(){B==="banner"&&Ht(ve(),_?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function ve(){return w.getElement()}function J(x){ye[x?"unshift":"push"](()=>{w=x,n(11,w)})}return t.$$set=x=>{n(31,e=ge(ge({},e),Dt(x))),n(23,a=Xe(e,o)),"use"in x&&n(0,c=x.use),"class"in x&&n(1,d=x.class),"style"in x&&n(2,p=x.style),"ripple"in x&&n(3,m=x.ripple),"color"in x&&n(4,b=x.color),"variant"in x&&n(5,g=x.variant),"touch"in x&&n(6,L=x.touch),"href"in x&&n(7,C=x.href),"action"in x&&n(24,H=x.action),"defaultAction"in x&&n(25,v=x.defaultAction),"secondary"in x&&n(8,_=x.secondary),"component"in x&&n(9,I=x.component),"tag"in x&&n(10,k=x.tag),"$$scope"in x&&n(30,u=x.$$scope)},t.$$.update=()=>{if(n(16,r=B==="dialog:action"&&H!=null?{"data-mdc-dialog-action":H}:{action:e.action}),n(15,i=B==="dialog:action"&&v?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(14,s=B==="banner"?{}:{secondary:e.secondary}),O!==a.disabled){const x=ve();"blur"in x&&x.blur(),n(27,O=a.disabled)}},e=Dt(e),[c,d,p,m,b,g,L,C,_,I,k,w,h,y,s,i,r,f,B,T,N,re,he,a,H,v,ve,O,l,J,u]}class vt extends Ze{constructor(e){super(),Je(this,e,Mu,Du,Qe,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:24,defaultAction:25,secondary:8,component:9,tag:10,getElement:26},null,[-1,-1])}get getElement(){return this.$$.ctx[26]}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nu={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Vu=function(t){Tn(e,t);function e(n){var r=t.call(this,dt(dt({},e.defaultAdapter),n))||this;return r.shakeAnimationEndHandler=function(){r.handleShakeAnimationEnd()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Nu},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var r=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.float=function(n){var r=e.cssClasses,i=r.LABEL_FLOAT_ABOVE,s=r.LABEL_SHAKE;n?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.setRequired=function(n){var r=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(Un);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cn={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ju=function(t){Tn(e,t);function e(n){var r=t.call(this,dt(dt({},e.defaultAdapter),n))||this;return r.transitionEndHandler=function(i){r.handleTransitionEnd(i)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return cn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(cn.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(cn.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(cn.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var r=this.adapter.hasClass(cn.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&r&&(this.adapter.removeClass(cn.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(cn.LINE_RIPPLE_DEACTIVATING))},e}(Un);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zu={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Mi={NOTCH_ELEMENT_PADDING:8},Ku={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Gu=function(t){Tn(e,t);function e(n){return t.call(this,dt(dt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return zu},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ku},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Mi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var r=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=Mi.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(r)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(Un);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Dr={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},qu={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Ni={LABEL_SCALE:.75},Wu=["pattern","min","max","required","step","minlength","maxlength"],Xu=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Vi=["mousedown","touchstart"],ji=["click","keydown"],Zu=function(t){Tn(e,t);function e(n,r){r===void 0&&(r={});var i=t.call(this,dt(dt({},e.defaultAdapter),n))||this;return i.isFocused=!1,i.receivedUserInput=!1,i.valid=!0,i.useNativeValidation=!0,i.validateOnValueChange=!0,i.helperText=r.helperText,i.characterCounter=r.characterCounter,i.leadingIcon=r.leadingIcon,i.trailingIcon=r.trailingIcon,i.inputFocusHandler=function(){i.activateFocus()},i.inputBlurHandler=function(){i.deactivateFocus()},i.inputInputHandler=function(){i.handleInput()},i.setPointerXOffset=function(s){i.setTransformOrigin(s)},i.textFieldInteractionHandler=function(){i.handleTextFieldInteraction()},i.validationAttributeChangeHandler=function(s){i.handleValidationAttributeChange(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return qu},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Dr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ni},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return Xu.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,r,i,s;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=en(Vi),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}try{for(var u=en(ji),f=u.next();!f.done;f=u.next()){var l=f.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(c){i={error:c}}finally{try{f&&!f.done&&(s=u.return)&&s.call(u)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,r,i,s;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=en(Vi),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}try{for(var u=en(ji),f=u.next();!f.done;f=u.next()){var l=f.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(c){i={error:c}}finally{try{f&&!f.done&&(s=u.return)&&s.call(u)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var r=this;n.some(function(i){return Wu.indexOf(i)>-1?(r.styleValidity(!0),r.adapter.setLabelRequired(r.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var r=this.adapter.getLabelWidth()*Ni.LABEL_SCALE;this.adapter.notchOutline(r)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var r=n.touches,i=r?r[0]:n,s=i.target.getBoundingClientRect(),o=i.clientX-s.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var r=this.isValid();this.styleValidity(r)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var r=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(r)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(this.characterCounter){var r=this.getNativeInput().maxLength;if(r===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,r)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var r=e.cssClasses.INVALID;if(n?this.adapter.removeClass(r):this.adapter.addClass(r),this.helperText){this.helperText.setValidity(n);var i=this.helperText.isValidation();if(!i)return;var s=this.helperText.isVisible(),o=this.helperText.getId();s&&o?this.adapter.setInputAttr(Dr.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(Dr.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var r=e.cssClasses.FOCUSED;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.styleDisabled=function(n){var r=e.cssClasses,i=r.DISABLED,s=r.INVALID;n?(this.adapter.addClass(i),this.adapter.removeClass(s)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var r=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Un);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ct={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Ft={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+Ct.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ju=function(t){Tn(e,t);function e(n){return t.call(this,dt(dt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ct},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ft},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Ft.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(Ct.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(Ct.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(Ct.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(Ct.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(Ct.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Ct.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Ft.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var r=this.adapter.hasClass(Ct.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(Ct.HELPER_TEXT_VALIDATION_MSG),s=i&&!n;s?(this.showToScreenReader(),this.adapter.getAttr(Ft.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Ft.ROLE,"alert")):this.adapter.removeAttr(Ft.ROLE),!r&&!s&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Ft.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(Ft.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(Ft.ROLE,"alert")})},e}(Un);function Qu(t){let e,n,r,i,s,o,a,l;const u=t[22].default,f=Re(u,t,t[21],null);let c=[{class:n=Te({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})},{style:r=Object.entries(t[9]).map(Ki).concat([t[4]]).join(" ")},{for:i=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let p=0;p<c.length;p+=1)d=ge(d,c[p]);return{c(){e=R("label"),f&&f.c(),this.h()},l(p){e=F(p,"LABEL",{class:!0,style:!0,for:!0});var m=D(e);f&&f.l(m),m.forEach(E),this.h()},h(){ze(e,d)},m(p,m){M(p,e,m),f&&f.m(e,null),t[24](e),o=!0,a||(l=[Me(s=Nt.call(null,e,t[2])),Me(t[10].call(null,e))],a=!0)},p(p,m){f&&f.p&&(!o||m&2097152)&&Fe(f,u,p,p[21],o?De(u,p[21],m,null):Pe(p[21]),null),ze(e,d=Ge(c,[(!o||m&267&&n!==(n=Te({[p[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":p[0],"mdc-floating-label--required":p[1],...p[8]})))&&{class:n},(!o||m&528&&r!==(r=Object.entries(p[9]).map(Ki).concat([p[4]]).join(" ")))&&{style:r},(!o||m&32&&i!==(i=p[5]||(p[11]?p[11].id:void 0)))&&{for:i},m&4096&&p[12]])),s&&Et(s.update)&&m&4&&s.update.call(null,p[2])},i(p){o||(U(f,p),o=!0)},o(p){P(f,p),o=!1},d(p){p&&E(e),f&&f.d(p),t[24](null),a=!1,Tt(l)}}}function Yu(t){let e,n,r,i,s,o,a;const l=t[22].default,u=Re(l,t,t[21],null);let f=[{class:n=Te({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})},{style:r=Object.entries(t[9]).map(zi).concat([t[4]]).join(" ")},t[12]],c={};for(let d=0;d<f.length;d+=1)c=ge(c,f[d]);return{c(){e=R("span"),u&&u.c(),this.h()},l(d){e=F(d,"SPAN",{class:!0,style:!0});var p=D(e);u&&u.l(p),p.forEach(E),this.h()},h(){ze(e,c)},m(d,p){M(d,e,p),u&&u.m(e,null),t[23](e),s=!0,o||(a=[Me(i=Nt.call(null,e,t[2])),Me(t[10].call(null,e))],o=!0)},p(d,p){u&&u.p&&(!s||p&2097152)&&Fe(u,l,d,d[21],s?De(l,d[21],p,null):Pe(d[21]),null),ze(e,c=Ge(f,[(!s||p&267&&n!==(n=Te({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1],...d[8]})))&&{class:n},(!s||p&528&&r!==(r=Object.entries(d[9]).map(zi).concat([d[4]]).join(" ")))&&{style:r},p&4096&&d[12]])),i&&Et(i.update)&&p&4&&i.update.call(null,d[2])},i(d){s||(U(u,d),s=!0)},o(d){P(u,d),s=!1},d(d){d&&E(e),u&&u.d(d),t[23](null),o=!1,Tt(a)}}}function $u(t){let e,n,r,i;const s=[Yu,Qu],o=[];function a(l,u){return l[6]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=at()},l(l){n.l(l),r=at()},m(l,u){o[e].m(l,u),M(l,r,u),i=!0},p(l,[u]){let f=e;e=a(l),e===f?o[e].p(l,u):(qe(),P(o[f],1,1,()=>{o[f]=null}),We(),n=o[e],n?n.p(l,u):(n=o[e]=s[e](l),n.c()),U(n,1),n.m(r.parentNode,r))},i(l){i||(U(n),i=!0)},o(l){P(n),i=!1},d(l){o[e].d(l),l&&E(r)}}}const zi=([t,e])=>`${t}: ${e};`,Ki=([t,e])=>`${t}: ${e};`;function ec(t,e,n){const r=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let i=Xe(e,r),{$$slots:s={},$$scope:o}=e;var a;const l=an(on());let{use:u=[]}=e,{class:f=""}=e,{style:c=""}=e,{for:d=void 0}=e,{floatAbove:p=!1}=e,{required:m=!1}=e,{wrapped:b=!1}=e,g,L,C={},H={},v=(a=Ar("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},_=p,w=m;gn(()=>{n(18,L=new Vu({addClass:h,removeClass:y,getWidth:()=>{var x,q;const Y=re(),$=Y.cloneNode(!0);(x=Y.parentNode)===null||x===void 0||x.appendChild($),$.classList.add("smui-floating-label--remove-transition"),$.classList.add("smui-floating-label--force-size"),$.classList.remove("mdc-floating-label--float-above");const we=$.scrollWidth;return(q=Y.parentNode)===null||q===void 0||q.removeChild($),we},registerInteractionHandler:(x,q)=>re().addEventListener(x,q),deregisterInteractionHandler:(x,q)=>re().removeEventListener(x,q)}));const J={get element(){return re()},addStyle:B,removeStyle:I};return Ht(g,"SMUIFloatingLabel:mount",J),L.init(),()=>{Ht(g,"SMUIFloatingLabel:unmount",J),L.destroy()}});function h(J){C[J]||n(8,C[J]=!0,C)}function y(J){(!(J in C)||C[J])&&n(8,C[J]=!1,C)}function B(J,x){H[J]!=x&&(x===""||x==null?(delete H[J],n(9,H)):n(9,H[J]=x,H))}function I(J){J in H&&(delete H[J],n(9,H))}function k(J){L.shake(J)}function O(J){n(0,p=J)}function T(J){n(1,m=J)}function N(){return L.getWidth()}function re(){return g}function he(J){ye[J?"unshift":"push"](()=>{g=J,n(7,g)})}function ve(J){ye[J?"unshift":"push"](()=>{g=J,n(7,g)})}return t.$$set=J=>{e=ge(ge({},e),Dt(J)),n(12,i=Xe(e,r)),"use"in J&&n(2,u=J.use),"class"in J&&n(3,f=J.class),"style"in J&&n(4,c=J.style),"for"in J&&n(5,d=J.for),"floatAbove"in J&&n(0,p=J.floatAbove),"required"in J&&n(1,m=J.required),"wrapped"in J&&n(6,b=J.wrapped),"$$scope"in J&&n(21,o=J.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&L&&_!==p&&(n(19,_=p),L.float(p)),t.$$.dirty&1310722&&L&&w!==m&&(n(20,w=m),L.setRequired(m))},[p,m,u,f,c,d,b,g,C,H,l,v,i,k,O,T,N,re,L,_,w,o,s,he,ve]}class Mo extends Ze{constructor(e){super(),Je(this,e,ec,$u,Qe,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function tc(t){let e,n,r,i,s,o,a=[{class:n=Te({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3],...t[5]})},{style:r=Object.entries(t[6]).map(Gi).concat([t[2]]).join(" ")},t[8]],l={};for(let u=0;u<a.length;u+=1)l=ge(l,a[u]);return{c(){e=R("div"),this.h()},l(u){e=F(u,"DIV",{class:!0,style:!0}),D(e).forEach(E),this.h()},h(){ze(e,l)},m(u,f){M(u,e,f),t[13](e),s||(o=[Me(i=Nt.call(null,e,t[0])),Me(t[7].call(null,e))],s=!0)},p(u,[f]){ze(e,l=Ge(a,[f&42&&n!==(n=Te({[u[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":u[3],...u[5]}))&&{class:n},f&68&&r!==(r=Object.entries(u[6]).map(Gi).concat([u[2]]).join(" "))&&{style:r},f&256&&u[8]])),i&&Et(i.update)&&f&1&&i.update.call(null,u[0])},i:rt,o:rt,d(u){u&&E(e),t[13](null),s=!1,Tt(o)}}}const Gi=([t,e])=>`${t}: ${e};`;function nc(t,e,n){const r=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let i=Xe(e,r);const s=an(on());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:u=!1}=e,f,c,d={},p={};gn(()=>(c=new ju({addClass:b,removeClass:g,hasClass:m,setStyle:L,registerEventHandler:(h,y)=>_().addEventListener(h,y),deregisterEventHandler:(h,y)=>_().removeEventListener(h,y)}),c.init(),()=>{c.destroy()}));function m(h){return h in d?d[h]:_().classList.contains(h)}function b(h){d[h]||n(5,d[h]=!0,d)}function g(h){(!(h in d)||d[h])&&n(5,d[h]=!1,d)}function L(h,y){p[h]!=y&&(y===""||y==null?(delete p[h],n(6,p)):n(6,p[h]=y,p))}function C(){c.activate()}function H(){c.deactivate()}function v(h){c.setRippleCenter(h)}function _(){return f}function w(h){ye[h?"unshift":"push"](()=>{f=h,n(4,f)})}return t.$$set=h=>{e=ge(ge({},e),Dt(h)),n(8,i=Xe(e,r)),"use"in h&&n(0,o=h.use),"class"in h&&n(1,a=h.class),"style"in h&&n(2,l=h.style),"active"in h&&n(3,u=h.active)},[o,a,l,u,f,d,p,s,i,C,H,v,_,w]}class rc extends Ze{constructor(e){super(),Je(this,e,nc,tc,Qe,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function qi(t){let e,n,r;const i=t[14].default,s=Re(i,t,t[13],null);return{c(){e=R("div"),s&&s.c(),this.h()},l(o){e=F(o,"DIV",{class:!0,style:!0});var a=D(e);s&&s.l(a),a.forEach(E),this.h()},h(){wt(e,"class","mdc-notched-outline__notch"),wt(e,"style",n=Object.entries(t[7]).map(Wi).join(" "))},m(o,a){M(o,e,a),s&&s.m(e,null),r=!0},p(o,a){s&&s.p&&(!r||a&8192)&&Fe(s,i,o,o[13],r?De(i,o[13],a,null):Pe(o[13]),null),(!r||a&128&&n!==(n=Object.entries(o[7]).map(Wi).join(" ")))&&wt(e,"style",n)},i(o){r||(U(s,o),r=!0)},o(o){P(s,o),r=!1},d(o){o&&E(e),s&&s.d(o)}}}function ic(t){let e,n,r,i,s,o,a,l,u,f,c=!t[3]&&qi(t),d=[{class:o=Te({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3],...t[6]})},t[9]],p={};for(let m=0;m<d.length;m+=1)p=ge(p,d[m]);return{c(){e=R("div"),n=R("div"),r=V(),c&&c.c(),i=V(),s=R("div"),this.h()},l(m){e=F(m,"DIV",{class:!0});var b=D(e);n=F(b,"DIV",{class:!0}),D(n).forEach(E),r=j(b),c&&c.l(b),i=j(b),s=F(b,"DIV",{class:!0}),D(s).forEach(E),b.forEach(E),this.h()},h(){wt(n,"class","mdc-notched-outline__leading"),wt(s,"class","mdc-notched-outline__trailing"),ze(e,p)},m(m,b){M(m,e,b),A(e,n),A(e,r),c&&c.m(e,null),A(e,i),A(e,s),t[15](e),l=!0,u||(f=[Me(a=Nt.call(null,e,t[0])),Me(t[8].call(null,e)),Ie(e,"SMUIFloatingLabel:mount",t[16]),Ie(e,"SMUIFloatingLabel:unmount",t[17])],u=!0)},p(m,[b]){m[3]?c&&(qe(),P(c,1,1,()=>{c=null}),We()):c?(c.p(m,b),b&8&&U(c,1)):(c=qi(m),c.c(),U(c,1),c.m(e,i)),ze(e,p=Ge(d,[(!l||b&78&&o!==(o=Te({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3],...m[6]})))&&{class:o},b&512&&m[9]])),a&&Et(a.update)&&b&1&&a.update.call(null,m[0])},i(m){l||(U(c),l=!0)},o(m){P(c),l=!1},d(m){m&&E(e),c&&c.d(),t[15](null),u=!1,Tt(f)}}}const Wi=([t,e])=>`${t}: ${e};`;function sc(t,e,n){const r=["use","class","notched","noLabel","notch","closeNotch","getElement"];let i=Xe(e,r),{$$slots:s={},$$scope:o}=e;const a=an(on());let{use:l=[]}=e,{class:u=""}=e,{notched:f=!1}=e,{noLabel:c=!1}=e,d,p,m,b={},g={};gn(()=>(p=new Gu({addClass:L,removeClass:C,setNotchWidthProperty:k=>H("width",k+"px"),removeNotchWidthProperty:()=>v("width")}),p.init(),()=>{p.destroy()}));function L(k){b[k]||n(6,b[k]=!0,b)}function C(k){(!(k in b)||b[k])&&n(6,b[k]=!1,b)}function H(k,O){g[k]!=O&&(O===""||O==null?(delete g[k],n(7,g)):n(7,g[k]=O,g))}function v(k){k in g&&(delete g[k],n(7,g))}function _(k){p.notch(k)}function w(){p.closeNotch()}function h(){return d}function y(k){ye[k?"unshift":"push"](()=>{d=k,n(5,d)})}const B=k=>n(4,m=k.detail),I=()=>n(4,m=void 0);return t.$$set=k=>{e=ge(ge({},e),Dt(k)),n(9,i=Xe(e,r)),"use"in k&&n(0,l=k.use),"class"in k&&n(1,u=k.class),"notched"in k&&n(2,f=k.notched),"noLabel"in k&&n(3,c=k.noLabel),"$$scope"in k&&n(13,o=k.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),L("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):C("mdc-notched-outline--upgraded"))},[l,u,f,c,m,d,b,g,a,i,_,w,h,o,s,y,B,I]}class oc extends Ze{constructor(e){super(),Je(this,e,sc,ic,Qe,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}const ac=Xr({class:"mdc-text-field-helper-line",tag:"div"}),lc=Xr({class:"mdc-text-field__affix mdc-text-field__affix--prefix",tag:"span"}),uc=Xr({class:"mdc-text-field__affix mdc-text-field__affix--suffix",tag:"span"});function cc(t){let e,n,r,i,s,o=[{class:n=Te({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=ge(a,o[l]);return{c(){e=R("input"),this.h()},l(l){e=F(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){ze(e,a)},m(l,u){M(l,e,u),e.autofocus&&e.focus(),t[26](e),i||(s=[Me(r=Nt.call(null,e,t[0])),Me(t[7].call(null,e)),Ie(e,"input",t[27]),Ie(e,"change",t[9]),Ie(e,"blur",t[24]),Ie(e,"focus",t[25])],i=!0)},p(l,[u]){ze(e,a=Ge(o,[u&2&&n!==(n=Te({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&4&&{type:l[2]},u&8&&{placeholder:l[3]},u&16&&l[4],u&64&&l[6],u&1024&&l[10]])),r&&Et(r.update)&&u&1&&r.update.call(null,l[0])},i:rt,o:rt,d(l){l&&E(e),t[26](null),i=!1,Tt(s)}}}function fc(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function dc(t,e,n){const r=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","blur","getElement"];let i=Xe(e,r);const s=an(on());let o=()=>{};function a(x){return x===o}let{use:l=[]}=e,{class:u=""}=e,{type:f="text"}=e,{placeholder:c=" "}=e,{value:d=o}=e;const p=a(d);p&&(d="");let{files:m=null}=e,{dirty:b=!1}=e,{invalid:g=!1}=e,{updateInvalid:L=!0}=e,{emptyValueNull:C=d===null}=e;p&&C&&(d=null);let{emptyValueUndefined:H=d===void 0}=e;p&&H&&(d=void 0);let v,_={},w={};gn(()=>{L&&n(14,g=v.matches(":invalid"))});function h(x){if(f==="file"){n(12,m=x.currentTarget.files);return}if(x.currentTarget.value===""&&C){n(11,d=null);return}if(x.currentTarget.value===""&&H){n(11,d=void 0);return}switch(f){case"number":case"range":n(11,d=fc(x.currentTarget.value));break;default:n(11,d=x.currentTarget.value);break}}function y(x){(f==="file"||f==="range")&&h(x),n(13,b=!0),L&&n(14,g=v.matches(":invalid"))}function B(x){var q;return x in _?(q=_[x])!==null&&q!==void 0?q:null:N().getAttribute(x)}function I(x,q){_[x]!==q&&n(6,_[x]=q,_)}function k(x){(!(x in _)||_[x]!=null)&&n(6,_[x]=void 0,_)}function O(){N().focus()}function T(){N().blur()}function N(){return v}function re(x){jn.call(this,t,x)}function he(x){jn.call(this,t,x)}function ve(x){ye[x?"unshift":"push"](()=>{v=x,n(5,v)})}const J=x=>f!=="file"&&h(x);return t.$$set=x=>{e=ge(ge({},e),Dt(x)),n(10,i=Xe(e,r)),"use"in x&&n(0,l=x.use),"class"in x&&n(1,u=x.class),"type"in x&&n(2,f=x.type),"placeholder"in x&&n(3,c=x.placeholder),"value"in x&&n(11,d=x.value),"files"in x&&n(12,m=x.files),"dirty"in x&&n(13,b=x.dirty),"invalid"in x&&n(14,g=x.invalid),"updateInvalid"in x&&n(15,L=x.updateInvalid),"emptyValueNull"in x&&n(16,C=x.emptyValueNull),"emptyValueUndefined"in x&&n(17,H=x.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(f==="file"?(delete w.value,n(4,w),n(2,f),n(11,d)):n(4,w.value=d??"",w))},[l,u,f,c,w,v,_,s,h,y,i,d,m,b,g,L,C,H,B,I,k,O,T,N,re,he,ve,J]}class hc extends Ze{constructor(e){super(),Je(this,e,dc,cc,Qe,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,blur:22,getElement:23})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get blur(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}function pc(t){let e,n,r,i,s,o,a=[{class:n=Te({[t[2]]:!0,"mdc-text-field__input":!0})},{style:r=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let u=0;u<a.length;u+=1)l=ge(l,a[u]);return{c(){e=R("textarea"),this.h()},l(u){e=F(u,"TEXTAREA",{class:!0,style:!0}),D(e).forEach(E),this.h()},h(){ze(e,l)},m(u,f){M(u,e,f),e.autofocus&&e.focus(),t[21](e),pi(e,t[0]),s||(o=[Me(i=Nt.call(null,e,t[1])),Me(t[7].call(null,e)),Ie(e,"change",t[8]),Ie(e,"blur",t[19]),Ie(e,"focus",t[20]),Ie(e,"input",t[22])],s=!0)},p(u,[f]){ze(e,l=Ge(a,[f&4&&n!==(n=Te({[u[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},f&24&&r!==(r=`${u[4]?"":"resize: none; "}${u[3]}`)&&{style:r},f&64&&u[6],f&512&&u[9]])),i&&Et(i.update)&&f&2&&i.update.call(null,u[1]),f&1&&pi(e,u[0])},i:rt,o:rt,d(u){u&&E(e),t[21](null),s=!1,Tt(o)}}}function mc(t,e,n){const r=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","blur","getElement"];let i=Xe(e,r);const s=an(on());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:u=""}=e,{dirty:f=!1}=e,{invalid:c=!1}=e,{updateInvalid:d=!0}=e,{resizable:p=!0}=e,m,b={};gn(()=>{d&&n(11,c=m.matches(":invalid"))});function g(){n(10,f=!0),d&&n(11,c=m.matches(":invalid"))}function L(k){var O;return k in b?(O=b[k])!==null&&O!==void 0?O:null:w().getAttribute(k)}function C(k,O){b[k]!==O&&n(6,b[k]=O,b)}function H(k){(!(k in b)||b[k]!=null)&&n(6,b[k]=void 0,b)}function v(){w().focus()}function _(){w().blur()}function w(){return m}function h(k){jn.call(this,t,k)}function y(k){jn.call(this,t,k)}function B(k){ye[k?"unshift":"push"](()=>{m=k,n(5,m)})}function I(){u=this.value,n(0,u)}return t.$$set=k=>{e=ge(ge({},e),Dt(k)),n(9,i=Xe(e,r)),"use"in k&&n(1,o=k.use),"class"in k&&n(2,a=k.class),"style"in k&&n(3,l=k.style),"value"in k&&n(0,u=k.value),"dirty"in k&&n(10,f=k.dirty),"invalid"in k&&n(11,c=k.invalid),"updateInvalid"in k&&n(12,d=k.updateInvalid),"resizable"in k&&n(4,p=k.resizable)},[u,o,a,l,p,m,b,s,g,i,f,c,d,L,C,H,v,_,w,h,y,B,I]}class gc extends Ze{constructor(e){super(),Je(this,e,mc,pc,Qe,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,blur:17,getElement:18})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get blur(){return this.$$.ctx[17]}get getElement(){return this.$$.ctx[18]}}const bc=t=>({}),Xi=t=>({}),yc=t=>({}),Zi=t=>({}),vc=t=>({}),Ji=t=>({}),_c=t=>({}),Qi=t=>({}),wc=t=>({}),Yi=t=>({}),Ec=t=>({}),$i=t=>({}),Ac=t=>({}),es=t=>({}),Ic=t=>({}),ts=t=>({}),kc=t=>({}),ns=t=>({}),Sc=t=>({}),rs=t=>({}),Lc=t=>({}),is=t=>({}),Cc=t=>({}),ss=t=>({});function Hc(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m;const b=t[51].label,g=Re(b,t,t[90],Yi);r=new hr({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[Tc]},$$scope:{ctx:t}}});const L=t[51].default,C=Re(L,t,t[90],null);o=new hr({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[Uc]},$$scope:{ctx:t}}});const H=t[51].ripple,v=Re(H,t,t[90],Zi);let _=[{class:l=Te({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[42].label,"mdc-text-field--with-leading-icon":t[42].leadingIcon,"mdc-text-field--with-trailing-icon":t[42].trailingIcon,"mdc-text-field--invalid":t[1],...t[25]})},{style:u=Object.entries(t[26]).map(gs).concat([t[10]]).join(" ")},dr(t[41],["input$","label$","ripple$","outline$","helperLine$"])],w={};for(let h=0;h<_.length;h+=1)w=ge(w,_[h]);return{c(){e=R("div"),g&&g.c(),n=V(),se(r.$$.fragment),i=V(),C&&C.c(),s=V(),se(o.$$.fragment),a=V(),v&&v.c(),this.h()},l(h){e=F(h,"DIV",{class:!0,style:!0});var y=D(e);g&&g.l(y),n=j(y),le(r.$$.fragment,y),i=j(y),C&&C.l(y),s=j(y),le(o.$$.fragment,y),a=j(y),v&&v.l(y),y.forEach(E),this.h()},h(){ze(e,w)},m(h,y){M(h,e,y),g&&g.m(e,null),A(e,n),oe(r,e,null),A(e,i),C&&C.m(e,null),A(e,s),oe(o,e,null),A(e,a),v&&v.m(e,null),t[80](e),d=!0,p||(m=[Me(f=pr.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),Me(c=Nt.call(null,e,t[8])),Me(t[34].call(null,e)),Ie(e,"SMUITextfieldLeadingIcon:mount",t[81]),Ie(e,"SMUITextfieldLeadingIcon:unmount",t[82]),Ie(e,"SMUITextfieldTrailingIcon:mount",t[83]),Ie(e,"SMUITextfieldTrailingIcon:unmount",t[84])],p=!0)},p(h,y){g&&g.p&&(!d||y[2]&268435456)&&Fe(g,b,h,h[90],d?De(b,h[90],y,wc):Pe(h[90]),Yi);const B={};y[2]&268435456&&(B.$$scope={dirty:y,ctx:h}),r.$set(B),C&&C.p&&(!d||y[2]&268435456)&&Fe(C,L,h,h[90],d?De(L,h[90],y,null):Pe(h[90]),null);const I={};y[2]&268435456&&(I.$$scope={dirty:y,ctx:h}),o.$set(I),v&&v.p&&(!d||y[2]&268435456)&&Fe(v,H,h,h[90],d?De(H,h[90],y,yc):Pe(h[90]),Zi),ze(e,w=Ge(_,[(!d||y[0]&33673730|y[1]&2048&&l!==(l=Te({[h[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":h[12],"mdc-text-field--textarea":h[14],"mdc-text-field--filled":h[15]==="filled","mdc-text-field--outlined":h[15]==="outlined","smui-text-field--standard":h[15]==="standard"&&!h[14],"mdc-text-field--no-label":h[16]||!h[42].label,"mdc-text-field--with-leading-icon":h[42].leadingIcon,"mdc-text-field--with-trailing-icon":h[42].trailingIcon,"mdc-text-field--invalid":h[1],...h[25]})))&&{class:l},(!d||y[0]&67109888&&u!==(u=Object.entries(h[26]).map(gs).concat([h[10]]).join(" ")))&&{style:u},y[1]&1024&&dr(h[41],["input$","label$","ripple$","outline$","helperLine$"])])),f&&Et(f.update)&&y[0]&2048&&f.update.call(null,{ripple:h[11],unbounded:!1,addClass:h[38],removeClass:h[39],addStyle:h[40]}),c&&Et(c.update)&&y[0]&256&&c.update.call(null,h[8])},i(h){d||(U(g,h),U(r.$$.fragment,h),U(C,h),U(o.$$.fragment,h),U(v,h),d=!0)},o(h){P(g,h),P(r.$$.fragment,h),P(C,h),P(o.$$.fragment,h),P(v,h),d=!1},d(h){h&&E(e),g&&g.d(h),ae(r),C&&C.d(h),ae(o),v&&v.d(h),t[80](null),p=!1,Tt(m)}}}function xc(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C,H=!t[14]&&t[15]!=="outlined"&&os(t),v=(t[14]||t[15]==="outlined")&&us(t);i=new hr({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[Fc]},$$scope:{ctx:t}}});const _=t[51].default,w=Re(_,t,t[90],null),h=[Dc,Pc],y=[];function B(T,N){return T[14]&&typeof T[0]=="string"?0:1}a=B(t),l=y[a]=h[a](t),f=new hr({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[Vc]},$$scope:{ctx:t}}});let I=!t[14]&&t[15]!=="outlined"&&t[11]&&hs(t),k=[{class:d=Te({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[42].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[42].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[42].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[42].internalCounter,"mdc-text-field--invalid":t[1],...t[25]})},{style:p=Object.entries(t[26]).map(ms).concat([t[10]]).join(" ")},{for:void 0},dr(t[41],["input$","label$","ripple$","outline$","helperLine$"])],O={};for(let T=0;T<k.length;T+=1)O=ge(O,k[T]);return{c(){e=R("label"),H&&H.c(),n=V(),v&&v.c(),r=V(),se(i.$$.fragment),s=V(),w&&w.c(),o=V(),l.c(),u=V(),se(f.$$.fragment),c=V(),I&&I.c(),this.h()},l(T){e=F(T,"LABEL",{class:!0,style:!0,for:!0});var N=D(e);H&&H.l(N),n=j(N),v&&v.l(N),r=j(N),le(i.$$.fragment,N),s=j(N),w&&w.l(N),o=j(N),l.l(N),u=j(N),le(f.$$.fragment,N),c=j(N),I&&I.l(N),N.forEach(E),this.h()},h(){ze(e,O)},m(T,N){M(T,e,N),H&&H.m(e,null),A(e,n),v&&v.m(e,null),A(e,r),oe(i,e,null),A(e,s),w&&w.m(e,null),A(e,o),y[a].m(e,null),A(e,u),oe(f,e,null),A(e,c),I&&I.m(e,null),t[73](e),g=!0,L||(C=[Me(m=pr.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),Me(b=Nt.call(null,e,t[8])),Me(t[34].call(null,e)),Ie(e,"SMUITextfieldLeadingIcon:mount",t[74]),Ie(e,"SMUITextfieldLeadingIcon:unmount",t[75]),Ie(e,"SMUITextfieldTrailingIcon:mount",t[76]),Ie(e,"SMUITextfieldTrailingIcon:unmount",t[77]),Ie(e,"SMUITextfieldCharacterCounter:mount",t[78]),Ie(e,"SMUITextfieldCharacterCounter:unmount",t[79])],L=!0)},p(T,N){!T[14]&&T[15]!=="outlined"?H?(H.p(T,N),N[0]&49152&&U(H,1)):(H=os(T),H.c(),U(H,1),H.m(e,n)):H&&(qe(),P(H,1,1,()=>{H=null}),We()),T[14]||T[15]==="outlined"?v?(v.p(T,N),N[0]&49152&&U(v,1)):(v=us(T),v.c(),U(v,1),v.m(e,r)):v&&(qe(),P(v,1,1,()=>{v=null}),We());const re={};N[2]&268435456&&(re.$$scope={dirty:N,ctx:T}),i.$set(re),w&&w.p&&(!g||N[2]&268435456)&&Fe(w,_,T,T[90],g?De(_,T[90],N,null):Pe(T[90]),null);let he=a;a=B(T),a===he?y[a].p(T,N):(qe(),P(y[he],1,1,()=>{y[he]=null}),We(),l=y[a],l?l.p(T,N):(l=y[a]=h[a](T),l.c()),U(l,1),l.m(e,u));const ve={};N[2]&268435456&&(ve.$$scope={dirty:N,ctx:T}),f.$set(ve),!T[14]&&T[15]!=="outlined"&&T[11]?I?(I.p(T,N),N[0]&51200&&U(I,1)):(I=hs(T),I.c(),U(I,1),I.m(e,null)):I&&(qe(),P(I,1,1,()=>{I=null}),We()),ze(e,O=Ge(k,[(!g||N[0]&314823171|N[1]&2048&&d!==(d=Te({[T[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":T[12],"mdc-text-field--textarea":T[14],"mdc-text-field--filled":T[15]==="filled","mdc-text-field--outlined":T[15]==="outlined","smui-text-field--standard":T[15]==="standard"&&!T[14],"mdc-text-field--no-label":T[16]||T[17]==null&&!T[42].label,"mdc-text-field--label-floating":T[28]||T[0]!=null&&T[0]!=="","mdc-text-field--with-leading-icon":T[35](T[22])?T[42].leadingIcon:T[22],"mdc-text-field--with-trailing-icon":T[35](T[23])?T[42].trailingIcon:T[23],"mdc-text-field--with-internal-counter":T[14]&&T[42].internalCounter,"mdc-text-field--invalid":T[1],...T[25]})))&&{class:d},(!g||N[0]&67109888&&p!==(p=Object.entries(T[26]).map(ms).concat([T[10]]).join(" ")))&&{style:p},{for:void 0},N[1]&1024&&dr(T[41],["input$","label$","ripple$","outline$","helperLine$"])])),m&&Et(m.update)&&N[0]&49152|N[1]&4&&m.update.call(null,{ripple:!T[14]&&T[15]==="filled",unbounded:!1,addClass:T[38],removeClass:T[39],addStyle:T[40],eventTarget:T[33],activeTarget:T[33],initPromise:T[37]}),b&&Et(b.update)&&N[0]&256&&b.update.call(null,T[8])},i(T){g||(U(H),U(v),U(i.$$.fragment,T),U(w,T),U(l),U(f.$$.fragment,T),U(I),g=!0)},o(T){P(H),P(v),P(i.$$.fragment,T),P(w,T),P(l),P(f.$$.fragment,T),P(I),g=!1},d(T){T&&E(e),H&&H.d(),v&&v.d(),ae(i),w&&w.d(T),y[a].d(),ae(f),I&&I.d(),t[73](null),L=!1,Tt(C)}}}function Tc(t){let e;const n=t[51].leadingIcon,r=Re(n,t,t[90],Qi);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Fe(r,n,i,i[90],e?De(n,i[90],s,_c):Pe(i[90]),Qi)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function Uc(t){let e;const n=t[51].trailingIcon,r=Re(n,t,t[90],Ji);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Fe(r,n,i,i[90],e?De(n,i[90],s,vc):Pe(i[90]),Ji)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function os(t){let e,n,r,i=t[15]==="filled"&&as(),s=!t[16]&&(t[17]!=null||t[42].label)&&ls(t);return{c(){i&&i.c(),e=V(),s&&s.c(),n=at()},l(o){i&&i.l(o),e=j(o),s&&s.l(o),n=at()},m(o,a){i&&i.m(o,a),M(o,e,a),s&&s.m(o,a),M(o,n,a),r=!0},p(o,a){o[15]==="filled"?i||(i=as(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),!o[16]&&(o[17]!=null||o[42].label)?s?(s.p(o,a),a[0]&196608|a[1]&2048&&U(s,1)):(s=ls(o),s.c(),U(s,1),s.m(n.parentNode,n)):s&&(qe(),P(s,1,1,()=>{s=null}),We())},i(o){r||(U(s),r=!0)},o(o){P(s),r=!1},d(o){i&&i.d(o),o&&E(e),s&&s.d(o),o&&E(n)}}}function as(t){let e;return{c(){e=R("span"),this.h()},l(n){e=F(n,"SPAN",{class:!0}),D(e).forEach(E),this.h()},h(){wt(e,"class","mdc-text-field__ripple")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function ls(t){let e,n;const r=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},lt(t[41],"label$")];let i={$$slots:{default:[Bc]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new Mo({props:i}),t[52](e),{c(){se(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,o){oe(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&1024?Ge(r,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},r[2],o[1]&1024&&yt(lt(s[41],"label$"))]):{};o[0]&131072|o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[52](null),ae(e,s)}}}function Bc(t){let e=(t[17]==null?"":t[17])+"",n,r;const i=t[51].label,s=Re(i,t,t[90],ss);return{c(){n=K(e),s&&s.c()},l(o){n=G(o,e),s&&s.l(o)},m(o,a){M(o,n,a),s&&s.m(o,a),r=!0},p(o,a){(!r||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&He(n,e),s&&s.p&&(!r||a[2]&268435456)&&Fe(s,i,o,o[90],r?De(i,o[90],a,Cc):Pe(o[90]),ss)},i(o){r||(U(s,o),r=!0)},o(o){P(s,o),r=!1},d(o){o&&E(n),s&&s.d(o)}}}function us(t){let e,n;const r=[{noLabel:t[16]||t[17]==null&&!t[42].label},lt(t[41],"outline$")];let i={$$slots:{default:[Rc]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new oc({props:i}),t[54](e),{c(){se(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,o){oe(e,s,o),n=!0},p(s,o){const a=o[0]&196608|o[1]&3072?Ge(r,[o[0]&196608|o[1]&2048&&{noLabel:s[16]||s[17]==null&&!s[42].label},o[1]&1024&&yt(lt(s[41],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[54](null),ae(e,s)}}}function cs(t){let e,n;const r=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},lt(t[41],"label$")];let i={$$slots:{default:[Oc]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new Mo({props:i}),t[53](e),{c(){se(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,o){oe(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&1024?Ge(r,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},r[2],o[1]&1024&&yt(lt(s[41],"label$"))]):{};o[0]&131072|o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[53](null),ae(e,s)}}}function Oc(t){let e=(t[17]==null?"":t[17])+"",n,r;const i=t[51].label,s=Re(i,t,t[90],is);return{c(){n=K(e),s&&s.c()},l(o){n=G(o,e),s&&s.l(o)},m(o,a){M(o,n,a),s&&s.m(o,a),r=!0},p(o,a){(!r||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&He(n,e),s&&s.p&&(!r||a[2]&268435456)&&Fe(s,i,o,o[90],r?De(i,o[90],a,Lc):Pe(o[90]),is)},i(o){r||(U(s,o),r=!0)},o(o){P(s,o),r=!1},d(o){o&&E(n),s&&s.d(o)}}}function Rc(t){let e,n,r=!t[16]&&(t[17]!=null||t[42].label)&&cs(t);return{c(){r&&r.c(),e=at()},l(i){r&&r.l(i),e=at()},m(i,s){r&&r.m(i,s),M(i,e,s),n=!0},p(i,s){!i[16]&&(i[17]!=null||i[42].label)?r?(r.p(i,s),s[0]&196608|s[1]&2048&&U(r,1)):(r=cs(i),r.c(),U(r,1),r.m(e.parentNode,e)):r&&(qe(),P(r,1,1,()=>{r=null}),We())},i(i){n||(U(r),n=!0)},o(i){P(r),n=!1},d(i){r&&r.d(i),i&&E(e)}}}function Fc(t){let e;const n=t[51].leadingIcon,r=Re(n,t,t[90],rs);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Fe(r,n,i,i[90],e?De(n,i[90],s,Sc):Pe(i[90]),rs)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function Pc(t){let e,n,r,i,s,o,a,l,u,f;const c=t[51].prefix,d=Re(c,t,t[90],ts);let p=t[20]!=null&&fs(t);const m=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},lt(t[41],"input$")];function b(h){t[64](h)}function g(h){t[65](h)}function L(h){t[66](h)}function C(h){t[67](h)}let H={};for(let h=0;h<m.length;h+=1)H=ge(H,m[h]);t[0]!==void 0&&(H.value=t[0]),t[3]!==void 0&&(H.files=t[3]),t[4]!==void 0&&(H.dirty=t[4]),t[1]!==void 0&&(H.invalid=t[1]),r=new hc({props:H}),t[63](r),ye.push(()=>tt(r,"value",b)),ye.push(()=>tt(r,"files",g)),ye.push(()=>tt(r,"dirty",L)),ye.push(()=>tt(r,"invalid",C)),r.$on("blur",t[68]),r.$on("focus",t[69]),r.$on("blur",t[70]),r.$on("focus",t[71]);let v=t[21]!=null&&ds(t);const _=t[51].suffix,w=Re(_,t,t[90],es);return{c(){d&&d.c(),e=V(),p&&p.c(),n=V(),se(r.$$.fragment),l=V(),v&&v.c(),u=V(),w&&w.c()},l(h){d&&d.l(h),e=j(h),p&&p.l(h),n=j(h),le(r.$$.fragment,h),l=j(h),v&&v.l(h),u=j(h),w&&w.l(h)},m(h,y){d&&d.m(h,y),M(h,e,y),p&&p.m(h,y),M(h,n,y),oe(r,h,y),M(h,l,y),v&&v.m(h,y),M(h,u,y),w&&w.m(h,y),f=!0},p(h,y){d&&d.p&&(!f||y[2]&268435456)&&Fe(d,c,h,h[90],f?De(c,h[90],y,Ic):Pe(h[90]),ts),h[20]!=null?p?(p.p(h,y),y[0]&1048576&&U(p,1)):(p=fs(h),p.c(),U(p,1),p.m(n.parentNode,n)):p&&(qe(),P(p,1,1,()=>{p=null}),We());const B=y[0]&135213056|y[1]&1024?Ge(m,[y[0]&262144&&{type:h[18]},y[0]&4096&&{disabled:h[12]},y[0]&8192&&{required:h[13]},y[0]&524288&&{updateInvalid:h[19]},y[0]&134217728&&{"aria-controls":h[27]},y[0]&134217728&&{"aria-describedby":h[27]},y[0]&196608&&yt(h[16]&&h[17]!=null?{placeholder:h[17]}:{}),y[1]&1024&&yt(lt(h[41],"input$"))]):{};!i&&y[0]&1&&(i=!0,B.value=h[0],nt(()=>i=!1)),!s&&y[0]&8&&(s=!0,B.files=h[3],nt(()=>s=!1)),!o&&y[0]&16&&(o=!0,B.dirty=h[4],nt(()=>o=!1)),!a&&y[0]&2&&(a=!0,B.invalid=h[1],nt(()=>a=!1)),r.$set(B),h[21]!=null?v?(v.p(h,y),y[0]&2097152&&U(v,1)):(v=ds(h),v.c(),U(v,1),v.m(u.parentNode,u)):v&&(qe(),P(v,1,1,()=>{v=null}),We()),w&&w.p&&(!f||y[2]&268435456)&&Fe(w,_,h,h[90],f?De(_,h[90],y,Ac):Pe(h[90]),es)},i(h){f||(U(d,h),U(p),U(r.$$.fragment,h),U(v),U(w,h),f=!0)},o(h){P(d,h),P(p),P(r.$$.fragment,h),P(v),P(w,h),f=!1},d(h){d&&d.d(h),h&&E(e),p&&p.d(h),h&&E(n),t[63](null),ae(r,h),h&&E(l),v&&v.d(h),h&&E(u),w&&w.d(h)}}}function Dc(t){let e,n,r,i,s,o,a,l;const u=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},lt(t[41],"input$")];function f(g){t[56](g)}function c(g){t[57](g)}function d(g){t[58](g)}let p={};for(let g=0;g<u.length;g+=1)p=ge(p,u[g]);t[0]!==void 0&&(p.value=t[0]),t[4]!==void 0&&(p.dirty=t[4]),t[1]!==void 0&&(p.invalid=t[1]),n=new gc({props:p}),t[55](n),ye.push(()=>tt(n,"value",f)),ye.push(()=>tt(n,"dirty",c)),ye.push(()=>tt(n,"invalid",d)),n.$on("blur",t[59]),n.$on("focus",t[60]),n.$on("blur",t[61]),n.$on("focus",t[62]);const m=t[51].internalCounter,b=Re(m,t,t[90],ns);return{c(){e=R("span"),se(n.$$.fragment),o=V(),b&&b.c(),this.h()},l(g){e=F(g,"SPAN",{class:!0});var L=D(e);le(n.$$.fragment,L),o=j(L),b&&b.l(L),L.forEach(E),this.h()},h(){wt(e,"class",a=Te({"mdc-text-field__resizer":!("input$resizable"in t[41])||t[41].input$resizable}))},m(g,L){M(g,e,L),oe(n,e,null),A(e,o),b&&b.m(e,null),l=!0},p(g,L){const C=L[0]&134754304|L[1]&1024?Ge(u,[L[0]&4096&&{disabled:g[12]},L[0]&8192&&{required:g[13]},L[0]&524288&&{updateInvalid:g[19]},L[0]&134217728&&{"aria-controls":g[27]},L[0]&134217728&&{"aria-describedby":g[27]},L[1]&1024&&yt(lt(g[41],"input$"))]):{};!r&&L[0]&1&&(r=!0,C.value=g[0],nt(()=>r=!1)),!i&&L[0]&16&&(i=!0,C.dirty=g[4],nt(()=>i=!1)),!s&&L[0]&2&&(s=!0,C.invalid=g[1],nt(()=>s=!1)),n.$set(C),b&&b.p&&(!l||L[2]&268435456)&&Fe(b,m,g,g[90],l?De(m,g[90],L,kc):Pe(g[90]),ns),(!l||L[1]&1024&&a!==(a=Te({"mdc-text-field__resizer":!("input$resizable"in g[41])||g[41].input$resizable})))&&wt(e,"class",a)},i(g){l||(U(n.$$.fragment,g),U(b,g),l=!0)},o(g){P(n.$$.fragment,g),P(b,g),l=!1},d(g){g&&E(e),t[55](null),ae(n),b&&b.d(g)}}}function fs(t){let e,n;return e=new lc({props:{$$slots:{default:[Mc]},$$scope:{ctx:t}}}),{c(){se(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,i){oe(e,r,i),n=!0},p(r,i){const s={};i[0]&1048576|i[2]&268435456&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function Mc(t){let e;return{c(){e=K(t[20])},l(n){e=G(n,t[20])},m(n,r){M(n,e,r)},p(n,r){r[0]&1048576&&He(e,n[20])},d(n){n&&E(e)}}}function ds(t){let e,n;return e=new uc({props:{$$slots:{default:[Nc]},$$scope:{ctx:t}}}),{c(){se(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,i){oe(e,r,i),n=!0},p(r,i){const s={};i[0]&2097152|i[2]&268435456&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function Nc(t){let e;return{c(){e=K(t[21])},l(n){e=G(n,t[21])},m(n,r){M(n,e,r)},p(n,r){r[0]&2097152&&He(e,n[21])},d(n){n&&E(e)}}}function Vc(t){let e;const n=t[51].trailingIcon,r=Re(n,t,t[90],$i);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Fe(r,n,i,i[90],e?De(n,i[90],s,Ec):Pe(i[90]),$i)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function hs(t){let e,n;const r=[lt(t[41],"ripple$")];let i={};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new rc({props:i}),t[72](e),{c(){se(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,o){oe(e,s,o),n=!0},p(s,o){const a=o[1]&1024?Ge(r,[yt(lt(s[41],"ripple$"))]):{};e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[72](null),ae(e,s)}}}function ps(t){let e,n;const r=[lt(t[41],"helperLine$")];let i={$$slots:{default:[jc]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new ac({props:i}),e.$on("SMUITextfieldHelperText:id",t[85]),e.$on("SMUITextfieldHelperText:mount",t[86]),e.$on("SMUITextfieldHelperText:unmount",t[87]),e.$on("SMUITextfieldCharacterCounter:mount",t[88]),e.$on("SMUITextfieldCharacterCounter:unmount",t[89]),{c(){se(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,o){oe(e,s,o),n=!0},p(s,o){const a=o[1]&1024?Ge(r,[yt(lt(s[41],"helperLine$"))]):{};o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function jc(t){let e;const n=t[51].helper,r=Re(n,t,t[90],Xi);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Fe(r,n,i,i[90],e?De(n,i[90],s,bc):Pe(i[90]),Xi)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function zc(t){let e,n,r,i,s;const o=[xc,Hc],a=[];function l(f,c){return f[36]?0:1}e=l(t),n=a[e]=o[e](t);let u=t[42].helper&&ps(t);return{c(){n.c(),r=V(),u&&u.c(),i=at()},l(f){n.l(f),r=j(f),u&&u.l(f),i=at()},m(f,c){a[e].m(f,c),M(f,r,c),u&&u.m(f,c),M(f,i,c),s=!0},p(f,c){n.p(f,c),f[42].helper?u?(u.p(f,c),c[1]&2048&&U(u,1)):(u=ps(f),u.c(),U(u,1),u.m(i.parentNode,i)):u&&(qe(),P(u,1,1,()=>{u=null}),We())},i(f){s||(U(n),U(u),s=!0)},o(f){P(n),P(u),s=!1},d(f){a[e].d(f),f&&E(r),u&&u.d(f),f&&E(i)}}}const ms=([t,e])=>`${t}: ${e};`,gs=([t,e])=>`${t}: ${e};`;function Kc(t,e,n){let r;const i=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","blur","layout","getElement"];let s=Xe(e,i),{$$slots:o={},$$scope:a}=e;const l=oa(o),{applyPassive:u}=Bs,f=an(on());let c=()=>{};function d(S){return S===c}let{use:p=[]}=e,{class:m=""}=e,{style:b=""}=e,{ripple:g=!0}=e,{disabled:L=!1}=e,{required:C=!1}=e,{textarea:H=!1}=e,{variant:v=H?"outlined":"standard"}=e,{noLabel:_=!1}=e,{label:w=void 0}=e,{type:h="text"}=e,{value:y=s.input$emptyValueUndefined?void 0:c}=e,{files:B=c}=e;const I=!d(y)||!d(B);d(y)&&(y=void 0),d(B)&&(B=null);let{invalid:k=c}=e,{updateInvalid:O=d(k)}=e;d(k)&&(k=!1);let{dirty:T=!1}=e,{prefix:N=void 0}=e,{suffix:re=void 0}=e,{validateOnValueChange:he=O}=e,{useNativeValidation:ve=O}=e,{withLeadingIcon:J=c}=e,{withTrailingIcon:x=c}=e,{input:q=void 0}=e,{floatingLabel:Y=void 0}=e,{lineRipple:$=void 0}=e,{notchedOutline:we=void 0}=e,ue,Q,X={},ce={},te,Ne=!1,ie=Ar("SMUI:addLayoutListener"),ke,Se,Ye=new Promise(S=>Se=S),Ve,Ue,$e,_e,It=y;ie&&(ke=ie(it)),gn(()=>{if(n(49,Q=new Zu({addClass:et,removeClass:xe,hasClass:jt,registerTextFieldInteractionHandler:(S,Oe)=>Le().addEventListener(S,Oe),deregisterTextFieldInteractionHandler:(S,Oe)=>Le().removeEventListener(S,Oe),registerValidationAttributeChangeHandler:S=>{const Oe=xr=>xr.map(Tr=>Tr.attributeName).filter(Tr=>Tr),di=new MutationObserver(xr=>{ve&&S(Oe(xr))}),sa={attributes:!0};return q&&di.observe(q.getElement(),sa),di},deregisterValidationAttributeChangeHandler:S=>{S.disconnect()},getNativeInput:()=>{var S;return(S=q==null?void 0:q.getElement())!==null&&S!==void 0?S:null},setInputAttr:(S,Oe)=>{q==null||q.addAttr(S,Oe)},removeInputAttr:S=>{q==null||q.removeAttr(S)},isFocused:()=>document.activeElement===(q==null?void 0:q.getElement()),registerInputInteractionHandler:(S,Oe)=>{q==null||q.getElement().addEventListener(S,Oe,u())},deregisterInputInteractionHandler:(S,Oe)=>{q==null||q.getElement().removeEventListener(S,Oe,u())},floatLabel:S=>Y&&Y.float(S),getLabelWidth:()=>Y?Y.getWidth():0,hasLabel:()=>!!Y,shakeLabel:S=>Y&&Y.shake(S),setLabelRequired:S=>Y&&Y.setRequired(S),activateLineRipple:()=>$&&$.activate(),deactivateLineRipple:()=>$&&$.deactivate(),setLineRippleTransformOrigin:S=>$&&$.setRippleCenter(S),closeOutline:()=>we&&we.closeNotch(),hasOutline:()=>!!we,notchOutline:S=>we&&we.notch(S)},{get helperText(){return $e},get characterCounter(){return _e},get leadingIcon(){return Ve},get trailingIcon(){return Ue}})),I){if(q==null)throw new Error("SMUI Textfield initialized without Input component.");Q.init()}else aa().then(()=>{if(q==null)throw new Error("SMUI Textfield initialized without Input component.");Q.init()});return Se(),()=>{Q.destroy()}}),Us(()=>{ke&&ke()});function jt(S){var Oe;return S in X?(Oe=X[S])!==null&&Oe!==void 0?Oe:null:Le().classList.contains(S)}function et(S){X[S]||n(25,X[S]=!0,X)}function xe(S){(!(S in X)||X[S])&&n(25,X[S]=!1,X)}function Be(S,Oe){ce[S]!=Oe&&(Oe===""||Oe==null?(delete ce[S],n(26,ce)):n(26,ce[S]=Oe,ce))}function On(){q==null||q.focus()}function un(){q==null||q.blur()}function it(){if(Q){const S=Q.shouldFloat;Q.notchOutline(S)}}function Le(){return ue}function Z(S){ye[S?"unshift":"push"](()=>{Y=S,n(5,Y)})}function z(S){ye[S?"unshift":"push"](()=>{Y=S,n(5,Y)})}function ne(S){ye[S?"unshift":"push"](()=>{we=S,n(7,we)})}function ee(S){ye[S?"unshift":"push"](()=>{q=S,n(2,q)})}function st(S){y=S,n(0,y)}function ut(S){T=S,n(4,T)}function ot(S){k=S,n(1,k),n(49,Q),n(19,O)}const kt=()=>n(28,Ne=!1),Ae=()=>n(28,Ne=!0),St=S=>Ht(ue,"blur",S),Ot=S=>Ht(ue,"focus",S);function zt(S){ye[S?"unshift":"push"](()=>{q=S,n(2,q)})}function Kt(S){y=S,n(0,y)}function Rt(S){B=S,n(3,B)}function Gt(S){T=S,n(4,T)}function pt(S){k=S,n(1,k),n(49,Q),n(19,O)}const Jn=()=>n(28,Ne=!1),vn=()=>n(28,Ne=!0),Rn=S=>Ht(ue,"blur",S),No=S=>Ht(ue,"focus",S);function Vo(S){ye[S?"unshift":"push"](()=>{$=S,n(6,$)})}function jo(S){ye[S?"unshift":"push"](()=>{ue=S,n(24,ue)})}const zo=S=>n(29,Ve=S.detail),Ko=()=>n(29,Ve=void 0),Go=S=>n(30,Ue=S.detail),qo=()=>n(30,Ue=void 0),Wo=S=>n(32,_e=S.detail),Xo=()=>n(32,_e=void 0);function Zo(S){ye[S?"unshift":"push"](()=>{ue=S,n(24,ue)})}const Jo=S=>n(29,Ve=S.detail),Qo=()=>n(29,Ve=void 0),Yo=S=>n(30,Ue=S.detail),$o=()=>n(30,Ue=void 0),ea=S=>n(27,te=S.detail),ta=S=>n(31,$e=S.detail),na=()=>{n(27,te=void 0),n(31,$e=void 0)},ra=S=>n(32,_e=S.detail),ia=()=>n(32,_e=void 0);return t.$$set=S=>{e=ge(ge({},e),Dt(S)),n(41,s=Xe(e,i)),"use"in S&&n(8,p=S.use),"class"in S&&n(9,m=S.class),"style"in S&&n(10,b=S.style),"ripple"in S&&n(11,g=S.ripple),"disabled"in S&&n(12,L=S.disabled),"required"in S&&n(13,C=S.required),"textarea"in S&&n(14,H=S.textarea),"variant"in S&&n(15,v=S.variant),"noLabel"in S&&n(16,_=S.noLabel),"label"in S&&n(17,w=S.label),"type"in S&&n(18,h=S.type),"value"in S&&n(0,y=S.value),"files"in S&&n(3,B=S.files),"invalid"in S&&n(1,k=S.invalid),"updateInvalid"in S&&n(19,O=S.updateInvalid),"dirty"in S&&n(4,T=S.dirty),"prefix"in S&&n(20,N=S.prefix),"suffix"in S&&n(21,re=S.suffix),"validateOnValueChange"in S&&n(43,he=S.validateOnValueChange),"useNativeValidation"in S&&n(44,ve=S.useNativeValidation),"withLeadingIcon"in S&&n(22,J=S.withLeadingIcon),"withTrailingIcon"in S&&n(23,x=S.withTrailingIcon),"input"in S&&n(2,q=S.input),"floatingLabel"in S&&n(5,Y=S.floatingLabel),"lineRipple"in S&&n(6,$=S.lineRipple),"notchedOutline"in S&&n(7,we=S.notchedOutline),"$$scope"in S&&n(90,a=S.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,r=q&&q.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&262144&&Q&&Q.isValid()!==!k&&(O?n(1,k=!Q.isValid()):Q.setValid(!k)),t.$$.dirty[1]&266240&&Q&&Q.getValidateOnValueChange()!==he&&Q.setValidateOnValueChange(d(he)?!1:he),t.$$.dirty[1]&270336&&Q&&Q.setUseNativeValidation(d(ve)?!0:ve),t.$$.dirty[0]&4096|t.$$.dirty[1]&262144&&Q&&Q.setDisabled(L),t.$$.dirty[0]&1|t.$$.dirty[1]&786432&&Q&&I&&It!==y){n(50,It=y);const S=`${y}`;Q.getValue()!==S&&Q.setValue(S)}},[y,k,q,B,T,Y,$,we,p,m,b,g,L,C,H,v,_,w,h,O,N,re,J,x,ue,X,ce,te,Ne,Ve,Ue,$e,_e,r,f,d,I,Ye,et,xe,Be,s,l,he,ve,On,un,it,Le,Q,It,o,Z,z,ne,ee,st,ut,ot,kt,Ae,St,Ot,zt,Kt,Rt,Gt,pt,Jn,vn,Rn,No,Vo,jo,zo,Ko,Go,qo,Wo,Xo,Zo,Jo,Qo,Yo,$o,ea,ta,na,ra,ia,a]}class sn extends Ze{constructor(e){super(),Je(this,e,Kc,zc,Qe,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,blur:46,layout:47,getElement:48},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get blur(){return this.$$.ctx[46]}get layout(){return this.$$.ctx[47]}get getElement(){return this.$$.ctx[48]}}function Gc(t){let e;return{c(){e=K(t[8])},l(n){e=G(n,t[8])},m(n,r){M(n,e,r)},p(n,r){r&256&&He(e,n[8])},i:rt,o:rt,d(n){n&&E(e)}}}function qc(t){let e;const n=t[13].default,r=Re(n,t,t[12],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&4096)&&Fe(r,n,i,i[12],e?De(n,i[12],s,null):Pe(i[12]),null)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function Wc(t){let e,n,r,i,s,o,a,l,u;const f=[qc,Gc],c=[];function d(b,g){return b[8]==null?0:1}n=d(t),r=c[n]=f[n](t);let p=[{class:i=Te({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4],...t[6]})},{"aria-hidden":s=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let b=0;b<p.length;b+=1)m=ge(m,p[b]);return{c(){e=R("div"),r.c(),this.h()},l(b){e=F(b,"DIV",{class:!0,"aria-hidden":!0,id:!0});var g=D(e);r.l(g),g.forEach(E),this.h()},h(){ze(e,m)},m(b,g){M(b,e,g),c[n].m(e,null),t[14](e),a=!0,l||(u=[Me(o=Nt.call(null,e,t[0])),Me(t[9].call(null,e))],l=!0)},p(b,[g]){let L=n;n=d(b),n===L?c[n].p(b,g):(qe(),P(c[L],1,1,()=>{c[L]=null}),We(),r=c[n],r?r.p(b,g):(r=c[n]=f[n](b),r.c()),U(r,1),r.m(e,null)),ze(e,m=Ge(p,[(!a||g&90&&i!==(i=Te({[b[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":b[3],"mdc-text-field-helper-text--validation-msg":b[4],...b[6]})))&&{class:i},(!a||g&8&&s!==(s=b[3]?void 0:"true"))&&{"aria-hidden":s},(!a||g&4)&&{id:b[2]},g&128&&b[7],g&1024&&b[10]])),o&&Et(o.update)&&g&1&&o.update.call(null,b[0])},i(b){a||(U(r),a=!0)},o(b){P(r),a=!1},d(b){b&&E(e),c[n].d(),t[14](null),l=!1,Tt(u)}}}let Xc=0;function Zc(t,e,n){const r=["use","class","id","persistent","validationMsg","getElement"];let i=Xe(e,r),{$$slots:s={},$$scope:o}=e;const a=an(on());let{use:l=[]}=e,{class:u=""}=e,{id:f="SMUI-textfield-helper-text-"+Xc++}=e,{persistent:c=!1}=e,{validationMsg:d=!1}=e,p,m,b={},g={},L;gn(()=>(m=new Ju({addClass:H,removeClass:v,hasClass:C,getAttr:_,setAttr:w,removeAttr:h,setContent:I=>{n(8,L=I)}}),f.startsWith("SMUI-textfield-helper-text-")&&Ht(y(),"SMUITextfieldHelperText:id",f),Ht(y(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{Ht(y(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function C(I){return I in b?b[I]:y().classList.contains(I)}function H(I){b[I]||n(6,b[I]=!0,b)}function v(I){(!(I in b)||b[I])&&n(6,b[I]=!1,b)}function _(I){var k;return I in g?(k=g[I])!==null&&k!==void 0?k:null:y().getAttribute(I)}function w(I,k){g[I]!==k&&n(7,g[I]=k,g)}function h(I){(!(I in g)||g[I]!=null)&&n(7,g[I]=void 0,g)}function y(){return p}function B(I){ye[I?"unshift":"push"](()=>{p=I,n(5,p)})}return t.$$set=I=>{e=ge(ge({},e),Dt(I)),n(10,i=Xe(e,r)),"use"in I&&n(0,l=I.use),"class"in I&&n(1,u=I.class),"id"in I&&n(2,f=I.id),"persistent"in I&&n(3,c=I.persistent),"validationMsg"in I&&n(4,d=I.validationMsg),"$$scope"in I&&n(12,o=I.$$scope)},[l,u,f,c,d,p,b,g,L,a,i,y,o,s,B]}class Jc extends Ze{constructor(e){super(),Je(this,e,Zc,Wc,Qe,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}const Mn=Wr("");function Qc(t){let e;return{c(){e=K("Generate key")},l(n){e=G(n,"Generate key")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function Yc(t){let e;return{c(){e=K("Invalid private key, unable to import.")},l(n){e=G(n,"Invalid private key, unable to import.")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function $c(t){let e,n;return e=new Jc({props:{validationMsg:!0,slot:"helper",$$slots:{default:[Yc]},$$scope:{ctx:t}}}),{c(){se(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,i){oe(e,r,i),n=!0},p(r,i){const s={};i&32768&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function ef(t){let e;return{c(){e=K("Import")},l(n){e=G(n,"Import")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function tf(t){let e;return{c(){e=K("Convert")},l(n){e=G(n,"Convert")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function nf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C,H,v,_,w,h,y,B,I,k,O,T,N,re,he,ve,J,x,q,Y,$,we,ue,Q,X,ce,te,Ne,ie,ke,Se,Ye,Ve,Ue,$e,_e,It,jt,et,xe,Be;C=new vt({props:{$$slots:{default:[Qc]},$$scope:{ctx:t}}}),C.$on("click",t[11]);function On(Z){t[12](Z)}let un={type:"text",label:"Private key",style:"width: 100%",invalid:t[2],$$slots:{helper:[$c]},$$scope:{ctx:t}};t[1]!==void 0&&(un.value=t[1]),y=new sn({props:un}),ye.push(()=>tt(y,"value",On)),k=new vt({props:{$$slots:{default:[ef]},$$scope:{ctx:t}}}),k.$on("click",t[13]);function it(Z){t[14](Z)}let Le={type:"text",label:"Public key",style:"width: 100%"};return t[3]!==void 0&&(Le.value=t[3]),Se=new sn({props:Le}),ye.push(()=>tt(Se,"value",it)),Ue=new vt({props:{type:"submit",$$slots:{default:[tf]},$$scope:{ctx:t}}}),{c(){e=R("h2"),n=K("Keys"),r=V(),i=R("details"),s=R("summary"),o=K("Private key related operations"),a=V(),l=R("p"),u=K("Private key: "),f=R("code"),c=K(t[0]),d=V(),p=R("p"),m=K("Public key: "),b=R("code"),g=K(t[7]),L=V(),se(C.$$.fragment),H=V(),v=R("details"),_=R("summary"),w=K("Import an existing private key"),h=V(),se(y.$$.fragment),I=V(),se(k.$$.fragment),O=V(),T=V(),N=R("h3"),re=K("NIP19"),he=V(),ve=R("p"),J=K("nsec: "),x=R("code"),q=K(t[6]),Y=V(),$=R("p"),we=K("npub: "),ue=R("code"),Q=K(t[5]),X=V(),ce=R("details"),te=R("summary"),Ne=K("Public key related operations"),ie=V(),ke=R("form"),se(Se.$$.fragment),Ve=V(),se(Ue.$$.fragment),$e=V(),_e=R("p"),It=K("Converted public key: "),jt=K(t[4])},l(Z){e=F(Z,"H2",{});var z=D(e);n=G(z,"Keys"),z.forEach(E),r=j(Z),i=F(Z,"DETAILS",{});var ne=D(i);s=F(ne,"SUMMARY",{});var ee=D(s);o=G(ee,"Private key related operations"),ee.forEach(E),a=j(ne),l=F(ne,"P",{});var st=D(l);u=G(st,"Private key: "),f=F(st,"CODE",{});var ut=D(f);c=G(ut,t[0]),ut.forEach(E),st.forEach(E),d=j(ne),p=F(ne,"P",{});var ot=D(p);m=G(ot,"Public key: "),b=F(ot,"CODE",{});var kt=D(b);g=G(kt,t[7]),kt.forEach(E),ot.forEach(E),L=j(ne),le(C.$$.fragment,ne),H=j(ne),v=F(ne,"DETAILS",{});var Ae=D(v);_=F(Ae,"SUMMARY",{});var St=D(_);w=G(St,"Import an existing private key"),St.forEach(E),h=j(Ae),le(y.$$.fragment,Ae),I=j(Ae),le(k.$$.fragment,Ae),O=j(Ae),Ae.forEach(E),T=j(ne),N=F(ne,"H3",{});var Ot=D(N);re=G(Ot,"NIP19"),Ot.forEach(E),he=j(ne),ve=F(ne,"P",{});var zt=D(ve);J=G(zt,"nsec: "),x=F(zt,"CODE",{});var Kt=D(x);q=G(Kt,t[6]),Kt.forEach(E),zt.forEach(E),Y=j(ne),$=F(ne,"P",{});var Rt=D($);we=G(Rt,"npub: "),ue=F(Rt,"CODE",{});var Gt=D(ue);Q=G(Gt,t[5]),Gt.forEach(E),Rt.forEach(E),ne.forEach(E),X=j(Z),ce=F(Z,"DETAILS",{});var pt=D(ce);te=F(pt,"SUMMARY",{});var Jn=D(te);Ne=G(Jn,"Public key related operations"),Jn.forEach(E),ie=j(pt),ke=F(pt,"FORM",{});var vn=D(ke);le(Se.$$.fragment,vn),Ve=j(vn),le(Ue.$$.fragment,vn),vn.forEach(E),$e=j(pt),_e=F(pt,"P",{});var Rn=D(_e);It=G(Rn,"Converted public key: "),jt=G(Rn,t[4]),Rn.forEach(E),pt.forEach(E)},m(Z,z){M(Z,e,z),A(e,n),M(Z,r,z),M(Z,i,z),A(i,s),A(s,o),A(i,a),A(i,l),A(l,u),A(l,f),A(f,c),A(i,d),A(i,p),A(p,m),A(p,b),A(b,g),A(i,L),oe(C,i,null),A(i,H),A(i,v),A(v,_),A(_,w),A(v,h),oe(y,v,null),A(v,I),oe(k,v,null),A(v,O),A(i,T),A(i,N),A(N,re),A(i,he),A(i,ve),A(ve,J),A(ve,x),A(x,q),A(i,Y),A(i,$),A($,we),A($,ue),A(ue,Q),M(Z,X,z),M(Z,ce,z),A(ce,te),A(te,Ne),A(ce,ie),A(ce,ke),oe(Se,ke,null),A(ke,Ve),oe(Ue,ke,null),A(ce,$e),A(ce,_e),A(_e,It),A(_e,jt),et=!0,xe||(Be=Ie(ke,"submit",pn(t[10])),xe=!0)},p(Z,[z]){(!et||z&1)&&He(c,Z[0]),(!et||z&128)&&He(g,Z[7]);const ne={};z&32768&&(ne.$$scope={dirty:z,ctx:Z}),C.$set(ne);const ee={};z&4&&(ee.invalid=Z[2]),z&32768&&(ee.$$scope={dirty:z,ctx:Z}),!B&&z&2&&(B=!0,ee.value=Z[1],nt(()=>B=!1)),y.$set(ee);const st={};z&32768&&(st.$$scope={dirty:z,ctx:Z}),k.$set(st),(!et||z&64)&&He(q,Z[6]),(!et||z&32)&&He(Q,Z[5]);const ut={};!Ye&&z&8&&(Ye=!0,ut.value=Z[3],nt(()=>Ye=!1)),Se.$set(ut);const ot={};z&32768&&(ot.$$scope={dirty:z,ctx:Z}),Ue.$set(ot),(!et||z&16)&&He(jt,Z[4])},i(Z){et||(U(C.$$.fragment,Z),U(y.$$.fragment,Z),U(k.$$.fragment,Z),U(Se.$$.fragment,Z),U(Ue.$$.fragment,Z),et=!0)},o(Z){P(C.$$.fragment,Z),P(y.$$.fragment,Z),P(k.$$.fragment,Z),P(Se.$$.fragment,Z),P(Ue.$$.fragment,Z),et=!1},d(Z){Z&&E(e),Z&&E(r),Z&&E(i),ae(C),ae(y),ae(k),Z&&E(X),Z&&E(ce),ae(Se),ae(Ue),xe=!1,Be()}}}function rf(t,e,n){let r,i,s,o;fr(t,Mn,C=>n(0,o=C));let a="",l=!1;const u=()=>{ur(Mn,o=ru(),o)},f=()=>{if(n(2,l=!1),a.startsWith("nsec"))try{const{data:C}=dn.decode(a);ur(Mn,o=C,o);return}catch{}if(a.length===64){ur(Mn,o=a,o);return}n(2,l=!0)};let c="",d="";const p=()=>{if(c.startsWith("npub")){const{data:C}=dn.decode(c);n(4,d=C)}else c.length===64&&n(4,d=dn.npubEncode(c))},m=()=>u();function b(C){a=C,n(1,a)}const g=()=>f();function L(C){c=C,n(3,c)}return t.$$.update=()=>{t.$$.dirty&1&&n(7,r=o===""?"":ai(o)),t.$$.dirty&1&&n(6,i=o===""?"":dn.nsecEncode(o)),t.$$.dirty&1&&n(5,s=o===""?"":dn.npubEncode(o))},[o,a,l,c,d,s,i,r,u,f,p,m,b,g,L]}class sf extends Ze{constructor(e){super(),Je(this,e,rf,nf,Qe,{})}}function of(t){let e;return{c(){e=K("Fetch relay info")},l(n){e=G(n,"Fetch relay info")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function af(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C;function H(_){t[3](_)}let v={type:"url",style:"width: 100%"};return t[0]!==void 0&&(v.value=t[0]),u=new sn({props:v}),ye.push(()=>tt(u,"value",H)),d=new vt({props:{$$slots:{default:[of]},$$scope:{ctx:t}}}),{c(){e=R("h2"),n=K("NIP11"),r=V(),i=R("details"),s=R("summary"),o=K("Fetch NIP11 info for relays"),a=V(),l=R("form"),se(u.$$.fragment),c=V(),se(d.$$.fragment),p=V(),m=R("pre"),b=K(t[1])},l(_){e=F(_,"H2",{});var w=D(e);n=G(w,"NIP11"),w.forEach(E),r=j(_),i=F(_,"DETAILS",{});var h=D(i);s=F(h,"SUMMARY",{});var y=D(s);o=G(y,"Fetch NIP11 info for relays"),y.forEach(E),a=j(h),l=F(h,"FORM",{});var B=D(l);le(u.$$.fragment,B),c=j(B),le(d.$$.fragment,B),B.forEach(E),p=j(h),m=F(h,"PRE",{});var I=D(m);b=G(I,t[1]),I.forEach(E),h.forEach(E)},m(_,w){M(_,e,w),A(e,n),M(_,r,w),M(_,i,w),A(i,s),A(s,o),A(i,a),A(i,l),oe(u,l,null),A(l,c),oe(d,l,null),A(i,p),A(i,m),A(m,b),g=!0,L||(C=Ie(l,"submit",pn(t[4])),L=!0)},p(_,[w]){const h={};!f&&w&1&&(f=!0,h.value=_[0],nt(()=>f=!1)),u.$set(h);const y={};w&32&&(y.$$scope={dirty:w,ctx:_}),d.$set(y),(!g||w&2)&&He(b,_[1])},i(_){g||(U(u.$$.fragment,_),U(d.$$.fragment,_),g=!0)},o(_){P(u.$$.fragment,_),P(d.$$.fragment,_),g=!1},d(_){_&&E(e),_&&E(r),_&&E(i),ae(u),ae(d),L=!1,C()}}}function lf(t,e,n){let r="",i="";const s=async()=>{const u=await(await fetch("https://relay.nostr.nu",{headers:{accept:"application/nostr+json"}})).json();n(1,i=JSON.stringify(u,null,2))};function o(l){r=l,n(0,r)}return[r,i,s,o,()=>s()]}class uf extends Ze{constructor(e){super(),Je(this,e,lf,af,Qe,{})}}function cf(t){let e;return{c(){e=K("Fetch")},l(n){e=G(n,"Fetch")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function ff(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C;function H(_){t[3](_)}let v={type:"text",label:"Address",style:"width: 100%"};return t[0]!==void 0&&(v.value=t[0]),u=new sn({props:v}),ye.push(()=>tt(u,"value",H)),u.$on("enter",t[4]),d=new vt({props:{type:"submit",$$slots:{default:[cf]},$$scope:{ctx:t}}}),{c(){e=R("h2"),n=K("NIP05"),r=V(),i=R("details"),s=R("summary"),o=K("Fetch NIP05 profiles"),a=V(),l=R("form"),se(u.$$.fragment),c=V(),se(d.$$.fragment),p=V(),m=R("pre"),b=K(t[1])},l(_){e=F(_,"H2",{});var w=D(e);n=G(w,"NIP05"),w.forEach(E),r=j(_),i=F(_,"DETAILS",{});var h=D(i);s=F(h,"SUMMARY",{});var y=D(s);o=G(y,"Fetch NIP05 profiles"),y.forEach(E),a=j(h),l=F(h,"FORM",{});var B=D(l);le(u.$$.fragment,B),c=j(B),le(d.$$.fragment,B),B.forEach(E),p=j(h),m=F(h,"PRE",{});var I=D(m);b=G(I,t[1]),I.forEach(E),h.forEach(E)},m(_,w){M(_,e,w),A(e,n),M(_,r,w),M(_,i,w),A(i,s),A(s,o),A(i,a),A(i,l),oe(u,l,null),A(l,c),oe(d,l,null),A(i,p),A(i,m),A(m,b),g=!0,L||(C=Ie(l,"submit",pn(t[5])),L=!0)},p(_,[w]){const h={};!f&&w&1&&(f=!0,h.value=_[0],nt(()=>f=!1)),u.$set(h);const y={};w&64&&(y.$$scope={dirty:w,ctx:_}),d.$set(y),(!g||w&2)&&He(b,_[1])},i(_){g||(U(u.$$.fragment,_),U(d.$$.fragment,_),g=!0)},o(_){P(u.$$.fragment,_),P(d.$$.fragment,_),g=!1},d(_){_&&E(e),_&&E(r),_&&E(i),ae(u),ae(d),L=!1,C()}}}function df(t,e,n){let r="",i="";const s=async()=>{const u=await Po.queryProfile(r);n(1,i=JSON.stringify(u,null,2))};function o(u){r=u,n(0,r)}function a(u){jn.call(this,t,u)}return[r,i,s,o,a,()=>s()]}class hf extends Ze{constructor(e){super(),Je(this,e,df,ff,Qe,{})}}const fi=Wr();function pf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C=t[5]&&bs(t);function H(h){t[12](h)}let v={textarea:!0,style:"width: 100%"};t[0]!==void 0&&(v.value=t[0]),l=new sn({props:v}),ye.push(()=>tt(l,"value",H)),c=new vt({props:{$$slots:{default:[gf]},$$scope:{ctx:t}}});let _=t[3]!==""&&vs(t),w=t[2]&&_s(t);return{c(){C&&C.c(),e=V(),n=R("form"),r=R("p"),i=K("Publish to relay: "),s=R("code"),o=K(t[7]),a=V(),se(l.$$.fragment),f=V(),se(c.$$.fragment),d=V(),_&&_.c(),p=V(),w&&w.c(),m=at()},l(h){C&&C.l(h),e=j(h),n=F(h,"FORM",{});var y=D(n);r=F(y,"P",{});var B=D(r);i=G(B,"Publish to relay: "),s=F(B,"CODE",{});var I=D(s);o=G(I,t[7]),I.forEach(E),B.forEach(E),a=j(y),le(l.$$.fragment,y),f=j(y),le(c.$$.fragment,y),y.forEach(E),d=j(h),_&&_.l(h),p=j(h),w&&w.l(h),m=at()},m(h,y){C&&C.m(h,y),M(h,e,y),M(h,n,y),A(n,r),A(r,i),A(r,s),A(s,o),A(n,a),oe(l,n,null),A(n,f),oe(c,n,null),M(h,d,y),_&&_.m(h,y),M(h,p,y),w&&w.m(h,y),M(h,m,y),b=!0,g||(L=Ie(n,"submit",pn(t[9])),g=!0)},p(h,y){h[5]?C?C.p(h,y):(C=bs(h),C.c(),C.m(e.parentNode,e)):C&&(C.d(1),C=null),(!b||y&128)&&He(o,h[7]);const B={};!u&&y&1&&(u=!0,B.value=h[0],nt(()=>u=!1)),l.$set(B);const I={};y&16384&&(I.$$scope={dirty:y,ctx:h}),c.$set(I),h[3]!==""?_?_.p(h,y):(_=vs(h),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null),h[2]?w?(w.p(h,y),y&4&&U(w,1)):(w=_s(h),w.c(),U(w,1),w.m(m.parentNode,m)):w&&(qe(),P(w,1,1,()=>{w=null}),We())},i(h){b||(U(l.$$.fragment,h),U(c.$$.fragment,h),U(w),b=!0)},o(h){P(l.$$.fragment,h),P(c.$$.fragment,h),P(w),b=!1},d(h){C&&C.d(h),h&&E(e),h&&E(n),ae(l),ae(c),h&&E(d),_&&_.d(h),h&&E(p),w&&w.d(h),h&&E(m),g=!1,L()}}}function mf(t){let e,n;return{c(){e=R("p"),n=K("Please add a private key first")},l(r){e=F(r,"P",{});var i=D(e);n=G(i,"Please add a private key first"),i.forEach(E)},m(r,i){M(r,e,i),A(e,n)},p:rt,i:rt,o:rt,d(r){r&&E(e)}}}function bs(t){let e,n,r,i=t[6]&&ys();return{c(){e=R("p"),n=K("Event successfully published"),i&&i.c(),r=K(".")},l(s){e=F(s,"P",{});var o=D(e);n=G(o,"Event successfully published"),i&&i.l(o),r=G(o,"."),o.forEach(E)},m(s,o){M(s,e,o),A(e,n),i&&i.m(e,null),A(e,r)},p(s,o){s[6]?i||(i=ys(),i.c(),i.m(e,r)):i&&(i.d(1),i=null)},d(s){s&&E(e),i&&i.d()}}}function ys(t){let e=" and seen",n;return{c(){n=K(e)},l(r){n=G(r,e)},m(r,i){M(r,n,i)},d(r){r&&E(n)}}}function gf(t){let e;return{c(){e=K("Prepare event")},l(n){e=G(n,"Prepare event")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function vs(t){let e,n,r,i;return{c(){e=R("p"),n=R("strong"),r=K("ERROR:"),i=K(t[3])},l(s){e=F(s,"P",{});var o=D(e);n=F(o,"STRONG",{});var a=D(n);r=G(a,"ERROR:"),a.forEach(E),i=G(o,t[3]),o.forEach(E)},m(s,o){M(s,e,o),A(e,n),A(n,r),A(e,i)},p(s,o){o&8&&He(i,s[3])},d(s){s&&E(e)}}}function _s(t){let e,n,r,i,s;return i=new vt({props:{disabled:t[4],$$slots:{default:[bf]},$$scope:{ctx:t}}}),i.$on("click",t[10]),{c(){e=R("pre"),n=K(t[1]),r=V(),se(i.$$.fragment)},l(o){e=F(o,"PRE",{});var a=D(e);n=G(a,t[1]),a.forEach(E),r=j(o),le(i.$$.fragment,o)},m(o,a){M(o,e,a),A(e,n),M(o,r,a),oe(i,o,a),s=!0},p(o,a){(!s||a&2)&&He(n,o[1]);const l={};a&16&&(l.disabled=o[4]),a&16384&&(l.$$scope={dirty:a,ctx:o}),i.$set(l)},i(o){s||(U(i.$$.fragment,o),s=!0)},o(o){P(i.$$.fragment,o),s=!1},d(o){o&&E(e),o&&E(r),ae(i,o)}}}function bf(t){let e;return{c(){e=K("Publish")},l(n){e=G(n,"Publish")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function yf(t){let e,n,r,i,s,o,a,l,u,f,c,d;const p=[mf,pf],m=[];function b(g,L){return g[8]===""?0:1}return l=b(t),u=m[l]=p[l](t),{c(){e=R("h2"),n=K("Publish"),r=V(),i=R("details"),s=R("summary"),o=K("Publish events to relays (connect to a relay first)"),a=V(),u.c(),f=V(),c=R("p")},l(g){e=F(g,"H2",{});var L=D(e);n=G(L,"Publish"),L.forEach(E),r=j(g),i=F(g,"DETAILS",{});var C=D(i);s=F(C,"SUMMARY",{});var H=D(s);o=G(H,"Publish events to relays (connect to a relay first)"),H.forEach(E),a=j(C),u.l(C),f=j(C),c=F(C,"P",{}),D(c).forEach(E),C.forEach(E)},m(g,L){M(g,e,L),A(e,n),M(g,r,L),M(g,i,L),A(i,s),A(s,o),A(i,a),m[l].m(i,null),A(i,f),A(i,c),d=!0},p(g,[L]){let C=l;l=b(g),l===C?m[l].p(g,L):(qe(),P(m[C],1,1,()=>{m[C]=null}),We(),u=m[l],u?u.p(g,L):(u=m[l]=p[l](g),u.c()),U(u,1),u.m(i,f))},i(g){d||(U(u),d=!0)},o(g){P(u),d=!1},d(g){g&&E(e),g&&E(r),g&&E(i),m[l].d()}}}function vf(t,e,n){let r,i,s;fr(t,fi,L=>n(11,i=L)),fr(t,Mn,L=>n(8,s=L));let o="",a,l="",u=!1,f="",c=!1,d=!1,p=!1;const m=()=>{if(n(3,f=""),typeof i>"u"){n(3,f="#oNMSD1 Connect to a relay in order to publish");return}if(s===""){n(3,f="#gVoA24 Set a private in order to publish");return}if(a=JSON.parse(o.trim()),a.created_at=Math.floor(Date.now()/1e3),a.pubkey=ai(s),!ui(a)){n(3,f="#KBJSkv Invalid event");return}a.id=li(a),a.sig=cu(a,s),n(1,l=JSON.stringify(a,null,2)),n(2,u=!0)},b=()=>{n(4,c=!0);const L=i.publish(a);L.on("failed",C=>{n(3,f=`#oPbGD5 Publishing failed with error: ${C}`)}),L.on("ok",()=>{n(5,d=!0),n(0,o=""),a=void 0,n(1,l=""),n(2,u=!1),n(3,f=""),n(4,c=!1)}),L.on("seen",()=>{n(6,p=!0),n(0,o=""),a=void 0,n(1,l=""),n(2,u=!1),n(3,f=""),n(4,c=!1)})};function g(L){o=L,n(0,o)}return t.$$.update=()=>{t.$$.dirty&2048&&n(7,r=typeof i<"u"?i.url:"No relay connected")},[o,l,u,f,c,d,p,r,s,m,b,i,g]}class _f extends Ze{constructor(e){super(),Je(this,e,vf,yf,Qe,{})}}function ws(t,e,n){const r=t.slice();return r[9]=e[n],r}function Es(t,e,n){const r=t.slice();return r[9]=e[n],r}function wf(t){let e;return{c(){e=K("Connect")},l(n){e=G(n,"Connect")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function As(t){let e,n;return{c(){e=R("li"),n=K("No notices")},l(r){e=F(r,"LI",{});var i=D(e);n=G(i,"No notices"),i.forEach(E)},m(r,i){M(r,e,i),A(e,n)},p:rt,d(r){r&&E(e)}}}function Is(t){let e,n,r=t[9]+"",i,s;return{c(){e=R("li"),n=R("code"),i=K(r),s=V()},l(o){e=F(o,"LI",{});var a=D(e);n=F(a,"CODE",{});var l=D(n);i=G(l,r),l.forEach(E),s=j(a),a.forEach(E)},m(o,a){M(o,e,a),A(e,n),A(n,i),A(e,s)},p(o,a){a&2&&r!==(r=o[9]+"")&&He(i,r)},d(o){o&&E(e)}}}function ks(t){let e,n;return{c(){e=R("li"),n=K("No errors")},l(r){e=F(r,"LI",{});var i=D(e);n=G(i,"No errors"),i.forEach(E)},m(r,i){M(r,e,i),A(e,n)},p:rt,d(r){r&&E(e)}}}function Ss(t){let e,n,r=t[9]+"",i,s;return{c(){e=R("li"),n=R("code"),i=K(r),s=V()},l(o){e=F(o,"LI",{});var a=D(e);n=F(a,"CODE",{});var l=D(n);i=G(l,r),l.forEach(E),s=j(a),a.forEach(E)},m(o,a){M(o,e,a),A(e,n),A(n,i),A(e,s)},p(o,a){a&2&&r!==(r=o[9]+"")&&He(i,r)},d(o){o&&E(e)}}}function Ef(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C,H,v,_,w,h,y,B,I,k,O,T,N,re,he,ve;function J(X){t[5](X)}let x={type:"url",style:"width: 100%"};t[0]!==void 0&&(x.value=t[0]),u=new sn({props:x}),ye.push(()=>tt(u,"value",J)),d=new vt({props:{$$slots:{default:[wf]},$$scope:{ctx:t}}});let q=t[1],Y=[];for(let X=0;X<q.length;X+=1)Y[X]=Is(Es(t,q,X));let $=null;q.length||($=As());let we=t[1],ue=[];for(let X=0;X<we.length;X+=1)ue[X]=Ss(ws(t,we,X));let Q=null;return we.length||(Q=ks()),{c(){e=R("h2"),n=K("Relays"),r=V(),i=R("details"),s=R("summary"),o=K("Connect to relays and monitor notices and errors"),a=V(),l=R("form"),se(u.$$.fragment),c=V(),se(d.$$.fragment),p=V(),m=R("p"),b=K("Connecting: "),g=K(t[2]),L=V(),C=R("p"),H=K("Connected: "),v=K(t[3]),_=V(),w=R("h3"),h=K("Notices"),y=V(),B=R("ul");for(let X=0;X<Y.length;X+=1)Y[X].c();$&&$.c(),I=V(),k=R("h3"),O=K("Errors"),T=V(),N=R("ul");for(let X=0;X<ue.length;X+=1)ue[X].c();Q&&Q.c()},l(X){e=F(X,"H2",{});var ce=D(e);n=G(ce,"Relays"),ce.forEach(E),r=j(X),i=F(X,"DETAILS",{});var te=D(i);s=F(te,"SUMMARY",{});var Ne=D(s);o=G(Ne,"Connect to relays and monitor notices and errors"),Ne.forEach(E),a=j(te),l=F(te,"FORM",{});var ie=D(l);le(u.$$.fragment,ie),c=j(ie),le(d.$$.fragment,ie),ie.forEach(E),p=j(te),m=F(te,"P",{});var ke=D(m);b=G(ke,"Connecting: "),g=G(ke,t[2]),ke.forEach(E),L=j(te),C=F(te,"P",{});var Se=D(C);H=G(Se,"Connected: "),v=G(Se,t[3]),Se.forEach(E),_=j(te),w=F(te,"H3",{});var Ye=D(w);h=G(Ye,"Notices"),Ye.forEach(E),y=j(te),B=F(te,"UL",{});var Ve=D(B);for(let _e=0;_e<Y.length;_e+=1)Y[_e].l(Ve);$&&$.l(Ve),Ve.forEach(E),I=j(te),k=F(te,"H3",{});var Ue=D(k);O=G(Ue,"Errors"),Ue.forEach(E),T=j(te),N=F(te,"UL",{});var $e=D(N);for(let _e=0;_e<ue.length;_e+=1)ue[_e].l($e);Q&&Q.l($e),$e.forEach(E),te.forEach(E)},m(X,ce){M(X,e,ce),A(e,n),M(X,r,ce),M(X,i,ce),A(i,s),A(s,o),A(i,a),A(i,l),oe(u,l,null),A(l,c),oe(d,l,null),A(i,p),A(i,m),A(m,b),A(m,g),A(i,L),A(i,C),A(C,H),A(C,v),A(i,_),A(i,w),A(w,h),A(i,y),A(i,B);for(let te=0;te<Y.length;te+=1)Y[te].m(B,null);$&&$.m(B,null),A(i,I),A(i,k),A(k,O),A(i,T),A(i,N);for(let te=0;te<ue.length;te+=1)ue[te].m(N,null);Q&&Q.m(N,null),re=!0,he||(ve=Ie(l,"submit",pn(t[6])),he=!0)},p(X,[ce]){const te={};!f&&ce&1&&(f=!0,te.value=X[0],nt(()=>f=!1)),u.$set(te);const Ne={};if(ce&16384&&(Ne.$$scope={dirty:ce,ctx:X}),d.$set(Ne),(!re||ce&4)&&He(g,X[2]),(!re||ce&8)&&He(v,X[3]),ce&2){q=X[1];let ie;for(ie=0;ie<q.length;ie+=1){const ke=Es(X,q,ie);Y[ie]?Y[ie].p(ke,ce):(Y[ie]=Is(ke),Y[ie].c(),Y[ie].m(B,null))}for(;ie<Y.length;ie+=1)Y[ie].d(1);Y.length=q.length,!q.length&&$?$.p(X,ce):q.length?$&&($.d(1),$=null):($=As(),$.c(),$.m(B,null))}if(ce&2){we=X[1];let ie;for(ie=0;ie<we.length;ie+=1){const ke=ws(X,we,ie);ue[ie]?ue[ie].p(ke,ce):(ue[ie]=Ss(ke),ue[ie].c(),ue[ie].m(N,null))}for(;ie<ue.length;ie+=1)ue[ie].d(1);ue.length=we.length,!we.length&&Q?Q.p(X,ce):we.length?Q&&(Q.d(1),Q=null):(Q=ks(),Q.c(),Q.m(N,null))}},i(X){re||(U(u.$$.fragment,X),U(d.$$.fragment,X),re=!0)},o(X){P(u.$$.fragment,X),P(d.$$.fragment,X),re=!1},d(X){X&&E(e),X&&E(r),X&&E(i),ae(u),ae(d),Nr(Y,X),$&&$.d(),Nr(ue,X),Q&&Q.d(),he=!1,ve()}}}function Af(t,e,n){let r="",i,s=[],o=[],a=!1,l=!1;const u=()=>{a||l||(i=bu(r),fi.set(i),i.on("notice",d=>{n(1,s=[...s,d])}),i.on("error",d=>{o=[...o,d]}),i.on("connect",()=>{n(2,a=!1),n(3,l=!0)}),i.on("disconnect",()=>{n(2,a=!1),n(3,l=!1)}),i.connect(),n(2,a=!0))};function f(d){r=d,n(0,r)}return[r,s,a,l,u,f,()=>u()]}class If extends Ze{constructor(e){super(),Je(this,e,Af,Ef,Qe,{})}}function Ls(t,e,n){const r=t.slice();return r[21]=e[n],r}function kf(t){let e,n;return e=new vt({props:{$$slots:{default:[Lf]},$$scope:{ctx:t}}}),e.$on("click",t[11]),{c(){se(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,i){oe(e,r,i),n=!0},p(r,i){const s={};i&16777216&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function Sf(t){let e,n;return e=new vt({props:{$$slots:{default:[Cf]},$$scope:{ctx:t}}}),e.$on("click",t[10]),{c(){se(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,i){oe(e,r,i),n=!0},p(r,i){const s={};i&16777216&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function Lf(t){let e;return{c(){e=K("Stop firehose")},l(n){e=G(n,"Stop firehose")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function Cf(t){let e;return{c(){e=K("Start firehose")},l(n){e=G(n,"Start firehose")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function Hf(t){let e;return{c(){e=K("Subscribe to profile")},l(n){e=G(n,"Subscribe to profile")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function Cs(t){let e,n=JSON.stringify(t[4],null,2)+"",r,i,s,o,a,l,u=JSON.stringify(JSON.parse(t[4].content),null,2)+"",f;return{c(){e=R("pre"),r=K(n),i=V(),s=R("p"),o=K("Content unpacked"),a=V(),l=R("pre"),f=K(u)},l(c){e=F(c,"PRE",{});var d=D(e);r=G(d,n),d.forEach(E),i=j(c),s=F(c,"P",{});var p=D(s);o=G(p,"Content unpacked"),p.forEach(E),a=j(c),l=F(c,"PRE",{});var m=D(l);f=G(m,u),m.forEach(E)},m(c,d){M(c,e,d),A(e,r),M(c,i,d),M(c,s,d),A(s,o),M(c,a,d),M(c,l,d),A(l,f)},p(c,d){d&16&&n!==(n=JSON.stringify(c[4],null,2)+"")&&He(r,n),d&16&&u!==(u=JSON.stringify(JSON.parse(c[4].content),null,2)+"")&&He(f,u)},d(c){c&&E(e),c&&E(i),c&&E(s),c&&E(a),c&&E(l)}}}function Hs(t){let e,n;return{c(){e=R("p"),n=K("No profile found")},l(r){e=F(r,"P",{});var i=D(e);n=G(i,"No profile found"),i.forEach(E)},m(r,i){M(r,e,i),A(e,n)},d(r){r&&E(e)}}}function xf(t){let e;return{c(){e=K("Subscribe")},l(n){e=G(n,"Subscribe")},m(n,r){M(n,e,r)},d(n){n&&E(e)}}}function xs(t){let e,n;return{c(){e=R("li"),n=K("No events")},l(r){e=F(r,"LI",{});var i=D(e);n=G(i,"No events"),i.forEach(E)},m(r,i){M(r,e,i),A(e,n)},p:rt,d(r){r&&E(e)}}}function Ts(t){let e,n,r=JSON.stringify(t[21],null,2)+"",i;return{c(){e=R("li"),n=R("pre"),i=K(r)},l(s){e=F(s,"LI",{});var o=D(e);n=F(o,"PRE",{});var a=D(n);i=G(a,r),a.forEach(E),o.forEach(E)},m(s,o){M(s,e,o),A(e,n),A(n,i)},p(s,o){o&2&&r!==(r=JSON.stringify(s[21],null,2)+"")&&He(i,r)},d(s){s&&E(e)}}}function Tf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,L,C,H,v,_,w,h,y,B,I,k,O,T,N,re,he,ve,J,x,q,Y,$,we,ue,Q,X,ce,te,Ne,ie,ke,Se,Ye,Ve,Ue;const $e=[Sf,kf],_e=[];function It(z,ne){return z[0]?1:0}m=It(t),b=_e[m]=$e[m](t);function jt(z){t[12](z)}let et={label:"Enter a public key, prefix, or npub",style:"width: 100%"};t[3]!==void 0&&(et.value=t[3]),_=new sn({props:et}),ye.push(()=>tt(_,"value",jt)),y=new vt({props:{$$slots:{default:[Hf]},$$scope:{ctx:t}}});let xe=typeof t[4]<"u"&&Cs(t),Be=t[2]&&typeof t[4]>"u"&&Hs();function On(z){t[14](z)}let un={label:"Kind to subscribe to"};t[5]!==void 0&&(un.value=t[5]),he=new sn({props:un}),ye.push(()=>tt(he,"value",On)),x=new vt({props:{$$slots:{default:[xf]},$$scope:{ctx:t}}});let it=t[1],Le=[];for(let z=0;z<it.length;z+=1)Le[z]=Ts(Ls(t,it,z));let Z=null;return it.length||(Z=xs()),{c(){e=R("h2"),n=K("Subscribe"),r=V(),i=R("details"),s=R("summary"),o=K("Subscribe to events of various kinds (connect to a relay first)"),a=V(),l=R("h3"),u=K("Firehose"),f=V(),c=R("p"),d=K(`Subscribe to all events from this relay (stops after 30 seconds or 30
    events)`),p=V(),b.c(),g=V(),L=R("h3"),C=K("Profile"),H=V(),v=R("form"),se(_.$$.fragment),h=V(),se(y.$$.fragment),B=V(),xe&&xe.c(),I=V(),Be&&Be.c(),k=V(),O=R("h3"),T=K("Kind"),N=V(),re=R("form"),se(he.$$.fragment),J=V(),se(x.$$.fragment),q=V(),Y=R("h3"),$=K("Events"),we=V(),ue=R("p"),Q=K("Actively subscribed: "),X=K(t[0]),ce=V(),te=R("p"),Ne=K("Got EOSE: "),ie=K(t[2]),ke=V(),Se=R("ul");for(let z=0;z<Le.length;z+=1)Le[z].c();Z&&Z.c()},l(z){e=F(z,"H2",{});var ne=D(e);n=G(ne,"Subscribe"),ne.forEach(E),r=j(z),i=F(z,"DETAILS",{});var ee=D(i);s=F(ee,"SUMMARY",{});var st=D(s);o=G(st,"Subscribe to events of various kinds (connect to a relay first)"),st.forEach(E),a=j(ee),l=F(ee,"H3",{});var ut=D(l);u=G(ut,"Firehose"),ut.forEach(E),f=j(ee),c=F(ee,"P",{});var ot=D(c);d=G(ot,`Subscribe to all events from this relay (stops after 30 seconds or 30
    events)`),ot.forEach(E),p=j(ee),b.l(ee),g=j(ee),L=F(ee,"H3",{});var kt=D(L);C=G(kt,"Profile"),kt.forEach(E),H=j(ee),v=F(ee,"FORM",{});var Ae=D(v);le(_.$$.fragment,Ae),h=j(Ae),le(y.$$.fragment,Ae),Ae.forEach(E),B=j(ee),xe&&xe.l(ee),I=j(ee),Be&&Be.l(ee),k=j(ee),O=F(ee,"H3",{});var St=D(O);T=G(St,"Kind"),St.forEach(E),N=j(ee),re=F(ee,"FORM",{});var Ot=D(re);le(he.$$.fragment,Ot),J=j(Ot),le(x.$$.fragment,Ot),Ot.forEach(E),q=j(ee),Y=F(ee,"H3",{});var zt=D(Y);$=G(zt,"Events"),zt.forEach(E),we=j(ee),ue=F(ee,"P",{});var Kt=D(ue);Q=G(Kt,"Actively subscribed: "),X=G(Kt,t[0]),Kt.forEach(E),ce=j(ee),te=F(ee,"P",{});var Rt=D(te);Ne=G(Rt,"Got EOSE: "),ie=G(Rt,t[2]),Rt.forEach(E),ke=j(ee),Se=F(ee,"UL",{});var Gt=D(Se);for(let pt=0;pt<Le.length;pt+=1)Le[pt].l(Gt);Z&&Z.l(Gt),Gt.forEach(E),ee.forEach(E)},m(z,ne){M(z,e,ne),A(e,n),M(z,r,ne),M(z,i,ne),A(i,s),A(s,o),A(i,a),A(i,l),A(l,u),A(i,f),A(i,c),A(c,d),A(i,p),_e[m].m(i,null),A(i,g),A(i,L),A(L,C),A(i,H),A(i,v),oe(_,v,null),A(v,h),oe(y,v,null),A(i,B),xe&&xe.m(i,null),A(i,I),Be&&Be.m(i,null),A(i,k),A(i,O),A(O,T),A(i,N),A(i,re),oe(he,re,null),A(re,J),oe(x,re,null),A(i,q),A(i,Y),A(Y,$),A(i,we),A(i,ue),A(ue,Q),A(ue,X),A(i,ce),A(i,te),A(te,Ne),A(te,ie),A(i,ke),A(i,Se);for(let ee=0;ee<Le.length;ee+=1)Le[ee].m(Se,null);Z&&Z.m(Se,null),Ye=!0,Ve||(Ue=[Ie(v,"submit",pn(t[13])),Ie(re,"submit",pn(t[15]))],Ve=!0)},p(z,[ne]){let ee=m;m=It(z),m===ee?_e[m].p(z,ne):(qe(),P(_e[ee],1,1,()=>{_e[ee]=null}),We(),b=_e[m],b?b.p(z,ne):(b=_e[m]=$e[m](z),b.c()),U(b,1),b.m(i,g));const st={};!w&&ne&8&&(w=!0,st.value=z[3],nt(()=>w=!1)),_.$set(st);const ut={};ne&16777216&&(ut.$$scope={dirty:ne,ctx:z}),y.$set(ut),typeof z[4]<"u"?xe?xe.p(z,ne):(xe=Cs(z),xe.c(),xe.m(i,I)):xe&&(xe.d(1),xe=null),z[2]&&typeof z[4]>"u"?Be||(Be=Hs(),Be.c(),Be.m(i,k)):Be&&(Be.d(1),Be=null);const ot={};!ve&&ne&32&&(ve=!0,ot.value=z[5],nt(()=>ve=!1)),he.$set(ot);const kt={};if(ne&16777216&&(kt.$$scope={dirty:ne,ctx:z}),x.$set(kt),(!Ye||ne&1)&&He(X,z[0]),(!Ye||ne&4)&&He(ie,z[2]),ne&2){it=z[1];let Ae;for(Ae=0;Ae<it.length;Ae+=1){const St=Ls(z,it,Ae);Le[Ae]?Le[Ae].p(St,ne):(Le[Ae]=Ts(St),Le[Ae].c(),Le[Ae].m(Se,null))}for(;Ae<Le.length;Ae+=1)Le[Ae].d(1);Le.length=it.length,!it.length&&Z?Z.p(z,ne):it.length?Z&&(Z.d(1),Z=null):(Z=xs(),Z.c(),Z.m(Se,null))}},i(z){Ye||(U(b),U(_.$$.fragment,z),U(y.$$.fragment,z),U(he.$$.fragment,z),U(x.$$.fragment,z),Ye=!0)},o(z){P(b),P(_.$$.fragment,z),P(y.$$.fragment,z),P(he.$$.fragment,z),P(x.$$.fragment,z),Ye=!1},d(z){z&&E(e),z&&E(r),z&&E(i),_e[m].d(),ae(_),ae(y),xe&&xe.d(),Be&&Be.d(),ae(he),ae(x),Nr(Le,z),Z&&Z.d(),Ve=!1,Tt(Ue)}}}function Uf(t,e,n){let r;fi.subscribe(y=>r=y);let i,s=!1,o=[],a=!1,l;const u=()=>{typeof i<"u"&&i.unsub(),n(0,s=!1),n(2,a=!1)},f=()=>{u(),i=void 0,typeof l<"u"&&clearTimeout(l)},c=()=>{l=setTimeout(u,3e4)},d=()=>{f(),i=r.sub([{since:Math.floor(Date.now()/1e3)}]),n(0,s=!0),i.on("event",y=>{n(1,o=[...o,y]),o.length>=30&&u()}),i.on("eose",()=>{n(2,a=!0)}),c()};let p="",m;const b=()=>{if(typeof r>"u")return;let y=p;if(p.startsWith("npub")){const{data:I}=dn.decode(p);y=I}const B=r.sub([{authors:[y],kinds:[0]}]);B.on("event",I=>{n(4,m=I),B.unsub()}),B.on("eose",()=>{n(2,a=!0),B.unsub()})};let g="";const L=()=>{g.length===0||typeof r>"u"||(f(),i=r.sub([{kinds:[parseInt(g)]}]),i.on("event",y=>{n(1,o=[...o,y]),o.length>=30&&u()}),i.on("eose",()=>{n(2,a=!0)}),c())},C=()=>d(),H=()=>u();function v(y){p=y,n(3,p)}const _=()=>{b()};function w(y){g=y,n(5,g)}return[s,o,a,p,m,g,u,d,b,L,C,H,v,_,w,()=>{L()}]}class Bf extends Ze{constructor(e){super(),Je(this,e,Uf,Tf,Qe,{})}}function Of(t){let e,n,r,i,s,o,a,l,u,f,c,d,p;return n=new sf({}),i=new hf({}),o=new uf({}),l=new If({}),f=new Bf({}),d=new _f({}),{c(){e=R("div"),se(n.$$.fragment),r=V(),se(i.$$.fragment),s=V(),se(o.$$.fragment),a=V(),se(l.$$.fragment),u=V(),se(f.$$.fragment),c=V(),se(d.$$.fragment),this.h()},l(m){e=F(m,"DIV",{class:!0});var b=D(e);le(n.$$.fragment,b),r=j(b),le(i.$$.fragment,b),s=j(b),le(o.$$.fragment,b),a=j(b),le(l.$$.fragment,b),u=j(b),le(f.$$.fragment,b),c=j(b),le(d.$$.fragment,b),b.forEach(E),this.h()},h(){wt(e,"class","container svelte-faxcmn")},m(m,b){M(m,e,b),oe(n,e,null),A(e,r),oe(i,e,null),A(e,s),oe(o,e,null),A(e,a),oe(l,e,null),A(e,u),oe(f,e,null),A(e,c),oe(d,e,null),p=!0},p:rt,i(m){p||(U(n.$$.fragment,m),U(i.$$.fragment,m),U(o.$$.fragment,m),U(l.$$.fragment,m),U(f.$$.fragment,m),U(d.$$.fragment,m),p=!0)},o(m){P(n.$$.fragment,m),P(i.$$.fragment,m),P(o.$$.fragment,m),P(l.$$.fragment,m),P(f.$$.fragment,m),P(d.$$.fragment,m),p=!1},d(m){m&&E(e),ae(n),ae(i),ae(o),ae(l),ae(f),ae(d)}}}class jf extends Ze{constructor(e){super(),Je(this,e,null,Of,Qe,{})}}export{jf as default};
