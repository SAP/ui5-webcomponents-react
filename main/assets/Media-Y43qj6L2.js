import{M as r}from"./MediaRange-sEMt71Ve.js";import{E as f}from"./CustomElementsScopeUtils-FvbtGFoH.js";const d=new f,u=r.RANGESETS.RANGE_4STEPS,a={S:[0,599],M:[600,1023],L:[1024,1439],XL:[1440,-1]},m={S:"Phone",M:"Tablet",L:"Desktop",XL:"LargeDesktop"};function i(e,n){let t="all";return e>0&&(t=`${t} and (min-width:${e}px)`),n>0&&(t=`${t} and (max-width:${n}px)`),t}function s(e){const n={from:a[e][0],name:m[e],unit:"px"};return a[e][1]>0&&(n.to=a[e][1]),n}let o=null;function E(){if(typeof document<"u"){o={S:window.matchMedia(i(...a.S)),M:window.matchMedia(i(...a.M)),L:window.matchMedia(i(...a.L)),XL:window.matchMedia(i(...a.XL))};for(const e in o){const n=t=>{if(t.matches){const c=s(e);d.fireEvent("media",c)}};o[e].addEventListener("change",n)}}}const g=e=>typeof window>"u"?{from:1024,to:1439,name:"Desktop",unit:"px"}:s(r.getCurrentRange(u,isNaN(e)?void 0:e)),h=e=>{o===null&&E(),d.attachEvent("media",e)},l=e=>{d.detachEvent("media",e)};export{h as a,l as d,g};
//# sourceMappingURL=Media-Y43qj6L2.js.map
