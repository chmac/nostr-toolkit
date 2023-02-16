import{S as Xe,i as Ze,s as Je,D as Re,I as Pe,J as Fe,K as De,f as U,t as P,a2 as hr,U as Dr,a0 as Os,a3 as fr,C as Gr,$ as Sr,w as mi,x as ie,e as ot,y as ae,z as se,b as D,L as ze,_ as mt,g as qe,A as oe,d as Ge,h as E,O as We,P as on,E as ge,R as Pt,v as ye,k as O,a as M,l as R,m as F,c as N,n as vt,o as bn,F as Ve,H as Me,M as _t,N as Ht,Y as nt,a1 as A,G as Ie,V as zn,a4 as gi,a5 as pa,B as ma,q as V,r as z,u as He,a6 as et,a7 as tt,W as mn,a8 as Mr}from"../../chunks/index-3cc77633.js";import{_ as xn,a as ft,e as $t,M as Tn,c as Te,f as an,S as bi,d as Lt,u as Dt,b as Wr}from"../../chunks/classAdderBuilder-613bd1e9.js";/**
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
 */function ga(t){return t===void 0&&(t=window),ba(t)?{passive:!0}:!1}function ba(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},r=function(){};t.document.addEventListener("test",r,n),t.document.removeEventListener("test",r,n)}catch{e=!1}return e}const Rs=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:ga},Symbol.toStringTag,{value:"Module"}));/**
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
 */function ya(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Ps(n,e))return n;n=n.parentElement}return null}function Ps(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function va(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var r=n.scrollWidth;return document.documentElement.removeChild(n),r}const _a=Object.freeze(Object.defineProperty({__proto__:null,closest:ya,estimateScrollWidth:va,matches:Ps},Symbol.toStringTag,{value:"Module"}));/**
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
 */var wa={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ea={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},yi={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},Yn;function Aa(t,e){e===void 0&&(e=!1);var n=t.CSS,r=Yn;if(typeof Yn=="boolean"&&!e)return Yn;var i=n&&typeof n.supports=="function";if(!i)return!1;var s=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=s||o,e||(Yn=r),r}function Ia(t,e,n){if(!t)return{x:0,y:0};var r=e.x,i=e.y,s=r+n.left,o=i+n.top,a,l;if(t.type==="touchstart"){var u=t;a=u.changedTouches[0].pageX-s,l=u.changedTouches[0].pageY-o}else{var f=t;a=f.pageX-s,l=f.pageY-o}return{x:a,y:l}}/**
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
 */var vi=["touchstart","pointerdown","mousedown","keydown"],_i=["touchend","pointerup","mouseup","contextmenu"],$n=[],ka=function(t){xn(e,t);function e(n){var r=t.call(this,ft(ft({},e.defaultAdapter),n))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(i){r.activateImpl(i)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return wa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ea},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return yi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var i=e.cssClasses,s=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(s),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var r=e.cssClasses,i=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(i),n.adapter.removeClass(s),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var r=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var r,i;if(n){try{for(var s=$t(vi),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){r={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var r,i;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=$t(_i),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){r={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},e.prototype.deregisterRootHandlers=function(){var n,r;try{for(var i=$t(vi),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=$t(_i),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,r=e.strings,i=Object.keys(r);i.forEach(function(s){s.indexOf("VAR_")===0&&n.adapter.updateCssVariable(r[s],null)})},e.prototype.activateImpl=function(n){var r=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var s=this.previousActivationEvent,o=s&&n!==void 0&&s.type!==n.type;if(!o){i.isActivated=!0,i.isProgrammatic=n===void 0,i.activationEvent=n,i.wasActivatedByPointer=i.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&$n.length>0&&$n.some(function(l){return r.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&($n.push(n.target),this.registerDeactivationHandlers(n)),i.wasElementMadeActive=this.checkElementMadeActive(n),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){$n=[],!i.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(i.wasElementMadeActive=r.checkElementMadeActive(n),i.wasElementMadeActive&&r.animateActivation()),i.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,r=e.strings,i=r.VAR_FG_TRANSLATE_START,s=r.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var f="",c="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),p=d.startPoint,m=d.endPoint;f=p.x+"px, "+p.y+"px",c=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(i,f),this.adapter.updateCssVariable(s,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,r=n.activationEvent,i=n.wasActivatedByPointer,s;i?s=Ia(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,r=e.cssClasses.FG_DEACTIVATION,i=this.activationState,s=i.hasDeactivationUXRun,o=i.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(r)},yi.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,r=this.activationState;if(r.isActivated){var i=ft({},r);r.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(i),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var r=n.wasActivatedByPointer,i=n.wasElementMadeActive;(r||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:i();var s=Math.floor(r*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!==0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,r=n.VAR_FG_SIZE,i=n.VAR_LEFT,s=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Tn);function pr(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i],o=s.indexOf("$");o!==-1&&e.indexOf(s.substring(0,o+1))!==-1||e.indexOf(s)===-1&&(r[s]=t[s])}return r}function at(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i];s.substring(0,e.length)===e&&(r[s.substring(e.length)]=t[s])}return r}function Sa(t){let e;const n=t[4].default,r=Re(n,t,t[3],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,[s]){r&&r.p&&(!e||s&8)&&Pe(r,n,i,i[3],e?De(n,i[3],s,null):Fe(i[3]),null)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function La(t,e,n){let r,{$$slots:i={},$$scope:s}=e,{key:o}=e,{value:a}=e;const l=Gr(a);return hr(t,l,u=>n(5,r=u)),Dr(o,l),Os(()=>{l.set(void 0)}),t.$$set=u=>{"key"in u&&n(1,o=u.key),"value"in u&&n(2,a=u.value),"$$scope"in u&&n(3,s=u.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&fr(l,r=a,r)},[l,o,a,s,i]}class mr extends Xe{constructor(e){super(),Ze(this,e,La,Sa,Je,{key:1,value:2})}}const{applyPassive:er}=Rs,{matches:Ca}=_a;function gr(t,{ripple:e=!0,surface:n=!1,unbounded:r=!1,disabled:i=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:f=m=>t.classList.add(m),removeClass:c=m=>t.classList.remove(m),addStyle:d=(m,b)=>t.style.setProperty(m,b),initPromise:p=Promise.resolve()}={}){let m,b=Sr("SMUI:addLayoutListener"),g,k=o,S=l,L=u;function v(){n?(f("mdc-ripple-surface"),s==="primary"?(f("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):s==="secondary"?(c("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),m&&k!==o&&(k=o,o?m.activate():o===!1&&m.deactivate()),e&&!m?(m=new ka({addClass:f,browserSupportsCssVars:()=>Aa(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:w=>t.contains(w),deregisterDocumentInteractionHandler:(w,h)=>document.documentElement.removeEventListener(w,h,er()),deregisterInteractionHandler:(w,h)=>(l||t).removeEventListener(w,h,er()),deregisterResizeHandler:w=>window.removeEventListener("resize",w),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??Ca(u||t,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!r,registerDocumentInteractionHandler:(w,h)=>document.documentElement.addEventListener(w,h,er()),registerInteractionHandler:(w,h)=>(l||t).addEventListener(w,h,er()),registerResizeHandler:w=>window.addEventListener("resize",w),removeClass:c,updateCssVariable:d}),p.then(()=>{m&&(m.init(),m.setUnbounded(r))})):m&&!e&&p.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(S!==l||L!==u)&&(S=l,L=u,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(r))})),!e&&r&&f("mdc-ripple-upgraded--unbounded")}v(),b&&(g=b(_));function _(){m&&m.layout()}return{update(w){({ripple:e,surface:n,unbounded:r,disabled:i,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:f,removeClass:c,addStyle:d,initPromise:p}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:h=>t.classList.add(h),removeClass:h=>t.classList.remove(h),addStyle:(h,y)=>t.style.setProperty(h,y),initPromise:Promise.resolve()},w)),v()},destroy(){m&&(m.destroy(),m=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),g&&g()}}}const Ha={},xa=Object.freeze(Object.defineProperty({__proto__:null,default:Ha},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const he=BigInt(0),Ce=BigInt(1),en=BigInt(2),jn=BigInt(3),wi=BigInt(8),Ee=Object.freeze({a:he,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:Ce,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Ei=(t,e)=>(t+e/en)/e,tr={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(t){const{n:e}=Ee,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Ce*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=n,o=BigInt("0x100000000000000000000000000000000"),a=Ei(s*t,e),l=Ei(-r*t,e);let u=q(t-a*n-l*i,e),f=q(-a*r-l*s,e);const c=u>o,d=f>o;if(c&&(u=e-u),d&&(f=e-f),u>o||f>o)throw new Error("splitScalarEndo: Endomorphism failed, k="+t);return{k1neg:c,k1:u,k2neg:d,k2:f}}},yt=32,An=32,Ta=32,br=yt+1,yr=2*yt+1;function Ai(t){const{a:e,b:n}=Ee,r=q(t*t),i=q(r*t);return q(i+e*t+n)}const nr=Ee.a===he;class Xr extends Error{constructor(e){super(e)}}function Ii(t){if(!(t instanceof be))throw new TypeError("JacobianPoint expected")}class be{constructor(e,n,r){this.x=e,this.y=n,this.z=r}static fromAffine(e){if(!(e instanceof pe))throw new TypeError("JacobianPoint#fromAffine: expected Point");return e.equals(pe.ZERO)?be.ZERO:new be(e.x,e.y,Ce)}static toAffineBatch(e){const n=Pa(e.map(r=>r.z));return e.map((r,i)=>r.toAffine(n[i]))}static normalizeZ(e){return be.toAffineBatch(e).map(be.fromAffine)}equals(e){Ii(e);const{x:n,y:r,z:i}=this,{x:s,y:o,z:a}=e,l=q(i*i),u=q(a*a),f=q(n*u),c=q(s*l),d=q(q(r*a)*u),p=q(q(o*i)*l);return f===c&&d===p}negate(){return new be(this.x,q(-this.y),this.z)}double(){const{x:e,y:n,z:r}=this,i=q(e*e),s=q(n*n),o=q(s*s),a=e+s,l=q(en*(q(a*a)-i-o)),u=q(jn*i),f=q(u*u),c=q(f-en*l),d=q(u*(l-c)-wi*o),p=q(en*n*r);return new be(c,d,p)}add(e){Ii(e);const{x:n,y:r,z:i}=this,{x:s,y:o,z:a}=e;if(s===he||o===he)return this;if(n===he||r===he)return e;const l=q(i*i),u=q(a*a),f=q(n*u),c=q(s*l),d=q(q(r*a)*u),p=q(q(o*i)*l),m=q(c-f),b=q(p-d);if(m===he)return b===he?this.double():be.ZERO;const g=q(m*m),k=q(m*g),S=q(f*g),L=q(b*b-k-en*S),v=q(b*(S-L)-d*k),_=q(i*a*m);return new be(L,v,_)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){const n=be.ZERO;if(typeof e=="bigint"&&e===he)return n;let r=Li(e);if(r===Ce)return this;if(!nr){let c=n,d=this;for(;r>he;)r&Ce&&(c=c.add(d)),d=d.double(),r>>=Ce;return c}let{k1neg:i,k1:s,k2neg:o,k2:a}=tr.splitScalar(r),l=n,u=n,f=this;for(;s>he||a>he;)s&Ce&&(l=l.add(f)),a&Ce&&(u=u.add(f)),f=f.double(),s>>=Ce,a>>=Ce;return i&&(l=l.negate()),o&&(u=u.negate()),u=new be(q(u.x*tr.beta),u.y,u.z),l.add(u)}precomputeWindow(e){const n=nr?128/e+1:256/e+1,r=[];let i=this,s=i;for(let o=0;o<n;o++){s=i,r.push(s);for(let a=1;a<2**(e-1);a++)s=s.add(i),r.push(s);i=s.double()}return r}wNAF(e,n){!n&&this.equals(be.BASE)&&(n=pe.BASE);const r=n&&n._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let i=n&&Nr.get(n);i||(i=this.precomputeWindow(r),n&&r!==1&&(i=be.normalizeZ(i),Nr.set(n,i)));let s=be.ZERO,o=be.BASE;const a=1+(nr?128/r:256/r),l=2**(r-1),u=BigInt(2**r-1),f=2**r,c=BigInt(r);for(let d=0;d<a;d++){const p=d*l;let m=Number(e&u);e>>=c,m>l&&(m-=f,e+=Ce);const b=p,g=p+Math.abs(m)-1,k=d%2!==0,S=m<0;m===0?o=o.add(rr(k,i[b])):s=s.add(rr(S,i[g]))}return{p:s,f:o}}multiply(e,n){let r=Li(e),i,s;if(nr){const{k1neg:o,k1:a,k2neg:l,k2:u}=tr.splitScalar(r);let{p:f,f:c}=this.wNAF(a,n),{p:d,f:p}=this.wNAF(u,n);f=rr(o,f),d=rr(l,d),d=new be(q(d.x*tr.beta),d.y,d.z),i=f.add(d),s=c.add(p)}else{const{p:o,f:a}=this.wNAF(r,n);i=o,s=a}return be.normalizeZ([i,s])[0]}toAffine(e){const{x:n,y:r,z:i}=this,s=this.equals(be.ZERO);e==null&&(e=s?wi:Un(i));const o=e,a=q(o*o),l=q(a*o),u=q(n*a),f=q(r*l),c=q(i*o);if(s)return pe.ZERO;if(c!==Ce)throw new Error("invZ was invalid");return new pe(u,f)}}be.BASE=new be(Ee.Gx,Ee.Gy,Ce);be.ZERO=new be(he,Ce,he);function rr(t,e){const n=e.negate();return t?n:e}const Nr=new WeakMap;class pe{constructor(e,n){this.x=e,this.y=n}_setWindowSize(e){this._WINDOW_SIZE=e,Nr.delete(this)}hasEvenY(){return this.y%en===he}static fromCompressedHex(e){const n=e.length===32,r=dt(n?e:e.subarray(1));if(!dr(r))throw new Error("Point is not on curve");const i=Ai(r);let s=Ra(i);const o=(s&Ce)===Ce;n?o&&(s=q(-s)):(e[0]&1)===1!==o&&(s=q(-s));const a=new pe(r,s);return a.assertValidity(),a}static fromUncompressedHex(e){const n=dt(e.subarray(1,yt+1)),r=dt(e.subarray(yt+1,yt*2+1)),i=new pe(n,r);return i.assertValidity(),i}static fromHex(e){const n=Ct(e),r=n.length,i=n[0];if(r===yt)return this.fromCompressedHex(n);if(r===br&&(i===2||i===3))return this.fromCompressedHex(n);if(r===yr&&i===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${br} compressed bytes or ${yr} uncompressed bytes, not ${r}`)}static fromPrivateKey(e){return pe.BASE.multiply(gn(e))}static fromSignature(e,n,r){const{r:i,s}=Fs(n);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const o=Zr(Ct(e)),{n:a}=Ee,l=r===2||r===3?i+a:i,u=Un(l,a),f=q(-o*u,a),c=q(s*u,a),d=r&1?"03":"02",p=pe.fromHex(d+nn(l)),m=pe.BASE.multiplyAndAddUnsafe(p,f,c);if(!m)throw new Error("Cannot recover signature: point at infinify");return m.assertValidity(),m}toRawBytes(e=!1){return rn(this.toHex(e))}toHex(e=!1){const n=nn(this.x);return e?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${nn(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const e="Point is not on elliptic curve",{x:n,y:r}=this;if(!dr(n)||!dr(r))throw new Error(e);const i=q(r*r),s=Ai(n);if(q(i-s)!==he)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new pe(this.x,q(-this.y))}double(){return be.fromAffine(this).double().toAffine()}add(e){return be.fromAffine(this).add(be.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return be.fromAffine(this).multiply(e,this).toAffine()}multiplyAndAddUnsafe(e,n,r){const i=be.fromAffine(this),s=n===he||n===Ce||this!==pe.BASE?i.multiplyUnsafe(n):i.multiply(n),o=be.fromAffine(e).multiplyUnsafe(r),a=s.add(o);return a.equals(be.ZERO)?void 0:a.toAffine()}}pe.BASE=new pe(Ee.Gx,Ee.Gy);pe.ZERO=new pe(he,he);function ki(t){return Number.parseInt(t[0],16)>=8?"00"+t:t}function Si(t){if(t.length<2||t[0]!==2)throw new Error(`Invalid signature integer tag: ${In(t)}`);const e=t[1],n=t.subarray(2,e+2);if(!e||n.length!==e)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:dt(n),left:t.subarray(e+2)}}function Ua(t){if(t.length<2||t[0]!=48)throw new Error(`Invalid signature tag: ${In(t)}`);if(t[1]!==t.length-2)throw new Error("Invalid signature: incorrect length");const{data:e,left:n}=Si(t.subarray(2)),{data:r,left:i}=Si(n);if(i.length)throw new Error(`Invalid signature: left bytes after parsing: ${In(i)}`);return{r:e,s:r}}class Rt{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromCompact(e){const n=e instanceof Uint8Array,r="Signature.fromCompact";if(typeof e!="string"&&!n)throw new TypeError(`${r}: Expected string or Uint8Array`);const i=n?In(e):e;if(i.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new Rt(vr(i.slice(0,64)),vr(i.slice(64,128)))}static fromDER(e){const n=e instanceof Uint8Array;if(typeof e!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r,s:i}=Ua(n?e:rn(e));return new Rt(r,i)}static fromHex(e){return this.fromDER(e)}assertValidity(){const{r:e,s:n}=this;if(!Sn(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Sn(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const e=Ee.n>>Ce;return this.s>e}normalizeS(){return this.hasHighS()?new Rt(this.r,q(-this.s,Ee.n)):this}toDERRawBytes(){return rn(this.toDERHex())}toDERHex(){const e=ki(Pn(this.s)),n=ki(Pn(this.r)),r=e.length/2,i=n.length/2,s=Pn(r),o=Pn(i);return`30${Pn(i+r+4)}02${o}${n}02${s}${e}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return rn(this.toCompactHex())}toCompactHex(){return nn(this.r)+nn(this.s)}}function Qt(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];const e=t.reduce((r,i)=>r+i.length,0),n=new Uint8Array(e);for(let r=0,i=0;r<t.length;r++){const s=t[r];n.set(s,i),i+=s.length}return n}const Ba=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function In(t){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");let e="";for(let n=0;n<t.length;n++)e+=Ba[t[n]];return e}const Oa=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function nn(t){if(typeof t!="bigint")throw new Error("Expected bigint");if(!(he<=t&&t<Oa))throw new Error("Expected number 0 <= n < 2^256");return t.toString(16).padStart(64,"0")}function kn(t){const e=rn(nn(t));if(e.length!==32)throw new Error("Error: expected 32 bytes");return e}function Pn(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function vr(t){if(typeof t!="string")throw new TypeError("hexToNumber: expected string, got "+typeof t);return BigInt(`0x${t}`)}function rn(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+t.length);const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){const r=n*2,i=t.slice(r,r+2),s=Number.parseInt(i,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}function dt(t){return vr(In(t))}function Ct(t){return t instanceof Uint8Array?Uint8Array.from(t):rn(t)}function Li(t){if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)return BigInt(t);if(typeof t=="bigint"&&Sn(t))return t;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function q(t,e=Ee.P){const n=t%e;return n>=he?n:e+n}function pt(t,e){const{P:n}=Ee;let r=t;for(;e-- >he;)r*=r,r%=n;return r}function Ra(t){const{P:e}=Ee,n=BigInt(6),r=BigInt(11),i=BigInt(22),s=BigInt(23),o=BigInt(44),a=BigInt(88),l=t*t*t%e,u=l*l*t%e,f=pt(u,jn)*u%e,c=pt(f,jn)*u%e,d=pt(c,en)*l%e,p=pt(d,r)*d%e,m=pt(p,i)*p%e,b=pt(m,o)*m%e,g=pt(b,a)*b%e,k=pt(g,o)*m%e,S=pt(k,jn)*u%e,L=pt(S,s)*p%e,v=pt(L,n)*l%e,_=pt(v,en);if(_*_%e!==t)throw new Error("Cannot find square root");return _}function Un(t,e=Ee.P){if(t===he||e<=he)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=q(t,e),r=e,i=he,s=Ce;for(;n!==he;){const a=r/n,l=r%n,u=i-s*a;r=n,n=l,i=s,s=u}if(r!==Ce)throw new Error("invert: does not exist");return q(i,e)}function Pa(t,e=Ee.P){const n=new Array(t.length),r=t.reduce((s,o,a)=>o===he?s:(n[a]=s,q(s*o,e)),Ce),i=Un(r,e);return t.reduceRight((s,o,a)=>o===he?s:(n[a]=q(s*n[a],e),q(s*o,e)),i),n}function Fa(t){const e=t.length*8-An*8,n=dt(t);return e>0?n>>BigInt(e):n}function Zr(t,e=!1){const n=Fa(t);if(e)return n;const{n:r}=Ee;return n>=r?n-r:n}let wn,Vn;class Da{constructor(e,n){if(this.hashLen=e,this.qByteLen=n,typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(e).fill(1),this.k=new Uint8Array(e).fill(0),this.counter=0}hmac(...e){return de.hmacSha256(this.k,...e)}hmacSync(...e){return Vn(this.k,...e)}checkSync(){if(typeof Vn!="function")throw new Xr("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(e=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),e),this.v=await this.hmac(this.v),e.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),e),this.v=await this.hmac(this.v))}reseedSync(e=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),e),this.v=this.hmacSync(this.v),e.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),e),this.v=this.hmacSync(this.v))}async generate(){this.incr();let e=0;const n=[];for(;e<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();n.push(r),e+=this.v.length}return Qt(...n)}generateSync(){this.checkSync(),this.incr();let e=0;const n=[];for(;e<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();n.push(r),e+=this.v.length}return Qt(...n)}}function Sn(t){return he<t&&t<Ee.n}function dr(t){return he<t&&t<Ee.P}function Ma(t,e,n,r=!0){const{n:i}=Ee,s=Zr(t,!0);if(!Sn(s))return;const o=Un(s,i),a=pe.BASE.multiply(s),l=q(a.x,i);if(l===he)return;const u=q(o*q(e+n*l,i),i);if(u===he)return;let f=new Rt(l,u),c=(a.x===f.r?0:2)|Number(a.y&Ce);return r&&f.hasHighS()&&(f=f.normalizeS(),c^=1),{sig:f,recovery:c}}function gn(t){let e;if(typeof t=="bigint")e=t;else if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)e=BigInt(t);else if(typeof t=="string"){if(t.length!==2*An)throw new Error("Expected 32 bytes of private key");e=vr(t)}else if(t instanceof Uint8Array){if(t.length!==An)throw new Error("Expected 32 bytes of private key");e=dt(t)}else throw new TypeError("Expected valid private key");if(!Sn(e))throw new Error("Expected private key: 0 < key < n");return e}function Jr(t){return t instanceof pe?(t.assertValidity(),t):pe.fromHex(t)}function Fs(t){if(t instanceof Rt)return t.assertValidity(),t;try{return Rt.fromDER(t)}catch{return Rt.fromCompact(t)}}function Na(t,e=!1){return pe.fromPrivateKey(t).toRawBytes(e)}function Ci(t){const e=t instanceof Uint8Array,n=typeof t=="string",r=(e||n)&&t.length;return e?r===br||r===yr:n?r===br*2||r===yr*2:t instanceof pe}function Ds(t,e,n=!1){if(Ci(t))throw new TypeError("getSharedSecret: first arg must be private key");if(!Ci(e))throw new TypeError("getSharedSecret: second arg must be public key");const r=Jr(e);return r.assertValidity(),r.multiply(gn(t)).toRawBytes(n)}function Ms(t){const e=t.length>yt?t.slice(0,yt):t;return dt(e)}function ja(t){const e=Ms(t),n=q(e,Ee.n);return Ns(n<he?e:n)}function Ns(t){return kn(t)}function Va(t,e,n){if(t==null)throw new Error(`sign: expected valid message hash, not "${t}"`);const r=Ct(t),i=gn(e),s=[Ns(i),ja(r)];if(n!=null){n===!0&&(n=de.randomBytes(yt));const l=Ct(n);if(l.length!==yt)throw new Error(`sign: Expected ${yt} bytes of extra data`);s.push(l)}const o=Qt(...s),a=Ms(r);return{seed:o,m:a,d:i}}function za(t,e){const{sig:n,recovery:r}=t,{der:i,recovered:s}=Object.assign({canonical:!0,der:!0},e),o=i?n.toDERRawBytes():n.toCompactRawBytes();return s?[o,r]:o}function Ka(t,e,n={}){const{seed:r,m:i,d:s}=Va(t,e,n.extraEntropy),o=new Da(Ta,An);o.reseedSync(r);let a;for(;!(a=Ma(o.generateSync(),i,s,n.canonical));)o.reseedSync();return za(a,n)}const qa={strict:!0};function Ga(t,e,n,r=qa){let i;try{i=Fs(t),e=Ct(e)}catch{return!1}const{r:s,s:o}=i;if(r.strict&&i.hasHighS())return!1;const a=Zr(e);let l;try{l=Jr(n)}catch{return!1}const{n:u}=Ee,f=Un(o,u),c=q(a*f,u),d=q(s*f,u),p=pe.BASE.multiplyAndAddUnsafe(l,c,d);return p?q(p.x,u)===s:!1}function _r(t){return q(dt(t),Ee.n)}class Ln{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromHex(e){const n=Ct(e);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const r=dt(n.subarray(0,32)),i=dt(n.subarray(32,64));return new Ln(r,i)}assertValidity(){const{r:e,s:n}=this;if(!dr(e)||!Sn(n))throw new Error("Invalid signature")}toHex(){return nn(this.r)+nn(this.s)}toRawBytes(){return rn(this.toHex())}}function Wa(t){return pe.fromPrivateKey(t).toRawX()}class js{constructor(e,n,r=de.randomBytes()){if(e==null)throw new TypeError(`sign: Expected valid message, not "${e}"`);this.m=Ct(e);const{x:i,scalar:s}=this.getScalar(gn(n));if(this.px=i,this.d=s,this.rand=Ct(r),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(e){const n=pe.fromPrivateKey(e),r=n.hasEvenY()?e:Ee.n-e;return{point:n,scalar:r,x:n.toRawX()}}initNonce(e,n){return kn(e^dt(n))}finalizeNonce(e){const n=q(dt(e),Ee.n);if(n===he)throw new Error("sign: Creation of signature failed. k is zero");const{point:r,x:i,scalar:s}=this.getScalar(n);return{R:r,rx:i,k:s}}finalizeSig(e,n,r,i){return new Ln(e.x,q(n+r*i,Ee.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:e,d:n,px:r,rand:i}=this,s=de.taggedHash,o=this.initNonce(n,await s(Jt.aux,i)),{R:a,rx:l,k:u}=this.finalizeNonce(await s(Jt.nonce,o,r,e)),f=_r(await s(Jt.challenge,l,r,e)),c=this.finalizeSig(a,u,f,n);return await Ks(c,e,r)||this.error(),c}calcSync(){const{m:e,d:n,px:r,rand:i}=this,s=de.taggedHashSync,o=this.initNonce(n,s(Jt.aux,i)),{R:a,rx:l,k:u}=this.finalizeNonce(s(Jt.nonce,o,r,e)),f=_r(s(Jt.challenge,l,r,e)),c=this.finalizeSig(a,u,f,n);return qs(c,e,r)||this.error(),c}}async function Xa(t,e,n){return new js(t,e,n).calc()}function Za(t,e,n){return new js(t,e,n).calcSync()}function Vs(t,e,n){const r=t instanceof Ln,i=r?t:Ln.fromHex(t);return r&&i.assertValidity(),{...i,m:Ct(e),P:Jr(n)}}function zs(t,e,n,r){const i=pe.BASE.multiplyAndAddUnsafe(e,gn(n),q(-r,Ee.n));return!(!i||!i.hasEvenY()||i.x!==t)}async function Ks(t,e,n){try{const{r,s:i,m:s,P:o}=Vs(t,e,n),a=_r(await de.taggedHash(Jt.challenge,kn(r),o.toRawX(),s));return zs(r,o,i,a)}catch{return!1}}function qs(t,e,n){try{const{r,s:i,m:s,P:o}=Vs(t,e,n),a=_r(de.taggedHashSync(Jt.challenge,kn(r),o.toRawX(),s));return zs(r,o,i,a)}catch(r){if(r instanceof Xr)throw r;return!1}}const Gn={Signature:Ln,getPublicKey:Wa,sign:Xa,verify:Ks,signSync:Za,verifySync:qs};pe.BASE._setWindowSize(8);const ut={node:xa,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Jt={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},ir={},de={bytesToHex:In,hexToBytes:rn,concatBytes:Qt,mod:q,invert:Un,isValidPrivateKey(t){try{return gn(t),!0}catch{return!1}},_bigintTo32Bytes:kn,_normalizePrivateKey:gn,hashToPrivateKey:t=>{t=Ct(t);const e=An+8;if(t.length<e||t.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=q(dt(t),Ee.n-Ce)+Ce;return kn(n)},randomBytes:(t=32)=>{if(ut.web)return ut.web.getRandomValues(new Uint8Array(t));if(ut.node){const{randomBytes:e}=ut.node;return Uint8Array.from(e(t))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>de.hashToPrivateKey(de.randomBytes(An+8)),precompute(t=8,e=pe.BASE){const n=e===pe.BASE?e:new pe(e.x,e.y);return n._setWindowSize(t),n.multiply(jn),n},sha256:async(...t)=>{if(ut.web){const e=await ut.web.subtle.digest("SHA-256",Qt(...t));return new Uint8Array(e)}else if(ut.node){const{createHash:e}=ut.node,n=e("sha256");return t.forEach(r=>n.update(r)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(t,...e)=>{if(ut.web){const n=await ut.web.subtle.importKey("raw",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=Qt(...e),i=await ut.web.subtle.sign("HMAC",n,r);return new Uint8Array(i)}else if(ut.node){const{createHmac:n}=ut.node,r=n("sha256",t);return e.forEach(i=>r.update(i)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(t,...e)=>{let n=ir[t];if(n===void 0){const r=await de.sha256(Uint8Array.from(t,i=>i.charCodeAt(0)));n=Qt(r,r),ir[t]=n}return de.sha256(n,...e)},taggedHashSync:(t,...e)=>{if(typeof wn!="function")throw new Xr("sha256Sync is undefined, you need to set it");let n=ir[t];if(n===void 0){const r=wn(Uint8Array.from(t,i=>i.charCodeAt(0)));n=Qt(r,r),ir[t]=n}return wn(n,...e)},_JacobianPoint:be};Object.defineProperties(de,{sha256Sync:{configurable:!1,get(){return wn},set(t){wn||(wn=t)}},hmacSha256Sync:{configurable:!1,get(){return Vn},set(t){Vn||(Vn=t)}}});const Hi={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Br=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),kt=(t,e)=>t<<32-e|t>>>e,Ja=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Ja)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));(()=>{const t=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(t){const{setImmediate:e}=t("timers");return()=>new Promise(n=>e(n))}}catch{}return()=>new Promise(e=>setTimeout(e,0))})();function Qa(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function Qr(t){if(typeof t=="string"&&(t=Qa(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function xi(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Ya(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");xi(t.outputLen),xi(t.blockLen)}let jr=class{clone(){return this._cloneInto()}};function $a(t){const e=r=>t().update(Qr(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function el(t=32){if(Hi.web)return Hi.web.getRandomValues(new Uint8Array(t));throw new Error("The environment doesn't have randomBytes function")}function tl(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const i=BigInt(32),s=BigInt(4294967295),o=Number(n>>i&s),a=Number(n&s),l=r?4:0,u=r?0:4;t.setUint32(e+l,o,r),t.setUint32(e+u,a,r)}let nl=class extends jr{constructor(e,n,r,i){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Br(this.buffer)}update(e){if(this.destroyed)throw new Error("instance is destroyed");const{view:n,buffer:r,blockLen:i,finished:s}=this;if(s)throw new Error("digest() was already called");e=Qr(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){const u=Br(e);for(;i<=o-a;a+=i)this.process(u,a);continue}r.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;const{buffer:n,view:r,blockLen:i,isLE:s}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>i-o&&(this.process(r,0),o=0);for(let l=o;l<i;l++)n[l]=0;tl(r,i-8,BigInt(this.length*8),s),this.process(r,0);const a=Br(e);this.get().forEach((l,u)=>a.setUint32(4*u,l,s))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:i,finished:s,destroyed:o,pos:a}=this;return e.length=i,e.pos=a,e.finished=s,e.destroyed=o,i%n&&e.buffer.set(r),e}};const rl=(t,e,n)=>t&e^~t&n,il=(t,e,n)=>t&e^t&n^e&n,sl=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Kt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),qt=new Uint32Array(64);let ol=class extends nl{constructor(){super(64,32,8,!1),this.A=Kt[0]|0,this.B=Kt[1]|0,this.C=Kt[2]|0,this.D=Kt[3]|0,this.E=Kt[4]|0,this.F=Kt[5]|0,this.G=Kt[6]|0,this.H=Kt[7]|0}get(){const{A:e,B:n,C:r,D:i,E:s,F:o,G:a,H:l}=this;return[e,n,r,i,s,o,a,l]}set(e,n,r,i,s,o,a,l){this.A=e|0,this.B=n|0,this.C=r|0,this.D=i|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=l|0}process(e,n){for(let c=0;c<16;c++,n+=4)qt[c]=e.getUint32(n,!1);for(let c=16;c<64;c++){const d=qt[c-15],p=qt[c-2],m=kt(d,7)^kt(d,18)^d>>>3,b=kt(p,17)^kt(p,19)^p>>>10;qt[c]=b+qt[c-7]+m+qt[c-16]|0}let{A:r,B:i,C:s,D:o,E:a,F:l,G:u,H:f}=this;for(let c=0;c<64;c++){const d=kt(a,6)^kt(a,11)^kt(a,25),p=f+d+rl(a,l,u)+sl[c]+qt[c]|0,b=(kt(r,2)^kt(r,13)^kt(r,22))+il(r,i,s)|0;f=u,u=l,l=a,a=o+p|0,o=s,s=i,i=r,r=p+b|0}r=r+this.A|0,i=i+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,l=l+this.F|0,u=u+this.G|0,f=f+this.H|0,this.set(r,i,s,o,a,l,u,f)}roundClean(){qt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}};const Wn=$a(()=>new ol);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ln(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function wt(...t){const e=(i,s)=>o=>i(s(o)),n=Array.from(t).reverse().reduce((i,s)=>i?e(i,s.encode):s.encode,void 0),r=t.reduce((i,s)=>i?e(i,s.decode):s.decode,void 0);return{encode:n,decode:r}}function xt(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(ln(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const r=t.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return r})}}}function Tt(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function Xn(t,e="="){if(ln(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.decode: non-string input=${i}`);let r=n.length;if(r*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===e;r--)if(!((r-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function Gs(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Ti(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let r=0;const i=[],s=Array.from(t);for(s.forEach(o=>{if(ln(o),o<0||o>=e)throw new Error(`Wrong integer: ${o}`)});;){let o=0,a=!0;for(let l=r;l<s.length;l++){const u=s[l],f=e*o+u;if(!Number.isSafeInteger(f)||e*o/e!==o||f-u!==e*o)throw new Error("convertRadix: carry overflow");if(o=f%n,s[l]=Math.floor(f/n),!Number.isSafeInteger(s[l])||s[l]*n+o!==f)throw new Error("convertRadix: carry overflow");if(a)s[l]?a=!1:r=l;else continue}if(i.push(o),a)break}for(let o=0;o<t.length-1&&t[o]===0;o++)i.push(0);return i.reverse()}const Ws=(t,e)=>e?Ws(e,t%e):t,wr=(t,e)=>t+(e-Ws(t,e));function Vr(t,e,n,r){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(wr(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${wr(e,n)}`);let i=0,s=0;const o=2**n-1,a=[];for(const l of t){if(ln(l),l>=2**e)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(i=i<<e|l,s+e>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);for(s+=e;s>=n;s-=n)a.push((i>>s-n&o)>>>0);i&=2**s-1}if(i=i<<n-s&o,!r&&s>=e)throw new Error("Excess padding");if(!r&&i)throw new Error(`Non-zero padding: ${i}`);return r&&s>0&&a.push(i>>>0),a}function Xs(t){return ln(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Ti(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Ti(e,t,2**8))}}}function Mt(t,e=!1){if(ln(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(wr(8,t)>32||wr(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Vr(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Vr(n,t,8,e))}}}function Ui(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function Zs(t,e){if(ln(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const r=e(n).slice(0,t),i=new Uint8Array(n.length+t);return i.set(n),i.set(r,n.length),i},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const r=n.slice(0,-t),i=e(r).slice(0,t),s=n.slice(-t);for(let o=0;o<t;o++)if(i[o]!==s[o])throw new Error("Invalid checksum");return r}}}const al={alphabet:xt,chain:wt,checksum:Zs,radix:Xs,radix2:Mt,join:Tt,padding:Xn},Js=wt(Mt(4),xt("0123456789ABCDEF"),Tt("")),Qs=wt(Mt(5),xt("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Xn(5),Tt("")),ll=wt(Mt(5),xt("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Xn(5),Tt("")),ul=wt(Mt(5),xt("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Tt(""),Gs(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Cn=wt(Mt(6),xt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Xn(6),Tt("")),Ys=wt(Mt(6),xt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Xn(6),Tt("")),Yr=t=>wt(Xs(58),xt(t),Tt("")),Kn=Yr("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),cl=Yr("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),fl=Yr("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Bi=[0,2,3,5,6,7,9,10,11],$s={encode(t){let e="";for(let n=0;n<t.length;n+=8){const r=t.subarray(n,n+8);e+=Kn.encode(r).padStart(Bi[r.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const r=t.slice(n,n+11),i=Bi.indexOf(r.length),s=Kn.decode(r);for(let o=0;o<s.length-i;o++)if(s[o]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(s.slice(s.length-i)))}return Uint8Array.from(e)}},eo=t=>wt(Zs(4,e=>t(t(e))),Kn),zr=wt(xt("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Tt("")),Oi=[996825010,642813549,513874426,1027748829,705979059];function Fn(t){const e=t>>25;let n=(t&33554431)<<5;for(let r=0;r<Oi.length;r++)(e>>r&1)===1&&(n^=Oi[r]);return n}function Ri(t,e,n=1){const r=t.length;let i=1;for(let s=0;s<r;s++){const o=t.charCodeAt(s);if(o<33||o>126)throw new Error(`Invalid prefix (${t})`);i=Fn(i)^o>>5}i=Fn(i);for(let s=0;s<r;s++)i=Fn(i)^t.charCodeAt(s)&31;for(let s of e)i=Fn(i)^s;for(let s=0;s<6;s++)i=Fn(i);return i^=n,zr.encode(Vr([i%2**30],30,5,!1))}function to(t){const e=t==="bech32"?1:734539939,n=Mt(5),r=n.decode,i=n.encode,s=Ui(r);function o(f,c,d=90){if(typeof f!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof f}`);if(!Array.isArray(c)||c.length&&typeof c[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof c}`);const p=f.length+7+c.length;if(d!==!1&&p>d)throw new TypeError(`Length ${p} exceeds limit ${d}`);return f=f.toLowerCase(),`${f}1${zr.encode(c)}${Ri(f,c,e)}`}function a(f,c=90){if(typeof f!="string")throw new Error(`bech32.decode input should be string, not ${typeof f}`);if(f.length<8||c!==!1&&f.length>c)throw new TypeError(`Wrong string length: ${f.length} (${f}). Expected (8..${c})`);const d=f.toLowerCase();if(f!==d&&f!==f.toUpperCase())throw new Error("String must be lowercase or uppercase");f=d;const p=f.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');const m=f.slice(0,p),b=f.slice(p+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");const g=zr.decode(b).slice(0,-6),k=Ri(m,g,e);if(!b.endsWith(k))throw new Error(`Invalid checksum in ${f}: expected "${k}"`);return{prefix:m,words:g}}const l=Ui(a);function u(f){const{prefix:c,words:d}=a(f,!1);return{prefix:c,words:d,bytes:r(d)}}return{encode:o,decode:a,decodeToBytes:u,decodeUnsafe:l,fromWords:r,fromWordsUnsafe:s,toWords:i}}const Ft=to("bech32"),dl=to("bech32m"),no={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},ro=wt(Mt(4),xt("0123456789abcdef"),Tt(""),Gs(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),qn={utf8:no,hex:ro,base16:Js,base32:Qs,base64:Cn,base64url:Ys,base58:Kn,base58xmr:$s},io=`Invalid encoding type. Available types: ${Object.keys(qn).join(", ")}`,so=(t,e)=>{if(typeof t!="string"||!qn.hasOwnProperty(t))throw new TypeError(io);if(!(e instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return qn[t].encode(e)},hl=so,oo=(t,e)=>{if(!qn.hasOwnProperty(t))throw new TypeError(io);if(typeof e!="string")throw new TypeError("stringToBytes() expects string");return qn[t].decode(e)},pl=oo,ml=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:ln,base16:Js,base32:Qs,base32crockford:ul,base32hex:ll,base58:Kn,base58check:eo,base58flickr:cl,base58xmr:$s,base58xrp:fl,base64:Cn,base64url:Ys,bech32:Ft,bech32m:dl,bytes:pl,bytesToString:so,hex:ro,str:hl,stringToBytes:oo,utf8:no,utils:al},Symbol.toStringTag,{value:"Module"}));function Bn(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var $r={};Object.defineProperty($r,"__esModule",{value:!0});var ei=$r.wordlist=void 0;ei=$r.wordlist=`abandon
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
`);var ct={};function Er(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function ao(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function Yt(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function lo(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Er(t.outputLen),Er(t.blockLen)}function uo(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function co(t,e){Yt(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const tn={number:Er,bool:ao,bytes:Yt,hash:lo,exists:uo,output:co},gl=Object.freeze(Object.defineProperty({__proto__:null,bool:ao,bytes:Yt,default:tn,exists:uo,hash:lo,number:Er,output:co},Symbol.toStringTag,{value:"Module"})),bl=Bn(gl);var Hn={},Ke={};Object.defineProperty(Ke,"__esModule",{value:!0});Ke.output=Ke.exists=Ke.hash=Ke.bytes=Ke.bool=Ke.number=void 0;function Ar(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}Ke.number=Ar;function fo(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}Ke.bool=fo;function ti(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}Ke.bytes=ti;function ho(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ar(t.outputLen),Ar(t.blockLen)}Ke.hash=ho;function po(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}Ke.exists=po;function mo(t,e){ti(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Ke.output=mo;const yl={number:Ar,bool:fo,bytes:ti,hash:ho,exists:po,output:mo};Ke.default=yl;var go={},ni={};const Dn={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},vl=Object.freeze(Object.defineProperty({__proto__:null,crypto:Dn},Symbol.toStringTag,{value:"Module"})),_l=Bn(vl);(function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.isLE=t.rotr=t.createView=t.u32=t.u8=void 0;const e=_l,n=v=>new Uint8Array(v.buffer,v.byteOffset,v.byteLength);t.u8=n;const r=v=>new Uint32Array(v.buffer,v.byteOffset,Math.floor(v.byteLength/4));t.u32=r;const i=v=>new DataView(v.buffer,v.byteOffset,v.byteLength);t.createView=i;const s=(v,_)=>v<<32-_|v>>>_;if(t.rotr=s,t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!t.isLE)throw new Error("Non little-endian hardware is not supported");const o=Array.from({length:256},(v,_)=>_.toString(16).padStart(2,"0"));function a(v){if(!(v instanceof Uint8Array))throw new Error("Uint8Array expected");let _="";for(let w=0;w<v.length;w++)_+=o[v[w]];return _}t.bytesToHex=a;function l(v){if(typeof v!="string")throw new TypeError("hexToBytes: expected string, got "+typeof v);if(v.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const _=new Uint8Array(v.length/2);for(let w=0;w<_.length;w++){const h=w*2,y=v.slice(h,h+2),B=Number.parseInt(y,16);if(Number.isNaN(B)||B<0)throw new Error("Invalid byte sequence");_[w]=B}return _}t.hexToBytes=l;const u=async()=>{};t.nextTick=u;async function f(v,_,w){let h=Date.now();for(let y=0;y<v;y++){w(y);const B=Date.now()-h;B>=0&&B<_||(await(0,t.nextTick)(),h+=B)}}t.asyncLoop=f;function c(v){if(typeof v!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof v}`);return new TextEncoder().encode(v)}t.utf8ToBytes=c;function d(v){if(typeof v=="string"&&(v=c(v)),!(v instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof v})`);return v}t.toBytes=d;function p(...v){if(!v.every(h=>h instanceof Uint8Array))throw new Error("Uint8Array list expected");if(v.length===1)return v[0];const _=v.reduce((h,y)=>h+y.length,0),w=new Uint8Array(_);for(let h=0,y=0;h<v.length;h++){const B=v[h];w.set(B,y),y+=B.length}return w}t.concatBytes=p;class m{clone(){return this._cloneInto()}}t.Hash=m;const b=v=>Object.prototype.toString.call(v)==="[object Object]"&&v.constructor===Object;function g(v,_){if(_!==void 0&&(typeof _!="object"||!b(_)))throw new TypeError("Options should be object or undefined");return Object.assign(v,_)}t.checkOpts=g;function k(v){const _=h=>v().update(d(h)).digest(),w=v();return _.outputLen=w.outputLen,_.blockLen=w.blockLen,_.create=()=>v(),_}t.wrapConstructor=k;function S(v){const _=(h,y)=>v(y).update(d(h)).digest(),w=v({});return _.outputLen=w.outputLen,_.blockLen=w.blockLen,_.create=h=>v(h),_}t.wrapConstructorWithOpts=S;function L(v=32){if(e.crypto.web)return e.crypto.web.getRandomValues(new Uint8Array(v));if(e.crypto.node)return new Uint8Array(e.crypto.node.randomBytes(v).buffer);throw new Error("The environment doesn't have randomBytes function")}t.randomBytes=L})(ni);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.hmac=void 0;const e=Ke,n=ni;class r extends n.Hash{constructor(o,a){super(),this.finished=!1,this.destroyed=!1,e.default.hash(o);const l=(0,n.toBytes)(a);if(this.iHash=o.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const u=this.blockLen,f=new Uint8Array(u);f.set(l.length>u?o.create().update(l).digest():l);for(let c=0;c<f.length;c++)f[c]^=54;this.iHash.update(f),this.oHash=o.create();for(let c=0;c<f.length;c++)f[c]^=106;this.oHash.update(f),f.fill(0)}update(o){return e.default.exists(this),this.iHash.update(o),this}digestInto(o){e.default.exists(this),e.default.bytes(o,this.outputLen),this.finished=!0,this.iHash.digestInto(o),this.oHash.update(o),this.oHash.digestInto(o),this.destroy()}digest(){const o=new Uint8Array(this.oHash.outputLen);return this.digestInto(o),o}_cloneInto(o){o||(o=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:l,finished:u,destroyed:f,blockLen:c,outputLen:d}=this;return o=o,o.finished=u,o.destroyed=f,o.blockLen=c,o.outputLen=d,o.oHash=a._cloneInto(o.oHash),o.iHash=l._cloneInto(o.iHash),o}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const i=(s,o,a)=>new r(s,o).update(a).digest();t.hmac=i,t.hmac.create=(s,o)=>new r(s,o)})(go);Object.defineProperty(Hn,"__esModule",{value:!0});Hn.pbkdf2Async=Hn.pbkdf2=void 0;const sr=Ke,wl=go,En=ni;function bo(t,e,n,r){sr.default.hash(t);const i=(0,En.checkOpts)({dkLen:32,asyncTick:10},r),{c:s,dkLen:o,asyncTick:a}=i;if(sr.default.number(s),sr.default.number(o),sr.default.number(a),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const l=(0,En.toBytes)(e),u=(0,En.toBytes)(n),f=new Uint8Array(o),c=wl.hmac.create(t,l),d=c._cloneInto().update(u);return{c:s,dkLen:o,asyncTick:a,DK:f,PRF:c,PRFSalt:d}}function yo(t,e,n,r,i){return t.destroy(),e.destroy(),r&&r.destroy(),i.fill(0),n}function El(t,e,n,r){const{c:i,dkLen:s,DK:o,PRF:a,PRFSalt:l}=bo(t,e,n,r);let u;const f=new Uint8Array(4),c=(0,En.createView)(f),d=new Uint8Array(a.outputLen);for(let p=1,m=0;m<s;p++,m+=a.outputLen){const b=o.subarray(m,m+a.outputLen);c.setInt32(0,p,!1),(u=l._cloneInto(u)).update(f).digestInto(d),b.set(d.subarray(0,b.length));for(let g=1;g<i;g++){a._cloneInto(u).update(d).digestInto(d);for(let k=0;k<b.length;k++)b[k]^=d[k]}}return yo(a,l,o,u,d)}Hn.pbkdf2=El;async function Al(t,e,n,r){const{c:i,dkLen:s,asyncTick:o,DK:a,PRF:l,PRFSalt:u}=bo(t,e,n,r);let f;const c=new Uint8Array(4),d=(0,En.createView)(c),p=new Uint8Array(l.outputLen);for(let m=1,b=0;b<s;m++,b+=l.outputLen){const g=a.subarray(b,b+l.outputLen);d.setInt32(0,m,!1),(f=u._cloneInto(f)).update(c).digestInto(p),g.set(p.subarray(0,g.length)),await(0,En.asyncLoop)(i-1,o,k=>{l._cloneInto(f).update(p).digestInto(p);for(let S=0;S<g.length;S++)g[S]^=p[S]})}return yo(l,u,a,f,p)}Hn.pbkdf2Async=Al;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Il=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength),kl=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),pn=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),bt=(t,e)=>t<<32-e|t>>>e,vo=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!vo)throw new Error("Non little-endian hardware is not supported");const Sl=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function _o(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=Sl[t[n]];return e}function wo(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){const r=n*2,i=t.slice(r,r+2),s=Number.parseInt(i,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}const Eo=async()=>{};async function Ll(t,e,n){let r=Date.now();for(let i=0;i<t;i++){n(i);const s=Date.now()-r;s>=0&&s<e||(await Eo(),r+=s)}}function ri(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function Zn(t){if(typeof t=="string"&&(t=ri(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function Mn(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];const e=t.reduce((r,i)=>r+i.length,0),n=new Uint8Array(e);for(let r=0,i=0;r<t.length;r++){const s=t[r];n.set(s,i),i+=s.length}return n}class ii{clone(){return this._cloneInto()}}const Cl=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function Hl(t,e){if(e!==void 0&&(typeof e!="object"||!Cl(e)))throw new TypeError("Options should be object or undefined");return Object.assign(t,e)}function un(t){const e=r=>t().update(Zn(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function xl(t){const e=(r,i)=>t(i).update(Zn(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}function Tl(t=32){if(Dn.web)return Dn.web.getRandomValues(new Uint8Array(t));if(Dn.node)return new Uint8Array(Dn.node.randomBytes(t).buffer);throw new Error("The environment doesn't have randomBytes function")}const Ul=Object.freeze(Object.defineProperty({__proto__:null,Hash:ii,asyncLoop:Ll,bytesToHex:_o,checkOpts:Hl,concatBytes:Mn,createView:pn,hexToBytes:wo,isLE:vo,nextTick:Eo,randomBytes:Tl,rotr:bt,toBytes:Zn,u32:kl,u8:Il,utf8ToBytes:ri,wrapConstructor:un,wrapConstructorWithOpts:xl},Symbol.toStringTag,{value:"Module"}));function Bl(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const i=BigInt(32),s=BigInt(4294967295),o=Number(n>>i&s),a=Number(n&s),l=r?4:0,u=r?0:4;t.setUint32(e+l,o,r),t.setUint32(e+u,a,r)}class si extends ii{constructor(e,n,r,i){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=pn(this.buffer)}update(e){tn.exists(this);const{view:n,buffer:r,blockLen:i}=this;e=Zn(e);const s=e.length;for(let o=0;o<s;){const a=Math.min(i-this.pos,s-o);if(a===i){const l=pn(e);for(;i<=s-o;o+=i)this.process(l,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===i&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){tn.exists(this),tn.output(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:i,isLE:s}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>i-o&&(this.process(r,0),o=0);for(let c=o;c<i;c++)n[c]=0;Bl(r,i-8,BigInt(this.length*8),s),this.process(r,0);const a=pn(e),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=l/4,f=this.get();if(u>f.length)throw new Error("_sha2: outputLen bigger than state");for(let c=0;c<u;c++)a.setUint32(4*c,f[c],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:i,finished:s,destroyed:o,pos:a}=this;return e.length=i,e.pos=a,e.finished=s,e.destroyed=o,i%n&&e.buffer.set(r),e}}const Ol=(t,e,n)=>t&e^~t&n,Rl=(t,e,n)=>t&e^t&n^e&n,Pl=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Gt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Wt=new Uint32Array(64);class Ao extends si{constructor(){super(64,32,8,!1),this.A=Gt[0]|0,this.B=Gt[1]|0,this.C=Gt[2]|0,this.D=Gt[3]|0,this.E=Gt[4]|0,this.F=Gt[5]|0,this.G=Gt[6]|0,this.H=Gt[7]|0}get(){const{A:e,B:n,C:r,D:i,E:s,F:o,G:a,H:l}=this;return[e,n,r,i,s,o,a,l]}set(e,n,r,i,s,o,a,l){this.A=e|0,this.B=n|0,this.C=r|0,this.D=i|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=l|0}process(e,n){for(let c=0;c<16;c++,n+=4)Wt[c]=e.getUint32(n,!1);for(let c=16;c<64;c++){const d=Wt[c-15],p=Wt[c-2],m=bt(d,7)^bt(d,18)^d>>>3,b=bt(p,17)^bt(p,19)^p>>>10;Wt[c]=b+Wt[c-7]+m+Wt[c-16]|0}let{A:r,B:i,C:s,D:o,E:a,F:l,G:u,H:f}=this;for(let c=0;c<64;c++){const d=bt(a,6)^bt(a,11)^bt(a,25),p=f+d+Ol(a,l,u)+Pl[c]+Wt[c]|0,b=(bt(r,2)^bt(r,13)^bt(r,22))+Rl(r,i,s)|0;f=u,u=l,l=a,a=o+p|0,o=s,s=i,i=r,r=p+b|0}r=r+this.A|0,i=i+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,l=l+this.F|0,u=u+this.G|0,f=f+this.H|0,this.set(r,i,s,o,a,l,u,f)}roundClean(){Wt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class Fl extends Ao{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Lr=un(()=>new Ao),Dl=un(()=>new Fl),Ml=Object.freeze(Object.defineProperty({__proto__:null,sha224:Dl,sha256:Lr},Symbol.toStringTag,{value:"Module"})),Nl=Bn(Ml),or=BigInt(2**32-1),Kr=BigInt(32);function Io(t,e=!1){return e?{h:Number(t&or),l:Number(t>>Kr&or)}:{h:Number(t>>Kr&or)|0,l:Number(t&or)|0}}function jl(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:s,l:o}=Io(t[i],e);[n[i],r[i]]=[s,o]}return[n,r]}const Vl=(t,e)=>BigInt(t>>>0)<<Kr|BigInt(e>>>0),zl=(t,e,n)=>t>>>n,Kl=(t,e,n)=>t<<32-n|e>>>n,ql=(t,e,n)=>t>>>n|e<<32-n,Gl=(t,e,n)=>t<<32-n|e>>>n,Wl=(t,e,n)=>t<<64-n|e>>>n-32,Xl=(t,e,n)=>t>>>n-32|e<<64-n,Zl=(t,e)=>e,Jl=(t,e)=>t,Ql=(t,e,n)=>t<<n|e>>>32-n,Yl=(t,e,n)=>e<<n|t>>>32-n,$l=(t,e,n)=>e<<n-32|t>>>64-n,eu=(t,e,n)=>t<<n-32|e>>>64-n;function tu(t,e,n,r){const i=(e>>>0)+(r>>>0);return{h:t+n+(i/2**32|0)|0,l:i|0}}const nu=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),ru=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,iu=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),su=(t,e,n,r,i)=>e+n+r+i+(t/2**32|0)|0,ou=(t,e,n,r,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(i>>>0),au=(t,e,n,r,i,s)=>e+n+r+i+s+(t/2**32|0)|0,ce={fromBig:Io,split:jl,toBig:Vl,shrSH:zl,shrSL:Kl,rotrSH:ql,rotrSL:Gl,rotrBH:Wl,rotrBL:Xl,rotr32H:Zl,rotr32L:Jl,rotlSH:Ql,rotlSL:Yl,rotlBH:$l,rotlBL:eu,add:tu,add3L:nu,add3H:ru,add4L:iu,add4H:su,add5H:au,add5L:ou},[lu,uu]=ce.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Xt=new Uint32Array(80),Zt=new Uint32Array(80);class Jn extends si{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:r,Bl:i,Ch:s,Cl:o,Dh:a,Dl:l,Eh:u,El:f,Fh:c,Fl:d,Gh:p,Gl:m,Hh:b,Hl:g}=this;return[e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g]}set(e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=i|0,this.Ch=s|0,this.Cl=o|0,this.Dh=a|0,this.Dl=l|0,this.Eh=u|0,this.El=f|0,this.Fh=c|0,this.Fl=d|0,this.Gh=p|0,this.Gl=m|0,this.Hh=b|0,this.Hl=g|0}process(e,n){for(let L=0;L<16;L++,n+=4)Xt[L]=e.getUint32(n),Zt[L]=e.getUint32(n+=4);for(let L=16;L<80;L++){const v=Xt[L-15]|0,_=Zt[L-15]|0,w=ce.rotrSH(v,_,1)^ce.rotrSH(v,_,8)^ce.shrSH(v,_,7),h=ce.rotrSL(v,_,1)^ce.rotrSL(v,_,8)^ce.shrSL(v,_,7),y=Xt[L-2]|0,B=Zt[L-2]|0,x=ce.rotrSH(y,B,19)^ce.rotrBH(y,B,61)^ce.shrSH(y,B,6),H=ce.rotrSL(y,B,19)^ce.rotrBL(y,B,61)^ce.shrSL(y,B,6),J=ce.add4L(h,H,Zt[L-7],Zt[L-16]),T=ce.add4H(J,w,x,Xt[L-7],Xt[L-16]);Xt[L]=T|0,Zt[L]=J|0}let{Ah:r,Al:i,Bh:s,Bl:o,Ch:a,Cl:l,Dh:u,Dl:f,Eh:c,El:d,Fh:p,Fl:m,Gh:b,Gl:g,Hh:k,Hl:S}=this;for(let L=0;L<80;L++){const v=ce.rotrSH(c,d,14)^ce.rotrSH(c,d,18)^ce.rotrBH(c,d,41),_=ce.rotrSL(c,d,14)^ce.rotrSL(c,d,18)^ce.rotrBL(c,d,41),w=c&p^~c&b,h=d&m^~d&g,y=ce.add5L(S,_,h,uu[L],Zt[L]),B=ce.add5H(y,k,v,w,lu[L],Xt[L]),x=y|0,H=ce.rotrSH(r,i,28)^ce.rotrBH(r,i,34)^ce.rotrBH(r,i,39),J=ce.rotrSL(r,i,28)^ce.rotrBL(r,i,34)^ce.rotrBL(r,i,39),T=r&s^r&a^s&a,G=i&o^i&l^o&l;k=b|0,S=g|0,b=p|0,g=m|0,p=c|0,m=d|0,{h:c,l:d}=ce.add(u|0,f|0,B|0,x|0),u=a|0,f=l|0,a=s|0,l=o|0,s=r|0,o=i|0;const fe=ce.add3L(x,J,G);r=ce.add3H(fe,B,H,T),i=fe|0}({h:r,l:i}=ce.add(this.Ah|0,this.Al|0,r|0,i|0)),{h:s,l:o}=ce.add(this.Bh|0,this.Bl|0,s|0,o|0),{h:a,l}=ce.add(this.Ch|0,this.Cl|0,a|0,l|0),{h:u,l:f}=ce.add(this.Dh|0,this.Dl|0,u|0,f|0),{h:c,l:d}=ce.add(this.Eh|0,this.El|0,c|0,d|0),{h:p,l:m}=ce.add(this.Fh|0,this.Fl|0,p|0,m|0),{h:b,l:g}=ce.add(this.Gh|0,this.Gl|0,b|0,g|0),{h:k,l:S}=ce.add(this.Hh|0,this.Hl|0,k|0,S|0),this.set(r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S)}roundClean(){Xt.fill(0),Zt.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class cu extends Jn{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class fu extends Jn{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class du extends Jn{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const qr=un(()=>new Jn),hu=un(()=>new cu),pu=un(()=>new fu),mu=un(()=>new du),gu=Object.freeze(Object.defineProperty({__proto__:null,SHA512:Jn,sha384:mu,sha512:qr,sha512_224:hu,sha512_256:pu},Symbol.toStringTag,{value:"Module"})),bu=Bn(gu),yu=Bn(Ul),vu=Bn(ml);Object.defineProperty(ct,"__esModule",{value:!0});var ko=ct.mnemonicToSeedSync=ct.mnemonicToSeed=Ro=ct.validateMnemonic=ct.entropyToMnemonic=ct.mnemonicToEntropy=To=ct.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const So=bl,Lo=Hn,_u=Nl,Co=bu,wu=yu,ar=vu,Eu=t=>t[0]==="あいこくしん";function Ho(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function oi(t){const e=Ho(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function xo(t){So.default.bytes(t,16,20,24,28,32)}function Au(t,e=128){if(So.default.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return Oo((0,wu.randomBytes)(e/8),t)}var To=ct.generateMnemonic=Au;const Iu=t=>{const e=8-t.length/4;return new Uint8Array([(0,_u.sha256)(t)[0]>>e<<e])};function Uo(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),ar.utils.chain(ar.utils.checksum(1,Iu),ar.utils.radix2(11,!0),ar.utils.alphabet(t))}function Bo(t,e){const{words:n}=oi(t),r=Uo(e).decode(n);return xo(r),r}ct.mnemonicToEntropy=Bo;function Oo(t,e){return xo(t),Uo(e).encode(t).join(Eu(e)?"　":" ")}ct.entropyToMnemonic=Oo;function ku(t,e){try{Bo(t,e)}catch{return!1}return!0}var Ro=ct.validateMnemonic=ku;const Po=t=>Ho(`mnemonic${t}`);function Su(t,e=""){return(0,Lo.pbkdf2Async)(Co.sha512,oi(t).nfkd,Po(e),{c:2048,dkLen:64})}ct.mnemonicToSeed=Su;function Lu(t,e=""){return(0,Lo.pbkdf2)(Co.sha512,oi(t).nfkd,Po(e),{c:2048,dkLen:64})}ko=ct.mnemonicToSeedSync=Lu;let Fo=class extends ii{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,tn.hash(e);const r=Zn(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const i=this.blockLen,s=new Uint8Array(i);s.set(r.length>i?e.create().update(r).digest():r);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=e.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),s.fill(0)}update(e){return tn.exists(this),this.iHash.update(e),this}digestInto(e){tn.exists(this),tn.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:i,destroyed:s,blockLen:o,outputLen:a}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const Ir=(t,e,n)=>new Fo(t,e).update(n).digest();Ir.create=(t,e)=>new Fo(t,e);const Cu=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Do=Uint8Array.from({length:16},(t,e)=>e),Hu=Do.map(t=>(9*t+5)%16);let ai=[Do],li=[Hu];for(let t=0;t<4;t++)for(let e of[ai,li])e.push(e[t].map(n=>Cu[n]));const Mo=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),xu=ai.map((t,e)=>t.map(n=>Mo[e][n])),Tu=li.map((t,e)=>t.map(n=>Mo[e][n])),Uu=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Bu=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),lr=(t,e)=>t<<e|t>>>32-e;function Pi(t,e,n,r){return t===0?e^n^r:t===1?e&n|~e&r:t===2?(e|~n)^r:t===3?e&r|n&~r:e^(n|~r)}const ur=new Uint32Array(16);class Ou extends si{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:r,h3:i,h4:s}=this;return[e,n,r,i,s]}set(e,n,r,i,s){this.h0=e|0,this.h1=n|0,this.h2=r|0,this.h3=i|0,this.h4=s|0}process(e,n){for(let p=0;p<16;p++,n+=4)ur[p]=e.getUint32(n,!0);let r=this.h0|0,i=r,s=this.h1|0,o=s,a=this.h2|0,l=a,u=this.h3|0,f=u,c=this.h4|0,d=c;for(let p=0;p<5;p++){const m=4-p,b=Uu[p],g=Bu[p],k=ai[p],S=li[p],L=xu[p],v=Tu[p];for(let _=0;_<16;_++){const w=lr(r+Pi(p,s,a,u)+ur[k[_]]+b,L[_])+c|0;r=c,c=u,u=lr(a,10)|0,a=s,s=w}for(let _=0;_<16;_++){const w=lr(i+Pi(m,o,l,f)+ur[S[_]]+g,v[_])+d|0;i=d,d=f,f=lr(l,10)|0,l=o,o=w}}this.set(this.h1+a+f|0,this.h2+u+d|0,this.h3+c+i|0,this.h4+r+o|0,this.h0+s+l|0)}roundClean(){ur.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const Ru=un(()=>new Ou);de.hmacSha256Sync=(t,...e)=>Ir(Lr,t,de.concatBytes(...e));const Or=eo(Lr);function Fi(t){return BigInt(`0x${_o(t)}`)}function Pu(t){return wo(t.toString(16).padStart(64,"0"))}const Fu=ri("Bitcoin seed"),Rr={private:76066276,public:76067358},Pr=2147483648,Du=t=>Ru(Lr(t)),Mu=t=>pn(t).getUint32(0,!1),cr=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return pn(e).setUint32(0,t,!1),e};class dn{constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||Rr,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!de.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:Fi(e.privateKey),this.privKeyBytes=Pu(this.privKey),this.pubKey=Na(e.privateKey,!0)}else if(e.publicKey)this.pubKey=pe.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Du(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return Mu(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return Or.encode(this.serialize(this.versions.private,Mn(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Or.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=Rr){if(Yt(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const r=Ir(qr,Fu,e);return new dn({versions:n,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(e,n=Rr){const r=Or.decode(e),i=pn(r),s=i.getUint32(0,!1),o={versions:n,depth:r[4],parentFingerprint:i.getUint32(5,!1),index:i.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),l=a[0]===0;if(s!==n[l?"private":"public"])throw new Error("Version mismatch");return l?new dn({...o,privateKey:a.slice(1)}):new dn({...o,publicKey:a})}static fromJSON(e){return dn.fromExtendedKey(e.xpriv)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let r=this;for(const i of n){const s=/^(\d+)('?)$/.exec(i);if(!s||s.length!==3)throw new Error(`Invalid child index: ${i}`);let o=+s[1];if(!Number.isSafeInteger(o)||o>=Pr)throw new Error("Invalid index");s[2]==="'"&&(o+=Pr),r=r.deriveChild(o)}return r}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=cr(e);if(e>=Pr){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Mn(new Uint8Array([0]),a,n)}else n=Mn(this.pubKey,n);const r=Ir(qr,this.chainCode,n),i=Fi(r.slice(0,32)),s=r.slice(32);if(!de.isValidPrivateKey(i))throw new Error("Tweak bigger than curve order");const o={versions:this.versions,chainCode:s,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const a=de.mod(this.privKey+i,Ee.n);if(!de.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");o.privateKey=a}else{const a=pe.fromHex(this.pubKey).add(pe.fromPrivateKey(i));if(a.equals(pe.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");o.publicKey=a.toRawBytes(!0)}return new dn(o)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return Yt(e,32),Ka(e,this.privKey,{canonical:!0,der:!1})}verify(e,n){if(Yt(e,32),Yt(n,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=Rt.fromCompact(n)}catch{return!1}return Ga(r,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return Yt(n,33),Mn(cr(e),new Uint8Array([this.depth]),cr(this.parentFingerprint),cr(this.index),this.chainCode,n)}}class No extends jr{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Ya(e);const r=Qr(n);if(this.iHash=e.create(),!(this.iHash instanceof jr))throw new TypeError("Expected instance of class which extends utils.Hash");const i=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const s=new Uint8Array(i);s.set(r.length>this.iHash.blockLen?e.create().update(r).digest():r);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=e.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),s.fill(0)}update(e){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(e),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:i,destroyed:s,blockLen:o,outputLen:a}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const jo=(t,e,n)=>new No(t,e).update(n).digest();jo.create=(t,e)=>new No(t,e);var Nu=Object.defineProperty,yn=(t,e)=>{for(var n in e)Nu(t,n,{get:e[n],enumerable:!0})};function ju(){return de.bytesToHex(de.randomPrivateKey())}function ui(t){return de.bytesToHex(Gn.getPublicKey(t))}var Vu={};yn(Vu,{insertEventIntoAscendingList:()=>qu,insertEventIntoDescendingList:()=>Ku,normalizeURL:()=>zu,utf8Decoder:()=>kr,utf8Encoder:()=>vn});var kr=new TextDecoder("utf-8"),vn=new TextEncoder;function zu(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function Ku(t,e){var o;let n=0,r=t.length-1,i,s=n;if(r<0)s=0;else if(e.created_at<t[r].created_at)s=r+1;else if(e.created_at>=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(i=Math.floor(n+(r-n)/2),t[i].created_at>e.created_at)n=i;else if(t[i].created_at<e.created_at)r=i;else{s=i;break}}return((o=t[s])==null?void 0:o.id)!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function qu(t,e){var o;let n=0,r=t.length-1,i,s=n;if(r<0)s=0;else if(e.created_at>t[r].created_at)s=r+1;else if(e.created_at<=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(i=Math.floor(n+(r-n)/2),t[i].created_at<e.created_at)n=i;else if(t[i].created_at>e.created_at)r=i;else{s=i;break}}return((o=t[s])==null?void 0:o.id)!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function Gu(t){if(!fi(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function ci(t){let e=Wn(vn.encode(Gu(t)));return de.bytesToHex(e)}function fi(t){if(typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let r=0;r<n.length;r++)if(typeof n[r]=="object")return!1}return!0}function Wu(t){return Gn.verifySync(t.sig,ci(t),t.pubkey)}function Xu(t,e){return de.bytesToHex(Gn.signSync(ci(t),e))}function Zu(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1)return!1;for(let n in t)if(n[0]==="#"){let r=n.slice(1),i=t[`#${r}`];if(i&&!e.tags.find(([s,o])=>s===n.slice(1)&&i.indexOf(o)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>=t.until)}function Ju(t,e){for(let n=0;n<t.length;n++)if(Zu(t[n],e))return!0;return!1}var Qu={};yn(Qu,{getHex64:()=>Cr,getInt:()=>Vo,getSubscriptionId:()=>zo,matchEventId:()=>Yu,matchEventKind:()=>ec,matchEventPubkey:()=>$u});function Cr(t,e){let n=e.length+3,r=t.indexOf(`"${e}":`)+n,i=t.slice(r).indexOf('"')+r+1;return t.slice(i,i+64)}function Vo(t,e){let n=e.length,r=t.indexOf(`"${e}":`)+n+3,i=t.slice(r),s=Math.min(i.indexOf(","),i.indexOf("}"));return parseInt(i.slice(0,s),10)}function zo(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let r=e+7+1+n,i=t.slice(r+1,80).indexOf('"');if(i===-1)return null;let s=r+1+i;return t.slice(r+1,s)}function Yu(t,e){return e===Cr(t,"id")}function $u(t,e){return e===Cr(t,"pubkey")}function ec(t,e){return e===Vo(t,"kind")}function tc(t){var e,n,r={},i={connect:[],disconnect:[],error:[],notice:[]},s={},o={};async function a(){return new Promise((c,d)=>{e=new WebSocket(t),e.onopen=()=>{i.connect.forEach(g=>g()),c()},e.onerror=()=>{i.error.forEach(g=>g()),d()},e.onclose=async()=>{i.disconnect.forEach(g=>g()),n&&n()};let p=[],m;e.onmessage=g=>{p.push(g.data),m||(m=setInterval(b,0))};function b(){var S,L,v,_;if(p.length===0){clearInterval(m),m=null;return}var g=p.shift();if(!g)return;let k=zo(g);if(k){let w=r[k];if(w&&w.alreadyHaveEvent&&w.alreadyHaveEvent(Cr(g,"id"),t))return}try{let w=JSON.parse(g);switch(w[0]){case"EVENT":let h=w[1],y=w[2];fi(y)&&r[h]&&(r[h].skipVerification||Wu(y))&&Ju(r[h].filters,y)&&(r[h],(((S=s[h])==null?void 0:S.event)||[]).forEach(x=>x(y)));return;case"EOSE":{let x=w[1];(((L=s[x])==null?void 0:L.eose)||[]).forEach(H=>H());return}case"OK":{let x=w[1],H=w[2],J=w[3]||"";H?(v=o[x])==null||v.ok.forEach(T=>T()):(_=o[x])==null||_.failed.forEach(T=>T(J));return}case"NOTICE":let B=w[1];i.notice.forEach(x=>x(B));return}}catch{return}}})}async function l(){e!=null&&e.readyState&&e.readyState===1||await a()}async function u(c){let d=JSON.stringify(c);try{e.send(d)}catch(p){console.log(p)}}const f=(c,{skipVerification:d=!1,alreadyHaveEvent:p=null,id:m=Math.random().toString().slice(2)}={})=>{let b=m;return r[b]={id:b,filters:c,skipVerification:d,alreadyHaveEvent:p},u(["REQ",b,...c]),{sub:(g,k={})=>f(g||c,{skipVerification:k.skipVerification||d,alreadyHaveEvent:k.alreadyHaveEvent||p,id:b}),unsub:()=>{delete r[b],delete s[b],u(["CLOSE",b])},on:(g,k)=>{s[b]=s[b]||{event:[],eose:[]},s[b][g].push(k)},off:(g,k)=>{let S=s[b],L=S[g].indexOf(k);L>=0&&S[g].splice(L,1)}}};return{url:t,sub:f,on:(c,d)=>{i[c].push(d),c==="connect"&&(e==null?void 0:e.readyState)===1&&d()},off:(c,d)=>{let p=i[c].indexOf(d);p!==-1&&i[c].splice(p,1)},list:(c,d)=>new Promise(p=>{let m=f(c,d),b=[],g=setTimeout(()=>{m.unsub(),p(b)},1500);m.on("eose",()=>{m.unsub(),clearTimeout(g),p(b)}),m.on("event",k=>{b.push(k)})}),get:(c,d)=>new Promise(p=>{let m=f([c],d),b=setTimeout(()=>{m.unsub(),p(null)},1500);m.on("event",g=>{m.unsub(),clearTimeout(b),p(g)})}),publish(c){if(!c.id)throw new Error(`event ${c} has no id`);let d=c.id;var p=!1,m=!1;u(["EVENT",c]).then(()=>{p=!0,m&&(b(),m=!1)}).catch(()=>{});const b=()=>{let g=f([{ids:[d]}],{id:`monitor-${d.slice(0,5)}`}),k=setTimeout(()=>{var S;(((S=o[d])==null?void 0:S.failed)||[]).forEach(L=>L("event not seen after 5 seconds")),g.unsub()},5e3);g.on("event",()=>{var S;clearTimeout(k),(((S=o[d])==null?void 0:S.seen)||[]).forEach(L=>L())})};return{on:(g,k)=>{o[d]=o[d]||{ok:[],seen:[],failed:[]},o[d][g].push(k),g==="seen"&&(p?b():m=!0)},off:(g,k)=>{let S=o[d];if(!S)return;let L=S[g].indexOf(k);L>=0&&S[g].splice(L,1)}}},connect:l,close(){return e.readyState>1?Promise.resolve():(e.close(),new Promise(c=>{n=c}))},get status(){return(e==null?void 0:e.readyState)??3}}}var nc={};yn(nc,{decrypt:()=>ic,encrypt:()=>rc});async function rc(t,e,n){const r=Ds(t,"02"+e),i=Ko(r);let s=Uint8Array.from(el(16)),o=vn.encode(n),a=await crypto.subtle.importKey("raw",i,{name:"AES-CBC"},!1,["encrypt"]),l=await crypto.subtle.encrypt({name:"AES-CBC",iv:s},a,o),u=Cn.encode(new Uint8Array(l)),f=Cn.encode(new Uint8Array(s.buffer));return`${u}?iv=${f}`}async function ic(t,e,n){let[r,i]=n.split("?iv="),s=Ds(t,"02"+e),o=Ko(s),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["decrypt"]),l=Cn.decode(r),u=Cn.decode(i),f=await crypto.subtle.decrypt({name:"AES-CBC",iv:u},a,l);return kr.decode(f)}function Ko(t){return t.slice(1,33)}var qo={};yn(qo,{queryProfile:()=>ac,searchDomain:()=>oc,useFetchImplementation:()=>sc});var Hr;try{Hr=fetch}catch{}function sc(t){Hr=t}async function oc(t,e=""){try{return(await(await Hr(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function ac(t){var o,a;let[e,n]=t.split("@");if(n||(n=e,e="_"),!e.match(/^[A-Za-z0-9-_]+$/))return null;let r=await(await Hr(`https://${n}/.well-known/nostr.json?name=${e}`)).json();if(!((o=r==null?void 0:r.names)!=null&&o[e]))return null;let i=r.names[e],s=((a=r.relays)==null?void 0:a[i])||[];return{pubkey:i,relays:s}}var lc={};yn(lc,{generateSeedWords:()=>cc,privateKeyFromSeedWords:()=>uc,validateWords:()=>fc});function uc(t,e){let r=dn.fromMasterSeed(ko(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return de.bytesToHex(r)}function cc(){return To(ei)}function fc(t){return Ro(t,ei)}var hn={};yn(hn,{decode:()=>dc,neventEncode:()=>bc,noteEncode:()=>mc,nprofileEncode:()=>gc,npubEncode:()=>pc,nsecEncode:()=>hc});var xr=5e3;function dc(t){var i,s;let{prefix:e,words:n}=Ft.decode(t,xr),r=new Uint8Array(Ft.fromWords(n));if(e==="nprofile"){let o=Di(r);if(!((i=o[0])!=null&&i[0]))throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:de.bytesToHex(o[0][0]),relays:o[1].map(a=>kr.decode(a))}}}if(e==="nevent"){let o=Di(r);if(!((s=o[0])!=null&&s[0]))throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:de.bytesToHex(o[0][0]),relays:o[1].map(a=>kr.decode(a))}}}if(e==="nsec"||e==="npub"||e==="note")return{type:e,data:de.bytesToHex(r)};throw new Error(`unknown prefix ${e}`)}function Di(t){let e={},n=t;for(;n.length>0;){let r=n[0],i=n[1],s=n.slice(2,2+i);n=n.slice(2+i),!(s.length<i)&&(e[r]=e[r]||[],e[r].push(s))}return e}function hc(t){return di("nsec",t)}function pc(t){return di("npub",t)}function mc(t){return di("note",t)}function di(t,e){let n=de.hexToBytes(e),r=Ft.toWords(n);return Ft.encode(t,r,xr)}function gc(t){let e=Go({0:[de.hexToBytes(t.pubkey)],1:(t.relays||[]).map(r=>vn.encode(r))}),n=Ft.toWords(e);return Ft.encode("nprofile",n,xr)}function bc(t){let e=Go({0:[de.hexToBytes(t.id)],1:(t.relays||[]).map(r=>vn.encode(r))}),n=Ft.toWords(e);return Ft.encode("nevent",n,xr)}function Go(t){let e=[];return Object.entries(t).forEach(([n,r])=>{r.forEach(i=>{let s=new Uint8Array(i.length+2);s.set([parseInt(n)],0),s.set([i.length],1),s.set(i,2),e.push(s)})}),de.concatBytes(...e)}var yc={};yn(yc,{createDelegation:()=>vc,getDelegator:()=>_c});function vc(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let r=n.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let i=Wn(vn.encode(`nostr:delegation:${e.pubkey}:${r}`)),s=de.bytesToHex(Gn.signSync(i,t));return{from:ui(t),to:e.pubkey,cond:r,sig:s}}function _c(t){let e=t.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!e)return null;let n=e[1],r=e[2],i=e[3],s=r.split("&");for(let a=0;a<s.length;a++){let[l,u,f]=s[a].split(/\b/);if(!(l==="kind"&&u==="="&&t.kind===parseInt(f))){if(l==="created_at"&&u==="<"&&t.created_at<parseInt(f))continue;if(l==="created_at"&&u===">"&&t.created_at>parseInt(f))continue;return null}}let o=Wn(vn.encode(`nostr:delegation:${t.pubkey}:${r}`));return Gn.verifySync(i,o,n)?n:null}de.hmacSha256Sync=(t,...e)=>jo(Wn,t,de.concatBytes(...e));de.sha256Sync=(...t)=>Wn(de.concatBytes(...t));function Mi(t){let e;return{c(){e=O("div"),this.h()},l(n){e=R(n,"DIV",{class:!0}),F(e).forEach(E),this.h()},h(){vt(e,"class","mdc-button__touch")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function wc(t){let e,n,r,i;const s=t[28].default,o=Re(s,t,t[30],null);let a=t[6]&&Mi();return{c(){e=O("div"),n=M(),o&&o.c(),a&&a.c(),r=ot(),this.h()},l(l){e=R(l,"DIV",{class:!0}),F(e).forEach(E),n=N(l),o&&o.l(l),a&&a.l(l),r=ot(),this.h()},h(){vt(e,"class","mdc-button__ripple")},m(l,u){D(l,e,u),D(l,n,u),o&&o.m(l,u),a&&a.m(l,u),D(l,r,u),i=!0},p(l,u){o&&o.p&&(!i||u[0]&1073741824)&&Pe(o,s,l,l[30],i?De(s,l[30],u,null):Fe(l[30]),null),l[6]?a||(a=Mi(),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},i(l){i||(U(o,l),i=!0)},o(l){P(o,l),i=!1},d(l){l&&E(e),l&&E(n),o&&o.d(l),a&&a.d(l),l&&E(r)}}}function Ec(t){let e,n,r;const i=[{tag:t[10]},{use:[[gr,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[23].disabled,addClass:t[19],removeClass:t[20],addStyle:t[21]}],t[17],...t[0]]},{class:Te({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[18]==="card:action","mdc-card__action--button":t[18]==="card:action","mdc-dialog__button":t[18]==="dialog:action","mdc-top-app-bar__navigation-icon":t[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[18]==="top-app-bar:action","mdc-snackbar__action":t[18]==="snackbar:actions","mdc-banner__secondary-action":t[18]==="banner"&&t[8],"mdc-banner__primary-action":t[18]==="banner"&&!t[8],"mdc-tooltip__action":t[18]==="tooltip:rich-actions",...t[12]})},{style:Object.entries(t[13]).map(Ni).concat([t[2]]).join(" ")},t[16],t[15],t[14],{href:t[7]},t[23]];var s=t[9];function o(a){let l={$$slots:{default:[wc]},$$scope:{ctx:a}};for(let u=0;u<i.length;u+=1)l=ge(l,i[u]);return{props:l}}return s&&(e=mi(s,o(t)),t[29](e),e.$on("click",t[22])),{c(){e&&ie(e.$$.fragment),n=ot()},l(a){e&&ae(e.$$.fragment,a),n=ot()},m(a,l){e&&se(e,a,l),D(a,n,l),r=!0},p(a,l){const u=l[0]&12580351?ze(i,[l[0]&1024&&{tag:a[10]},l[0]&12189721&&{use:[[gr,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[23].disabled,addClass:a[19],removeClass:a[20],addStyle:a[21]}],a[17],...a[0]]},l[0]&266610&&{class:Te({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[18]==="card:action","mdc-card__action--button":a[18]==="card:action","mdc-dialog__button":a[18]==="dialog:action","mdc-top-app-bar__navigation-icon":a[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[18]==="top-app-bar:action","mdc-snackbar__action":a[18]==="snackbar:actions","mdc-banner__secondary-action":a[18]==="banner"&&a[8],"mdc-banner__primary-action":a[18]==="banner"&&!a[8],"mdc-tooltip__action":a[18]==="tooltip:rich-actions",...a[12]})},l[0]&8196&&{style:Object.entries(a[13]).map(Ni).concat([a[2]]).join(" ")},l[0]&65536&&mt(a[16]),l[0]&32768&&mt(a[15]),l[0]&16384&&mt(a[14]),l[0]&128&&{href:a[7]},l[0]&8388608&&mt(a[23])]):{};if(l[0]&1073741888&&(u.$$scope={dirty:l,ctx:a}),s!==(s=a[9])){if(e){qe();const f=e;P(f.$$.fragment,1,0,()=>{oe(f,1)}),Ge()}s?(e=mi(s,o(a)),a[29](e),e.$on("click",a[22]),ie(e.$$.fragment),U(e.$$.fragment,1),se(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(a){r||(e&&U(e.$$.fragment,a),r=!0)},o(a){e&&P(e.$$.fragment,a),r=!1},d(a){t[29](null),a&&E(n),e&&oe(e,a)}}}const Ni=([t,e])=>`${t}: ${e};`;function Ac(t,e,n){let r,i,s;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","tag","getElement"];let a=We(e,o),{$$slots:l={},$$scope:u}=e;const f=an(on());let{use:c=[]}=e,{class:d=""}=e,{style:p=""}=e,{ripple:m=!0}=e,{color:b="primary"}=e,{variant:g="text"}=e,{touch:k=!1}=e,{href:S=void 0}=e,{action:L="close"}=e,{defaultAction:v=!1}=e,{secondary:_=!1}=e,w,h={},y={},B=Sr("SMUI:button:context"),{component:x=bi}=e,{tag:H=x===bi?S==null?"button":"a":void 0}=e,J=a.disabled;Dr("SMUI:label:context","button"),Dr("SMUI:icon:context","button");function T(C){h[C]||n(12,h[C]=!0,h)}function G(C){(!(C in h)||h[C])&&n(12,h[C]=!1,h)}function fe(C,K){y[C]!=K&&(K===""||K==null?(delete y[C],n(13,y)):n(13,y[C]=K,y))}function me(){B==="banner"&&Lt(ve(),_?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function ve(){return w.getElement()}function Z(C){ye[C?"unshift":"push"](()=>{w=C,n(11,w)})}return t.$$set=C=>{n(31,e=ge(ge({},e),Pt(C))),n(23,a=We(e,o)),"use"in C&&n(0,c=C.use),"class"in C&&n(1,d=C.class),"style"in C&&n(2,p=C.style),"ripple"in C&&n(3,m=C.ripple),"color"in C&&n(4,b=C.color),"variant"in C&&n(5,g=C.variant),"touch"in C&&n(6,k=C.touch),"href"in C&&n(7,S=C.href),"action"in C&&n(24,L=C.action),"defaultAction"in C&&n(25,v=C.defaultAction),"secondary"in C&&n(8,_=C.secondary),"component"in C&&n(9,x=C.component),"tag"in C&&n(10,H=C.tag),"$$scope"in C&&n(30,u=C.$$scope)},t.$$.update=()=>{if(n(16,r=B==="dialog:action"&&L!=null?{"data-mdc-dialog-action":L}:{action:e.action}),n(15,i=B==="dialog:action"&&v?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(14,s=B==="banner"?{}:{secondary:e.secondary}),J!==a.disabled){const C=ve();"blur"in C&&C.blur(),n(27,J=a.disabled)}},e=Pt(e),[c,d,p,m,b,g,k,S,_,x,H,w,h,y,s,i,r,f,B,T,G,fe,me,a,L,v,ve,J,l,Z,u]}class gt extends Xe{constructor(e){super(),Ze(this,e,Ac,Ec,Je,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:24,defaultAction:25,secondary:8,component:9,tag:10,getElement:26},null,[-1,-1])}get getElement(){return this.$$.ctx[26]}}/**
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
 */var Ic={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var kc=function(t){xn(e,t);function e(n){var r=t.call(this,ft(ft({},e.defaultAdapter),n))||this;return r.shakeAnimationEndHandler=function(){r.handleShakeAnimationEnd()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Ic},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var r=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.float=function(n){var r=e.cssClasses,i=r.LABEL_FLOAT_ABOVE,s=r.LABEL_SHAKE;n?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.setRequired=function(n){var r=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(Tn);/**
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
 */var fn={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var Sc=function(t){xn(e,t);function e(n){var r=t.call(this,ft(ft({},e.defaultAdapter),n))||this;return r.transitionEndHandler=function(i){r.handleTransitionEnd(i)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return fn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(fn.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(fn.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(fn.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var r=this.adapter.hasClass(fn.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&r&&(this.adapter.removeClass(fn.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(fn.LINE_RIPPLE_DEACTIVATING))},e}(Tn);/**
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
 */var Lc={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},ji={NOTCH_ELEMENT_PADDING:8},Cc={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Hc=function(t){xn(e,t);function e(n){return t.call(this,ft(ft({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return Lc},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Cc},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ji},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var r=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=ji.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(r)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(Tn);/**
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
 */var Fr={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},xc={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Vi={LABEL_SCALE:.75},Tc=["pattern","min","max","required","step","minlength","maxlength"],Uc=["color","date","datetime-local","month","range","time","week"];/**
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
 */var zi=["mousedown","touchstart"],Ki=["click","keydown"],Bc=function(t){xn(e,t);function e(n,r){r===void 0&&(r={});var i=t.call(this,ft(ft({},e.defaultAdapter),n))||this;return i.isFocused=!1,i.receivedUserInput=!1,i.valid=!0,i.useNativeValidation=!0,i.validateOnValueChange=!0,i.helperText=r.helperText,i.characterCounter=r.characterCounter,i.leadingIcon=r.leadingIcon,i.trailingIcon=r.trailingIcon,i.inputFocusHandler=function(){i.activateFocus()},i.inputBlurHandler=function(){i.deactivateFocus()},i.inputInputHandler=function(){i.handleInput()},i.setPointerXOffset=function(s){i.setTransformOrigin(s)},i.textFieldInteractionHandler=function(){i.handleTextFieldInteraction()},i.validationAttributeChangeHandler=function(s){i.handleValidationAttributeChange(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return xc},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Fr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Vi},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return Uc.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,r,i,s;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=$t(zi),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}try{for(var u=$t(Ki),f=u.next();!f.done;f=u.next()){var l=f.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(c){i={error:c}}finally{try{f&&!f.done&&(s=u.return)&&s.call(u)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,r,i,s;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=$t(zi),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}try{for(var u=$t(Ki),f=u.next();!f.done;f=u.next()){var l=f.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(c){i={error:c}}finally{try{f&&!f.done&&(s=u.return)&&s.call(u)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var r=this;n.some(function(i){return Tc.indexOf(i)>-1?(r.styleValidity(!0),r.adapter.setLabelRequired(r.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var r=this.adapter.getLabelWidth()*Vi.LABEL_SCALE;this.adapter.notchOutline(r)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var r=n.touches,i=r?r[0]:n,s=i.target.getBoundingClientRect(),o=i.clientX-s.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var r=this.isValid();this.styleValidity(r)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var r=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(r)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(this.characterCounter){var r=this.getNativeInput().maxLength;if(r===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,r)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var r=e.cssClasses.INVALID;if(n?this.adapter.removeClass(r):this.adapter.addClass(r),this.helperText){this.helperText.setValidity(n);var i=this.helperText.isValidation();if(!i)return;var s=this.helperText.isVisible(),o=this.helperText.getId();s&&o?this.adapter.setInputAttr(Fr.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(Fr.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var r=e.cssClasses.FOCUSED;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.styleDisabled=function(n){var r=e.cssClasses,i=r.DISABLED,s=r.INVALID;n?(this.adapter.addClass(i),this.adapter.removeClass(s)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var r=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Tn);/**
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
 */var St={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Ot={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+St.ROOT};/**
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
 */var Oc=function(t){xn(e,t);function e(n){return t.call(this,ft(ft({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return St},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Ot.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(St.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(St.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(St.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(St.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(St.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Ot.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var r=this.adapter.hasClass(St.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG),s=i&&!n;s?(this.showToScreenReader(),this.adapter.getAttr(Ot.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Ot.ROLE,"alert")):this.adapter.removeAttr(Ot.ROLE),!r&&!s&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Ot.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(Ot.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(Ot.ROLE,"alert")})},e}(Tn);function Rc(t){let e,n,r,i,s,o,a,l;const u=t[22].default,f=Re(u,t,t[21],null);let c=[{class:n=Te({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})},{style:r=Object.entries(t[9]).map(Gi).concat([t[4]]).join(" ")},{for:i=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let p=0;p<c.length;p+=1)d=ge(d,c[p]);return{c(){e=O("label"),f&&f.c(),this.h()},l(p){e=R(p,"LABEL",{class:!0,style:!0,for:!0});var m=F(e);f&&f.l(m),m.forEach(E),this.h()},h(){Ve(e,d)},m(p,m){D(p,e,m),f&&f.m(e,null),t[24](e),o=!0,a||(l=[Me(s=Dt.call(null,e,t[2])),Me(t[10].call(null,e))],a=!0)},p(p,m){f&&f.p&&(!o||m&2097152)&&Pe(f,u,p,p[21],o?De(u,p[21],m,null):Fe(p[21]),null),Ve(e,d=ze(c,[(!o||m&267&&n!==(n=Te({[p[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":p[0],"mdc-floating-label--required":p[1],...p[8]})))&&{class:n},(!o||m&528&&r!==(r=Object.entries(p[9]).map(Gi).concat([p[4]]).join(" ")))&&{style:r},(!o||m&32&&i!==(i=p[5]||(p[11]?p[11].id:void 0)))&&{for:i},m&4096&&p[12]])),s&&_t(s.update)&&m&4&&s.update.call(null,p[2])},i(p){o||(U(f,p),o=!0)},o(p){P(f,p),o=!1},d(p){p&&E(e),f&&f.d(p),t[24](null),a=!1,Ht(l)}}}function Pc(t){let e,n,r,i,s,o,a;const l=t[22].default,u=Re(l,t,t[21],null);let f=[{class:n=Te({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})},{style:r=Object.entries(t[9]).map(qi).concat([t[4]]).join(" ")},t[12]],c={};for(let d=0;d<f.length;d+=1)c=ge(c,f[d]);return{c(){e=O("span"),u&&u.c(),this.h()},l(d){e=R(d,"SPAN",{class:!0,style:!0});var p=F(e);u&&u.l(p),p.forEach(E),this.h()},h(){Ve(e,c)},m(d,p){D(d,e,p),u&&u.m(e,null),t[23](e),s=!0,o||(a=[Me(i=Dt.call(null,e,t[2])),Me(t[10].call(null,e))],o=!0)},p(d,p){u&&u.p&&(!s||p&2097152)&&Pe(u,l,d,d[21],s?De(l,d[21],p,null):Fe(d[21]),null),Ve(e,c=ze(f,[(!s||p&267&&n!==(n=Te({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1],...d[8]})))&&{class:n},(!s||p&528&&r!==(r=Object.entries(d[9]).map(qi).concat([d[4]]).join(" ")))&&{style:r},p&4096&&d[12]])),i&&_t(i.update)&&p&4&&i.update.call(null,d[2])},i(d){s||(U(u,d),s=!0)},o(d){P(u,d),s=!1},d(d){d&&E(e),u&&u.d(d),t[23](null),o=!1,Ht(a)}}}function Fc(t){let e,n,r,i;const s=[Pc,Rc],o=[];function a(l,u){return l[6]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=ot()},l(l){n.l(l),r=ot()},m(l,u){o[e].m(l,u),D(l,r,u),i=!0},p(l,[u]){let f=e;e=a(l),e===f?o[e].p(l,u):(qe(),P(o[f],1,1,()=>{o[f]=null}),Ge(),n=o[e],n?n.p(l,u):(n=o[e]=s[e](l),n.c()),U(n,1),n.m(r.parentNode,r))},i(l){i||(U(n),i=!0)},o(l){P(n),i=!1},d(l){o[e].d(l),l&&E(r)}}}const qi=([t,e])=>`${t}: ${e};`,Gi=([t,e])=>`${t}: ${e};`;function Dc(t,e,n){const r=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let i=We(e,r),{$$slots:s={},$$scope:o}=e;var a;const l=an(on());let{use:u=[]}=e,{class:f=""}=e,{style:c=""}=e,{for:d=void 0}=e,{floatAbove:p=!1}=e,{required:m=!1}=e,{wrapped:b=!1}=e,g,k,S={},L={},v=(a=Sr("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},_=p,w=m;bn(()=>{n(18,k=new kc({addClass:h,removeClass:y,getWidth:()=>{var C,K;const Y=fe(),$=Y.cloneNode(!0);(C=Y.parentNode)===null||C===void 0||C.appendChild($),$.classList.add("smui-floating-label--remove-transition"),$.classList.add("smui-floating-label--force-size"),$.classList.remove("mdc-floating-label--float-above");const we=$.scrollWidth;return(K=Y.parentNode)===null||K===void 0||K.removeChild($),we},registerInteractionHandler:(C,K)=>fe().addEventListener(C,K),deregisterInteractionHandler:(C,K)=>fe().removeEventListener(C,K)}));const Z={get element(){return fe()},addStyle:B,removeStyle:x};return Lt(g,"SMUIFloatingLabel:mount",Z),k.init(),()=>{Lt(g,"SMUIFloatingLabel:unmount",Z),k.destroy()}});function h(Z){S[Z]||n(8,S[Z]=!0,S)}function y(Z){(!(Z in S)||S[Z])&&n(8,S[Z]=!1,S)}function B(Z,C){L[Z]!=C&&(C===""||C==null?(delete L[Z],n(9,L)):n(9,L[Z]=C,L))}function x(Z){Z in L&&(delete L[Z],n(9,L))}function H(Z){k.shake(Z)}function J(Z){n(0,p=Z)}function T(Z){n(1,m=Z)}function G(){return k.getWidth()}function fe(){return g}function me(Z){ye[Z?"unshift":"push"](()=>{g=Z,n(7,g)})}function ve(Z){ye[Z?"unshift":"push"](()=>{g=Z,n(7,g)})}return t.$$set=Z=>{e=ge(ge({},e),Pt(Z)),n(12,i=We(e,r)),"use"in Z&&n(2,u=Z.use),"class"in Z&&n(3,f=Z.class),"style"in Z&&n(4,c=Z.style),"for"in Z&&n(5,d=Z.for),"floatAbove"in Z&&n(0,p=Z.floatAbove),"required"in Z&&n(1,m=Z.required),"wrapped"in Z&&n(6,b=Z.wrapped),"$$scope"in Z&&n(21,o=Z.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&k&&_!==p&&(n(19,_=p),k.float(p)),t.$$.dirty&1310722&&k&&w!==m&&(n(20,w=m),k.setRequired(m))},[p,m,u,f,c,d,b,g,S,L,l,v,i,H,J,T,G,fe,k,_,w,o,s,me,ve]}class Wo extends Xe{constructor(e){super(),Ze(this,e,Dc,Fc,Je,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function Mc(t){let e,n,r,i,s,o,a=[{class:n=Te({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3],...t[5]})},{style:r=Object.entries(t[6]).map(Wi).concat([t[2]]).join(" ")},t[8]],l={};for(let u=0;u<a.length;u+=1)l=ge(l,a[u]);return{c(){e=O("div"),this.h()},l(u){e=R(u,"DIV",{class:!0,style:!0}),F(e).forEach(E),this.h()},h(){Ve(e,l)},m(u,f){D(u,e,f),t[13](e),s||(o=[Me(i=Dt.call(null,e,t[0])),Me(t[7].call(null,e))],s=!0)},p(u,[f]){Ve(e,l=ze(a,[f&42&&n!==(n=Te({[u[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":u[3],...u[5]}))&&{class:n},f&68&&r!==(r=Object.entries(u[6]).map(Wi).concat([u[2]]).join(" "))&&{style:r},f&256&&u[8]])),i&&_t(i.update)&&f&1&&i.update.call(null,u[0])},i:nt,o:nt,d(u){u&&E(e),t[13](null),s=!1,Ht(o)}}}const Wi=([t,e])=>`${t}: ${e};`;function Nc(t,e,n){const r=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let i=We(e,r);const s=an(on());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:u=!1}=e,f,c,d={},p={};bn(()=>(c=new Sc({addClass:b,removeClass:g,hasClass:m,setStyle:k,registerEventHandler:(h,y)=>_().addEventListener(h,y),deregisterEventHandler:(h,y)=>_().removeEventListener(h,y)}),c.init(),()=>{c.destroy()}));function m(h){return h in d?d[h]:_().classList.contains(h)}function b(h){d[h]||n(5,d[h]=!0,d)}function g(h){(!(h in d)||d[h])&&n(5,d[h]=!1,d)}function k(h,y){p[h]!=y&&(y===""||y==null?(delete p[h],n(6,p)):n(6,p[h]=y,p))}function S(){c.activate()}function L(){c.deactivate()}function v(h){c.setRippleCenter(h)}function _(){return f}function w(h){ye[h?"unshift":"push"](()=>{f=h,n(4,f)})}return t.$$set=h=>{e=ge(ge({},e),Pt(h)),n(8,i=We(e,r)),"use"in h&&n(0,o=h.use),"class"in h&&n(1,a=h.class),"style"in h&&n(2,l=h.style),"active"in h&&n(3,u=h.active)},[o,a,l,u,f,d,p,s,i,S,L,v,_,w]}class jc extends Xe{constructor(e){super(),Ze(this,e,Nc,Mc,Je,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Xi(t){let e,n,r;const i=t[14].default,s=Re(i,t,t[13],null);return{c(){e=O("div"),s&&s.c(),this.h()},l(o){e=R(o,"DIV",{class:!0,style:!0});var a=F(e);s&&s.l(a),a.forEach(E),this.h()},h(){vt(e,"class","mdc-notched-outline__notch"),vt(e,"style",n=Object.entries(t[7]).map(Zi).join(" "))},m(o,a){D(o,e,a),s&&s.m(e,null),r=!0},p(o,a){s&&s.p&&(!r||a&8192)&&Pe(s,i,o,o[13],r?De(i,o[13],a,null):Fe(o[13]),null),(!r||a&128&&n!==(n=Object.entries(o[7]).map(Zi).join(" ")))&&vt(e,"style",n)},i(o){r||(U(s,o),r=!0)},o(o){P(s,o),r=!1},d(o){o&&E(e),s&&s.d(o)}}}function Vc(t){let e,n,r,i,s,o,a,l,u,f,c=!t[3]&&Xi(t),d=[{class:o=Te({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3],...t[6]})},t[9]],p={};for(let m=0;m<d.length;m+=1)p=ge(p,d[m]);return{c(){e=O("div"),n=O("div"),r=M(),c&&c.c(),i=M(),s=O("div"),this.h()},l(m){e=R(m,"DIV",{class:!0});var b=F(e);n=R(b,"DIV",{class:!0}),F(n).forEach(E),r=N(b),c&&c.l(b),i=N(b),s=R(b,"DIV",{class:!0}),F(s).forEach(E),b.forEach(E),this.h()},h(){vt(n,"class","mdc-notched-outline__leading"),vt(s,"class","mdc-notched-outline__trailing"),Ve(e,p)},m(m,b){D(m,e,b),A(e,n),A(e,r),c&&c.m(e,null),A(e,i),A(e,s),t[15](e),l=!0,u||(f=[Me(a=Dt.call(null,e,t[0])),Me(t[8].call(null,e)),Ie(e,"SMUIFloatingLabel:mount",t[16]),Ie(e,"SMUIFloatingLabel:unmount",t[17])],u=!0)},p(m,[b]){m[3]?c&&(qe(),P(c,1,1,()=>{c=null}),Ge()):c?(c.p(m,b),b&8&&U(c,1)):(c=Xi(m),c.c(),U(c,1),c.m(e,i)),Ve(e,p=ze(d,[(!l||b&78&&o!==(o=Te({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3],...m[6]})))&&{class:o},b&512&&m[9]])),a&&_t(a.update)&&b&1&&a.update.call(null,m[0])},i(m){l||(U(c),l=!0)},o(m){P(c),l=!1},d(m){m&&E(e),c&&c.d(),t[15](null),u=!1,Ht(f)}}}const Zi=([t,e])=>`${t}: ${e};`;function zc(t,e,n){const r=["use","class","notched","noLabel","notch","closeNotch","getElement"];let i=We(e,r),{$$slots:s={},$$scope:o}=e;const a=an(on());let{use:l=[]}=e,{class:u=""}=e,{notched:f=!1}=e,{noLabel:c=!1}=e,d,p,m,b={},g={};bn(()=>(p=new Hc({addClass:k,removeClass:S,setNotchWidthProperty:H=>L("width",H+"px"),removeNotchWidthProperty:()=>v("width")}),p.init(),()=>{p.destroy()}));function k(H){b[H]||n(6,b[H]=!0,b)}function S(H){(!(H in b)||b[H])&&n(6,b[H]=!1,b)}function L(H,J){g[H]!=J&&(J===""||J==null?(delete g[H],n(7,g)):n(7,g[H]=J,g))}function v(H){H in g&&(delete g[H],n(7,g))}function _(H){p.notch(H)}function w(){p.closeNotch()}function h(){return d}function y(H){ye[H?"unshift":"push"](()=>{d=H,n(5,d)})}const B=H=>n(4,m=H.detail),x=()=>n(4,m=void 0);return t.$$set=H=>{e=ge(ge({},e),Pt(H)),n(9,i=We(e,r)),"use"in H&&n(0,l=H.use),"class"in H&&n(1,u=H.class),"notched"in H&&n(2,f=H.notched),"noLabel"in H&&n(3,c=H.noLabel),"$$scope"in H&&n(13,o=H.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),k("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):S("mdc-notched-outline--upgraded"))},[l,u,f,c,m,d,b,g,a,i,_,w,h,o,s,y,B,x]}class Kc extends Xe{constructor(e){super(),Ze(this,e,zc,Vc,Je,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}const qc=Wr({class:"mdc-text-field-helper-line",tag:"div"}),Gc=Wr({class:"mdc-text-field__affix mdc-text-field__affix--prefix",tag:"span"}),Wc=Wr({class:"mdc-text-field__affix mdc-text-field__affix--suffix",tag:"span"});function Xc(t){let e,n,r,i,s,o=[{class:n=Te({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=ge(a,o[l]);return{c(){e=O("input"),this.h()},l(l){e=R(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){Ve(e,a)},m(l,u){D(l,e,u),e.autofocus&&e.focus(),t[26](e),i||(s=[Me(r=Dt.call(null,e,t[0])),Me(t[7].call(null,e)),Ie(e,"input",t[27]),Ie(e,"change",t[9]),Ie(e,"blur",t[24]),Ie(e,"focus",t[25])],i=!0)},p(l,[u]){Ve(e,a=ze(o,[u&2&&n!==(n=Te({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&4&&{type:l[2]},u&8&&{placeholder:l[3]},u&16&&l[4],u&64&&l[6],u&1024&&l[10]])),r&&_t(r.update)&&u&1&&r.update.call(null,l[0])},i:nt,o:nt,d(l){l&&E(e),t[26](null),i=!1,Ht(s)}}}function Zc(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function Jc(t,e,n){const r=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","blur","getElement"];let i=We(e,r);const s=an(on());let o=()=>{};function a(C){return C===o}let{use:l=[]}=e,{class:u=""}=e,{type:f="text"}=e,{placeholder:c=" "}=e,{value:d=o}=e;const p=a(d);p&&(d="");let{files:m=null}=e,{dirty:b=!1}=e,{invalid:g=!1}=e,{updateInvalid:k=!0}=e,{emptyValueNull:S=d===null}=e;p&&S&&(d=null);let{emptyValueUndefined:L=d===void 0}=e;p&&L&&(d=void 0);let v,_={},w={};bn(()=>{k&&n(14,g=v.matches(":invalid"))});function h(C){if(f==="file"){n(12,m=C.currentTarget.files);return}if(C.currentTarget.value===""&&S){n(11,d=null);return}if(C.currentTarget.value===""&&L){n(11,d=void 0);return}switch(f){case"number":case"range":n(11,d=Zc(C.currentTarget.value));break;default:n(11,d=C.currentTarget.value);break}}function y(C){(f==="file"||f==="range")&&h(C),n(13,b=!0),k&&n(14,g=v.matches(":invalid"))}function B(C){var K;return C in _?(K=_[C])!==null&&K!==void 0?K:null:G().getAttribute(C)}function x(C,K){_[C]!==K&&n(6,_[C]=K,_)}function H(C){(!(C in _)||_[C]!=null)&&n(6,_[C]=void 0,_)}function J(){G().focus()}function T(){G().blur()}function G(){return v}function fe(C){zn.call(this,t,C)}function me(C){zn.call(this,t,C)}function ve(C){ye[C?"unshift":"push"](()=>{v=C,n(5,v)})}const Z=C=>f!=="file"&&h(C);return t.$$set=C=>{e=ge(ge({},e),Pt(C)),n(10,i=We(e,r)),"use"in C&&n(0,l=C.use),"class"in C&&n(1,u=C.class),"type"in C&&n(2,f=C.type),"placeholder"in C&&n(3,c=C.placeholder),"value"in C&&n(11,d=C.value),"files"in C&&n(12,m=C.files),"dirty"in C&&n(13,b=C.dirty),"invalid"in C&&n(14,g=C.invalid),"updateInvalid"in C&&n(15,k=C.updateInvalid),"emptyValueNull"in C&&n(16,S=C.emptyValueNull),"emptyValueUndefined"in C&&n(17,L=C.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(f==="file"?(delete w.value,n(4,w),n(2,f),n(11,d)):n(4,w.value=d??"",w))},[l,u,f,c,w,v,_,s,h,y,i,d,m,b,g,k,S,L,B,x,H,J,T,G,fe,me,ve,Z]}class Qc extends Xe{constructor(e){super(),Ze(this,e,Jc,Xc,Je,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,blur:22,getElement:23})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get blur(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}function Yc(t){let e,n,r,i,s,o,a=[{class:n=Te({[t[2]]:!0,"mdc-text-field__input":!0})},{style:r=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let u=0;u<a.length;u+=1)l=ge(l,a[u]);return{c(){e=O("textarea"),this.h()},l(u){e=R(u,"TEXTAREA",{class:!0,style:!0}),F(e).forEach(E),this.h()},h(){Ve(e,l)},m(u,f){D(u,e,f),e.autofocus&&e.focus(),t[21](e),gi(e,t[0]),s||(o=[Me(i=Dt.call(null,e,t[1])),Me(t[7].call(null,e)),Ie(e,"change",t[8]),Ie(e,"blur",t[19]),Ie(e,"focus",t[20]),Ie(e,"input",t[22])],s=!0)},p(u,[f]){Ve(e,l=ze(a,[f&4&&n!==(n=Te({[u[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},f&24&&r!==(r=`${u[4]?"":"resize: none; "}${u[3]}`)&&{style:r},f&64&&u[6],f&512&&u[9]])),i&&_t(i.update)&&f&2&&i.update.call(null,u[1]),f&1&&gi(e,u[0])},i:nt,o:nt,d(u){u&&E(e),t[21](null),s=!1,Ht(o)}}}function $c(t,e,n){const r=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","blur","getElement"];let i=We(e,r);const s=an(on());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:u=""}=e,{dirty:f=!1}=e,{invalid:c=!1}=e,{updateInvalid:d=!0}=e,{resizable:p=!0}=e,m,b={};bn(()=>{d&&n(11,c=m.matches(":invalid"))});function g(){n(10,f=!0),d&&n(11,c=m.matches(":invalid"))}function k(H){var J;return H in b?(J=b[H])!==null&&J!==void 0?J:null:w().getAttribute(H)}function S(H,J){b[H]!==J&&n(6,b[H]=J,b)}function L(H){(!(H in b)||b[H]!=null)&&n(6,b[H]=void 0,b)}function v(){w().focus()}function _(){w().blur()}function w(){return m}function h(H){zn.call(this,t,H)}function y(H){zn.call(this,t,H)}function B(H){ye[H?"unshift":"push"](()=>{m=H,n(5,m)})}function x(){u=this.value,n(0,u)}return t.$$set=H=>{e=ge(ge({},e),Pt(H)),n(9,i=We(e,r)),"use"in H&&n(1,o=H.use),"class"in H&&n(2,a=H.class),"style"in H&&n(3,l=H.style),"value"in H&&n(0,u=H.value),"dirty"in H&&n(10,f=H.dirty),"invalid"in H&&n(11,c=H.invalid),"updateInvalid"in H&&n(12,d=H.updateInvalid),"resizable"in H&&n(4,p=H.resizable)},[u,o,a,l,p,m,b,s,g,i,f,c,d,k,S,L,v,_,w,h,y,B,x]}class ef extends Xe{constructor(e){super(),Ze(this,e,$c,Yc,Je,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,blur:17,getElement:18})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get blur(){return this.$$.ctx[17]}get getElement(){return this.$$.ctx[18]}}const tf=t=>({}),Ji=t=>({}),nf=t=>({}),Qi=t=>({}),rf=t=>({}),Yi=t=>({}),sf=t=>({}),$i=t=>({}),of=t=>({}),es=t=>({}),af=t=>({}),ts=t=>({}),lf=t=>({}),ns=t=>({}),uf=t=>({}),rs=t=>({}),cf=t=>({}),is=t=>({}),ff=t=>({}),ss=t=>({}),df=t=>({}),os=t=>({}),hf=t=>({}),as=t=>({});function pf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m;const b=t[51].label,g=Re(b,t,t[90],es);r=new mr({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[gf]},$$scope:{ctx:t}}});const k=t[51].default,S=Re(k,t,t[90],null);o=new mr({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[bf]},$$scope:{ctx:t}}});const L=t[51].ripple,v=Re(L,t,t[90],Qi);let _=[{class:l=Te({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[42].label,"mdc-text-field--with-leading-icon":t[42].leadingIcon,"mdc-text-field--with-trailing-icon":t[42].trailingIcon,"mdc-text-field--invalid":t[1],...t[25]})},{style:u=Object.entries(t[26]).map(ys).concat([t[10]]).join(" ")},pr(t[41],["input$","label$","ripple$","outline$","helperLine$"])],w={};for(let h=0;h<_.length;h+=1)w=ge(w,_[h]);return{c(){e=O("div"),g&&g.c(),n=M(),ie(r.$$.fragment),i=M(),S&&S.c(),s=M(),ie(o.$$.fragment),a=M(),v&&v.c(),this.h()},l(h){e=R(h,"DIV",{class:!0,style:!0});var y=F(e);g&&g.l(y),n=N(y),ae(r.$$.fragment,y),i=N(y),S&&S.l(y),s=N(y),ae(o.$$.fragment,y),a=N(y),v&&v.l(y),y.forEach(E),this.h()},h(){Ve(e,w)},m(h,y){D(h,e,y),g&&g.m(e,null),A(e,n),se(r,e,null),A(e,i),S&&S.m(e,null),A(e,s),se(o,e,null),A(e,a),v&&v.m(e,null),t[80](e),d=!0,p||(m=[Me(f=gr.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),Me(c=Dt.call(null,e,t[8])),Me(t[34].call(null,e)),Ie(e,"SMUITextfieldLeadingIcon:mount",t[81]),Ie(e,"SMUITextfieldLeadingIcon:unmount",t[82]),Ie(e,"SMUITextfieldTrailingIcon:mount",t[83]),Ie(e,"SMUITextfieldTrailingIcon:unmount",t[84])],p=!0)},p(h,y){g&&g.p&&(!d||y[2]&268435456)&&Pe(g,b,h,h[90],d?De(b,h[90],y,of):Fe(h[90]),es);const B={};y[2]&268435456&&(B.$$scope={dirty:y,ctx:h}),r.$set(B),S&&S.p&&(!d||y[2]&268435456)&&Pe(S,k,h,h[90],d?De(k,h[90],y,null):Fe(h[90]),null);const x={};y[2]&268435456&&(x.$$scope={dirty:y,ctx:h}),o.$set(x),v&&v.p&&(!d||y[2]&268435456)&&Pe(v,L,h,h[90],d?De(L,h[90],y,nf):Fe(h[90]),Qi),Ve(e,w=ze(_,[(!d||y[0]&33673730|y[1]&2048&&l!==(l=Te({[h[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":h[12],"mdc-text-field--textarea":h[14],"mdc-text-field--filled":h[15]==="filled","mdc-text-field--outlined":h[15]==="outlined","smui-text-field--standard":h[15]==="standard"&&!h[14],"mdc-text-field--no-label":h[16]||!h[42].label,"mdc-text-field--with-leading-icon":h[42].leadingIcon,"mdc-text-field--with-trailing-icon":h[42].trailingIcon,"mdc-text-field--invalid":h[1],...h[25]})))&&{class:l},(!d||y[0]&67109888&&u!==(u=Object.entries(h[26]).map(ys).concat([h[10]]).join(" ")))&&{style:u},y[1]&1024&&pr(h[41],["input$","label$","ripple$","outline$","helperLine$"])])),f&&_t(f.update)&&y[0]&2048&&f.update.call(null,{ripple:h[11],unbounded:!1,addClass:h[38],removeClass:h[39],addStyle:h[40]}),c&&_t(c.update)&&y[0]&256&&c.update.call(null,h[8])},i(h){d||(U(g,h),U(r.$$.fragment,h),U(S,h),U(o.$$.fragment,h),U(v,h),d=!0)},o(h){P(g,h),P(r.$$.fragment,h),P(S,h),P(o.$$.fragment,h),P(v,h),d=!1},d(h){h&&E(e),g&&g.d(h),oe(r),S&&S.d(h),oe(o),v&&v.d(h),t[80](null),p=!1,Ht(m)}}}function mf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S,L=!t[14]&&t[15]!=="outlined"&&ls(t),v=(t[14]||t[15]==="outlined")&&fs(t);i=new mr({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[wf]},$$scope:{ctx:t}}});const _=t[51].default,w=Re(_,t,t[90],null),h=[Af,Ef],y=[];function B(T,G){return T[14]&&typeof T[0]=="string"?0:1}a=B(t),l=y[a]=h[a](t),f=new mr({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[Sf]},$$scope:{ctx:t}}});let x=!t[14]&&t[15]!=="outlined"&&t[11]&&ms(t),H=[{class:d=Te({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[42].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[42].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[42].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[42].internalCounter,"mdc-text-field--invalid":t[1],...t[25]})},{style:p=Object.entries(t[26]).map(bs).concat([t[10]]).join(" ")},{for:void 0},pr(t[41],["input$","label$","ripple$","outline$","helperLine$"])],J={};for(let T=0;T<H.length;T+=1)J=ge(J,H[T]);return{c(){e=O("label"),L&&L.c(),n=M(),v&&v.c(),r=M(),ie(i.$$.fragment),s=M(),w&&w.c(),o=M(),l.c(),u=M(),ie(f.$$.fragment),c=M(),x&&x.c(),this.h()},l(T){e=R(T,"LABEL",{class:!0,style:!0,for:!0});var G=F(e);L&&L.l(G),n=N(G),v&&v.l(G),r=N(G),ae(i.$$.fragment,G),s=N(G),w&&w.l(G),o=N(G),l.l(G),u=N(G),ae(f.$$.fragment,G),c=N(G),x&&x.l(G),G.forEach(E),this.h()},h(){Ve(e,J)},m(T,G){D(T,e,G),L&&L.m(e,null),A(e,n),v&&v.m(e,null),A(e,r),se(i,e,null),A(e,s),w&&w.m(e,null),A(e,o),y[a].m(e,null),A(e,u),se(f,e,null),A(e,c),x&&x.m(e,null),t[73](e),g=!0,k||(S=[Me(m=gr.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),Me(b=Dt.call(null,e,t[8])),Me(t[34].call(null,e)),Ie(e,"SMUITextfieldLeadingIcon:mount",t[74]),Ie(e,"SMUITextfieldLeadingIcon:unmount",t[75]),Ie(e,"SMUITextfieldTrailingIcon:mount",t[76]),Ie(e,"SMUITextfieldTrailingIcon:unmount",t[77]),Ie(e,"SMUITextfieldCharacterCounter:mount",t[78]),Ie(e,"SMUITextfieldCharacterCounter:unmount",t[79])],k=!0)},p(T,G){!T[14]&&T[15]!=="outlined"?L?(L.p(T,G),G[0]&49152&&U(L,1)):(L=ls(T),L.c(),U(L,1),L.m(e,n)):L&&(qe(),P(L,1,1,()=>{L=null}),Ge()),T[14]||T[15]==="outlined"?v?(v.p(T,G),G[0]&49152&&U(v,1)):(v=fs(T),v.c(),U(v,1),v.m(e,r)):v&&(qe(),P(v,1,1,()=>{v=null}),Ge());const fe={};G[2]&268435456&&(fe.$$scope={dirty:G,ctx:T}),i.$set(fe),w&&w.p&&(!g||G[2]&268435456)&&Pe(w,_,T,T[90],g?De(_,T[90],G,null):Fe(T[90]),null);let me=a;a=B(T),a===me?y[a].p(T,G):(qe(),P(y[me],1,1,()=>{y[me]=null}),Ge(),l=y[a],l?l.p(T,G):(l=y[a]=h[a](T),l.c()),U(l,1),l.m(e,u));const ve={};G[2]&268435456&&(ve.$$scope={dirty:G,ctx:T}),f.$set(ve),!T[14]&&T[15]!=="outlined"&&T[11]?x?(x.p(T,G),G[0]&51200&&U(x,1)):(x=ms(T),x.c(),U(x,1),x.m(e,null)):x&&(qe(),P(x,1,1,()=>{x=null}),Ge()),Ve(e,J=ze(H,[(!g||G[0]&314823171|G[1]&2048&&d!==(d=Te({[T[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":T[12],"mdc-text-field--textarea":T[14],"mdc-text-field--filled":T[15]==="filled","mdc-text-field--outlined":T[15]==="outlined","smui-text-field--standard":T[15]==="standard"&&!T[14],"mdc-text-field--no-label":T[16]||T[17]==null&&!T[42].label,"mdc-text-field--label-floating":T[28]||T[0]!=null&&T[0]!=="","mdc-text-field--with-leading-icon":T[35](T[22])?T[42].leadingIcon:T[22],"mdc-text-field--with-trailing-icon":T[35](T[23])?T[42].trailingIcon:T[23],"mdc-text-field--with-internal-counter":T[14]&&T[42].internalCounter,"mdc-text-field--invalid":T[1],...T[25]})))&&{class:d},(!g||G[0]&67109888&&p!==(p=Object.entries(T[26]).map(bs).concat([T[10]]).join(" ")))&&{style:p},{for:void 0},G[1]&1024&&pr(T[41],["input$","label$","ripple$","outline$","helperLine$"])])),m&&_t(m.update)&&G[0]&49152|G[1]&4&&m.update.call(null,{ripple:!T[14]&&T[15]==="filled",unbounded:!1,addClass:T[38],removeClass:T[39],addStyle:T[40],eventTarget:T[33],activeTarget:T[33],initPromise:T[37]}),b&&_t(b.update)&&G[0]&256&&b.update.call(null,T[8])},i(T){g||(U(L),U(v),U(i.$$.fragment,T),U(w,T),U(l),U(f.$$.fragment,T),U(x),g=!0)},o(T){P(L),P(v),P(i.$$.fragment,T),P(w,T),P(l),P(f.$$.fragment,T),P(x),g=!1},d(T){T&&E(e),L&&L.d(),v&&v.d(),oe(i),w&&w.d(T),y[a].d(),oe(f),x&&x.d(),t[73](null),k=!1,Ht(S)}}}function gf(t){let e;const n=t[51].leadingIcon,r=Re(n,t,t[90],$i);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Pe(r,n,i,i[90],e?De(n,i[90],s,sf):Fe(i[90]),$i)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function bf(t){let e;const n=t[51].trailingIcon,r=Re(n,t,t[90],Yi);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Pe(r,n,i,i[90],e?De(n,i[90],s,rf):Fe(i[90]),Yi)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function ls(t){let e,n,r,i=t[15]==="filled"&&us(),s=!t[16]&&(t[17]!=null||t[42].label)&&cs(t);return{c(){i&&i.c(),e=M(),s&&s.c(),n=ot()},l(o){i&&i.l(o),e=N(o),s&&s.l(o),n=ot()},m(o,a){i&&i.m(o,a),D(o,e,a),s&&s.m(o,a),D(o,n,a),r=!0},p(o,a){o[15]==="filled"?i||(i=us(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),!o[16]&&(o[17]!=null||o[42].label)?s?(s.p(o,a),a[0]&196608|a[1]&2048&&U(s,1)):(s=cs(o),s.c(),U(s,1),s.m(n.parentNode,n)):s&&(qe(),P(s,1,1,()=>{s=null}),Ge())},i(o){r||(U(s),r=!0)},o(o){P(s),r=!1},d(o){i&&i.d(o),o&&E(e),s&&s.d(o),o&&E(n)}}}function us(t){let e;return{c(){e=O("span"),this.h()},l(n){e=R(n,"SPAN",{class:!0}),F(e).forEach(E),this.h()},h(){vt(e,"class","mdc-text-field__ripple")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function cs(t){let e,n;const r=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},at(t[41],"label$")];let i={$$slots:{default:[yf]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new Wo({props:i}),t[52](e),{c(){ie(e.$$.fragment)},l(s){ae(e.$$.fragment,s)},m(s,o){se(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&1024?ze(r,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},r[2],o[1]&1024&&mt(at(s[41],"label$"))]):{};o[0]&131072|o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[52](null),oe(e,s)}}}function yf(t){let e=(t[17]==null?"":t[17])+"",n,r;const i=t[51].label,s=Re(i,t,t[90],as);return{c(){n=V(e),s&&s.c()},l(o){n=z(o,e),s&&s.l(o)},m(o,a){D(o,n,a),s&&s.m(o,a),r=!0},p(o,a){(!r||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&He(n,e),s&&s.p&&(!r||a[2]&268435456)&&Pe(s,i,o,o[90],r?De(i,o[90],a,hf):Fe(o[90]),as)},i(o){r||(U(s,o),r=!0)},o(o){P(s,o),r=!1},d(o){o&&E(n),s&&s.d(o)}}}function fs(t){let e,n;const r=[{noLabel:t[16]||t[17]==null&&!t[42].label},at(t[41],"outline$")];let i={$$slots:{default:[_f]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new Kc({props:i}),t[54](e),{c(){ie(e.$$.fragment)},l(s){ae(e.$$.fragment,s)},m(s,o){se(e,s,o),n=!0},p(s,o){const a=o[0]&196608|o[1]&3072?ze(r,[o[0]&196608|o[1]&2048&&{noLabel:s[16]||s[17]==null&&!s[42].label},o[1]&1024&&mt(at(s[41],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[54](null),oe(e,s)}}}function ds(t){let e,n;const r=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},at(t[41],"label$")];let i={$$slots:{default:[vf]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new Wo({props:i}),t[53](e),{c(){ie(e.$$.fragment)},l(s){ae(e.$$.fragment,s)},m(s,o){se(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&1024?ze(r,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},r[2],o[1]&1024&&mt(at(s[41],"label$"))]):{};o[0]&131072|o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[53](null),oe(e,s)}}}function vf(t){let e=(t[17]==null?"":t[17])+"",n,r;const i=t[51].label,s=Re(i,t,t[90],os);return{c(){n=V(e),s&&s.c()},l(o){n=z(o,e),s&&s.l(o)},m(o,a){D(o,n,a),s&&s.m(o,a),r=!0},p(o,a){(!r||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&He(n,e),s&&s.p&&(!r||a[2]&268435456)&&Pe(s,i,o,o[90],r?De(i,o[90],a,df):Fe(o[90]),os)},i(o){r||(U(s,o),r=!0)},o(o){P(s,o),r=!1},d(o){o&&E(n),s&&s.d(o)}}}function _f(t){let e,n,r=!t[16]&&(t[17]!=null||t[42].label)&&ds(t);return{c(){r&&r.c(),e=ot()},l(i){r&&r.l(i),e=ot()},m(i,s){r&&r.m(i,s),D(i,e,s),n=!0},p(i,s){!i[16]&&(i[17]!=null||i[42].label)?r?(r.p(i,s),s[0]&196608|s[1]&2048&&U(r,1)):(r=ds(i),r.c(),U(r,1),r.m(e.parentNode,e)):r&&(qe(),P(r,1,1,()=>{r=null}),Ge())},i(i){n||(U(r),n=!0)},o(i){P(r),n=!1},d(i){r&&r.d(i),i&&E(e)}}}function wf(t){let e;const n=t[51].leadingIcon,r=Re(n,t,t[90],ss);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Pe(r,n,i,i[90],e?De(n,i[90],s,ff):Fe(i[90]),ss)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function Ef(t){let e,n,r,i,s,o,a,l,u,f;const c=t[51].prefix,d=Re(c,t,t[90],rs);let p=t[20]!=null&&hs(t);const m=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},at(t[41],"input$")];function b(h){t[64](h)}function g(h){t[65](h)}function k(h){t[66](h)}function S(h){t[67](h)}let L={};for(let h=0;h<m.length;h+=1)L=ge(L,m[h]);t[0]!==void 0&&(L.value=t[0]),t[3]!==void 0&&(L.files=t[3]),t[4]!==void 0&&(L.dirty=t[4]),t[1]!==void 0&&(L.invalid=t[1]),r=new Qc({props:L}),t[63](r),ye.push(()=>et(r,"value",b)),ye.push(()=>et(r,"files",g)),ye.push(()=>et(r,"dirty",k)),ye.push(()=>et(r,"invalid",S)),r.$on("blur",t[68]),r.$on("focus",t[69]),r.$on("blur",t[70]),r.$on("focus",t[71]);let v=t[21]!=null&&ps(t);const _=t[51].suffix,w=Re(_,t,t[90],ns);return{c(){d&&d.c(),e=M(),p&&p.c(),n=M(),ie(r.$$.fragment),l=M(),v&&v.c(),u=M(),w&&w.c()},l(h){d&&d.l(h),e=N(h),p&&p.l(h),n=N(h),ae(r.$$.fragment,h),l=N(h),v&&v.l(h),u=N(h),w&&w.l(h)},m(h,y){d&&d.m(h,y),D(h,e,y),p&&p.m(h,y),D(h,n,y),se(r,h,y),D(h,l,y),v&&v.m(h,y),D(h,u,y),w&&w.m(h,y),f=!0},p(h,y){d&&d.p&&(!f||y[2]&268435456)&&Pe(d,c,h,h[90],f?De(c,h[90],y,uf):Fe(h[90]),rs),h[20]!=null?p?(p.p(h,y),y[0]&1048576&&U(p,1)):(p=hs(h),p.c(),U(p,1),p.m(n.parentNode,n)):p&&(qe(),P(p,1,1,()=>{p=null}),Ge());const B=y[0]&135213056|y[1]&1024?ze(m,[y[0]&262144&&{type:h[18]},y[0]&4096&&{disabled:h[12]},y[0]&8192&&{required:h[13]},y[0]&524288&&{updateInvalid:h[19]},y[0]&134217728&&{"aria-controls":h[27]},y[0]&134217728&&{"aria-describedby":h[27]},y[0]&196608&&mt(h[16]&&h[17]!=null?{placeholder:h[17]}:{}),y[1]&1024&&mt(at(h[41],"input$"))]):{};!i&&y[0]&1&&(i=!0,B.value=h[0],tt(()=>i=!1)),!s&&y[0]&8&&(s=!0,B.files=h[3],tt(()=>s=!1)),!o&&y[0]&16&&(o=!0,B.dirty=h[4],tt(()=>o=!1)),!a&&y[0]&2&&(a=!0,B.invalid=h[1],tt(()=>a=!1)),r.$set(B),h[21]!=null?v?(v.p(h,y),y[0]&2097152&&U(v,1)):(v=ps(h),v.c(),U(v,1),v.m(u.parentNode,u)):v&&(qe(),P(v,1,1,()=>{v=null}),Ge()),w&&w.p&&(!f||y[2]&268435456)&&Pe(w,_,h,h[90],f?De(_,h[90],y,lf):Fe(h[90]),ns)},i(h){f||(U(d,h),U(p),U(r.$$.fragment,h),U(v),U(w,h),f=!0)},o(h){P(d,h),P(p),P(r.$$.fragment,h),P(v),P(w,h),f=!1},d(h){d&&d.d(h),h&&E(e),p&&p.d(h),h&&E(n),t[63](null),oe(r,h),h&&E(l),v&&v.d(h),h&&E(u),w&&w.d(h)}}}function Af(t){let e,n,r,i,s,o,a,l;const u=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},at(t[41],"input$")];function f(g){t[56](g)}function c(g){t[57](g)}function d(g){t[58](g)}let p={};for(let g=0;g<u.length;g+=1)p=ge(p,u[g]);t[0]!==void 0&&(p.value=t[0]),t[4]!==void 0&&(p.dirty=t[4]),t[1]!==void 0&&(p.invalid=t[1]),n=new ef({props:p}),t[55](n),ye.push(()=>et(n,"value",f)),ye.push(()=>et(n,"dirty",c)),ye.push(()=>et(n,"invalid",d)),n.$on("blur",t[59]),n.$on("focus",t[60]),n.$on("blur",t[61]),n.$on("focus",t[62]);const m=t[51].internalCounter,b=Re(m,t,t[90],is);return{c(){e=O("span"),ie(n.$$.fragment),o=M(),b&&b.c(),this.h()},l(g){e=R(g,"SPAN",{class:!0});var k=F(e);ae(n.$$.fragment,k),o=N(k),b&&b.l(k),k.forEach(E),this.h()},h(){vt(e,"class",a=Te({"mdc-text-field__resizer":!("input$resizable"in t[41])||t[41].input$resizable}))},m(g,k){D(g,e,k),se(n,e,null),A(e,o),b&&b.m(e,null),l=!0},p(g,k){const S=k[0]&134754304|k[1]&1024?ze(u,[k[0]&4096&&{disabled:g[12]},k[0]&8192&&{required:g[13]},k[0]&524288&&{updateInvalid:g[19]},k[0]&134217728&&{"aria-controls":g[27]},k[0]&134217728&&{"aria-describedby":g[27]},k[1]&1024&&mt(at(g[41],"input$"))]):{};!r&&k[0]&1&&(r=!0,S.value=g[0],tt(()=>r=!1)),!i&&k[0]&16&&(i=!0,S.dirty=g[4],tt(()=>i=!1)),!s&&k[0]&2&&(s=!0,S.invalid=g[1],tt(()=>s=!1)),n.$set(S),b&&b.p&&(!l||k[2]&268435456)&&Pe(b,m,g,g[90],l?De(m,g[90],k,cf):Fe(g[90]),is),(!l||k[1]&1024&&a!==(a=Te({"mdc-text-field__resizer":!("input$resizable"in g[41])||g[41].input$resizable})))&&vt(e,"class",a)},i(g){l||(U(n.$$.fragment,g),U(b,g),l=!0)},o(g){P(n.$$.fragment,g),P(b,g),l=!1},d(g){g&&E(e),t[55](null),oe(n),b&&b.d(g)}}}function hs(t){let e,n;return e=new Gc({props:{$$slots:{default:[If]},$$scope:{ctx:t}}}),{c(){ie(e.$$.fragment)},l(r){ae(e.$$.fragment,r)},m(r,i){se(e,r,i),n=!0},p(r,i){const s={};i[0]&1048576|i[2]&268435456&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){oe(e,r)}}}function If(t){let e;return{c(){e=V(t[20])},l(n){e=z(n,t[20])},m(n,r){D(n,e,r)},p(n,r){r[0]&1048576&&He(e,n[20])},d(n){n&&E(e)}}}function ps(t){let e,n;return e=new Wc({props:{$$slots:{default:[kf]},$$scope:{ctx:t}}}),{c(){ie(e.$$.fragment)},l(r){ae(e.$$.fragment,r)},m(r,i){se(e,r,i),n=!0},p(r,i){const s={};i[0]&2097152|i[2]&268435456&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){oe(e,r)}}}function kf(t){let e;return{c(){e=V(t[21])},l(n){e=z(n,t[21])},m(n,r){D(n,e,r)},p(n,r){r[0]&2097152&&He(e,n[21])},d(n){n&&E(e)}}}function Sf(t){let e;const n=t[51].trailingIcon,r=Re(n,t,t[90],ts);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Pe(r,n,i,i[90],e?De(n,i[90],s,af):Fe(i[90]),ts)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function ms(t){let e,n;const r=[at(t[41],"ripple$")];let i={};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new jc({props:i}),t[72](e),{c(){ie(e.$$.fragment)},l(s){ae(e.$$.fragment,s)},m(s,o){se(e,s,o),n=!0},p(s,o){const a=o[1]&1024?ze(r,[mt(at(s[41],"ripple$"))]):{};e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){t[72](null),oe(e,s)}}}function gs(t){let e,n;const r=[at(t[41],"helperLine$")];let i={$$slots:{default:[Lf]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=ge(i,r[s]);return e=new qc({props:i}),e.$on("SMUITextfieldHelperText:id",t[85]),e.$on("SMUITextfieldHelperText:mount",t[86]),e.$on("SMUITextfieldHelperText:unmount",t[87]),e.$on("SMUITextfieldCharacterCounter:mount",t[88]),e.$on("SMUITextfieldCharacterCounter:unmount",t[89]),{c(){ie(e.$$.fragment)},l(s){ae(e.$$.fragment,s)},m(s,o){se(e,s,o),n=!0},p(s,o){const a=o[1]&1024?ze(r,[mt(at(s[41],"helperLine$"))]):{};o[2]&268435456&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function Lf(t){let e;const n=t[51].helper,r=Re(n,t,t[90],Ji);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[2]&268435456)&&Pe(r,n,i,i[90],e?De(n,i[90],s,tf):Fe(i[90]),Ji)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function Cf(t){let e,n,r,i,s;const o=[mf,pf],a=[];function l(f,c){return f[36]?0:1}e=l(t),n=a[e]=o[e](t);let u=t[42].helper&&gs(t);return{c(){n.c(),r=M(),u&&u.c(),i=ot()},l(f){n.l(f),r=N(f),u&&u.l(f),i=ot()},m(f,c){a[e].m(f,c),D(f,r,c),u&&u.m(f,c),D(f,i,c),s=!0},p(f,c){n.p(f,c),f[42].helper?u?(u.p(f,c),c[1]&2048&&U(u,1)):(u=gs(f),u.c(),U(u,1),u.m(i.parentNode,i)):u&&(qe(),P(u,1,1,()=>{u=null}),Ge())},i(f){s||(U(n),U(u),s=!0)},o(f){P(n),P(u),s=!1},d(f){a[e].d(f),f&&E(r),u&&u.d(f),f&&E(i)}}}const bs=([t,e])=>`${t}: ${e};`,ys=([t,e])=>`${t}: ${e};`;function Hf(t,e,n){let r;const i=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","blur","layout","getElement"];let s=We(e,i),{$$slots:o={},$$scope:a}=e;const l=pa(o),{applyPassive:u}=Rs,f=an(on());let c=()=>{};function d(I){return I===c}let{use:p=[]}=e,{class:m=""}=e,{style:b=""}=e,{ripple:g=!0}=e,{disabled:k=!1}=e,{required:S=!1}=e,{textarea:L=!1}=e,{variant:v=L?"outlined":"standard"}=e,{noLabel:_=!1}=e,{label:w=void 0}=e,{type:h="text"}=e,{value:y=s.input$emptyValueUndefined?void 0:c}=e,{files:B=c}=e;const x=!d(y)||!d(B);d(y)&&(y=void 0),d(B)&&(B=null);let{invalid:H=c}=e,{updateInvalid:J=d(H)}=e;d(H)&&(H=!1);let{dirty:T=!1}=e,{prefix:G=void 0}=e,{suffix:fe=void 0}=e,{validateOnValueChange:me=J}=e,{useNativeValidation:ve=J}=e,{withLeadingIcon:Z=c}=e,{withTrailingIcon:C=c}=e,{input:K=void 0}=e,{floatingLabel:Y=void 0}=e,{lineRipple:$=void 0}=e,{notchedOutline:we=void 0}=e,le,Q,W={},ue={},te,Ne=!1,re=Sr("SMUI:addLayoutListener"),ke,Se,Qe=new Promise(I=>Se=I),je,Ue,Ye,_e,Et=y;re&&(ke=re(rt)),bn(()=>{if(n(49,Q=new Bc({addClass:$e,removeClass:xe,hasClass:Nt,registerTextFieldInteractionHandler:(I,Oe)=>Le().addEventListener(I,Oe),deregisterTextFieldInteractionHandler:(I,Oe)=>Le().removeEventListener(I,Oe),registerValidationAttributeChangeHandler:I=>{const Oe=Tr=>Tr.map(Ur=>Ur.attributeName).filter(Ur=>Ur),pi=new MutationObserver(Tr=>{ve&&I(Oe(Tr))}),ha={attributes:!0};return K&&pi.observe(K.getElement(),ha),pi},deregisterValidationAttributeChangeHandler:I=>{I.disconnect()},getNativeInput:()=>{var I;return(I=K==null?void 0:K.getElement())!==null&&I!==void 0?I:null},setInputAttr:(I,Oe)=>{K==null||K.addAttr(I,Oe)},removeInputAttr:I=>{K==null||K.removeAttr(I)},isFocused:()=>document.activeElement===(K==null?void 0:K.getElement()),registerInputInteractionHandler:(I,Oe)=>{K==null||K.getElement().addEventListener(I,Oe,u())},deregisterInputInteractionHandler:(I,Oe)=>{K==null||K.getElement().removeEventListener(I,Oe,u())},floatLabel:I=>Y&&Y.float(I),getLabelWidth:()=>Y?Y.getWidth():0,hasLabel:()=>!!Y,shakeLabel:I=>Y&&Y.shake(I),setLabelRequired:I=>Y&&Y.setRequired(I),activateLineRipple:()=>$&&$.activate(),deactivateLineRipple:()=>$&&$.deactivate(),setLineRippleTransformOrigin:I=>$&&$.setRippleCenter(I),closeOutline:()=>we&&we.closeNotch(),hasOutline:()=>!!we,notchOutline:I=>we&&we.notch(I)},{get helperText(){return Ye},get characterCounter(){return _e},get leadingIcon(){return je},get trailingIcon(){return Ue}})),x){if(K==null)throw new Error("SMUI Textfield initialized without Input component.");Q.init()}else ma().then(()=>{if(K==null)throw new Error("SMUI Textfield initialized without Input component.");Q.init()});return Se(),()=>{Q.destroy()}}),Os(()=>{ke&&ke()});function Nt(I){var Oe;return I in W?(Oe=W[I])!==null&&Oe!==void 0?Oe:null:Le().classList.contains(I)}function $e(I){W[I]||n(25,W[I]=!0,W)}function xe(I){(!(I in W)||W[I])&&n(25,W[I]=!1,W)}function Be(I,Oe){ue[I]!=Oe&&(Oe===""||Oe==null?(delete ue[I],n(26,ue)):n(26,ue[I]=Oe,ue))}function On(){K==null||K.focus()}function cn(){K==null||K.blur()}function rt(){if(Q){const I=Q.shouldFloat;Q.notchOutline(I)}}function Le(){return le}function X(I){ye[I?"unshift":"push"](()=>{Y=I,n(5,Y)})}function j(I){ye[I?"unshift":"push"](()=>{Y=I,n(5,Y)})}function ne(I){ye[I?"unshift":"push"](()=>{we=I,n(7,we)})}function ee(I){ye[I?"unshift":"push"](()=>{K=I,n(2,K)})}function it(I){y=I,n(0,y)}function lt(I){T=I,n(4,T)}function st(I){H=I,n(1,H),n(49,Q),n(19,J)}const At=()=>n(28,Ne=!1),Ae=()=>n(28,Ne=!0),It=I=>Lt(le,"blur",I),Ut=I=>Lt(le,"focus",I);function jt(I){ye[I?"unshift":"push"](()=>{K=I,n(2,K)})}function Vt(I){y=I,n(0,y)}function Bt(I){B=I,n(3,B)}function zt(I){T=I,n(4,T)}function ht(I){H=I,n(1,H),n(49,Q),n(19,J)}const Qn=()=>n(28,Ne=!1),_n=()=>n(28,Ne=!0),Rn=I=>Lt(le,"blur",I),Xo=I=>Lt(le,"focus",I);function Zo(I){ye[I?"unshift":"push"](()=>{$=I,n(6,$)})}function Jo(I){ye[I?"unshift":"push"](()=>{le=I,n(24,le)})}const Qo=I=>n(29,je=I.detail),Yo=()=>n(29,je=void 0),$o=I=>n(30,Ue=I.detail),ea=()=>n(30,Ue=void 0),ta=I=>n(32,_e=I.detail),na=()=>n(32,_e=void 0);function ra(I){ye[I?"unshift":"push"](()=>{le=I,n(24,le)})}const ia=I=>n(29,je=I.detail),sa=()=>n(29,je=void 0),oa=I=>n(30,Ue=I.detail),aa=()=>n(30,Ue=void 0),la=I=>n(27,te=I.detail),ua=I=>n(31,Ye=I.detail),ca=()=>{n(27,te=void 0),n(31,Ye=void 0)},fa=I=>n(32,_e=I.detail),da=()=>n(32,_e=void 0);return t.$$set=I=>{e=ge(ge({},e),Pt(I)),n(41,s=We(e,i)),"use"in I&&n(8,p=I.use),"class"in I&&n(9,m=I.class),"style"in I&&n(10,b=I.style),"ripple"in I&&n(11,g=I.ripple),"disabled"in I&&n(12,k=I.disabled),"required"in I&&n(13,S=I.required),"textarea"in I&&n(14,L=I.textarea),"variant"in I&&n(15,v=I.variant),"noLabel"in I&&n(16,_=I.noLabel),"label"in I&&n(17,w=I.label),"type"in I&&n(18,h=I.type),"value"in I&&n(0,y=I.value),"files"in I&&n(3,B=I.files),"invalid"in I&&n(1,H=I.invalid),"updateInvalid"in I&&n(19,J=I.updateInvalid),"dirty"in I&&n(4,T=I.dirty),"prefix"in I&&n(20,G=I.prefix),"suffix"in I&&n(21,fe=I.suffix),"validateOnValueChange"in I&&n(43,me=I.validateOnValueChange),"useNativeValidation"in I&&n(44,ve=I.useNativeValidation),"withLeadingIcon"in I&&n(22,Z=I.withLeadingIcon),"withTrailingIcon"in I&&n(23,C=I.withTrailingIcon),"input"in I&&n(2,K=I.input),"floatingLabel"in I&&n(5,Y=I.floatingLabel),"lineRipple"in I&&n(6,$=I.lineRipple),"notchedOutline"in I&&n(7,we=I.notchedOutline),"$$scope"in I&&n(90,a=I.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,r=K&&K.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&262144&&Q&&Q.isValid()!==!H&&(J?n(1,H=!Q.isValid()):Q.setValid(!H)),t.$$.dirty[1]&266240&&Q&&Q.getValidateOnValueChange()!==me&&Q.setValidateOnValueChange(d(me)?!1:me),t.$$.dirty[1]&270336&&Q&&Q.setUseNativeValidation(d(ve)?!0:ve),t.$$.dirty[0]&4096|t.$$.dirty[1]&262144&&Q&&Q.setDisabled(k),t.$$.dirty[0]&1|t.$$.dirty[1]&786432&&Q&&x&&Et!==y){n(50,Et=y);const I=`${y}`;Q.getValue()!==I&&Q.setValue(I)}},[y,H,K,B,T,Y,$,we,p,m,b,g,k,S,L,v,_,w,h,J,G,fe,Z,C,le,W,ue,te,Ne,je,Ue,Ye,_e,r,f,d,x,Qe,$e,xe,Be,s,l,me,ve,On,cn,rt,Le,Q,Et,o,X,j,ne,ee,it,lt,st,At,Ae,It,Ut,jt,Vt,Bt,zt,ht,Qn,_n,Rn,Xo,Zo,Jo,Qo,Yo,$o,ea,ta,na,ra,ia,sa,oa,aa,la,ua,ca,fa,da,a]}class sn extends Xe{constructor(e){super(),Ze(this,e,Hf,Cf,Je,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,blur:46,layout:47,getElement:48},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get blur(){return this.$$.ctx[46]}get layout(){return this.$$.ctx[47]}get getElement(){return this.$$.ctx[48]}}function xf(t){let e;return{c(){e=V(t[8])},l(n){e=z(n,t[8])},m(n,r){D(n,e,r)},p(n,r){r&256&&He(e,n[8])},i:nt,o:nt,d(n){n&&E(e)}}}function Tf(t){let e;const n=t[13].default,r=Re(n,t,t[12],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&4096)&&Pe(r,n,i,i[12],e?De(n,i[12],s,null):Fe(i[12]),null)},i(i){e||(U(r,i),e=!0)},o(i){P(r,i),e=!1},d(i){r&&r.d(i)}}}function Uf(t){let e,n,r,i,s,o,a,l,u;const f=[Tf,xf],c=[];function d(b,g){return b[8]==null?0:1}n=d(t),r=c[n]=f[n](t);let p=[{class:i=Te({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4],...t[6]})},{"aria-hidden":s=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let b=0;b<p.length;b+=1)m=ge(m,p[b]);return{c(){e=O("div"),r.c(),this.h()},l(b){e=R(b,"DIV",{class:!0,"aria-hidden":!0,id:!0});var g=F(e);r.l(g),g.forEach(E),this.h()},h(){Ve(e,m)},m(b,g){D(b,e,g),c[n].m(e,null),t[14](e),a=!0,l||(u=[Me(o=Dt.call(null,e,t[0])),Me(t[9].call(null,e))],l=!0)},p(b,[g]){let k=n;n=d(b),n===k?c[n].p(b,g):(qe(),P(c[k],1,1,()=>{c[k]=null}),Ge(),r=c[n],r?r.p(b,g):(r=c[n]=f[n](b),r.c()),U(r,1),r.m(e,null)),Ve(e,m=ze(p,[(!a||g&90&&i!==(i=Te({[b[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":b[3],"mdc-text-field-helper-text--validation-msg":b[4],...b[6]})))&&{class:i},(!a||g&8&&s!==(s=b[3]?void 0:"true"))&&{"aria-hidden":s},(!a||g&4)&&{id:b[2]},g&128&&b[7],g&1024&&b[10]])),o&&_t(o.update)&&g&1&&o.update.call(null,b[0])},i(b){a||(U(r),a=!0)},o(b){P(r),a=!1},d(b){b&&E(e),c[n].d(),t[14](null),l=!1,Ht(u)}}}let Bf=0;function Of(t,e,n){const r=["use","class","id","persistent","validationMsg","getElement"];let i=We(e,r),{$$slots:s={},$$scope:o}=e;const a=an(on());let{use:l=[]}=e,{class:u=""}=e,{id:f="SMUI-textfield-helper-text-"+Bf++}=e,{persistent:c=!1}=e,{validationMsg:d=!1}=e,p,m,b={},g={},k;bn(()=>(m=new Oc({addClass:L,removeClass:v,hasClass:S,getAttr:_,setAttr:w,removeAttr:h,setContent:x=>{n(8,k=x)}}),f.startsWith("SMUI-textfield-helper-text-")&&Lt(y(),"SMUITextfieldHelperText:id",f),Lt(y(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{Lt(y(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function S(x){return x in b?b[x]:y().classList.contains(x)}function L(x){b[x]||n(6,b[x]=!0,b)}function v(x){(!(x in b)||b[x])&&n(6,b[x]=!1,b)}function _(x){var H;return x in g?(H=g[x])!==null&&H!==void 0?H:null:y().getAttribute(x)}function w(x,H){g[x]!==H&&n(7,g[x]=H,g)}function h(x){(!(x in g)||g[x]!=null)&&n(7,g[x]=void 0,g)}function y(){return p}function B(x){ye[x?"unshift":"push"](()=>{p=x,n(5,p)})}return t.$$set=x=>{e=ge(ge({},e),Pt(x)),n(10,i=We(e,r)),"use"in x&&n(0,l=x.use),"class"in x&&n(1,u=x.class),"id"in x&&n(2,f=x.id),"persistent"in x&&n(3,c=x.persistent),"validationMsg"in x&&n(4,d=x.validationMsg),"$$scope"in x&&n(12,o=x.$$scope)},[l,u,f,c,d,p,b,g,k,a,i,y,o,s,B]}class Rf extends Xe{constructor(e){super(),Ze(this,e,Of,Uf,Je,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}const Nn=Gr("");function Pf(t){let e;return{c(){e=V("Generate key")},l(n){e=z(n,"Generate key")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function Ff(t){let e;return{c(){e=V("Invalid private key, unable to import.")},l(n){e=z(n,"Invalid private key, unable to import.")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function Df(t){let e,n;return e=new Rf({props:{validationMsg:!0,slot:"helper",$$slots:{default:[Ff]},$$scope:{ctx:t}}}),{c(){ie(e.$$.fragment)},l(r){ae(e.$$.fragment,r)},m(r,i){se(e,r,i),n=!0},p(r,i){const s={};i&32768&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){oe(e,r)}}}function Mf(t){let e;return{c(){e=V("Import")},l(n){e=z(n,"Import")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function Nf(t){let e;return{c(){e=V("Convert")},l(n){e=z(n,"Convert")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function jf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S,L,v,_,w,h,y,B,x,H,J,T,G,fe,me,ve,Z,C,K,Y,$,we,le,Q,W,ue,te,Ne,re,ke,Se,Qe,je,Ue,Ye,_e,Et,Nt,$e,xe,Be;S=new gt({props:{$$slots:{default:[Pf]},$$scope:{ctx:t}}}),S.$on("click",t[11]);function On(X){t[12](X)}let cn={type:"text",label:"Private key",style:"width: 100%",invalid:t[2],$$slots:{helper:[Df]},$$scope:{ctx:t}};t[1]!==void 0&&(cn.value=t[1]),y=new sn({props:cn}),ye.push(()=>et(y,"value",On)),H=new gt({props:{$$slots:{default:[Mf]},$$scope:{ctx:t}}}),H.$on("click",t[13]);function rt(X){t[14](X)}let Le={type:"text",label:"Public key",style:"width: 100%"};return t[3]!==void 0&&(Le.value=t[3]),Se=new sn({props:Le}),ye.push(()=>et(Se,"value",rt)),Ue=new gt({props:{type:"submit",$$slots:{default:[Nf]},$$scope:{ctx:t}}}),{c(){e=O("h2"),n=V("Keys"),r=M(),i=O("details"),s=O("summary"),o=V("Private key related operations"),a=M(),l=O("p"),u=V("Private key: "),f=O("code"),c=V(t[0]),d=M(),p=O("p"),m=V("Public key: "),b=O("code"),g=V(t[7]),k=M(),ie(S.$$.fragment),L=M(),v=O("details"),_=O("summary"),w=V("Import an existing private key"),h=M(),ie(y.$$.fragment),x=M(),ie(H.$$.fragment),J=M(),T=M(),G=O("h3"),fe=V("NIP19"),me=M(),ve=O("p"),Z=V("nsec: "),C=O("code"),K=V(t[6]),Y=M(),$=O("p"),we=V("npub: "),le=O("code"),Q=V(t[5]),W=M(),ue=O("details"),te=O("summary"),Ne=V("Public key related operations"),re=M(),ke=O("form"),ie(Se.$$.fragment),je=M(),ie(Ue.$$.fragment),Ye=M(),_e=O("p"),Et=V("Converted public key: "),Nt=V(t[4])},l(X){e=R(X,"H2",{});var j=F(e);n=z(j,"Keys"),j.forEach(E),r=N(X),i=R(X,"DETAILS",{});var ne=F(i);s=R(ne,"SUMMARY",{});var ee=F(s);o=z(ee,"Private key related operations"),ee.forEach(E),a=N(ne),l=R(ne,"P",{});var it=F(l);u=z(it,"Private key: "),f=R(it,"CODE",{});var lt=F(f);c=z(lt,t[0]),lt.forEach(E),it.forEach(E),d=N(ne),p=R(ne,"P",{});var st=F(p);m=z(st,"Public key: "),b=R(st,"CODE",{});var At=F(b);g=z(At,t[7]),At.forEach(E),st.forEach(E),k=N(ne),ae(S.$$.fragment,ne),L=N(ne),v=R(ne,"DETAILS",{});var Ae=F(v);_=R(Ae,"SUMMARY",{});var It=F(_);w=z(It,"Import an existing private key"),It.forEach(E),h=N(Ae),ae(y.$$.fragment,Ae),x=N(Ae),ae(H.$$.fragment,Ae),J=N(Ae),Ae.forEach(E),T=N(ne),G=R(ne,"H3",{});var Ut=F(G);fe=z(Ut,"NIP19"),Ut.forEach(E),me=N(ne),ve=R(ne,"P",{});var jt=F(ve);Z=z(jt,"nsec: "),C=R(jt,"CODE",{});var Vt=F(C);K=z(Vt,t[6]),Vt.forEach(E),jt.forEach(E),Y=N(ne),$=R(ne,"P",{});var Bt=F($);we=z(Bt,"npub: "),le=R(Bt,"CODE",{});var zt=F(le);Q=z(zt,t[5]),zt.forEach(E),Bt.forEach(E),ne.forEach(E),W=N(X),ue=R(X,"DETAILS",{});var ht=F(ue);te=R(ht,"SUMMARY",{});var Qn=F(te);Ne=z(Qn,"Public key related operations"),Qn.forEach(E),re=N(ht),ke=R(ht,"FORM",{});var _n=F(ke);ae(Se.$$.fragment,_n),je=N(_n),ae(Ue.$$.fragment,_n),_n.forEach(E),Ye=N(ht),_e=R(ht,"P",{});var Rn=F(_e);Et=z(Rn,"Converted public key: "),Nt=z(Rn,t[4]),Rn.forEach(E),ht.forEach(E)},m(X,j){D(X,e,j),A(e,n),D(X,r,j),D(X,i,j),A(i,s),A(s,o),A(i,a),A(i,l),A(l,u),A(l,f),A(f,c),A(i,d),A(i,p),A(p,m),A(p,b),A(b,g),A(i,k),se(S,i,null),A(i,L),A(i,v),A(v,_),A(_,w),A(v,h),se(y,v,null),A(v,x),se(H,v,null),A(v,J),A(i,T),A(i,G),A(G,fe),A(i,me),A(i,ve),A(ve,Z),A(ve,C),A(C,K),A(i,Y),A(i,$),A($,we),A($,le),A(le,Q),D(X,W,j),D(X,ue,j),A(ue,te),A(te,Ne),A(ue,re),A(ue,ke),se(Se,ke,null),A(ke,je),se(Ue,ke,null),A(ue,Ye),A(ue,_e),A(_e,Et),A(_e,Nt),$e=!0,xe||(Be=Ie(ke,"submit",mn(t[10])),xe=!0)},p(X,[j]){(!$e||j&1)&&He(c,X[0]),(!$e||j&128)&&He(g,X[7]);const ne={};j&32768&&(ne.$$scope={dirty:j,ctx:X}),S.$set(ne);const ee={};j&4&&(ee.invalid=X[2]),j&32768&&(ee.$$scope={dirty:j,ctx:X}),!B&&j&2&&(B=!0,ee.value=X[1],tt(()=>B=!1)),y.$set(ee);const it={};j&32768&&(it.$$scope={dirty:j,ctx:X}),H.$set(it),(!$e||j&64)&&He(K,X[6]),(!$e||j&32)&&He(Q,X[5]);const lt={};!Qe&&j&8&&(Qe=!0,lt.value=X[3],tt(()=>Qe=!1)),Se.$set(lt);const st={};j&32768&&(st.$$scope={dirty:j,ctx:X}),Ue.$set(st),(!$e||j&16)&&He(Nt,X[4])},i(X){$e||(U(S.$$.fragment,X),U(y.$$.fragment,X),U(H.$$.fragment,X),U(Se.$$.fragment,X),U(Ue.$$.fragment,X),$e=!0)},o(X){P(S.$$.fragment,X),P(y.$$.fragment,X),P(H.$$.fragment,X),P(Se.$$.fragment,X),P(Ue.$$.fragment,X),$e=!1},d(X){X&&E(e),X&&E(r),X&&E(i),oe(S),oe(y),oe(H),X&&E(W),X&&E(ue),oe(Se),oe(Ue),xe=!1,Be()}}}function Vf(t,e,n){let r,i,s,o;hr(t,Nn,S=>n(0,o=S));let a="",l=!1;const u=()=>{fr(Nn,o=ju(),o)},f=()=>{if(n(2,l=!1),a.startsWith("nsec"))try{const{data:S}=hn.decode(a);fr(Nn,o=S,o);return}catch{}if(a.length===64){fr(Nn,o=a,o);return}n(2,l=!0)};let c="",d="";const p=()=>{if(c.startsWith("npub")){const{data:S}=hn.decode(c);n(4,d=S)}else c.length===64&&n(4,d=hn.npubEncode(c))},m=()=>u();function b(S){a=S,n(1,a)}const g=()=>f();function k(S){c=S,n(3,c)}return t.$$.update=()=>{t.$$.dirty&1&&n(7,r=o===""?"":ui(o)),t.$$.dirty&1&&n(6,i=o===""?"":hn.nsecEncode(o)),t.$$.dirty&1&&n(5,s=o===""?"":hn.npubEncode(o))},[o,a,l,c,d,s,i,r,u,f,p,m,b,g,k]}class zf extends Xe{constructor(e){super(),Ze(this,e,Vf,jf,Je,{})}}function Kf(t){let e;return{c(){e=V("Fetch relay info")},l(n){e=z(n,"Fetch relay info")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function qf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S;function L(_){t[3](_)}let v={type:"url",style:"width: 100%"};return t[0]!==void 0&&(v.value=t[0]),u=new sn({props:v}),ye.push(()=>et(u,"value",L)),d=new gt({props:{$$slots:{default:[Kf]},$$scope:{ctx:t}}}),{c(){e=O("h2"),n=V("NIP11"),r=M(),i=O("details"),s=O("summary"),o=V("Fetch NIP11 info for relays"),a=M(),l=O("form"),ie(u.$$.fragment),c=M(),ie(d.$$.fragment),p=M(),m=O("pre"),b=V(t[1])},l(_){e=R(_,"H2",{});var w=F(e);n=z(w,"NIP11"),w.forEach(E),r=N(_),i=R(_,"DETAILS",{});var h=F(i);s=R(h,"SUMMARY",{});var y=F(s);o=z(y,"Fetch NIP11 info for relays"),y.forEach(E),a=N(h),l=R(h,"FORM",{});var B=F(l);ae(u.$$.fragment,B),c=N(B),ae(d.$$.fragment,B),B.forEach(E),p=N(h),m=R(h,"PRE",{});var x=F(m);b=z(x,t[1]),x.forEach(E),h.forEach(E)},m(_,w){D(_,e,w),A(e,n),D(_,r,w),D(_,i,w),A(i,s),A(s,o),A(i,a),A(i,l),se(u,l,null),A(l,c),se(d,l,null),A(i,p),A(i,m),A(m,b),g=!0,k||(S=Ie(l,"submit",mn(t[4])),k=!0)},p(_,[w]){const h={};!f&&w&1&&(f=!0,h.value=_[0],tt(()=>f=!1)),u.$set(h);const y={};w&32&&(y.$$scope={dirty:w,ctx:_}),d.$set(y),(!g||w&2)&&He(b,_[1])},i(_){g||(U(u.$$.fragment,_),U(d.$$.fragment,_),g=!0)},o(_){P(u.$$.fragment,_),P(d.$$.fragment,_),g=!1},d(_){_&&E(e),_&&E(r),_&&E(i),oe(u),oe(d),k=!1,S()}}}function Gf(t,e,n){let r="",i="";const s=async()=>{const u=await(await fetch("https://relay.nostr.nu",{headers:{accept:"application/nostr+json"}})).json();n(1,i=JSON.stringify(u,null,2))};function o(l){r=l,n(0,r)}return[r,i,s,o,()=>s()]}class Wf extends Xe{constructor(e){super(),Ze(this,e,Gf,qf,Je,{})}}function Xf(t){let e;return{c(){e=V("Fetch")},l(n){e=z(n,"Fetch")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function Zf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S;function L(_){t[3](_)}let v={type:"text",label:"Address",style:"width: 100%"};return t[0]!==void 0&&(v.value=t[0]),u=new sn({props:v}),ye.push(()=>et(u,"value",L)),u.$on("enter",t[4]),d=new gt({props:{type:"submit",$$slots:{default:[Xf]},$$scope:{ctx:t}}}),{c(){e=O("h2"),n=V("NIP05"),r=M(),i=O("details"),s=O("summary"),o=V("Fetch NIP05 profiles"),a=M(),l=O("form"),ie(u.$$.fragment),c=M(),ie(d.$$.fragment),p=M(),m=O("pre"),b=V(t[1])},l(_){e=R(_,"H2",{});var w=F(e);n=z(w,"NIP05"),w.forEach(E),r=N(_),i=R(_,"DETAILS",{});var h=F(i);s=R(h,"SUMMARY",{});var y=F(s);o=z(y,"Fetch NIP05 profiles"),y.forEach(E),a=N(h),l=R(h,"FORM",{});var B=F(l);ae(u.$$.fragment,B),c=N(B),ae(d.$$.fragment,B),B.forEach(E),p=N(h),m=R(h,"PRE",{});var x=F(m);b=z(x,t[1]),x.forEach(E),h.forEach(E)},m(_,w){D(_,e,w),A(e,n),D(_,r,w),D(_,i,w),A(i,s),A(s,o),A(i,a),A(i,l),se(u,l,null),A(l,c),se(d,l,null),A(i,p),A(i,m),A(m,b),g=!0,k||(S=Ie(l,"submit",mn(t[5])),k=!0)},p(_,[w]){const h={};!f&&w&1&&(f=!0,h.value=_[0],tt(()=>f=!1)),u.$set(h);const y={};w&64&&(y.$$scope={dirty:w,ctx:_}),d.$set(y),(!g||w&2)&&He(b,_[1])},i(_){g||(U(u.$$.fragment,_),U(d.$$.fragment,_),g=!0)},o(_){P(u.$$.fragment,_),P(d.$$.fragment,_),g=!1},d(_){_&&E(e),_&&E(r),_&&E(i),oe(u),oe(d),k=!1,S()}}}function Jf(t,e,n){let r="",i="";const s=async()=>{const u=await qo.queryProfile(r);n(1,i=JSON.stringify(u,null,2))};function o(u){r=u,n(0,r)}function a(u){zn.call(this,t,u)}return[r,i,s,o,a,()=>s()]}class Qf extends Xe{constructor(e){super(),Ze(this,e,Jf,Zf,Je,{})}}const hi=Gr();function Yf(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S=t[5]&&vs(t);function L(h){t[12](h)}let v={textarea:!0,style:"width: 100%"};t[0]!==void 0&&(v.value=t[0]),l=new sn({props:v}),ye.push(()=>et(l,"value",L)),c=new gt({props:{$$slots:{default:[ed]},$$scope:{ctx:t}}});let _=t[3]!==""&&ws(t),w=t[2]&&Es(t);return{c(){S&&S.c(),e=M(),n=O("form"),r=O("p"),i=V("Publish to relay: "),s=O("code"),o=V(t[7]),a=M(),ie(l.$$.fragment),f=M(),ie(c.$$.fragment),d=M(),_&&_.c(),p=M(),w&&w.c(),m=ot()},l(h){S&&S.l(h),e=N(h),n=R(h,"FORM",{});var y=F(n);r=R(y,"P",{});var B=F(r);i=z(B,"Publish to relay: "),s=R(B,"CODE",{});var x=F(s);o=z(x,t[7]),x.forEach(E),B.forEach(E),a=N(y),ae(l.$$.fragment,y),f=N(y),ae(c.$$.fragment,y),y.forEach(E),d=N(h),_&&_.l(h),p=N(h),w&&w.l(h),m=ot()},m(h,y){S&&S.m(h,y),D(h,e,y),D(h,n,y),A(n,r),A(r,i),A(r,s),A(s,o),A(n,a),se(l,n,null),A(n,f),se(c,n,null),D(h,d,y),_&&_.m(h,y),D(h,p,y),w&&w.m(h,y),D(h,m,y),b=!0,g||(k=Ie(n,"submit",mn(t[9])),g=!0)},p(h,y){h[5]?S?S.p(h,y):(S=vs(h),S.c(),S.m(e.parentNode,e)):S&&(S.d(1),S=null),(!b||y&128)&&He(o,h[7]);const B={};!u&&y&1&&(u=!0,B.value=h[0],tt(()=>u=!1)),l.$set(B);const x={};y&16384&&(x.$$scope={dirty:y,ctx:h}),c.$set(x),h[3]!==""?_?_.p(h,y):(_=ws(h),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null),h[2]?w?(w.p(h,y),y&4&&U(w,1)):(w=Es(h),w.c(),U(w,1),w.m(m.parentNode,m)):w&&(qe(),P(w,1,1,()=>{w=null}),Ge())},i(h){b||(U(l.$$.fragment,h),U(c.$$.fragment,h),U(w),b=!0)},o(h){P(l.$$.fragment,h),P(c.$$.fragment,h),P(w),b=!1},d(h){S&&S.d(h),h&&E(e),h&&E(n),oe(l),oe(c),h&&E(d),_&&_.d(h),h&&E(p),w&&w.d(h),h&&E(m),g=!1,k()}}}function $f(t){let e,n;return{c(){e=O("p"),n=V("Please add a private key first")},l(r){e=R(r,"P",{});var i=F(e);n=z(i,"Please add a private key first"),i.forEach(E)},m(r,i){D(r,e,i),A(e,n)},p:nt,i:nt,o:nt,d(r){r&&E(e)}}}function vs(t){let e,n,r,i=t[6]&&_s();return{c(){e=O("p"),n=V("Event successfully published"),i&&i.c(),r=V(".")},l(s){e=R(s,"P",{});var o=F(e);n=z(o,"Event successfully published"),i&&i.l(o),r=z(o,"."),o.forEach(E)},m(s,o){D(s,e,o),A(e,n),i&&i.m(e,null),A(e,r)},p(s,o){s[6]?i||(i=_s(),i.c(),i.m(e,r)):i&&(i.d(1),i=null)},d(s){s&&E(e),i&&i.d()}}}function _s(t){let e=" and seen",n;return{c(){n=V(e)},l(r){n=z(r,e)},m(r,i){D(r,n,i)},d(r){r&&E(n)}}}function ed(t){let e;return{c(){e=V("Prepare event")},l(n){e=z(n,"Prepare event")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function ws(t){let e,n,r,i;return{c(){e=O("p"),n=O("strong"),r=V("ERROR:"),i=V(t[3])},l(s){e=R(s,"P",{});var o=F(e);n=R(o,"STRONG",{});var a=F(n);r=z(a,"ERROR:"),a.forEach(E),i=z(o,t[3]),o.forEach(E)},m(s,o){D(s,e,o),A(e,n),A(n,r),A(e,i)},p(s,o){o&8&&He(i,s[3])},d(s){s&&E(e)}}}function Es(t){let e,n,r,i,s;return i=new gt({props:{disabled:t[4],$$slots:{default:[td]},$$scope:{ctx:t}}}),i.$on("click",t[10]),{c(){e=O("pre"),n=V(t[1]),r=M(),ie(i.$$.fragment)},l(o){e=R(o,"PRE",{});var a=F(e);n=z(a,t[1]),a.forEach(E),r=N(o),ae(i.$$.fragment,o)},m(o,a){D(o,e,a),A(e,n),D(o,r,a),se(i,o,a),s=!0},p(o,a){(!s||a&2)&&He(n,o[1]);const l={};a&16&&(l.disabled=o[4]),a&16384&&(l.$$scope={dirty:a,ctx:o}),i.$set(l)},i(o){s||(U(i.$$.fragment,o),s=!0)},o(o){P(i.$$.fragment,o),s=!1},d(o){o&&E(e),o&&E(r),oe(i,o)}}}function td(t){let e;return{c(){e=V("Publish")},l(n){e=z(n,"Publish")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function nd(t){let e,n,r,i,s,o,a,l,u,f,c,d;const p=[$f,Yf],m=[];function b(g,k){return g[8]===""?0:1}return l=b(t),u=m[l]=p[l](t),{c(){e=O("h2"),n=V("Publish"),r=M(),i=O("details"),s=O("summary"),o=V("Publish events to relays (connect to a relay first)"),a=M(),u.c(),f=M(),c=O("p")},l(g){e=R(g,"H2",{});var k=F(e);n=z(k,"Publish"),k.forEach(E),r=N(g),i=R(g,"DETAILS",{});var S=F(i);s=R(S,"SUMMARY",{});var L=F(s);o=z(L,"Publish events to relays (connect to a relay first)"),L.forEach(E),a=N(S),u.l(S),f=N(S),c=R(S,"P",{}),F(c).forEach(E),S.forEach(E)},m(g,k){D(g,e,k),A(e,n),D(g,r,k),D(g,i,k),A(i,s),A(s,o),A(i,a),m[l].m(i,null),A(i,f),A(i,c),d=!0},p(g,[k]){let S=l;l=b(g),l===S?m[l].p(g,k):(qe(),P(m[S],1,1,()=>{m[S]=null}),Ge(),u=m[l],u?u.p(g,k):(u=m[l]=p[l](g),u.c()),U(u,1),u.m(i,f))},i(g){d||(U(u),d=!0)},o(g){P(u),d=!1},d(g){g&&E(e),g&&E(r),g&&E(i),m[l].d()}}}function rd(t,e,n){let r,i,s;hr(t,hi,k=>n(11,i=k)),hr(t,Nn,k=>n(8,s=k));let o="",a,l="",u=!1,f="",c=!1,d=!1,p=!1;const m=()=>{if(n(3,f=""),typeof i>"u"){n(3,f="#oNMSD1 Connect to a relay in order to publish");return}if(s===""){n(3,f="#gVoA24 Set a private in order to publish");return}if(a=JSON.parse(o.trim()),a.created_at=Math.floor(Date.now()/1e3),a.pubkey=ui(s),!fi(a)){n(3,f="#KBJSkv Invalid event");return}a.id=ci(a),a.sig=Xu(a,s),n(1,l=JSON.stringify(a,null,2)),n(2,u=!0)},b=()=>{n(4,c=!0);const k=i.publish(a);k.on("failed",S=>{n(3,f=`#oPbGD5 Publishing failed with error: ${S}`)}),k.on("ok",()=>{n(5,d=!0),n(0,o=""),a=void 0,n(1,l=""),n(2,u=!1),n(3,f=""),n(4,c=!1)}),k.on("seen",()=>{n(6,p=!0),n(0,o=""),a=void 0,n(1,l=""),n(2,u=!1),n(3,f=""),n(4,c=!1)})};function g(k){o=k,n(0,o)}return t.$$.update=()=>{t.$$.dirty&2048&&n(7,r=typeof i<"u"?i.url:"No relay connected")},[o,l,u,f,c,d,p,r,s,m,b,i,g]}class id extends Xe{constructor(e){super(),Ze(this,e,rd,nd,Je,{})}}function As(t,e,n){const r=t.slice();return r[9]=e[n],r}function Is(t,e,n){const r=t.slice();return r[9]=e[n],r}function sd(t){let e;return{c(){e=V("Connect")},l(n){e=z(n,"Connect")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function ks(t){let e,n;return{c(){e=O("li"),n=V("No notices")},l(r){e=R(r,"LI",{});var i=F(e);n=z(i,"No notices"),i.forEach(E)},m(r,i){D(r,e,i),A(e,n)},p:nt,d(r){r&&E(e)}}}function Ss(t){let e,n,r=t[9]+"",i,s;return{c(){e=O("li"),n=O("code"),i=V(r),s=M()},l(o){e=R(o,"LI",{});var a=F(e);n=R(a,"CODE",{});var l=F(n);i=z(l,r),l.forEach(E),s=N(a),a.forEach(E)},m(o,a){D(o,e,a),A(e,n),A(n,i),A(e,s)},p(o,a){a&2&&r!==(r=o[9]+"")&&He(i,r)},d(o){o&&E(e)}}}function Ls(t){let e,n;return{c(){e=O("li"),n=V("No errors")},l(r){e=R(r,"LI",{});var i=F(e);n=z(i,"No errors"),i.forEach(E)},m(r,i){D(r,e,i),A(e,n)},p:nt,d(r){r&&E(e)}}}function Cs(t){let e,n,r=t[9]+"",i,s;return{c(){e=O("li"),n=O("code"),i=V(r),s=M()},l(o){e=R(o,"LI",{});var a=F(e);n=R(a,"CODE",{});var l=F(n);i=z(l,r),l.forEach(E),s=N(a),a.forEach(E)},m(o,a){D(o,e,a),A(e,n),A(n,i),A(e,s)},p(o,a){a&2&&r!==(r=o[9]+"")&&He(i,r)},d(o){o&&E(e)}}}function od(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S,L,v,_,w,h,y,B,x,H,J,T,G,fe,me,ve;function Z(W){t[5](W)}let C={type:"url",style:"width: 100%"};t[0]!==void 0&&(C.value=t[0]),u=new sn({props:C}),ye.push(()=>et(u,"value",Z)),d=new gt({props:{$$slots:{default:[sd]},$$scope:{ctx:t}}});let K=t[1],Y=[];for(let W=0;W<K.length;W+=1)Y[W]=Ss(Is(t,K,W));let $=null;K.length||($=ks());let we=t[1],le=[];for(let W=0;W<we.length;W+=1)le[W]=Cs(As(t,we,W));let Q=null;return we.length||(Q=Ls()),{c(){e=O("h2"),n=V("Relays"),r=M(),i=O("details"),s=O("summary"),o=V("Connect to relays and monitor notices and errors"),a=M(),l=O("form"),ie(u.$$.fragment),c=M(),ie(d.$$.fragment),p=M(),m=O("p"),b=V("Connecting: "),g=V(t[2]),k=M(),S=O("p"),L=V("Connected: "),v=V(t[3]),_=M(),w=O("h3"),h=V("Notices"),y=M(),B=O("ul");for(let W=0;W<Y.length;W+=1)Y[W].c();$&&$.c(),x=M(),H=O("h3"),J=V("Errors"),T=M(),G=O("ul");for(let W=0;W<le.length;W+=1)le[W].c();Q&&Q.c()},l(W){e=R(W,"H2",{});var ue=F(e);n=z(ue,"Relays"),ue.forEach(E),r=N(W),i=R(W,"DETAILS",{});var te=F(i);s=R(te,"SUMMARY",{});var Ne=F(s);o=z(Ne,"Connect to relays and monitor notices and errors"),Ne.forEach(E),a=N(te),l=R(te,"FORM",{});var re=F(l);ae(u.$$.fragment,re),c=N(re),ae(d.$$.fragment,re),re.forEach(E),p=N(te),m=R(te,"P",{});var ke=F(m);b=z(ke,"Connecting: "),g=z(ke,t[2]),ke.forEach(E),k=N(te),S=R(te,"P",{});var Se=F(S);L=z(Se,"Connected: "),v=z(Se,t[3]),Se.forEach(E),_=N(te),w=R(te,"H3",{});var Qe=F(w);h=z(Qe,"Notices"),Qe.forEach(E),y=N(te),B=R(te,"UL",{});var je=F(B);for(let _e=0;_e<Y.length;_e+=1)Y[_e].l(je);$&&$.l(je),je.forEach(E),x=N(te),H=R(te,"H3",{});var Ue=F(H);J=z(Ue,"Errors"),Ue.forEach(E),T=N(te),G=R(te,"UL",{});var Ye=F(G);for(let _e=0;_e<le.length;_e+=1)le[_e].l(Ye);Q&&Q.l(Ye),Ye.forEach(E),te.forEach(E)},m(W,ue){D(W,e,ue),A(e,n),D(W,r,ue),D(W,i,ue),A(i,s),A(s,o),A(i,a),A(i,l),se(u,l,null),A(l,c),se(d,l,null),A(i,p),A(i,m),A(m,b),A(m,g),A(i,k),A(i,S),A(S,L),A(S,v),A(i,_),A(i,w),A(w,h),A(i,y),A(i,B);for(let te=0;te<Y.length;te+=1)Y[te].m(B,null);$&&$.m(B,null),A(i,x),A(i,H),A(H,J),A(i,T),A(i,G);for(let te=0;te<le.length;te+=1)le[te].m(G,null);Q&&Q.m(G,null),fe=!0,me||(ve=Ie(l,"submit",mn(t[6])),me=!0)},p(W,[ue]){const te={};!f&&ue&1&&(f=!0,te.value=W[0],tt(()=>f=!1)),u.$set(te);const Ne={};if(ue&16384&&(Ne.$$scope={dirty:ue,ctx:W}),d.$set(Ne),(!fe||ue&4)&&He(g,W[2]),(!fe||ue&8)&&He(v,W[3]),ue&2){K=W[1];let re;for(re=0;re<K.length;re+=1){const ke=Is(W,K,re);Y[re]?Y[re].p(ke,ue):(Y[re]=Ss(ke),Y[re].c(),Y[re].m(B,null))}for(;re<Y.length;re+=1)Y[re].d(1);Y.length=K.length,!K.length&&$?$.p(W,ue):K.length?$&&($.d(1),$=null):($=ks(),$.c(),$.m(B,null))}if(ue&2){we=W[1];let re;for(re=0;re<we.length;re+=1){const ke=As(W,we,re);le[re]?le[re].p(ke,ue):(le[re]=Cs(ke),le[re].c(),le[re].m(G,null))}for(;re<le.length;re+=1)le[re].d(1);le.length=we.length,!we.length&&Q?Q.p(W,ue):we.length?Q&&(Q.d(1),Q=null):(Q=Ls(),Q.c(),Q.m(G,null))}},i(W){fe||(U(u.$$.fragment,W),U(d.$$.fragment,W),fe=!0)},o(W){P(u.$$.fragment,W),P(d.$$.fragment,W),fe=!1},d(W){W&&E(e),W&&E(r),W&&E(i),oe(u),oe(d),Mr(Y,W),$&&$.d(),Mr(le,W),Q&&Q.d(),me=!1,ve()}}}function ad(t,e,n){let r="",i,s=[],o=[],a=!1,l=!1;const u=()=>{a||l||(i=tc(r),hi.set(i),i.on("notice",d=>{n(1,s=[...s,d])}),i.on("error",d=>{o=[...o,d]}),i.on("connect",()=>{n(2,a=!1),n(3,l=!0)}),i.on("disconnect",()=>{n(2,a=!1),n(3,l=!1)}),i.connect(),n(2,a=!0))};function f(d){r=d,n(0,r)}return[r,s,a,l,u,f,()=>u()]}class ld extends Xe{constructor(e){super(),Ze(this,e,ad,od,Je,{})}}function Hs(t,e,n){const r=t.slice();return r[21]=e[n],r}function ud(t){let e,n;return e=new gt({props:{$$slots:{default:[fd]},$$scope:{ctx:t}}}),e.$on("click",t[11]),{c(){ie(e.$$.fragment)},l(r){ae(e.$$.fragment,r)},m(r,i){se(e,r,i),n=!0},p(r,i){const s={};i&16777216&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){oe(e,r)}}}function cd(t){let e,n;return e=new gt({props:{$$slots:{default:[dd]},$$scope:{ctx:t}}}),e.$on("click",t[10]),{c(){ie(e.$$.fragment)},l(r){ae(e.$$.fragment,r)},m(r,i){se(e,r,i),n=!0},p(r,i){const s={};i&16777216&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){oe(e,r)}}}function fd(t){let e;return{c(){e=V("Stop firehose")},l(n){e=z(n,"Stop firehose")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function dd(t){let e;return{c(){e=V("Start firehose")},l(n){e=z(n,"Start firehose")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function hd(t){let e;return{c(){e=V("Subscribe to profile")},l(n){e=z(n,"Subscribe to profile")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function xs(t){let e,n=JSON.stringify(t[4],null,2)+"",r,i,s,o,a,l,u=JSON.stringify(JSON.parse(t[4].content),null,2)+"",f;return{c(){e=O("pre"),r=V(n),i=M(),s=O("p"),o=V("Content unpacked"),a=M(),l=O("pre"),f=V(u)},l(c){e=R(c,"PRE",{});var d=F(e);r=z(d,n),d.forEach(E),i=N(c),s=R(c,"P",{});var p=F(s);o=z(p,"Content unpacked"),p.forEach(E),a=N(c),l=R(c,"PRE",{});var m=F(l);f=z(m,u),m.forEach(E)},m(c,d){D(c,e,d),A(e,r),D(c,i,d),D(c,s,d),A(s,o),D(c,a,d),D(c,l,d),A(l,f)},p(c,d){d&16&&n!==(n=JSON.stringify(c[4],null,2)+"")&&He(r,n),d&16&&u!==(u=JSON.stringify(JSON.parse(c[4].content),null,2)+"")&&He(f,u)},d(c){c&&E(e),c&&E(i),c&&E(s),c&&E(a),c&&E(l)}}}function Ts(t){let e,n;return{c(){e=O("p"),n=V("No profile found")},l(r){e=R(r,"P",{});var i=F(e);n=z(i,"No profile found"),i.forEach(E)},m(r,i){D(r,e,i),A(e,n)},d(r){r&&E(e)}}}function pd(t){let e;return{c(){e=V("Subscribe")},l(n){e=z(n,"Subscribe")},m(n,r){D(n,e,r)},d(n){n&&E(e)}}}function Us(t){let e,n;return{c(){e=O("li"),n=V("No events")},l(r){e=R(r,"LI",{});var i=F(e);n=z(i,"No events"),i.forEach(E)},m(r,i){D(r,e,i),A(e,n)},p:nt,d(r){r&&E(e)}}}function Bs(t){let e,n,r=JSON.stringify(t[21],null,2)+"",i;return{c(){e=O("li"),n=O("pre"),i=V(r)},l(s){e=R(s,"LI",{});var o=F(e);n=R(o,"PRE",{});var a=F(n);i=z(a,r),a.forEach(E),o.forEach(E)},m(s,o){D(s,e,o),A(e,n),A(n,i)},p(s,o){o&2&&r!==(r=JSON.stringify(s[21],null,2)+"")&&He(i,r)},d(s){s&&E(e)}}}function md(t){let e,n,r,i,s,o,a,l,u,f,c,d,p,m,b,g,k,S,L,v,_,w,h,y,B,x,H,J,T,G,fe,me,ve,Z,C,K,Y,$,we,le,Q,W,ue,te,Ne,re,ke,Se,Qe,je,Ue;const Ye=[cd,ud],_e=[];function Et(j,ne){return j[0]?1:0}m=Et(t),b=_e[m]=Ye[m](t);function Nt(j){t[12](j)}let $e={label:"Enter a public key, prefix, or npub",style:"width: 100%"};t[3]!==void 0&&($e.value=t[3]),_=new sn({props:$e}),ye.push(()=>et(_,"value",Nt)),y=new gt({props:{$$slots:{default:[hd]},$$scope:{ctx:t}}});let xe=typeof t[4]<"u"&&xs(t),Be=t[2]&&typeof t[4]>"u"&&Ts();function On(j){t[14](j)}let cn={label:"Kind to subscribe to"};t[5]!==void 0&&(cn.value=t[5]),me=new sn({props:cn}),ye.push(()=>et(me,"value",On)),C=new gt({props:{$$slots:{default:[pd]},$$scope:{ctx:t}}});let rt=t[1],Le=[];for(let j=0;j<rt.length;j+=1)Le[j]=Bs(Hs(t,rt,j));let X=null;return rt.length||(X=Us()),{c(){e=O("h2"),n=V("Subscribe"),r=M(),i=O("details"),s=O("summary"),o=V("Subscribe to events of various kinds (connect to a relay first)"),a=M(),l=O("h3"),u=V("Firehose"),f=M(),c=O("p"),d=V(`Subscribe to all events from this relay (stops after 30 seconds or 30
    events)`),p=M(),b.c(),g=M(),k=O("h3"),S=V("Profile"),L=M(),v=O("form"),ie(_.$$.fragment),h=M(),ie(y.$$.fragment),B=M(),xe&&xe.c(),x=M(),Be&&Be.c(),H=M(),J=O("h3"),T=V("Kind"),G=M(),fe=O("form"),ie(me.$$.fragment),Z=M(),ie(C.$$.fragment),K=M(),Y=O("h3"),$=V("Events"),we=M(),le=O("p"),Q=V("Actively subscribed: "),W=V(t[0]),ue=M(),te=O("p"),Ne=V("Got EOSE: "),re=V(t[2]),ke=M(),Se=O("ul");for(let j=0;j<Le.length;j+=1)Le[j].c();X&&X.c()},l(j){e=R(j,"H2",{});var ne=F(e);n=z(ne,"Subscribe"),ne.forEach(E),r=N(j),i=R(j,"DETAILS",{});var ee=F(i);s=R(ee,"SUMMARY",{});var it=F(s);o=z(it,"Subscribe to events of various kinds (connect to a relay first)"),it.forEach(E),a=N(ee),l=R(ee,"H3",{});var lt=F(l);u=z(lt,"Firehose"),lt.forEach(E),f=N(ee),c=R(ee,"P",{});var st=F(c);d=z(st,`Subscribe to all events from this relay (stops after 30 seconds or 30
    events)`),st.forEach(E),p=N(ee),b.l(ee),g=N(ee),k=R(ee,"H3",{});var At=F(k);S=z(At,"Profile"),At.forEach(E),L=N(ee),v=R(ee,"FORM",{});var Ae=F(v);ae(_.$$.fragment,Ae),h=N(Ae),ae(y.$$.fragment,Ae),Ae.forEach(E),B=N(ee),xe&&xe.l(ee),x=N(ee),Be&&Be.l(ee),H=N(ee),J=R(ee,"H3",{});var It=F(J);T=z(It,"Kind"),It.forEach(E),G=N(ee),fe=R(ee,"FORM",{});var Ut=F(fe);ae(me.$$.fragment,Ut),Z=N(Ut),ae(C.$$.fragment,Ut),Ut.forEach(E),K=N(ee),Y=R(ee,"H3",{});var jt=F(Y);$=z(jt,"Events"),jt.forEach(E),we=N(ee),le=R(ee,"P",{});var Vt=F(le);Q=z(Vt,"Actively subscribed: "),W=z(Vt,t[0]),Vt.forEach(E),ue=N(ee),te=R(ee,"P",{});var Bt=F(te);Ne=z(Bt,"Got EOSE: "),re=z(Bt,t[2]),Bt.forEach(E),ke=N(ee),Se=R(ee,"UL",{});var zt=F(Se);for(let ht=0;ht<Le.length;ht+=1)Le[ht].l(zt);X&&X.l(zt),zt.forEach(E),ee.forEach(E)},m(j,ne){D(j,e,ne),A(e,n),D(j,r,ne),D(j,i,ne),A(i,s),A(s,o),A(i,a),A(i,l),A(l,u),A(i,f),A(i,c),A(c,d),A(i,p),_e[m].m(i,null),A(i,g),A(i,k),A(k,S),A(i,L),A(i,v),se(_,v,null),A(v,h),se(y,v,null),A(i,B),xe&&xe.m(i,null),A(i,x),Be&&Be.m(i,null),A(i,H),A(i,J),A(J,T),A(i,G),A(i,fe),se(me,fe,null),A(fe,Z),se(C,fe,null),A(i,K),A(i,Y),A(Y,$),A(i,we),A(i,le),A(le,Q),A(le,W),A(i,ue),A(i,te),A(te,Ne),A(te,re),A(i,ke),A(i,Se);for(let ee=0;ee<Le.length;ee+=1)Le[ee].m(Se,null);X&&X.m(Se,null),Qe=!0,je||(Ue=[Ie(v,"submit",mn(t[13])),Ie(fe,"submit",mn(t[15]))],je=!0)},p(j,[ne]){let ee=m;m=Et(j),m===ee?_e[m].p(j,ne):(qe(),P(_e[ee],1,1,()=>{_e[ee]=null}),Ge(),b=_e[m],b?b.p(j,ne):(b=_e[m]=Ye[m](j),b.c()),U(b,1),b.m(i,g));const it={};!w&&ne&8&&(w=!0,it.value=j[3],tt(()=>w=!1)),_.$set(it);const lt={};ne&16777216&&(lt.$$scope={dirty:ne,ctx:j}),y.$set(lt),typeof j[4]<"u"?xe?xe.p(j,ne):(xe=xs(j),xe.c(),xe.m(i,x)):xe&&(xe.d(1),xe=null),j[2]&&typeof j[4]>"u"?Be||(Be=Ts(),Be.c(),Be.m(i,H)):Be&&(Be.d(1),Be=null);const st={};!ve&&ne&32&&(ve=!0,st.value=j[5],tt(()=>ve=!1)),me.$set(st);const At={};if(ne&16777216&&(At.$$scope={dirty:ne,ctx:j}),C.$set(At),(!Qe||ne&1)&&He(W,j[0]),(!Qe||ne&4)&&He(re,j[2]),ne&2){rt=j[1];let Ae;for(Ae=0;Ae<rt.length;Ae+=1){const It=Hs(j,rt,Ae);Le[Ae]?Le[Ae].p(It,ne):(Le[Ae]=Bs(It),Le[Ae].c(),Le[Ae].m(Se,null))}for(;Ae<Le.length;Ae+=1)Le[Ae].d(1);Le.length=rt.length,!rt.length&&X?X.p(j,ne):rt.length?X&&(X.d(1),X=null):(X=Us(),X.c(),X.m(Se,null))}},i(j){Qe||(U(b),U(_.$$.fragment,j),U(y.$$.fragment,j),U(me.$$.fragment,j),U(C.$$.fragment,j),Qe=!0)},o(j){P(b),P(_.$$.fragment,j),P(y.$$.fragment,j),P(me.$$.fragment,j),P(C.$$.fragment,j),Qe=!1},d(j){j&&E(e),j&&E(r),j&&E(i),_e[m].d(),oe(_),oe(y),xe&&xe.d(),Be&&Be.d(),oe(me),oe(C),Mr(Le,j),X&&X.d(),je=!1,Ht(Ue)}}}function gd(t,e,n){let r;hi.subscribe(y=>r=y);let i,s=!1,o=[],a=!1,l;const u=()=>{typeof i<"u"&&i.unsub(),n(0,s=!1),n(2,a=!1)},f=()=>{u(),i=void 0,typeof l<"u"&&clearTimeout(l)},c=()=>{l=setTimeout(u,3e4)},d=()=>{f(),i=r.sub([{since:Math.floor(Date.now()/1e3)}]),n(0,s=!0),i.on("event",y=>{n(1,o=[...o,y]),o.length>=30&&u()}),i.on("eose",()=>{n(2,a=!0)}),c()};let p="",m;const b=()=>{if(typeof r>"u")return;let y=p;if(p.startsWith("npub")){const{data:x}=hn.decode(p);y=x}const B=r.sub([{authors:[y],kinds:[0]}]);B.on("event",x=>{n(4,m=x),B.unsub()}),B.on("eose",()=>{n(2,a=!0),B.unsub()})};let g="";const k=()=>{g.length===0||typeof r>"u"||(f(),i=r.sub([{kinds:[parseInt(g)]}]),i.on("event",y=>{n(1,o=[...o,y]),o.length>=30&&u()}),i.on("eose",()=>{n(2,a=!0)}),c())},S=()=>d(),L=()=>u();function v(y){p=y,n(3,p)}const _=()=>{b()};function w(y){g=y,n(5,g)}return[s,o,a,p,m,g,u,d,b,k,S,L,v,_,w,()=>{k()}]}class bd extends Xe{constructor(e){super(),Ze(this,e,gd,md,Je,{})}}function yd(t){let e,n,r,i,s,o,a,l,u,f,c,d,p;return n=new zf({}),i=new Qf({}),o=new Wf({}),l=new ld({}),f=new bd({}),d=new id({}),{c(){e=O("div"),ie(n.$$.fragment),r=M(),ie(i.$$.fragment),s=M(),ie(o.$$.fragment),a=M(),ie(l.$$.fragment),u=M(),ie(f.$$.fragment),c=M(),ie(d.$$.fragment),this.h()},l(m){e=R(m,"DIV",{class:!0});var b=F(e);ae(n.$$.fragment,b),r=N(b),ae(i.$$.fragment,b),s=N(b),ae(o.$$.fragment,b),a=N(b),ae(l.$$.fragment,b),u=N(b),ae(f.$$.fragment,b),c=N(b),ae(d.$$.fragment,b),b.forEach(E),this.h()},h(){vt(e,"class","container svelte-faxcmn")},m(m,b){D(m,e,b),se(n,e,null),A(e,r),se(i,e,null),A(e,s),se(o,e,null),A(e,a),se(l,e,null),A(e,u),se(f,e,null),A(e,c),se(d,e,null),p=!0},p:nt,i(m){p||(U(n.$$.fragment,m),U(i.$$.fragment,m),U(o.$$.fragment,m),U(l.$$.fragment,m),U(f.$$.fragment,m),U(d.$$.fragment,m),p=!0)},o(m){P(n.$$.fragment,m),P(i.$$.fragment,m),P(o.$$.fragment,m),P(l.$$.fragment,m),P(f.$$.fragment,m),P(d.$$.fragment,m),p=!1},d(m){m&&E(e),oe(n),oe(i),oe(o),oe(l),oe(f),oe(d)}}}class kd extends Xe{constructor(e){super(),Ze(this,e,null,yd,Je,{})}}export{kd as default};
