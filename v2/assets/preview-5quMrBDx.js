const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-ND0cFnl_.js","./chunk-NUUEMKO5-CqhS4cr8.js","./iframe-BR3ooUsv.js","./index-RYns6xqu.js","./index-B5NwerkP.js","./jsx-runtime-DEdD30eg.js","./index-sbqOYYIm.js","./_baseUniq-18efwtne.js","./index-ar2LJKLv.js","./index-DrFu-skq.js","./client-BzooOYO_.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-BR3ooUsv.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-ND0cFnl_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
