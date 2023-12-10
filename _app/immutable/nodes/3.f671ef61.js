import{s as tt,f as R,a as O,l as K,g as v,B as G,c as $,h as p,d as u,m as Q,j as B,i as V,D as k,C as j,A as et,E as mt,F as ht}from"../chunks/scheduler.062eb097.js";import{S as nt,i as ot,b as rt,d as it,m as st,a as at,t as lt,e as ct}from"../chunks/index.7dd5eebf.js";import{P as dt}from"../chunks/P5.4142810a.js";const q=Math.PI,E={scale:1,position:0,outerRing:{labels:["B°","F♯°","C♯°","G♯°","D♯°","A♯°","F°","C°","G°","D°","A°","E°"],cellSize:2*q/48,ratio:4,innerDiameter:.82,outerDiameter:1},middleRing:{labels:["Em","Am","Bm","Em","F♯m","Bm","C♯m","F♯m","G♯m","C♯m","D♯m","G♯m","A♯m","E♭m","Fm","B♭m","Cm","Fm","Gm","Cm","Dm","Gm","Am","Dm"],cellSize:2*q/24,ratio:1,innerDiameter:.6,outerDiameter:.82},innerRing:{labels:["C","G","D","A","F♭/E","C♭/B","G♭/F♯","D♭/C♯","A♭/G♯","E♭","B♭","F"],cellSize:2*q/12,ratio:1,innerDiameter:.35,outerDiameter:.6}},M=(t,n)=>{if(t>=0)return t%n;for(;t<0;)t+=n;return t},U=(t,n,o,r,a)=>{if(o<0||o>=n.labels.length)throw new Error(`OOB labelIndex: ${o}`);const{cellSize:l,innerDiameter:c,outerDiameter:s,ratio:x}=n,i=t.createVector();i.x=0,i.y=-s/2;const f=o*l*x;i.rotate(f);const e=l/2,g=[i.copy().rotate(-e).setMag(c),i.copy().rotate(-e).setMag(s),i.copy().setMag(s*1.02),i.copy().rotate(e).setMag(s),i.copy().rotate(e).setMag(c),i.copy().setMag(c*1.02)].map(I=>I.mult(a)),d=i.copy().setMag(c+(s-c)/2).mult(a),m=M(o+r,n.labels.length)*360/n.labels.length;return{vertices:g,center:d,label:n.labels[o],color:`hsb(${m}, 50%, 80%)`,colorHue:m}},X=(t,n)=>{const{scale:o}=n,r=n.innerRing.labels.map((c,s)=>U(t,n.innerRing,s,n.position,o)),a=n.middleRing.labels.map((c,s)=>U(t,n.middleRing,s,n.position*2,o)),l=n.outerRing.labels.map((c,s)=>U(t,n.outerRing,s,n.position,o));return{tilesInnerRing:r,tilesMiddleRing:a,tilesOuterRing:l}},Y=(t,n)=>{t.strokeWeight(2),t.stroke([0,0,0,.5]),t.fill(`hsb(${n.colorHue}, 50%, 70%)`);const[o,r,a,l,c,s]=n.vertices;t.beginShape(),t.vertex(o.x,o.y),t.vertex(r.x,r.y),t.quadraticVertex(a.x,a.y,l.x,l.y),t.vertex(l.x,l.y),t.vertex(c.x,c.y),t.quadraticVertex(s.x,s.y,o.x,o.y),t.endShape(),t.noStroke(),t.fill(0),t.textSize(13),t.text(n.label,n.center.x-t.textWidth(n.label)/2,n.center.y)},ut=(t,n,o,r,a)=>{const l=[o[M(n-1,o.length)],o[M(n,o.length)],o[M(n+1,o.length)],r[M(2*n-1,r.length)],r[M(2*n,r.length)],r[M(2*n+1,r.length)],a[M(n,a.length)]];for(const c of l){t.strokeWeight(3),t.stroke([0,0,0,1]),t.fill(`hsb(${c.colorHue}, 60%, 90%)`);const[s,x,i,f,e,g]=c.vertices;t.beginShape(),t.vertex(s.x,s.y),t.vertex(x.x,x.y),t.quadraticVertex(i.x,i.y,f.x,f.y),t.vertex(f.x,f.y),t.vertex(e.x,e.y),t.quadraticVertex(g.x,g.y,s.x,s.y),t.endShape(),t.noStroke(),t.fill(0),t.textSize(13),t.textStyle(t.BOLD),t.text(c.label,c.center.x-t.textWidth(c.label)/2,c.center.y),t.textStyle(t.NORMAL)}},xt=(t,n,o)=>{const{scale:r}=o;t.textSize(10),t.push(),t.rotate(n*(2*t.PI/12)),t.fill(250),t.circle(0,0,o.innerRing.innerDiameter*2*r),t.fill(0);const a=t.createVector();a.x=0,a.y=-o.innerRing.innerDiameter*r;const l="▲";t.text(l,a.x-t.textWidth(l)/2,a.y*.9);const c="Key";t.text(c,a.x-t.textWidth(c)/2,a.y*.75);const s=t.createVector(),x=["♯","♯♯","♯♯♯","♯♯♯♯","7♭/5♯","6♭/6♯","5♭/7♯","♭♭♭♭","♭♭♭","♭♭","♭"];s.y=-o.innerRing.innerDiameter*.85*r,t.push();for(const F of x)t.rotate(2*t.PI/12),t.text(F,-t.textWidth(F)/2,s.y);t.pop();const i=t.createVector();i.y=-o.innerRing.innerDiameter*1.04*r;const f="I";t.text(f,i.x-t.textWidth(f)/2,i.y);const e=t.createVector();e.y=-o.innerRing.outerDiameter*.9*r;const g="maj7,maj9";t.text(g,e.x-t.textWidth(g)/2,e.y),t.push(),t.rotate(-(2*t.PI)/12);const d="IV";t.text(d,i.x-t.textWidth(d)/2,i.y);const m="maj7,maj9";t.text(m,e.x-t.textWidth(m)/2,e.y),t.pop(),t.push(),t.rotate(2*t.PI/12);const I="V";t.text(I,i.x-t.textWidth(I)/2,i.y);const y="7,9,11,sus4,13";t.text(y,e.x-t.textWidth(y)/2,e.y),t.pop(),i.y=-o.middleRing.innerDiameter*1.02*r,e.y=-o.middleRing.outerDiameter*.95*r;const C="III";t.text(C,i.x-t.textWidth(C)/2,i.y);const b="m7";t.text(b,e.x-t.textWidth(b)/2,e.y),t.push(),t.rotate(-(2*t.PI)/24);const T="II";t.text(T,i.x-t.textWidth(T)/2,i.y);const S="m7,m9";t.text(S,e.x-t.textWidth(S)/2,e.y),t.pop(),t.push();const D="V I";t.rotate(2*t.PI/24),t.text(D,i.x-t.textWidth(D)/2,i.y);const w="m7,m9";t.text(w,e.x-t.textWidth(w)/2,e.y),t.pop();const P="V II°";i.y=-o.outerRing.innerDiameter*1.015*r,e.y=-o.outerRing.outerDiameter*.96*r,t.text(P,i.x-t.textWidth(P)/2,i.y);const W="m7♭5";t.text(W,e.x-t.textWidth(W)/2,e.y)},Z=(t,n)=>{if(n){t.position--,t.innerRing.labels.unshift(t.innerRing.labels.pop()),t.middleRing.labels.unshift(t.middleRing.labels.pop()),t.middleRing.labels.unshift(t.middleRing.labels.pop()),t.outerRing.labels.unshift(t.outerRing.labels.pop());return}t.position++,t.innerRing.labels.push(t.innerRing.labels.shift()),t.middleRing.labels.push(t.middleRing.labels.shift()),t.middleRing.labels.push(t.middleRing.labels.shift()),t.outerRing.labels.push(t.outerRing.labels.shift())};function ft(t){let n,o="Chord wheel",r,a,l,c,s,x,i,f,e,g,d,m,I,y,C,b,T="On mobile you can also swipe left/right to rotate the shape and up/down to rotate the wheel",S,D,w=`This page is an implementation of <a href="https://chordwheel.com/" target="_blank" rel="noopener noreferrer">Jim Fleser&#39;s Chord Wheel</a>
    it is intended for my personal use. If you are using this implementation you should definitely
    <a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=16&amp;Itemid=4" target="_blank" rel="noopener noreferrer">buy his book</a> or
    <a href="https://apps.apple.com/us/app/the-chord-wheel/id444931977" target="_blank" rel="noopener noreferrer">buy his app</a> (which is much more complete than this page).`,P,W,F=`This tool only works for songs in major keys. 
    <ul><li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=5&amp;Itemid=17" target="_blank" rel="noopener noreferrer">Analyzing songs and compositional styles</a></li> <li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=8:soloing-and-improvisation&amp;catid=8:using-the-chordwheel&amp;Itemid=8" target="_blank" rel="noopener noreferrer">Soloing and improvisation</a></li> <li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=9&amp;Itemid=5" target="_blank" rel="noopener noreferrer">Transpositions</a></li></ul>`,z,N,J;return l=new dt({props:{sketch:t[3]}}),{c(){n=R("h3"),n.textContent=o,r=O(),a=R("div"),rt(l.$$.fragment),c=O(),s=R("div"),x=R("p"),i=R("button"),f=K(`
        Shape rotation
        `),e=R("button"),g=O(),d=R("p"),m=R("button"),I=K(`
        Wheel rotation
        `),y=R("button"),C=O(),b=R("p"),b.textContent=T,S=O(),D=R("div"),D.innerHTML=w,P=O(),W=R("div"),W.innerHTML=F,this.h()},l(h){n=v(h,"H3",{"data-svelte-h":!0}),G(n)!=="svelte-11nfyxx"&&(n.textContent=o),r=$(h),a=v(h,"DIV",{class:!0});var _=p(a);it(l.$$.fragment,_),_.forEach(u),c=$(h),s=v(h,"DIV",{class:!0});var A=p(s);x=v(A,"P",{});var H=p(x);i=v(H,"BUTTON",{class:!0}),p(i).forEach(u),f=Q(H,`
        Shape rotation
        `),e=v(H,"BUTTON",{class:!0}),p(e).forEach(u),H.forEach(u),g=$(A),d=v(A,"P",{});var L=p(d);m=v(L,"BUTTON",{class:!0}),p(m).forEach(u),I=Q(L,`
        Wheel rotation
        `),y=v(L,"BUTTON",{class:!0}),p(y).forEach(u),L.forEach(u),C=$(A),b=v(A,"P",{"data-svelte-h":!0}),G(b)!=="svelte-98i1j2"&&(b.textContent=T),A.forEach(u),S=$(h),D=v(h,"DIV",{"data-svelte-h":!0}),G(D)!=="svelte-1do95hk"&&(D.innerHTML=w),P=$(h),W=v(h,"DIV",{"data-svelte-h":!0}),G(W)!=="svelte-gtbrys"&&(W.innerHTML=F),this.h()},h(){B(a,"class","d-flex justify-content-center svelte-1vtu5u7"),B(i,"class","fa fa-undo"),B(e,"class","fa fa-repeat"),B(m,"class","fa fa-undo"),B(y,"class","fa fa-repeat"),B(s,"class","justify-content-center svelte-1vtu5u7")},m(h,_){V(h,n,_),V(h,r,_),V(h,a,_),st(l,a,null),V(h,c,_),V(h,s,_),k(s,x),k(x,i),k(x,f),k(x,e),k(s,g),k(s,d),k(d,m),k(d,I),k(d,y),k(s,C),k(s,b),V(h,S,_),V(h,D,_),V(h,P,_),V(h,W,_),z=!0,N||(J=[j(i,"click",t[4]),j(e,"click",t[5]),j(m,"click",t[2]),j(y,"click",t[1])],N=!0)},p:et,i(h){z||(at(l.$$.fragment,h),z=!0)},o(h){lt(l.$$.fragment,h),z=!1},d(h){h&&(u(n),u(r),u(a),u(c),u(s),u(S),u(D),u(P),u(W)),ct(l),N=!1,mt(J)}}}function gt(t,n,o){let r,a,l=0;const c=()=>{Z(E,!0),a=X(r,E)},s=()=>{Z(E,!1),a=X(r,E)},x=e=>{function g(){const m=Math.min(e.windowWidth,e.windowHeight);e.resizeCanvas(m*.8,m*.8),E.scale=m/2*.75,a=X(e,E)}e.setup=()=>{r=e,e.createCanvas(100,100),g(),e.colorMode(e.HSB)},e.draw=()=>{e.background(50),e.translate(e.width/2,e.height/2),a.tilesInnerRing.forEach(m=>Y(e,m)),a.tilesMiddleRing.forEach(m=>Y(e,m)),a.tilesOuterRing.forEach(m=>Y(e,m)),ut(e,l,a.tilesInnerRing,a.tilesMiddleRing,a.tilesOuterRing),xt(e,l,E)},e.keyPressed=()=>{e.keyCode===e.LEFT_ARROW&&o(0,l--,l),e.keyCode===e.RIGHT_ARROW&&o(0,l++,l),e.keyCode===e.UP_ARROW&&s(),e.keyCode===e.DOWN_ARROW&&c()};let d;e.touchMoved=m=>{var T;if(((T=m.target)==null?void 0:T.className)!=="p5Canvas")return;if(m.preventDefault(),!d){d={x:e.mouseX,y:e.mouseY};return}const I=e.mouseX-d.x,y=e.mouseY-d.y,C=Math.abs(I),b=Math.abs(y);C<50&&b<50||(C>b?I<0?o(0,l--,l):o(0,l++,l):y>0?c():s(),d={x:e.mouseX,y:e.mouseY})},e.windowResized=()=>{g()}};return ht(()=>{r==null||r.remove()}),[l,c,s,x,()=>o(0,l-=1),()=>o(0,l+=1)]}class yt extends nt{constructor(n){super(),ot(this,n,gt,ft,tt,{})}}function bt(t){let n,o;return n=new yt({}),{c(){rt(n.$$.fragment)},l(r){it(n.$$.fragment,r)},m(r,a){st(n,r,a),o=!0},p:et,i(r){o||(at(n.$$.fragment,r),o=!0)},o(r){lt(n.$$.fragment,r),o=!1},d(r){ct(n,r)}}}class It extends nt{constructor(n){super(),ot(this,n,null,bt,tt,{})}}export{It as component};