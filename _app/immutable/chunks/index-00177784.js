function _(){}function W(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function P(){return Object.create(null)}function g(t){t.forEach(q)}function A(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(K(n,e))}function _t(t,n,e,i){if(t){const r=z(t,n,e,i);return t[0](r)}}function z(t,n,e,i){return t[1]&&i?W(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,l){if(r){const c=z(n,e,i,l);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function bt(t){const n={};for(const e in t)n[e]=!0;return n}function gt(t,n,e){return t.set(e),n}function xt(t){return t&&A(t.destroy)?t.destroy:_}let k=!1;function Q(){k=!0}function R(){k=!1}function U(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const o=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:U(1,r,$=>n[e[$]].claim_order,o))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const l=[],c=[];let u=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(l.push(n[s-1]);u>=s;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);l.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<l.length&&c[s].claim_order>=l[o].claim_order;)o++;const a=o<l.length?l[o]:null;t.insertBefore(c[s],a)}}function X(t,n){if(k){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function $t(t,n,e){k&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function kt(){return C("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function jt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function vt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function T(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function St(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:T(t,i,n[i])}function At(t,n){for(const e in n)T(t,e,n[e])}function Ct(t,n){Object.keys(n).forEach(e=>{nt(t,e,n[e])})}function nt(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:T(t,n,e)}function et(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){it(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function L(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||l.push(u.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Tt(t,n,e){return L(t,n,e,Z)}function Ot(t,n,e){return L(t,n,e,tt)}function rt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Mt(t){return rt(t," ")}function Pt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Dt(t,n){t.value=n??""}function qt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function zt(t,n){return new t(n)}let b;function y(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}function Bt(t){x().$$.on_mount.push(t)}function Lt(t){x().$$.after_update.push(t)}function Ft(t){x().$$.on_destroy.push(t)}function Ht(t,n){return x().$$.context.set(t,n),n}function It(t){return x().$$.context.get(t)}function Wt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const p=[],D=[],w=[],j=[],F=Promise.resolve();let v=!1;function H(){v||(v=!0,F.then(I))}function Gt(){return H(),F}function S(t){w.push(t)}function Jt(t){j.push(t)}const N=new Set;let h=0;function I(){if(h!==0)return;const t=b;do{try{for(;h<p.length;){const n=p[h];h++,y(n),st(n.$$)}}catch(n){throw p.length=0,h=0,n}for(y(null),p.length=0,h=0;D.length;)D.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];N.has(e)||(N.add(e),e())}w.length=0}while(p.length);for(;j.length;)j.pop()();v=!1,N.clear(),y(t)}function st(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const E=new Set;let d;function Kt(){d={r:0,c:[],p:d}}function Qt(){d.r||g(d.c),d=d.p}function ct(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Rt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Ut=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Vt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=n[l];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(e[s]=u[s],r[s]=1);t[l]=u}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Xt(t){return typeof t=="object"&&t!==null?t:{}}function Yt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Zt(t){t&&t.c()}function tn(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||S(()=>{const c=t.$$.on_mount.map(q).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),l.forEach(S)}function ut(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(p.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nn(t,n,e,i,r,l,c,u=[-1]){const s=b;y(t);const o=t.$$={fragment:null,ctx:[],props:l,update:_,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:P(),dirty:u,skip_bound:!1,root:n.target||s.$$.root};c&&c(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,$,...O)=>{const M=O.length?O[0]:$;return o.ctx&&r(o.ctx[f],o.ctx[f]=M)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](M),a&&lt(t,f)),$}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){Q();const f=et(n.target);o.fragment&&o.fragment.l(f),f.forEach(Y)}else o.fragment&&o.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),R(),I()}y(s)}class en{$destroy(){ut(this,1),this.$destroy=_}$on(n,e){if(!A(e))return _;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const m=[];function rn(t,n){return{subscribe:ft(t,n).subscribe}}function ft(t,n=_){let e;const i=new Set;function r(u){if(G(t,u)&&(t=u,e)){const s=!m.length;for(const o of i)o[1](),m.push(o,t);if(s){for(let o=0;o<m.length;o+=2)m[o][0](m[o+1]);m.length=0}}}function l(u){r(u(t))}function c(u,s=_){const o=[u,s];return i.add(o),i.size===1&&(e=n(r)||_),u(t),()=>{i.delete(o),i.size===0&&(e(),e=null)}}return{set:r,update:l,subscribe:c}}export{_ as $,ut as A,Gt as B,ft as C,_t as D,W as E,St as F,Nt as G,xt as H,ht as I,mt as J,dt as K,Vt as L,A as M,g as N,yt as O,x as P,rn as Q,pt as R,en as S,Ut as T,Xt as U,It as V,tt as W,Ot as X,At as Y,Ht as Z,Ft as _,Et as a,Wt as a0,jt as a1,vt as a2,Ct as a3,X as a4,at as a5,gt as a6,Dt as a7,bt as a8,Yt as a9,Jt as aa,wt as ab,$t as b,Mt as c,Qt as d,kt as e,ct as f,Kt as g,Y as h,nn as i,Lt as j,Z as k,Tt as l,et as m,T as n,Bt as o,qt as p,C as q,rt as r,G as s,Rt as t,Pt as u,D as v,zt as w,Zt as x,tn as y,ot as z};