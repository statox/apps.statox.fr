var o=Object.defineProperty;var h=(i,t,a)=>t in i?o(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var s=(i,t,a)=>h(i,typeof t!="symbol"?t+"":t,a);class r{constructor(){s(this,"taps");s(this,"keptDuration");s(this,"bpm");s(this,"lastTap");s(this,"groundZero");s(this,"counter");s(this,"previousTap");this.taps=[],this.keptDuration=1e3*15,this.bpm=0,this.lastTap=0,this.groundZero=0,this.counter=0,this.previousTap=0}reset(){this.taps=[],this.bpm=0,this.lastTap=0}addBeat(){const t=Date.now();for(this.taps.push(Date.now());this.taps.length&&this.taps[0]<t-this.keptDuration;)this.taps.shift();this.computeBPM()}computeBPM(){const t=Date.now();this.lastTap===0&&(this.groundZero=t,this.counter=0),this.lastTap=t;const a=t-this.previousTap;this.previousTap=this.lastTap;const p=this.lastTap-this.groundZero;p!==0&&(this.bpm=Math.round(6e4*this.counter/p)),this.counter++,a>3e3&&(this.lastTap=0)}}export{r as T};
