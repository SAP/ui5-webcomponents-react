function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-iFzuSqJu.js","./chunk-HLWAVYOI-WOF0RW3L.js","./iframe-ykikr5Cm.js","./index-OjgoNOWw.js","./client-YBMdkTkG.js","./index-QYh6idnL.js","./index-x2v36-vL.js","./inheritsLoose-O2jMHMzR.js","./_baseForOwn-a7AeJH13.js","./mapValues-_kP3xGjM.js","./_baseUniq-_JZHYp0e.js","./index-0eYhXGum.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-ykikr5Cm.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-iFzuSqJu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
