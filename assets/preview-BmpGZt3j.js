function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-DiqUvhDq.js","./chunk-HLWAVYOI-DTcAjMu8.js","./iframe-B2aeQtEw.js","./index-Dl6G-zuu.js","./react-18-Bamk9FSf.js","./index-D1_ZHIBm.js","./index-DiRKeNXc.js","./inheritsLoose-D8L2VVdp.js","./_baseForOwn-DFjKyXZi.js","./mapValues-BvzalXkB.js","./_baseUniq-DRxb5hvO.js","./index-2V9fy1S2.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-B2aeQtEw.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-DiqUvhDq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
