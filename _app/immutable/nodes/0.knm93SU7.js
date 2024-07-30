import{n as N,I as ce,s as K,a6 as te,a as j,g as A,i as v,E as R,a7 as ne,a8 as se,a9 as le,f as $,y as _e,k as F,A as T,aa as Z,L as G,ab as U,R as Le,e as M,c as D,b as L,m as b,F as x,h as I,q as Me,N as Se,ac as Be,ad as He,a5 as pe,D as Re,z as oe,C as me,t as Ve,d as Ue,j as qe}from"../chunks/scheduler.B3gxbuV4.js";import{n as De,l as Ie,h as ze,j as Pe,S as W,i as X,a as E,g as q,t as C,c as z,b as S,d as V,m as B,e as H,k as Ke,o as Fe}from"../chunks/index.D4Ghn6ud.js";/* empty css                          */import{h as de,u as Ge}from"../chunks/await_block.hv1NBf3l.js";import{e as ee,u as je,o as Je,f as Qe}from"../chunks/each.BG3x12hU.js";import{g as J,a as Q}from"../chunks/spread.CgU5AtxT.js";import{m as We,t as re,e as ie,a as Xe,c as Ye}from"../chunks/store.9BnpkKOj.js";import{t as fe,u as Ze,l as xe,a as et,i as tt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.MU1LmPUq.js";import{c as nt,f as st,a as lt}from"../chunks/index.B5E0JPMt.js";import{w as ot}from"../chunks/index.CLUFn2xY.js";import{g as rt}from"../chunks/entry.KvRA8U5m.js";function it(o,e,n,r){if(!e)return N;const t=o.getBoundingClientRect();if(e.left===t.left&&e.right===t.right&&e.top===t.top&&e.bottom===t.bottom)return N;const{delay:s=0,duration:f=300,easing:l=ce,start:i=De()+s,end:a=i+f,tick:c=N,css:u}=n(o,{from:e,to:t},r);let _=!0,d=!1,g;function h(){u&&(g=ze(o,0,1,f,s,l,u)),s||(d=!0)}function m(){u&&Pe(o,g),_=!1}return Ie(k=>{if(!d&&k>=i&&(d=!0),d&&k>=a&&(c(1,0),m()),!_)return!1;if(d){const y=k-i,w=0+1*l(y/f);c(w,1-w)}return!0}),h(),c(0,1),m}function at(o){const e=getComputedStyle(o);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,t=o.getBoundingClientRect();o.style.position="absolute",o.style.width=n,o.style.height=r,Ae(o,t)}}function Ae(o,e){const n=o.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(o),t=r.transform==="none"?"":r.transform;o.style.transform=`${t} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}const ft=!0,en=Object.freeze(Object.defineProperty({__proto__:null,prerender:ft},Symbol.toStringTag,{value:"Module"}));function he(o,e,n){const r=o.slice();return r[13]=e[n],r[15]=n,r}const ut=o=>({}),ge=o=>({}),ct=o=>({}),$e=o=>({});function ke(o){let e;const n=o[6].backdrop,r=te(n,o,o[5],$e);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,s){r&&r.m(t,s),e=!0},p(t,s){r&&r.p&&(!e||s&32)&&ne(r,n,t,t[5],e?le(n,t[5],s,ct):se(t[5]),$e)},i(t){e||(E(r,t),e=!0)},o(t){C(r,t),e=!1},d(t){r&&r.d(t)}}}function _t(o){let e,n,r;const t=[{isOpen:o[15]===o[0].length-1&&!o[1]},o[13].props];var s=o[13].component;function f(l,i){let a={};for(let c=0;c<t.length;c+=1)a=U(a,t[c]);return i!==void 0&&i&3&&(a=U(a,J(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&Q(l[13].props)]))),{props:a}}return s&&(e=G(s,f(o)),e.$on("introstart",o[9]),e.$on("outroend",o[10])),{c(){e&&S(e.$$.fragment),n=T()},l(l){e&&V(e.$$.fragment,l),n=T()},m(l,i){e&&B(e,l,i),v(l,n,i),r=!0},p(l,i){if(i&1&&s!==(s=l[13].component)){if(e){q();const a=e;C(a.$$.fragment,1,0,()=>{H(a,1)}),z()}s?(e=G(s,f(l,i)),e.$on("introstart",l[9]),e.$on("outroend",l[10]),S(e.$$.fragment),E(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else if(s){const a=i&3?J(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&Q(l[13].props)]):{};e.$set(a)}},i(l){r||(e&&E(e.$$.fragment,l),r=!0)},o(l){e&&C(e.$$.fragment,l),r=!1},d(l){l&&$(n),e&&H(e,l)}}}function pt(o){let e,n,r,t={ctx:o,current:null,token:null,hasCatch:!1,pending:ht,then:dt,catch:mt,value:16,blocks:[,,,]};return de(n=ve(o[13].component),t),{c(){e=T(),t.block.c()},l(s){e=T(),t.block.l(s)},m(s,f){v(s,e,f),t.block.m(s,t.anchor=f),t.mount=()=>e.parentNode,t.anchor=e,r=!0},p(s,f){o=s,t.ctx=o,f&1&&n!==(n=ve(o[13].component))&&de(n,t)||Ge(t,o,f)},i(s){r||(E(t.block),r=!0)},o(s){for(let f=0;f<3;f+=1){const l=t.blocks[f];C(l)}r=!1},d(s){s&&$(e),t.block.d(s),t.token=null,t=null}}}function mt(o){return{c:N,l:N,m:N,p:N,i:N,o:N,d:N}}function dt(o){let e,n,r;const t=[{isOpen:o[15]===o[0].length-1&&!o[1]},o[13].props];var s=o[16];function f(l,i){let a={};for(let c=0;c<t.length;c+=1)a=U(a,t[c]);return i!==void 0&&i&3&&(a=U(a,J(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&Q(l[13].props)]))),{props:a}}return s&&(e=G(s,f(o)),e.$on("introstart",o[7]),e.$on("outroend",o[8])),{c(){e&&S(e.$$.fragment),n=j()},l(l){e&&V(e.$$.fragment,l),n=A(l)},m(l,i){e&&B(e,l,i),v(l,n,i),r=!0},p(l,i){if(i&1&&s!==(s=l[16])){if(e){q();const a=e;C(a.$$.fragment,1,0,()=>{H(a,1)}),z()}s?(e=G(s,f(l,i)),e.$on("introstart",l[7]),e.$on("outroend",l[8]),S(e.$$.fragment),E(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else if(s){const a=i&3?J(t,[{isOpen:l[15]===l[0].length-1&&!l[1]},i&1&&Q(l[13].props)]):{};e.$set(a)}},i(l){r||(e&&E(e.$$.fragment,l),r=!0)},o(l){e&&C(e.$$.fragment,l),r=!1},d(l){l&&$(n),e&&H(e,l)}}}function ht(o){let e,n;const r=o[6].loading,t=te(r,o,o[5],ge);return{c(){t&&t.c(),e=j()},l(s){t&&t.l(s),e=A(s)},m(s,f){t&&t.m(s,f),v(s,e,f),n=!0},p(s,f){t&&t.p&&(!n||f&32)&&ne(t,r,s,s[5],n?le(r,s[5],f,ut):se(s[5]),ge)},i(s){n||(E(t,s),n=!0)},o(s){C(t,s),n=!1},d(s){s&&$(e),t&&t.d(s)}}}function be(o,e){let n,r,t,s,f,l;const i=[pt,_t],a=[];function c(u,_){return _&1&&(r=null),r==null&&(r=!!kt(u[13].component)),r?0:1}return t=c(e,-1),s=a[t]=i[t](e),{key:o,first:null,c(){n=T(),s.c(),f=T(),this.h()},l(u){n=T(),s.l(u),f=T(),this.h()},h(){this.first=n},m(u,_){v(u,n,_),a[t].m(u,_),v(u,f,_),l=!0},p(u,_){e=u;let d=t;t=c(e,_),t===d?a[t].p(e,_):(q(),C(a[d],1,1,()=>{a[d]=null}),z(),s=a[t],s?s.p(e,_):(s=a[t]=i[t](e),s.c()),E(s,1),s.m(f.parentNode,f))},i(u){l||(E(s),l=!0)},o(u){C(s),l=!1},d(u){u&&($(n),$(f)),a[t].d(u)}}}function gt(o){let e=[],n=new Map,r,t,s=ee(o[0]);const f=l=>l[15];for(let l=0;l<s.length;l+=1){let i=he(o,s,l),a=f(i);n.set(a,e[l]=be(a,i))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=T()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);r=T()},m(l,i){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,i);v(l,r,i),t=!0},p(l,i){i&39&&(s=ee(l[0]),q(),e=je(e,i,f,1,l,s,n,r.parentNode,Je,be,r,he),z())},i(l){if(!t){for(let i=0;i<s.length;i+=1)E(e[i]);t=!0}},o(l){for(let i=0;i<e.length;i+=1)C(e[i]);t=!1},d(l){l&&$(r);for(let i=0;i<e.length;i+=1)e[i].d(l)}}}function $t(o){let e,n,r,t,s=o[0].length>0&&ke(o);const f=o[6].default,l=te(f,o,o[5],null),i=l||gt(o);return{c(){s&&s.c(),e=j(),i&&i.c()},l(a){s&&s.l(a),e=A(a),i&&i.l(a)},m(a,c){s&&s.m(a,c),v(a,e,c),i&&i.m(a,c),n=!0,r||(t=[R(window,"keydown",o[3]),R(window,"keyup",o[4])],r=!0)},p(a,[c]){a[0].length>0?s?(s.p(a,c),c&1&&E(s,1)):(s=ke(a),s.c(),E(s,1),s.m(e.parentNode,e)):s&&(q(),C(s,1,1,()=>{s=null}),z()),l?l.p&&(!n||c&32)&&ne(l,f,a,a[5],n?le(f,a[5],c,null):se(a[5]),null):i&&i.p&&(!n||c&39)&&i.p(a,n?c:-1)},i(a){n||(E(s),E(i,a),n=!0)},o(a){C(s),C(i,a),n=!1},d(a){a&&$(e),s&&s.d(a),i&&i.d(a),r=!1,_e(t)}}}function kt(o){return typeof o.prototype>"u"}async function ve(o){return o().then(e=>e.default)}function bt(o,e,n){let r,t,s;F(o,We,m=>n(0,r=m)),F(o,re,m=>n(1,t=m)),F(o,ie,m=>n(2,s=m));let{$$slots:f={},$$scope:l}=e;const i=["Escape"];let a=!0;const c=m=>{i.includes(m.key)&&a&&(a=!1,Xe()&&m.preventDefault())},u=m=>{!a&&i.includes(m.key)&&(a=!0,m.preventDefault())},_=()=>{Z(ie,s=!0,s)},d=()=>{Z(re,t=!1,t)},g=()=>{Z(ie,s=!0,s)},h=()=>{Z(re,t=!1,t)};return o.$$set=m=>{"$$scope"in m&&n(5,l=m.$$scope)},[r,t,s,c,u,l,f,_,d,g,h]}class vt extends W{constructor(e){super(),X(this,e,bt,$t,K,{})}}function yt(o,{from:e,to:n},r={}){const t=getComputedStyle(o),s=t.transform==="none"?"":t.transform,[f,l]=t.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*f/n.width-(n.left+f),a=e.top+e.height*l/n.height-(n.top+l),{delay:c=0,duration:u=d=>Math.sqrt(d)*120,easing:_=nt}=r;return{delay:c,duration:Le(u)?u(Math.sqrt(i*i+a*a)):u,easing:_,css:(d,g)=>{const h=g*i,m=g*a,k=d+g*e.width/n.width,y=d+g*e.height/n.height;return`transform: ${s} translate(${h}px, ${m}px) scale(${k}, ${y});`}}}function ye(o){return Object.prototype.toString.call(o)==="[object Date]"}function ue(o,e){if(o===e||o!==o)return()=>o;const n=typeof o;if(n!==typeof e||Array.isArray(o)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(o)){const r=e.map((t,s)=>ue(o[s],t));return t=>r.map(s=>s(t))}if(n==="object"){if(!o||!e)throw new Error("Object cannot be null");if(ye(o)&&ye(e)){o=o.getTime(),e=e.getTime();const s=e-o;return f=>new Date(o+f*s)}const r=Object.keys(e),t={};return r.forEach(s=>{t[s]=ue(o[s],e[s])}),s=>{const f={};return r.forEach(l=>{f[l]=t[l](s)}),f}}if(n==="number"){const r=e-o;return t=>o+t*r}throw new Error(`Cannot interpolate ${n} values`)}function wt(o,e={}){const n=ot(o);let r,t=o;function s(f,l){if(o==null)return n.set(o=f),Promise.resolve();t=f;let i=r,a=!1,{delay:c=0,duration:u=400,easing:_=ce,interpolate:d=ue}=U(U({},e),l);if(u===0)return i&&(i.abort(),i=null),n.set(o=t),Promise.resolve();const g=De()+c;let h;return r=Ie(m=>{if(m<g)return!0;a||(h=d(o,f),typeof u=="function"&&(u=u(o,f)),a=!0),i&&(i.abort(),i=null);const k=m-g;return k>u?(n.set(o=f),!1):(n.set(o=h(_(k/u))),!0)}),r.promise}return{set:s,update:(f,l)=>s(f(t,o),l),subscribe:n.subscribe}}function Et(o){let e,n=o[0].msg+"",r;return{c(){e=new Be(!1),r=T(),this.h()},l(t){e=He(t,!1),r=T(),this.h()},h(){e.a=r},m(t,s){e.m(n,t,s),v(t,r,s)},p(t,s){s&1&&n!==(n=t[0].msg+"")&&e.p(n)},i:N,o:N,d(t){t&&($(r),e.d())}}}function Ct(o){let e,n,r;const t=[o[2]];var s=o[0].component.src;function f(l,i){let a={};for(let c=0;c<t.length;c+=1)a=U(a,t[c]);return i!==void 0&&i&4&&(a=U(a,J(t,[Q(l[2])]))),{props:a}}return s&&(e=G(s,f(o))),{c(){e&&S(e.$$.fragment),n=T()},l(l){e&&V(e.$$.fragment,l),n=T()},m(l,i){e&&B(e,l,i),v(l,n,i),r=!0},p(l,i){if(i&1&&s!==(s=l[0].component.src)){if(e){q();const a=e;C(a.$$.fragment,1,0,()=>{H(a,1)}),z()}s?(e=G(s,f(l,i)),S(e.$$.fragment),E(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else if(s){const a=i&4?J(t,[Q(l[2])]):{};e.$set(a)}},i(l){r||(e&&E(e.$$.fragment,l),r=!0)},o(l){e&&C(e.$$.fragment,l),r=!1},d(l){l&&$(n),e&&H(e,l)}}}function we(o){let e,n,r;return{c(){e=M("div"),this.h()},l(t){e=D(t,"DIV",{class:!0,role:!0,tabindex:!0}),L(e).forEach($),this.h()},h(){b(e,"class","_toastBtn pe svelte-8s5i6t"),b(e,"role","button"),b(e,"tabindex","0")},m(t,s){v(t,e,s),n||(r=[R(e,"click",o[4]),R(e,"keydown",o[8])],n=!0)},p:N,d(t){t&&$(e),n=!1,_e(r)}}}function Nt(o){let e,n,r,t,s,f,l,i,a,c;const u=[Ct,Et],_=[];function d(h,m){return h[0].component?0:1}r=d(o),t=_[r]=u[r](o);let g=o[0].dismissable&&we(o);return{c(){e=M("div"),n=M("div"),t.c(),s=j(),g&&g.c(),f=j(),l=M("progress"),this.h()},l(h){e=D(h,"DIV",{role:!0,class:!0});var m=L(e);n=D(m,"DIV",{class:!0});var k=L(n);t.l(k),k.forEach($),s=A(m),g&&g.l(m),f=A(m),l=D(m,"PROGRESS",{class:!0}),L(l).forEach($),m.forEach($),this.h()},h(){b(n,"class","_toastMsg svelte-8s5i6t"),x(n,"pe",o[0].component),b(l,"class","_toastBar svelte-8s5i6t"),l.value=o[1],b(e,"role","status"),b(e,"class","_toastItem svelte-8s5i6t"),x(e,"pe",o[0].pausable)},m(h,m){v(h,e,m),I(e,n),_[r].m(n,null),I(e,s),g&&g.m(e,null),I(e,f),I(e,l),i=!0,a||(c=[R(e,"mouseenter",o[9]),R(e,"mouseleave",o[6])],a=!0)},p(h,[m]){let k=r;r=d(h),r===k?_[r].p(h,m):(q(),C(_[k],1,1,()=>{_[k]=null}),z(),t=_[r],t?t.p(h,m):(t=_[r]=u[r](h),t.c()),E(t,1),t.m(n,null)),(!i||m&1)&&x(n,"pe",h[0].component),h[0].dismissable?g?g.p(h,m):(g=we(h),g.c(),g.m(e,f)):g&&(g.d(1),g=null),(!i||m&2)&&(l.value=h[1]),(!i||m&1)&&x(e,"pe",h[0].pausable)},i(h){i||(E(t),i=!0)},o(h){C(t),i=!1},d(h){h&&$(e),_[r].d(),g&&g.d(),a=!1,_e(c)}}}function ae(o,e="undefined"){return typeof o===e}function Ot(o,e,n){let r,{item:t}=e,s=t.initial,f=s,l=!1,i={},a;const c=wt(t.initial,{duration:t.duration,easing:ce});F(o,c,y=>n(1,r=y));function u(){fe.pop(t.id)}function _(){(r===1||r===0)&&u()}function d(){!l&&r!==s&&(c.set(r,{duration:0}),l=!0)}function g(){if(l){const y=t.duration,w=y-y*((r-f)/(s-f));c.set(s,{duration:w}).then(_),l=!1}}function h(y=document){if(ae(y.hidden))return;const w=()=>y.hidden?d():g(),p="visibilitychange";y.addEventListener(p,w),a=()=>y.removeEventListener(p,w),w()}Me(h),Se(()=>{t&&ae(t.onpop,"function")&&t.onpop(t.id),a&&a()});const m=y=>{y instanceof KeyboardEvent&&["Enter"," "].includes(y.key)&&u()},k=()=>{t.pausable&&d()};return o.$$set=y=>{"item"in y&&n(0,t=y.item)},o.$$.update=()=>{if(o.$$.dirty&1&&(ae(t.progress)||n(0,t.next=t.progress,t)),o.$$.dirty&131&&s!==t.next&&(n(7,s=t.next),f=r,l=!1,c.set(s).then(_)),o.$$.dirty&1&&t.component){const{props:y={},sendIdTo:w}=t.component;n(2,i={...y,...w&&{[w]:t.id}})}},[t,r,i,c,u,d,g,s,m,k]}class Tt extends W{constructor(e){super(),X(this,e,Ot,Nt,K,{item:0})}}function Ee(o,e,n){const r=o.slice();return r[4]=e[n],r}function Ce(o,e){let n,r,t,s,f,l,i,a,c=N,u;return r=new Tt({props:{item:e[4]}}),{key:o,first:null,c(){n=M("li"),S(r.$$.fragment),t=j(),this.h()},l(_){n=D(_,"LI",{class:!0,style:!0});var d=L(n);V(r.$$.fragment,d),t=A(d),d.forEach($),this.h()},h(){var _;b(n,"class",s=pe((_=e[4].classes)==null?void 0:_.join(" "))+" svelte-1ryffm3"),b(n,"style",f=Ne(e[4].theme)),this.first=n},m(_,d){v(_,n,d),B(r,n,null),I(n,t),u=!0},p(_,d){var h;e=_;const g={};d&1&&(g.item=e[4]),r.$set(g),(!u||d&1&&s!==(s=pe((h=e[4].classes)==null?void 0:h.join(" "))+" svelte-1ryffm3"))&&b(n,"class",s),(!u||d&1&&f!==(f=Ne(e[4].theme)))&&b(n,"style",f)},r(){a=n.getBoundingClientRect()},f(){at(n),c(),Ae(n,a)},a(){c(),c=it(n,a,yt,{duration:200})},i(_){u||(E(r.$$.fragment,_),_&&Re(()=>{u&&(i&&i.end(1),l=Ke(n,st,e[4].intro),l.start())}),u=!0)},o(_){C(r.$$.fragment,_),l&&l.invalidate(),_&&(i=Fe(n,lt,{})),u=!1},d(_){_&&$(n),H(r),_&&i&&i.end()}}}function Mt(o){let e,n=[],r=new Map,t,s=ee(o[0]);const f=l=>l[4].id;for(let l=0;l<s.length;l+=1){let i=Ee(o,s,l),a=f(i);r.set(a,n[l]=Ce(a,i))}return{c(){e=M("ul");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=D(l,"UL",{class:!0});var i=L(e);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach($),this.h()},h(){b(e,"class","_toastContainer svelte-1ryffm3")},m(l,i){v(l,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);t=!0},p(l,[i]){if(i&1){s=ee(l[0]),q();for(let a=0;a<n.length;a+=1)n[a].r();n=je(n,i,f,1,l,s,r,e,Qe,Ce,null,Ee);for(let a=0;a<n.length;a+=1)n[a].a();z()}},i(l){if(!t){for(let i=0;i<s.length;i+=1)E(n[i]);t=!0}},o(l){for(let i=0;i<n.length;i+=1)C(n[i]);t=!1},d(l){l&&$(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function Ne(o){return o?Object.keys(o).reduce((e,n)=>`${e}${n}:${o[n]};`,""):void 0}function Dt(o,e,n){let r;F(o,fe,l=>n(3,r=l));let{options:t={}}=e,{target:s="default"}=e,f=[];return o.$$set=l=>{"options"in l&&n(1,t=l.options),"target"in l&&n(2,s=l.target)},o.$$.update=()=>{o.$$.dirty&6&&fe._init(s,t),o.$$.dirty&12&&n(0,f=r.filter(l=>l.target===s))},[f,t,s,r]}class It extends W{constructor(e){super(),X(this,e,Dt,Mt,K,{options:1,target:2})}}function jt(o){let e,n='<i class="fa fa-home svelte-spn78d" aria-hidden="true"></i>',r,t;return{c(){e=M("button"),e.innerHTML=n,this.h()},l(s){e=D(s,"BUTTON",{title:!0,type:!0,class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1gezwbt"&&(e.innerHTML=n),this.h()},h(){b(e,"title","Home"),b(e,"type","button"),b(e,"class","svelte-spn78d")},m(s,f){v(s,e,f),r||(t=R(e,"click",o[0]),r=!0)},p:N,i:N,o:N,d(s){s&&$(e),r=!1,t()}}}function At(o){return[()=>rt("/")]}class Lt extends W{constructor(e){super(),X(this,e,At,jt,K,{})}}function St(o){let e,n='<i class="fa fa-sign-in svelte-xit8oy" aria-hidden="true"></i>',r,t;return{c(){e=M("button"),e.innerHTML=n,this.h()},l(s){e=D(s,"BUTTON",{title:!0,type:!0,class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1e1vnim"&&(e.innerHTML=n),this.h()},h(){b(e,"title","Log in"),b(e,"type","button"),b(e,"class","svelte-xit8oy")},m(s,f){v(s,e,f),r||(t=R(e,"click",o[2]),r=!0)},p:N,d(s){s&&$(e),r=!1,t()}}}function Bt(o){let e,n,r,t,s;return{c(){e=M("button"),n=M("img"),this.h()},l(f){e=D(f,"BUTTON",{title:!0,class:!0});var l=L(e);n=D(l,"IMG",{class:!0,alt:!0,src:!0}),l.forEach($),this.h()},h(){b(n,"class","user-profile svelte-xit8oy"),b(n,"alt","user profile"),me(n.src,r=o[0].picture)||b(n,"src",r),b(e,"title","Log out"),b(e,"class","svelte-xit8oy")},m(f,l){v(f,e,l),I(e,n),t||(s=R(e,"click",o[1]),t=!0)},p(f,l){l&1&&!me(n.src,r=f[0].picture)&&b(n,"src",r)},d(f){f&&$(e),t=!1,s()}}}function Oe(o){let e;function n(s,f){return s[0]?Bt:St}let r=n(o),t=r(o);return{c(){t.c(),e=T()},l(s){t.l(s),e=T()},m(s,f){t.m(s,f),v(s,e,f)},p(s,f){r===(r=n(s))&&t?t.p(s,f):(t.d(1),t=r(s),t&&(t.c(),t.m(e.parentNode,e)))},d(s){s&&$(e),t.d(s)}}}function Ht(o){let e=o[0],n,r=Oe(o);return{c(){r.c(),n=T()},l(t){r.l(t),n=T()},m(t,s){r.m(t,s),v(t,n,s)},p(t,[s]){s&1&&K(e,e=t[0])?(r.d(1),r=Oe(t),r.c(),r.m(n.parentNode,n)):r.p(t,s)},i:N,o:N,d(t){t&&$(n),r.d(t)}}}function Rt(o,e,n){let r;return F(o,Ze,f=>n(0,r=f)),[r,()=>xe(),()=>et()]}class Vt extends W{constructor(e){super(),X(this,e,Rt,Ht,K,{})}}function Ut(o){let e,n,r;return{c(){e=M("button"),this.h()},l(t){e=D(t,"BUTTON",{slot:!0,class:!0}),L(e).forEach($),this.h()},h(){b(e,"slot","backdrop"),b(e,"class","backdrop svelte-1t7fh53")},m(t,s){v(t,e,s),n||(r=R(e,"click",Ye),n=!0)},p:N,d(t){t&&$(e),n=!1,r()}}}function Te(o){let e,n,r="Something went wrong with auth0 setup",t,s,f;return{c(){e=M("div"),n=M("div"),n.textContent=r,t=j(),s=M("div"),f=Ve(o[0]),this.h()},l(l){e=D(l,"DIV",{class:!0});var i=L(e);n=D(i,"DIV",{"data-svelte-h":!0}),oe(n)!=="svelte-1eh6h9k"&&(n.textContent=r),t=A(i),s=D(i,"DIV",{});var a=L(s);f=Ue(a,o[0]),a.forEach($),i.forEach($),this.h()},h(){b(e,"class","auth-error svelte-1t7fh53")},m(l,i){v(l,e,i),I(e,n),I(e,t),I(e,s),I(s,f)},p(l,i){i&1&&qe(f,l[0])},d(l){l&&$(e)}}}function qt(o){let e,n,r,t="My Apps",s,f,l,i,a,c,u,_,d,g,h,m;l=new Lt({}),a=new Vt({}),u=new vt({props:{$$slots:{backdrop:[Ut]},$$scope:{ctx:o}}}),d=new It({});let k=o[0]&&Te(o);const y=o[1].default,w=te(y,o,o[2],null);return{c(){e=M("header"),n=M("h1"),r=M("span"),r.textContent=t,s=j(),f=M("nav"),S(l.$$.fragment),i=j(),S(a.$$.fragment),c=j(),S(u.$$.fragment),_=j(),S(d.$$.fragment),g=j(),k&&k.c(),h=j(),w&&w.c(),this.h()},l(p){e=D(p,"HEADER",{});var O=L(e);n=D(O,"H1",{});var P=L(n);r=D(P,"SPAN",{"data-svelte-h":!0}),oe(r)!=="svelte-vu5x8k"&&(r.textContent=t),s=A(P),f=D(P,"NAV",{class:!0});var Y=L(f);V(l.$$.fragment,Y),i=A(Y),V(a.$$.fragment,Y),Y.forEach($),P.forEach($),O.forEach($),c=A(p),V(u.$$.fragment,p),_=A(p),V(d.$$.fragment,p),g=A(p),k&&k.l(p),h=A(p),w&&w.l(p),this.h()},h(){b(f,"class","svelte-1t7fh53")},m(p,O){v(p,e,O),I(e,n),I(n,r),I(n,s),I(n,f),B(l,f,null),I(f,i),B(a,f,null),v(p,c,O),B(u,p,O),v(p,_,O),B(d,p,O),v(p,g,O),k&&k.m(p,O),v(p,h,O),w&&w.m(p,O),m=!0},p(p,[O]){const P={};O&4&&(P.$$scope={dirty:O,ctx:p}),u.$set(P),p[0]?k?k.p(p,O):(k=Te(p),k.c(),k.m(h.parentNode,h)):k&&(k.d(1),k=null),w&&w.p&&(!m||O&4)&&ne(w,y,p,p[2],m?le(y,p[2],O,null):se(p[2]),null)},i(p){m||(E(l.$$.fragment,p),E(a.$$.fragment,p),E(u.$$.fragment,p),E(d.$$.fragment,p),E(w,p),m=!0)},o(p){C(l.$$.fragment,p),C(a.$$.fragment,p),C(u.$$.fragment,p),C(d.$$.fragment,p),C(w,p),m=!1},d(p){p&&($(e),$(c),$(_),$(g),$(h)),H(l),H(a),H(u,p),H(d,p),k&&k.d(p),w&&w.d(p)}}}function zt(o,e,n){let{$$slots:r={},$$scope:t}=e,s;return Me(async()=>{try{await tt()}catch(f){n(0,s=f)}}),o.$$set=f=>{"$$scope"in f&&n(2,t=f.$$scope)},[s,r,t]}class tn extends W{constructor(e){super(),X(this,e,zt,qt,K,{})}}export{tn as component,en as universal};
