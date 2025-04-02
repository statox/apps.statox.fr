import"../chunks/CWj6FrbW.js";import{p as ae,aC as F,a7 as Ue,v as q,n as re,aA as s,w as a,aB as r,g as t,s as M,j as ce,o as Me,k as R}from"../chunks/DdcAZqzr.js";import{s as Q}from"../chunks/CmAqsEYA.js";import{a as Ie}from"../chunks/BHBo2i82.js";import{i as O}from"../chunks/DrEa0bGJ.js";import{f as ve,e as ie,a as p,t as j}from"../chunks/BxR77r1m.js";import{s as de,a as ue}from"../chunks/46cxpkBr.js";import{m as He}from"../chunks/Dx7kh8tD.js";import{u as he,U as Ne}from"../chunks/0Ru8FCA0.js";import{M as De}from"../chunks/Xc4KSM5C.js";import{r as Pe,a as pe,A as Be}from"../chunks/B6xcaYwl.js";import{e as fe,i as me}from"../chunks/EIqWDzq9.js";import{r as W,a as L,s as ke,d as T}from"../chunks/CPjLUSRb.js";import{b as ne,c as Fe}from"../chunks/B6rXJJbd.js";import{b as Oe}from"../chunks/DsfzyQhC.js";import{t as Ae}from"../chunks/CedqIx3j.js";import{M as Te,a as Re}from"../chunks/C8pt4rnl.js";import{M as qe}from"../chunks/_mB_o9GM.js";import{p as le}from"../chunks/D7Mh6X1k.js";import{D as Ge}from"../chunks/BRTjM3Ro.js";import"../chunks/lD32fLLJ.js";import{p as Je}from"../chunks/VWCJl3LV.js";const Ve=!1,Bt=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ve},Symbol.toStringTag,{value:"Module"})),ze=async()=>Pe({path:"/webWatcher/getAllWatchers"}),Ce=async u=>pe({path:"/webWatcher/createWatcher",data:u}),Ke=async u=>pe({path:"/webWatcher/deleteWatcher",data:{id:u}}),Qe=async u=>pe({path:"/webWatcher/toggleWatcherEnabled",data:u}),Xe=async(u,e,_,y,c,o,n,f,d)=>{var z;M(e,[],!0),(z=t(_))!=null&&z.length||t(e).push({level:"error",header:"name must be defined"}),t(y)||t(e).push({level:"error",header:"notification message must be defined"}),t(c)==="CSS"&&!t(o)&&t(e).push({level:"error",header:"A CSS watcher must have a css selector defined"}),t(n)<15*60&&t(e).push({level:"error",header:"Check interval too small. Must be >= 15mn"});try{new URL(t(f))}catch{t(e).push({level:"error",header:"The URL is invalid"})}if(!t(e).length)try{t(c)==="CSS"?await Ce({name:t(_),notificationMessage:t(y),url:t(f),cssSelector:t(o),checkIntervalSeconds:t(n),watchType:t(c)}):t(c)==="HASH"&&await Ce({name:t(_),notificationMessage:t(y),url:t(f),checkIntervalSeconds:t(n),watchType:t(c)}),d.onUpload(),d.close()}catch(w){let h=w.message;w instanceof Be&&w.code===401?h="Invalid logged in user":w instanceof Ne&&(h="User is logged out");const E=`<strong>Entry not created</strong><br/> ${h}`;Ae.push(E,{theme:{"--toastBarBackground":"#FF0000"}})}};var Ye=j('<label for="css-selector">CSS selector</label> <input type="textarea">',1),Ze=j('<button class="form-action svelte-1cixduj">Submit</button>'),$e=j('<span class="form-action svelte-1cixduj">Login to upload an entry</span>'),et=j('<div role="dialog" class="modal svelte-1cixduj"><div class="contents svelte-1cixduj"><h3 class="title-bar svelte-1cixduj">Add a new clipboard entry <button>Close</button></h3> <!> <form class="form-content svelte-1cixduj"><label for="name">Name</label> <input type="text"> <label for="check-interval">Check interval</label> <!> <label for="notification-message">Notification message (the @mention is automatically added)</label> <input type="textarea"> <label for="watch-type">Watcher type</label> <select id="watch-type"><option>CSS</option><option>HASH</option></select> <label for="content">URL</label> <input type="textarea"> <!> <br> <!></form></div></div>');function tt(u,e){ae(e,!0);const[_,y]=de(),c=()=>ue(he,"$user",_);let o=F(Ue([])),n=F(""),f=F(""),d=F(""),z=F(""),w=F(0),h=F("CSS");var E=ie(),I=q(E);{var U=b=>{var l=et(),m=s(l),v=s(m),x=a(s(v));x.__click=function(...i){var k;(k=e.close)==null||k.apply(this,i)},r(v);var g=a(v,2);fe(g,17,()=>t(o),me,(i,k)=>{De(i,{get item(){return t(k)}})});var D=a(g,2),A=a(s(D),2);W(A);var X=a(A,4);Te(X,{allowedUnits:["minutes","hours","days"],defaultDuration:{value:1,unit:"hours"},get valueInSeconds(){return t(w)},set valueInSeconds(i){M(w,i,!0)}});var H=a(X,4);W(H);var S=a(H,4),N=s(S);N.value=(N.__value="CSS")==null?"":"CSS";var C=a(N);C.value=(C.__value="HASH")==null?"":"HASH",r(S);var P=a(S,4);W(P);var B=a(P,2);{var G=i=>{var k=Ye(),Y=a(q(k),2);W(Y),ne(Y,()=>t(z),ee=>M(z,ee)),p(i,k)};O(B,i=>{t(h)==="CSS"&&i(G)})}var Z=a(B,4);{var $=i=>{var k=Ze();k.__click=[Xe,o,n,f,h,z,w,d,e],p(i,k)},oe=i=>{var k=$e();p(i,k)};O(Z,i=>{c()?i($):i(oe,!1)})}r(D),r(m),r(l),ne(A,()=>t(n),i=>M(n,i)),ne(H,()=>t(f),i=>M(f,i)),Oe(S,()=>t(h),i=>M(h,i)),ne(P,()=>t(d),i=>M(d,i)),p(b,l)};O(I,b=>{e.isOpen&&b(U)})}p(u,E),re(),y()}ve(["click"]);function We(u,e,_,y){const c=u.target,o=c==null?void 0:c.getAttribute("aria-checked");M(e,o!=="true",!0),_(t(e)===!0?"on":"off"),y("change",_())}var at=j('<div class="s s--inner svelte-1n7axnp"><span> </span> <button role="switch" class="svelte-1n7axnp"><span class="svelte-1n7axnp">on</span> <span class="svelte-1n7axnp">off</span></button></div>'),rt=j('<div class="s s--slider svelte-1n7axnp"><span> </span> <button role="switch" class="svelte-1n7axnp"></button></div>'),st=j('<input type="radio" class="svelte-1n7axnp"> <label class="svelte-1n7axnp"> </label>',1),nt=j('<div class="s s--multi svelte-1n7axnp"><div role="radiogroup" class="group-container svelte-1n7axnp"><div class="legend"> </div> <!></div></div>');function lt(u,e){ae(e,!0);const _=[];let y=le(e,"design",3,"inner label"),c=le(e,"options",19,()=>[]),o=le(e,"fontSize",3,16),n=le(e,"value",15,"on"),f=F(!0);const d=Math.floor(Math.random()*100),z=ce();Me(()=>{M(f,n()==="on")});var w=ie(),h=q(w);{var E=U=>{var b=at(),l=s(b);L(l,"id",`switch-${d}`);var m=s(l,!0);r(l);var v=a(l,2);L(v,"aria-labelledby",`switch-${d}`),v.__click=[We,f,n,z],r(b),R(()=>{Q(m,e.label),L(v,"aria-checked",t(f))}),p(U,b)},I=(U,b)=>{{var l=v=>{var x=rt(),g=s(x);L(g,"id",`switch-${d}`);var D=s(g,!0);r(g);var A=a(g,2);L(A,"aria-labelledby",`switch-${d}`),A.__click=[We,f,n,z],r(x),R(()=>{ke(x,`font-size:${o()??""}px`),Q(D,e.label),L(A,"aria-checked",t(f))}),p(v,x)},m=v=>{var x=nt(),g=s(x);L(g,"aria-labelledby",`label-${d}`),L(g,"id",`group-${d}`);var D=s(g);L(D,"id",`label-${d}`);var A=s(D,!0);r(D);var X=a(D,2);fe(X,17,c,me,(H,S)=>{var N=st(),C=q(N);W(C);var P,B=a(C,2),G=s(B,!0);r(B),R(()=>{L(C,"id",`${t(S)}-${d}`),P!==(P=t(S))&&(C.value=(C.__value=t(S))==null?"":t(S)),L(B,"for",`${t(S)}-${d}`),Q(G,t(S))}),Fe(_,[],C,()=>(t(S),n()),n),p(H,N)}),r(g),r(x),R(()=>{ke(g,`font-size:${o()??""}px`),Q(A,e.label)}),p(v,x)};O(U,v=>{y()=="slider"?v(l):v(m,!1)},b)}};O(h,U=>{y()=="inner"?U(E):U(I,!1)})}p(u,w),re()}ve(["click"]);var it=j('<p class="section-3-item svelte-1jnygz9"><label for="css-selector">CSS selector <!></label> <input disabled type="textarea" class="svelte-1jnygz9"></p>'),ot=j('<div class="section error-section svelte-1jnygz9"><p class="section-4-item svelte-1jnygz9"><label for="last-check">Last error</label> <input disabled type="textarea" class="svelte-1jnygz9"></p> <p class="section-4-item svelte-1jnygz9"><label for="last-update">Last error message</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div>'),ct=j('<div class="item svelte-1jnygz9"><h3 class="item-title svelte-1jnygz9"><div class="item-name svelte-1jnygz9"> </div> <div class="item-actions svelte-1jnygz9"><!> <!></div></h3> <div class="section svelte-1jnygz9"><p class="section-1-item svelte-1jnygz9"><label for="check-interval">Check interval</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <div class="section svelte-1jnygz9"><p class="section-2-item svelte-1jnygz9"><label for="notification-message">Notification message</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <div class="section svelte-1jnygz9"><p class="section-3-item svelte-1jnygz9"><label for="content">URL</label> <a target="_blank" rel="noopener noreferrer"> </a></p> <!></div> <div class="section svelte-1jnygz9"><p class="section-4-item svelte-1jnygz9"><label for="last-check">Last check</label> <input disabled type="textarea" class="svelte-1jnygz9"></p> <p class="section-4-item svelte-1jnygz9"><label for="last-update">Last content change</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <!> <div class="section svelte-1jnygz9"><p class="section-3-item svelte-1jnygz9"><label for="last-update">Last content</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div></div>');function vt(u,e){ae(e,!0);const[_,y]=de(),c=()=>ue(he,"$user",_),o=ce(),n=l=>{const m=new Date(l*1e3);return m.toLocaleDateString()+" "+m.toLocaleTimeString()},f=e.watcher.lastCheckDateUnix===0?"Never checked before":n(e.watcher.lastCheckDateUnix),d=e.watcher.lastUpdateDateUnix===0?"Never changed":n(e.watcher.lastUpdateDateUnix),z=Ge.fromMillis(e.watcher.checkIntervalSeconds*1e3).rescale().toHuman(),w=async()=>{if(!e.watcher.id){console.error("id must be defined");return}try{await Ke(e.watcher.id),o("delete")}catch(l){const m=`<strong>Watcher not deleted</strong><br/> ${l.message}`;Ae.push(m,{theme:{"--toastBarBackground":"#FF0000"}})}},h=async l=>{await Qe({watcherId:e.watcher.id,setToEnabled:l.detail==="on"}),o("update")};let E=e.watcher.archivalDateUnix?"off":"on";var I=ie(),U=q(I);{var b=l=>{var m=ct(),v=s(m),x=s(v),g=s(x,!0);r(x);var D=a(x,2),A=s(D);lt(A,{value:E,label:"Enabled",design:"slider",$$events:{change:h}});var X=a(A,2);qe(X,{deleteAction:w}),r(D),r(v);var H=a(v,2),S=s(H),N=a(s(S),2);W(N),T(N,z),r(S),r(H);var C=a(H,2),P=s(C),B=a(s(P),2);W(B),r(P),r(C);var G=a(C,2),Z=s(G),$=a(s(Z),2),oe=s($,!0);r($),r(Z);var i=a(Z,2);{var k=J=>{var V=it(),K=s(V),se=a(s(K));Re(se,{get content(){return e.watcher.cssSelector}}),r(K);var te=a(K,2);W(te),r(V),R(()=>T(te,e.watcher.cssSelector)),p(J,V)};O(i,J=>{e.watcher.watchType==="CSS"&&J(k)})}r(G);var Y=a(G,2),ee=s(Y),_e=a(s(ee),2);W(_e),T(_e,f),r(ee);var be=a(ee,2),ge=a(s(be),2);W(ge),T(ge,d),r(be),r(Y);var ye=a(Y,2);{var Le=J=>{var V=ot(),K=s(V),se=a(s(K),2);W(se),r(K);var te=a(K,2),je=a(s(te),2);W(je),r(te),r(V),R(Ee=>{T(se,Ee),T(je,e.watcher.lastErrorMessage)},[()=>n(e.watcher.lastErrorDateUnix)]),p(J,V)};O(ye,J=>{e.watcher.lastErrorDateUnix&&J(Le)})}var we=a(ye,2),xe=s(we),Se=a(s(xe),2);W(Se),r(xe),r(we),r(m),R(()=>{Q(g,e.watcher.name),T(B,e.watcher.notificationMessage),L($,"href",e.watcher.url),Q(oe,e.watcher.url),T(Se,e.watcher.lastContent)}),p(l,m)};O(U,l=>{c()&&l(b)})}p(u,I),re(),y()}var dt=j('<div class="container svelte-c8nodu"></div>');function ut(u,e){ae(e,!0);const _=ce(),y=(o,n)=>o.archivalDateUnix===null&&n.archivalDateUnix!==null?-1:o.archivalDateUnix!==null&&n.archivalDateUnix===null?1:n.id-o.id;var c=dt();fe(c,21,()=>e.watchers.sort(y),me,(o,n)=>{vt(o,{get watcher(){return t(n)},$$events:{delete:()=>_("delete"),update:()=>_("update")}})}),r(c),p(u,c),re()}var ht=(u,e)=>He.open(tt,{onUpload:e}),pt=j("<p>Something went wrong</p> <p> </p>",1),ft=j("<p>Loading data</p>"),mt=j("<h2>Create a new watcher</h2> <button>Add an entry</button> <h2>Watchers</h2> <!>",1);function Ft(u,e){ae(e,!0);const[_,y]=de(),c=()=>ue(he,"$user",_);Je.set("Web Watchers");let o=F(Ue(ze()));const n=()=>M(o,ze(),!0);var f=ie(),d=q(f);{var z=h=>{var E=mt(),I=a(q(E),2);I.__click=[ht,n];var U=a(I,4);Ie(U,()=>t(o),b=>{var l=ft();p(b,l)},(b,l)=>{ut(b,{get watchers(){return t(l)},$$events:{delete:n,update:n}})},(b,l)=>{var m=pt(),v=a(q(m),2),x=s(v,!0);r(v),R(g=>Q(x,g),[()=>JSON.stringify(t(l))]),p(b,m)}),p(h,E)},w=h=>{De(h,{item:{level:"info",header:"Login to list the watchers"}})};O(d,h=>{c()?h(z):h(w,!1)})}p(u,f),re(),y()}ve(["click"]);export{Ft as component,Bt as universal};
