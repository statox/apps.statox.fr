import{s as tt,f as v,a as p,l as K,g as k,B as z,c as $,h as T,d as u,m as Q,j as B,i as S,D as I,C as G,A as et,E as mt,F as dt}from"../chunks/scheduler.H7lw1MZO.js";import{S as nt,i as ot,b as rt,d as it,m as st,a as at,t as lt,e as ct}from"../chunks/index.bhYHpPrV.js";import{P as ht}from"../chunks/P5.W_fGVgvv.js";const q=Math.PI,M={scale:1,position:0,outerRing:{labels:["B°","F♯°","C♯°","G♯°","D♯°","A♯°","F°","C°","G°","D°","A°","E°"],cellSize:2*q/48,ratio:4,innerDiameter:.82,outerDiameter:1},middleRing:{labels:["Em","Am","Bm","Em","F♯m","Bm","C♯m","F♯m","G♯m","C♯m","D♯m","G♯m","A♯m","E♭m","Fm","B♭m","Cm","Fm","Gm","Cm","Dm","Gm","Am","Dm"],cellSize:2*q/24,ratio:1,innerDiameter:.6,outerDiameter:.82},innerRing:{labels:["C","G","D","A","F♭/E","C♭/B","G♭/F♯","D♭/C♯","A♭/G♯","E♭","B♭","F"],cellSize:2*q/12,ratio:1,innerDiameter:.35,outerDiameter:.6}},V=(t,n)=>{if(t>=0)return t%n;for(;t<0;)t+=n;return t},U=(t,n,o,r,a)=>{if(o<0||o>=n.labels.length)throw new Error(`OOB labelIndex: ${o}`);const{cellSize:l,innerDiameter:c,outerDiameter:s,ratio:x}=n,i=t.createVector();i.x=0,i.y=-s/2;const f=o*l*x;i.rotate(f);const e=l/2,g=[i.copy().rotate(-e).setMag(c),i.copy().rotate(-e).setMag(s),i.copy().setMag(s*1.02),i.copy().rotate(e).setMag(s),i.copy().rotate(e).setMag(c),i.copy().setMag(c*1.02)].map(y=>y.mult(a)),h=i.copy().setMag(c+(s-c)/2).mult(a),m=V(o+r,n.labels.length)*360/n.labels.length;return{vertices:g,center:h,label:n.labels[o],color:`hsb(${m}, 50%, 80%)`,colorHue:m}},X=(t,n)=>{const{scale:o}=n,r=n.innerRing.labels.map((c,s)=>U(t,n.innerRing,s,n.position,o)),a=n.middleRing.labels.map((c,s)=>U(t,n.middleRing,s,n.position*2,o)),l=n.outerRing.labels.map((c,s)=>U(t,n.outerRing,s,n.position,o));return{tilesInnerRing:r,tilesMiddleRing:a,tilesOuterRing:l}},Y=(t,n)=>{t.strokeWeight(2),t.stroke([0,0,0,.5]),t.fill(`hsb(${n.colorHue}, 50%, 70%)`);const[o,r,a,l,c,s]=n.vertices;t.beginShape(),t.vertex(o.x,o.y),t.vertex(r.x,r.y),t.quadraticVertex(a.x,a.y,l.x,l.y),t.vertex(l.x,l.y),t.vertex(c.x,c.y),t.quadraticVertex(s.x,s.y,o.x,o.y),t.endShape(),t.noStroke(),t.fill(0),t.textSize(13),t.text(n.label,n.center.x-t.textWidth(n.label)/2,n.center.y)},ut=(t,n,o,r,a)=>{const l=[o[V(n-1,o.length)],o[V(n,o.length)],o[V(n+1,o.length)],r[V(2*n-1,r.length)],r[V(2*n,r.length)],r[V(2*n+1,r.length)],a[V(n,a.length)]];for(const c of l){t.strokeWeight(3),t.stroke([0,0,0,1]),t.fill(`hsb(${c.colorHue}, 60%, 90%)`);const[s,x,i,f,e,g]=c.vertices;t.beginShape(),t.vertex(s.x,s.y),t.vertex(x.x,x.y),t.quadraticVertex(i.x,i.y,f.x,f.y),t.vertex(f.x,f.y),t.vertex(e.x,e.y),t.quadraticVertex(g.x,g.y,s.x,s.y),t.endShape(),t.noStroke(),t.fill(0),t.textSize(13),t.textStyle(t.BOLD),t.text(c.label,c.center.x-t.textWidth(c.label)/2,c.center.y),t.textStyle(t.NORMAL)}},xt=(t,n,o)=>{const{scale:r}=o;t.textSize(10),t.push(),t.rotate(n*(2*t.PI/12)),t.fill(250),t.circle(0,0,o.innerRing.innerDiameter*2*r),t.fill(0);const a=t.createVector();a.x=0,a.y=-o.innerRing.innerDiameter*r;const l="▲";t.text(l,a.x-t.textWidth(l)/2,a.y*.9);const c="Key";t.text(c,a.x-t.textWidth(c)/2,a.y*.75);const s=t.createVector(),x=["♯","♯♯","♯♯♯","♯♯♯♯","7♭/5♯","6♭/6♯","5♭/7♯","♭♭♭♭","♭♭♭","♭♭","♭"];s.y=-o.innerRing.innerDiameter*.85*r,t.push();for(const F of x)t.rotate(2*t.PI/12),t.text(F,-t.textWidth(F)/2,s.y);t.pop();const i=t.createVector();i.y=-o.innerRing.innerDiameter*1.04*r;const f="I";t.text(f,i.x-t.textWidth(f)/2,i.y);const e=t.createVector();e.y=-o.innerRing.outerDiameter*.9*r;const g="maj7,maj9";t.text(g,e.x-t.textWidth(g)/2,e.y),t.push(),t.rotate(-(2*t.PI)/12);const h="IV";t.text(h,i.x-t.textWidth(h)/2,i.y);const m="maj7,maj9";t.text(m,e.x-t.textWidth(m)/2,e.y),t.pop(),t.push(),t.rotate(2*t.PI/12);const y="V";t.text(y,i.x-t.textWidth(y)/2,i.y);const b="7,9,11,sus4,13";t.text(b,e.x-t.textWidth(b)/2,e.y),t.pop(),i.y=-o.middleRing.innerDiameter*1.02*r,e.y=-o.middleRing.outerDiameter*.95*r;const C="III";t.text(C,i.x-t.textWidth(C)/2,i.y);const R="m7";t.text(R,e.x-t.textWidth(R)/2,e.y),t.push(),t.rotate(-(2*t.PI)/24);const E="II";t.text(E,i.x-t.textWidth(E)/2,i.y);const P="m7,m9";t.text(P,e.x-t.textWidth(P)/2,e.y),t.pop(),t.push();const W="V I";t.rotate(2*t.PI/24),t.text(W,i.x-t.textWidth(W)/2,i.y);const w="m7,m9";t.text(w,e.x-t.textWidth(w)/2,e.y),t.pop();const A="V II°";i.y=-o.outerRing.innerDiameter*1.015*r,e.y=-o.outerRing.outerDiameter*.96*r,t.text(A,i.x-t.textWidth(A)/2,i.y);const D="m7♭5";t.text(D,e.x-t.textWidth(D)/2,e.y)},Z=(t,n)=>{if(n){t.position--,t.innerRing.labels.unshift(t.innerRing.labels.pop()),t.middleRing.labels.unshift(t.middleRing.labels.pop()),t.middleRing.labels.unshift(t.middleRing.labels.pop()),t.outerRing.labels.unshift(t.outerRing.labels.pop());return}t.position++,t.innerRing.labels.push(t.innerRing.labels.shift()),t.middleRing.labels.push(t.middleRing.labels.shift()),t.middleRing.labels.push(t.middleRing.labels.shift()),t.outerRing.labels.push(t.outerRing.labels.shift())};function ft(t){let n,o="Chord wheel",r,a,l,c,s,x,i,f,e,g,h,m,y,b,C,R,E="On mobile you can also swipe left/right to rotate the shape and up/down to rotate the wheel",P,W,w=`This page is an implementation of <a href="https://chordwheel.com/" target="_blank" rel="noopener noreferrer">Jim Fleser&#39;s Chord Wheel</a>
    it is intended for my personal use. If you are using this implementation you should definitely
    <a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=16&amp;Itemid=4" target="_blank" rel="noopener noreferrer">buy his book</a>
    or
    <a href="https://apps.apple.com/us/app/the-chord-wheel/id444931977" target="_blank" rel="noopener noreferrer">buy his app</a> (which is much more complete than this page).`,A,D,F=`This tool only works for songs in major keys.
    <ul><li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=5&amp;Itemid=17" target="_blank" rel="noopener noreferrer">Analyzing songs and compositional styles</a></li> <li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=8:soloing-and-improvisation&amp;catid=8:using-the-chordwheel&amp;Itemid=8" target="_blank" rel="noopener noreferrer">Soloing and improvisation</a></li> <li><a href="https://chordwheel.com/index.php?option=com_content&amp;view=article&amp;id=9&amp;Itemid=5" target="_blank" rel="noopener noreferrer">Transpositions</a></li></ul>`,j,N,J;return l=new ht({props:{sketch:t[3]}}),{c(){n=v("h3"),n.textContent=o,r=p(),a=v("div"),rt(l.$$.fragment),c=p(),s=v("div"),x=v("p"),i=v("button"),f=K(`
        Shape rotation
        `),e=v("button"),g=p(),h=v("p"),m=v("button"),y=K(`
        Wheel rotation
        `),b=v("button"),C=p(),R=v("p"),R.textContent=E,P=p(),W=v("div"),W.innerHTML=w,A=p(),D=v("div"),D.innerHTML=F,this.h()},l(d){n=k(d,"H3",{"data-svelte-h":!0}),z(n)!=="svelte-11nfyxx"&&(n.textContent=o),r=$(d),a=k(d,"DIV",{class:!0});var _=T(a);it(l.$$.fragment,_),_.forEach(u),c=$(d),s=k(d,"DIV",{class:!0});var O=T(s);x=k(O,"P",{});var H=T(x);i=k(H,"BUTTON",{class:!0}),T(i).forEach(u),f=Q(H,`
        Shape rotation
        `),e=k(H,"BUTTON",{class:!0}),T(e).forEach(u),H.forEach(u),g=$(O),h=k(O,"P",{});var L=T(h);m=k(L,"BUTTON",{class:!0}),T(m).forEach(u),y=Q(L,`
        Wheel rotation
        `),b=k(L,"BUTTON",{class:!0}),T(b).forEach(u),L.forEach(u),C=$(O),R=k(O,"P",{"data-svelte-h":!0}),z(R)!=="svelte-sorsau"&&(R.textContent=E),O.forEach(u),P=$(d),W=k(d,"DIV",{"data-svelte-h":!0}),z(W)!=="svelte-kvnuke"&&(W.innerHTML=w),A=$(d),D=k(d,"DIV",{"data-svelte-h":!0}),z(D)!=="svelte-qoqln4"&&(D.innerHTML=F),this.h()},h(){B(a,"class","d-flex justify-content-center svelte-8r9jj"),B(i,"class","fa fa-undo"),B(e,"class","fa fa-repeat"),B(m,"class","fa fa-undo"),B(b,"class","fa fa-repeat"),B(s,"class","justify-content-center svelte-8r9jj")},m(d,_){S(d,n,_),S(d,r,_),S(d,a,_),st(l,a,null),S(d,c,_),S(d,s,_),I(s,x),I(x,i),I(x,f),I(x,e),I(s,g),I(s,h),I(h,m),I(h,y),I(h,b),I(s,C),I(s,R),S(d,P,_),S(d,W,_),S(d,A,_),S(d,D,_),j=!0,N||(J=[G(i,"click",t[4]),G(e,"click",t[5]),G(m,"click",t[2]),G(b,"click",t[1])],N=!0)},p:et,i(d){j||(at(l.$$.fragment,d),j=!0)},o(d){lt(l.$$.fragment,d),j=!1},d(d){d&&(u(n),u(r),u(a),u(c),u(s),u(P),u(W),u(A),u(D)),ct(l),N=!1,mt(J)}}}function gt(t,n,o){let r,a,l=0;const c=()=>{Z(M,!0),a=X(r,M)},s=()=>{Z(M,!1),a=X(r,M)},x=e=>{function g(){const m=Math.min(e.windowWidth,e.windowHeight);e.resizeCanvas(m*.8,m*.8),M.scale=m/2*.75,a=X(e,M)}e.setup=()=>{r=e,e.createCanvas(100,100),g(),e.colorMode(e.HSB)},e.draw=()=>{e.background(50),e.translate(e.width/2,e.height/2),a.tilesInnerRing.forEach(m=>Y(e,m)),a.tilesMiddleRing.forEach(m=>Y(e,m)),a.tilesOuterRing.forEach(m=>Y(e,m)),ut(e,l,a.tilesInnerRing,a.tilesMiddleRing,a.tilesOuterRing),xt(e,l,M)},e.keyPressed=m=>{[e.LEFT_ARROW,e.RIGHT_ARROW,e.UP_ARROW,e.DOWN_ARROW].includes(e.keyCode)&&(m.preventDefault(),e.keyCode===e.LEFT_ARROW&&o(0,l--,l),e.keyCode===e.RIGHT_ARROW&&o(0,l++,l),e.keyCode===e.UP_ARROW&&s(),e.keyCode===e.DOWN_ARROW&&c())};let h;e.touchMoved=m=>{if(m.target?.className!=="p5Canvas")return;if(m.preventDefault(),!h){h={x:e.mouseX,y:e.mouseY};return}const y=e.mouseX-h.x,b=e.mouseY-h.y,C=Math.abs(y),R=Math.abs(b);C<50&&R<50||(C>R?y<0?o(0,l--,l):o(0,l++,l):b>0?c():s(),h={x:e.mouseX,y:e.mouseY})},e.windowResized=()=>{g()}};return dt(()=>{r?.remove()}),[l,c,s,x,()=>o(0,l-=1),()=>o(0,l+=1)]}class yt extends nt{constructor(n){super(),ot(this,n,gt,ft,tt,{})}}function bt(t){let n,o;return n=new yt({}),{c(){rt(n.$$.fragment)},l(r){it(n.$$.fragment,r)},m(r,a){st(n,r,a),o=!0},p:et,i(r){o||(at(n.$$.fragment,r),o=!0)},o(r){lt(n.$$.fragment,r),o=!1},d(r){ct(n,r)}}}class kt extends nt{constructor(n){super(),ot(this,n,null,bt,tt,{})}}export{kt as component};
