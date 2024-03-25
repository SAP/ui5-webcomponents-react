function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-xFSq9O5l.js","./chunk-HLWAVYOI-DFiz3eTO.js","./iframe-gVadmDKp.js","./index-Cu9bd8lq.js","./client-Cby6Sz3m.js","./index-Ckls47V4.js","./index-CSIt6K3g.js","./inheritsLoose-D8L2VVdp.js","./_baseForOwn-CD7metVA.js","./mapValues-DbyeKAf9.js","./_baseUniq-Dmu8z6NP.js","./index-D-lniKcH.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-gVadmDKp.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-xFSq9O5l.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
