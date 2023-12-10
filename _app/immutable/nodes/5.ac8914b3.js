import{s as ce,f as $,a as j,l as J,g as C,h as S,c as A,m as U,d as u,j as W,i as I,D as b,C as ge,n as Ce,F as lt,e as ie,B as ue,A as Y,I as Z,R as we,S as se,E as nt,P as ye,T as $e}from"../chunks/scheduler.062eb097.js";import{S as me,i as _e,b as ve,d as pe,m as be,a as X,t as ee,e as ke,g as et,c as tt}from"../chunks/index.7dd5eebf.js";import{e as H}from"../chunks/each.a3b5a397.js";import{P as rt}from"../chunks/P5.ef98b533.js";const V=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],Se=n=>{if(n<1||n>7)throw new Error(`Unkown degree ${n}`);return["I","II","III","IV","V","VI","VII"][n-1]};function ot(n){let e,r,t,l,o,a,h,d;return r=new rt({props:{sketch:n[1]}}),{c(){e=$("div"),ve(r.$$.fragment),t=j(),l=$("button"),o=J(n[0]),this.h()},l(v){e=C(v,"DIV",{class:!0});var T=S(e);pe(r.$$.fragment,T),t=A(T),l=C(T,"BUTTON",{});var x=S(l);o=U(x,n[0]),x.forEach(u),T.forEach(u),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(v,T){I(v,e,T),be(r,e,null),b(e,t),b(e,l),b(l,o),a=!0,h||(d=ge(l,"click",n[4]),h=!0)},p(v,[T]){(!a||T&1)&&Ce(o,v[0])},i(v){a||(X(r.$$.fragment,v),a=!0)},o(v){ee(r.$$.fragment,v),a=!1},d(v){v&&u(e),ke(r),h=!1,d()}}}const Me=15,ae=30;function st(n,e,r){let t,l="name",{notesToDisplay:o}=e;const a=["E","A","D","G","B","E"],h=a.map(i=>{const m=V.indexOf(i);if(m===-1)throw new Error(`Base ${i} not found`);const p=[i];for(let _=1;_<Me;_++){const g=V[(m+_)%V.length];p.push(g)}return p}),d=i=>{const m=[80,70,60,150],p=i.height/6;for(let c=0;c<h.length;c++){const k=a[c],B=p*c+p/2;i.strokeWeight(1),i.stroke(m),i.noFill(),i.line(ae,B,i.width,B),i.noStroke(),i.fill(m),i.text(k,5,i.height-B+i.textSize()/2)}i.strokeWeight(5),i.stroke(m),i.noFill(),i.line(ae,p/2,ae,i.height-p/2),i.strokeWeight(1);const _=i.width/h[0].length;for(let c=1;c<Me;c++){const k=ae+_*c;i.line(k,p/2,k,i.height-p/2)}const g=[3,5,7,9,15];for(const c of g){let{x:k,y:B}=x({string:2,fret:c});B-=p/2,i.fill(m),i.circle(k,B,10)}const y=[1,3];for(const c of y){let{x:k,y:B}=x({string:c,fret:12});B-=p/2,i.fill(m),i.circle(k,B,10)}},v=(i,m,p)=>{if(p==="name")return m;const _=i.indexOf(m);if(_===-1)throw new Error("note not in scale");return Se(_+1)},T=i=>{for(let m=0;m<6;m++){const p=h[m];for(let _=0;_<p.length;_++){const g=p[_];if(!o.includes(g))continue;const y={string:m,fret:_},{x:c,y:k}=x(y);o.indexOf(g)===0?i.fill([250,80,80]):i.fill("black"),i.circle(c,k,20),i.noStroke(),i.fill("white");const B=v(o,g,l);i.text(B,c-i.textWidth(B)/2,k+i.textSize()/2)}}},x=i=>{const{string:m,fret:p}=i,_=t.height/6,g=_*(5-m)+_/2;if(p===0)return{x:ae,y:g};const y=t.width/h[0].length;return{x:ae+y*(p-1)+y*.5,y:g}},z=i=>{i.setup=()=>{r(3,t=i),i.createCanvas(900,300),i.textStyle(i.BOLD)},i.draw=()=>{i.background([200,190,170]),d(i),T(i),i.noLoop()}};lt(()=>{t==null||t.remove()});const N=()=>r(0,l=l==="name"?"degree":"name");return n.$$set=i=>{"notesToDisplay"in i&&r(2,o=i.notesToDisplay)},n.$$.update=()=>{n.$$.dirty&13&&(o||l)&&(t==null||t.draw())},[l,z,o,t,N]}class at extends me{constructor(e){super(),_e(this,e,st,ot,ce,{notesToDisplay:2})}}const Pe=[{name:"Axis progression",examples:["Let it be","Take on me","Someone like you","Don't step believin'","Can you feel the love tonight","Let it go"],chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:4}]},{name:"Other axis progression",examples:["Numb - Linkin Park","Kids - MGMT","Africa - Toto","Rivers flow in you (piano thingy)","Complicated - Avril Lavigne","Grenade","San Francisco","Save tonight"],chords:[{degree:6,minor:!0},{degree:4},{degree:1},{degree:5}]},{name:"Third axis progression",examples:["What's my age again?","Umbrella - Rihanna","Dragosta Din Tei","Boulevard of broken dreams (chorus)","Alejandro - Lady Gaga"],chords:[{degree:4},{degree:1},{degree:5},{degree:6,minor:!0}]},{name:"Andalusian cadence",examples:["Hit the road Jack","Good vibrations - The Beach boys","Happy together","Vanina"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:5}]},{name:"Aeolian vamp",examples:["Rolling in the deep","All along the watchtower","Stairway to heaven","My hear will go on","Somebody that I used to know"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:7,flat:!0}]},{name:"Doo-Woop change",examples:["I will always love you","Crocodile rock","Let's twist again","Baby - Justin Bieber"],chords:[{degree:1},{degree:6,minor:!0},{degree:4},{degree:5}]},{name:"Major scale vamp",examples:["Your body is a wonderland","All the small things - Blink 182"],chords:[{degree:1},{degree:5},{degree:4},{degree:5}]},{name:"Mixolydyan vamp",examples:["Hey Jude (Lalalalaa)","Sympathy for the devil","Sweet child o' mine","Royals - Lorde","Sweet home Alabama"],chords:[{degree:1},{degree:7,flat:!0},{degree:4},{degree:5}]},{name:"pachelbel's cannon",chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:3,minor:!0},{degree:4},{degree:1},{degree:4},{degree:5}]},{name:"Plagal cascade",examples:["Wonderwall","Boulevard of broken dreams (couplet)","Mad world","Pumped up kids","Radioactive - Imagine Dragons"],chords:[{degree:1,minor:!0},{degree:3,flat:!0},{degree:7,flat:!0},{degree:4}]},{name:`"Can't stop" progression`,examples:["Can't stop","Cant't hold us - Mackelmore & Ryan Lewis"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:5,minor:!0},{degree:6,flat:!0}]},{name:'"Closing time" progression',examples:["Closing time - Semisonic","SOS - ABBA","Believe - Cher","All star (Shrek)"],chords:[{degree:1},{degree:5},{degree:2,minor:!0},{degree:4}]},{name:'"More than a feeling" progression',examples:["More than a feeling","Mr Brightside - The Killers"],chords:[{degree:1},{degree:4},{degree:6,minor:!0},{degree:5}]},{name:"Classic blues slow change",chords:[{degree:1},{degree:1},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic blues quick change",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic rock",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:5},{degree:1},{degree:1}]}];function Re(n,e,r){const t=n.slice();return t[3]=e[r],t}function Oe(n,e,r){const t=n.slice();return t[6]=e[r],t}function ze(n,e,r){const t=n.slice();return t[6]=e[r],t}function it(n){let e,r,t="Examples:",l,o=n[3].examples.join(", ")+"",a;return{c(){e=$("span"),r=$("b"),r.textContent=t,l=j(),a=J(o)},l(h){e=C(h,"SPAN",{});var d=S(e);r=C(d,"B",{"data-svelte-h":!0}),ue(r)!=="svelte-1jvpsk3"&&(r.textContent=t),l=A(d),a=U(d,o),d.forEach(u)},m(h,d){I(h,e,d),b(e,r),b(e,l),b(e,a)},d(h){h&&u(e)}}}function He(n){let e,r=n[0](n[6])+"",t;return{c(){e=$("th"),t=J(r),this.h()},l(l){e=C(l,"TH",{class:!0});var o=S(e);t=U(o,r),o.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(l,o){I(l,e,o),b(e,t)},p:Y,d(l){l&&u(e)}}}function Fe(n){let e,r=n[1](n[6])+"",t;return{c(){e=$("td"),t=J(r),this.h()},l(l){e=C(l,"TD",{class:!0});var o=S(e);t=U(o,r),o.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(l,o){I(l,e,o),b(e,t)},p:Y,d(l){l&&u(e)}}}function Ge(n){let e,r,t=n[3].name+"",l,o,a,h,d,v,T,x,z,N=n[3].examples&&it(n),i=H(n[3].chords),m=[];for(let g=0;g<i.length;g+=1)m[g]=He(ze(n,i,g));let p=H(n[3].chords),_=[];for(let g=0;g<p.length;g+=1)_[g]=Fe(Oe(n,p,g));return{c(){e=$("div"),r=$("h4"),l=J(t),o=j(),N&&N.c(),a=j(),h=$("table"),d=$("tr");for(let g=0;g<m.length;g+=1)m[g].c();v=j(),T=$("tr");for(let g=0;g<_.length;g+=1)_[g].c();x=j(),z=$("br")},l(g){e=C(g,"DIV",{});var y=S(e);r=C(y,"H4",{});var c=S(r);l=U(c,t),c.forEach(u),o=A(y),N&&N.l(y),a=A(y),h=C(y,"TABLE",{});var k=S(h);d=C(k,"TR",{});var B=S(d);for(let G=0;G<m.length;G+=1)m[G].l(B);B.forEach(u),v=A(k),T=C(k,"TR",{});var q=S(T);for(let G=0;G<_.length;G+=1)_[G].l(q);q.forEach(u),k.forEach(u),y.forEach(u),x=A(g),z=C(g,"BR",{})},m(g,y){I(g,e,y),b(e,r),b(r,l),b(e,o),N&&N.m(e,null),b(e,a),b(e,h),b(h,d);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(d,null);b(h,v),b(h,T);for(let c=0;c<_.length;c+=1)_[c]&&_[c].m(T,null);I(g,x,y),I(g,z,y)},p(g,y){if(y&1){i=H(g[3].chords);let c;for(c=0;c<i.length;c+=1){const k=ze(g,i,c);m[c]?m[c].p(k,y):(m[c]=He(k),m[c].c(),m[c].m(d,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=i.length}if(y&2){p=H(g[3].chords);let c;for(c=0;c<p.length;c+=1){const k=Oe(g,p,c);_[c]?_[c].p(k,y):(_[c]=Fe(k),_[c].c(),_[c].m(T,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=p.length}},d(g){g&&(u(e),u(x),u(z)),N&&N.d(),Z(m,g),Z(_,g)}}}function ct(n){let e,r="Progressions",t,l,o=H(Pe),a=[];for(let h=0;h<o.length;h+=1)a[h]=Ge(Re(n,o,h));return{c(){e=$("h3"),e.textContent=r,t=j();for(let h=0;h<a.length;h+=1)a[h].c();l=ie()},l(h){e=C(h,"H3",{"data-svelte-h":!0}),ue(e)!=="svelte-xukbl8"&&(e.textContent=r),t=A(h);for(let d=0;d<a.length;d+=1)a[d].l(h);l=ie()},m(h,d){I(h,e,d),I(h,t,d);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(h,d);I(h,l,d)},p(h,[d]){if(d&3){o=H(Pe);let v;for(v=0;v<o.length;v+=1){const T=Re(h,o,v);a[v]?a[v].p(T,d):(a[v]=Ge(T),a[v].c(),a[v].m(l.parentNode,l))}for(;v<a.length;v+=1)a[v].d(1);a.length=o.length}},i:Y,o:Y,d(h){h&&(u(e),u(t),u(l)),Z(a,h)}}}function ht(n,e,r){let{scaleNotes:t=[]}=e;const l=a=>{let h=Se(a.degree);return a.minor&&(h=h.toLowerCase()),a.flat&&(h="b"+h),h},o=a=>{const h=t[a.degree-1];let d=V.indexOf(h);a.flat&&(d--,d===-1&&(d=V.length-1));let v=V[d];return a.minor&&(v+="m"),v};return n.$$set=a=>{"scaleNotes"in a&&r(2,t=a.scaleNotes)},[l,o,t]}class ft extends me{constructor(e){super(),_e(this,e,ht,ct,ce,{scaleNotes:2})}}function We(n,e,r){const t=n.slice();t[12]=e[r],t[15]=r;const l=t[1].chords[t[15]];return t[13]=l,t}function Ve(n,e,r){const t=n.slice();return t[16]=e[r],t[15]=r,t}function Je(n,e,r){const t=n.slice();return t[2]=e[r],t}function Ue(n,e,r){const t=n.slice();return t[1]=e[r],t}function dt(n,e,r){const t=n.slice();return t[12]=e[r],t}function gt(n){let e,r,t;return{c(){e=$("option"),r=J(n[12]),t=j(),this.h()},l(l){e=C(l,"OPTION",{});var o=S(e);r=U(o,n[12]),t=A(o),o.forEach(u),this.h()},h(){e.__value=n[12],ye(e,e.__value)},m(l,o){I(l,e,o),b(e,r),b(e,t)},p:Y,d(l){l&&u(e)}}}function qe(n){let e,r=n[1].name+"",t,l;return{c(){e=$("option"),t=J(r),l=j(),this.h()},l(o){e=C(o,"OPTION",{});var a=S(e);t=U(a,r),l=A(a),a.forEach(u),this.h()},h(){e.__value=n[1],ye(e,e.__value)},m(o,a){I(o,e,a),b(e,t),b(e,l)},p:Y,d(o){o&&u(e)}}}function Ke(n){let e,r=n[2].name+"",t,l;return{c(){e=$("option"),t=J(r),l=j(),this.h()},l(o){e=C(o,"OPTION",{});var a=S(e);t=U(a,r),l=A(a),a.forEach(u),this.h()},h(){e.__value=n[2],ye(e,e.__value)},m(o,a){I(o,e,a),b(e,t),b(e,l)},p:Y,d(o){o&&u(e)}}}function Xe(n){let e,r=n[6](n[15]+1,n[16])+"",t;return{c(){e=$("th"),t=J(r),this.h()},l(l){e=C(l,"TH",{class:!0});var o=S(e);t=U(o,r),o.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(l,o){I(l,e,o),b(e,t)},p(l,o){o&2&&r!==(r=l[6](l[15]+1,l[16])+"")&&Ce(t,r)},d(l){l&&u(e)}}}function Ye(n){let e,r=n[7](n[12],n[13])+"",t;return{c(){e=$("td"),t=J(r),this.h()},l(l){e=C(l,"TD",{class:!0});var o=S(e);t=U(o,r),o.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(l,o){I(l,e,o),b(e,t)},p(l,o){o&10&&r!==(r=l[7](l[12],l[13])+"")&&Ce(t,r)},d(l){l&&u(e)}}}function Qe(n){let e=n[3],r,t,l=Ze(n);return{c(){l.c(),r=ie()},l(o){l.l(o),r=ie()},m(o,a){l.m(o,a),I(o,r,a),t=!0},p(o,a){a&8&&ce(e,e=o[3])?(et(),ee(l,1,1,Y),tt(),l=Ze(o),l.c(),X(l,1),l.m(r.parentNode,r)):l.p(o,a)},i(o){t||(X(l),t=!0)},o(o){ee(l),t=!1},d(o){o&&u(r),l.d(o)}}}function Ze(n){let e,r;return e=new ft({props:{scaleNotes:n[3]}}),{c(){ve(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,l){be(e,t,l),r=!0},p(t,l){const o={};l&8&&(o.scaleNotes=t[3]),e.$set(o)},i(t){r||(X(e.$$.fragment,t),r=!0)},o(t){ee(e.$$.fragment,t),r=!1},d(t){ke(e,t)}}}function ut(n){let e,r="Scales",t,l,o,a='<th class="svelte-14ztni8"><label for="tonicInput">Tonic</label></th> <th class="svelte-14ztni8"><label for="scaleInput">Scale</label></th> <th class="svelte-14ztni8"><label for="modeInput">mode</label></th>',h,d,v,T,x,z,N,i,m,p,_,g,y,c,k,B,q,G,Q,he,Ee=["Major","Natural minor"].includes(n[1].name),te,fe,Te,Ie,Ne=H(V),K=[];for(let s=0;s<Ne.length;s+=1)K[s]=gt(dt(n,Ne,s));let le=H(n[4]),M=[];for(let s=0;s<le.length;s+=1)M[s]=qe(Ue(n,le,s));let ne=H(n[5]),P=[];for(let s=0;s<ne.length;s+=1)P[s]=Ke(Je(n,ne,s));let re=H(n[1].chords),R=[];for(let s=0;s<re.length;s+=1)R[s]=Xe(Ve(n,re,s));let oe=H(n[3]),O=[];for(let s=0;s<oe.length;s+=1)O[s]=Ye(We(n,oe,s));Q=new at({props:{notesToDisplay:n[3]}});let D=Ee&&Qe(n);return{c(){e=$("h2"),e.textContent=r,t=j(),l=$("table"),o=$("tr"),o.innerHTML=a,h=j(),d=$("tr"),v=$("td"),T=$("select");for(let s=0;s<K.length;s+=1)K[s].c();x=j(),z=$("td"),N=$("select");for(let s=0;s<M.length;s+=1)M[s].c();i=j(),m=$("td"),p=$("select");for(let s=0;s<P.length;s+=1)P[s].c();_=j(),g=$("br"),y=j(),c=$("table"),k=$("tr");for(let s=0;s<R.length;s+=1)R[s].c();B=j(),q=$("tr");for(let s=0;s<O.length;s+=1)O[s].c();G=j(),ve(Q.$$.fragment),he=j(),D&&D.c(),te=ie(),this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),ue(e)!=="svelte-b2sc71"&&(e.textContent=r),t=A(s),l=C(s,"TABLE",{});var w=S(l);o=C(w,"TR",{"data-svelte-h":!0}),ue(o)!=="svelte-allvrg"&&(o.innerHTML=a),h=A(w),d=C(w,"TR",{});var E=S(d);v=C(E,"TD",{class:!0});var f=S(v);T=C(f,"SELECT",{id:!0});var F=S(T);for(let L=0;L<K.length;L+=1)K[L].l(F);F.forEach(u),f.forEach(u),x=A(E),z=C(E,"TD",{class:!0});var De=S(z);N=C(De,"SELECT",{id:!0});var Be=S(N);for(let L=0;L<M.length;L+=1)M[L].l(Be);Be.forEach(u),De.forEach(u),i=A(E),m=C(E,"TD",{class:!0});var Le=S(m);p=C(Le,"SELECT",{id:!0});var je=S(p);for(let L=0;L<P.length;L+=1)P[L].l(je);je.forEach(u),Le.forEach(u),E.forEach(u),w.forEach(u),_=A(s),g=C(s,"BR",{}),y=A(s),c=C(s,"TABLE",{});var de=S(c);k=C(de,"TR",{});var Ae=S(k);for(let L=0;L<R.length;L+=1)R[L].l(Ae);Ae.forEach(u),B=A(de),q=C(de,"TR",{});var xe=S(q);for(let L=0;L<O.length;L+=1)O[L].l(xe);xe.forEach(u),de.forEach(u),G=A(s),pe(Q.$$.fragment,s),he=A(s),D&&D.l(s),te=ie(),this.h()},h(){W(T,"id","tonicInput"),n[0]===void 0&&we(()=>n[8].call(T)),W(v,"class","svelte-14ztni8"),W(N,"id","scaleInput"),n[1]===void 0&&we(()=>n[9].call(N)),W(z,"class","svelte-14ztni8"),W(p,"id","modeInput"),n[2]===void 0&&we(()=>n[10].call(p)),W(m,"class","svelte-14ztni8")},m(s,w){I(s,e,w),I(s,t,w),I(s,l,w),b(l,o),b(l,h),b(l,d),b(d,v),b(v,T);for(let E=0;E<K.length;E+=1)K[E]&&K[E].m(T,null);se(T,n[0],!0),b(d,x),b(d,z),b(z,N);for(let E=0;E<M.length;E+=1)M[E]&&M[E].m(N,null);se(N,n[1],!0),b(d,i),b(d,m),b(m,p);for(let E=0;E<P.length;E+=1)P[E]&&P[E].m(p,null);se(p,n[2],!0),I(s,_,w),I(s,g,w),I(s,y,w),I(s,c,w),b(c,k);for(let E=0;E<R.length;E+=1)R[E]&&R[E].m(k,null);b(c,B),b(c,q);for(let E=0;E<O.length;E+=1)O[E]&&O[E].m(q,null);I(s,G,w),be(Q,s,w),I(s,he,w),D&&D.m(s,w),I(s,te,w),fe=!0,Te||(Ie=[ge(T,"change",n[8]),ge(N,"change",n[9]),ge(p,"change",n[10])],Te=!0)},p(s,[w]){if(w&1&&se(T,s[0]),w&16){le=H(s[4]);let f;for(f=0;f<le.length;f+=1){const F=Ue(s,le,f);M[f]?M[f].p(F,w):(M[f]=qe(F),M[f].c(),M[f].m(N,null))}for(;f<M.length;f+=1)M[f].d(1);M.length=le.length}if(w&18&&se(N,s[1]),w&32){ne=H(s[5]);let f;for(f=0;f<ne.length;f+=1){const F=Je(s,ne,f);P[f]?P[f].p(F,w):(P[f]=Ke(F),P[f].c(),P[f].m(p,null))}for(;f<P.length;f+=1)P[f].d(1);P.length=ne.length}if(w&36&&se(p,s[2]),w&66){re=H(s[1].chords);let f;for(f=0;f<re.length;f+=1){const F=Ve(s,re,f);R[f]?R[f].p(F,w):(R[f]=Xe(F),R[f].c(),R[f].m(k,null))}for(;f<R.length;f+=1)R[f].d(1);R.length=re.length}if(w&138){oe=H(s[3]);let f;for(f=0;f<oe.length;f+=1){const F=We(s,oe,f);O[f]?O[f].p(F,w):(O[f]=Ye(F),O[f].c(),O[f].m(q,null))}for(;f<O.length;f+=1)O[f].d(1);O.length=oe.length}const E={};w&8&&(E.notesToDisplay=s[3]),Q.$set(E),w&2&&(Ee=["Major","Natural minor"].includes(s[1].name)),Ee?D?(D.p(s,w),w&2&&X(D,1)):(D=Qe(s),D.c(),X(D,1),D.m(te.parentNode,te)):D&&(et(),ee(D,1,1,()=>{D=null}),tt())},i(s){fe||(X(Q.$$.fragment,s),X(D),fe=!0)},o(s){ee(Q.$$.fragment,s),ee(D),fe=!1},d(s){s&&(u(e),u(t),u(l),u(_),u(g),u(y),u(c),u(G),u(he),u(te)),Z(K,s),Z(M,s),Z(P,s),Z(R,s),Z(O,s),ke(Q,s),D&&D.d(s),Te=!1,nt(Ie)}}}function mt(n,e,r){const t=[{name:"Major",intervals:[2,2,1,2,2,2,1],chords:["major","minor","minor","diminished","major","minor","major"]},{name:"Natural minor",intervals:[2,1,2,2,1,2,2],chords:["minor","diminished","major","minor","major","major","minor"]},{name:"Pentatonic major",intervals:[2,2,3,2,3],chords:["major","minor","minor","major","minor"]},{name:"Pentatonic minor",intervals:[3,2,2,3,2],chords:["minor","major","minor","major","major"]}],l=[{name:"Ionian",degree:1},{name:"Dorian",degree:2},{name:"Phrygian",degree:3},{name:"Lydian",degree:4},{name:"Mixolydian",degree:5},{name:"Aeolian",degree:6},{name:"Locrian",degree:7}];let o="C",a=t[0],h=l[0],d=[];const v=(m,p,_)=>{const{intervals:g}=p;r(3,d=[m]);const y=V.indexOf(m);if(y===-1)throw new Error(`Tonic ${m} not found`);let c=y;for(const k of g)c=(c+k)%V.length,d.push(V[c]);d.pop();for(let k=1;k<_.degree;k++)d.push(d.shift())},T=(m,p)=>{let _=Se(m);return p==="minor"?_=_.toLowerCase():p==="diminished"&&(_+="°"),_},x=(m,p)=>{let _=m;return p==="minor"?_+="m":p==="diminished"&&(_+="°"),_};function z(){o=$e(this),r(0,o)}function N(){a=$e(this),r(1,a),r(4,t)}function i(){h=$e(this),r(2,h),r(5,l)}return n.$$.update=()=>{n.$$.dirty&7&&v(o,a,h)},[o,a,h,d,t,l,T,x,z,N,i]}class _t extends me{constructor(e){super(),_e(this,e,mt,ut,ce,{})}}function vt(n){let e,r;return e=new _t({}),{c(){ve(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,l){be(e,t,l),r=!0},p:Y,i(t){r||(X(e.$$.fragment,t),r=!0)},o(t){ee(e.$$.fragment,t),r=!1},d(t){ke(e,t)}}}class Tt extends me{constructor(e){super(),_e(this,e,null,vt,ce,{})}}export{Tt as component};
