import"../chunks/disclose-version.Bg9kRutz.js";import{i as H}from"../chunks/legacy.EqIdVoM0.js";import{E as qt,a$ as zt,b0 as Ft,e as Rt,u as Bt,aK as Lt,q as Dt,ab as J,b1 as Kt,Y as vt,b2 as Pt,b3 as Ht,H as dt,G as pt,a7 as Wt,m as W,y as C,x as U,aW as mt,z as F,g as h,a5 as X,M as kt,ag as K,v as ut,aV as Ut,ah as Q,ai as wt,ae as O,af as M,w as tt,s as q,B as Z}from"../chunks/index-client.S3REcJgE.js";import{e as I,a as k,t as A,c as N}from"../chunks/template.B5pchg3w.js";import{i as V}from"../chunks/if.BYsj_AMu.js";import{s as at,h as Gt}from"../chunks/slot.BPPkwfxM.js";import{a as Zt}from"../chunks/await.BGm15oIX.js";import{c as Vt,e as xt,i as Yt}from"../chunks/each.Nz7c8l4p.js";import{c as ot}from"../chunks/svelte-component.BArtvi3w.js";import{s as it,p as ft}from"../chunks/props.C2aoZBXh.js";import{s as Y,a as P,b as et}from"../chunks/store.BAWuPd1l.js";import{m as Jt,a as Qt,e as ht,t as nt,c as Xt}from"../chunks/store.DF07ihmy.js";import{u as te,l as ee,a as re,i as ae,M as se}from"../chunks/Main.Bhdrm3q8.js";import{a as ne,s as Et,c as St}from"../chunks/attributes.BZLGEmLx.js";import{t as gt,s as Ct}from"../chunks/class.co_UInUL.js";import{b as oe,s as ie}from"../chunks/render.CF6uZz0T.js";import{t as lt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.NDn5vnUv.js";import{g as fe}from"../chunks/entry.WFWrpjgv.js";import{p as le}from"../chunks/Main.svelte_svelte_type_style_lang.CsTDB6ng.js";import{k as ce}from"../chunks/key.BxrKyE8K.js";const ue=()=>performance.now(),z={tick:t=>requestAnimationFrame(t),now:()=>ue(),tasks:new Set};function Mt(){const t=z.now();z.tasks.forEach(e=>{e.c(t)||(z.tasks.delete(e),e.f())}),z.tasks.size!==0&&z.tick(Mt)}function Tt(t){let e;return z.tasks.size===0&&z.tick(Mt),{promise:new Promise(s=>{z.tasks.add(e={c:t,f:s})}),abort(){z.tasks.delete(e)}}}function rt(t,e){t.dispatchEvent(new CustomEvent(e))}function ve(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function _t(t){const e={},s=t.split(";");for(const i of s){const[a,r]=i.split(":");if(!a||r===void 0)break;const n=ve(a.trim());e[n]=r.trim()}return e}const de=t=>t;function pe(t,e,s){var i=Vt,a,r,n,v=null;i.a??(i.a={element:t,measure(){a=this.element.getBoundingClientRect()},apply(){if(n==null||n.abort(),r=this.element.getBoundingClientRect(),a.left!==r.left||a.right!==r.right||a.top!==r.top||a.bottom!==r.bottom){const c=e()(this.element,{from:a,to:r},s==null?void 0:s());n=st(this.element,c,void 0,1,()=>{n==null||n.abort(),n=void 0})}},fix(){if(!t.getAnimations().length){var{position:c,width:d,height:f}=getComputedStyle(t);if(c!=="absolute"&&c!=="fixed"){var l=t.style;v={position:l.position,width:l.width,height:l.height,transform:l.transform},l.position="absolute",l.width=d,l.height=f;var o=t.getBoundingClientRect();if(a.left!==o.left||a.top!==o.top){var u=`translate(${a.left-o.left}px, ${a.top-o.top}px)`;l.transform=l.transform?`${l.transform} ${u}`:u}}}},unfix(){if(v){var c=t.style;c.position=v.position,c.width=v.width,c.height=v.height,c.transform=v.transform}}}),i.a.element=t}function yt(t,e,s,i){var a=(t&Kt)!==0,r=(t&Pt)!==0,n=a&&r,v=(t&Ht)!==0,c=n?"both":a?"in":"out",d,f=e.inert,l=e.style.overflow,o,u;function g(){var $=Wt,x=vt;dt(null),pt(null);try{return d??(d=s()(e,(i==null?void 0:i())??{},{direction:c}))}finally{dt($),pt(x)}}var _={is_global:v,in(){var $;if(e.inert=f,!a){u==null||u.abort(),($=u==null?void 0:u.reset)==null||$.call(u);return}r||o==null||o.abort(),rt(e,"introstart"),o=st(e,g(),u,1,()=>{rt(e,"introend"),o==null||o.abort(),o=d=void 0,e.style.overflow=l})},out($){if(!r){$==null||$(),d=void 0;return}e.inert=!0,rt(e,"outrostart"),u=st(e,g(),o,0,()=>{rt(e,"outroend"),$==null||$()})},stop:()=>{o==null||o.abort(),u==null||u.abort()}},p=vt;if((p.transitions??(p.transitions=[])).push(_),a&&oe){var w=v;if(!w){for(var b=p.parent;b&&b.f&qt;)for(;(b=b.parent)&&!(b.f&zt););w=!b||(b.f&Ft)!==0}w&&Rt(()=>{Bt(()=>_.in())})}}function st(t,e,s,i,a){var r=i===1;if(Lt(e)){var n,v=!1;return Dt(()=>{if(!v){var p=e({direction:r?"in":"out"});n=st(t,p,s,i,a)}}),{abort:()=>{v=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(s==null||s.deactivate(),!(e!=null&&e.duration))return a(),{abort:J,deactivate:J,reset:J,t:()=>i};const{delay:c=0,css:d,tick:f,easing:l=de}=e;var o=[];if(r&&s===void 0&&(f&&f(0,1),d)){var u=_t(d(0,1));o.push(u,u)}var g=()=>1-i,_=t.animate(o,{duration:c});return _.onfinish=()=>{var p=(s==null?void 0:s.t())??1-i;s==null||s.abort();var w=i-p,b=e.duration*Math.abs(w),$=[];if(b>0){var x=!1;if(d)for(var R=Math.ceil(b/16.666666666666668),E=0;E<=R;E+=1){var T=p+w*l(E/R),B=_t(d(T,1-T));$.push(B),x||(x=B.overflow==="hidden")}x&&(t.style.overflow="hidden"),g=()=>{var j=_.currentTime;return p+w*l(j/b)},f&&Tt(()=>{if(_.playState!=="running")return!1;var j=g();return f(j,1-j),!0})}_=t.animate($,{duration:b,fill:"forwards"}),_.onfinish=()=>{g=()=>i,f==null||f(i,1-i),a()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=J)},deactivate:()=>{a=J},reset:()=>{i===0&&(f==null||f(1,0))},t:()=>g()}}const me=!0,lr=Object.freeze(Object.defineProperty({__proto__:null,prerender:me},Symbol.toStringTag,{value:"Module"}));var he=A("<!> <!>",1);function ge(t,e){W(e,!1);const[s,i]=Y(),a=()=>P(Jt,"$modals",s),r=()=>P(nt,"$transitioning",s);function n(p){return typeof p.prototype>"u"}async function v(p){return p().then(w=>w.default)}const c=["Escape"];let d=!0;const f=p=>{c.includes(p.key)&&d&&(d=!1,Qt()&&p.preventDefault())},l=p=>{!d&&c.includes(p.key)&&(d=!0,p.preventDefault())};H();var o=he();I("keydown",mt,f),I("keyup",mt,l);var u=C(o);{var g=p=>{var w=N(),b=C(w);at(b,e,"backdrop",{},null),k(p,w)};V(u,p=>{a().length>0&&p(g)})}var _=F(u,2);at(_,e,"default",{},p=>{var w=N(),b=C(w);xt(b,1,a,Yt,($,x,R)=>{var E=N(),T=C(E);{var B=m=>{var y=N(),S=C(y);Zt(S,()=>v(h(x).component),D=>{var L=N(),G=C(L);at(G,e,"loading",{},null),k(D,L)},(D,L)=>{var G=N(),At=C(G),Nt=X(()=>R===a().length-1&&!r());ot(At,()=>h(L),(It,jt)=>{jt(It,it({get isOpen(){return h(Nt)}},()=>h(x).props,{$$events:{introstart:()=>{et(ht,!0)},outroend:()=>{et(nt,!1)}}}))}),k(D,G)}),k(m,y)},j=m=>{var y=N(),S=C(y),D=X(()=>R===a().length-1&&!r());ot(S,()=>h(x).component,(L,G)=>{G(L,it({get isOpen(){return h(D)}},()=>h(x).props,{$$events:{introstart:()=>{et(ht,!0)},outroend:()=>{et(nt,!1)}}}))}),k(m,y)};V(T,m=>{n(h(x).component)?m(B):m(j,!1)})}k($,E)}),k(p,w)}),k(t,o),U(),i()}const _e=t=>t;function ye(t){const e=t-1;return e*e*e+1}function bt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function be(t,{delay:e=0,duration:s=400,easing:i=_e}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:i,css:r=>`opacity: ${r*a}`}}function $e(t,{delay:e=0,duration:s=400,easing:i=ye,x:a=0,y:r=0,opacity:n=0}={}){const v=getComputedStyle(t),c=+v.opacity,d=v.transform==="none"?"":v.transform,f=c*(1-n),[l,o]=bt(a),[u,g]=bt(r);return{delay:e,duration:s,easing:i,css:(_,p)=>`
			transform: ${d} translate(${(1-_)*l}${o}, ${(1-_)*u}${g});
			opacity: ${c-f*p}`}}function Ot(t){return t}function ke(t){const e=t-1;return e*e*e+1}function we(t,{from:e,to:s},i={}){var{delay:a=0,duration:r=E=>Math.sqrt(E)*120,easing:n=ke}=i,v=getComputedStyle(t),c=v.transform==="none"?"":v.transform,[d,f]=v.transformOrigin.split(" ").map(parseFloat);d/=t.clientWidth,f/=t.clientHeight;var l=xe(t),o=t.clientWidth/s.width/l,u=t.clientHeight/s.height/l,g=e.left+e.width*d,_=e.top+e.height*f,p=s.left+s.width*d,w=s.top+s.height*f,b=(g-p)*o,$=(_-w)*u,x=e.width/s.width,R=e.height/s.height;return{delay:a,duration:typeof r=="function"?r(Math.sqrt(b*b+$*$)):r,easing:n,css:(E,T)=>{var B=T*b,j=T*$,m=E+T*x,y=E+T*R;return`transform: ${c} translate(${B}px, ${j}px) scale(${m}, ${y});`}}}function xe(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,s=1;e!==null;)s*=+getComputedStyle(e).zoom,e=e.parentElement;return s}function $t(t){return Object.prototype.toString.call(t)==="[object Date]"}function ct(t,e){if(t===e||t!==t)return()=>t;const s=typeof t;if(s!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=e.map((a,r)=>ct(t[r],a));return a=>i.map(r=>r(a))}if(s==="object"){if(!t||!e)throw new Error("Object cannot be null");if($t(t)&&$t(e)){const r=t.getTime(),v=e.getTime()-r;return c=>new Date(r+c*v)}const i=Object.keys(e),a={};return i.forEach(r=>{a[r]=ct(t[r],e[r])}),r=>{const n={};return i.forEach(v=>{n[v]=a[v](r)}),n}}if(s==="number"){const i=e-t;return a=>t+a*i}return()=>e}function Ee(t,e={}){const s=kt(t);let i,a=t;function r(n,v){if(a=n,t==null)return s.set(t=n),Promise.resolve();let c=i,d=!1,{delay:f=0,duration:l=400,easing:o=Ot,interpolate:u=ct}={...e,...v};if(l===0)return c&&(c.abort(),c=null),s.set(t=a),Promise.resolve();const g=z.now()+f;let _;return i=Tt(p=>{if(p<g)return!0;d||(_=u(t,n),typeof l=="function"&&(l=l(t,n)),d=!0),c&&(c.abort(),c=null);const w=p-g;return w>l?(s.set(t=n),!1):(s.set(t=_(o(w/l))),!0)}),i.promise}return{set:r,update:(n,v)=>r(n(a,t),v),subscribe:s.subscribe}}var Se=A('<div class="_toastBtn pe svelte-1605jha" role="button" tabindex="0"></div>'),Ce=A('<div role="status" class="_toastItem svelte-1605jha"><div class="_toastMsg svelte-1605jha"><!></div> <!> <progress class="_toastBar svelte-1605jha"></progress></div>');function Me(t,e){W(e,!1);const[s,i]=Y(),a=()=>P(l,"$progress",s);let r=ft(e,"item",12),n=K(r().initial),v=K(h(n)),c=K(!1),d=K({}),f;const l=Ee(r().initial,{duration:r().duration,easing:Ot});function o(){lt.pop(r().id)}function u(){(a()===1||a()===0)&&o()}function g(){!h(c)&&a()!==h(n)&&(l.set(a(),{duration:0}),q(c,!0))}function _(){if(h(c)){const m=r().duration,y=m-m*((a()-h(v))/(h(n)-h(v)));l.set(h(n),{duration:y}).then(u),q(c,!1)}}function p(m,y="undefined"){return typeof m===y}function w(m=document){if(p(m.hidden))return;const y=()=>m.hidden?g():_(),S="visibilitychange";m.addEventListener(S,y),f=()=>m.removeEventListener(S,y),y()}ut(w),Ut(()=>{r()&&p(r().onpop,"function")&&r().onpop(r().id),f==null||f()}),Q(()=>(h(n),Z(r()),a()),()=>{h(n)!==r().next&&(q(n,r().next),q(v,a()),q(c,!1),l.set(h(n)).then(u))}),Q(()=>Z(r()),()=>{if(r().component){const{props:m={},sendIdTo:y}=r().component;q(d,{...m,...y&&{[y]:r().id}})}}),Q(()=>Z(r()),()=>{p(r().progress)||r(r().next=r().progress,!0)}),wt(),H();var b=Ce(),$=O(b),x=O($);{var R=m=>{var y=N(),S=C(y);ot(S,()=>r().component.src,(D,L)=>{L(D,it(()=>h(d)))}),k(m,y)},E=m=>{var y=N(),S=C(y);Gt(S,()=>r().msg,!1,!1),k(m,y)};V(x,m=>{r().component?m(R):m(E,!1)})}M($);var T=F($,2);{var B=m=>{var y=Se();I("click",y,o),I("keydown",y,S=>{S instanceof KeyboardEvent&&["Enter"," "].includes(S.key)&&o()}),k(m,y)};V(T,m=>{r().dismissable&&m(B)})}var j=F(T,2);M(b),tt(()=>{gt(b,"pe",r().pausable),gt($,"pe",r().component),ne(j,a())}),I("mouseenter",b,()=>{r().pausable&&g()}),I("mouseleave",b,_),k(t,b),U(),i()}var Te=A("<li><!></li>"),Oe=A('<ul class="_toastContainer svelte-1ryffm3"></ul>');function Ae(t,e){W(e,!1);const[s,i]=Y(),a=()=>P(lt,"$toast",s);let r=ft(e,"options",24,()=>({})),n=ft(e,"target",8,"default"),v=K([]);function c(f){return f?Object.keys(f).reduce((l,o)=>`${l}${o}:${f[o]};`,""):void 0}Q(()=>(Z(n()),Z(r())),()=>{lt._init(n(),r())}),Q(()=>(a(),Z(n())),()=>{q(v,a().filter(f=>f.target===n()))}),wt(),H();var d=Oe();xt(d,13,()=>h(v),f=>f.id,(f,l)=>{var o=Te();const u=X(()=>{var p;return St((p=h(l).classes)==null?void 0:p.join(" "))}),g=X(()=>c(h(l).theme));var _=O(o);Me(_,{get item(){return h(l)}}),M(o),tt(()=>{Ct(o,h(u),"svelte-1ryffm3"),Et(o,"style",h(g))}),yt(1,o,()=>$e,()=>h(l).intro),yt(2,o,()=>be),pe(o,()=>we,()=>({duration:200})),k(f,o)}),M(d),k(t,d),U(),i()}var Ne=A('<button title="Home" type="button" class="svelte-spn78d"><i class="fa fa-home svelte-spn78d" aria-hidden="true"></i></button>');function Ie(t,e){W(e,!1),H();var s=Ne();I("click",s,()=>fe("/")),k(t,s),U()}var je=A('<button title="Log out" class="svelte-xit8oy"><img class="user-profile svelte-xit8oy" alt="user profile"></button>'),qe=A('<button title="Log in" type="button" class="svelte-xit8oy"><i class="fa fa-sign-in svelte-xit8oy" aria-hidden="true"></i></button>');function ze(t,e){W(e,!1);const[s,i]=Y(),a=()=>P(te,"$user",s);H();var r=N(),n=C(r);ce(n,a,v=>{var c=N(),d=C(c);{var f=o=>{var u=je(),g=O(u);M(u),tt(()=>Et(g,"src",a().picture)),I("click",u,()=>ee()),k(o,u)},l=o=>{var u=qe();I("click",u,()=>re()),k(o,u)};V(d,o=>{a()?o(f):o(l,!1)})}k(v,c)}),k(t,r),U(),i()}var Fe=A('<button class="svelte-1ldhsng"><i aria-hidden="true"></i></button>');function Re(t,e){W(e,!1);const[s,i]=Y(),a=()=>P(r,"$darkModeEnabled",s),r=kt(!1),n="fas fa-moon",v="fas fa-sun";let c=K(n),d;const f=()=>{r.set(!a()),l()},l=()=>{a()?(d.dataset.theme="dark",q(c,v)):(d.dataset.theme="light",q(c,n))};ut(()=>{d=document.documentElement;const g=localStorage.getItem("darkModeEnabled")||!0;r.set(g==="true"),r.subscribe(_=>{localStorage.setItem("darkModeEnabled",_.toString())}),l()}),H();var o=Fe(),u=O(o);M(o),tt(()=>Ct(u,St(h(c)),"svelte-1ldhsng")),I("click",o,f),k(t,o),U(),i()}var Be=A('<header class="svelte-yiqkip"><h1><a href="/" class="svelte-yiqkip"> </a></h1> <nav class="svelte-yiqkip"><span><!></span> <span class="before-last-item svelte-yiqkip"><!></span> <span><!></span></nav></header>');function Le(t){const[e,s]=Y(),i=()=>P(le,"$pageNameStore",e);var a=Be(),r=O(a),n=O(r),v=O(n,!0);M(n),M(r);var c=F(r,2),d=O(c),f=O(d);Ie(f,{}),M(d);var l=F(d,2),o=O(l);ze(o,{}),M(l);var u=F(l,2),g=O(u);Re(g,{}),M(u),M(c),M(a),tt(()=>ie(v,i())),k(t,a),s()}var De=A('<button slot="backdrop" class="backdrop svelte-1hm91r4"></button>'),Ke=A("<!> <!> <!>   <!> <!>",1);function cr(t,e){W(e,!1);let s=K();ut(async()=>{try{await ae()}catch(f){q(s,f)}}),H();var i=Ke(),a=C(i);Le(a);var r=F(a,2);ge(r,{$$slots:{backdrop:(f,l)=>{var o=De();I("click",o,function(...u){var g;(g=Xt)==null||g.apply(this,u)}),k(f,o)}}});var n=F(r,2);Ae(n,{});var v=F(n,2);{var c=f=>{var l=X(()=>({level:"error",header:"Something went wrong with auth0 setup",message:h(s).message}));se(f,{get item(){return h(l)}})};V(v,f=>{h(s)&&f(c)})}var d=F(v,2);at(d,e,"default",{},null),k(t,i),U()}export{cr as component,lr as universal};
