import{g as Mt,u as bt,a as Ut,b as Ot}from"../chunks/api.DrBgFUjP.js";import"../chunks/disclose-version.Bg9kRutz.js";import{i as tt}from"../chunks/legacy.EqIdVoM0.js";import{m as G,ah as kt,ai as wt,w as q,x as K,s as V,g as t,ag as O,M as Ct,y as E,z as h,ae as d,af as l,N as It,a5 as Y,a_ as dt,v as gt}from"../chunks/index-client.S3REcJgE.js";import{s as U}from"../chunks/render.CF6uZz0T.js";import{e as j,i as J}from"../chunks/each.Nz7c8l4p.js";import{e as P,a as m,t as S,c as Z,s as yt}from"../chunks/template.B5pchg3w.js";import{c as Ft}from"../chunks/svelte-component.BArtvi3w.js";import{s as nt,c as Lt,r as mt}from"../chunks/attributes.BZLGEmLx.js";import{t as xt,s as St}from"../chunks/class.co_UInUL.js";import{s as ft}from"../chunks/style.PwPRnE0L.js";import{b as Et,d as Nt}from"../chunks/input.DW_zkP8F.js";import{p as M}from"../chunks/props.C2aoZBXh.js";import{s as Dt,b as Tt,a as pt}from"../chunks/store.BAWuPd1l.js";import{c as Rt,o as jt}from"../chunks/store.DF07ihmy.js";import{a as At}from"../chunks/window.CJYpWRXx.js";import{M as zt}from"../chunks/Main.C8YeEQ_R.js";import{U as Jt,u as Pt,M as Ht}from"../chunks/Main.Bhdrm3q8.js";import{i as H}from"../chunks/if.BYsj_AMu.js";import{k as ht}from"../chunks/key.BxrKyE8K.js";import{b as Gt,g as Kt}from"../chunks/entry.WFWrpjgv.js";import{t as Wt}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.NDn5vnUv.js";import{A as Qt}from"../chunks/index.D6U8kpiJ.js";import{b as Xt}from"../chunks/this.BRzA9BlG.js";import{a as Yt}from"../chunks/await.BGm15oIX.js";import{p as Zt}from"../chunks/Main.svelte_svelte_type_style_lang.CsTDB6ng.js";const te=!1,ee=async()=>({chords:await Mt()}),ua=Object.freeze(Object.defineProperty({__proto__:null,load:ee,ssr:te},Symbol.toStringTag,{value:"Module"}));var ae=S('<button class="top-link svelte-1kbb9q3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="svelte-1kbb9q3"><path d="M12 6H0l6-6z"></path></svg> <span class="screen-reader-text svelte-1kbb9q3">Back to top</span></button>');function se(w,u){G(u,!1);let C=O(),f=O(!0),_;const g=c=>{c>0?V(f,!1):V(f,!0),_&&clearTimeout(_),_=setTimeout(()=>{V(f,!0)},3e3)},L=()=>{const c=document.documentElement.scrollTop||document.body.scrollTop;c>0&&(window.requestAnimationFrame(L),window.scrollTo(0,c-c/2))};kt(()=>t(C),()=>{g(t(C))}),wt();var x=ae();q(()=>xt(x,"hide",t(f))),At("y",()=>t(C),c=>V(C,c)),P("click",x,L),m(w,x),K()}const ot=Ct();let Bt=[];const _t=localStorage.getItem("failedVisitCounts");if(_t!==null)try{Bt=JSON.parse(_t)}catch{console.error("Couldnt parse failedVisitCounts from local storage")}const ct=Ct(Bt);ct.subscribe(w=>{localStorage.setItem("failedVisitCounts",JSON.stringify(w))});const Vt=w=>w==="doc"?"fas fa-file-word":w==="pdf"?"fas fa-file-pdf":w==="youtube"?"fa fa-youtube":"fas fa-link";var re=S('<span></span> <span><a target="_blank" rel="noopener noreferrer"></a></span>',1);function lt(w,u){G(u,!1);const[C,f]=Dt(),_=()=>pt(ct,"$failedVisitCounts",C);let g=M(u,"chord",8),L=M(u,"showArtist",8,!1),x=O();ot.subscribe(r=>{if(r&&r.has(g().url)){const e=r.get(g().url),n=new Date(e.lastAccessDateUnix*1e3);V(x,`visits: ${e.count} - last: ${n.toLocaleDateString()}`)}});const c=(L()?g().artist+" - ":"")+g().title,s=r=>r.type==="doc"?`${Gt}/docviewer/${r.url}`:r.url,o=async()=>{try{await bt(g().url);const r=It(ot),e=r.get(g().url)||{count:0,lastAccessDateUnix:0};e.count++,e.lastAccessDateUnix=Date.now()/1e3,r.set(g().url,e),ot.set(r)}catch(r){let e=r.message;r instanceof Qt&&r.code===401?e="Invalid logged in user":r instanceof Jt&&(e="User is logged out"),Tt(ct,[..._(),g().url]);const n=`<strong>Visit not counted</strong><br/> ${e}`;Wt.push(n,{initial:1,duration:5e3,theme:{"--toastBarBackground":"#FF0000"}})}};tt();var i=re(),p=E(i);const v=Y(()=>Lt(Vt(g().type)));var k=h(p,2),a=d(k);q(()=>nt(a,"href",s(g()))),a.textContent=c,l(k),q(()=>{St(p,t(v),"svelte-1yqqigs"),nt(a,"title",t(x))}),P("click",a,o),m(w,i),K(),f()}var oe=S('<li class="ul2col-item"><!> <!></li>'),ne=S('<ul class="ul2col-container"></ul>');function le(w,u){G(u,!1);let C=M(u,"searchString",8),f=M(u,"chords",12),_=M(u,"filters",8),g=O();ot.subscribe(s=>{s&&(V(g,s),f(f().sort((o,i)=>{const p=s.get(o.url),v=s.get(i.url);return p&&v?v.lastAccessDateUnix-p.lastAccessDateUnix:p?-1:v?1:o.artist!=i.artist?o.artist.toLowerCase()<i.artist.toLowerCase()?-1:1:o.title.toLowerCase()<i.title.toLowerCase()?-1:1})))});const L=(s,o,i)=>i[s.type]===!1?!1:o.length===0||s.artist.toLowerCase().match(o.toLowerCase())?!0:s.title.toLowerCase().match(o.toLowerCase());tt();var x=Z(),c=E(x);ht(c,f,s=>{var o=ne();j(o,5,f,J,(i,p)=>{var v=Z();const k=Y(()=>t(g).get(t(p).url));var a=E(v);{var r=e=>{var n=oe(),b=d(n);{var y=D=>{var $=yt();q(()=>U($,`(${t(k).count??""})`)),m(D,$)};H(b,D=>{t(k)&&D(y)})}var T=h(b,2);lt(T,{get chord(){return t(p)},showArtist:!0}),l(n),m(e,n)};H(a,e=>{L(t(p),C(),_())&&e(r)})}m(i,v)}),l(o),m(s,o)}),m(w,x),K()}const ie=(w,u)=>w<u?-1:w>u?1:0,$t=(w,u)=>{const C=w.toLowerCase(),f=u.toLowerCase();return ie(C,f)};var ce=S('<li class="navigationBtn svelte-1deg5s8"><a class="navigationLink svelte-1deg5s8"> </a></li>'),ue=S('<li class="ul2col-item"><!></li>'),ve=S('<ul class="ul2col-container"></ul>'),de=S('<tr class="svelte-1deg5s8"><td class="svelte-1deg5s8"> <!></td></tr>'),fe=S('<ol id="indexList" class="navigationBar disable-scrollbars svelte-1deg5s8"></ol> <table id="artistTable"></table>',1);function pe(w,u){G(u,!1);let C=M(u,"searchString",8,""),f=M(u,"chords",8),_=M(u,"filters",8);const g=f().reduce((e,n)=>{const b=n.artist;return e[b]||(e[b]=[]),e[b].push(n),e},{}),L=[],x=Object.keys(g).sort($t).map((e,n,b)=>{if(n===0||e[0].toLowerCase()!=b[n-1][0].toLowerCase()){const y="anchor_letter_"+e[0];return L.push({letter:e[0],tag:y}),{name:e,tag:y}}return{name:e}});let c=O(),s=O(0),o=O();const i=e=>{if(t(o)){var n=t(o).getBoundingClientRect();if(n.top<20){V(s,20);return}V(s,n.top)}},p=(e,n,b)=>g[e].sort((T,D)=>T.title<D.title?-1:1).filter(T=>{const D=T.type;return b[D]===!1?!1:n.length===0?!0:!!T.title.toLowerCase().match(n.toLowerCase())}),v=(e,n)=>!!e.toLowerCase().match(n.toLowerCase());kt(()=>t(c),()=>{i(t(c))}),wt(),tt();var k=fe(),a=E(k);j(a,5,()=>L,J,(e,n)=>{var b=ce(),y=d(b),T=d(y,!0);q(()=>U(T,t(n).letter.toUpperCase())),l(y),l(b),q(()=>nt(y,"href","#"+t(n).tag)),m(e,b)}),l(a);var r=h(a,2);j(r,5,()=>x,J,(e,n)=>{var b=Z();const y=Y(()=>p(t(n).name,C(),_())),T=Y(()=>v(t(n).name,C()));var D=E(b);{var $=I=>{var z=de();const W=Y(()=>t(T)?g[t(n).name]:t(y));var Q=d(z),X=d(Q),rt=h(X);ht(rt,C,et=>{var N=ve();j(N,5,()=>t(W),J,(at,st)=>{var A=ue(),B=d(A);lt(B,{get chord(){return t(st)}}),l(A),m(at,A)}),l(N),m(et,N)}),l(Q),l(z),q(()=>{nt(Q,"id",t(n).tag),U(X,`${t(n).name??""} `)}),m(I,z)};H(D,I=>{(t(T)||t(y).length>0)&&I($)})}m(e,b)}),l(r),Xt(r,e=>V(o,e),()=>t(o)),q(()=>ft(a,"--barTop",`${t(s)??""}px`)),At("y",()=>t(c),e=>V(c,e)),m(w,k),K()}var ge=S('<li class="ul2col-item"><!></li>'),he=S('<div><span> </span> <ul class="ul2col-container"></ul></div>');function me(w,u){G(u,!1);let C=M(u,"searchString",8),f=M(u,"chords",8),_=M(u,"filters",8);const g=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),L=O({});for(const s of f())s.tags.forEach(i=>{t(L)[i]||dt(L,t(L)[i]=[]),t(L)[i].push(s)});Object.keys(t(L)).forEach(s=>{t(L)[s].sort((o,i)=>{const p=o.artist.toLowerCase(),v=i.artist.toLowerCase(),k=o.title.toLowerCase(),a=i.title.toLowerCase();return p<v?-1:p>v?1:k<a?-1:1})}),tt();var x=Z(),c=E(x);j(c,1,()=>Object.keys(t(L)).sort($t),J,(s,o)=>{var i=Z(),p=E(i);{var v=k=>{var a=he(),r=d(a),e=d(r,!0);q(()=>U(e,g(t(o)))),l(r);var n=h(r,2);j(n,5,()=>t(L)[t(o)],J,(b,y)=>{var T=Z(),D=E(T);{var $=I=>{var z=ge(),W=d(z);lt(W,{get chord(){return t(y)},showArtist:!0}),l(z),m(I,z)};H(D,I=>{_()[t(y).type]&&I($)})}m(b,T)}),l(n),l(a),m(k,a)};H(p,k=>{(C().length===0||t(o).toLowerCase().match(C().toLowerCase()))&&k(v)})}m(s,i)}),m(w,x),K()}var _e=S('<li class="ul2col-item"><!> <!></li>'),be=S('<ul class="ul2col-container"></ul>');function ke(w,u){G(u,!1);let C=M(u,"searchString",8),f=M(u,"chords",12),_=M(u,"filters",8),g=O();ot.subscribe(s=>{s&&(V(g,s),f(f().sort((o,i)=>{const p=s.get(o.url),v=s.get(i.url);return p&&v?p.count!==v.count?v.count-p.count:v.lastAccessDateUnix-p.lastAccessDateUnix:p?-1:v?1:o.artist!=i.artist?o.artist.toLowerCase()<i.artist.toLowerCase()?-1:1:o.title.toLowerCase()<i.title.toLowerCase()?-1:1})))});const L=(s,o,i)=>i[s.type]===!1?!1:o.length===0||s.artist.toLowerCase().match(o.toLowerCase())?!0:s.title.toLowerCase().match(o.toLowerCase());tt();var x=Z(),c=E(x);ht(c,f,s=>{var o=be();j(o,5,f,J,(i,p)=>{var v=Z();const k=Y(()=>t(g).get(t(p).url));var a=E(v);{var r=e=>{var n=_e(),b=d(n);{var y=D=>{var $=yt();q(()=>U($,`(${t(k).count??""})`)),m(D,$)};H(b,D=>{t(k)&&D(y)})}var T=h(b,2);lt(T,{get chord(){return t(p)},showArtist:!0}),l(n),m(e,n)};H(a,e=>{L(t(p),C(),_())&&e(r)})}m(i,v)}),l(o),m(s,o)}),m(w,x),K()}var we=S('<span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"><a target="_blank" rel="noopener noreferrer"> </a></span> <span class="col svelte-5k8p3l"> </span>',1),Ce=S('<div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Last Check</span> <span class="col table-head svelte-5k8p3l">Checks</span> <span class="col table-head svelte-5k8p3l">Skipped</span> <span class="col table-head svelte-5k8p3l">Errors</span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span> <span class="col svelte-5k8p3l"> </span></div> <br> <div class="rows svelte-5k8p3l"><span class="col table-head svelte-5k8p3l">Status</span> <span class="col table-head svelte-5k8p3l">Ref</span> <span class="col table-head svelte-5k8p3l">Host</span> <span class="col table-head svelte-5k8p3l">Data</span> <!></div>',1),ye=S('<p style="color: red"> </p>'),Le=S("<p>Fetching results...</p>"),xe=S('<div role="dialog" class="modal svelte-5k8p3l"><div class="contents svelte-5k8p3l"><h3 class="title-bar svelte-5k8p3l">Urls checks <button>Close</button></h3> <!></div></div>');function Se(w,u){G(u,!1);let C=M(u,"isOpen",8);const f=c=>{const s=new Date(c.timestamp);return s.toDateString()+" "+s.toTimeString()},_=c=>c.fails.sort((s,o)=>s.chord.url<o.chord.url?-1:1);tt();var g=Z(),L=E(g);{var x=c=>{var s=xe(),o=d(s),i=d(o),p=h(d(i));l(i);var v=h(i,2);Yt(v,Ut,k=>{var a=Le();m(k,a)},(k,a)=>{var r=Ce();const e=Y(()=>f(t(a))),n=Y(()=>_(t(a)));var b=E(r),y=h(d(b),8),T=d(y,!0);l(y);var D=h(y,2),$=d(D,!0);l(D);var I=h(D,2),z=d(I,!0);l(I);var W=h(I,2),Q=d(W,!0);l(W),l(b);var X=h(b,4),rt=h(d(X),8);j(rt,1,()=>t(n),J,(et,N)=>{var at=we(),st=E(at),A=d(st,!0);l(st);var B=h(st,2),F=d(B);l(B);var R=h(B,2),it=d(R),vt=d(it,!0);l(it),l(R);var ut=h(R,2),qt=d(ut,!0);q(()=>U(qt,t(N).error?JSON.stringify(t(N).error):"")),l(ut),q(()=>{U(A,t(N).status),U(F,`${t(N).chord.artist??""} - ${t(N).chord.title??""}`),nt(it,"href",t(N).chord.url),U(vt,new URL(t(N).chord.url).hostname)}),m(et,at)}),l(X),q(()=>{U(T,t(e)),U($,t(a).nbChecks),U(z,t(a).nbSkipped),U(Q,t(a).nbFails)}),m(k,r)},(k,a)=>{var r=ye(),e=d(r);l(r),q(()=>U(e,`Could not retrieve checks: ${t(a).message??""}`)),m(k,r)}),l(o),l(s),P("click",p,function(...k){var a;(a=Rt)==null||a.apply(this,k)}),m(c,s)};H(L,c=>{C()&&c(x)})}m(w,g),K()}var De=S('<li class="ul2col-separator"> </li>'),Te=S('<!> <li class="ul2col-item"><!></li>',1),Ae=S('<div><h3>Latest additions <button class="pull-right">More...</button></h3> <ul class="ul2col-container"></ul></div>');function Be(w,u){G(u,!1);let C=M(u,"chords",8);const f=Date.now(),_=1e3*3600*24*7,g=_*4,L=[{label:"last week",time:f-_},{label:"one month ago",time:f-g},{label:"two monthes ago",time:f-2*g},{label:"six monthes ago",time:f-6*g},{label:"one year ago",time:f-12*g}],x=C().filter(a=>a.creationDate).sort((a,r)=>r.creationDate-a.creationDate).map((a,r,e)=>{const n={...a};if(r>0){const b=e[r-1];for(const{time:y,label:T}of L)b.creationDate>y&&a.creationDate<y&&(n.dateTag=T)}return n});let c=6,s=O([]);const o=()=>{c+=4,V(s,x.slice(0,c))};gt(()=>{o()}),tt();var i=Ae(),p=d(i),v=h(d(p));l(p);var k=h(p,2);j(k,5,()=>t(s),J,(a,r)=>{var e=Te(),n=E(e);{var b=D=>{var $=De(),I=d($,!0);l($),q(()=>U(I,t(r).dateTag)),m(D,$)};H(n,D=>{t(r).dateTag&&D(b)})}var y=h(n,2),T=d(y);lt(T,{get chord(){return t(r)}}),l(y),m(a,e)}),l(k),l(i),P("click",v,()=>o()),m(w,i),K()}var Ve=S("<button>&nbsp↶&nbsp</button>"),$e=S('<li class="ul2col-item"><!></li>'),qe=S('<div><h3>Random song <span class="pull-right"><!> <button>Get more random songs</button></span></h3> <br> <ul class="ul2col-container"></ul></div>');function Me(w,u){G(u,!1);let C=M(u,"chords",8);const f=6;let _=O([]),g=O([]);const L=()=>{t(_).length>=C().length-f&&V(_,[]);for(let a=0;a<f;a++){let r=-1;for(;r===-1||t(_).includes(r);)r=Math.floor(Math.random()*C().length);t(_).push(r)}V(g,t(_).slice(t(_).length-f).map(a=>C()[a]))},x=()=>{t(_).length<=f||(t(_).splice(t(_).length-f),V(g,t(_).slice(t(_).length-f).map(a=>C()[a])))};gt(()=>{L()}),tt();var c=qe(),s=d(c),o=h(d(s)),i=d(o);{var p=a=>{var r=Ve();P("click",r,x),m(a,r)};H(i,a=>{t(_).length>f&&a(p)})}var v=h(i,2);l(o),l(s);var k=h(s,4);j(k,5,()=>t(g),a=>a.url,(a,r)=>{var e=$e(),n=d(e);lt(n,{get chord(){return t(r)},showArtist:!0}),l(e),m(a,e)}),l(k),l(c),P("click",v,L),m(w,c),K()}var Ue=S('<button class="filter-control svelte-1gfqv35"><input type="checkbox"> <span></span></button>'),Oe=S('<button class="control svelte-1gfqv35"> </button>'),Ie=S('<!> <h2><span class="pull-right"><button>Check dead links</button> <button>Edit</button></span></h2> <!> <!> <p> </p> <!> <!> <div><h3>All songs</h3> Search an artist, a title or a tag:<input type="text"> <button><i class="fas fa-times-circle"></i></button> <div class="filter-controls-container svelte-1gfqv35"><h4>Filters</h4> <!></div> <h4>View</h4> <div class="view-controls-container svelte-1gfqv35"></div></div> <!>',1);function va(w,u){G(u,!1);const[C,f]=Dt(),_=()=>pt(ct,"$failedVisitCounts",C),g=()=>pt(Pt,"$user",C);Zt.set("Songbook");let L=M(u,"data",8);const{chords:x}=L();let c=O([]);const s=A=>{t(c).push(A),V(c,t(c)),setTimeout(()=>{t(c).shift(),V(c,t(c))},5e3)};gt(async()=>{try{if(_().length&&g()){s({level:"info",header:"Trying to count missed visits while logged out"});for(const A of _())await bt(A);s({level:"success",header:`Counted ${_().length} missed visits`}),Tt(ct,[])}}catch{s({level:"error",header:"Couldnt upload failed visit counts"})}try{const B=(await Ot()).reduce((F,R)=>(F.set(R.url,{...R}),F),new Map);ot.set(B)}catch{s({level:"error",header:"Couldnt upload failed visit counts"})}});let o=O("");const i=[{label:"By artist",component:pe},{label:"By tags",component:me},{label:"By frequency",component:ke},{label:"By access date",component:le}];let p=O(i[0]),v=O({pdf:!0,doc:!0,youtube:!0,link:!0});const k=Object.keys(t(v));tt();var a=Ie(),r=E(a);zt(r,{title:"Song Book",description:"My song book",iconPath:"/songbook.png"});var e=h(r,2),n=d(e),b=d(n);ft(b,"position","relative");var y=h(b,2);ft(y,"position","relative"),l(n),l(e);var T=h(e,2);j(T,1,()=>t(c),J,(A,B)=>{Ht(A,{get item(){return t(B)}})});var D=h(T,2);se(D,{});var $=h(D,2),I=d($);l($);var z=h($,2);Be(z,{chords:x});var W=h(z,2);Me(W,{chords:x});var Q=h(W,2),X=h(d(Q),2);mt(X);var rt=h(X,2),et=h(rt,2),N=h(d(et),2);j(N,1,()=>k,J,(A,B)=>{var F=Ue(),R=d(F);mt(R);var it=h(R,2);const vt=Y(()=>Lt(Vt(t(B))));l(F),q(()=>{nt(R,"id",t(B)),St(it,t(vt),"svelte-1gfqv35")}),Nt(R,()=>t(v)[t(B)],ut=>dt(v,t(v)[t(B)]=ut)),P("click",F,()=>{dt(v,t(v)[t(B)]=!t(v)[t(B)]),V(v,t(v))}),m(A,F)}),l(et);var at=h(et,4);j(at,5,()=>i,J,(A,B)=>{var F=Oe(),R=d(F,!0);l(F),q(()=>{xt(F,"selected",t(p)===t(B)),U(R,t(B).label)}),P("click",F,()=>V(p,t(B))),m(A,F)}),l(at),l(Q);var st=h(Q,2);Ft(st,()=>t(p).component,(A,B)=>{B(A,{chords:x,get searchString(){return t(o)},get filters(){return t(v)}})}),q(()=>U(I,`This is a list of ${x.length??""} song chords I have been gathering since I started teaching myself
    the guitar as a teen and that I like to play.`)),P("click",b,()=>jt(Se)),P("click",y,()=>Kt("/songbook/edit")),Et(X,()=>t(o),A=>V(o,A)),P("click",rt,()=>V(o,"")),m(w,a),K(),f()}export{va as component,ua as universal};
