import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,r as a}from"./blocks-BPOhBw-k.js";function o(e){let t={code:`code`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`normalized-stacked-chart`,children:`Normalized stacked chart`}),`
`,(0,c.jsxs)(t.p,{children:[`By transforming the `,(0,c.jsx)(t.code,{children:`dataset`}),`, a stacked chart can be normalized.`]}),`
`,(0,c.jsx)(a,{of:e.of}),`
`,(0,c.jsx)(t.h4,{id:`example-normalize-function`,children:`Example normalize function`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function normalizeData(data: Record<string, number | string>[]) {
  return data.map((item) => {
    const total = Object.values(item).reduce((acc: number, cur) => {
      return typeof cur === 'number' ? acc + cur : acc;
    }, 0);

    const normalizedItem = Object.entries(item).map(([key, val]) => {
      if (typeof val === 'number') {
        return [key, total ? (val / total) * 100 : 0];
      }
      return [key, val];
    });

    return Object.fromEntries(normalizedItem);
  });
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}export{l as n,s as t};