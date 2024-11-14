import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as i}from"./index-DyCphG7h.js";import"./chunk-NUUEMKO5-C2_bA1pU.js";import{af as t}from"./index-COmq2OuG.js";function o(r){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"with-custom-legend-config",children:"With Custom Legend Config"}),`
`,e.jsxs(n.p,{children:["Via the ",e.jsx(n.code,{children:"chartConfig.legendConfig"})," property you can override the configuration object for the internally used ",e.jsx(n.code,{children:"recharts"}),` Legend component.
You can find all possible configuration properties `,e.jsx(n.a,{href:"https://recharts.org/en-US/api/Legend",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(t,{of:r.of}),`
`,e.jsxs("details",{children:[e.jsxs("summary",{children:["Show example ",e.jsx(n.code,{children:"legendConfig"})]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`legendConfig: {
  align: 'right',
  iconSize: 20,
  iconType: 'diamond',
  formatter: (value, entry, index) => {
    if (value === 'Users') {
      return <span>{value}🐱</span>;
    }
    return value;
  },
  wrapperStyle: {
    border: '5px solid',
    borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1',
    padding: '5px',
    borderRadius: '8px'
  }
}
`})})]})]})}function l(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{l as M};
