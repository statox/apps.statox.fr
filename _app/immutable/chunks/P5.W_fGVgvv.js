import{_ as b}from"./preload-helper.0HuHagjb.js";import{s as D,f as S,g as E,h as k,d as m,j as c,i as p,a0 as w,A as _,Q as P,o as j}from"./scheduler.H7lw1MZO.js";import{S as C,i as I}from"./index.bhYHpPrV.js";function A(r){let e,n,s;return{c(){e=S("div"),this.h()},l(a){e=E(a,"DIV",{style:!0,class:!0}),k(e).forEach(m),this.h()},h(){c(e,"style",r[0]),c(e,"class","m-0")},m(a,l){p(a,e,l),n||(s=w(r[1].call(null,e)),n=!0)},p(a,[l]){l&1&&c(e,"style",a[0])},i:_,o:_,d(a){a&&m(e),n=!1,s()}}}function O(r,e){return e.forEach(([n,s])=>r[n]=s),r}function V(r,e,n){let{target:s=void 0}=e,{sketch:a=void 0}=e,{parentDivStyle:l="display: block;"}=e,{debug:o=!1}=e,f;const u=P(),d={ref(){u("ref",s)},instance(){u("instance",f)}};function g(t){return n(2,s=t),{destroy(){n(2,s=void 0)}}}return j(async()=>{const t=await b(()=>import("./p5.min.ZBgcNSWM.js").then(i=>i.p),__vite__mapDeps([0,1]),import.meta.url),{default:y}=t,h=Object.entries(t).filter(([i,v])=>v instanceof Function&&i[0]!=="_"&&i!=="default");o&&console.log("available p5 native classes",h),f=new y(i=>(i=O(i,h),o&&console.log("p5 instance",i),window._p5Instance=i,a(i)),s),d.ref(),d.instance()}),r.$$set=t=>{"target"in t&&n(2,s=t.target),"sketch"in t&&n(3,a=t.sketch),"parentDivStyle"in t&&n(0,l=t.parentDivStyle),"debug"in t&&n(4,o=t.debug)},[l,g,s,a,o]}class M extends C{constructor(e){super(),I(this,e,V,A,D,{target:2,sketch:3,parentDivStyle:0,debug:4})}}export{M as P};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./p5.min.ZBgcNSWM.js","./_commonjsHelpers.5-cIlDoe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}