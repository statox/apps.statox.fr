import{g as qt,u as _t,a as Ut,b as Ft}from"../chunks/api.DsS5EHvI.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as P,aN as pt,k as E,n as z,g as t,s as B,aH as O,aY as bt,v as N,w as p,aF as f,aG as l,aE as Mt,aa as tt,o as ft}from"../chunks/index-client.CwKaIs20.js";import{s as U}from"../chunks/render.Bco1UJTE.js";import{e as R,i as H}from"../chunks/each.DKzLuYBh.js";import{m as nt,a as b,t as S,e as K,q as kt}from"../chunks/template.O5anSWHx.js";import{c as Ot}from"../chunks/svelte-component.Lb4uJKsz.js";import{c as wt,s as et,r as gt}from"../chunks/attributes.CgIpNMpF.js";import{t as Ct,s as yt,U as Et,u as Nt}from"../chunks/service.DfqO7itf.js";import{s as vt}from"../chunks/style.PwPRnE0L.js";import{b as jt,d as It}from"../chunks/input.DZqTlelX.js";import{p as A}from"../chunks/proxy.CJQ3oePJ.js";import{b as Lt,s as xt,a as dt}from"../chunks/store.ChaSGJXD.js";import{m as Rt}from"../chunks/Modals.BuE7KsA1.js";import{a as St}from"../chunks/window.Be2DaxDh.js";import{M as Ht}from"../chunks/Main.B0GEDrL8.js";import{M as Jt}from"../chunks/Main.Dpmq5TCD.js";import{i as J}from"../chunks/if.Bi_20hhT.js";import{k as ht}from"../chunks/key.CNTj4QLE.js";import{p as ct}from"../chunks/props.C12I74pf.js";import{b as Pt,g as zt}from"../chunks/entry.BiASiQbx.js";import{t as Gt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.DH8F2aYh.js";import{A as Kt}from"../chunks/index.DUirx4T5.js";import{b as Wt}from"../chunks/this.DgQKryrc.js";import{a as Yt}from"../chunks/await.BSmIMP7F.js";import"../chunks/legacy.C6Jsm68G.js";import{p as Qt}from"../chunks/Main.svelte_svelte_type_style_lang.BnIEJSv1.js";const Xt=!1,Zt=async()=>({chords:await qt()}),ma=Object.freeze(Object.defineProperty({__proto__:null,load:Zt,ssr:Xt},Symbol.toStringTag,{value:"Module"}));var $t=S('<button class="top-link svelte-1kbb9q3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="svelte-1kbb9q3"><path d="M12 6H0l6-6z"></path></svg> <span class="screen-reader-text svelte-1kbb9q3">Back to top</span></button>');function te(m,e){P(e,!0);let o=O(0),s=O(!0),h;const D=a=>{a>0?B(s,!1):B(s,!0),h&&clearTimeout(h),h=setTimeout(()=>{B(s,!0)},3e3)},k=()=>{const a=document.documentElement.scrollTop||document.body.scrollTop;a>0&&(window.requestAnimationFrame(k),window.scrollTo(0,a-a/2))};pt(()=>D(t(o)));var r=$t();r.__click=k,E(()=>Ct(r,"hide",t(s))),St("y",()=>t(o),a=>B(o,A(a))),b(m,r),z()}nt(["click"]);const ot=bt();let Dt=[];const mt=localStorage.getItem("failedVisitCounts");if(mt!==null)try{Dt=JSON.parse(mt)}catch{console.error("Couldnt parse failedVisitCounts from local storage")}const it=bt(Dt);it.subscribe(m=>{localStorage.setItem("failedVisitCounts",JSON.stringify(m))});const Tt=m=>m==="doc"?"fas fa-file-word":m==="pdf"?"fas fa-file-pdf":m==="youtube"?"fa fa-youtube":"fas fa-link",ee=async(m,e,o)=>{try{await _t(e.chord.url);const s=Mt(ot),h=s.get(e.chord.url)||{count:0,lastAccessDateUnix:0};h.count++,h.lastAccessDateUnix=Date.now()/1e3,s.set(e.chord.url,h),ot.set(s)}catch(s){let h=s.message;s instanceof Kt&&s.code===401?h="Invalid logged in user":s instanceof Et&&(h="User is logged out"),Lt(it,A([...o(),e.chord.url]));const D=`<strong>Visit not counted</strong><br/> ${h}`;Gt.push(D,{initial:1,duration:5e3,theme:{"--toastBarBackground":"#FF0000"}})}};var ae=S('<span></span> <span><a target="_blank" rel="noopener noreferrer"></a></span>',1);function lt(m,e){P(e,!0);const[o,s]=xt(),h=()=>dt(it,"$failedVisitCounts",o);let D=ct(e,"showArtist",3,!1),k=O(void 0);ot.subscribe(n=>{if(n&&n.has(e.chord.url)){const c=n.get(e.chord.url),u=new Date(c.lastAccessDateUnix*1e3);B(k,`visits: ${c.count} - last: ${u.toLocaleDateString()}`)}});const r=(D()?e.chord.artist+" - ":"")+e.chord.title,a=n=>n.type==="doc"?`${Pt}/docviewer/${n.url}`:n.url;var v=ae(),g=N(v),_=p(g,2),y=f(_);y.__click=[ee,e,h],y.textContent=r,l(_),E((n,c)=>{yt(g,wt(n),"svelte-1yqqigs"),et(y,"href",c),et(y,"title",t(k))},[()=>Tt(e.chord.type),()=>a(e.chord)]),b(m,v),z(),s()}nt(["click"]);var re=S('<li class="ul2col-item"><!> <!></li>'),se=S('<ul class="ul2col-container"></ul>');function oe(m,e){P(e,!0);let o=ct(e,"chords",15),s=O(void 0);ot.subscribe(r=>{r&&(B(s,A(r)),o(o().sort((a,v)=>{const g=r.get(a.url),_=r.get(v.url);return g&&_?_.lastAccessDateUnix-g.lastAccessDateUnix:g?-1:_?1:a.artist!=v.artist?a.artist.toLowerCase()<v.artist.toLowerCase()?-1:1:a.title.toLowerCase()<v.title.toLowerCase()?-1:1})))});const h=(r,a,v)=>v[r.type]===!1?!1:a.length===0||r.artist.toLowerCase().match(a.toLowerCase())?!0:r.title.toLowerCase().match(a.toLowerCase());var D=K(),k=N(D);ht(k,o,r=>{var a=se();R(a,21,o,H,(v,g)=>{var _=K();const y=tt(()=>{var u;return(u=t(s))==null?void 0:u.get(t(g).url)});var n=N(_);{var c=u=>{var i=re(),d=f(i);{var w=L=>{var x=kt();E(()=>U(x,`(${t(y).count??""})`)),b(L,x)};J(d,L=>{t(y)&&L(w)})}var C=p(d,2);lt(C,{get chord(){return t(g)},showArtist:!0}),l(i),b(u,i)};J(n,u=>{h(t(g),e.searchString,e.filters)&&u(c)})}b(v,_)}),l(a),b(r,a)}),b(m,D),z()}const ne=(m,e)=>m<e?-1:m>e?1:0,At=(m,e)=>{const o=m.toLowerCase(),s=e.toLowerCase();return ne(o,s)};var le=S('<li class="navigationBtn svelte-1deg5s8"><a class="navigationLink svelte-1deg5s8"> </a></li>'),ie=S('<li class="ul2col-item"><!></li>'),ce=S('<ul class="ul2col-container"></ul>'),ue=S('<tr class="svelte-1deg5s8"><td class="svelte-1deg5s8"> <!></td></tr>'),ve=S('<ol id="indexList" class="navigationBar disable-scrollbars svelte-1deg5s8"></ol> <table id="artistTable"><tbody></tbody></table>',1);function de(m,e){P(e,!0);let o=ct(e,"searchString",3,"");const s=e.chords.reduce((i,d)=>{const w=d.artist;return i[w]||(i[w]=[]),i[w].push(d),i},{}),h=[],D=Object.keys(s).sort(At).map((i,d,w)=>{if(d===0||i[0].toLowerCase()!=w[d-1][0].toLowerCase()){const C="anchor_letter_"+i[0];return h.push({letter:i[0],tag:C}),{name:i,tag:C}}return{name:i}});let k=O(0),r=O(0),a=O(void 0);const v=i=>{if(t(a)){var d=t(a).getBoundingClientRect();if(d.top<20){B(r,20);return}B(r,A(d.top))}};pt(()=>v(t(k)));const g=(i,d,w)=>s[i].sort((L,x)=>L.title<x.title?-1:1).filter(L=>{const x=L.type;return w[x]===!1?!1:d.length===0?!0:!!L.title.toLowerCase().match(d.toLowerCase())}),_=(i,d)=>!!i.toLowerCase().match(d.toLowerCase());var y=ve(),n=N(y);R(n,21,()=>h,H,(i,d)=>{var w=le(),C=f(w),L=f(C,!0);l(C),l(w),E(x=>{et(C,"href","#"+t(d).tag),U(L,x)},[()=>t(d).letter.toUpperCase()]),b(i,w)}),l(n);var c=p(n,2),u=f(c);R(u,21,()=>D,H,(i,d)=>{var w=K();const C=tt(()=>g(t(d).name,o(),e.filters)),L=tt(()=>_(t(d).name,o()));var x=N(w);{var j=F=>{var Q=ue();const X=tt(()=>t(L)?s[t(d).name]:t(C));var W=f(Q),G=f(W),Z=p(G);ht(Z,o,at=>{var M=ce();R(M,21,()=>t(X),H,(rt,Y)=>{var $=ie(),T=f($);lt(T,{get chord(){return t(Y)}}),l($),b(rt,$)}),l(M),b(at,M)}),l(W),l(Q),E(()=>{et(W,"id",t(d).tag),U(G,`${t(d).name??""} `)}),b(F,Q)};J(x,F=>{(t(L)||t(C).length>0)&&F(j)})}b(i,w)}),l(u),l(c),Wt(c,i=>B(a,i),()=>t(a)),E(()=>vt(n,"--barTop",`${t(r)??""}px`)),St("y",()=>t(k),i=>B(k,A(i))),b(m,y),z()}var fe=S('<li class="ul2col-item"><!></li>'),he=S('<div><span> </span> <ul class="ul2col-container"></ul></div>');function ge(m,e){P(e,!0);const o=k=>k.charAt(0).toUpperCase()+k.slice(1).toLowerCase(),s=A({});for(const k of e.chords)k.tags.forEach(a=>{s[a]||(s[a]=[]),s[a].push(k)});Object.keys(s).forEach(k=>{s[k].sort((r,a)=>{const v=r.artist.toLowerCase(),g=a.artist.toLowerCase(),_=r.title.toLowerCase(),y=a.title.toLowerCase();return v<g?-1:v>g?1:_<y?-1:1})});var h=K(),D=N(h);R(D,17,()=>Object.keys(s).sort(At),H,(k,r)=>{var a=K(),v=N(a);{var g=_=>{var y=he(),n=f(y),c=f(n,!0);l(n);var u=p(n,2);R(u,21,()=>s[t(r)],H,(i,d)=>{var w=K(),C=N(w);{var L=x=>{var j=fe(),F=f(j);lt(F,{get chord(){return t(d)},showArtist:!0}),l(j),b(x,j)};J(C,x=>{e.filters[t(d).type]&&x(L)})}b(i,w)}),l(u),l(y),E(i=>U(c,i),[()=>o(t(r))]),b(_,y)};J(v,_=>{(e.searchString.length===0||t(r).toLowerCase().match(e.searchString.toLowerCase()))&&_(g)})}b(k,a)}),b(m,h),z()}var me=S('<li class="ul2col-item"><!> <!></li>'),_e=S('<ul class="ul2col-container"></ul>');function pe(m,e){P(e,!0);let o=ct(e,"chords",15),s=O(void 0);ot.subscribe(r=>{r&&(B(s,A(r)),o(o().sort((a,v)=>{const g=r.get(a.url),_=r.get(v.url);return g&&_?g.count!==_.count?_.count-g.count:_.lastAccessDateUnix-g.lastAccessDateUnix:g?-1:_?1:a.artist!=v.artist?a.artist.toLowerCase()<v.artist.toLowerCase()?-1:1:a.title.toLowerCase()<v.title.toLowerCase()?-1:1})))});const h=(r,a,v)=>v[r.type]===!1?!1:a.length===0||r.artist.toLowerCase().match(a.toLowerCase())?!0:r.title.toLowerCase().match(a.toLowerCase());var D=K(),k=N(D);ht(k,o,r=>{var a=_e();R(a,21,o,H,(v,g)=>{var _=K();const y=tt(()=>{var u;return(u=t(s))==null?void 0:u.get(t(g).url)});var n=N(_);{var c=u=>{var i=me(),d=f(i);{var w=L=>{var x=kt();E(()=>U(x,`(${t(y).count??""})`)),b(L,x)};J(d,L=>{t(y)&&L(w)})}var C=p(d,2);lt(C,{get chord(){return t(g)},showArtist:!0}),l(i),b(u,i)};J(n,u=>{h(t(g),e.searchString,e.filters)&&u(c)})}b(v,_)}),l(a),b(r,a)}),b(m,D),z()}var be=S('<span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"><a target="_blank" rel="noopener noreferrer"> </a></span> <span class="col svelte-5k8p3l"> </span>',1),ke=S('<div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Last Check</span> <span class="col table-head svelte-5k8p3l">Checks</span> <span class="col table-head svelte-5k8p3l">Skipped</span> <span class="col table-head svelte-5k8p3l">Errors</span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span></div> <br> <div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Status</span> <span class="col table-head svelte-5k8p3l">Ref</span> <span class="col table-head svelte-5k8p3l">Host</span> <span class="col table-head svelte-5k8p3l">Data</span> <!></div>',1),we=S('<p style="color: red"> </p>'),Ce=S("<p>Fetching results...</p>"),ye=S('<div role="dialog" class="modal svelte-5k8p3l"><div class="contents svelte-5k8p3l"><h3 class="title-bar svelte-5k8p3l">Urls checks <button>Close</button></h3> <!></div></div>');function Le(m,e){P(e,!0);const o=r=>{const a=new Date(r.timestamp);return a.toDateString()+" "+a.toTimeString()},s=r=>r.fails.sort((a,v)=>a.chord.url<v.chord.url?-1:1);var h=K(),D=N(h);{var k=r=>{var a=ye(),v=f(a),g=f(v),_=p(f(g));_.__click=function(...n){var c;(c=e.close)==null||c.apply(this,n)},l(g);var y=p(g,2);Yt(y,Ut,n=>{var c=Ce();b(n,c)},(n,c)=>{var u=ke();const i=tt(()=>o(t(c))),d=tt(()=>s(t(c)));var w=N(u),C=p(f(w),8),L=f(C,!0);l(C);var x=p(C,2),j=f(x,!0);l(x);var F=p(x,2),Q=f(F,!0);l(F);var X=p(F,2),W=f(X,!0);l(X),l(w);var G=p(w,4),Z=p(f(G),8);R(Z,17,()=>t(d),H,(at,M)=>{var rt=be(),Y=N(rt),$=f(Y,!0);l(Y);var T=p(Y,2),V=f(T);l(T);var q=p(T,2),I=f(q),ut=f(I,!0);l(I),l(q);var st=p(q,2),Bt=f(st,!0);l(st),E(Vt=>{U($,t(M).status),U(V,`${t(M).chord.artist??""} - ${t(M).chord.title??""}`),et(I,"href",t(M).chord.url),U(ut,new URL(t(M).chord.url).hostname),U(Bt,Vt)},[()=>t(M).error?JSON.stringify(t(M).error):""]),b(at,rt)}),l(G),E(()=>{U(L,t(i)),U(j,t(c).nbChecks),U(Q,t(c).nbSkipped),U(W,t(c).nbFails)}),b(n,u)},(n,c)=>{var u=we(),i=f(u);l(u),E(()=>U(i,`Could not retrieve checks: ${t(c).message??""}`)),b(n,u)}),l(v),l(a),b(r,a)};J(D,r=>{e.isOpen&&r(k)})}b(m,h),z()}nt(["click"]);var xe=(m,e)=>e(),Se=S('<li class="ul2col-separator"> </li>'),De=S('<!> <li class="ul2col-item"><!></li>',1),Te=S('<div><h3>Latest additions <button class="pull-right">More...</button></h3> <ul class="ul2col-container"></ul></div>');function Ae(m,e){P(e,!0);const o=Date.now(),s=1e3*3600*24*7,h=s*4,D=[{label:"last week",time:o-s},{label:"one month ago",time:o-h},{label:"two months ago",time:o-2*h},{label:"six months ago",time:o-6*h},{label:"one year ago",time:o-12*h}],k=e.chords.filter(c=>c.creationDate).sort((c,u)=>u.creationDate-c.creationDate).map((c,u,i)=>{const d={...c};if(u>0){const w=i[u-1];for(const{time:C,label:L}of D)w.creationDate>C&&c.creationDate<C&&(d.dateTag=L)}return d});let r=6,a=O(A([]));const v=()=>{r+=4,B(a,A(k.slice(0,r)))};ft(()=>{v()});var g=Te(),_=f(g),y=p(f(_));y.__click=[xe,v],l(_);var n=p(_,2);R(n,21,()=>t(a),H,(c,u)=>{var i=De(),d=N(i);{var w=x=>{var j=Se(),F=f(j,!0);l(j),E(()=>U(F,t(u).dateTag)),b(x,j)};J(d,x=>{t(u).dateTag&&x(w)})}var C=p(d,2),L=f(C);lt(L,{get chord(){return t(u)}}),l(C),b(c,i)}),l(n),l(g),b(m,g),z()}nt(["click"]);const Be=(m,e,o,s,h)=>{t(e).length<=o||(t(e).splice(t(e).length-o),B(s,A(t(e).slice(t(e).length-o).map(D=>h.chords[D]))))};var Ve=S("<button>&nbsp↶&nbsp</button>"),qe=S('<li class="ul2col-item"><!></li>'),Ue=S('<div><h3>Random song <span class="pull-right"><!> <button>Get more random songs</button></span></h3> <br> <ul class="ul2col-container"></ul></div>');function Fe(m,e){P(e,!0);const o=6;let s=O(A([])),h=O(A([]));const D=()=>{t(s).length>=e.chords.length-o&&B(s,A([]));for(let n=0;n<o;n++){let c=-1;for(;c===-1||t(s).includes(c);)c=Math.floor(Math.random()*e.chords.length);t(s).push(c)}B(h,A(t(s).slice(t(s).length-o).map(n=>e.chords[n])))};ft(()=>{D()});var k=Ue(),r=f(k),a=p(f(r)),v=f(a);{var g=n=>{var c=Ve();c.__click=[Be,s,o,h,e],b(n,c)};J(v,n=>{t(s).length>o&&n(g)})}var _=p(v,2);_.__click=D,l(a),l(r);var y=p(r,4);R(y,21,()=>t(h),n=>n.url,(n,c)=>{var u=qe(),i=f(u);lt(i,{get chord(){return t(c)},showArtist:!0}),l(u),b(n,u)}),l(y),l(k),b(m,k),z()}nt(["click"]);var Me=()=>Rt.open(Le),Oe=()=>zt("/songbook/edit"),Ee=(m,e)=>B(e,""),Ne=(m,e,o)=>{t(e)[t(o)]=!t(e)[t(o)],B(e,A(t(e)))},je=S('<button class="filter-control svelte-1gfqv35"><input type="checkbox"> <span></span></button>'),Ie=(m,e,o)=>B(e,A(t(o))),Re=S('<button class="control svelte-1gfqv35"> </button>'),He=S('<!> <h2><span class="pull-right"><button>Check dead links</button> <button>Edit</button></span></h2> <!> <!> <p> </p> <!> <!> <div><h3>All songs</h3> Search an artist, a title or a tag:<input type="text"> <button aria-label="delete search"><i class="fas fa-times-circle"></i></button> <div class="filter-controls-container svelte-1gfqv35"><h4>Filters</h4> <!></div> <h4>View</h4> <div class="view-controls-container svelte-1gfqv35"></div></div> <!>',1);function _a(m,e){P(e,!0);const[o,s]=xt(),h=()=>dt(it,"$failedVisitCounts",o),D=()=>dt(Nt,"$user",o);Qt.set("Songbook");const{chords:k}=e.data;let r=O(A([]));const a=T=>{t(r).push(T),B(r,A(t(r))),setTimeout(()=>{t(r).shift(),B(r,A(t(r)))},5e3)};ft(async()=>{try{if(h().length&&D()){a({level:"info",header:"Trying to count missed visits while logged out"});for(const T of h())await _t(T);a({level:"success",header:`Counted ${h().length} missed visits`}),Lt(it,A([]))}}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}try{const V=(await Ft()).reduce((q,I)=>(q.set(I.url,{...I}),q),new Map);ot.set(V)}catch{a({level:"error",header:"Couldnt upload failed visit counts"})}});let v=O("");const g=[{label:"By artist",component:de},{label:"By tags",component:ge},{label:"By frequency",component:pe},{label:"By access date",component:oe}];let _=O(A(g[0]));const y={pdf:!0,doc:!0,youtube:!0,link:!0};let n=O(A({...y}));const c=Object.keys(y);var u=He(),i=N(u);Ht(i,{title:"Song Book",description:"My song book",iconPath:"/songbook.png"});var d=p(i,2),w=f(d),C=f(w);C.__click=[Me],vt(C,"position","relative");var L=p(C,2);L.__click=[Oe],vt(L,"position","relative"),l(w),l(d);var x=p(d,2);R(x,17,()=>t(r),H,(T,V)=>{Jt(T,{get item(){return t(V)}})});var j=p(x,2);te(j,{});var F=p(j,2),Q=f(F);l(F);var X=p(F,2);Ae(X,{chords:k});var W=p(X,2);Fe(W,{chords:k});var G=p(W,2),Z=p(f(G),2);gt(Z);var at=p(Z,2);at.__click=[Ee,v];var M=p(at,2),rt=p(f(M),2);R(rt,17,()=>c,H,(T,V)=>{var q=je();q.__click=[Ne,n,V];var I=f(q);gt(I);var ut=p(I,2);l(q),E(st=>{et(q,"aria-label",`filter for ${t(V)??""}`),et(I,"id",t(V)),yt(ut,wt(st),"svelte-1gfqv35")},[()=>Tt(t(V))]),It(I,()=>t(n)[t(V)],st=>t(n)[t(V)]=st),b(T,q)}),l(M);var Y=p(M,4);R(Y,21,()=>g,H,(T,V)=>{var q=Re();q.__click=[Ie,_,V];var I=f(q,!0);l(q),E(()=>{Ct(q,"selected",t(_)===t(V)),U(I,t(V).label)}),b(T,q)}),l(Y),l(G);var $=p(G,2);Ot($,()=>t(_).component,(T,V)=>{V(T,{chords:k,get searchString(){return t(v)},get filters(){return t(n)}})}),E(()=>U(Q,`This is a list of ${k.length??""} song chords I have been gathering since I started teaching myself
    the guitar as a teen and that I like to play.`)),jt(Z,()=>t(v),T=>B(v,T)),b(m,u),z(),s()}nt(["click"]);export{_a as component,ma as universal};
