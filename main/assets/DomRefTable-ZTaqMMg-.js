import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{H as a}from"./chunk-HLWAVYOI-Fsp-hxMS.js";import{a as r}from"./DomRefTable.module-V_iz5pw3.js";function i(n){var t;return n.returnValue?e.jsxs(e.Fragment,{children:[n.name,"(",(t=n.parameters)==null?void 0:t.map(s=>`${s.name}${s.optional?"?":""}`).join(", "),"):"," ",e.jsx("code",{children:n.returnValue.type})]}):n.readonly?`${n.name} (readonly)`:n.name}function m({rows:n}){return e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Attributes & Methods"}),e.jsx("p",{children:"This component exposes public attributes and methods. You can use them directly on the instance of the component, e.g. by using React Refs."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:n.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(i,{...t})})}),e.jsx("td",{children:t.parameters?t.parameters.map(s=>e.jsxs("div",{className:r.parameters,children:[e.jsx("p",{className:r.parameterName,children:s.name}),s.description?e.jsx("p",{className:r.parameterDetails,dangerouslySetInnerHTML:{__html:s.description}}):null,s.type?e.jsx("p",{className:r.parameterDetails,children:e.jsx("code",{children:s.type})}):null]},s.name)):e.jsx(e.Fragment,{children:"—"})}),e.jsx("td",{dangerouslySetInnerHTML:{__html:t.description}})]},t.name))})]})]})}export{m as D};
//# sourceMappingURL=DomRefTable-ZTaqMMg-.js.map
