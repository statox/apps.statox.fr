import"../chunks/disclose-version.Bg9kRutz.js";import{i as ee}from"../chunks/legacy.C6Jsm68G.js";import{p as A,aF as h,w as m,g as e,aG as g,n as C,s as p,aH as k,aa as te,k as D,o as ae,v as re}from"../chunks/index-client.CwKaIs20.js";import{f as B,a as y,t as w,u as oe,q as ne,e as se}from"../chunks/template.7grJUHbA.js";import{i as $}from"../chunks/if.Bi_20hhT.js";import{s as O,a as R}from"../chunks/store.ChaSGJXD.js";import{u as G,U as ie}from"../chunks/service.D5X9pVWh.js";import{M as H}from"../chunks/Main.BGZN8_Kh.js";import{e as Q,i as j}from"../chunks/each.DKzLuYBh.js";import{r as q}from"../chunks/attributes.Dc62wPgd.js";import{b as U}from"../chunks/input.DRsL7Czo.js";import{p as z}from"../chunks/proxy.CJQ3oePJ.js";import{A as le}from"../chunks/index.CCUuaarD.js";import{M as de}from"../chunks/Main.r7rNSox8.js";import{t as ue}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.BbR03pxG.js";import{a as ve,b as ce}from"../chunks/api.D8hNGrbo.js";import{g as me}from"../chunks/entry.bp9cq3AJ.js";import{I as pe}from"../chunks/IngredientsList.Bzzy7iTd.js";import{s as fe}from"../chunks/render.CCvbYkc4.js";import{p as ge}from"../chunks/props.C12I74pf.js";import{p as _e}from"../chunks/Main.svelte_svelte_type_style_lang.Ce7hlPiL.js";const be=(f,a)=>{p(a,!1)};var he=(f,a,s)=>a(e(s)),ke=w('<div class="option svelte-10zooem"> </div>'),ye=w('<div class="dropdown svelte-10zooem"></div>'),xe=w('<span><input type="text" class="svelte-10zooem"> <!></span>');function we(f,a){A(a,!0);const s=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"");let r=ge(a,"value",15),o=k(!1),c=te(()=>a.options.filter(t=>r().length<2?!1:s(t).toLowerCase().includes(s(r()).toLowerCase())));function u(t){r(t),p(o,!0)}var d=xe(),n=h(d);q(n),n.__input=[be,o];var i=m(n,2);{var l=t=>{var _=ye();Q(_,21,()=>e(c),j,(F,L)=>{var x=ke();x.__click=[he,u,L];var N=h(x,!0);g(x),D(()=>fe(N,e(L))),y(F,x)}),g(_),y(t,_)};$(i,t=>{e(c).length>0&&!e(o)&&t(l)})}g(d),U(n,r),y(f,d),C()}B(["input","click"]);const Ie=(f,a,s,r,o)=>{e(a)&&s.onAdd({name:e(a),quantity:e(r),unit:e(o)})};var ze=w('<div class="input-container svelte-1mzmydd"><label for="name">Ingredient</label> <!> <label for="quantity">Quantity</label> <input type="number"> <label for="quantity">Unit</label> <input type="text"> <button><i class="fa fa-solid fa-plus"></i></button></div>');function Le(f,a){A(a,!0);let s=k(z([])),r=k(""),o=k(void 0),c=k(void 0);ae(async()=>{p(s,z((await ve()).ingredients.sort((t,_)=>t<_?1:0).map(t=>t.name)))});var u=ze(),d=m(h(u),2);we(d,{get options(){return e(s)},get value(){return e(r)},set value(t){p(r,z(t))}});var n=m(d,4);q(n);var i=m(n,4);q(i);var l=m(i,2);l.__click=[Ie,r,a,o,c],g(u),U(n,()=>e(o),t=>p(o,t)),U(i,()=>e(c),t=>p(c,t)),y(f,u),C()}B(["click"]);const Ne=async(f,a,s,r,o,c,u)=>{var d,n;if(p(a,z([])),(d=e(s))!=null&&d.length||e(a).push({level:"error",header:"Name must be defined"}),(n=e(r))!=null&&n.length||e(a).push({level:"error",header:"Content must be defined"}),!e(a).length)try{p(o,!0),await ce({name:e(s),content:e(r),ingredients:c}),p(o,!1),u.onUpload()}catch(i){p(o,!1);let l=i.message;i instanceof le&&i.code===401?l="Invalid logged in user":i instanceof ie&&(l="User is logged out");const t=`<strong>Entry not created</strong><br/> ${l}`;ue.push(t,{theme:{"--toastBarBackground":"#FF0000"}})}};var Ue=()=>me("/cookbook"),$e=w('<button class="form-action svelte-1603erd"><!></button>'),qe=w('<span class="form-action svelte-1603erd">Login to upload an entry</span>'),Ae=w('<div class="contents svelte-1603erd"><span class="title-bar svelte-1603erd"><h2>Add a new recipe</h2> <button class="svelte-1603erd">Back to list</button></span> <!> <div class="form-content svelte-1603erd"><label for="name">Name</label> <input type="text"> <label for="ingredients">New ingredient</label> <div><!></div> <label for="ingredients">List of ingredients</label> <div><!></div> <label for="content">Instructions</label> <textarea rows="10" cols="50"></textarea></div> <!></div>');function Ce(f,a){A(a,!0);const[s,r]=O(),o=()=>R(G,"$user",s);let c=k(z([])),u=k(!1),d=k(""),n=k(""),i=z([]);const l=v=>{i.push(v)};var t=Ae(),_=h(t),F=m(h(_),2);F.__click=[Ue],g(_);var L=m(_,2);Q(L,17,()=>e(c),j,(v,b)=>{H(v,{get item(){return e(b)}})});var x=m(L,2),N=m(h(x),2);q(N);var M=m(N,4),J=h(M);Le(J,{onAdd:l}),g(M);var S=m(M,4),K=h(S);pe(K,{get ingredients(){return i},editable:!0}),g(S);var E=m(S,4);oe(E),g(x);var P=m(x,2);{var T=v=>{var b=$e();b.__click=[Ne,c,d,n,u,i,a];var W=h(b);{var X=I=>{de(I,{size:.5,unit:"em",durationSeconds:.5})},Y=I=>{var Z=ne("Submit");y(I,Z)};$(W,I=>{e(u)?I(X):I(Y,!1)})}g(b),D(()=>b.disabled=e(u)),y(v,b)},V=v=>{var b=qe();y(v,b)};$(P,v=>{o()?v(T):v(V,!1)})}g(t),U(N,()=>e(d),v=>p(d,v)),U(E,()=>e(n),v=>p(n,v)),y(f,t),C(),r()}B(["click"]);function et(f,a){A(a,!1);const[s,r]=O(),o=()=>R(G,"$user",s);_e.set("Cookbook");const c=()=>{console.log("New recipe created")};ee();var u=se(),d=re(u);{var n=l=>{Ce(l,{onUpload:c})},i=l=>{H(l,{item:{level:"info",header:"Login to add an entry"}})};$(d,l=>{o()?l(n):l(i,!1)})}y(f,u),C(),r()}export{et as component};
