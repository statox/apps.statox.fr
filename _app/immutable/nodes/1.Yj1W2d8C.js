import{s as b,f,l as u,a as x,g as h,h as d,m as v,d as l,c as S,i as c,G as g,n as E,r as $,B as q}from"../chunks/scheduler.JOg8NEYR.js";import{S as y,i as B}from"../chunks/index.LkMwavup.js";import{p as C}from"../chunks/stores.Xz7B9wBr.js";function G(i){let a,s=i[0].status+"",r,o,n,p=i[0].error?.message+"",m;return{c(){a=f("h1"),r=u(s),o=x(),n=f("p"),m=u(p)},l(e){a=h(e,"H1",{});var t=d(a);r=v(t,s),t.forEach(l),o=S(e),n=h(e,"P",{});var _=d(n);m=v(_,p),_.forEach(l)},m(e,t){c(e,a,t),g(a,r),c(e,o,t),c(e,n,t),g(n,m)},p(e,[t]){t&1&&s!==(s=e[0].status+"")&&E(r,s),t&1&&p!==(p=e[0].error?.message+"")&&E(m,p)},i:$,o:$,d(e){e&&(l(a),l(o),l(n))}}}function H(i,a,s){let r;return q(i,C,o=>s(0,r=o)),[r]}class w extends y{constructor(a){super(),B(this,a,H,G,b,{})}}export{w as component};
