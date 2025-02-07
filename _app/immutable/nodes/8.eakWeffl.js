import"../chunks/disclose-version.Bg9kRutz.js";import{i as te}from"../chunks/legacy.C6Jsm68G.js";import{p as q,aF as h,w as f,g as e,aG as _,n as A,s as p,aH as k,aa as ae,k as D,o as re,v as ne}from"../chunks/index-client.CwKaIs20.js";import{f as S,a as y,t as w,u as oe,q as se,e as ie}from"../chunks/template.7grJUHbA.js";import{i as U}from"../chunks/if.Bi_20hhT.js";import{s as O,a as R}from"../chunks/store.ChaSGJXD.js";import{u as G,U as le}from"../chunks/service.Dq1G-nDL.js";import{M as H}from"../chunks/Main.B6MmMrO4.js";import{e as Q,i as j}from"../chunks/each.DKzLuYBh.js";import{r as $}from"../chunks/attributes.Dc62wPgd.js";import{b as N}from"../chunks/input.DRsL7Czo.js";import{p as z}from"../chunks/proxy.CJQ3oePJ.js";import{A as de}from"../chunks/index.BQTS2qgi.js";import{M as ue}from"../chunks/Main.r7rNSox8.js";import{t as J}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.DONXQplr.js";import{a as ve,b as ce}from"../chunks/api.DPK_kU80.js";import{g as me}from"../chunks/entry.Xdkk_wX4.js";import{I as fe}from"../chunks/IngredientsList.Bzzy7iTd.js";import{s as pe}from"../chunks/render.CCvbYkc4.js";import{p as ge}from"../chunks/props.C12I74pf.js";import{p as _e}from"../chunks/Main.svelte_svelte_type_style_lang.DcoLlCTY.js";const be=(g,a)=>{p(a,!1)};var he=(g,a,i)=>a(e(i)),ke=w('<div class="option svelte-10zooem"> </div>'),ye=w('<div class="dropdown svelte-10zooem"></div>'),xe=w('<span><input type="text" class="svelte-10zooem"> <!></span>');function we(g,a){q(a,!0);const i=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"");let r=ge(a,"value",15),n=k(!1),c=ae(()=>a.options.filter(t=>r().length<2?!1:i(t).toLowerCase().includes(i(r()).toLowerCase())));function v(t){r(t),p(n,!0)}var u=xe(),o=h(u);$(o),o.__input=[be,n];var s=f(o,2);{var l=t=>{var b=ye();Q(b,21,()=>e(c),j,(B,F)=>{var x=ke();x.__click=[he,v,F];var L=h(x,!0);_(x),D(()=>pe(L,e(F))),y(B,x)}),_(b),y(t,b)};U(s,t=>{e(c).length>0&&!e(n)&&t(l)})}_(u),N(o,r),y(g,u),A()}S(["input","click"]);const Ie=(g,a,i,r,n)=>{e(a)&&i.onAdd({name:e(a),quantity:e(r),unit:e(n)})};var ze=w('<div class="input-container svelte-1mzmydd"><label for="name">Ingredient</label> <!> <label for="quantity">Quantity</label> <input type="number"> <label for="quantity">Unit</label> <input type="text"> <button><i class="fa fa-solid fa-plus"></i></button></div>');function Fe(g,a){q(a,!0);let i=k(z([])),r=k(""),n=k(void 0),c=k(void 0);re(async()=>{p(i,z((await ve()).ingredients.sort((t,b)=>t<b?1:0).map(t=>t.name)))});var v=ze(),u=f(h(v),2);we(u,{get options(){return e(i)},get value(){return e(r)},set value(t){p(r,z(t))}});var o=f(u,4);$(o);var s=f(o,4);$(s);var l=f(s,2);l.__click=[Ie,r,a,n,c],_(v),N(o,()=>e(n),t=>p(n,t)),N(s,()=>e(c),t=>p(c,t)),y(g,v),A()}S(["click"]);const Le=async(g,a,i,r,n,c,v)=>{var u,o;if(p(a,z([])),(u=e(i))!=null&&u.length||e(a).push({level:"error",header:"Name must be defined"}),(o=e(r))!=null&&o.length||e(a).push({level:"error",header:"Content must be defined"}),!e(a).length)try{p(n,!0),await ce({name:e(i),content:e(r),ingredients:c}),p(n,!1),v.onUpload()}catch(s){p(n,!1);let l=s.message;s instanceof de&&s.code===401?l="Invalid logged in user":s instanceof le&&(l="User is logged out");const t=`<strong>Entry not created</strong><br/> ${l}`;J.push(t,{theme:{"--toastBarBackground":"#FF0000"}})}};var Ne=()=>me("/cookbook"),Ue=w('<button class="form-action svelte-1603erd"><!></button>'),$e=w('<span class="form-action svelte-1603erd">Login to upload an entry</span>'),qe=w('<div class="contents svelte-1603erd"><span class="title-bar svelte-1603erd"><h2>Add a new recipe</h2> <button class="svelte-1603erd">Back to list</button></span> <!> <div class="form-content svelte-1603erd"><label for="name">Name</label> <input type="text"> <label for="ingredients">New ingredient</label> <div><!></div> <label for="ingredients">List of ingredients</label> <div><!></div> <label for="content">Instructions</label> <textarea rows="10" cols="50"></textarea></div> <!></div>');function Ae(g,a){q(a,!0);const[i,r]=O(),n=()=>R(G,"$user",i);let c=k(z([])),v=k(!1),u=k(""),o=k(""),s=z([]);const l=d=>{if(s.find(m=>m.name===d.name)){const m=d.name+" already added";J.push(m,{theme:{"--toastBarBackground":"#FF0000"}});return}s.push(d)};var t=qe(),b=h(t),B=f(h(b),2);B.__click=[Ne],_(b);var F=f(b,2);Q(F,17,()=>e(c),j,(d,m)=>{H(d,{get item(){return e(m)}})});var x=f(F,2),L=f(h(x),2);$(L);var C=f(L,4),K=h(C);Fe(K,{onAdd:l}),_(C);var M=f(C,4),P=h(M);fe(P,{get ingredients(){return s},editable:!0}),_(M);var E=f(M,4);oe(E),_(x);var T=f(x,2);{var V=d=>{var m=Ue();m.__click=[Le,c,u,o,v,s,a];var X=h(m);{var Y=I=>{ue(I,{size:.5,unit:"em",durationSeconds:.5})},Z=I=>{var ee=se("Submit");y(I,ee)};U(X,I=>{e(v)?I(Y):I(Z,!1)})}_(m),D(()=>m.disabled=e(v)),y(d,m)},W=d=>{var m=$e();y(d,m)};U(T,d=>{n()?d(V):d(W,!1)})}_(t),N(L,()=>e(u),d=>p(u,d)),N(E,()=>e(o),d=>p(o,d)),y(g,t),A(),r()}S(["click"]);function et(g,a){q(a,!1);const[i,r]=O(),n=()=>R(G,"$user",i);_e.set("Cookbook");const c=()=>{console.log("New recipe created")};te();var v=ie(),u=ne(v);{var o=l=>{Ae(l,{onUpload:c})},s=l=>{H(l,{item:{level:"info",header:"Login to add an entry"}})};U(u,l=>{n()?l(o):l(s,!1)})}y(g,v),A(),r()}export{et as component};
