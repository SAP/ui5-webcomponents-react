import{j as e}from"./iframe-4VeS9m_X.js";import{useMDXComponents as i}from"./index-DEI3eVkK.js";import{M as a,C as n}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import{C as m}from"./ControlsWithNote-Cd4a9QE9.js";import{D as c}from"./DocsHeader-BBLwt-9L.js";import{F as h}from"./CommandsAndQueries-7kzg9PVA.js";import{C as r,D as p,W as l}from"./Search.stories-DzDomt3u.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./index-CftSo41I.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./copy-CeAEX2cb.js";import"./copy-jnb9sYPg.js";import"./GitHub-Mark-ofnBKzQ-.js";import"./TableOfContent-CuT-m9D7.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./index-Dy0ba7RF.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CI1lfDys.js";import"./Input-7Ln5W5EQ.js";import"./ResponsivePopoverCommon.css-shdaMqe8.js";import"./ValueStateMessage.css-CGoPnYXJ.js";import"./Suggestions.css-CvvWsrep.js";import"./Search-YZiduwrr.js";import"./Option-CFrG9aBk.js";import"./ListItemBaseTemplate-Q_ULQajv.js";import"./Select-iON0Hwpr.js";import"./InvisibleMessage-Dmfd1gOp.js";import"./slim-arrow-down-DvFGLz9G.js";import"./slim-arrow-down-BC69CAxO.js";import"./search-BC3ehqG_.js";import"./SuggestionItem-Bpa4_uLK.js";import"./i18n-defaults-dyGKyNAh.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
