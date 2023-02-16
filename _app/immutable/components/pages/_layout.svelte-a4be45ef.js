import{S as J,i as K,s as Q,D as x,E as B,k as ct,l as pt,m as ut,h as O,F as k,b as V,G as W,H as F,I as $,J as tt,K as et,L as ft,M as dt,f as y,t as E,N as ht,O as N,P as _t,Q as Ht,o as Mt,R as mt,T as vt,v as gt,U as rt,x as j,a as Pt,y as Y,c as zt,z as X,A as G,q as wt,r as kt}from"../../chunks/index-3cc77633.js";import{_ as q,a as nt,M as Ft,c as U,u as St,f as Tt,d as Nt,b as T}from"../../chunks/classAdderBuilder-613bd1e9.js";/**
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
 */var C={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},w={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Ut={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var st=function(a){q(t,a);function t(e){return a.call(this,nt(nt({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Ft);/**
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
 */var z=0,Z=function(a){q(t,a);function t(e){var s=a.call(this,e)||this;return s.wasDocked=!0,s.isDockedShowing=!0,s.currentAppBarOffsetTop=0,s.isCurrentlyBeingResized=!1,s.resizeThrottleId=z,s.resizeDebounceId=z,s.lastScrollPosition=s.adapter.getViewportScrollY(),s.topAppBarHeight=s.adapter.getTopAppBarHeight(),s}return t.prototype.destroy=function(){a.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),s=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=s,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=z,e.throttledResizeHandler()},w.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=z},w.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,s=this.currentAppBarOffsetTop<0,l=this.currentAppBarOffsetTop>e,r=s&&l;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==l)return this.isDockedShowing=l,!0}else return this.wasDocked=!0,!0;return r},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-w.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(st);/**
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
 */var Vt=function(a){q(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(C.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(C.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(Z);/**
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
 */var jt=function(a){q(t,a);function t(e){var s=a.call(this,e)||this;return s.collapsed=!1,s.isAlwaysCollapsed=!1,s}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){a.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(C.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(C.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(C.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(C.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(st);const{window:lt}=vt;function Yt(a){let t,e,s,l,r,c,_;const u=a[22].default,f=x(u,a,a[21],null);let m=[{class:e=U({[a[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":a[4]==="short","mdc-top-app-bar--short-collapsed":a[0],"mdc-top-app-bar--fixed":a[4]==="fixed","smui-top-app-bar--static":a[4]==="static","smui-top-app-bar--color-secondary":a[5]==="secondary","mdc-top-app-bar--prominent":a[6],"mdc-top-app-bar--dense":a[7],...a[11]})},{style:s=Object.entries(a[12]).map(it).concat([a[3]]).join(" ")},a[15]],i={};for(let o=0;o<m.length;o+=1)i=B(i,m[o]);return{c(){t=ct("header"),f&&f.c(),this.h()},l(o){t=pt(o,"HEADER",{class:!0,style:!0});var p=ut(t);f&&f.l(p),p.forEach(O),this.h()},h(){k(t,i)},m(o,p){V(o,t,p),f&&f.m(t,null),a[25](t),r=!0,c||(_=[W(lt,"resize",a[23]),W(lt,"scroll",a[24]),F(l=St.call(null,t,a[1])),F(a[13].call(null,t)),W(t,"SMUITopAppBarIconButton:nav",a[26])],c=!0)},p(o,p){f&&f.p&&(!r||p[0]&2097152)&&$(f,u,o,o[21],r?et(u,o[21],p,null):tt(o[21]),null),k(t,i=ft(m,[(!r||p[0]&2293&&e!==(e=U({[o[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":o[4]==="short","mdc-top-app-bar--short-collapsed":o[0],"mdc-top-app-bar--fixed":o[4]==="fixed","smui-top-app-bar--static":o[4]==="static","smui-top-app-bar--color-secondary":o[5]==="secondary","mdc-top-app-bar--prominent":o[6],"mdc-top-app-bar--dense":o[7],...o[11]})))&&{class:e},(!r||p[0]&4104&&s!==(s=Object.entries(o[12]).map(it).concat([o[3]]).join(" ")))&&{style:s},p[0]&32768&&o[15]])),l&&dt(l.update)&&p[0]&2&&l.update.call(null,o[1])},i(o){r||(y(f,o),r=!0)},o(o){E(f,o),r=!1},d(o){o&&O(t),f&&f.d(o),a[25](null),c=!1,ht(_)}}}const it=([a,t])=>`${a}: ${t};`;function Xt(a,t,e){const s=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let l=N(t,s),{$$slots:r={},$$scope:c}=t;const _=Tt(_t());let u=()=>{};function f(n){return n===u}let{use:m=[]}=t,{class:i=""}=t,{style:o=""}=t,{variant:p="standard"}=t,{color:L="primary"}=t,{collapsed:d=u}=t;const At=!f(d)&&!!d;f(d)&&(d=!1);let{prominent:D=!1}=t,{dense:R=!1}=t,{scrollTarget:S=void 0}=t,A,h,g={},b={},H,bt=Ht({variant:p,prominent:D,dense:R},n=>{e(18,H=n)}),I,M=p;Mt(()=>(e(9,h=at()),h.init(),()=>{h.destroy()}));function at(){const n={static:st,short:jt,fixed:Vt,standard:Z}[p]||Z;return new n({hasClass:Ct,addClass:yt,removeClass:Et,setStyle:Bt,getTopAppBarHeight:()=>A.clientHeight,notifyNavigationIconClicked:()=>Nt(A,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>A.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Ct(n){return n in g?g[n]:ot().classList.contains(n)}function yt(n){g[n]||e(11,g[n]=!0,g)}function Et(n){(!(n in g)||g[n])&&e(11,g[n]=!1,g)}function Bt(n,P){b[n]!=P&&(P===""||P==null?(delete b[n],e(12,b),e(20,M),e(4,p),e(9,h)):e(12,b[n]=P,b))}function v(){h&&(h.handleTargetScroll(),p==="short"&&e(0,d="isCollapsed"in h&&h.isCollapsed))}function Ot(){return bt}function ot(){return A}const It=()=>p!=="short"&&p!=="fixed"&&h&&h.handleWindowResize(),Lt=()=>S==null&&v();function Dt(n){gt[n?"unshift":"push"](()=>{A=n,e(10,A)})}const Rt=()=>h&&h.handleNavigationClick();return a.$$set=n=>{t=B(B({},t),mt(n)),e(15,l=N(t,s)),"use"in n&&e(1,m=n.use),"class"in n&&e(2,i=n.class),"style"in n&&e(3,o=n.style),"variant"in n&&e(4,p=n.variant),"color"in n&&e(5,L=n.color),"collapsed"in n&&e(0,d=n.collapsed),"prominent"in n&&e(6,D=n.prominent),"dense"in n&&e(7,R=n.dense),"scrollTarget"in n&&e(8,S=n.scrollTarget),"$$scope"in n&&e(21,c=n.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&262352&&H&&H({variant:p,prominent:D,dense:R}),a.$$.dirty[0]&1049104&&M!==p&&h&&(e(20,M=p),h.destroy(),e(11,g={}),e(12,b={}),e(9,h=at()),h.init()),a.$$.dirty[0]&528&&h&&p==="short"&&"setAlwaysCollapsed"in h&&h.setAlwaysCollapsed(At),a.$$.dirty[0]&524544&&I!==S&&(I&&I.removeEventListener("scroll",v),S&&S.addEventListener("scroll",v),e(19,I=S))},[d,m,i,o,p,L,D,R,S,h,A,g,b,_,v,l,Ot,ot,H,I,M,c,r,It,Lt,Dt,Rt]}class Gt extends J{constructor(t){super(),K(this,t,Xt,Yt,Q,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const qt=T({class:"mdc-top-app-bar__row",tag:"div"});function Wt(a){let t,e,s,l,r,c;const _=a[9].default,u=x(_,a,a[8],null);let f=[{class:e=U({[a[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":a[2]==="start","mdc-top-app-bar__section--align-end":a[2]==="end"})},a[3]?{role:"toolbar"}:{},a[6]],m={};for(let i=0;i<f.length;i+=1)m=B(m,f[i]);return{c(){t=ct("section"),u&&u.c(),this.h()},l(i){t=pt(i,"SECTION",{class:!0});var o=ut(t);u&&u.l(o),o.forEach(O),this.h()},h(){k(t,m)},m(i,o){V(i,t,o),u&&u.m(t,null),a[10](t),l=!0,r||(c=[F(s=St.call(null,t,a[0])),F(a[5].call(null,t))],r=!0)},p(i,[o]){u&&u.p&&(!l||o&256)&&$(u,_,i,i[8],l?et(_,i[8],o,null):tt(i[8]),null),k(t,m=ft(f,[(!l||o&6&&e!==(e=U({[i[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":i[2]==="start","mdc-top-app-bar__section--align-end":i[2]==="end"})))&&{class:e},o&8&&(i[3]?{role:"toolbar"}:{}),o&64&&i[6]])),s&&dt(s.update)&&o&1&&s.update.call(null,i[0])},i(i){l||(y(u,i),l=!0)},o(i){E(u,i),l=!1},d(i){i&&O(t),u&&u.d(i),a[10](null),r=!1,ht(c)}}}function Zt(a,t,e){const s=["use","class","align","toolbar","getElement"];let l=N(t,s),{$$slots:r={},$$scope:c}=t;const _=Tt(_t());let{use:u=[]}=t,{class:f=""}=t,{align:m="start"}=t,{toolbar:i=!1}=t,o;rt("SMUI:icon-button:context",i?"top-app-bar:action":"top-app-bar:navigation"),rt("SMUI:button:context",i?"top-app-bar:action":"top-app-bar:navigation");function p(){return o}function L(d){gt[d?"unshift":"push"](()=>{o=d,e(4,o)})}return a.$$set=d=>{t=B(B({},t),mt(d)),e(6,l=N(t,s)),"use"in d&&e(0,u=d.use),"class"in d&&e(1,f=d.class),"align"in d&&e(2,m=d.align),"toolbar"in d&&e(3,i=d.toolbar),"$$scope"in d&&e(8,c=d.$$scope)},[u,f,m,i,o,_,l,p,c,r,L]}class Jt extends J{constructor(t){super(),K(this,t,Zt,Wt,Q,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const Kt=T({class:"mdc-top-app-bar__title",tag:"span"});T({class:"mdc-deprecated-list-item__text",tag:"span"});T({class:"mdc-deprecated-list-item__primary-text",tag:"span"});T({class:"mdc-deprecated-list-item__secondary-text",tag:"span"});T({class:"mdc-deprecated-list-item__meta",tag:"span"});T({class:"mdc-deprecated-list-group",tag:"div"});T({class:"mdc-deprecated-list-group__subheader",tag:"h3"});function Qt(a){let t;return{c(){t=wt("Nostr Toolkit")},l(e){t=kt(e,"Nostr Toolkit")},m(e,s){V(e,t,s)},d(e){e&&O(t)}}}function xt(a){let t,e;return t=new Kt({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){j(t.$$.fragment)},l(s){Y(t.$$.fragment,s)},m(s,l){X(t,s,l),e=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){e||(y(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){G(t,s)}}}function $t(a){let t,e;return t=new Jt({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),{c(){j(t.$$.fragment)},l(s){Y(t.$$.fragment,s)},m(s,l){X(t,s,l),e=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){e||(y(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){G(t,s)}}}function te(a){let t,e;return t=new qt({props:{$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){j(t.$$.fragment)},l(s){Y(t.$$.fragment,s)},m(s,l){X(t,s,l),e=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){e||(y(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){G(t,s)}}}function ee(a){let t,e,s;t=new Gt({props:{variant:"fixed",$$slots:{default:[te]},$$scope:{ctx:a}}});const l=a[0].default,r=x(l,a,a[1],null);return{c(){j(t.$$.fragment),e=Pt(),r&&r.c()},l(c){Y(t.$$.fragment,c),e=zt(c),r&&r.l(c)},m(c,_){X(t,c,_),V(c,e,_),r&&r.m(c,_),s=!0},p(c,[_]){const u={};_&2&&(u.$$scope={dirty:_,ctx:c}),t.$set(u),r&&r.p&&(!s||_&2)&&$(r,l,c,c[1],s?et(l,c[1],_,null):tt(c[1]),null)},i(c){s||(y(t.$$.fragment,c),y(r,c),s=!0)},o(c){E(t.$$.fragment,c),E(r,c),s=!1},d(c){G(t,c),c&&O(e),r&&r.d(c)}}}function se(a,t,e){let{$$slots:s={},$$scope:l}=t;return a.$$set=r=>{"$$scope"in r&&e(1,l=r.$$scope)},[s,l]}class re extends J{constructor(t){super(),K(this,t,se,ee,Q,{})}}export{re as default};
