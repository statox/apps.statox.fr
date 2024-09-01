import{s as W,A as H,i as _,n as y,f,B as D,e as g,t as w,a as $,c as k,b,d as A,g as M,l as S,h as u,j as E,E as V}from"../chunks/scheduler.COTwWgsD.js";import{S as P,i as U,b as j,d as q,m as F,a as O,t as R,e as x}from"../chunks/index.J-2_mda1.js";import{e as v}from"../chunks/each.BC3JvRW1.js";import{g as G}from"../chunks/entry.D-WxAd_p.js";function z(l,t,o){const e=l.slice();return e[2]=t[o],e}function N(l,t,o){const e=l.slice();return e[5]=t[o],e}function C(l){let t,o,e=l[5].name+"",n,i,s,m=l[5].description+"",c,a,p;function r(){return l[1](l[5])}return{c(){t=g("button"),o=g("h3"),n=w(e),i=$(),s=g("div"),c=w(m),this.h()},l(h){t=k(h,"BUTTON",{class:!0});var d=b(t);o=k(d,"H3",{});var T=b(o);n=A(T,e),T.forEach(f),i=M(d),s=k(d,"DIV",{class:!0});var B=b(s);c=A(B,m),B.forEach(f),d.forEach(f),this.h()},h(){S(s,"class","description svelte-itnz50"),S(t,"class","app svelte-itnz50")},m(h,d){_(h,t,d),u(t,o),u(o,n),u(t,i),u(t,s),u(s,c),a||(p=V(t,"click",r),a=!0)},p(h,d){l=h,d&1&&e!==(e=l[5].name+"")&&E(n,e),d&1&&m!==(m=l[5].description+"")&&E(c,m)},d(h){h&&f(t),a=!1,p()}}}function I(l){let t,o=l[2].name+"",e,n,i,s,m=v(l[2].apps),c=[];for(let a=0;a<m.length;a+=1)c[a]=C(N(l,m,a));return{c(){t=g("h2"),e=w(o),n=$(),i=g("div");for(let a=0;a<c.length;a+=1)c[a].c();s=$(),this.h()},l(a){t=k(a,"H2",{});var p=b(t);e=A(p,o),p.forEach(f),n=M(a),i=k(a,"DIV",{class:!0});var r=b(i);for(let h=0;h<c.length;h+=1)c[h].l(r);s=M(r),r.forEach(f),this.h()},h(){S(i,"class","container svelte-itnz50")},m(a,p){_(a,t,p),u(t,e),_(a,n,p),_(a,i,p);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(i,null);u(i,s)},p(a,p){if(p&1&&o!==(o=a[2].name+"")&&E(e,o),p&1){m=v(a[2].apps);let r;for(r=0;r<m.length;r+=1){const h=N(a,m,r);c[r]?c[r].p(h,p):(c[r]=C(h),c[r].c(),c[r].m(i,s))}for(;r<c.length;r+=1)c[r].d(1);c.length=m.length}},d(a){a&&(f(t),f(n),f(i)),D(c,a)}}}function J(l){let t,o=v(l[0]),e=[];for(let n=0;n<o.length;n+=1)e[n]=I(z(l,o,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=H()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=H()},m(n,i){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,i);_(n,t,i)},p(n,[i]){if(i&1){o=v(n[0]);let s;for(s=0;s<o.length;s+=1){const m=z(n,o,s);e[s]?e[s].p(m,i):(e[s]=I(m),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=o.length}},i:y,o:y,d(n){n&&f(t),D(e,n)}}}function K(l,t,o){let{sections:e}=t;const n=i=>G(i.link);return l.$$set=i=>{"sections"in i&&o(0,e=i.sections)},[e,n]}class L extends P{constructor(t){super(),U(this,t,K,J,W,{sections:0})}}const Q={name:"Music",apps:[{name:"Song Book",description:"The list of my guitar tablatures",link:"/songbook"},{name:"Metronome",description:"Never miss a beat",link:"/metronome"},{name:"Scales",description:"A tool to visualize music scales and common chords progressions",link:"/scales"},{name:"Chord Wheel",description:"A tool to find the key of a song and work with scale degrees",link:"/chordwheel"},{name:"Tap Tempo",description:"Find a tempo by tapping it on the screen or the keyboard",link:"/taptempo"}]},X={name:"Utils",apps:[{name:"Notes",description:"A list of notes for stuff I keep forgetting",link:"/notes"},{name:"Clipboard",description:"My universal clipboard",link:"/clipboard"},{name:"Reactor",description:"My collection of memes and various reaction images",link:"/reactor"},{name:"Web Watcher",description:"Monitor pages on the web and notify me when they change",link:"/webwatcher"},{name:"Browser home",description:"A page meant to be the default page of my browsers. Holding my important and often visited links",link:"/browser-home"},{name:"About",description:"The about section of this website",link:"/about"}]},Y={name:"Perso",apps:[{name:"Browser home",description:"A page meant to be the default page of my browsers. Holding my important and often visited links",link:"/browser-home"},{name:"Home tracker",description:"My homemade home monitoring system",link:"/home-tracker"}]},Z=[Y,X,Q];function ee(l){let t,o;return t=new L({props:{sections:Z}}),{c(){j(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,n){F(t,e,n),o=!0},p:y,i(e){o||(O(t.$$.fragment,e),o=!0)},o(e){R(t.$$.fragment,e),o=!1},d(e){x(t,e)}}}class ie extends P{constructor(t){super(),U(this,t,null,ee,W,{})}}export{ie as component};
