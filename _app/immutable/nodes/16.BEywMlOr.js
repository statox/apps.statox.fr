import{g as Ut,u as wt,a as Mt,b as Ot}from"../chunks/api.C1qcCbP4.js";import"../chunks/disclose-version.Bg9kRutz.js";import{i as tt}from"../chunks/legacy.OjKiwS2-.js";import{p as G,aP as It,w as U,x as W,g as t,s as $,aX as mt,a$ as Ct,y as I,z as m,al as d,am as n,ap as F,ak as Ft,ac as at,an as Et,ao as Rt,b8 as dt,aK as _t,v as gt}from"../chunks/index-client.CflxByDC.js";import{s as M}from"../chunks/render.BKP2kCYY.js";import{e as j,i as P}from"../chunks/each.Z673LCtr.js";import{n as yt,a as _,t as T,f as Q,e as Y,s as Lt}from"../chunks/template.BNipMNgO.js";import{c as Nt}from"../chunks/svelte-component.Cws8rqt9.js";import{s as st,c as xt,r as bt}from"../chunks/attributes.Cbh5jV0V.js";import{t as St,s as Dt,U as jt,u as Pt}from"../chunks/service.sqD5csl4.js";import{s as ft}from"../chunks/style.PwPRnE0L.js";import{b as zt,d as Jt}from"../chunks/input.BqKxAZW_.js";import{a as Ht,p as O}from"../chunks/props.B1tCRvRm.js";import{s as Tt,b as At,a as pt}from"../chunks/store.Bv-UhthR.js";import{m as Kt}from"../chunks/Modals.5B6rnlQ8.js";import{a as Bt}from"../chunks/window.BRCRo0Gf.js";import{M as Gt}from"../chunks/Main.DhtiWXg0.js";import{M as Wt}from"../chunks/Main.2MXsZWlD.js";import{i as K}from"../chunks/if.DypW3AvO.js";import{k as ht}from"../chunks/key.DBOJXgKb.js";import{b as Xt,g as Qt}from"../chunks/entry.BWGtYfk3.js";import{t as Yt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.C4P6yVn0.js";import{A as Zt}from"../chunks/index.Bpiyuc6c.js";import{b as te}from"../chunks/this.DVmHCfgD.js";import{a as ee}from"../chunks/await.CbC4o2Nc.js";import{p as ae}from"../chunks/Main.svelte_svelte_type_style_lang.BXDs9EHj.js";const se=!1,re=async()=>({chords:await Ut()}),fa=Object.freeze(Object.defineProperty({__proto__:null,load:re,ssr:se},Symbol.toStringTag,{value:"Module"}));var oe=T('<button class="top-link svelte-1kbb9q3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="svelte-1kbb9q3"><path d="M12 6H0l6-6z"></path></svg> <span class="screen-reader-text svelte-1kbb9q3">Back to top</span></button>');function ne(C,u){G(u,!0);let L=mt(0),f=mt(!0),k;const b=i=>{i>0?$(f,!1):$(f,!0),k&&clearTimeout(k),k=setTimeout(()=>{$(f,!0)},3e3)},x=()=>{const i=document.documentElement.scrollTop||document.body.scrollTop;i>0&&(window.requestAnimationFrame(x),window.scrollTo(0,i-i/2))};It(()=>b(t(L)));var w=oe();w.__click=x,U(()=>St(w,"hide",t(f))),Bt("y",()=>t(L),i=>$(L,Ht(i))),_(C,w),W()}yt(["click"]);const ot=Ct();let Vt=[];const kt=localStorage.getItem("failedVisitCounts");if(kt!==null)try{Vt=JSON.parse(kt)}catch{console.error("Couldnt parse failedVisitCounts from local storage")}const it=Ct(Vt);it.subscribe(C=>{localStorage.setItem("failedVisitCounts",JSON.stringify(C))});const $t=C=>C==="doc"?"fas fa-file-word":C==="pdf"?"fas fa-file-pdf":C==="youtube"?"fa fa-youtube":"fas fa-link";var le=T('<span></span> <span><a target="_blank" rel="noopener noreferrer"></a></span>',1);function nt(C,u){G(u,!1);const[L,f]=Tt(),k=()=>pt(it,"$failedVisitCounts",L);let b=O(u,"chord",8),x=O(u,"showArtist",8,!1),w=F();ot.subscribe(s=>{if(s&&s.has(b().url)){const h=s.get(b().url),o=new Date(h.lastAccessDateUnix*1e3);$(w,`visits: ${h.count} - last: ${o.toLocaleDateString()}`)}});const i=(x()?b().artist+" - ":"")+b().title,a=s=>s.type==="doc"?`${Xt}/docviewer/${s.url}`:s.url,e=async()=>{try{await wt(b().url);const s=Ft(ot),h=s.get(b().url)||{count:0,lastAccessDateUnix:0};h.count++,h.lastAccessDateUnix=Date.now()/1e3,s.set(b().url,h),ot.set(s)}catch(s){let h=s.message;s instanceof Zt&&s.code===401?h="Invalid logged in user":s instanceof jt&&(h="User is logged out"),At(it,[...k(),b().url]);const o=`<strong>Visit not counted</strong><br/> ${h}`;Yt.push(o,{initial:1,duration:5e3,theme:{"--toastBarBackground":"#FF0000"}})}};tt();var c=le(),p=I(c);const l=at(()=>xt($t(b().type)));var g=m(p,2),r=d(g);U(()=>st(r,"href",a(b()))),r.textContent=i,n(g),U(()=>{Dt(p,t(l),"svelte-1yqqigs"),st(r,"title",t(w))}),Q("click",r,e),_(C,c),W(),f()}var ie=T('<li class="ul2col-item"><!> <!></li>'),ce=T('<ul class="ul2col-container"></ul>');function ue(C,u){G(u,!1);let L=O(u,"searchString",8),f=O(u,"chords",12),k=O(u,"filters",8),b=F();ot.subscribe(a=>{a&&($(b,a),f(f().sort((e,c)=>{const p=a.get(e.url),l=a.get(c.url);return p&&l?l.lastAccessDateUnix-p.lastAccessDateUnix:p?-1:l?1:e.artist!=c.artist?e.artist.toLowerCase()<c.artist.toLowerCase()?-1:1:e.title.toLowerCase()<c.title.toLowerCase()?-1:1})))});const x=(a,e,c)=>c[a.type]===!1?!1:e.length===0||a.artist.toLowerCase().match(e.toLowerCase())?!0:a.title.toLowerCase().match(e.toLowerCase());tt();var w=Y(),i=I(w);ht(i,f,a=>{var e=ce();j(e,5,f,P,(c,p)=>{var l=Y();const g=at(()=>t(b).get(t(p).url));var r=I(l);{var s=h=>{var o=ie(),v=d(o);{var y=D=>{var A=Lt();U(()=>M(A,`(${t(g).count??""})`)),_(D,A)};K(v,D=>{t(g)&&D(y)})}var S=m(v,2);nt(S,{get chord(){return t(p)},showArtist:!0}),n(o),_(h,o)};K(r,h=>{x(t(p),L(),k())&&h(s)})}_(c,l)}),n(e),_(a,e)}),_(C,w),W()}const ve=(C,u)=>C<u?-1:C>u?1:0,qt=(C,u)=>{const L=C.toLowerCase(),f=u.toLowerCase();return ve(L,f)};var de=T('<li class="navigationBtn svelte-1deg5s8"><a class="navigationLink svelte-1deg5s8"> </a></li>'),fe=T('<li class="ul2col-item"><!></li>'),pe=T('<ul class="ul2col-container"></ul>'),ge=T('<tr class="svelte-1deg5s8"><td class="svelte-1deg5s8"> <!></td></tr>'),he=T('<ol id="indexList" class="navigationBar disable-scrollbars svelte-1deg5s8"></ol> <table id="artistTable"><tbody></tbody></table>',1);function me(C,u){G(u,!1);let L=O(u,"searchString",8,""),f=O(u,"chords",8),k=O(u,"filters",8);const b=f().reduce((o,v)=>{const y=v.artist;return o[y]||(o[y]=[]),o[y].push(v),o},{}),x=[],w=Object.keys(b).sort(qt).map((o,v,y)=>{if(v===0||o[0].toLowerCase()!=y[v-1][0].toLowerCase()){const S="anchor_letter_"+o[0];return x.push({letter:o[0],tag:S}),{name:o,tag:S}}return{name:o}});let i=F(),a=F(0),e=F();const c=o=>{if(t(e)){var v=t(e).getBoundingClientRect();if(v.top<20){$(a,20);return}$(a,v.top)}},p=(o,v,y)=>b[o].sort((D,A)=>D.title<A.title?-1:1).filter(D=>{const A=D.type;return y[A]===!1?!1:v.length===0?!0:!!D.title.toLowerCase().match(v.toLowerCase())}),l=(o,v)=>!!o.toLowerCase().match(v.toLowerCase());Et(()=>t(i),()=>{c(t(i))}),Rt(),tt();var g=he(),r=I(g);j(r,5,()=>x,P,(o,v)=>{var y=de(),S=d(y),D=d(S,!0);U(()=>M(D,t(v).letter.toUpperCase())),n(S),n(y),U(()=>st(S,"href","#"+t(v).tag)),_(o,y)}),n(r);var s=m(r,2),h=d(s);j(h,5,()=>w,P,(o,v)=>{var y=Y();const S=at(()=>p(t(v).name,L(),k())),D=at(()=>l(t(v).name,L()));var A=I(y);{var z=E=>{var J=ge();const Z=at(()=>t(D)?b[t(v).name]:t(S));var X=d(J),et=d(X),R=m(et);ht(R,L,rt=>{var H=pe();j(H,5,()=>t(Z),P,(lt,V)=>{var B=fe(),q=d(B);nt(q,{get chord(){return t(V)}}),n(B),_(lt,B)}),n(H),_(rt,H)}),n(X),n(J),U(()=>{st(X,"id",t(v).tag),M(et,`${t(v).name??""} `)}),_(E,J)};K(A,E=>{(t(D)||t(S).length>0)&&E(z)})}_(o,y)}),n(h),n(s),te(s,o=>$(e,o),()=>t(e)),U(()=>ft(r,"--barTop",`${t(a)??""}px`)),Bt("y",()=>t(i),o=>$(i,o)),_(C,g),W()}var _e=T('<li class="ul2col-item"><!></li>'),be=T('<div><span> </span> <ul class="ul2col-container"></ul></div>');function ke(C,u){G(u,!1);let L=O(u,"searchString",8),f=O(u,"chords",8),k=O(u,"filters",8);const b=a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase(),x=F({});for(const a of f())a.tags.forEach(c=>{t(x)[c]||dt(x,t(x)[c]=[]),t(x)[c].push(a)});Object.keys(t(x)).forEach(a=>{t(x)[a].sort((e,c)=>{const p=e.artist.toLowerCase(),l=c.artist.toLowerCase(),g=e.title.toLowerCase(),r=c.title.toLowerCase();return p<l?-1:p>l?1:g<r?-1:1})}),tt();var w=Y(),i=I(w);j(i,1,()=>Object.keys(t(x)).sort(qt),P,(a,e)=>{var c=Y(),p=I(c);{var l=g=>{var r=be(),s=d(r),h=d(s,!0);U(()=>M(h,b(t(e)))),n(s);var o=m(s,2);j(o,5,()=>t(x)[t(e)],P,(v,y)=>{var S=Y(),D=I(S);{var A=z=>{var E=_e(),J=d(E);nt(J,{get chord(){return t(y)},showArtist:!0}),n(E),_(z,E)};K(D,z=>{k()[t(y).type]&&z(A)})}_(v,S)}),n(o),n(r),_(g,r)};K(p,g=>{(L().length===0||t(e).toLowerCase().match(L().toLowerCase()))&&g(l)})}_(a,c)}),_(C,w),W()}var we=T('<li class="ul2col-item"><!> <!></li>'),Ce=T('<ul class="ul2col-container"></ul>');function ye(C,u){G(u,!1);let L=O(u,"searchString",8),f=O(u,"chords",12),k=O(u,"filters",8),b=F();ot.subscribe(a=>{a&&($(b,a),f(f().sort((e,c)=>{const p=a.get(e.url),l=a.get(c.url);return p&&l?p.count!==l.count?l.count-p.count:l.lastAccessDateUnix-p.lastAccessDateUnix:p?-1:l?1:e.artist!=c.artist?e.artist.toLowerCase()<c.artist.toLowerCase()?-1:1:e.title.toLowerCase()<c.title.toLowerCase()?-1:1})))});const x=(a,e,c)=>c[a.type]===!1?!1:e.length===0||a.artist.toLowerCase().match(e.toLowerCase())?!0:a.title.toLowerCase().match(e.toLowerCase());tt();var w=Y(),i=I(w);ht(i,f,a=>{var e=Ce();j(e,5,f,P,(c,p)=>{var l=Y();const g=at(()=>t(b).get(t(p).url));var r=I(l);{var s=h=>{var o=we(),v=d(o);{var y=D=>{var A=Lt();U(()=>M(A,`(${t(g).count??""})`)),_(D,A)};K(v,D=>{t(g)&&D(y)})}var S=m(v,2);nt(S,{get chord(){return t(p)},showArtist:!0}),n(o),_(h,o)};K(r,h=>{x(t(p),L(),k())&&h(s)})}_(c,l)}),n(e),_(a,e)}),_(C,w),W()}var Le=T('<span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"><a target="_blank" rel="noopener noreferrer"> </a></span> <span class="col svelte-5k8p3l"> </span>',1),xe=T('<div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Last Check</span> <span class="col table-head svelte-5k8p3l">Checks</span> <span class="col table-head svelte-5k8p3l">Skipped</span> <span class="col table-head svelte-5k8p3l">Errors</span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span></div> <br> <div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Status</span> <span class="col table-head svelte-5k8p3l">Ref</span> <span class="col table-head svelte-5k8p3l">Host</span> <span class="col table-head svelte-5k8p3l">Data</span> <!></div>',1),Se=T('<p style="color: red"> </p>'),De=T("<p>Fetching results...</p>"),Te=T('<div role="dialog" class="modal svelte-5k8p3l"><div class="contents svelte-5k8p3l"><h3 class="title-bar svelte-5k8p3l">Urls checks <button>Close</button></h3> <!></div></div>');function Ae(C,u){G(u,!0);const L=w=>{const i=new Date(w.timestamp);return i.toDateString()+" "+i.toTimeString()},f=w=>w.fails.sort((i,a)=>i.chord.url<a.chord.url?-1:1);var k=Y(),b=I(k);{var x=w=>{var i=Te(),a=d(i),e=d(a),c=m(d(e));c.__click=function(...l){var g;(g=u.close)==null||g.apply(this,l)},n(e);var p=m(e,2);ee(p,Mt,l=>{var g=De();_(l,g)},(l,g)=>{var r=xe();const s=_t(()=>L(t(g))),h=_t(()=>f(t(g)));var o=I(r),v=m(d(o),8),y=d(v,!0);n(v);var S=m(v,2),D=d(S,!0);n(S);var A=m(S,2),z=d(A,!0);n(A);var E=m(A,2),J=d(E,!0);n(E),n(o);var Z=m(o,4),X=m(d(Z),8);j(X,17,()=>t(h),P,(et,R)=>{var rt=Le(),H=I(rt),lt=d(H,!0);n(H);var V=m(H,2),B=d(V);n(V);var q=m(V,2),N=d(q),ut=d(N,!0);n(N),n(q);var ct=m(q,2),vt=d(ct,!0);U(()=>M(vt,t(R).error?JSON.stringify(t(R).error):"")),n(ct),U(()=>{M(lt,t(R).status),M(B,`${t(R).chord.artist??""} - ${t(R).chord.title??""}`),st(N,"href",t(R).chord.url),M(ut,new URL(t(R).chord.url).hostname)}),_(et,rt)}),n(Z),U(()=>{M(y,t(s)),M(D,t(g).nbChecks),M(z,t(g).nbSkipped),M(J,t(g).nbFails)}),_(l,r)},(l,g)=>{var r=Se(),s=d(r);n(r),U(()=>M(s,`Could not retrieve checks: ${t(g).message??""}`)),_(l,r)}),n(a),n(i),_(w,i)};K(b,w=>{u.isOpen&&w(x)})}_(C,k),W()}yt(["click"]);var Be=T('<li class="ul2col-separator"> </li>'),Ve=T('<!> <li class="ul2col-item"><!></li>',1),$e=T('<div><h3>Latest additions <button class="pull-right">More...</button></h3> <ul class="ul2col-container"></ul></div>');function qe(C,u){G(u,!1);let L=O(u,"chords",8);const f=Date.now(),k=1e3*3600*24*7,b=k*4,x=[{label:"last week",time:f-k},{label:"one month ago",time:f-b},{label:"two monthes ago",time:f-2*b},{label:"six monthes ago",time:f-6*b},{label:"one year ago",time:f-12*b}],w=L().filter(r=>r.creationDate).sort((r,s)=>s.creationDate-r.creationDate).map((r,s,h)=>{const o={...r};if(s>0){const v=h[s-1];for(const{time:y,label:S}of x)v.creationDate>y&&r.creationDate<y&&(o.dateTag=S)}return o});let i=6,a=F([]);const e=()=>{i+=4,$(a,w.slice(0,i))};gt(()=>{e()}),tt();var c=$e(),p=d(c),l=m(d(p));n(p);var g=m(p,2);j(g,5,()=>t(a),P,(r,s)=>{var h=Ve(),o=I(h);{var v=D=>{var A=Be(),z=d(A,!0);n(A),U(()=>M(z,t(s).dateTag)),_(D,A)};K(o,D=>{t(s).dateTag&&D(v)})}var y=m(o,2),S=d(y);nt(S,{get chord(){return t(s)}}),n(y),_(r,h)}),n(g),n(c),Q("click",l,()=>e()),_(C,c),W()}var Ue=T("<button>&nbsp↶&nbsp</button>"),Me=T('<li class="ul2col-item"><!></li>'),Oe=T('<div><h3>Random song <span class="pull-right"><!> <button>Get more random songs</button></span></h3> <br> <ul class="ul2col-container"></ul></div>');function Ie(C,u){G(u,!1);let L=O(u,"chords",8);const f=6;let k=F([]),b=F([]);const x=()=>{t(k).length>=L().length-f&&$(k,[]);for(let r=0;r<f;r++){let s=-1;for(;s===-1||t(k).includes(s);)s=Math.floor(Math.random()*L().length);t(k).push(s)}$(b,t(k).slice(t(k).length-f).map(r=>L()[r]))},w=()=>{t(k).length<=f||(t(k).splice(t(k).length-f),$(b,t(k).slice(t(k).length-f).map(r=>L()[r])))};gt(()=>{x()}),tt();var i=Oe(),a=d(i),e=m(d(a)),c=d(e);{var p=r=>{var s=Ue();Q("click",s,w),_(r,s)};K(c,r=>{t(k).length>f&&r(p)})}var l=m(c,2);n(e),n(a);var g=m(a,4);j(g,5,()=>t(b),r=>r.url,(r,s)=>{var h=Me(),o=d(h);nt(o,{get chord(){return t(s)},showArtist:!0}),n(h),_(r,h)}),n(g),n(i),Q("click",l,x),_(C,i),W()}var Fe=T('<button class="filter-control svelte-1gfqv35"><input type="checkbox"> <span></span></button>'),Ee=T('<button class="control svelte-1gfqv35"> </button>'),Re=T('<!> <h2><span class="pull-right"><button>Check dead links</button> <button>Edit</button></span></h2> <!> <!> <p> </p> <!> <!> <div><h3>All songs</h3> Search an artist, a title or a tag:<input type="text"> <button aria-label="delete search"><i class="fas fa-times-circle"></i></button> <div class="filter-controls-container svelte-1gfqv35"><h4>Filters</h4> <!></div> <h4>View</h4> <div class="view-controls-container svelte-1gfqv35"></div></div> <!>',1);function pa(C,u){G(u,!1);const[L,f]=Tt(),k=()=>pt(it,"$failedVisitCounts",L),b=()=>pt(Pt,"$user",L);ae.set("Songbook");let x=O(u,"data",8);const{chords:w}=x();let i=F([]);const a=V=>{t(i).push(V),$(i,t(i)),setTimeout(()=>{t(i).shift(),$(i,t(i))},5e3)};gt(async()=>{try{if(k().length&&b()){a({level:"info",header:"Trying to count missed visits while logged out"});for(const V of k())await wt(V);a({level:"success",header:`Counted ${k().length} missed visits`}),At(it,[])}}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}try{const B=(await Ot()).reduce((q,N)=>(q.set(N.url,{...N}),q),new Map);ot.set(B)}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}});let e=F("");const c=[{label:"By artist",component:me},{label:"By tags",component:ke},{label:"By frequency",component:ye},{label:"By access date",component:ue}];let p=F(c[0]),l=F({pdf:!0,doc:!0,youtube:!0,link:!0});const g=Object.keys(t(l));tt();var r=Re(),s=I(r);Gt(s,{title:"Song Book",description:"My song book",iconPath:"/songbook.png"});var h=m(s,2),o=d(h),v=d(o);ft(v,"position","relative");var y=m(v,2);ft(y,"position","relative"),n(o),n(h);var S=m(h,2);j(S,1,()=>t(i),P,(V,B)=>{Wt(V,{get item(){return t(B)}})});var D=m(S,2);ne(D,{});var A=m(D,2),z=d(A);n(A);var E=m(A,2);qe(E,{chords:w});var J=m(E,2);Ie(J,{chords:w});var Z=m(J,2),X=m(d(Z),2);bt(X);var et=m(X,2),R=m(et,2),rt=m(d(R),2);j(rt,1,()=>g,P,(V,B)=>{var q=Fe(),N=d(q);bt(N);var ut=m(N,2);const ct=at(()=>xt($t(t(B))));n(q),U(()=>{st(q,"aria-label",`filter for ${t(B)??""}`),st(N,"id",t(B)),Dt(ut,t(ct),"svelte-1gfqv35")}),Jt(N,()=>t(l)[t(B)],vt=>dt(l,t(l)[t(B)]=vt)),Q("click",q,()=>{dt(l,t(l)[t(B)]=!t(l)[t(B)]),$(l,t(l))}),_(V,q)}),n(R);var H=m(R,4);j(H,5,()=>c,P,(V,B)=>{var q=Ee(),N=d(q,!0);n(q),U(()=>{St(q,"selected",t(p)===t(B)),M(N,t(B).label)}),Q("click",q,()=>$(p,t(B))),_(V,q)}),n(H),n(Z);var lt=m(Z,2);Nt(lt,()=>t(p).component,(V,B)=>{B(V,{chords:w,get searchString(){return t(e)},get filters(){return t(l)}})}),U(()=>M(z,`This is a list of ${w.length??""} song chords I have been gathering since I started teaching myself
    the guitar as a teen and that I like to play.`)),Q("click",v,()=>Kt.open(Ae)),Q("click",y,()=>Qt("/songbook/edit")),zt(X,()=>t(e),V=>$(e,V)),Q("click",et,()=>$(e,"")),_(C,r),W(),f()}export{pa as component,fa as universal};
