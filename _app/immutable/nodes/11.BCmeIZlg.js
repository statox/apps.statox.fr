import{s as Z,A as P,i as B,f as b,k as ee,e as g,t as me,a as O,c as v,b as I,d as de,z as w,g as T,l as y,h as p,L as J,E as V,M as te,B as _e,y as pe,n as F}from"../chunks/scheduler.D1KS-ADa.js";import{S as ne,i as le,a as k,g as H,t as x,c as W,b as oe,d as re,m as se,e as ae}from"../chunks/index.8CYbRCgU.js";import{c as ie,o as he}from"../chunks/store.CwZ13uw-.js";import{u as ce,M as ue,U as ge}from"../chunks/Main.NPSwmvR8.js";import{e as K}from"../chunks/each.EXCWbmV2.js";import{a as ve,A as be}from"../chunks/index.A9pX7N51.js";import{t as ke}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.iy9WtnvX.js";const ye=async r=>ve({path:"/personalTracker/upload",data:r});function Q(r,e,n){const t=r.slice();return t[7]=e[n],t}function X(r){let e,n,t,l,o,f="Close",_,u,m,c,$="Weight",M,C,S,q,D,N,R,j,E=K(r[1]),i=[];for(let s=0;s<E.length;s+=1)i[s]=Y(Q(r,E,s));const fe=s=>x(i[s],1,1,()=>{i[s]=null});function G(s,d){return s[3]?Ue:Ce}let L=G(r),h=L(r);return{c(){e=g("div"),n=g("div"),t=g("h4"),l=me(`Add a new event
                `),o=g("button"),o.textContent=f,_=O();for(let s=0;s<i.length;s+=1)i[s].c();u=O(),m=g("form"),c=g("label"),c.textContent=$,M=O(),C=g("input"),S=O(),q=g("br"),D=O(),h.c(),this.h()},l(s){e=v(s,"DIV",{role:!0,class:!0});var d=I(e);n=v(d,"DIV",{class:!0});var a=I(n);t=v(a,"H4",{class:!0});var A=I(t);l=de(A,`Add a new event
                `),o=v(A,"BUTTON",{"data-svelte-h":!0}),w(o)!=="svelte-2m9p61"&&(o.textContent=f),A.forEach(b),_=T(a);for(let z=0;z<i.length;z+=1)i[z].l(a);u=T(a),m=v(a,"FORM",{class:!0});var U=I(m);c=v(U,"LABEL",{for:!0,"data-svelte-h":!0}),w(c)!=="svelte-1wni8ci"&&(c.textContent=$),M=T(U),C=v(U,"INPUT",{type:!0}),S=T(U),q=v(U,"BR",{}),D=T(U),h.l(U),U.forEach(b),a.forEach(b),d.forEach(b),this.h()},h(){y(t,"class","title-bar svelte-684ose"),y(c,"for","weight"),y(C,"type","number"),y(m,"class","form-content svelte-684ose"),y(n,"class","contents svelte-684ose"),y(e,"role","dialog"),y(e,"class","modal svelte-684ose")},m(s,d){B(s,e,d),p(e,n),p(n,t),p(t,l),p(t,o),p(n,_);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null);p(n,u),p(n,m),p(m,c),p(m,M),p(m,C),J(C,r[2]),p(m,S),p(m,q),p(m,D),h.m(m,null),N=!0,R||(j=[V(o,"click",ie),V(C,"input",r[6])],R=!0)},p(s,d){if(d&2){E=K(s[1]);let a;for(a=0;a<E.length;a+=1){const A=Q(s,E,a);i[a]?(i[a].p(A,d),k(i[a],1)):(i[a]=Y(A),i[a].c(),k(i[a],1),i[a].m(n,u))}for(H(),a=E.length;a<i.length;a+=1)fe(a);W()}d&4&&te(C.value)!==s[2]&&J(C,s[2]),L===(L=G(s))&&h?h.p(s,d):(h.d(1),h=L(s),h&&(h.c(),h.m(m,null)))},i(s){if(!N){for(let d=0;d<E.length;d+=1)k(i[d]);N=!0}},o(s){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)x(i[d]);N=!1},d(s){s&&b(e),_e(i,s),h.d(),R=!1,pe(j)}}}function Y(r){let e,n;return e=new ue({props:{item:r[7]}}),{c(){oe(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),n=!0},p(t,l){const o={};l&2&&(o.item=t[7]),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){ae(e,t)}}}function Ce(r){let e,n="Login to upload an entry";return{c(){e=g("span"),e.textContent=n,this.h()},l(t){e=v(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-4ab4io"&&(e.textContent=n),this.h()},h(){y(e,"class","form-action svelte-684ose")},m(t,l){B(t,e,l)},p:F,d(t){t&&b(e)}}}function Ue(r){let e,n="Submit",t,l;return{c(){e=g("button"),e.textContent=n,this.h()},l(o){e=v(o,"BUTTON",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-1nfv1d"&&(e.textContent=n),this.h()},h(){y(e,"class","form-action svelte-684ose")},m(o,f){B(o,e,f),t||(l=V(e,"click",r[4]),t=!0)},p:F,d(o){o&&b(e),t=!1,l()}}}function xe(r){let e,n,t=r[0]&&X(r);return{c(){t&&t.c(),e=P()},l(l){t&&t.l(l),e=P()},m(l,o){t&&t.m(l,o),B(l,e,o),n=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&k(t,1)):(t=X(l),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(H(),x(t,1,1,()=>{t=null}),W())},i(l){n||(k(t),n=!0)},o(l){x(t),n=!1},d(l){l&&b(e),t&&t.d(l)}}}function Ee(r,e,n){let t;ee(r,ce,c=>n(3,t=c));let{isOpen:l}=e,{onUpload:o}=e,f=[],_;const u=async()=>{if(n(1,f=[]),_!==Math.floor(_)&&f.push({level:"error",header:"Value must not have a decimal part"}),(_<80||_>110)&&f.push({level:"error",header:"Value must be in kg"}),!f.length)try{await ye({eventType:"weight",eventValue:_*100}),o(),ie()}catch(c){let $=c.message;c instanceof be&&c.code===401?$="Invalid logged in user":c instanceof ge&&($="User is logged out");const M=`<strong>Entry not created</strong><br/> ${$}`;ke.push(M,{theme:{"--toastBarBackground":"#FF0000"}})}};function m(){_=te(this.value),n(2,_)}return r.$$set=c=>{"isOpen"in c&&n(0,l=c.isOpen),"onUpload"in c&&n(5,o=c.onUpload)},[l,f,_,t,u,o,m]}class $e extends ne{constructor(e){super(),le(this,e,Ee,xe,Z,{isOpen:0,onUpload:5})}}function Ae(r){let e,n;return e=new ue({props:{item:{level:"info",header:"Login to add an entry"}}}),{c(){oe(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),n=!0},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){ae(e,t)}}}function Be(r){let e,n="Add an entry",t,l;return{c(){e=g("button"),e.textContent=n},l(o){e=v(o,"BUTTON",{"data-svelte-h":!0}),w(e)!=="svelte-ank2u2"&&(e.textContent=n)},m(o,f){B(o,e,f),t||(l=V(e,"click",r[1]),t=!0)},i:F,o:F,d(o){o&&b(e),t=!1,l()}}}function Me(r){let e,n,t,l;const o=[Be,Ae],f=[];function _(u,m){return u[0]?0:1}return e=_(r),n=f[e]=o[e](r),{c(){n.c(),t=P()},l(u){n.l(u),t=P()},m(u,m){f[e].m(u,m),B(u,t,m),l=!0},p(u,[m]){let c=e;e=_(u),e!==c&&(H(),x(f[c],1,1,()=>{f[c]=null}),W(),n=f[e],n||(n=f[e]=o[e](u),n.c()),k(n,1),n.m(t.parentNode,t))},i(u){l||(k(n),l=!0)},o(u){x(n),l=!1},d(u){u&&b(t),f[e].d(u)}}}function Oe(r,e,n){let t;return ee(r,ce,o=>n(0,t=o)),[t,()=>he($e,{onUpload:()=>{}})]}class Fe extends ne{constructor(e){super(),le(this,e,Oe,Me,Z,{})}}export{Fe as component};