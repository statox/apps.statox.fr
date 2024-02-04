import{s as H,e as N,i as _,r as $,d as f,O,f as g,l as y,a as w,g as k,h as v,m as S,c as T,j as A,G as d,n as E,w as j}from"../chunks/scheduler.JOg8NEYR.js";import{S as U,i as V,b as q,d as F,m as G,a as P,t as W,e as x}from"../chunks/index.LkMwavup.js";import{e as b}from"../chunks/each.7LNSErVp.js";import{g as J}from"../chunks/navigation.P-dM0rJ3.js";function C(l,t,s){const e=l.slice();return e[2]=t[s],e}function I(l,t,s){const e=l.slice();return e[5]=t[s],e}function B(l){let t,s,e=l[5].name+"",n,i,o,h=l[5].description+"",c,a,p;function r(){return l[1](l[5])}return{c(){t=g("button"),s=g("h3"),n=y(e),i=w(),o=g("div"),c=y(h),this.h()},l(m){t=k(m,"BUTTON",{class:!0});var u=v(t);s=k(u,"H3",{});var z=v(s);n=S(z,e),z.forEach(f),i=T(u),o=k(u,"DIV",{class:!0});var M=v(o);c=S(M,h),M.forEach(f),u.forEach(f),this.h()},h(){A(o,"class","description svelte-itnz50"),A(t,"class","app svelte-itnz50")},m(m,u){_(m,t,u),d(t,s),d(s,n),d(t,i),d(t,o),d(o,c),a||(p=j(t,"click",r),a=!0)},p(m,u){l=m,u&1&&e!==(e=l[5].name+"")&&E(n,e),u&1&&h!==(h=l[5].description+"")&&E(c,h)},d(m){m&&f(t),a=!1,p()}}}function D(l){let t,s=l[2].name+"",e,n,i,o,h=b(l[2].apps),c=[];for(let a=0;a<h.length;a+=1)c[a]=B(I(l,h,a));return{c(){t=g("h2"),e=y(s),n=w(),i=g("div");for(let a=0;a<c.length;a+=1)c[a].c();o=w(),this.h()},l(a){t=k(a,"H2",{});var p=v(t);e=S(p,s),p.forEach(f),n=T(a),i=k(a,"DIV",{class:!0});var r=v(i);for(let m=0;m<c.length;m+=1)c[m].l(r);o=T(r),r.forEach(f),this.h()},h(){A(i,"class","container svelte-itnz50")},m(a,p){_(a,t,p),d(t,e),_(a,n,p),_(a,i,p);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(i,null);d(i,o)},p(a,p){if(p&1&&s!==(s=a[2].name+"")&&E(e,s),p&1){h=b(a[2].apps);let r;for(r=0;r<h.length;r+=1){const m=I(a,h,r);c[r]?c[r].p(m,p):(c[r]=B(m),c[r].c(),c[r].m(i,o))}for(;r<c.length;r+=1)c[r].d(1);c.length=h.length}},d(a){a&&(f(t),f(n),f(i)),O(c,a)}}}function K(l){let t,s=b(l[0]),e=[];for(let n=0;n<s.length;n+=1)e[n]=D(C(l,s,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=N()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=N()},m(n,i){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,i);_(n,t,i)},p(n,[i]){if(i&1){s=b(n[0]);let o;for(o=0;o<s.length;o+=1){const h=C(n,s,o);e[o]?e[o].p(h,i):(e[o]=D(h),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=s.length}},i:$,o:$,d(n){n&&f(t),O(e,n)}}}function L(l,t,s){let{sections:e}=t;const n=i=>J(i.link);return l.$$set=i=>{"sections"in i&&s(0,e=i.sections)},[e,n]}class Q extends U{constructor(t){super(),V(this,t,L,K,H,{sections:0})}}const R={name:"Music",apps:[{name:"Song Book",description:"The list of my guitar tablatures",link:"/songbook"},{name:"Metronome",description:"Never miss a beat",link:"/metronome"},{name:"Scales",description:"A tool to visualize music scales and common chords progressions",link:"/scales"},{name:"Chord Wheel",description:"A tool to find the key of a song and work with scale degrees",link:"/chordwheel"},{name:"Tap Tempo",description:"Find a tempo by tapping it on the screen or the keyboard",link:"/taptempo"}]},X={name:"Utils",apps:[{name:"Notes",description:"A list of notes for stuff I keep forgetting",link:"/notes"},{name:"Clipboard",description:"My universal clipboard",link:"/clipboard"},{name:"About",description:"The about section of this website",link:"/about"}]},Y=[X,R];function Z(l){let t,s;return t=new Q({props:{sections:Y}}),{c(){q(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,n){G(t,e,n),s=!0},p:$,i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){W(t.$$.fragment,e),s=!1},d(e){x(t,e)}}}class oe extends U{constructor(t){super(),V(this,t,null,Z,H,{})}}export{oe as component};