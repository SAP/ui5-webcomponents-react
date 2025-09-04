import{j as e}from"./iframe-BGPLLWda.js";import{useMDXComponents as i}from"./index-CUo1Jk3b.js";import{M as a,C as n}from"./blocks-indAdCXu.js";import"./Tag-BJtvEZ6A.js";import"./index-CQHuRrhk.js";import{C as m}from"./ControlsWithNote-DwWmOGGJ.js";import{D as c}from"./DocsHeader-D7mFShSZ.js";import{F as h}from"./CommandsAndQueries-CMwJiC-3.js";import{C as r,D as p,W as l}from"./Search.stories-dkdYJ40g.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./index-BUzvoCUF.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./copy-BRDDe_qs.js";import"./copy-BU9AAITa.js";import"./GitHub-Mark-DhRpczTj.js";import"./TableOfContent-JH4ytLq7.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./index-kwgXJZcO.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-CCLeMaUP.js";import"./Input-CpVfGSwY.js";import"./ResponsivePopoverCommon.css-951IwDN3.js";import"./ValueStateMessage.css-Djn4UmzD.js";import"./Suggestions.css-DqxhEkKs.js";import"./Search-CRhaj3du.js";import"./Option-DtMR1hW6.js";import"./ListItemBaseTemplate-Dg-uXgOx.js";import"./Select-D9d1AFpt.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CPLxRpFv.js";import"./slim-arrow-down-DMfTGr50.js";import"./search-CdIiFmwm.js";import"./SuggestionItem-Cxo33OCr.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
`,e.jsx(h,{})]})}function pe(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{pe as default};
