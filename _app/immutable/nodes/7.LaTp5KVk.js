import{s as Q,f as h,a as N,l as ut,g as d,h as B,N as P,c as S,m as ht,d as g,j as m,k as U,G as F,i as Z,H as o,w as $,n as wt,r as R,A as dt,V as rt,W as ct,o as Bt,I as xt,e as bt}from"../chunks/scheduler.c1HY8KFf.js";import{S as G,i as Y,b as X,d as tt,m as et,a as nt,t as st,e as ot}from"../chunks/index.HRhZFR8d.js";import{a as Tt,o as Ct}from"../chunks/store.xfbYrcjM.js";import{P as It}from"../chunks/P5.w2Pv077y.js";import{T as kt}from"../chunks/TapTempo.Oc7is1s8.js";class yt{audioContext;notesInQueue=[];currentBeatInBar;beatsPerBar;currentSubdivision;subdivisionsInBeat;tempo;lookahead;scheduleAheadTime;nextNoteTime;isRunning;intervalID;onBeatStart;onBeatEnd;constructor(t=80){this.audioContext=null,this.notesInQueue=[],this.currentBeatInBar=0,this.currentSubdivision=0,this.subdivisionsInBeat=1,this.beatsPerBar=4,this.tempo=t,this.lookahead=25,this.scheduleAheadTime=.1,this.nextNoteTime=0,this.isRunning=!1,this.intervalID=null}nextNote(){var t=60/this.subdivisionsInBeat/this.tempo;this.nextNoteTime+=t,this.currentSubdivision++,this.currentSubdivision>=this.subdivisionsInBeat&&(this.currentBeatInBar++,this.currentSubdivision=0),this.currentBeatInBar>=this.beatsPerBar&&(this.currentBeatInBar=0)}scheduleNote(t,e,n){if(console.log("schedule note"),!this.audioContext){console.log("no audio context stopping scheduler");return}this.notesInQueue.push({note:t,time:n});const s=this.audioContext.createOscillator(),a=this.audioContext.createGain(),l=1e3,c=400,v=200;e!==0?s.frequency.value=v:t%this.beatsPerBar===0?s.frequency.value=l:s.frequency.value=c,a.gain.value=1,a.gain.exponentialRampToValueAtTime(1,n+.001),a.gain.exponentialRampToValueAtTime(.001,n+.02),s.connect(a),a.connect(this.audioContext.destination);const u=this.audioContext.createConstantSource();console.log({constantSourceNode:u}),u.onended=()=>{console.log("on constantSourceNode ended"),this.onBeatStart&&this.onBeatStart(t,e),s.start(),s.stop(n+.03),s.onended=()=>{this.onBeatEnd&&this.onBeatEnd()}},u.start(n),u.stop(this.audioContext.currentTime+1e-4),console.log("done scheduleNote")}scheduler(){if(!this.audioContext){console.log("no audio context, stopping scheduler");return}for(;this.nextNoteTime<this.audioContext.currentTime+this.scheduleAheadTime;)this.scheduleNote(this.currentBeatInBar,this.currentSubdivision,this.nextNoteTime),this.nextNote()}fixAudioContext(){if(this.audioContext){var t=this.audioContext.createBuffer(1,1,22050),e=this.audioContext.createBufferSource();e.buffer=t,e.connect(this.audioContext.destination),e.start?e.start(0):e.play?e.play(0):e.noteOn&&e.noteOn(0)}document.removeEventListener("touchstart",fixAudioContext),document.removeEventListener("touchend",fixAudioContext)}start(){if(console.log("metronome start"),this.isRunning){console.log("already running");return}this.audioContext||(console.log("trying to create new audio context"),this.audioContext=new(window.AudioContext||window.webkitAudioContext)),console.log("audio context ready"),this.isRunning=!0,this.currentBeatInBar=0,this.currentSubdivision=0,this.nextNoteTime=this.audioContext.currentTime+.05,console.log("start interval"),this.intervalID=setInterval(()=>this.scheduler(),this.lookahead)}stop(){this.isRunning=!1,this.intervalID&&clearInterval(this.intervalID)}startStop(){this.isRunning?(console.log("startstop stop"),this.stop()):(console.log("startstop start"),this.start())}}function Mt(i){let t,e,n,s="<h4>Beats in bar</h4>",a,l,c,v="-1",u,f,_=i[0].beatsPerBar+"",M,r,b,T="+1",V,E,x,C,I,D="<h4>Subdivisions in beat</h4>",k,w,p,y='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M 4.3 0 v 9.6 A 2.9 2.9 0 0 0 0 12.1 A 3 3 0 0 0 3 15 c 1.5 0 2.8 -1.3 2.8 -2.9 V 3 V 0 H 4.3 Z"></path></svg>',O,H,j='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M4.3 0v9.6A2.9 2.9 0 0 0 0 12.1 3 3 0 0 0 3 15c1.5 0 2.8-1.3 2.8-2.9V3h7.7v6.6a2.9 2.9 0 0 0-4.3 2.5 2.9 2.9 0 0 0 5.8 0V0H4.3Z"></path></svg>',q,L,it='<svg width="24" height="21" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: auto; top: -3px;"><path clip-rule="evenodd" d="M4.3 15.6V6H24v12.1a3 3 0 0 1-3 2.9 2.9 2.9 0 0 1-2.8-2.9 2.9 2.9 0 0 1 4.3-2.5V9H15v9.1a2.9 2.9 0 0 1-3 2.9 3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 3-2.8c.5 0 1 0 1.3.3V9H5.8v9.1C5.8 19.7 4.5 21 3 21a3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 4.3-2.5Z"></path><path d="M12.6 2.2 13.9.5V0h-3.1v.4h2.5l-1.4 1.7v.4h.4c.9 0 1.3.4 1.3 1s-.4 1-1.2 1c-.7 0-1.3-.3-1.6-.6l-.2.4c.4.4 1 .6 1.8.6 1.1 0 1.7-.6 1.7-1.4 0-.8-.5-1.3-1.5-1.4Z"></path></svg>',ft,W,vt='<svg width="27" height="13" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 27px; height: auto;"><path clip-rule="evenodd" d="M3.5 0v7.9a2 2 0 0 0-1.1-.3C1 7.6 0 8.6 0 9.9c0 1.3 1 2.4 2.4 2.4 1.3 0 2.3-1 2.3-2.4V3.4H11V8a2 2 0 0 0-1.1-.3 2.3 2.3 0 1 0 0 4.7c1.3 0 2.4-1 2.4-2.4V3.4h6.1V8a2.4 2.4 0 0 0-1-.3c-1.4 0-2.5 1-2.5 2.3 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1 2.4-2.4V3.4h6.2V8l-1.2-.3c-1.3 0-2.3 1-2.3 2.3a2.3 2.3 0 1 0 4.7 0V0H3.5Zm7.4 2.7H4.7V1.5H11v1.2Zm7.4 0h-6.1V1.5h6.1v1.2Zm1.3 0h6.2V1.5h-6.2v1.2Z"></path></svg>',mt,pt;return{c(){t=h("div"),e=h("div"),n=h("label"),n.innerHTML=s,a=N(),l=h("div"),c=h("button"),c.textContent=v,u=N(),f=h("span"),M=ut(_),r=N(),b=h("button"),b.textContent=T,V=N(),E=h("br"),x=N(),C=h("div"),I=h("label"),I.innerHTML=D,k=N(),w=h("div"),p=h("button"),p.innerHTML=y,O=N(),H=h("button"),H.innerHTML=j,q=N(),L=h("button"),L.innerHTML=it,ft=N(),W=h("button"),W.innerHTML=vt,this.h()},l(z){t=d(z,"DIV",{class:!0});var A=B(t);e=d(A,"DIV",{class:!0});var at=B(e);n=d(at,"LABEL",{for:!0,"data-svelte-h":!0}),P(n)!=="svelte-me1f1h"&&(n.innerHTML=s),a=S(at),l=d(at,"DIV",{class:!0});var J=B(l);c=d(J,"BUTTON",{"data-svelte-h":!0}),P(c)!=="svelte-1d4n1zi"&&(c.textContent=v),u=S(J),f=d(J,"SPAN",{style:!0});var gt=B(f);M=ht(gt,_),gt.forEach(g),r=S(J),b=d(J,"BUTTON",{"data-svelte-h":!0}),P(b)!=="svelte-g2gkw2"&&(b.textContent=T),J.forEach(g),at.forEach(g),V=S(A),E=d(A,"BR",{}),x=S(A),C=d(A,"DIV",{class:!0});var lt=B(C);I=d(lt,"LABEL",{for:!0,"data-svelte-h":!0}),P(I)!=="svelte-x5t5k1"&&(I.innerHTML=D),k=S(lt),w=d(lt,"DIV",{class:!0});var K=B(w);p=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),P(p)!=="svelte-7czod"&&(p.innerHTML=y),O=S(K),H=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),P(H)!=="svelte-1p2rqi1"&&(H.innerHTML=j),q=S(K),L=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),P(L)!=="svelte-72e2df"&&(L.innerHTML=it),ft=S(K),W=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),P(W)!=="svelte-rjuw0z"&&(W.innerHTML=vt),K.forEach(g),lt.forEach(g),A.forEach(g),this.h()},h(){m(n,"for","beatsInBar"),U(f,"font-size","large"),U(f,"margin-left","1em"),U(f,"margin-right","1em"),m(l,"class","subdivisions-container svelte-14nipte"),m(e,"class","controls-sub-container svelte-14nipte"),m(I,"for","subdivisionsInBeat"),m(p,"class","svelte-14nipte"),F(p,"selected",i[0].subdivisionsInBeat===1),m(H,"class","svelte-14nipte"),F(H,"selected",i[0].subdivisionsInBeat===2),m(L,"class","svelte-14nipte"),F(L,"selected",i[0].subdivisionsInBeat===3),m(W,"class","svelte-14nipte"),F(W,"selected",i[0].subdivisionsInBeat===4),m(w,"class","subdivisions-container svelte-14nipte"),m(C,"class","controls-sub-container svelte-14nipte"),m(t,"class","controls-container svelte-14nipte")},m(z,A){Z(z,t,A),o(t,e),o(e,n),o(e,a),o(e,l),o(l,c),o(l,u),o(l,f),o(f,M),o(l,r),o(l,b),o(t,V),o(t,E),o(t,x),o(t,C),o(C,I),o(C,k),o(C,w),o(w,p),o(w,O),o(w,H),o(w,q),o(w,L),o(w,ft),o(w,W),mt||(pt=[$(c,"click",i[1]),$(b,"click",i[2]),$(p,"click",i[3]),$(H,"click",i[4]),$(L,"click",i[5]),$(W,"click",i[6])],mt=!0)},p(z,[A]){A&1&&_!==(_=z[0].beatsPerBar+"")&&wt(M,_),A&1&&F(p,"selected",z[0].subdivisionsInBeat===1),A&1&&F(H,"selected",z[0].subdivisionsInBeat===2),A&1&&F(L,"selected",z[0].subdivisionsInBeat===3),A&1&&F(W,"selected",z[0].subdivisionsInBeat===4)},i:R,o:R,d(z){z&&g(t),mt=!1,dt(pt)}}}function Vt(i,t,e){let{metronome:n}=t;const s=()=>e(0,n.beatsPerBar=Math.max(n.beatsPerBar-1,1),n),a=()=>e(0,n.beatsPerBar=Math.min(n.beatsPerBar+1,10),n),l=()=>e(0,n.subdivisionsInBeat=1,n),c=()=>e(0,n.subdivisionsInBeat=2,n),v=()=>e(0,n.subdivisionsInBeat=3,n),u=()=>e(0,n.subdivisionsInBeat=4,n);return i.$$set=f=>{"metronome"in f&&e(0,n=f.metronome)},[n,s,a,l,c,v,u]}class Et extends G{constructor(t){super(),Y(this,t,Vt,Mt,Q,{metronome:0})}}function Nt(i){let t,e,n,s="-5",a,l,c="-1",v,u,f,_,M,r,b,T,V="+1",E,x,C="+5",I,D;return{c(){t=h("div"),e=h("div"),n=h("button"),n.textContent=s,a=N(),l=h("button"),l.textContent=c,v=N(),u=h("div"),f=h("input"),M=ut(" BPM"),r=N(),b=h("div"),T=h("button"),T.textContent=V,E=N(),x=h("button"),x.textContent=C,this.h()},l(k){t=d(k,"DIV",{class:!0});var w=B(t);e=d(w,"DIV",{class:!0});var p=B(e);n=d(p,"BUTTON",{"data-svelte-h":!0}),P(n)!=="svelte-1ayjxgi"&&(n.textContent=s),a=S(p),l=d(p,"BUTTON",{"data-svelte-h":!0}),P(l)!=="svelte-1ri3s3e"&&(l.textContent=c),p.forEach(g),v=S(w),u=d(w,"DIV",{class:!0,style:!0});var y=B(u);f=d(y,"INPUT",{style:!0,type:!0,min:!0,max:!0}),M=ht(y," BPM"),y.forEach(g),r=S(w),b=d(w,"DIV",{class:!0});var O=B(b);T=d(O,"BUTTON",{"data-svelte-h":!0}),P(T)!=="svelte-1tvviti"&&(T.textContent=V),E=S(O),x=d(O,"BUTTON",{"data-svelte-h":!0}),P(x)!=="svelte-1vk0846"&&(x.textContent=C),O.forEach(g),w.forEach(g),this.h()},h(){m(e,"class","tempo-less svelte-oae4co"),U(f,"font-size","x-large"),U(f,"margin-right","0.1em"),m(f,"type","number"),m(f,"min","1"),m(f,"max","400"),f.value=_=i[0].tempo,m(u,"class","tempo-value svelte-oae4co"),U(u,"font-size","x-large"),m(b,"class","tempo-more svelte-oae4co"),m(t,"class","tempo-container svelte-oae4co")},m(k,w){Z(k,t,w),o(t,e),o(e,n),o(e,a),o(e,l),o(t,v),o(t,u),o(u,f),o(u,M),o(t,r),o(t,b),o(b,T),o(b,E),o(b,x),I||(D=[$(n,"click",i[2]),$(l,"click",i[3]),$(f,"change",i[1]),$(T,"click",i[4]),$(x,"click",i[5])],I=!0)},p(k,[w]){w&1&&_!==(_=k[0].tempo)&&f.value!==_&&(f.value=_)},i:R,o:R,d(k){k&&g(t),I=!1,dt(D)}}}function St(i,t,e){let{metronome:n}=t;const s=u=>{if(!u||!u.target)return;const f=u.target,_=Number(f.value);!_||_<1||e(0,n.tempo=_,n)},a=()=>e(0,n.tempo=Number(n.tempo)-5,n),l=()=>e(0,n.tempo=Number(n.tempo)-1,n),c=()=>e(0,n.tempo=Number(n.tempo)+1,n),v=()=>e(0,n.tempo=Number(n.tempo)+5,n);return i.$$set=u=>{"metronome"in u&&e(0,n=u.metronome)},[n,s,a,l,c,v]}class Pt extends G{constructor(t){super(),Y(this,t,St,Nt,Q,{metronome:0})}}function $t(i){let t,e;return{c(){t=rt("svg"),e=rt("path"),this.h()},l(n){t=ct(n,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=B(t);e=ct(s,"path",{d:!0}),B(e).forEach(g),s.forEach(g),this.h()},h(){m(e,"d","M 0 0 V 20 L 17 10"),m(t,"width","20"),m(t,"height","20"),m(t,"fill","blue"),m(t,"xmlns","http://www.w3.org/2000/svg"),U(t,"width","20px"),U(t,"height","auto")},m(n,s){Z(n,t,s),o(t,e)},d(n){n&&g(t)}}}function Ht(i){let t,e;return{c(){t=rt("svg"),e=rt("path"),this.h()},l(n){t=ct(n,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=B(t);e=ct(s,"path",{d:!0}),B(e).forEach(g),s.forEach(g),this.h()},h(){m(e,"d","M 0 0 V 20 L 6 20 L 6 0 L 0 0 M 9 0 V 20 H 15 V 0 H 9"),m(t,"width","20"),m(t,"height","20"),m(t,"fill","blue"),m(t,"xmlns","http://www.w3.org/2000/svg"),U(t,"width","20px"),U(t,"height","auto")},m(n,s){Z(n,t,s),o(t,e)},d(n){n&&g(t)}}}function Lt(i){let t,e,n,s;function a(v,u){return v[0].isRunning?Ht:$t}let l=a(i),c=l(i);return{c(){t=h("div"),e=h("button"),c.c(),this.h()},l(v){t=d(v,"DIV",{class:!0});var u=B(t);e=d(u,"BUTTON",{style:!0});var f=B(e);c.l(f),f.forEach(g),u.forEach(g),this.h()},h(){U(e,"min-width","300px"),m(t,"class","controls-container svelte-1jo8tk4")},m(v,u){Z(v,t,u),o(t,e),c.m(e,null),n||(s=[$(window,"keydown",i[2]),$(e,"click",i[1])],n=!0)},p(v,[u]){l!==(l=a(v))&&(c.d(1),c=l(v),c&&(c.c(),c.m(e,null)))},i:R,o:R,d(v){v&&g(t),c.d(),n=!1,dt(s)}}}function Dt(i,t,e){let{metronome:n}=t;const s=()=>{n.startStop(),e(0,n)},a=l=>{const c=" ";if([c].includes(l.key)&&(l.preventDefault(),l.key===c)){s();return}};return i.$$set=l=>{"metronome"in l&&e(0,n=l.metronome)},[n,s,a]}class Ot extends G{constructor(t){super(),Y(this,t,Dt,Lt,Q,{metronome:0})}}function At(i){let t,e,n;return e=new It({props:{sketch:i[0]}}),{c(){t=h("div"),X(e.$$.fragment),this.h()},l(s){t=d(s,"DIV",{id:!0,class:!0});var a=B(t);tt(e.$$.fragment,a),a.forEach(g),this.h()},h(){m(t,"id","canvas-container"),m(t,"class","d-flex justify-content-center")},m(s,a){Z(s,t,a),et(e,t,null),n=!0},p:R,i(s){n||(nt(e.$$.fragment,s),n=!0)},o(s){st(e.$$.fragment,s),n=!1},d(s){s&&g(t),ot(e)}}}function Ut(i,t,e){let{metronome:n}=t,s=!1,a=0,l=0;const c=(r,b)=>{console.log("beat start",{beatNumber:r,subdivisionNumber:b}),s=!0,a=r,l=b},v=()=>{s=!1};let u,f="white",_="white";const M=r=>{r.setup=()=>{u=r,r.createCanvas(600,300),r.textSize(40)},r.draw=()=>{const b=document.getElementById("canvas-container");if(b){const x=b?.clientWidth||600;r.width!==x&&r.resizeCanvas(x,Math.max(x/3,100))}r.clear(),r.stroke(f);const T=Math.min(r.width/n.beatsPerBar,r.height),V=r.height/n.subdivisionsInBeat;for(let x=0;x<n.beatsPerBar;x++){x===a?r.strokeWeight(5):r.strokeWeight(1),r.noFill(),r.circle(x*T+T/2,r.height/2,T*.9),r.strokeWeight(1);for(let C=0;C<n.subdivisionsInBeat;C++)s&&x===a&&C===l?r.fill(f):r.noFill(),r.circle(x*T+T/2,C*V+V/2,T/n.subdivisionsInBeat*.9)}s?r.fill(_):r.fill(f),r.fill(f);const E=(a+1).toString();r.text(E,a*T+T/2-r.textWidth(E)/2,r.height/2+r.textSize()/2)}};return Bt(()=>{const r=getComputedStyle(document.body);f=r.getPropertyValue("--nc-tx-3"),_=r.getPropertyValue("--nc-tx-2"),e(1,n.onBeatStart=c,n),e(1,n.onBeatEnd=v,n)}),xt(()=>{u?.remove()}),i.$$set=r=>{"metronome"in r&&e(1,n=r.metronome)},[M,n]}class qt extends G{constructor(t){super(),Y(this,t,Ut,At,Q,{metronome:1})}}function zt(i){let t,e,n="Tap",s,a;return{c(){t=h("div"),e=h("button"),e.textContent=n,this.h()},l(l){t=d(l,"DIV",{class:!0});var c=B(t);e=d(c,"BUTTON",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1ln40k6"&&(e.textContent=n),c.forEach(g),this.h()},h(){m(e,"class","svelte-1gwle9f"),F(e,"taped",i[0]),m(t,"class","controls-container svelte-1gwle9f")},m(l,c){Z(l,t,c),o(t,e),s||(a=$(e,"click",i[1]),s=!0)},p(l,[c]){c&1&&F(e,"taped",l[0])},i:R,o:R,d(l){l&&g(t),s=!1,a()}}}function Rt(i,t,e){let{onNewBPM:n}=t,s=new kt,a=!1;const l=()=>{s.addBeat(),e(0,a=!0),setTimeout(()=>e(0,a=!1),100),s.bpm>0&&n(Math.ceil(s.bpm))};return i.$$set=c=>{"onNewBPM"in c&&e(2,n=c.onNewBPM)},[a,l,n]}class Wt extends G{constructor(t){super(),Y(this,t,Rt,zt,Q,{onNewBPM:2})}}function _t(i){let t,e,n,s,a,l="Close",c,v,u=`This is a simple metronome:
                <ul><li>Use the play/pause button or the space bar to start and stop the metronome</li> <li>You can change the tempo by:</li> <ul><li>Entering a number directly in the input</li> <li>Using the -5, -1, +1 and +5 buttons</li> <li>Taping a tempo on the tap button. When taping the tempo each tap counts
                            for a subdivision if subdivisions are enabled. Stop taping for approx. 3
                            seconds to restart the tap counter.</li></ul> <li>The &quot;Beats in bar&quot; setting change the number of beats counted by the
                        metronome. The first beat is accented with a higher frequency tone.</li> <li>The &quot;Subdivisions in beat&quot; setting allow to change how the beats are
                        divided. The subdivisions after the first one are played with a lower
                        frequency tone.</li> <li>The visualization at the bottom follow the beats and their subdivisions.</li></ul>`,f,_,M,r,b="Bugs",T,V,E=`<li>While it goes against my opinion on what the web should look like, this page
                    works better with Chrome-based browsers.</li> <li>For some reason the display of the tempo settings is broken on Firefox, the
                    input doesn&#39;t resize properly.</li> <li>The sound doesn&#39;t work on Safari on iOS (and maybe on MacOS too).</li>`,x,C;return{c(){t=h("div"),e=h("div"),n=h("h4"),s=ut(`Metronome
                `),a=h("button"),a.textContent=l,c=N(),v=h("div"),v.innerHTML=u,f=N(),_=h("br"),M=N(),r=h("h5"),r.textContent=b,T=N(),V=h("ul"),V.innerHTML=E,this.h()},l(I){t=d(I,"DIV",{role:!0,class:!0});var D=B(t);e=d(D,"DIV",{class:!0});var k=B(e);n=d(k,"H4",{class:!0});var w=B(n);s=ht(w,`Metronome
                `),a=d(w,"BUTTON",{"data-svelte-h":!0}),P(a)!=="svelte-2m9p61"&&(a.textContent=l),w.forEach(g),c=S(k),v=d(k,"DIV",{"data-svelte-h":!0}),P(v)!=="svelte-1k2t2wt"&&(v.innerHTML=u),f=S(k),_=d(k,"BR",{}),M=S(k),r=d(k,"H5",{"data-svelte-h":!0}),P(r)!=="svelte-1fvxfob"&&(r.textContent=b),T=S(k),V=d(k,"UL",{"data-svelte-h":!0}),P(V)!=="svelte-19aw4nc"&&(V.innerHTML=E),k.forEach(g),D.forEach(g),this.h()},h(){m(n,"class","title-bar svelte-mmovoq"),m(e,"class","contents svelte-mmovoq"),m(t,"role","dialog"),m(t,"class","modal svelte-mmovoq")},m(I,D){Z(I,t,D),o(t,e),o(e,n),o(n,s),o(n,a),o(e,c),o(e,v),o(e,f),o(e,_),o(e,M),o(e,r),o(e,T),o(e,V),x||(C=$(a,"click",Tt),x=!0)},d(I){I&&g(t),x=!1,C()}}}function Ft(i){let t,e=i[0]&&_t();return{c(){e&&e.c(),t=bt()},l(n){e&&e.l(n),t=bt()},m(n,s){e&&e.m(n,s),Z(n,t,s)},p(n,[s]){n[0]?e||(e=_t(),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:R,o:R,d(n){n&&g(t),e&&e.d(n)}}}function Zt(i,t,e){let{isOpen:n}=t;return i.$$set=s=>{"isOpen"in s&&e(0,n=s.isOpen)},[n]}class jt extends G{constructor(t){super(),Y(this,t,Zt,Ft,Q,{isOpen:0})}}function Kt(i){let t,e,n,s,a,l='<i class="fa fa-info-circle" aria-hidden="true"></i>',c,v,u,f,_,M,r,b,T,V,E,x,C,I,D,k,w;return u=new Ot({props:{metronome:i[0]}}),M=new Pt({props:{metronome:i[0]}}),b=new Wt({props:{onNewBPM:i[3]}}),E=new Et({props:{metronome:i[0]}}),I=new qt({props:{metronome:i[0]}}),{c(){t=h("div"),e=h("h3"),n=ut(`Metronome
        `),s=h("span"),a=h("button"),a.innerHTML=l,c=N(),v=h("div"),X(u.$$.fragment),f=N(),_=h("div"),X(M.$$.fragment),r=N(),X(b.$$.fragment),T=N(),V=h("div"),X(E.$$.fragment),x=N(),C=h("div"),X(I.$$.fragment),this.h()},l(p){t=d(p,"DIV",{class:!0});var y=B(t);e=d(y,"H3",{});var O=B(e);n=ht(O,`Metronome
        `),s=d(O,"SPAN",{});var H=B(s);a=d(H,"BUTTON",{"data-svelte-h":!0}),P(a)!=="svelte-13whskn"&&(a.innerHTML=l),H.forEach(g),O.forEach(g),c=S(y),v=d(y,"DIV",{});var j=B(v);tt(u.$$.fragment,j),j.forEach(g),f=S(y),_=d(y,"DIV",{class:!0});var q=B(_);tt(M.$$.fragment,q),r=S(q),tt(b.$$.fragment,q),q.forEach(g),T=S(y),V=d(y,"DIV",{class:!0});var L=B(V);tt(E.$$.fragment,L),L.forEach(g),x=S(y),C=d(y,"DIV",{class:!0});var it=B(C);tt(I.$$.fragment,it),it.forEach(g),y.forEach(g),this.h()},h(){U(a,"position","relative"),m(_,"class","section svelte-1kxlsex"),m(V,"class","section svelte-1kxlsex"),m(C,"class","section svelte-1kxlsex"),m(t,"class","main svelte-1kxlsex")},m(p,y){Z(p,t,y),o(t,e),o(e,n),o(e,s),o(s,a),o(t,c),o(t,v),et(u,v,null),o(t,f),o(t,_),et(M,_,null),o(_,r),et(b,_,null),o(t,T),o(t,V),et(E,V,null),o(t,x),o(t,C),et(I,C,null),D=!0,k||(w=[$(window,"touchstart",i[1]),$(window,"touchend",i[1]),$(a,"click",i[2])],k=!0)},p(p,[y]){const O={};y&1&&(O.metronome=p[0]),u.$set(O);const H={};y&1&&(H.metronome=p[0]),M.$set(H);const j={};y&1&&(j.onNewBPM=p[3]),b.$set(j);const q={};y&1&&(q.metronome=p[0]),E.$set(q);const L={};y&1&&(L.metronome=p[0]),I.$set(L)},i(p){D||(nt(u.$$.fragment,p),nt(M.$$.fragment,p),nt(b.$$.fragment,p),nt(E.$$.fragment,p),nt(I.$$.fragment,p),D=!0)},o(p){st(u.$$.fragment,p),st(M.$$.fragment,p),st(b.$$.fragment,p),st(E.$$.fragment,p),st(I.$$.fragment,p),D=!1},d(p){p&&g(t),ot(u),ot(M),ot(b),ot(E),ot(I),k=!1,dt(w)}}}function Qt(i,t,e){console.log("before creating metronome");let n=new yt(80);return console.log("metronome"),console.log({metronome:n}),xt(()=>{n.stop()}),[n,()=>{console.log("fix audio context"),n.fixAudioContext()},()=>Ct(jt),c=>{e(0,n.tempo=c/n.subdivisionsInBeat,n),e(0,n)}]}class ee extends G{constructor(t){super(),Y(this,t,Qt,Kt,Q,{})}}export{ee as component};
