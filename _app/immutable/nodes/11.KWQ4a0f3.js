import{s as Z,A as L,i as A,f as k,k as ee,e as g,t as de,a as B,c as v,b as I,d as me,z as O,g as M,l as C,h as p,L as J,E as P,M as te,B as _e,y as pe,n as D}from"../chunks/scheduler.D1KS-ADa.js";import{S as ne,i as le,a as y,g as z,t as U,c as H,b as oe,d as re,m as se,e as ae}from"../chunks/index.8CYbRCgU.js";import{c as ie,o as he}from"../chunks/store.twYBfo2H.js";import{u as ce,M as ue,U as ge}from"../chunks/Main.CPPJaErO.js";import{e as K}from"../chunks/each.EXCWbmV2.js";import{a as ve,A as be}from"../chunks/index.D3B15HrD.js";import{t as ke}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.BfoUmaDy.js";import{D as ye}from"../chunks/datetime.nQE3q1jc.js";const Ce=async r=>ve({path:"/personalTracker/upload",data:{event:r}});function Q(r,e,n){const t=r.slice();return t[7]=e[n],t}function X(r){let e,n,t,l,o,u="Close",_,c,f,d,E="Weight",T,b,F,S,V,N,q,W,$=K(r[1]),i=[];for(let s=0;s<$.length;s+=1)i[s]=Y(Q(r,$,s));const fe=s=>U(i[s],1,1,()=>{i[s]=null});function G(s,m){return s[3]?Ue:xe}let j=G(r),h=j(r);return{c(){e=g("div"),n=g("div"),t=g("h4"),l=de(`Add a new event
                `),o=g("button"),o.textContent=u,_=B();for(let s=0;s<i.length;s+=1)i[s].c();c=B(),f=g("form"),d=g("label"),d.textContent=E,T=B(),b=g("input"),F=B(),S=g("br"),V=B(),h.c(),this.h()},l(s){e=v(s,"DIV",{role:!0,class:!0});var m=I(e);n=v(m,"DIV",{class:!0});var a=I(n);t=v(a,"H4",{class:!0});var w=I(t);l=me(w,`Add a new event
                `),o=v(w,"BUTTON",{"data-svelte-h":!0}),O(o)!=="svelte-2m9p61"&&(o.textContent=u),w.forEach(k),_=M(a);for(let R=0;R<i.length;R+=1)i[R].l(a);c=M(a),f=v(a,"FORM",{class:!0});var x=I(f);d=v(x,"LABEL",{for:!0,"data-svelte-h":!0}),O(d)!=="svelte-1wni8ci"&&(d.textContent=E),T=M(x),b=v(x,"INPUT",{type:!0}),F=M(x),S=v(x,"BR",{}),V=M(x),h.l(x),x.forEach(k),a.forEach(k),m.forEach(k),this.h()},h(){C(t,"class","title-bar svelte-1cixduj"),C(d,"for","weight"),C(b,"type","number"),C(f,"class","form-content svelte-1cixduj"),C(n,"class","contents svelte-1cixduj"),C(e,"role","dialog"),C(e,"class","modal svelte-1cixduj")},m(s,m){A(s,e,m),p(e,n),p(n,t),p(t,l),p(t,o),p(n,_);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null);p(n,c),p(n,f),p(f,d),p(f,T),p(f,b),J(b,r[2]),p(f,F),p(f,S),p(f,V),h.m(f,null),N=!0,q||(W=[P(o,"click",ie),P(b,"input",r[6])],q=!0)},p(s,m){if(m&2){$=K(s[1]);let a;for(a=0;a<$.length;a+=1){const w=Q(s,$,a);i[a]?(i[a].p(w,m),y(i[a],1)):(i[a]=Y(w),i[a].c(),y(i[a],1),i[a].m(n,c))}for(z(),a=$.length;a<i.length;a+=1)fe(a);H()}m&4&&te(b.value)!==s[2]&&J(b,s[2]),j===(j=G(s))&&h?h.p(s,m):(h.d(1),h=j(s),h&&(h.c(),h.m(f,null)))},i(s){if(!N){for(let m=0;m<$.length;m+=1)y(i[m]);N=!0}},o(s){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)U(i[m]);N=!1},d(s){s&&k(e),_e(i,s),h.d(),q=!1,pe(W)}}}function Y(r){let e,n;return e=new ue({props:{item:r[7]}}),{c(){oe(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),n=!0},p(t,l){const o={};l&2&&(o.item=t[7]),e.$set(o)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){ae(e,t)}}}function xe(r){let e,n="Login to upload an entry";return{c(){e=g("span"),e.textContent=n,this.h()},l(t){e=v(t,"SPAN",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-4ab4io"&&(e.textContent=n),this.h()},h(){C(e,"class","form-action svelte-1cixduj")},m(t,l){A(t,e,l)},p:D,d(t){t&&k(e)}}}function Ue(r){let e,n="Submit",t,l;return{c(){e=g("button"),e.textContent=n,this.h()},l(o){e=v(o,"BUTTON",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1nfv1d"&&(e.textContent=n),this.h()},h(){C(e,"class","form-action svelte-1cixduj")},m(o,u){A(o,e,u),t||(l=P(e,"click",r[4]),t=!0)},p:D,d(o){o&&k(e),t=!1,l()}}}function Ee(r){let e,n,t=r[0]&&X(r);return{c(){t&&t.c(),e=L()},l(l){t&&t.l(l),e=L()},m(l,o){t&&t.m(l,o),A(l,e,o),n=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&y(t,1)):(t=X(l),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(z(),U(t,1,1,()=>{t=null}),H())},i(l){n||(y(t),n=!0)},o(l){U(t),n=!1},d(l){l&&k(e),t&&t.d(l)}}}function Te(r,e,n){let t;ee(r,ce,d=>n(3,t=d));let{isOpen:l}=e,{onUpload:o}=e,u=[],_;const c=async()=>{if(n(1,u=[]),_!==Math.floor(_)&&u.push({level:"error",header:"Value must not have a decimal part"}),(_<80||_>110)&&u.push({level:"error",header:"Value must be in kg"}),u.length)return;const d=ye.now().toUTC().toUnixInteger();try{await Ce({timestampUTC:d,type:"weight",value:_*100}),o(),ie()}catch(E){let T=E.message;E instanceof be&&E.code===401?T="Invalid logged in user":E instanceof ge&&(T="User is logged out");const b=`<strong>Entry not created</strong><br/> ${T}`;ke.push(b,{theme:{"--toastBarBackground":"#FF0000"}})}};function f(){_=te(this.value),n(2,_)}return r.$$set=d=>{"isOpen"in d&&n(0,l=d.isOpen),"onUpload"in d&&n(5,o=d.onUpload)},[l,u,_,t,c,o,f]}class $e extends ne{constructor(e){super(),le(this,e,Te,Ee,Z,{isOpen:0,onUpload:5})}}function we(r){let e,n;return e=new ue({props:{item:{level:"info",header:"Login to add an entry"}}}),{c(){oe(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){ae(e,t)}}}function Ae(r){let e,n="Add an entry",t,l;return{c(){e=g("button"),e.textContent=n},l(o){e=v(o,"BUTTON",{"data-svelte-h":!0}),O(e)!=="svelte-ank2u2"&&(e.textContent=n)},m(o,u){A(o,e,u),t||(l=P(e,"click",r[1]),t=!0)},i:D,o:D,d(o){o&&k(e),t=!1,l()}}}function Be(r){let e,n,t,l;const o=[Ae,we],u=[];function _(c,f){return c[0]?0:1}return e=_(r),n=u[e]=o[e](r),{c(){n.c(),t=L()},l(c){n.l(c),t=L()},m(c,f){u[e].m(c,f),A(c,t,f),l=!0},p(c,[f]){let d=e;e=_(c),e!==d&&(z(),U(u[d],1,1,()=>{u[d]=null}),H(),n=u[e],n||(n=u[e]=o[e](c),n.c()),y(n,1),n.m(t.parentNode,t))},i(c){l||(y(n),l=!0)},o(c){U(n),l=!1},d(c){c&&k(t),u[e].d(c)}}}function Me(r,e,n){let t;return ee(r,ce,o=>n(0,t=o)),[t,()=>he($e,{onUpload:()=>{}})]}class Se extends ne{constructor(e){super(),le(this,e,Me,Be,Z,{})}}export{Se as component};
