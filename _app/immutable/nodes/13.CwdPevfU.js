import"../chunks/disclose-version.Bg9kRutz.js";import{p as X,aH as b,w as I,x as n,aF as u,aG as c,g as e,n as O,s as S,v as Y,ad as ne}from"../chunks/index-client.DFiFioa0.js";import{s as q}from"../chunks/render.DyWnrpBj.js";import{a as le}from"../chunks/await.CvzPeN68.js";import{i as j}from"../chunks/if.7Qw3ChGi.js";import{m as Z,a as d,t as p,e as ce}from"../chunks/template.B8U5gakx.js";import{p as R}from"../chunks/proxy.BjU_LvYU.js";import{s as te,a as ae}from"../chunks/store.DwD3Y092.js";import{m as me}from"../chunks/Modals.CA6OwqXW.js";import{g as ve,u as re,U as de}from"../chunks/service.Dcomg13w.js";import{M as oe}from"../chunks/Main.Bvsa_JsB.js";import{M as fe}from"../chunks/Main.-Dy2zY-3.js";import{P as B}from"../chunks/public.xpUinP6t.js";import{r as ue,A as pe}from"../chunks/index.DOVxHO28.js";import{s as _e}from"../chunks/client.C7CA8vGh.js";import{e as J,i as K}from"../chunks/each.BNBFAId0.js";import{r as Q,s as N}from"../chunks/attributes.CrehYEsb.js";import{b as W,a as ge}from"../chunks/input.BXvQgZI5.js";import{r as be}from"../chunks/legacy-client.D0POLB9n.js";import{t as se}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.BwITkVjo.js";import{b as he}from"../chunks/this.LcflnJzx.js";import"../chunks/legacy.C_zHTfcZ.js";import{p as ke}from"../chunks/Main.svelte_svelte_type_style_lang.7DKd0dU9.js";const we=!1,vt=Object.freeze(Object.defineProperty({__proto__:null,ssr:we},Symbol.toStringTag,{value:"Module"})),ee=()=>ue({path:"/reactor/getEntriesForPublic"}),ye=async f=>{const o=B+"/reactor/addEntry",_=await ve();typeof _=="string"&&await _e.post(o).auth(_,{type:"bearer"}).field("name",f.name).field("commaSeparatedTags",f.commaSeparatedTags).attach("file",f.file)};var xe=p('<span class="tag svelte-16m67n3"> </span>'),Se=(f,o,_)=>o(e(_)),Te=p('<video class="medium-margin svelte-16m67n3" style="max-width: 100%" controls></video>',2),Ue=p('<img class="medium-margin svelte-16m67n3">'),Le=p('<div><div><b> </b></div> <div class="svelte-16m67n3"></div> <div><button class="full-width svelte-16m67n3"><i class="fas fa-copy"></i> Copy link</button></div></div> <div><a rel="noopener noreferrer" target="blank"><!></a></div>',1),Ce=(f,o)=>ne(o),Me=p('<button class="full-width medium-margin svelte-16m67n3">More...</button>'),Ae=p('<input class="full-width medium-margin svelte-16m67n3" type="text" placeholder="Search by tags or name"> <div class="container svelte-16m67n3"></div> <!>',1);function Pe(f,o){X(o,!0);const _=10;let T=b(1),C=b(R([])),m=b("");const h=(t,a)=>{if(!a.length||t.name.toLowerCase().includes(a.toLowerCase()))return!0;for(const l of t.tags)if(l.toLowerCase().includes(a.toLowerCase()))return!0;return!1},k=t=>{navigator.clipboard.writeText(B+t.uri),se.push('<i class="fas fa-check"></i> Link copied to clipboard',{duration:1e3,theme:{"--toastBarHeight":0}})},w=t=>t.s3PresignedUrl.includes(".mp4");be(()=>{S(C,R(o.reactions.filter(t=>h(t,e(m))).sort((t,a)=>a.creationDateUnix-t.creationDateUnix).slice(0,e(m).length?void 0:e(T)*_)))});var g=Ae(),U=I(g);Q(U);var y=n(U,2);J(y,21,()=>e(C),K,(t,a)=>{var v=Le(),l=I(v),x=u(l),F=u(x),z=u(F,!0);c(F),c(x);var L=n(x,2);J(L,21,()=>e(a).tags,K,(r,s)=>{var V=xe(),ie=u(V,!0);c(V),O(()=>q(ie,e(s))),d(r,V)}),c(L);var M=n(L,2),$=u(M);$.__click=[Se,k,a],c(M),c(l);var A=n(l,2),P=u(A),D=u(P);{var G=r=>{var s=Te();O(()=>N(s,"src",B+e(a).uri)),d(r,s)},H=r=>{var s=Ue();O(()=>{N(s,"src",B+e(a).uri),N(s,"alt",e(a).name)}),d(r,s)};j(D,r=>{w(e(a))?r(G):r(H,!1)})}c(P),c(A),O(()=>{q(z,e(a).name),N(P,"href",B+e(a).uri),N(P,"download",e(a).name)}),d(t,v)}),c(y);var E=n(y,2);{var i=t=>{var a=Me();a.__click=[Ce,T],d(t,a)};j(E,t=>{e(m).length===0&&e(T)*_<o.reactions.length&&t(i)})}W(U,()=>e(m),t=>S(m,t)),d(f,g),Y()}Z(["click"]);var Re=(f,o)=>{e(o)!==void 0&&(e(o).value="")},Ee=p('<button class="form-action svelte-1f930i6">Submit</button>'),Fe=p('<span class="form-action svelte-1f930i6">Login to upload an entry</span>'),$e=p('<div role="dialog" class="modal svelte-1f930i6"><div class="contents svelte-1f930i6"><h4 class="title-bar svelte-1f930i6">Add a new file <button>Close</button></h4> <!> <form class="form-content svelte-1f930i6"><label for="name">Name</label> <input type="text"> <label for="content">Tags</label> <input type="textarea"> <label for="file">File</label> <span><input class="file-input svelte-1f930i6" type="file"> <button aria-label="delete file"><i class="fas fa-times-circle"></i></button></span> <br> <!></form></div></div>');function Ne(f,o){X(o,!0);const[_,T]=te(),C=()=>ae(re,"$user",_);let m=b(R([])),h=b(""),k=b(""),w=b(void 0),g=b(void 0);const U=async()=>{var a;S(m,R([])),(a=e(h))!=null&&a.length||e(m).push({level:"error",header:"name must be defined"});let t;if(e(g)&&e(g).length&&(t=e(g)[0]),t||e(m).push({level:"error",header:"a file must be uploaded"}),!(e(m).length||!t))try{await ye({name:e(h),commaSeparatedTags:e(k),file:t}),o.onUpload(),o.close()}catch(v){let l=v.message;v instanceof pe&&v.code===401?l="Invalid logged in user":v instanceof de&&(l="User is logged out");const x=`<strong>Entry not created</strong><br/> ${l}`;se.push(x,{theme:{"--toastBarBackground":"#FF0000"}})}};var y=ce(),E=I(y);{var i=t=>{var a=$e(),v=u(a),l=u(v),x=n(u(l));x.__click=function(...r){var s;(s=o.close)==null||s.apply(this,r)},c(l);var F=n(l,2);J(F,17,()=>e(m),K,(r,s)=>{oe(r,{get item(){return e(s)}})});var z=n(F,2),L=n(u(z),2);Q(L);var M=n(L,4);Q(M);var $=n(M,4),A=u($);he(A,r=>S(w,r),()=>e(w));var P=n(A,2);P.__click=[Re,w],c($);var D=n($,4);{var G=r=>{var s=Ee();s.__click=U,d(r,s)},H=r=>{var s=Fe();d(r,s)};j(D,r=>{C()?r(G):r(H,!1)})}c(z),c(v),c(a),W(L,()=>e(h),r=>S(h,r)),W(M,()=>e(k),r=>S(k,r)),ge(A,()=>e(g),r=>S(g,r)),d(t,a)};j(E,t=>{o.isOpen&&t(i)})}d(f,y),Y(),T()}Z(["click"]);var Oe=(f,o)=>me.open(Ne,{onUpload:o}),Be=p("<button>Add an entry</button>"),Ie=p("<p>Something went wrong</p> <p> </p>",1),je=p("<p>Loading data</p>"),ze=p("<!> <h2>Upload</h2> <!> <h2>Content</h2> <!>",1);function dt(f,o){X(o,!0);const[_,T]=te(),C=()=>ae(re,"$user",_);ke.set("Reactor");let m=b(R(ee()));const h=()=>S(m,R(ee()));var k=ze(),w=I(k);fe(w,{title:"Reactor",description:"My collection of memes"});var g=n(w,4);{var U=i=>{var t=Be();t.__click=[Oe,h],d(i,t)},y=i=>{oe(i,{item:{level:"info",header:"Login to add an entry"}})};j(g,i=>{C()?i(U):i(y,!1)})}var E=n(g,4);le(E,()=>e(m),i=>{var t=je();d(i,t)},(i,t)=>{Pe(i,{get reactions(){return e(t)}})},(i,t)=>{var a=Ie(),v=n(I(a),2),l=u(v,!0);O(()=>q(l,JSON.stringify(e(t)))),c(v),d(i,a)}),d(f,k),Y(),T()}Z(["click"]);export{dt as component,vt as universal};
