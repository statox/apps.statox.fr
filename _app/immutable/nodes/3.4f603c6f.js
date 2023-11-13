import{s as Rt,f as g,l as et,a as B,g as p,h as R,m as lt,d as f,c as I,j as z,B as oe,i as b,y as m,z as vt,u as x,C as zt,D as st,n as re,E as pt,F as se,o as ae,e as bt}from"../chunks/scheduler.e5a28fae.js";import{S as jt,i as Dt,a as T,g as nt,c as ot,t as j,b as Ct,d as kt,m as wt,e as Lt}from"../chunks/index.47d72d80.js";import{e as H}from"../chunks/each.e59479a4.js";const ie="https://raw.githubusercontent.com/statox/blog/master/src/_data/chords.json",ce=async()=>({chords:await fetch(ie).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()})}),ke=Object.freeze(Object.defineProperty({__proto__:null,load:ce},Symbol.toStringTag,{value:"Module"})),fe=(a,t)=>a<t?-1:a>t?1:0,Vt=(a,t)=>{const r=a.toLowerCase(),n=t.toLowerCase();return fe(r,n)};function ue(a){let t,r,n,e,l,i;return{c(){t=g("span"),r=g("a"),n=et(a[1]),l=B(),i=g("span"),this.h()},l(u){t=p(u,"SPAN",{});var _=R(t);r=p(_,"A",{href:!0,target:!0,rel:!0});var $=R(r);n=lt($,a[1]),$.forEach(f),_.forEach(f),l=I(u),i=p(u,"SPAN",{class:!0}),R(i).forEach(f),this.h()},h(){z(r,"href",e=a[0].url),z(r,"target","_blank"),z(r,"rel","noopener noreferrer"),z(i,"class",oe(a[2])+" svelte-1ew26co")},m(u,_){b(u,t,_),m(t,r),m(r,n),b(u,l,_),b(u,i,_)},p(u,[_]){_&1&&e!==(e=u[0].url)&&z(r,"href",e)},i:vt,o:vt,d(u){u&&(f(t),f(l),f(i))}}}function he(a,t,r){let{chord:n}=t,{showArtist:e=!1}=t;const l=(e?n.artist+" - ":"")+n.title;let u=(_=>{const $=_.url;return $.includes(".doc")?"fas fa-xs fa-file-word":$.includes(".pdf")?"fas fa-xs fa-file-pdf":$.includes("youtube")?"fa fa-xs fa-youtube":"fas fa-xs fa-link"})(n);return a.$$set=_=>{"chord"in _&&r(0,n=_.chord),"showArtist"in _&&r(3,e=_.showArtist)},[n,l,u,e]}class Nt extends jt{constructor(t){super(),Dt(this,t,he,ue,Rt,{chord:0,showArtist:3})}}function qt(a,t,r){const n=a.slice();n[12]=t[r];const e=n[7][n[12]].sort((i,u)=>i.title<u.title?-1:1);n[0]=e;const l=n[12]+";"+n[0].reduce((i,u)=>i+u.title+";"+u.tags.join(","),"");return n[13]=l,n}function Ft(a,t,r){const n=a.slice();n[16]=t[r];const e=n[12]+";"+n[16].title+";"+n[16].tags.join(",");return n[17]=e,n}function Gt(a,t,r){const n=a.slice();n[20]=t[r];const e=n[0][n[20]];return n[16]=e,n}function Jt(a,t,r){const n=a.slice();return n[16]=t[r],n}function Kt(a){let t,r,n,e;return r=new Nt({props:{chord:a[16]}}),{c(){t=g("li"),Ct(r.$$.fragment),n=B()},l(l){t=p(l,"LI",{});var i=R(t);kt(r.$$.fragment,i),n=I(i),i.forEach(f)},m(l,i){b(l,t,i),wt(r,t,null),m(t,n),e=!0},p(l,i){const u={};i&4&&(u.chord=l[16]),r.$set(u)},i(l){e||(T(r.$$.fragment,l),e=!0)},o(l){j(r.$$.fragment,l),e=!1},d(l){l&&f(t),Lt(r)}}}function Qt(a){let t,r=" ↶ ",n,e;return{c(){t=g("button"),t.textContent=r},l(l){t=p(l,"BUTTON",{"data-svelte-h":!0}),x(t)!=="svelte-1mg1zky"&&(t.textContent=r)},m(l,i){b(l,t,i),n||(e=st(t,"click",a[6]),n=!0)},p:vt,d(l){l&&f(t),n=!1,e()}}}function Wt(a){let t,r,n,e;return r=new Nt({props:{chord:a[16],showArtist:!0}}),{c(){t=g("li"),Ct(r.$$.fragment),n=B()},l(l){t=p(l,"LI",{});var i=R(t);kt(r.$$.fragment,i),n=I(i),i.forEach(f)},m(l,i){b(l,t,i),wt(r,t,null),m(t,n),e=!0},p(l,i){const u={};i&9&&(u.chord=l[16]),r.$set(u)},i(l){e||(T(r.$$.fragment,l),e=!0)},o(l){j(r.$$.fragment,l),e=!1},d(l){l&&f(t),Lt(r)}}}function Xt(a){let t,r,n=a[12]+"",e,l,i,u,_,$=H(a[0]),h=[];for(let v=0;v<$.length;v+=1)h[v]=Zt(Ft(a,$,v));const U=v=>j(h[v],1,1,()=>{h[v]=null});return{c(){t=g("tr"),r=g("td"),e=et(n),l=B(),i=g("ul");for(let v=0;v<h.length;v+=1)h[v].c();u=B(),this.h()},l(v){t=p(v,"TR",{});var E=R(t);r=p(E,"TD",{});var d=R(r);e=lt(d,n),l=I(d),i=p(d,"UL",{class:!0});var C=R(i);for(let S=0;S<h.length;S+=1)h[S].l(C);C.forEach(f),d.forEach(f),u=I(E),E.forEach(f),this.h()},h(){z(i,"class","ul2col svelte-vupm4l")},m(v,E){b(v,t,E),m(t,r),m(r,e),m(r,l),m(r,i);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(i,null);m(t,u),_=!0},p(v,E){if(E&130){$=H(v[0]);let d;for(d=0;d<$.length;d+=1){const C=Ft(v,$,d);h[d]?(h[d].p(C,E),T(h[d],1)):(h[d]=Zt(C),h[d].c(),T(h[d],1),h[d].m(i,null))}for(nt(),d=$.length;d<h.length;d+=1)U(d);ot()}},i(v){if(!_){for(let E=0;E<$.length;E+=1)T(h[E]);_=!0}},o(v){h=h.filter(Boolean);for(let E=0;E<h.length;E+=1)j(h[E]);_=!1},d(v){v&&f(t),pt(h,v)}}}function Yt(a){let t,r,n,e;return r=new Nt({props:{chord:a[16]}}),{c(){t=g("li"),Ct(r.$$.fragment),n=B()},l(l){t=p(l,"LI",{});var i=R(t);kt(r.$$.fragment,i),n=I(i),i.forEach(f)},m(l,i){b(l,t,i),wt(r,t,null),m(t,n),e=!0},p:vt,i(l){e||(T(r.$$.fragment,l),e=!0)},o(l){j(r.$$.fragment,l),e=!1},d(l){l&&f(t),Lt(r)}}}function Zt(a){let t=a[1].length===0||a[17].toLowerCase().match(a[1].toLowerCase()),r,n,e=t&&Yt(a);return{c(){e&&e.c(),r=bt()},l(l){e&&e.l(l),r=bt()},m(l,i){e&&e.m(l,i),b(l,r,i),n=!0},p(l,i){i&2&&(t=l[1].length===0||l[17].toLowerCase().match(l[1].toLowerCase())),t?e?(e.p(l,i),i&2&&T(e,1)):(e=Yt(l),e.c(),T(e,1),e.m(r.parentNode,r)):e&&(nt(),j(e,1,1,()=>{e=null}),ot())},i(l){n||(T(e),n=!0)},o(l){j(e),n=!1},d(l){l&&f(r),e&&e.d(l)}}}function te(a){let t=a[1].length===0||a[13].toLowerCase().match(a[1].toLowerCase()),r,n,e=t&&Xt(a);return{c(){e&&e.c(),r=bt()},l(l){e&&e.l(l),r=bt()},m(l,i){e&&e.m(l,i),b(l,r,i),n=!0},p(l,i){i&2&&(t=l[1].length===0||l[13].toLowerCase().match(l[1].toLowerCase())),t?e?(e.p(l,i),i&2&&T(e,1)):(e=Xt(l),e.c(),T(e,1),e.m(r.parentNode,r)):e&&(nt(),j(e,1,1,()=>{e=null}),ot())},i(l){n||(T(e),n=!0)},o(l){j(e),n=!1},d(l){l&&f(r),e&&e.d(l)}}}function _e(a){let t,r="Chords",n,e,l,i=a[0].length+"",u,_,$,h,U,v="Latest additions",E,d,C,S,W="More...",at,it,ct,D,X,Ot="Random song",$t,q,Ut="Get more random songs",Et,ft,Tt,St,Y,ut,ht,_t,A,Z,At="All chords",Bt,P,It,F,Mt=" ✖ ",dt,mt,gt,G,rt,yt,Pt,J=H(a[2]),k=[];for(let o=0;o<J.length;o+=1)k[o]=Kt(Jt(a,J,o));const ee=o=>j(k[o],1,1,()=>{k[o]=null});let y=a[3].length>V&&Qt(a),K=H(a[3].slice(a[3].length-V)),w=[];for(let o=0;o<K.length;o+=1)w[o]=Wt(Gt(a,K,o));const le=o=>j(w[o],1,1,()=>{w[o]=null});let Q=H(Object.keys(a[7]).sort(Vt)),L=[];for(let o=0;o<Q.length;o+=1)L[o]=te(qt(a,Q,o));const ne=o=>j(L[o],1,1,()=>{L[o]=null});return{c(){t=g("h2"),t.textContent=r,n=B(),e=g("p"),l=et("This is a list of "),u=et(i),_=et(" song chords I have been gathering for the past 10 years and that I like to play."),$=B(),h=g("div"),U=g("h3"),U.textContent=v,E=B(),d=g("ul");for(let o=0;o<k.length;o+=1)k[o].c();C=B(),S=g("button"),S.textContent=W,at=B(),it=g("br"),ct=B(),D=g("div"),X=g("h3"),X.textContent=Ot,$t=B(),q=g("button"),q.textContent=Ut,Et=B(),y&&y.c(),ft=B(),Tt=g("br"),St=B(),Y=g("ul");for(let o=0;o<w.length;o+=1)w[o].c();ut=B(),ht=g("br"),_t=B(),A=g("div"),Z=g("h3"),Z.textContent=At,Bt=et(`
    Search an artist or a title: `),P=g("input"),It=B(),F=g("button"),F.textContent=Mt,dt=B(),mt=g("br"),gt=B(),G=g("table");for(let o=0;o<L.length;o+=1)L[o].c();this.h()},l(o){t=p(o,"H2",{"data-svelte-h":!0}),x(t)!=="svelte-17mhdcl"&&(t.textContent=r),n=I(o),e=p(o,"P",{});var c=R(e);l=lt(c,"This is a list of "),u=lt(c,i),_=lt(c," song chords I have been gathering for the past 10 years and that I like to play."),c.forEach(f),$=I(o),h=p(o,"DIV",{});var s=R(h);U=p(s,"H3",{"data-svelte-h":!0}),x(U)!=="svelte-1xn6y62"&&(U.textContent=v),E=I(s),d=p(s,"UL",{class:!0});var N=R(d);for(let O=0;O<k.length;O+=1)k[O].l(N);N.forEach(f),C=I(s),S=p(s,"BUTTON",{"data-svelte-h":!0}),x(S)!=="svelte-hbensu"&&(S.textContent=W),s.forEach(f),at=I(o),it=p(o,"BR",{}),ct=I(o),D=p(o,"DIV",{});var M=R(D);X=p(M,"H3",{"data-svelte-h":!0}),x(X)!=="svelte-1ouhk5m"&&(X.textContent=Ot),$t=I(M),q=p(M,"BUTTON",{"data-svelte-h":!0}),x(q)!=="svelte-1gfm3kd"&&(q.textContent=Ut),Et=I(M),y&&y.l(M),ft=I(M),Tt=p(M,"BR",{}),St=I(M),Y=p(M,"UL",{});var xt=R(Y);for(let O=0;O<w.length;O+=1)w[O].l(xt);xt.forEach(f),M.forEach(f),ut=I(o),ht=p(o,"BR",{}),_t=I(o),A=p(o,"DIV",{});var tt=R(A);Z=p(tt,"H3",{"data-svelte-h":!0}),x(Z)!=="svelte-1drf88u"&&(Z.textContent=At),Bt=lt(tt,`
    Search an artist or a title: `),P=p(tt,"INPUT",{type:!0}),It=I(tt),F=p(tt,"BUTTON",{"data-svelte-h":!0}),x(F)!=="svelte-y0fatm"&&(F.textContent=Mt),tt.forEach(f),dt=I(o),mt=p(o,"BR",{}),gt=I(o),G=p(o,"TABLE",{});var Ht=R(G);for(let O=0;O<L.length;O+=1)L[O].l(Ht);Ht.forEach(f),this.h()},h(){z(d,"class","ul2col svelte-vupm4l"),z(P,"type","text")},m(o,c){b(o,t,c),b(o,n,c),b(o,e,c),m(e,l),m(e,u),m(e,_),b(o,$,c),b(o,h,c),m(h,U),m(h,E),m(h,d);for(let s=0;s<k.length;s+=1)k[s]&&k[s].m(d,null);m(h,C),m(h,S),b(o,at,c),b(o,it,c),b(o,ct,c),b(o,D,c),m(D,X),m(D,$t),m(D,q),m(D,Et),y&&y.m(D,null),m(D,ft),m(D,Tt),m(D,St),m(D,Y);for(let s=0;s<w.length;s+=1)w[s]&&w[s].m(Y,null);b(o,ut,c),b(o,ht,c),b(o,_t,c),b(o,A,c),m(A,Z),m(A,Bt),m(A,P),zt(P,a[1]),m(A,It),m(A,F),b(o,dt,c),b(o,mt,c),b(o,gt,c),b(o,G,c);for(let s=0;s<L.length;s+=1)L[s]&&L[s].m(G,null);rt=!0,yt||(Pt=[st(S,"click",a[8]),st(q,"click",a[5]),st(P,"input",a[9]),st(F,"click",a[10])],yt=!0)},p(o,[c]){if((!rt||c&1)&&i!==(i=o[0].length+"")&&re(u,i),c&4){J=H(o[2]);let s;for(s=0;s<J.length;s+=1){const N=Jt(o,J,s);k[s]?(k[s].p(N,c),T(k[s],1)):(k[s]=Kt(N),k[s].c(),T(k[s],1),k[s].m(d,null))}for(nt(),s=J.length;s<k.length;s+=1)ee(s);ot()}if(o[3].length>V?y?y.p(o,c):(y=Qt(o),y.c(),y.m(D,ft)):y&&(y.d(1),y=null),c&9){K=H(o[3].slice(o[3].length-V));let s;for(s=0;s<K.length;s+=1){const N=Gt(o,K,s);w[s]?(w[s].p(N,c),T(w[s],1)):(w[s]=Wt(N),w[s].c(),T(w[s],1),w[s].m(Y,null))}for(nt(),s=K.length;s<w.length;s+=1)le(s);ot()}if(c&2&&P.value!==o[1]&&zt(P,o[1]),c&130){Q=H(Object.keys(o[7]).sort(Vt));let s;for(s=0;s<Q.length;s+=1){const N=qt(o,Q,s);L[s]?(L[s].p(N,c),T(L[s],1)):(L[s]=te(N),L[s].c(),T(L[s],1),L[s].m(G,null))}for(nt(),s=Q.length;s<L.length;s+=1)ne(s);ot()}},i(o){if(!rt){for(let c=0;c<J.length;c+=1)T(k[c]);for(let c=0;c<K.length;c+=1)T(w[c]);for(let c=0;c<Q.length;c+=1)T(L[c]);rt=!0}},o(o){k=k.filter(Boolean);for(let c=0;c<k.length;c+=1)j(k[c]);w=w.filter(Boolean);for(let c=0;c<w.length;c+=1)j(w[c]);L=L.filter(Boolean);for(let c=0;c<L.length;c+=1)j(L[c]);rt=!1},d(o){o&&(f(t),f(n),f(e),f($),f(h),f(at),f(it),f(ct),f(D),f(ut),f(ht),f(_t),f(A),f(dt),f(mt),f(gt),f(G)),pt(k,o),y&&y.d(),pt(w,o),pt(L,o),yt=!1,se(Pt)}}}const V=4;function de(a,t,r){let{chords:n}=t,e="",l=6,i=[];const u=()=>{l+=4,r(2,i=n.filter(C=>C.creationDate).sort((C,S)=>S.creationDate-C.creationDate).slice(0,l))};let _=[];const $=()=>{_.length>=n.length-V&&r(3,_=[]);for(let C=0;C<V;C++){let S=-1;for(;S===-1||_.includes(S);)S=Math.floor(Math.random()*n.length);_.push(S)}r(3,_)},h=()=>{_.length<=V||(_.splice(_.length-V),r(3,_))},U=n.reduce((C,S)=>{const W=S.artist;return C[W]||(C[W]=[]),C[W].push(S),C},{});ae(()=>{$(),u()});const v=()=>u();function E(){e=this.value,r(1,e)}const d=()=>r(1,e="");return a.$$set=C=>{"chords"in C&&r(0,n=C.chords)},[n,e,i,_,u,$,h,U,v,E,d]}class me extends jt{constructor(t){super(),Dt(this,t,de,_e,Rt,{chords:0})}}function ge(a){let t,r;return t=new me({props:{chords:a[0].chords}}),{c(){Ct(t.$$.fragment)},l(n){kt(t.$$.fragment,n)},m(n,e){wt(t,n,e),r=!0},p(n,[e]){const l={};e&1&&(l.chords=n[0].chords),t.$set(l)},i(n){r||(T(t.$$.fragment,n),r=!0)},o(n){j(t.$$.fragment,n),r=!1},d(n){Lt(t,n)}}}function pe(a,t,r){let{data:n}=t;return a.$$set=e=>{"data"in e&&r(0,n=e.data)},[n]}class we extends jt{constructor(t){super(),Dt(this,t,pe,ge,Rt,{data:0})}}export{we as component,ke as universal};
