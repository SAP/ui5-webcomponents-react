import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,r as a}from"./blocks-yOUxazR9.js";function o(e){let t={a:`a`,code:`code`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`with-custom-tooltip-config`,children:`With Custom Tooltip Config`}),`
`,(0,c.jsxs)(t.p,{children:[`Via the `,(0,c.jsx)(t.code,{children:`tooltipConfig`}),` prop you can override the configuration object for the internally used `,(0,c.jsx)(t.code,{children:`recharts`}),` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties `,(0,c.jsx)(t.a,{href:`https://recharts.org/en-US/api/Tooltip`,rel:`nofollow`,children:`here`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),`: It is possible to override the internally used tooltip configurations. Use with caution!`]}),`
`,(0,c.jsx)(`p`,{children:e.additionalDescription}),`
`,(0,c.jsx)(a,{of:e.of}),`
`,(0,c.jsxs)(`details`,{children:[(0,c.jsxs)(`summary`,{children:[`Show example `,(0,c.jsx)(t.code,{children:`tooltipConfig`})]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`tooltipConfig: {
  wrapperStyle: {
    border: '5px solid',
    borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1',
    padding: '5px',
    borderRadius: '8px'
  },
  itemStyle: {
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '10px',
    marginBlockStart: '2px'
  },
  contentStyle: {
    background: 'black'
  },
  labelStyle: {
    fontFamily: 'var(--sapFontBoldFamily)',
    color: 'white'
  },
  cursor: { stroke: 'red', strokeWidth: 2, fill: 'transparent' },
  separator: ':~:',
  formatter: (value, name, props) => {
    if (name === 'Users') {
      return [\`\${value}👨‍💻\`, 'Custom Name in Tooltip!'];
    }
    return \`\${value}k\`;
  },
  labelFormatter: (label, payload) => {
    return \`\${label}🗓️\`;
  },
  itemSorter: (item) => {
    return -1;
  }
}
`})})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}function u(e){let t={a:`a`,code:`code`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h3,{id:`with-custom-legend-config`,children:`With Custom Legend Config`}),`
`,(0,f.jsxs)(t.p,{children:[`Via the `,(0,f.jsx)(t.code,{children:`chartConfig.legendConfig`}),` property you can override the configuration object for the internally used `,(0,f.jsx)(t.code,{children:`recharts`}),` Legend component.
You can find all possible configuration properties `,(0,f.jsx)(t.a,{href:`https://recharts.org/en-US/api/Legend`,rel:`nofollow`,children:`here`}),`.`]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`Note`}),`: It is possible to override the internally used Legend configurations. Use with caution!`]}),`
`,(0,f.jsx)(a,{of:e.of}),`
`,(0,f.jsxs)(`details`,{children:[(0,f.jsxs)(`summary`,{children:[`Show example `,(0,f.jsx)(t.code,{children:`legendConfig`})]}),(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-js`,children:`legendConfig: {
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
`})})]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),i()})))()}export{l as i,p as n,s as r,d as t};