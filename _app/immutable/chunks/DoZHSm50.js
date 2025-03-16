var tt=Object.defineProperty;var G=s=>{throw TypeError(s)};var et=(s,t,e)=>t in s?tt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>et(s,typeof t!="symbol"?t+"":t,e),st=(s,t,e)=>t.has(s)||G("Cannot "+e);var p=(s,t,e)=>(st(s,t,"read from private field"),e?e.call(s):t.get(s)),k=(s,t,e)=>t.has(s)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);import"./CWj6FrbW.js";import{B as rt,Y as at,C as nt,aA as K,K as it,h as ot,E as ct,aF as F,g as i,s as R,a2 as lt,p as Q,v as l,n as U,aS as dt,w as ft}from"./Blh4VyvI.js";import{e as h,a as d,t as ht}from"./8vVwn2F4.js";import{a as mt}from"./OgUPjNJU.js";import{i as T}from"./DB3ygwRk.js";import{e as pt}from"./DyR1-sIv.js";import{c as H}from"./uCqu9nX0.js";import{s as J}from"./BVzqg3c7.js";import{p as w}from"./BzpYSpev.js";function B(s,t,...e){var r=s,a=K,n;rt(()=>{a!==(a=t())&&(n&&(it(n),n=null),n=nt(()=>a(r,...e)))},at),ot&&(r=ct)}var O,L;const N=class N extends EventTarget{constructor(e,{id:r,component:a,props:n}){super();o(this,"_props");o(this,"result",ut());o(this,"id");o(this,"component");o(this,"modals");k(this,O,F(!1));k(this,L,lt(()=>this.modals.stack.length===0?!1:this.modals.stack[this.modals.stack.length-1].id===this.id&&!this.modals.transitioning));o(this,"close",(...e)=>{var a;if(((a=this.onBeforeClose)==null?void 0:a.call(this))===!1)return!1;const r=e[0];return this.dispatchEvent(new CustomEvent("close",{detail:r})),this.result.resolve(r),!0});o(this,"onBeforeClose");this.id=r||(N._idCounter++).toString(),this.component=a,this._props=n??{},this.modals=e}get exitBeforeEnter(){return i(p(this,O))}set exitBeforeEnter(e){R(p(this,O),w(e))}get isOpen(){return i(p(this,L))}get index(){return this.modals.stack.indexOf(this)}get props(){return{...this._props,id:this.id,index:this.index,isOpen:this.isOpen,close:this.close}}get promise(){return this.result.promise}};O=new WeakMap,L=new WeakMap,o(N,"_idCounter",0);let Y=N;function ut(){let s,t;return{promise:new Promise((r,a)=>{s=r,t=a}),resolve:s,reject:t}}var A,M,P;class vt{constructor(){k(this,A,F(w([])));k(this,M,F(null));k(this,P,F(!1));o(this,"open",async(t,e,r)=>{var S;if(this.transitioning)return;if(r!=null&&r.replace&&!((S=this.stack[this.stack.length-1])==null?void 0:S.close()))throw new Error("Current modal prevented closing");this.action="push";const a=this.stack[this.stack.length-1];a!=null&&a.exitBeforeEnter&&(this.transitioning=!0);const n=new Y(this,{id:r==null?void 0:r.id,component:t,props:e});return this.stack.push(n),n.addEventListener("close",()=>{n.exitBeforeEnter&&(this.transitioning=!0),this.stack.indexOf(n)>-1&&this.stack.splice(this.stack.indexOf(n),1),this.action="pop"},{once:!0}),n.promise});o(this,"close",(t=1)=>{if(typeof t!="number"||t<1)throw new Error(`amount must be a number greater than 0. Received ${t}`);const e=this.stack.slice(this.stack.length-t).reverse();let r=0;for(const a of e){if(!a.close())break;r++}return t===r});o(this,"closeById",t=>{const e=this.stack.find(r=>r.id===t);return e?e.close():!1});o(this,"closeAll",()=>this.close(this.stack.length))}get stack(){return i(p(this,A))}set stack(t){R(p(this,A),w(t))}get action(){return i(p(this,M))}set action(t){R(p(this,M),w(t))}get transitioning(){return i(p(this,P))}set transitioning(t){R(p(this,P),w(t))}}A=new WeakMap,M=new WeakMap,P=new WeakMap;const gt=Symbol("modal");function _t(s){dt(gt,s)}function kt(s,t){Q(t,!0),_t(t.modal);var e=h(),r=l(e);B(r,()=>t.children),d(s,e),U()}const x=new vt;var xt=ht("<!> <!>",1);function Tt(s,t){Q(t,!0);function e(m){return typeof m.prototype>"u"}var r=xt(),a=l(r);{var n=m=>{var c=h(),j=l(c);B(j,()=>t.backdrop??K,()=>x),d(m,c)};T(a,m=>{x.stack.length>0&&m(n)})}var S=ft(a,2);pt(S,19,()=>x.stack,m=>m.id,(m,c)=>{kt(m,{get modal(){return i(c)},children:(j,Et)=>{var q=h(),V=l(q);{var W=_=>{var E=h(),z=l(E);mt(z,()=>i(c).component(),y=>{var v=h(),f=l(v);B(f,()=>t.loading??K,()=>x),d(y,v)},(y,v)=>{var f=h(),g=l(f);{var C=u=>{var b=h(),I=l(b);B(I,()=>t.modal,()=>({component:i(v).default,props:i(c).props}),()=>x),d(u,b)},D=u=>{var b=h(),I=l(b);H(I,()=>i(v).default,(Z,$)=>{$(Z,J(()=>i(c).props))}),d(u,b)};T(g,u=>{t.modal?u(C):u(D,!1)})}d(y,f)}),d(_,E)},X=_=>{var E=h(),z=l(E);{var y=f=>{var g=h(),C=l(g);B(C,()=>t.modal,()=>({component:i(c).component,props:i(c).props}),()=>x),d(f,g)},v=f=>{var g=h(),C=l(g);H(C,()=>i(c).component,(D,u)=>{u(D,J(()=>i(c).props))}),d(f,g)};T(z,f=>{t.modal?f(y):f(v,!1)})}d(_,E)};T(V,_=>{e(i(c).component)?_(W):_(X,!1)})}d(j,q)},$$slots:{default:!0}})}),d(s,r),U()}export{Tt as M,x as m,B as s};
