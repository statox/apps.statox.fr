import"../chunks/disclose-version.Bg9kRutz.js";import{p as P,aX as C,y as A,x as S,al as f,z as u,am as p,g as e,s as D,aK as O,w as Q,v as R}from"../chunks/index-client.CflxByDC.js";import{n as K,e as L,a as m,t as x}from"../chunks/template.BNipMNgO.js";import{i as T}from"../chunks/if.DypW3AvO.js";import{a as F}from"../chunks/props.B1tCRvRm.js";import{s as V,a as q}from"../chunks/store.Bv-UhthR.js";import{m as Y}from"../chunks/Modals.5B6rnlQ8.js";import{u as z,U as Z}from"../chunks/service.sqD5csl4.js";import{M as B}from"../chunks/Main.2MXsZWlD.js";import{e as N,i as W}from"../chunks/each.Z673LCtr.js";import{r as ee}from"../chunks/attributes.Cbh5jV0V.js";import{b as te}from"../chunks/input.BqKxAZW_.js";import{r as ae,a as re,A as oe}from"../chunks/index.Bpiyuc6c.js";import{t as se}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.C4P6yVn0.js";import{D as X}from"../chunks/datetime.CJSQP4eG.js";import{s as I}from"../chunks/render.BKP2kCYY.js";import{a as ne}from"../chunks/await.CbC4o2Nc.js";const ie=async n=>re({path:"/personalTracker/upload",data:{event:n}}),G=async()=>{const{events:n}=await ae({path:"/personalTracker/getAll",authorize:!0});return n},ve=async(n,t,i,g)=>{if(D(t,F([])),e(i)!==Number(e(i).toFixed(1))&&e(t).push({level:"error",header:"Value have at most 1 number after the comma"}),(e(i)<80||e(i)>110)&&e(t).push({level:"error",header:"Value must be in kg"}),e(t).length)return;const _=X.now().toUTC().toUnixInteger();try{await ie({timestampUTC:_,type:"weight",value:Math.floor(e(i)*100)}),g.onUpload(),g.close()}catch(o){let v=o.message;o instanceof oe&&o.code===401?v="Invalid logged in user":o instanceof Z&&(v="User is logged out");const c=`<strong>Entry not created</strong><br/> ${v}`;se.push(c,{theme:{"--toastBarBackground":"#FF0000"}})}};var le=x('<button class="form-action svelte-1cixduj">Submit</button>'),de=x('<span class="form-action svelte-1cixduj">Login to upload an entry</span>'),me=x('<div role="dialog" class="modal svelte-1cixduj"><div class="contents svelte-1cixduj"><h4 class="title-bar svelte-1cixduj">Add a new event <button>Close</button></h4> <!> <form class="form-content svelte-1cixduj"><label for="weight">Weight</label> <input type="number" step="0.1"> <br> <!></form></div></div>');function ce(n,t){P(t,!0);const[i,g]=V(),_=()=>q(z,"$user",i);let o=C(F([])),v=C(0);var c=L(),h=A(c);{var k=b=>{var a=me(),l=f(a),s=f(l),E=u(f(s));E.__click=function(...r){var d;(d=t.close)==null||d.apply(this,r)},p(s);var w=u(s,2);N(w,17,()=>e(o),W,(r,d)=>{B(r,{get item(){return e(d)}})});var U=u(w,2),y=u(f(U),2);ee(y);var M=u(y,4);{var j=r=>{var d=le();d.__click=[ve,o,v,t],m(r,d)},$=r=>{var d=de();m(r,d)};T(M,r=>{_()?r(j):r($,!1)})}p(U),p(l),p(a),te(y,()=>e(v),r=>D(v,r)),m(b,a)};T(h,b=>{t.isOpen&&b(k)})}m(n,c),S(),g()}K(["click"]);var ue=x('<div class="event svelte-1lfnev1"><div class="event-date"> </div> <div class="event-type"> </div> <div class="event-value"> </div></div>'),fe=x('<div class="event svelte-1lfnev1"><div>Date</div> <div>Type</div> <div>Value</div></div> <!>',1),pe=x("<p>Loading events</p>");function ge(n,t){P(t,!0);const[i,g]=V(),_=()=>q(z,"$user",i);var o=L(),v=A(o);{var c=h=>{var k=L(),b=A(k);ne(b,()=>t.events,a=>{var l=pe();m(a,l)},(a,l)=>{var s=fe(),E=u(A(s),2);N(E,17,()=>e(l),W,(w,U)=>{var y=ue();const M=O(()=>X.fromSeconds(e(U).eventDateUnix).toLocal().toFormat("dd/MM/yy HH:mm"));var j=f(y),$=f(j,!0);p(j);var r=u(j,2),d=f(r,!0);p(r);var H=u(r,2),J=f(H,!0);p(H),p(y),Q(()=>{I($,e(M)),I(d,e(U).type),I(J,e(U).value)}),m(w,y)}),m(a,s)},(a,l)=>{var s=O(()=>({level:"error",header:"Something went wrong getting events",message:e(l)}));B(a,{get item(){return e(s)}})}),m(h,k)};T(v,h=>{_()&&t.events&&h(c)})}m(n,o),S(),g()}var _e=(n,t)=>Y.open(ce,{onUpload:t}),he=x("<div><button>Add an entry</button></div> <!>",1);function Pe(n,t){P(t,!0);const[i,g]=V(),_=()=>q(z,"$user",i);let o=C(void 0);const v=()=>D(o,F(G()));R(()=>D(o,F(G())));var c=L(),h=A(c);{var k=a=>{var l=he(),s=A(l),E=f(s);E.__click=[_e,v],p(s);var w=u(s,2);ge(w,{get events(){return e(o)}}),m(a,l)},b=a=>{B(a,{item:{level:"info",header:"Login to add an entry or see events"}})};T(h,a=>{_()?a(k):a(b,!1)})}m(n,c),S(),g()}K(["click"]);export{Pe as component};
