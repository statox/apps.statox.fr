import{s as ve,e as d,a as B,A as re,c as v,g as M,b as R,f as m,l as g,i as E,L as ne,E as K,n as F,B as ge,t as ce,d as ue,z,h as _,j as be,C as ae,G as ze,k as Se,y as Fe,I as je}from"../chunks/scheduler.D1KS-ADa.js";import{h as Ee,u as qe}from"../chunks/await_block.DGw-VUpf.js";import{S as ke,i as Ce,a as j,g as ye,t as G,c as Te,b as fe,d as he,m as me,e as pe}from"../chunks/index.8CYbRCgU.js";import{c as $e,o as Ge}from"../chunks/store.CwZ13uw-.js";import{g as Je,u as De,M as Ve,U as xe}from"../chunks/Main.NPSwmvR8.js";import{M as Ke}from"../chunks/Main.CoaPK9p-.js";import{P as Y}from"../chunks/public.xpUinP6t.js";import{r as Qe,A as We}from"../chunks/index.A9pX7N51.js";import{s as Xe}from"../chunks/client.C-zjehHN.js";import{e as oe}from"../chunks/each.EXCWbmV2.js";import{t as Re}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.iy9WtnvX.js";import"../chunks/entry.4UXKNM9e.js";import{p as Ye}from"../chunks/Main.svelte_svelte_type_style_lang.CUV0Fk58.js";const Ze=!1,At=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ze},Symbol.toStringTag,{value:"Module"})),Ue=()=>Qe({path:"/reactor/getEntriesForPublic"}),et=async n=>{const e=Y+"/reactor/addEntry",l=await Je();typeof l=="string"&&await Xe.post(e).auth(l,{type:"bearer"}).field("name",n.name).field("commaSeparatedTags",n.commaSeparatedTags).attach("file",n.file)};function Ne(n,e,l){const t=n.slice();return t[10]=e[l],t}function Le(n,e,l){const t=n.slice();return t[13]=e[l],t}function Ie(n){let e,l=n[13]+"",t;return{c(){e=d("span"),t=ce(l),this.h()},l(r){e=v(r,"SPAN",{class:!0});var o=R(e);t=ue(o,l),o.forEach(m),this.h()},h(){g(e,"class","tag svelte-16m67n3")},m(r,o){E(r,e,o),_(e,t)},p(r,o){o&8&&l!==(l=r[13]+"")&&be(t,l)},d(r){r&&m(e)}}}function tt(n){let e,l,t;return{c(){e=d("img"),this.h()},l(r){e=v(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){g(e,"class","medium-margin svelte-16m67n3"),ae(e.src,l=Y+n[10].uri)||g(e,"src",l),g(e,"alt",t=n[10].name)},m(r,o){E(r,e,o)},p(r,o){o&8&&!ae(e.src,l=Y+r[10].uri)&&g(e,"src",l),o&8&&t!==(t=r[10].name)&&g(e,"alt",t)},d(r){r&&m(e)}}}function lt(n){let e,l;return{c(){e=d("video"),this.h()},l(t){e=v(t,"VIDEO",{class:!0,style:!0,src:!0}),R(e).forEach(m),this.h()},h(){g(e,"class","medium-margin svelte-16m67n3"),ze(e,"max-width","100%"),e.controls=!0,ae(e.src,l=Y+n[10].uri)||g(e,"src",l)},m(t,r){E(t,e,r)},p(t,r){r&8&&!ae(e.src,l=Y+t[10].uri)&&g(e,"src",l)},d(t){t&&m(e)}}}function Pe(n){let e,l,t,r=n[10].name+"",o,u,a,p,s,f,c=`<i class="fas fa-copy"></i>
                    Copy link`,b,i,C,D,O,U,y,h,k,H=oe(n[10].tags),A=[];for(let N=0;N<H.length;N+=1)A[N]=Ie(Le(n,H,N));function Q(){return n[7](n[10])}function J(N,I){return I&8&&(D=null),D==null&&(D=!!N[5](N[10])),D?lt:tt}let X=J(n,-1),S=X(n);return{c(){e=d("div"),l=d("div"),t=d("b"),o=ce(r),u=B(),a=d("div");for(let N=0;N<A.length;N+=1)A[N].c();p=B(),s=d("div"),f=d("button"),f.innerHTML=c,b=B(),i=d("div"),C=d("a"),S.c(),y=B(),this.h()},l(N){e=v(N,"DIV",{});var I=R(e);l=v(I,"DIV",{});var P=R(l);t=v(P,"B",{});var W=R(t);o=ue(W,r),W.forEach(m),P.forEach(m),u=M(I),a=v(I,"DIV",{class:!0});var Z=R(a);for(let w=0;w<A.length;w+=1)A[w].l(Z);Z.forEach(m),p=M(I),s=v(I,"DIV",{});var ee=R(s);f=v(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-2xhnct"&&(f.innerHTML=c),ee.forEach(m),I.forEach(m),b=M(N),i=v(N,"DIV",{});var te=R(i);C=v(te,"A",{href:!0,download:!0,rel:!0,target:!0});var x=R(C);S.l(x),x.forEach(m),y=M(te),te.forEach(m),this.h()},h(){g(a,"class","svelte-16m67n3"),g(f,"class","full-width svelte-16m67n3"),g(C,"href",O=Y+n[10].uri),g(C,"download",U=n[10].name),g(C,"rel","noopener noreferrer"),g(C,"target","blank")},m(N,I){E(N,e,I),_(e,l),_(l,t),_(t,o),_(e,u),_(e,a);for(let P=0;P<A.length;P+=1)A[P]&&A[P].m(a,null);_(e,p),_(e,s),_(s,f),E(N,b,I),E(N,i,I),_(i,C),S.m(C,null),_(i,y),h||(k=K(f,"click",Q),h=!0)},p(N,I){if(n=N,I&8&&r!==(r=n[10].name+"")&&be(o,r),I&8){H=oe(n[10].tags);let P;for(P=0;P<H.length;P+=1){const W=Le(n,H,P);A[P]?A[P].p(W,I):(A[P]=Ie(W),A[P].c(),A[P].m(a,null))}for(;P<A.length;P+=1)A[P].d(1);A.length=H.length}X===(X=J(n,I))&&S?S.p(n,I):(S.d(1),S=X(n),S&&(S.c(),S.m(C,null))),I&8&&O!==(O=Y+n[10].uri)&&g(C,"href",O),I&8&&U!==(U=n[10].name)&&g(C,"download",U)},d(N){N&&(m(e),m(b),m(i)),ge(A,N),S.d(),h=!1,k()}}}function Ae(n){let e,l="More...",t,r;return{c(){e=d("button"),e.textContent=l,this.h()},l(o){e=v(o,"BUTTON",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-3fputj"&&(e.textContent=l),this.h()},h(){g(e,"class","full-width medium-margin svelte-16m67n3")},m(o,u){E(o,e,u),t||(r=K(e,"click",n[8]),t=!0)},p:F,d(o){o&&m(e),t=!1,r()}}}function nt(n){let e,l,t,r,o,u,a,p=oe(n[3]),s=[];for(let c=0;c<p.length;c+=1)s[c]=Pe(Ne(n,p,c));let f=n[2].length===0&&n[1]*de<n[0].length&&Ae(n);return{c(){e=d("input"),l=B(),t=d("div");for(let c=0;c<s.length;c+=1)s[c].c();r=B(),f&&f.c(),o=re(),this.h()},l(c){e=v(c,"INPUT",{class:!0,type:!0,placeholder:!0}),l=M(c),t=v(c,"DIV",{class:!0});var b=R(t);for(let i=0;i<s.length;i+=1)s[i].l(b);b.forEach(m),r=M(c),f&&f.l(c),o=re(),this.h()},h(){g(e,"class","full-width medium-margin svelte-16m67n3"),g(e,"type","text"),g(e,"placeholder","Search by tags or name"),g(t,"class","container svelte-16m67n3")},m(c,b){E(c,e,b),ne(e,n[2]),E(c,l,b),E(c,t,b);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(t,null);E(c,r,b),f&&f.m(c,b),E(c,o,b),u||(a=K(e,"input",n[6]),u=!0)},p(c,[b]){if(b&4&&e.value!==c[2]&&ne(e,c[2]),b&56){p=oe(c[3]);let i;for(i=0;i<p.length;i+=1){const C=Ne(c,p,i);s[i]?s[i].p(C,b):(s[i]=Pe(C),s[i].c(),s[i].m(t,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=p.length}c[2].length===0&&c[1]*de<c[0].length?f?f.p(c,b):(f=Ae(c),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null)},i:F,o:F,d(c){c&&(m(e),m(l),m(t),m(r),m(o)),ge(s,c),f&&f.d(c),u=!1,a()}}}const de=10;function rt(n,e,l){let{reactions:t}=e,r=1,o=[],u="";const a=(i,C)=>{if(!C.length||i.name.toLowerCase().includes(C.toLowerCase()))return!0;for(const O of i.tags)if(O.toLowerCase().includes(C.toLowerCase()))return!0;return!1},p=i=>{navigator.clipboard.writeText(Y+i.uri),Re.push('<i class="fas fa-check"></i> Link copied to clipboard',{duration:1e3,theme:{"--toastBarHeight":0}})},s=i=>i.s3PresignedUrl.includes(".mp4");function f(){u=this.value,l(2,u)}const c=i=>p(i),b=()=>l(1,r++,r);return n.$$set=i=>{"reactions"in i&&l(0,t=i.reactions)},n.$$.update=()=>{n.$$.dirty&7&&l(3,o=t.filter(i=>a(i,u)).sort((i,C)=>C.creationDateUnix-i.creationDateUnix).slice(0,u.length?void 0:r*de))},[t,r,u,o,p,s,f,c,b]}class ot extends ke{constructor(e){super(),Ce(this,e,rt,nt,ve,{reactions:0})}}function Be(n,e,l){const t=n.slice();return t[14]=e[l],t}function Me(n){let e,l,t,r,o,u="Close",a,p,s,f,c="Name",b,i,C,D,O="Tags",U,y,h,k,H="File",A,Q,J,X,S,N='<i class="fas fa-times-circle"></i>',I,P,W,Z,ee,te,x=oe(n[1]),w=[];for(let T=0;T<x.length;T+=1)w[T]=Oe(Be(n,x,T));const He=T=>G(w[T],1,1,()=>{w[T]=null});function we(T,$){return T[6]?it:st}let se=we(n),q=se(n);return{c(){e=d("div"),l=d("div"),t=d("h4"),r=ce(`Add a new file
                `),o=d("button"),o.textContent=u,a=B();for(let T=0;T<w.length;T+=1)w[T].c();p=B(),s=d("form"),f=d("label"),f.textContent=c,b=B(),i=d("input"),C=B(),D=d("label"),D.textContent=O,U=B(),y=d("input"),h=B(),k=d("label"),k.textContent=H,A=B(),Q=d("span"),J=d("input"),X=B(),S=d("button"),S.innerHTML=N,I=B(),P=d("br"),W=B(),q.c(),this.h()},l(T){e=v(T,"DIV",{role:!0,class:!0});var $=R(e);l=v($,"DIV",{class:!0});var L=R(l);t=v(L,"H4",{class:!0});var le=R(t);r=ue(le,`Add a new file
                `),o=v(le,"BUTTON",{"data-svelte-h":!0}),z(o)!=="svelte-2m9p61"&&(o.textContent=u),le.forEach(m),a=M(L);for(let _e=0;_e<w.length;_e+=1)w[_e].l(L);p=M(L),s=v(L,"FORM",{class:!0});var V=R(s);f=v(V,"LABEL",{for:!0,"data-svelte-h":!0}),z(f)!=="svelte-bs9sy6"&&(f.textContent=c),b=M(V),i=v(V,"INPUT",{type:!0}),C=M(V),D=v(V,"LABEL",{for:!0,"data-svelte-h":!0}),z(D)!=="svelte-1myp42m"&&(D.textContent=O),U=M(V),y=v(V,"INPUT",{type:!0}),h=M(V),k=v(V,"LABEL",{for:!0,"data-svelte-h":!0}),z(k)!=="svelte-180hc3e"&&(k.textContent=H),A=M(V),Q=v(V,"SPAN",{});var ie=R(Q);J=v(ie,"INPUT",{class:!0,type:!0}),X=M(ie),S=v(ie,"BUTTON",{"data-svelte-h":!0}),z(S)!=="svelte-4vp3x8"&&(S.innerHTML=N),ie.forEach(m),I=M(V),P=v(V,"BR",{}),W=M(V),q.l(V),V.forEach(m),L.forEach(m),$.forEach(m),this.h()},h(){g(t,"class","title-bar svelte-1f930i6"),g(f,"for","name"),g(i,"type","text"),g(D,"for","content"),g(y,"type","textarea"),g(k,"for","file"),g(J,"class","file-input svelte-1f930i6"),g(J,"type","file"),g(s,"class","form-content svelte-1f930i6"),g(l,"class","contents svelte-1f930i6"),g(e,"role","dialog"),g(e,"class","modal svelte-1f930i6")},m(T,$){E(T,e,$),_(e,l),_(l,t),_(t,r),_(t,o),_(l,a);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(l,null);_(l,p),_(l,s),_(s,f),_(s,b),_(s,i),ne(i,n[2]),_(s,C),_(s,D),_(s,U),_(s,y),ne(y,n[3]),_(s,h),_(s,k),_(s,A),_(s,Q),_(Q,J),n[12](J),_(Q,X),_(Q,S),_(s,I),_(s,P),_(s,W),q.m(s,null),Z=!0,ee||(te=[K(o,"click",$e),K(i,"input",n[9]),K(y,"input",n[10]),K(J,"change",n[11]),K(S,"click",n[13])],ee=!0)},p(T,$){if($&2){x=oe(T[1]);let L;for(L=0;L<x.length;L+=1){const le=Be(T,x,L);w[L]?(w[L].p(le,$),j(w[L],1)):(w[L]=Oe(le),w[L].c(),j(w[L],1),w[L].m(l,p))}for(ye(),L=x.length;L<w.length;L+=1)He(L);Te()}$&4&&i.value!==T[2]&&ne(i,T[2]),$&8&&ne(y,T[3]),se===(se=we(T))&&q?q.p(T,$):(q.d(1),q=se(T),q&&(q.c(),q.m(s,null)))},i(T){if(!Z){for(let $=0;$<x.length;$+=1)j(w[$]);Z=!0}},o(T){w=w.filter(Boolean);for(let $=0;$<w.length;$+=1)G(w[$]);Z=!1},d(T){T&&m(e),ge(w,T),n[12](null),q.d(),ee=!1,Fe(te)}}}function Oe(n){let e,l;return e=new Ve({props:{item:n[14]}}),{c(){fe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),l=!0},p(t,r){const o={};r&2&&(o.item=t[14]),e.$set(o)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){pe(e,t)}}}function st(n){let e,l="Login to upload an entry";return{c(){e=d("span"),e.textContent=l,this.h()},l(t){e=v(t,"SPAN",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-4ab4io"&&(e.textContent=l),this.h()},h(){g(e,"class","form-action svelte-1f930i6")},m(t,r){E(t,e,r)},p:F,d(t){t&&m(e)}}}function it(n){let e,l="Submit",t,r;return{c(){e=d("button"),e.textContent=l,this.h()},l(o){e=v(o,"BUTTON",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1nfv1d"&&(e.textContent=l),this.h()},h(){g(e,"class","form-action svelte-1f930i6")},m(o,u){E(o,e,u),t||(r=K(e,"click",n[7]),t=!0)},p:F,d(o){o&&m(e),t=!1,r()}}}function at(n){let e,l,t=n[0]&&Me(n);return{c(){t&&t.c(),e=re()},l(r){t&&t.l(r),e=re()},m(r,o){t&&t.m(r,o),E(r,e,o),l=!0},p(r,[o]){r[0]?t?(t.p(r,o),o&1&&j(t,1)):(t=Me(r),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(ye(),G(t,1,1,()=>{t=null}),Te())},i(r){l||(j(t),l=!0)},o(r){G(t),l=!1},d(r){r&&m(e),t&&t.d(r)}}}function ct(n,e,l){let t;Se(n,De,U=>l(6,t=U));let{isOpen:r}=e,{onUpload:o}=e,u=[],a,p="",s,f;const c=async()=>{l(1,u=[]),a!=null&&a.length||u.push({level:"error",header:"name must be defined"});let U;if(f&&f.length&&(U=f[0]),U||u.push({level:"error",header:"a file must be uploaded"}),!(u.length||!U))try{await et({name:a,commaSeparatedTags:p,file:U}),o(),$e()}catch(y){let h=y.message;y instanceof We&&y.code===401?h="Invalid logged in user":y instanceof xe&&(h="User is logged out");const k=`<strong>Entry not created</strong><br/> ${h}`;Re.push(k,{theme:{"--toastBarBackground":"#FF0000"}})}};function b(){a=this.value,l(2,a)}function i(){p=this.value,l(3,p)}function C(){f=this.files,l(5,f)}function D(U){je[U?"unshift":"push"](()=>{s=U,l(4,s)})}const O=()=>{l(4,s.value="",s)};return n.$$set=U=>{"isOpen"in U&&l(0,r=U.isOpen),"onUpload"in U&&l(8,o=U.onUpload)},[r,u,a,p,s,f,t,c,o,b,i,C,D,O]}class ut extends ke{constructor(e){super(),Ce(this,e,ct,at,ve,{isOpen:0,onUpload:8})}}function ft(n){let e,l;return e=new Ve({props:{item:{level:"info",header:"Login to add an entry"}}}),{c(){fe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),l=!0},p:F,i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){pe(e,t)}}}function ht(n){let e,l="Add an entry",t,r;return{c(){e=d("button"),e.textContent=l},l(o){e=v(o,"BUTTON",{"data-svelte-h":!0}),z(e)!=="svelte-zzenq0"&&(e.textContent=l)},m(o,u){E(o,e,u),t||(r=K(e,"click",n[3]),t=!0)},p:F,i:F,o:F,d(o){o&&m(e),t=!1,r()}}}function mt(n){let e,l="Something went wrong",t,r,o=JSON.stringify(n[5])+"",u;return{c(){e=d("p"),e.textContent=l,t=B(),r=d("p"),u=ce(o)},l(a){e=v(a,"P",{"data-svelte-h":!0}),z(e)!=="svelte-171fb2d"&&(e.textContent=l),t=M(a),r=v(a,"P",{});var p=R(r);u=ue(p,o),p.forEach(m)},m(a,p){E(a,e,p),E(a,t,p),E(a,r,p),_(r,u)},p(a,p){p&1&&o!==(o=JSON.stringify(a[5])+"")&&be(u,o)},i:F,o:F,d(a){a&&(m(e),m(t),m(r))}}}function pt(n){let e,l;return e=new ot({props:{reactions:n[4]}}),{c(){fe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),l=!0},p(t,r){const o={};r&1&&(o.reactions=t[4]),e.$set(o)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){pe(e,t)}}}function _t(n){let e,l="Loading data";return{c(){e=d("p"),e.textContent=l},l(t){e=v(t,"P",{"data-svelte-h":!0}),z(e)!=="svelte-ezyzhc"&&(e.textContent=l)},m(t,r){E(t,e,r)},p:F,i:F,o:F,d(t){t&&m(e)}}}function dt(n){let e,l,t,r="Upload",o,u,a,p,s,f="Content",c,b,i,C;e=new Ke({props:{title:"Reactor",description:"My collection of memes"}});const D=[ht,ft],O=[];function U(h,k){return h[1]?0:1}u=U(n),a=O[u]=D[u](n);let y={ctx:n,current:null,token:null,hasCatch:!0,pending:_t,then:pt,catch:mt,value:4,error:5,blocks:[,,,]};return Ee(i=n[0],y),{c(){fe(e.$$.fragment),l=B(),t=d("h2"),t.textContent=r,o=B(),a.c(),p=B(),s=d("h2"),s.textContent=f,c=B(),b=re(),y.block.c()},l(h){he(e.$$.fragment,h),l=M(h),t=v(h,"H2",{"data-svelte-h":!0}),z(t)!=="svelte-18motsn"&&(t.textContent=r),o=M(h),a.l(h),p=M(h),s=v(h,"H2",{"data-svelte-h":!0}),z(s)!=="svelte-v006dh"&&(s.textContent=f),c=M(h),b=re(),y.block.l(h)},m(h,k){me(e,h,k),E(h,l,k),E(h,t,k),E(h,o,k),O[u].m(h,k),E(h,p,k),E(h,s,k),E(h,c,k),E(h,b,k),y.block.m(h,y.anchor=k),y.mount=()=>b.parentNode,y.anchor=b,C=!0},p(h,[k]){n=h;let H=u;u=U(n),u===H?O[u].p(n,k):(ye(),G(O[H],1,1,()=>{O[H]=null}),Te(),a=O[u],a?a.p(n,k):(a=O[u]=D[u](n),a.c()),j(a,1),a.m(p.parentNode,p)),y.ctx=n,k&1&&i!==(i=n[0])&&Ee(i,y)||qe(y,n,k)},i(h){C||(j(e.$$.fragment,h),j(a),j(y.block),C=!0)},o(h){G(e.$$.fragment,h),G(a);for(let k=0;k<3;k+=1){const H=y.blocks[k];G(H)}C=!1},d(h){h&&(m(l),m(t),m(o),m(p),m(s),m(c),m(b)),pe(e,h),O[u].d(h),y.block.d(h),y.token=null,y=null}}}function vt(n,e,l){let t;Se(n,De,a=>l(1,t=a)),Ye.set("Reactor");let r=Ue();const o=()=>l(0,r=Ue());return[r,t,o,()=>Ge(ut,{onUpload:o})]}class Bt extends ke{constructor(e){super(),Ce(this,e,vt,dt,ve,{})}}export{Bt as component,At as universal};