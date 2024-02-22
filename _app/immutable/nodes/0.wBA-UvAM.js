import{r as T,u as ce,s as K,v as te,a as I,c as j,i as v,w as R,x as ne,y as se,z as le,d as g,A as _e,B as P,e as O,C as Z,q as G,D as X,E as Be,f as M,g as A,h as B,j as b,F as x,G as D,o as pe,H as Le,I as Se,J as He,K as me,L as Re,M as oe,N as de,l as Ve,m as Ue,n as qe}from"../chunks/scheduler.N2tVA6Cn.js";import{n as Ae,l as De,f as ze,h as Ke,S as Q,i as W,a as E,g as U,t as C,c as q,b as L,d as V,m as S,e as H,j as Pe,k as Ge}from"../chunks/index.F8-NL695.js";/* empty css                          */import{h as he,u as Fe}from"../chunks/await_block.qGf0cQZo.js";import{e as ee,u as Ie,o as Je,f as Qe}from"../chunks/each.xo_Rzlzl.js";import{g as F,a as J}from"../chunks/spread.rEx3vLA9.js";import{m as We,t as re,e as ie,c as Xe,a as Ye}from"../chunks/store.uasmQUFa.js";import{t as fe,u as Ze,g as xe,l as et,a as tt,i as nt}from"../chunks/service.AbFyLcxP.js";import{c as st,f as lt,a as ot}from"../chunks/index.hme_Z5oG.js";import{w as rt}from"../chunks/index.Br-J-IE8.js";import{g as it}from"../chunks/navigation.ZIt71G2M.js";function at(o,e,n,r){if(!e)return T;const t=o.getBoundingClientRect();if(e.left===t.left&&e.right===t.right&&e.top===t.top&&e.bottom===t.bottom)return T;const{delay:s=0,duration:f=300,easing:l=ce,start:i=Ae()+s,end:a=i+f,tick:c=T,css:u}=n(o,{from:e,to:t},r);let _=!0,d=!1,h;function $(){u&&(h=ze(o,0,1,f,s,l,u)),s||(d=!0)}function m(){u&&Ke(o,h),_=!1}return De(k=>{if(!d&&k>=i&&(d=!0),d&&k>=a&&(c(1,0),m()),!_)return!1;if(d){const y=k-i,w=0+1*l(y/f);c(w,1-w)}return!0}),$(),c(0,1),m}function ft(o){const e=getComputedStyle(o);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,t=o.getBoundingClientRect();o.style.position="absolute",o.style.width=n,o.style.height=r,je(o,t)}}function je(o,e){const n=o.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(o),t=r.transform==="none"?"":r.transform;o.style.transform=`${t} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}const ut=!0,tn=Object.freeze(Object.defineProperty({__proto__:null,prerender:ut},Symbol.toStringTag,{value:"Module"}));function ge(o,e,n){const r=o.slice();return r[13]=e[n],r[15]=n,r}const ct=o=>({}),$e=o=>({}),_t=o=>({}),ke=o=>({});function be(o){let e;const n=o[6].backdrop,r=te(n,o,o[5],ke);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,s){r&&r.m(t,s),e=!0},p(t,s){r&&r.p&&(!e||s&32)&&ne(r,n,t,t[5],e?le(n,t[5],s,_t):se(t[5]),ke)},i(t){e||(E(r,t),e=!0)},o(t){C(r,t),e=!1},d(t){r&&r.d(t)}}}function pt(o){let e,n,r;const t=[{isOpen:o[15]===o[0].length-1&&!o[1]},o[13].props];var s=o[13].component;function f(l,i){let a={};if(i!==void 0&&i&3)a=F(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&J(l[13].props)]);else for(let c=0;c<t.length;c+=1)a=X(a,t[c]);return{props:a}}return s&&(e=G(s,f(o)),e.$on("introstart",o[9]),e.$on("outroend",o[10])),{c(){e&&L(e.$$.fragment),n=O()},l(l){e&&V(e.$$.fragment,l),n=O()},m(l,i){e&&S(e,l,i),v(l,n,i),r=!0},p(l,i){if(i&1&&s!==(s=l[13].component)){if(e){U();const a=e;C(a.$$.fragment,1,0,()=>{H(a,1)}),q()}s?(e=G(s,f(l,i)),e.$on("introstart",l[9]),e.$on("outroend",l[10]),L(e.$$.fragment),E(e.$$.fragment,1),S(e,n.parentNode,n)):e=null}else if(s){const a=i&3?F(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&J(l[13].props)]):{};e.$set(a)}},i(l){r||(e&&E(e.$$.fragment,l),r=!0)},o(l){e&&C(e.$$.fragment,l),r=!1},d(l){l&&g(n),e&&H(e,l)}}}function mt(o){let e,n,r,t={ctx:o,current:null,token:null,hasCatch:!1,pending:gt,then:ht,catch:dt,value:16,blocks:[,,,]};return he(n=ye(o[13].component),t),{c(){e=O(),t.block.c()},l(s){e=O(),t.block.l(s)},m(s,f){v(s,e,f),t.block.m(s,t.anchor=f),t.mount=()=>e.parentNode,t.anchor=e,r=!0},p(s,f){o=s,t.ctx=o,f&1&&n!==(n=ye(o[13].component))&&he(n,t)||Fe(t,o,f)},i(s){r||(E(t.block),r=!0)},o(s){for(let f=0;f<3;f+=1){const l=t.blocks[f];C(l)}r=!1},d(s){s&&g(e),t.block.d(s),t.token=null,t=null}}}function dt(o){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function ht(o){let e,n,r;const t=[{isOpen:o[15]===o[0].length-1&&!o[1]},o[13].props];var s=o[16];function f(l,i){let a={};if(i!==void 0&&i&3)a=F(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&J(l[13].props)]);else for(let c=0;c<t.length;c+=1)a=X(a,t[c]);return{props:a}}return s&&(e=G(s,f(o)),e.$on("introstart",o[7]),e.$on("outroend",o[8])),{c(){e&&L(e.$$.fragment),n=I()},l(l){e&&V(e.$$.fragment,l),n=j(l)},m(l,i){e&&S(e,l,i),v(l,n,i),r=!0},p(l,i){if(i&1&&s!==(s=l[16])){if(e){U();const a=e;C(a.$$.fragment,1,0,()=>{H(a,1)}),q()}s?(e=G(s,f(l,i)),e.$on("introstart",l[7]),e.$on("outroend",l[8]),L(e.$$.fragment),E(e.$$.fragment,1),S(e,n.parentNode,n)):e=null}else if(s){const a=i&3?F(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&J(l[13].props)]):{};e.$set(a)}},i(l){r||(e&&E(e.$$.fragment,l),r=!0)},o(l){e&&C(e.$$.fragment,l),r=!1},d(l){l&&g(n),e&&H(e,l)}}}function gt(o){let e,n;const r=o[6].loading,t=te(r,o,o[5],$e);return{c(){t&&t.c(),e=I()},l(s){t&&t.l(s),e=j(s)},m(s,f){t&&t.m(s,f),v(s,e,f),n=!0},p(s,f){t&&t.p&&(!n||f&32)&&ne(t,r,s,s[5],n?le(r,s[5],f,ct):se(s[5]),$e)},i(s){n||(E(t,s),n=!0)},o(s){C(t,s),n=!1},d(s){s&&g(e),t&&t.d(s)}}}function ve(o,e){let n,r,t,s,f,l;const i=[mt,pt],a=[];function c(u,_){return _&1&&(r=null),r==null&&(r=!!bt(u[13].component)),r?0:1}return t=c(e,-1),s=a[t]=i[t](e),{key:o,first:null,c(){n=O(),s.c(),f=O(),this.h()},l(u){n=O(),s.l(u),f=O(),this.h()},h(){this.first=n},m(u,_){v(u,n,_),a[t].m(u,_),v(u,f,_),l=!0},p(u,_){e=u;let d=t;t=c(e,_),t===d?a[t].p(e,_):(U(),C(a[d],1,1,()=>{a[d]=null}),q(),s=a[t],s?s.p(e,_):(s=a[t]=i[t](e),s.c()),E(s,1),s.m(f.parentNode,f))},i(u){l||(E(s),l=!0)},o(u){C(s),l=!1},d(u){u&&(g(n),g(f)),a[t].d(u)}}}function $t(o){let e=[],n=new Map,r,t,s=ee(o[0]);const f=l=>l[15];for(let l=0;l<s.length;l+=1){let i=ge(o,s,l),a=f(i);n.set(a,e[l]=ve(a,i))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=O()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);r=O()},m(l,i){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,i);v(l,r,i),t=!0},p(l,i){i&39&&(s=ee(l[0]),U(),e=Ie(e,i,f,1,l,s,n,r.parentNode,Je,ve,r,ge),q())},i(l){if(!t){for(let i=0;i<s.length;i+=1)E(e[i]);t=!0}},o(l){for(let i=0;i<e.length;i+=1)C(e[i]);t=!1},d(l){l&&g(r);for(let i=0;i<e.length;i+=1)e[i].d(l)}}}function kt(o){let e,n,r,t,s=o[0].length>0&&be(o);const f=o[6].default,l=te(f,o,o[5],null),i=l||$t(o);return{c(){s&&s.c(),e=I(),i&&i.c()},l(a){s&&s.l(a),e=j(a),i&&i.l(a)},m(a,c){s&&s.m(a,c),v(a,e,c),i&&i.m(a,c),n=!0,r||(t=[R(window,"keydown",o[3]),R(window,"keyup",o[4])],r=!0)},p(a,[c]){a[0].length>0?s?(s.p(a,c),c&1&&E(s,1)):(s=be(a),s.c(),E(s,1),s.m(e.parentNode,e)):s&&(U(),C(s,1,1,()=>{s=null}),q()),l?l.p&&(!n||c&32)&&ne(l,f,a,a[5],n?le(f,a[5],c,null):se(a[5]),null):i&&i.p&&(!n||c&39)&&i.p(a,n?c:-1)},i(a){n||(E(s),E(i,a),n=!0)},o(a){C(s),C(i,a),n=!1},d(a){a&&g(e),s&&s.d(a),i&&i.d(a),r=!1,_e(t)}}}function bt(o){return typeof o.prototype>"u"}async function ye(o){return o().then(e=>e.default)}function vt(o,e,n){let r,t,s;P(o,We,m=>n(0,r=m)),P(o,re,m=>n(1,t=m)),P(o,ie,m=>n(2,s=m));let{$$slots:f={},$$scope:l}=e;const i=["Escape"];let a=!0;const c=m=>{i.includes(m.key)&&a&&(a=!1,Xe()&&m.preventDefault())},u=m=>{!a&&i.includes(m.key)&&(a=!0,m.preventDefault())},_=()=>{Z(ie,s=!0,s)},d=()=>{Z(re,t=!1,t)},h=()=>{Z(ie,s=!0,s)},$=()=>{Z(re,t=!1,t)};return o.$$set=m=>{"$$scope"in m&&n(5,l=m.$$scope)},[r,t,s,c,u,l,f,_,d,h,$]}class yt extends Q{constructor(e){super(),W(this,e,vt,kt,K,{})}}function wt(o,{from:e,to:n},r={}){const t=getComputedStyle(o),s=t.transform==="none"?"":t.transform,[f,l]=t.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*f/n.width-(n.left+f),a=e.top+e.height*l/n.height-(n.top+l),{delay:c=0,duration:u=d=>Math.sqrt(d)*120,easing:_=st}=r;return{delay:c,duration:Be(u)?u(Math.sqrt(i*i+a*a)):u,easing:_,css:(d,h)=>{const $=h*i,m=h*a,k=d+h*e.width/n.width,y=d+h*e.height/n.height;return`transform: ${s} translate(${$}px, ${m}px) scale(${k}, ${y});`}}}function we(o){return Object.prototype.toString.call(o)==="[object Date]"}function ue(o,e){if(o===e||o!==o)return()=>o;const n=typeof o;if(n!==typeof e||Array.isArray(o)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(o)){const r=e.map((t,s)=>ue(o[s],t));return t=>r.map(s=>s(t))}if(n==="object"){if(!o||!e)throw new Error("Object cannot be null");if(we(o)&&we(e)){o=o.getTime(),e=e.getTime();const s=e-o;return f=>new Date(o+f*s)}const r=Object.keys(e),t={};return r.forEach(s=>{t[s]=ue(o[s],e[s])}),s=>{const f={};return r.forEach(l=>{f[l]=t[l](s)}),f}}if(n==="number"){const r=e-o;return t=>o+t*r}throw new Error(`Cannot interpolate ${n} values`)}function Et(o,e={}){const n=rt(o);let r,t=o;function s(f,l){if(o==null)return n.set(o=f),Promise.resolve();t=f;let i=r,a=!1,{delay:c=0,duration:u=400,easing:_=ce,interpolate:d=ue}=X(X({},e),l);if(u===0)return i&&(i.abort(),i=null),n.set(o=t),Promise.resolve();const h=Ae()+c;let $;return r=De(m=>{if(m<h)return!0;a||($=d(o,f),typeof u=="function"&&(u=u(o,f)),a=!0),i&&(i.abort(),i=null);const k=m-h;return k>u?(n.set(o=f),!1):(n.set(o=$(_(k/u))),!0)}),r.promise}return{set:s,update:(f,l)=>s(f(t,o),l),subscribe:n.subscribe}}function Ct(o){let e,n=o[0].msg+"",r;return{c(){e=new Se(!1),r=O(),this.h()},l(t){e=He(t,!1),r=O(),this.h()},h(){e.a=r},m(t,s){e.m(n,t,s),v(t,r,s)},p(t,s){s&1&&n!==(n=t[0].msg+"")&&e.p(n)},i:T,o:T,d(t){t&&(g(r),e.d())}}}function Tt(o){let e,n,r;const t=[o[2]];var s=o[0].component.src;function f(l,i){let a={};if(i!==void 0&&i&4)a=F(t,[J(l[2])]);else for(let c=0;c<t.length;c+=1)a=X(a,t[c]);return{props:a}}return s&&(e=G(s,f(o))),{c(){e&&L(e.$$.fragment),n=O()},l(l){e&&V(e.$$.fragment,l),n=O()},m(l,i){e&&S(e,l,i),v(l,n,i),r=!0},p(l,i){if(i&1&&s!==(s=l[0].component.src)){if(e){U();const a=e;C(a.$$.fragment,1,0,()=>{H(a,1)}),q()}s?(e=G(s,f(l,i)),L(e.$$.fragment),E(e.$$.fragment,1),S(e,n.parentNode,n)):e=null}else if(s){const a=i&4?F(t,[J(l[2])]):{};e.$set(a)}},i(l){r||(e&&E(e.$$.fragment,l),r=!0)},o(l){e&&C(e.$$.fragment,l),r=!1},d(l){l&&g(n),e&&H(e,l)}}}function Ee(o){let e,n,r;return{c(){e=M("div"),this.h()},l(t){e=A(t,"DIV",{class:!0,role:!0,tabindex:!0}),B(e).forEach(g),this.h()},h(){b(e,"class","_toastBtn pe svelte-8s5i6t"),b(e,"role","button"),b(e,"tabindex","0")},m(t,s){v(t,e,s),n||(r=[R(e,"click",o[4]),R(e,"keydown",o[8])],n=!0)},p:T,d(t){t&&g(e),n=!1,_e(r)}}}function Nt(o){let e,n,r,t,s,f,l,i,a,c;const u=[Tt,Ct],_=[];function d($,m){return $[0].component?0:1}r=d(o),t=_[r]=u[r](o);let h=o[0].dismissable&&Ee(o);return{c(){e=M("div"),n=M("div"),t.c(),s=I(),h&&h.c(),f=I(),l=M("progress"),this.h()},l($){e=A($,"DIV",{role:!0,class:!0});var m=B(e);n=A(m,"DIV",{class:!0});var k=B(n);t.l(k),k.forEach(g),s=j(m),h&&h.l(m),f=j(m),l=A(m,"PROGRESS",{class:!0}),B(l).forEach(g),m.forEach(g),this.h()},h(){b(n,"class","_toastMsg svelte-8s5i6t"),x(n,"pe",o[0].component),b(l,"class","_toastBar svelte-8s5i6t"),l.value=o[1],b(e,"role","status"),b(e,"class","_toastItem svelte-8s5i6t"),x(e,"pe",o[0].pausable)},m($,m){v($,e,m),D(e,n),_[r].m(n,null),D(e,s),h&&h.m(e,null),D(e,f),D(e,l),i=!0,a||(c=[R(e,"mouseenter",o[9]),R(e,"mouseleave",o[6])],a=!0)},p($,[m]){let k=r;r=d($),r===k?_[r].p($,m):(U(),C(_[k],1,1,()=>{_[k]=null}),q(),t=_[r],t?t.p($,m):(t=_[r]=u[r]($),t.c()),E(t,1),t.m(n,null)),(!i||m&1)&&x(n,"pe",$[0].component),$[0].dismissable?h?h.p($,m):(h=Ee($),h.c(),h.m(e,f)):h&&(h.d(1),h=null),(!i||m&2)&&(l.value=$[1]),(!i||m&1)&&x(e,"pe",$[0].pausable)},i($){i||(E(t),i=!0)},o($){C(t),i=!1},d($){$&&g(e),_[r].d(),h&&h.d(),a=!1,_e(c)}}}function ae(o,e="undefined"){return typeof o===e}function Ot(o,e,n){let r,{item:t}=e,s=t.initial,f=s,l=!1,i={},a;const c=Et(t.initial,{duration:t.duration,easing:ce});P(o,c,y=>n(1,r=y));function u(){fe.pop(t.id)}function _(){(r===1||r===0)&&u()}function d(){!l&&r!==s&&(c.set(r,{duration:0}),l=!0)}function h(){if(l){const y=t.duration,w=y-y*((r-f)/(s-f));c.set(s,{duration:w}).then(_),l=!1}}function $(y=document){if(ae(y.hidden))return;const w=()=>y.hidden?d():h(),p="visibilitychange";y.addEventListener(p,w),a=()=>y.removeEventListener(p,w),w()}pe($),Le(()=>{ae(t.onpop,"function")&&t.onpop(t.id),a&&a()});const m=y=>{y instanceof KeyboardEvent&&["Enter"," "].includes(y.key)&&u()},k=()=>{t.pausable&&d()};return o.$$set=y=>{"item"in y&&n(0,t=y.item)},o.$$.update=()=>{if(o.$$.dirty&1&&(ae(t.progress)||n(0,t.next=t.progress,t)),o.$$.dirty&131&&s!==t.next&&(n(7,s=t.next),f=r,l=!1,c.set(s).then(_)),o.$$.dirty&1&&t.component){const{props:y={},sendIdTo:w}=t.component;n(2,i={...y,...w&&{[w]:t.id}})}},[t,r,i,c,u,d,h,s,m,k]}class Mt extends Q{constructor(e){super(),W(this,e,Ot,Nt,K,{item:0})}}function Ce(o,e,n){const r=o.slice();return r[4]=e[n],r}function Te(o,e){let n,r,t,s,f,l,i,a,c=T,u;return r=new Mt({props:{item:e[4]}}),{key:o,first:null,c(){n=M("li"),L(r.$$.fragment),t=I(),this.h()},l(_){n=A(_,"LI",{class:!0,style:!0});var d=B(n);V(r.$$.fragment,d),t=j(d),d.forEach(g),this.h()},h(){b(n,"class",s=me(e[4].classes?.join(" "))+" svelte-1ryffm3"),b(n,"style",f=Ne(e[4].theme)),this.first=n},m(_,d){v(_,n,d),S(r,n,null),D(n,t),u=!0},p(_,d){e=_;const h={};d&1&&(h.item=e[4]),r.$set(h),(!u||d&1&&s!==(s=me(e[4].classes?.join(" "))+" svelte-1ryffm3"))&&b(n,"class",s),(!u||d&1&&f!==(f=Ne(e[4].theme)))&&b(n,"style",f)},r(){a=n.getBoundingClientRect()},f(){ft(n),c(),je(n,a)},a(){c(),c=at(n,a,wt,{duration:200})},i(_){u||(E(r.$$.fragment,_),_&&Re(()=>{u&&(i&&i.end(1),l=Pe(n,lt,e[4].intro),l.start())}),u=!0)},o(_){C(r.$$.fragment,_),l&&l.invalidate(),_&&(i=Ge(n,ot,{})),u=!1},d(_){_&&g(n),H(r),_&&i&&i.end()}}}function At(o){let e,n=[],r=new Map,t,s=ee(o[0]);const f=l=>l[4].id;for(let l=0;l<s.length;l+=1){let i=Ce(o,s,l),a=f(i);r.set(a,n[l]=Te(a,i))}return{c(){e=M("ul");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=A(l,"UL",{class:!0});var i=B(e);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach(g),this.h()},h(){b(e,"class","_toastContainer svelte-1ryffm3")},m(l,i){v(l,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);t=!0},p(l,[i]){if(i&1){s=ee(l[0]),U();for(let a=0;a<n.length;a+=1)n[a].r();n=Ie(n,i,f,1,l,s,r,e,Qe,Te,null,Ce);for(let a=0;a<n.length;a+=1)n[a].a();q()}},i(l){if(!t){for(let i=0;i<s.length;i+=1)E(n[i]);t=!0}},o(l){for(let i=0;i<n.length;i+=1)C(n[i]);t=!1},d(l){l&&g(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function Ne(o){return o?Object.keys(o).reduce((e,n)=>`${e}${n}:${o[n]};`,""):void 0}function Dt(o,e,n){let r;P(o,fe,l=>n(3,r=l));let{options:t={}}=e,{target:s="default"}=e,f=[];return o.$$set=l=>{"options"in l&&n(1,t=l.options),"target"in l&&n(2,s=l.target)},o.$$.update=()=>{o.$$.dirty&6&&fe._init(s,t),o.$$.dirty&12&&n(0,f=r.filter(l=>l.target===s))},[f,t,s,r]}class It extends Q{constructor(e){super(),W(this,e,Dt,At,K,{options:1,target:2})}}function jt(o){let e,n='<i class="fa fa-home svelte-spn78d" aria-hidden="true"></i>',r,t;return{c(){e=M("button"),e.innerHTML=n,this.h()},l(s){e=A(s,"BUTTON",{title:!0,type:!0,class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1gezwbt"&&(e.innerHTML=n),this.h()},h(){b(e,"title","Home"),b(e,"type","button"),b(e,"class","svelte-spn78d")},m(s,f){v(s,e,f),r||(t=R(e,"click",o[0]),r=!0)},p:T,i:T,o:T,d(s){s&&g(e),r=!1,t()}}}function Bt(o){return[()=>it("/")]}class Lt extends Q{constructor(e){super(),W(this,e,Bt,jt,K,{})}}function St(o){let e,n='<i class="fa fa-sign-in svelte-xit8oy" aria-hidden="true"></i>',r,t;return{c(){e=M("button"),e.innerHTML=n,this.h()},l(s){e=A(s,"BUTTON",{title:!0,type:!0,class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1e1vnim"&&(e.innerHTML=n),this.h()},h(){b(e,"title","Log in"),b(e,"type","button"),b(e,"class","svelte-xit8oy")},m(s,f){v(s,e,f),r||(t=R(e,"click",o[2]),r=!0)},p:T,d(s){s&&g(e),r=!1,t()}}}function Ht(o){let e,n,r,t,s;return{c(){e=M("button"),n=M("img"),this.h()},l(f){e=A(f,"BUTTON",{title:!0,class:!0});var l=B(e);n=A(l,"IMG",{class:!0,alt:!0,src:!0}),l.forEach(g),this.h()},h(){b(n,"class","user-profile svelte-xit8oy"),b(n,"alt","user profile"),de(n.src,r=o[0].picture)||b(n,"src",r),b(e,"title","Log out"),b(e,"class","svelte-xit8oy")},m(f,l){v(f,e,l),D(e,n),t||(s=R(e,"click",o[1]),t=!0)},p(f,l){l&1&&!de(n.src,r=f[0].picture)&&b(n,"src",r)},d(f){f&&g(e),t=!1,s()}}}function Oe(o){let e;function n(s,f){return s[0]?Ht:St}let r=n(o),t=r(o);return{c(){t.c(),e=O()},l(s){t.l(s),e=O()},m(s,f){t.m(s,f),v(s,e,f)},p(s,f){r===(r=n(s))&&t?t.p(s,f):(t.d(1),t=r(s),t&&(t.c(),t.m(e.parentNode,e)))},d(s){s&&g(e),t.d(s)}}}function Rt(o){let e=o[0],n,r=Oe(o);return{c(){r.c(),n=O()},l(t){r.l(t),n=O()},m(t,s){r.m(t,s),v(t,n,s)},p(t,[s]){s&1&&K(e,e=t[0])?(r.d(1),r=Oe(t),r.c(),r.m(n.parentNode,n)):r.p(t,s)},i:T,o:T,d(t){t&&g(n),r.d(t)}}}function Vt(o,e,n){let r;return P(o,Ze,f=>n(0,r=f)),pe(()=>xe()),[r,()=>et(),()=>tt()]}class Ut extends Q{constructor(e){super(),W(this,e,Vt,Rt,K,{})}}function qt(o){let e,n,r;return{c(){e=M("button"),this.h()},l(t){e=A(t,"BUTTON",{slot:!0,class:!0}),B(e).forEach(g),this.h()},h(){b(e,"slot","backdrop"),b(e,"class","backdrop svelte-1t7fh53")},m(t,s){v(t,e,s),n||(r=R(e,"click",Ye),n=!0)},p:T,d(t){t&&g(e),n=!1,r()}}}function Me(o){let e,n,r="Something went wrong with auth0 setup",t,s,f;return{c(){e=M("div"),n=M("div"),n.textContent=r,t=I(),s=M("div"),f=Ve(o[0]),this.h()},l(l){e=A(l,"DIV",{class:!0});var i=B(e);n=A(i,"DIV",{"data-svelte-h":!0}),oe(n)!=="svelte-rgu38w"&&(n.textContent=r),t=j(i),s=A(i,"DIV",{});var a=B(s);f=Ue(a,o[0]),a.forEach(g),i.forEach(g),this.h()},h(){b(e,"class","auth-error svelte-1t7fh53")},m(l,i){v(l,e,i),D(e,n),D(e,t),D(e,s),D(s,f)},p(l,i){i&1&&qe(f,l[0])},d(l){l&&g(e)}}}function zt(o){let e,n,r,t="My Apps",s,f,l,i,a,c,u,_,d,h,$,m;l=new Lt({}),a=new Ut({}),u=new yt({props:{$$slots:{backdrop:[qt]},$$scope:{ctx:o}}}),d=new It({});let k=o[0]&&Me(o);const y=o[1].default,w=te(y,o,o[2],null);return{c(){e=M("header"),n=M("h1"),r=M("span"),r.textContent=t,s=I(),f=M("nav"),L(l.$$.fragment),i=I(),L(a.$$.fragment),c=I(),L(u.$$.fragment),_=I(),L(d.$$.fragment),h=I(),k&&k.c(),$=I(),w&&w.c(),this.h()},l(p){e=A(p,"HEADER",{});var N=B(e);n=A(N,"H1",{});var z=B(n);r=A(z,"SPAN",{"data-svelte-h":!0}),oe(r)!=="svelte-vu5x8k"&&(r.textContent=t),s=j(z),f=A(z,"NAV",{class:!0});var Y=B(f);V(l.$$.fragment,Y),i=j(Y),V(a.$$.fragment,Y),Y.forEach(g),z.forEach(g),N.forEach(g),c=j(p),V(u.$$.fragment,p),_=j(p),V(d.$$.fragment,p),h=j(p),k&&k.l(p),$=j(p),w&&w.l(p),this.h()},h(){b(f,"class","svelte-1t7fh53")},m(p,N){v(p,e,N),D(e,n),D(n,r),D(n,s),D(n,f),S(l,f,null),D(f,i),S(a,f,null),v(p,c,N),S(u,p,N),v(p,_,N),S(d,p,N),v(p,h,N),k&&k.m(p,N),v(p,$,N),w&&w.m(p,N),m=!0},p(p,[N]){const z={};N&4&&(z.$$scope={dirty:N,ctx:p}),u.$set(z),p[0]?k?k.p(p,N):(k=Me(p),k.c(),k.m($.parentNode,$)):k&&(k.d(1),k=null),w&&w.p&&(!m||N&4)&&ne(w,y,p,p[2],m?le(y,p[2],N,null):se(p[2]),null)},i(p){m||(E(l.$$.fragment,p),E(a.$$.fragment,p),E(u.$$.fragment,p),E(d.$$.fragment,p),E(w,p),m=!0)},o(p){C(l.$$.fragment,p),C(a.$$.fragment,p),C(u.$$.fragment,p),C(d.$$.fragment,p),C(w,p),m=!1},d(p){p&&(g(e),g(c),g(_),g(h),g($)),H(l),H(a),H(u,p),H(d,p),k&&k.d(p),w&&w.d(p)}}}function Kt(o,e,n){let{$$slots:r={},$$scope:t}=e,s;return pe(async()=>{try{await nt()}catch(f){n(0,s=f)}}),o.$$set=f=>{"$$scope"in f&&n(2,t=f.$$scope)},[s,r,t]}class nn extends Q{constructor(e){super(),W(this,e,Kt,zt,K,{})}}export{nn as component,tn as universal};
