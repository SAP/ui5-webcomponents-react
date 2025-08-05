import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Duvwo7dg.js";import"./CommandsAndQueries-DPW9fmtR.js";import{C as c}from"./index-fDLPgWZl.js";function r(t){const e={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{id:"normalized-stacked-chart",children:"Normalized stacked chart"}),`
`,n.jsxs(e.p,{children:["By transforming the ",n.jsx(e.code,{children:"dataset"}),", a stacked chart can be normalized."]}),`
`,n.jsx(c,{of:t.of}),`
`,n.jsx(e.h4,{id:"example-normalize-function",children:"Example normalize function"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function normalizeData(data: Record<string, number | string>[]) {
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
`})})]})}function d(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{d as M};
