import{s as N,A as y,i as _,n as k,f,B as T,q as S,e as d,t as $,a as x,c as g,b as v,d as q,g as P,m as u,h as b,C as j}from"../chunks/scheduler.fAu-Yx5A.js";import{e as w}from"../chunks/each.DxvxzW-o.js";import{S as C,i as D}from"../chunks/index.DICwlGiI.js";function A(i,s,n){const t=i.slice();return t[2]=s[n],t}function E(i,s,n){const t=i.slice();return t[5]=s[n],t}function I(i){let s,n=i[5].name+"",t;return{c(){s=d("span"),t=$(n),this.h()},l(a){s=g(a,"SPAN",{class:!0});var e=v(s);t=q(e,n),e.forEach(f),this.h()},h(){u(s,"class","link-name")},m(a,e){_(a,s,e),b(s,t)},p:k,d(a){a&&f(s)}}}function M(i){let s,n,t,a,e=!i[0]&&I(i);return{c(){s=d("a"),e&&e.c(),n=x(),t=d("img"),this.h()},l(l){s=g(l,"A",{class:!0,href:!0});var c=v(s);e&&e.l(c),n=P(c),t=g(c,"IMG",{class:!0,alt:!0,src:!0}),c.forEach(f),this.h()},h(){u(t,"class","link-favicon svelte-95ou4p"),u(t,"alt",i[5].name),j(t.src,a=i[5].icon??"https://s2.googleusercontent.com/s2/favicons?domain="+i[5].url)||u(t,"src",a),u(s,"class","app svelte-95ou4p"),u(s,"href",i[5].url)},m(l,c){_(l,s,c),e&&e.m(s,null),b(s,n),b(s,t)},p(l,c){l[0]?e&&(e.d(1),e=null):e?e.p(l,c):(e=I(l),e.c(),e.m(s,n))},d(l){l&&f(s),e&&e.d()}}}function R(i){let s,n=i[2]+"",t,a,e,l,c=w(i[1][i[2]]),h=[];for(let o=0;o<c.length;o+=1)h[o]=M(E(i,c,o));return{c(){s=d("h3"),t=$(n),a=x(),e=d("div");for(let o=0;o<h.length;o+=1)h[o].c();l=x(),this.h()},l(o){s=g(o,"H3",{});var p=v(s);t=q(p,n),p.forEach(f),a=P(o),e=g(o,"DIV",{class:!0});var r=v(e);for(let m=0;m<h.length;m+=1)h[m].l(r);l=P(r),r.forEach(f),this.h()},h(){u(e,"class","container svelte-95ou4p")},m(o,p){_(o,s,p),b(s,t),_(o,a,p),_(o,e,p);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(e,null);b(e,l)},p(o,p){if(p&3){c=w(o[1][o[2]]);let r;for(r=0;r<c.length;r+=1){const m=E(o,c,r);h[r]?h[r].p(m,p):(h[r]=M(m),h[r].c(),h[r].m(e,l))}for(;r<h.length;r+=1)h[r].d(1);h.length=c.length}},d(o){o&&(f(s),f(a),f(e)),T(h,o)}}}function G(i){let s,n=w(Object.keys(i[1])),t=[];for(let a=0;a<n.length;a+=1)t[a]=R(A(i,n,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();s=y()},l(a){for(let e=0;e<t.length;e+=1)t[e].l(a);s=y()},m(a,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(a,e);_(a,s,e)},p(a,[e]){if(e&3){n=w(Object.keys(a[1]));let l;for(l=0;l<n.length;l+=1){const c=A(a,n,l);t[l]?t[l].p(c,e):(t[l]=R(c),t[l].c(),t[l].m(s.parentNode,s))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i:k,o:k,d(a){a&&f(s),T(t,a)}}}function H(i,s,n){const t={News:[{name:"Tildes",url:"https://tildes.net"},{name:"Lobste.rs",url:"https://lobste.rs"},{name:"Hacker news",url:"https://news.ycombinator.com/"},{name:"Ars Technica",url:"https://arstechnica.com/"}],Perso:[{name:"IoT Dashboard",url:"https://kibana.statox.fr/app/dashboards#/view/2993b516-b09b-4826-a1b2-e40834834627?_g=(time:(from:now-12h,to:now))",icon:"https://www.elastic.co/apple-icon-192x192.png"}],Infra:[{name:"Raccoon - Portainer",url:"https://raccoon.statox.fr:9443/",icon:"https://www.portainer.io/hubfs/crane-icon.svg"},{name:"Panda - Portainer",url:"https://panda.statox.fr:9443/",icon:"https://www.portainer.io/hubfs/crane-icon.svg"},{name:"Panda - Transmission",url:"http://panda.statox.fr:9091/",icon:"https://transmissionbt.com/favicon.ico"}],Github:[{name:"PR - api.statox.fr",url:"https://github.com/statox/api.statox.fr/pulls"},{name:"PR - apps.statox.fr",url:"https://github.com/statox/apps.statox.fr/pulls"},{name:"PR - blog",url:"https://github.com/statox/blog/pulls"}]};let a=!1;return S(()=>{n(0,a=window?window.matchMedia("(max-width: 600px)").matches:!1)}),[a,t]}class V extends C{constructor(s){super(),D(this,s,H,G,N,{})}}export{V as component};
