import"../chunks/disclose-version.Bg9kRutz.js";import{i as Le}from"../chunks/legacy.OjKiwS2-.js";import{p as re,aX as J,y as B,x as se,al as s,z as a,am as r,g as t,s as M,o as ve,v as Ee,w as T,ap as Ie}from"../chunks/index-client.CflxByDC.js";import{s as Y}from"../chunks/render.BKP2kCYY.js";import{a as Me}from"../chunks/await.CbC4o2Nc.js";import{i as R}from"../chunks/if.DypW3AvO.js";import{n as We,e as ae,a as d,t as x,f as He}from"../chunks/template.BNipMNgO.js";import{s as de,a as ue}from"../chunks/store.Bv-UhthR.js";import{m as Ne}from"../chunks/Modals.5B6rnlQ8.js";import{u as he,U as Pe}from"../chunks/service.sqD5csl4.js";import{M as Ue}from"../chunks/Main.2MXsZWlD.js";import{r as Fe,a as pe,A as Oe}from"../chunks/index.Bpiyuc6c.js";import{e as fe,i as me}from"../chunks/each.Z673LCtr.js";import{r as A,s as k,a as G}from"../chunks/attributes.Cbh5jV0V.js";import{b as le,c as Te}from"../chunks/input.BqKxAZW_.js";import{b as Be}from"../chunks/select.CodWXztp.js";import{a as oe,p as ie}from"../chunks/props.B1tCRvRm.js";import{t as De}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.C4P6yVn0.js";import{M as Re,a as qe,b as Ge}from"../chunks/Main.wb9gEn5v.js";import{a as Je}from"../chunks/datetime.CJSQP4eG.js";import{p as Ve}from"../chunks/Main.svelte_svelte_type_style_lang.BXDs9EHj.js";const Xe=!1,Pt=Object.freeze(Object.defineProperty({__proto__:null,ssr:Xe},Symbol.toStringTag,{value:"Module"})),ze=async()=>Fe({path:"/webWatcher/getAllWatchers"}),ke=async h=>pe({path:"/webWatcher/createWatcher",data:h}),Ke=async h=>pe({path:"/webWatcher/deleteWatcher",data:{id:h}}),Qe=async h=>pe({path:"/webWatcher/toggleWatcherEnabled",data:h}),Ye=async(h,e,_,b,c,o,n,p,v)=>{var C;M(e,oe([])),(C=t(_))!=null&&C.length||t(e).push({level:"error",header:"name must be defined"}),t(b)||t(e).push({level:"error",header:"notification message must be defined"}),t(c)==="CSS"&&!t(o)&&t(e).push({level:"error",header:"A CSS watcher must have a css selector defined"}),t(n)<15*60&&t(e).push({level:"error",header:"Check interval too small. Must be >= 15mn"});try{new URL(t(p))}catch{t(e).push({level:"error",header:"The URL is invalid"})}if(!t(e).length)try{t(c)==="CSS"?await ke({name:t(_),notificationMessage:t(b),url:t(p),cssSelector:t(o),checkIntervalSeconds:t(n),watchType:t(c)}):t(c)==="HASH"&&await ke({name:t(_),notificationMessage:t(b),url:t(p),checkIntervalSeconds:t(n),watchType:t(c)}),v.onUpload(),v.close()}catch(g){let u=g.message;g instanceof Oe&&g.code===401?u="Invalid logged in user":g instanceof Pe&&(u="User is logged out");const E=`<strong>Entry not created</strong><br/> ${u}`;De.push(E,{theme:{"--toastBarBackground":"#FF0000"}})}};var Ze=x('<label for="css-selector">CSS selector</label> <input type="textarea">',1),$e=x('<button class="form-action svelte-1cixduj">Submit</button>'),et=x('<span class="form-action svelte-1cixduj">Login to upload an entry</span>'),tt=x('<div role="dialog" class="modal svelte-1cixduj"><div class="contents svelte-1cixduj"><h3 class="title-bar svelte-1cixduj">Add a new clipboard entry <button>Close</button></h3> <!> <form class="form-content svelte-1cixduj"><label for="name">Name</label> <input type="text"> <label for="check-interval">Check interval</label> <!> <label for="notification-message">Notification message (the @mention is automatically added)</label> <input type="textarea"> <label for="watch-type">Watcher type</label> <select id="watch-type"><option>CSS</option><option>HASH</option></select> <label for="content">URL</label> <input type="textarea"> <!> <br> <!></form></div></div>');function at(h,e){re(e,!0);const[_,b]=de(),c=()=>ue(he,"$user",_);let o=J(oe([])),n=J(""),p=J(""),v=J(""),C=J(""),g=J(0),u=J("CSS");var E=ae(),H=B(E);{var L=f=>{var l=tt(),m=s(l),y=s(m),S=a(s(y));S.__click=function(...i){var z;(z=e.close)==null||z.apply(this,i)},r(y);var W=a(y,2);fe(W,17,()=>t(o),me,(i,z)=>{Ue(i,{get item(){return t(z)}})});var w=a(W,2),U=a(s(w),2);A(U);var I=a(U,4);Re(I,{allowedUnits:["minutes","hours","days"],defaultDuration:{value:1,unit:"hours"},get valueInSeconds(){return t(g)},set valueInSeconds(i){M(g,oe(i))}});var N=a(I,4);A(N);var P=a(N,4),j=s(P);j.value=(j.__value="CSS")==null?"":"CSS";var F=a(j);F.value=(F.__value="HASH")==null?"":"HASH",r(P);var D=a(P,4);A(D);var q=a(D,2);{var O=i=>{var z=Ze(),Z=a(B(z),2);A(Z),le(Z,()=>t(C),ee=>M(C,ee)),d(i,z)};R(q,i=>{t(u)==="CSS"&&i(O)})}var V=a(q,4);{var $=i=>{var z=$e();z.__click=[Ye,o,n,p,u,C,g,v,e],d(i,z)},ce=i=>{var z=et();d(i,z)};R(V,i=>{c()?i($):i(ce,!1)})}r(w),r(m),r(l),le(U,()=>t(n),i=>M(n,i)),le(N,()=>t(p),i=>M(p,i)),Be(P,()=>t(u),i=>M(u,i)),le(D,()=>t(v),i=>M(v,i)),d(f,l)};R(H,f=>{e.isOpen&&f(L)})}d(h,E),se(),b()}We(["click"]);function Ce(h,e,_,b){const c=h.target,o=c==null?void 0:c.getAttribute("aria-checked");M(e,oe(o!=="true")),_(t(e)===!0?"on":"off"),b("change",_())}var rt=x('<div class="s s--inner svelte-1n7axnp"><span> </span> <button role="switch" class="svelte-1n7axnp"><span class="svelte-1n7axnp">on</span> <span class="svelte-1n7axnp">off</span></button></div>'),st=x('<div class="s s--slider svelte-1n7axnp"><span> </span> <button role="switch" class="svelte-1n7axnp"></button></div>'),nt=x('<input type="radio" class="svelte-1n7axnp"> <label class="svelte-1n7axnp"> </label>',1),lt=x('<div class="s s--multi svelte-1n7axnp"><div role="radiogroup" class="group-container svelte-1n7axnp"><div class="legend"> </div> <!></div></div>');function it(h,e){re(e,!0);const _=[];let b=ie(e,"design",3,"inner label"),c=ie(e,"options",19,()=>[]),o=ie(e,"fontSize",3,16),n=ie(e,"value",15,"on"),p=J(!0);const v=Math.floor(Math.random()*100),C=ve();Ee(()=>{M(p,n()==="on")});var g=ae(),u=B(g);{var E=L=>{var f=rt(),l=s(f);k(l,"id",`switch-${v}`);var m=s(l,!0);r(l);var y=a(l,2);k(y,"aria-labelledby",`switch-${v}`),y.__click=[Ce,p,n,C],r(f),T(()=>{Y(m,e.label),k(y,"aria-checked",t(p))}),d(L,f)},H=L=>{var f=ae(),l=B(f);{var m=S=>{var W=st(),w=s(W);k(w,"id",`switch-${v}`);var U=s(w,!0);r(w);var I=a(w,2);k(I,"aria-labelledby",`switch-${v}`),I.__click=[Ce,p,n,C],r(W),T(()=>{k(W,"style",`font-size:${o()??""}px`),Y(U,e.label),k(I,"aria-checked",t(p))}),d(S,W)},y=S=>{var W=lt(),w=s(W);k(w,"aria-labelledby",`label-${v}`),k(w,"id",`group-${v}`);var U=s(w);k(U,"id",`label-${v}`);var I=s(U,!0);r(U);var N=a(U,2);fe(N,17,c,me,(P,j)=>{var F=nt(),D=B(F);A(D);var q,O=a(D,2),V=s(O,!0);r(O),T(()=>{k(D,"id",`${t(j)}-${v}`),q!==(q=t(j))&&(D.value=(D.__value=t(j))==null?"":t(j)),k(O,"for",`${t(j)}-${v}`),Y(V,t(j))}),Te(_,[],D,()=>(t(j),n()),n),d(P,F)}),r(w),r(W),T(()=>{k(w,"style",`font-size:${o()??""}px`),Y(I,e.label)}),d(S,W)};R(l,S=>{b()=="slider"?S(m):S(y,!1)},!0)}d(L,f)};R(u,L=>{b()=="inner"?L(E):L(H,!1)})}d(h,g),se()}We(["click"]);var ot=x('<p class="section-3-item svelte-1jnygz9"><label for="css-selector">CSS selector <!></label> <input disabled type="textarea" class="svelte-1jnygz9"></p>'),ct=x('<div class="section error-section svelte-1jnygz9"><p class="section-4-item svelte-1jnygz9"><label for="last-check">Last error</label> <input disabled type="textarea" class="svelte-1jnygz9"></p> <p class="section-4-item svelte-1jnygz9"><label for="last-update">Last error message</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div>'),vt=x('<div class="item svelte-1jnygz9"><h3 class="item-title svelte-1jnygz9"><div class="item-name svelte-1jnygz9"> </div> <div class="item-actions svelte-1jnygz9"><!> <!></div></h3> <div class="section svelte-1jnygz9"><p class="section-1-item svelte-1jnygz9"><label for="check-interval">Check interval</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <div class="section svelte-1jnygz9"><p class="section-2-item svelte-1jnygz9"><label for="notification-message">Notification message</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <div class="section svelte-1jnygz9"><p class="section-3-item svelte-1jnygz9"><label for="content">URL</label> <a target="_blank" rel="noopener noreferrer"> </a></p> <!></div> <div class="section svelte-1jnygz9"><p class="section-4-item svelte-1jnygz9"><label for="last-check">Last check</label> <input disabled type="textarea" class="svelte-1jnygz9"></p> <p class="section-4-item svelte-1jnygz9"><label for="last-update">Last content change</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div> <!> <div class="section svelte-1jnygz9"><p class="section-3-item svelte-1jnygz9"><label for="last-update">Last content</label> <input disabled type="textarea" class="svelte-1jnygz9"></p></div></div>');function dt(h,e){re(e,!0);const[_,b]=de(),c=()=>ue(he,"$user",_),o=ve(),n=l=>{const m=new Date(l*1e3);return m.toLocaleDateString()+" "+m.toLocaleTimeString()},p=e.watcher.lastCheckDateUnix===0?"Never checked before":n(e.watcher.lastCheckDateUnix),v=e.watcher.lastUpdateDateUnix===0?"Never changed":n(e.watcher.lastUpdateDateUnix),C=Je.fromMillis(e.watcher.checkIntervalSeconds*1e3).rescale().toHuman(),g=async()=>{if(!e.watcher.id){console.error("id must be defined");return}try{await Ke(e.watcher.id),o("delete")}catch(l){const m=`<strong>Watcher not deleted</strong><br/> ${l.message}`;De.push(m,{theme:{"--toastBarBackground":"#FF0000"}})}},u=async l=>{await Qe({watcherId:e.watcher.id,setToEnabled:l.detail==="on"}),o("update")};let E=e.watcher.archivalDateUnix?"off":"on";var H=ae(),L=B(H);{var f=l=>{var m=vt(),y=s(m),S=s(y),W=s(S,!0);r(S);var w=a(S,2),U=s(w);it(U,{value:E,label:"Enabled",design:"slider",$$events:{change:u}});var I=a(U,2);qe(I,{deleteAction:g}),r(w),r(y);var N=a(y,2),P=s(N),j=a(s(P),2);A(j),G(j,C),r(P),r(N);var F=a(N,2),D=s(F),q=a(s(D),2);A(q),r(D),r(F);var O=a(F,2),V=s(O),$=a(s(V),2),ce=s($,!0);r($),r(V);var i=a(V,2);{var z=X=>{var K=ot(),Q=s(K),ne=a(s(Q));Ge(ne,{get content(){return e.watcher.cssSelector}}),r(Q);var te=a(Q,2);A(te),r(K),T(()=>G(te,e.watcher.cssSelector)),d(X,K)};R(i,X=>{e.watcher.watchType==="CSS"&&X(z)})}r(O);var Z=a(O,2),ee=s(Z),_e=a(s(ee),2);A(_e),G(_e,p),r(ee);var be=a(ee,2),ge=a(s(be),2);A(ge),G(ge,v),r(be),r(Z);var ye=a(Z,2);{var Ae=X=>{var K=ct(),Q=s(K),ne=a(s(Q),2);A(ne),T(()=>G(ne,n(e.watcher.lastErrorDateUnix))),r(Q);var te=a(Q,2),je=a(s(te),2);A(je),r(te),r(K),T(()=>G(je,e.watcher.lastErrorMessage)),d(X,K)};R(ye,X=>{e.watcher.lastErrorDateUnix&&X(Ae)})}var we=a(ye,2),xe=s(we),Se=a(s(xe),2);A(Se),r(xe),r(we),r(m),T(()=>{Y(W,e.watcher.name),G(q,e.watcher.notificationMessage),k($,"href",e.watcher.url),Y(ce,e.watcher.url),G(Se,e.watcher.lastContent)}),d(l,m)};R(L,l=>{c()&&l(f)})}d(h,H),se(),b()}var ut=x('<div class="container svelte-c8nodu"></div>');function ht(h,e){re(e,!0);const _=ve(),b=(o,n)=>o.archivalDateUnix===null&&n.archivalDateUnix!==null?-1:o.archivalDateUnix!==null&&n.archivalDateUnix===null?1:n.id-o.id;var c=ut();fe(c,21,()=>e.watchers.sort(b),me,(o,n)=>{dt(o,{get watcher(){return t(n)},$$events:{delete:()=>_("delete"),update:()=>_("update")}})}),r(c),d(h,c),se()}var pt=x("<p>Something went wrong</p> <p> </p>",1),ft=x("<p>Loading data</p>"),mt=x("<h2>Create a new watcher</h2> <button>Add an entry</button> <h2>Watchers</h2> <!>",1);function Ft(h,e){re(e,!1);const[_,b]=de(),c=()=>ue(he,"$user",_);Ve.set("Web Watchers");let o=Ie(ze());const n=()=>M(o,ze());Le();var p=ae(),v=B(p);{var C=u=>{var E=mt(),H=a(B(E),2),L=a(H,4);Me(L,()=>t(o),f=>{var l=ft();d(f,l)},(f,l)=>{ht(f,{get watchers(){return t(l)},$$events:{delete:n,update:n}})},(f,l)=>{var m=pt(),y=a(B(m),2),S=s(y,!0);T(()=>Y(S,JSON.stringify(t(l)))),r(y),d(f,m)}),He("click",H,()=>Ne.open(at,{onUpload:n})),d(u,E)},g=u=>{Ue(u,{item:{level:"info",header:"Login to list the watchers"}})};R(v,u=>{c()?u(C):u(g,!1)})}d(h,p),se(),b()}export{Ft as component,Pt as universal};
