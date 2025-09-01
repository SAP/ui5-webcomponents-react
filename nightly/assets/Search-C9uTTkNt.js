import{j as e}from"./iframe-Bb_MgE3Z.js";import{useMDXComponents as i}from"./index-DKEbDWFi.js";import{M as a,C as n}from"./blocks-C_ShsaTX.js";import"./Tag-B5i1kgB9.js";import"./index-DayVNiXE.js";import{C as m}from"./ControlsWithNote-Br6-EL5r.js";import{D as c}from"./DocsHeader-pqQ7E-qX.js";import{F as h}from"./CommandsAndQueries-c2dxMxjd.js";import{C as r,D as p,W as l}from"./Search.stories-CT7jvfaB.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C6jJlQn9.js";import"./sys-enter-2-CM5wN5Wl.js";import"./alert-Y-36vIFj.js";import"./index-DViW7Jtd.js";import"./index-Ck4df4kL.js";import"./Link-DNvb3KzX.js";import"./copy-CIv8JdSf.js";import"./copy-BzQS_3Hx.js";import"./GitHub-Mark-CIQdlUo7.js";import"./TableOfContent-Dyl8nPzW.js";import"./index-Cq06OFSr.js";import"./index-Na43IgM6.js";import"./addCustomCSSWithScoping-Bc03fLSU.js";import"./index-Ci9Y4xV9.js";import"./index-BfQwzX8T.js";import"./index-j0v7UbS8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHOTzJyN.js";import"./index-Cq3n-PX-.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-Dk296Jr7.js";import"./Input-cbgRVmBC.js";import"./ResponsivePopoverCommon.css-CsqmHnJg.js";import"./ValueStateMessage.css-BFdD6J-X.js";import"./Suggestions.css-Dlsv1RCW.js";import"./Search-CIpIDtoO.js";import"./Option-CCwPNrFZ.js";import"./ListItemBaseTemplate-YmJtdlBv.js";import"./Select-D34ayOJd.js";import"./InvisibleMessage-BjdIRmAn.js";import"./slim-arrow-down-Bf-F8L6C.js";import"./slim-arrow-down-C2uRcD-I.js";import"./search-BaQexf44.js";import"./SuggestionItem-DZHEZgAV.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(c,{of:r,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:p}),`
`,e.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(o.h3,{id:"search-with-scope-and-searchitems",children:"Search with Scope and SearchItems"}),`
`,e.jsxs(o.p,{children:["A ",e.jsx(o.code,{children:"Search"})," component with enabled scope, items and filtering by scope."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const scopeData = [
  { name: 'Laptop', scope: 'products' },
  { name: 'Leave Requests', scope: 'apps' },
  { name: 'Log work', scope: 'apps' },
  { name: 'Manage Products', scope: 'apps' },
  { name: 'Mobile Phones', scope: 'products' },
  { name: 'Tablet', scope: 'products' }
];

function SearchComponent(props) {
  const [filterData, setFilterData] = useState(scopeData);

  const handleScopeChange: SearchPropTypes['onScopeChange'] = (e) => {
    props.onScopeChange(e);
    const { scope } = e.detail;
    if (scope.text === 'All') {
      setFilterData(scopeData);
    } else {
      setFilterData(
        scopeData.filter((item) => {
          return item.scope === scope.text.toLowerCase();
        })
      );
    }
  };

  return (
    <Search {...props} onScopeChange={handleScopeChange}>
      {filterData.map((item) => {
        return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
      })}
    </Search>
  );
}
`})})]}),`
`,e.jsx(h,{})]})}function re(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{re as default};
