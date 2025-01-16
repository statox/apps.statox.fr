import"../chunks/disclose-version.Bg9kRutz.js";import{p as se,aH as T,w as R,v as ne,aF as s,x as a,aG as r,g as t,s as M,k as ve,o as Le,n as B}from"../chunks/index-client.DFiFioa0.js";import{s as Y}from"../chunks/render.DyWnrpBj.js";import{a as Ee}from"../chunks/await.CvzPeN68.js";import{i as q}from"../chunks/if.7Qw3ChGi.js";import{m as de,e as re,a as d,t as x}from"../chunks/template.B8U5gakx.js";import{p as $}from"../chunks/proxy.BjU_LvYU.js";import{s as ue,a as he}from"../chunks/store.DwD3Y092.js";import{m as Ie}from"../chunks/Modals.CA6OwqXW.js";import{u as pe,U as Me}from"../chunks/service.Dcomg13w.js";import{M as Ue}from"../chunks/Main.Bvsa_JsB.js";import{r as He,a as fe,A as Ne}from"../chunks/index.DOVxHO28.js";import{e as me,i as _e}from"../chunks/each.BNBFAId0.js";import{r as A,s as z,a as J}from"../chunks/attributes.CrehYEsb.js";import{b as ie,c as Fe}from"../chunks/input.BXvQgZI5.js";import{b as Pe}from"../chunks/select.IZ9BuW_l.js";import{t as De}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.BwITkVjo.js";import{M as Oe,a as Te,b as Be}from"../chunks/Main.DwZbCle2.js";import{p as oe}from"../chunks/props.DmfObHap.js";import{a as Re}from"../chunks/datetime.CJSQP4eG.js";import"../chunks/legacy.C_zHTfcZ.js";import{p as qe}from"../chunks/Main.svelte_svelte_type_style_lang.7DKd0dU9.js";const Ge=!1,Nt=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ge},Symbol.toStringTag,{value:"Module"})),ze=async()=>He({path:"/webWatcher/getAllWatchers"}),Ce=async u=>fe({path:"/webWatcher/createWatcher",data:u}),Je=async u=>fe({path:"/webWatcher/deleteWatcher",data:{id:u}}),Ve=async u=>fe({path:"/webWatcher/toggleWatcherEnabled",data:u}),Ke=async(u,e,_,b,c,o,n,p,v)=>{var C;M(e,$([])),(C=t(_))!=null&&C.length||t(e).push({level:"error",header:"name must be defined"}),t(b)||t(e).push({level:"error",header:"notification message must be defined"}),t(c)==="CSS"&&!t(o)&&t(e).push({level:"error",header:"A CSS watcher must have a css selector defined"}),t(n)<15*60&&t(e).push({level:"error",header:"Check interval too small. Must be >= 15mn"});try{new URL(t(p))}catch{t(e).push({level:"error",header:"The URL is invalid"})}if(!t(e).length)try{t(c)==="CSS"?await Ce({name:t(_),notificationMessage:t(b),url:t(p),cssSelector:t(o),checkIntervalSeconds:t(n),watchType:t(c)}):t(c)==="HASH"&&await Ce({name:t(_),notificationMessage:t(b),url:t(p),checkIntervalSeconds:t(n),watchType:t(c)}),v.onUpload(),v.close()}catch(g){let h=g.message;g instanceof Ne&&g.code===401?h="Invalid logged in user":g instanceof Me&&(h="User is logged out");const E=`<strong>Entry not created</strong><br/> ${h}`;De.push(E,{theme:{"--toastBarBackground":"#FF0000"}})}};var Qe=x('<label for="css-selector">CSS selector</label> <input type="textarea">',1),Xe=x('<button class="form-action svelte-1cixduj">Submit</button>'),Ye=x('<span class="form-action svelte-1cixduj">Login to upload an entry</span>'),Ze=x('<div role="dialog" class="modal svelte-1cixduj"><div class="contents svelte-1cixduj"><h3 class="title-bar svelte-1cixduj">Add a new clipboard entry <button>Close</button></h3> <!> <form class="form-content svelte-1cixduj"><label for="name">Name</label> <input type="text"> <label for="check-interval">Check interval</label> <!> <label for="notification-message">Notification message (the @mention is automatically added)</label> <input type="textarea"> <label for="watch-type">Watcher type</label> <select id="watch-type"><option>CSS</option><option>HASH</option></select> <label for="content">URL</label> <input type="textarea"> <!> <br> <!></form></div></div>');function $e(u,e){se(e,!0);const[_,b]=ue(),c=()=>he(pe,"$user",_);let o=T($([])),n=T(""),p=T(""),v=T(""),C=T(""),g=T(0),h=T("CSS");var E=re(),H=R(E);{var L=f=>{var l=Ze(),m=s(l),y=s(m),S=a(s(y));S.__click=function(...i){var k;(k=e.close)==null||k.apply(this,i)},r(y);var W=a(y,2);me(W,17,()=>t(o),_e,(i,k)=>{Ue(i,{get item(){return t(k)}})});var w=a(W,2),U=a(s(w),2);A(U);var I=a(U,4);Oe(I,{allowedUnits:["minutes","hours","days"],defaultDuration:{value:1,unit:"hours"},get valueInSeconds(){return t(g)},set valueInSeconds(i){M(g,$(i))}});var N=a(I,4);A(N);var F=a(N,4),j=s(F);j.value=(j.__value="CSS")==null?"":"CSS";var P=a(j);P.value=(P.__value="HASH")==null?"":"HASH",r(F);var D=a(F,4);A(D);var G=a(D,2);{var O=i=>{var k=Qe(),Z=a(R(k),2);A(Z),ie(Z,()=>t(C),te=>M(C,te)),d(i,k)};q(G,i=>{t(h)==="CSS"&&i(O)})}var V=a(G,4);{var ee=i=>{var k=Xe();k.__click=[Ke,o,n,p,h,C,g,v,e],d(i,k)},ce=i=>{var k=Ye();d(i,k)};q(V,i=>{c()?i(ee):i(ce,!1)})}r(w),r(m),r(l),ie(U,()=>t(n),i=>M(n,i)),ie(N,()=>t(p),i=>M(p,i)),Pe(F,()=>t(h),i=>M(h,i)),ie(D,()=>t(v),i=>M(v,i)),d(f,l)};q(H,f=>{e.isOpen&&f(L)})}d(u,E),ne(),b()}de(["click"]);function We(u,e,_,b){const c=u.target,o=c==null?void 0:c.getAttribute("aria-checked");M(e,$(o!=="true")),_(t(e)===!0?"on":"off"),b("change",_())}var et=x('<div class="s s--inner svelte-1n7axnp"><span> </span> <button role="switch" class="svelte-1n7axnp"><span class="svelte-1n7axnp">on</span> <span class="svelte-1n7axnp">off</span></button></div>'),tt=x('<div class="s s--slider svelte-1n7axnp"><span> </span> <button role="switch" class="svelte-1n7axnp"></button></div>'),at=x('<input type="radio" class="svelte-1n7axnp"> <label class="svelte-1n7axnp"> </label>',1),rt=x('<div class="s s--multi svelte-1n7axnp"><div role="radiogroup" class="group-container svelte-1n7axnp"><div class="legend"> </div> <!></div></div>');function st(u,e){se(e,!0);const _=[];let b=oe(e,"design",3,"inner label"),c=oe(e,"options",19,()=>[]),o=oe(e,"fontSize",3,16),n=oe(e,"value",15,"on"),p=T(!0);const v=Math.floor(Math.random()*100),C=ve();Le(()=>{M(p,n()==="on")});var g=re(),h=R(g);{var E=L=>{var f=et(),l=s(f);z(l,"id",`switch-${v}`);var m=s(l,!0);r(l);var y=a(l,2);z(y,"aria-labelledby",`switch-${v}`),y.__click=[We,p,n,C],r(f),B(()=>{Y(m,e.label),z(y,"aria-checked",t(p))}),d(L,f)},H=L=>{var f=re(),l=R(f);{var m=S=>{var W=tt(),w=s(W);z(w,"id",`switch-${v}`);var U=s(w,!0);r(w);var I=a(w,2);z(I,"aria-labelledby",`switch-${v}`),I.__click=[We,p,n,C],r(W),B(()=>{z(W,"style",`font-size:${o()??""}px`),Y(U,e.label),z(I,"aria-checked",t(p))}),d(S,W)},y=S=>{var W=rt(),w=s(W);z(w,"aria-labelledby",`label-${v}`),z(w,"id",`group-${v}`);var U=s(w);z(U,"id",`label-${v}`);var I=s(U,!0);r(U);var N=a(U,2);me(N,17,c,_e,(F,j)=>{var P=at(),D=R(P);A(D);var G,O=a(D,2),V=s(O,!0);r(O),B(()=>{z(D,"id",`${t(j)}-${v}`),G!==(G=t(j))&&(D.value=(D.__value=t(j))==null?"":t(j)),z(O,"for",`${t(j)}-${v}`),Y(V,t(j))}),Fe(_,[],D,()=>(t(j),n()),n),d(F,P)}),r(w),r(W),B(()=>{z(w,"style",`font-size:${o()??""}px`),Y(I,e.label)}),d(S,W)};q(l,S=>{b()=="slider"?S(m):S(y,!1)},!0)}d(L,f)};q(h,L=>{b()=="inner"?L(E):L(H,!1)})}d(u,g),ne()}de(["click"]);var nt=x('<p class="section-3-item svelte-1jnygz9"><label for="css-selector">CSS selector <!></label> <input disabled type="textarea" class="svelte-1jnygz9"></p>'),lt=x('<div class="section error-section svelte-1jnygz9"><p class="section-4-item svelte-1jnygz9"><label for="last-check">Last error</label> <input disabled type="textarea" class="svelte-1jnygz9"></p> <p class="section-4-item svelte-1jnygz9"><label for="last-update">Last error message</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div>'),it=x('<div class="item svelte-1jnygz9"><h3 class="item-title svelte-1jnygz9"><div class="item-name svelte-1jnygz9"> </div> <div class="item-actions svelte-1jnygz9"><!> <!></div></h3> <div class="section svelte-1jnygz9"><p class="section-1-item svelte-1jnygz9"><label for="check-interval">Check interval</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <div class="section svelte-1jnygz9"><p class="section-2-item svelte-1jnygz9"><label for="notification-message">Notification message</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <div class="section svelte-1jnygz9"><p class="section-3-item svelte-1jnygz9"><label for="content">URL</label> <a target="_blank" rel="noopener noreferrer"> </a></p> <!></div> <div class="section svelte-1jnygz9"><p class="section-4-item svelte-1jnygz9"><label for="last-check">Last check</label> <input disabled type="textarea" class="svelte-1jnygz9"></p> <p class="section-4-item svelte-1jnygz9"><label for="last-update">Last content change</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <!> <div class="section svelte-1jnygz9"><p class="section-3-item svelte-1jnygz9"><label for="last-update">Last content</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div></div>');function ot(u,e){se(e,!0);const[_,b]=ue(),c=()=>he(pe,"$user",_),o=ve(),n=l=>{const m=new Date(l*1e3);return m.toLocaleDateString()+" "+m.toLocaleTimeString()},p=e.watcher.lastCheckDateUnix===0?"Never checked before":n(e.watcher.lastCheckDateUnix),v=e.watcher.lastUpdateDateUnix===0?"Never changed":n(e.watcher.lastUpdateDateUnix),C=Re.fromMillis(e.watcher.checkIntervalSeconds*1e3).rescale().toHuman(),g=async()=>{if(!e.watcher.id){console.error("id must be defined");return}try{await Je(e.watcher.id),o("delete")}catch(l){const m=`<strong>Watcher not deleted</strong><br/> ${l.message}`;De.push(m,{theme:{"--toastBarBackground":"#FF0000"}})}},h=async l=>{await Ve({watcherId:e.watcher.id,setToEnabled:l.detail==="on"}),o("update")};let E=e.watcher.archivalDateUnix?"off":"on";var H=re(),L=R(H);{var f=l=>{var m=it(),y=s(m),S=s(y),W=s(S,!0);r(S);var w=a(S,2),U=s(w);st(U,{value:E,label:"Enabled",design:"slider",$$events:{change:h}});var I=a(U,2);Te(I,{deleteAction:g}),r(w),r(y);var N=a(y,2),F=s(N),j=a(s(F),2);A(j),J(j,C),r(F),r(N);var P=a(N,2),D=s(P),G=a(s(D),2);A(G),r(D),r(P);var O=a(P,2),V=s(O),ee=a(s(V),2),ce=s(ee,!0);r(ee),r(V);var i=a(V,2);{var k=K=>{var Q=nt(),X=s(Q),le=a(s(X));Be(le,{get content(){return e.watcher.cssSelector}}),r(X);var ae=a(X,2);A(ae),r(Q),B(()=>J(ae,e.watcher.cssSelector)),d(K,Q)};q(i,K=>{e.watcher.watchType==="CSS"&&K(k)})}r(O);var Z=a(O,2),te=s(Z),be=a(s(te),2);A(be),J(be,p),r(te);var ge=a(te,2),ye=a(s(ge),2);A(ye),J(ye,v),r(ge),r(Z);var we=a(Z,2);{var Ae=K=>{var Q=lt(),X=s(Q),le=a(s(X),2);A(le),B(()=>J(le,n(e.watcher.lastErrorDateUnix))),r(X);var ae=a(X,2),ke=a(s(ae),2);A(ke),r(ae),r(Q),B(()=>J(ke,e.watcher.lastErrorMessage)),d(K,Q)};q(we,K=>{e.watcher.lastErrorDateUnix&&K(Ae)})}var xe=a(we,2),Se=s(xe),je=a(s(Se),2);A(je),r(Se),r(xe),r(m),B(()=>{Y(W,e.watcher.name),J(G,e.watcher.notificationMessage),z(ee,"href",e.watcher.url),Y(ce,e.watcher.url),J(je,e.watcher.lastContent)}),d(l,m)};q(L,l=>{c()&&l(f)})}d(u,H),ne(),b()}var ct=x('<div class="container svelte-c8nodu"></div>');function vt(u,e){se(e,!0);const _=ve(),b=(o,n)=>o.archivalDateUnix===null&&n.archivalDateUnix!==null?-1:o.archivalDateUnix!==null&&n.archivalDateUnix===null?1:n.id-o.id;var c=ct();me(c,21,()=>e.watchers.sort(b),_e,(o,n)=>{ot(o,{get watcher(){return t(n)},$$events:{delete:()=>_("delete"),update:()=>_("update")}})}),r(c),d(u,c),ne()}var dt=(u,e)=>Ie.open($e,{onUpload:e}),ut=x("<p>Something went wrong</p> <p> </p>",1),ht=x("<p>Loading data</p>"),pt=x("<h2>Create a new watcher</h2> <button>Add an entry</button> <h2>Watchers</h2> <!>",1);function Ft(u,e){se(e,!0);const[_,b]=ue(),c=()=>he(pe,"$user",_);qe.set("Web Watchers");let o=T($(ze()));const n=()=>M(o,$(ze()));var p=re(),v=R(p);{var C=h=>{var E=pt(),H=a(R(E),2);H.__click=[dt,n];var L=a(H,4);Ee(L,()=>t(o),f=>{var l=ht();d(f,l)},(f,l)=>{vt(f,{get watchers(){return t(l)},$$events:{delete:n,update:n}})},(f,l)=>{var m=ut(),y=a(R(m),2),S=s(y,!0);B(()=>Y(S,JSON.stringify(t(l)))),r(y),d(f,m)}),d(h,E)},g=h=>{Ue(h,{item:{level:"info",header:"Login to list the watchers"}})};q(v,h=>{c()?h(C):h(g,!1)})}d(u,p),ne(),b()}de(["click"]);export{Ft as component,Nt as universal};
