import{j as e}from"./iframe-Ci8pj7yy.js";import{useMDXComponents as i}from"./index-DO7eBN2z.js";import{M as a,C as n}from"./blocks-BOIftN09.js";import"./Tag-CtmOHQqs.js";import"./index-XXTJ5qGa.js";import{C as m}from"./ControlsWithNote-UCIdrd3z.js";import{D as c}from"./DocsHeader-CrSp8Qjk.js";import{F as h}from"./CommandsAndQueries-5z2JhX-x.js";import{C as r,D as p,W as l}from"./Search.stories-iI9cnVAI.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DSfftGlH.js";import"./sys-enter-2-C76hk90F.js";import"./alert-DYFZMbbA.js";import"./index-C7Xj3GeW.js";import"./index-DWr3iboX.js";import"./Link-CAZ1TUGZ.js";import"./copy-Dt7BIUJN.js";import"./copy-DM6AHN8T.js";import"./GitHub-Mark-CrxpG-qQ.js";import"./TableOfContent-B6cN-CWA.js";import"./index-D-FVVHHi.js";import"./index-B8N1oKPj.js";import"./addCustomCSSWithScoping-X0FVjaGM.js";import"./index-DNhpGeE9.js";import"./index-DX67Vy3i.js";import"./index-D32YSGyq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXlYEAwh.js";import"./index-CIErsXpJ.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-BhU3C_BJ.js";import"./Input-D5iz8gVF.js";import"./ResponsivePopoverCommon.css-BfjHIntt.js";import"./ValueStateMessage.css-BrUNqWph.js";import"./Suggestions.css-C4ig1fd6.js";import"./Search-BiGdexjw.js";import"./Option-DI25J3kC.js";import"./ListItemBaseTemplate-CAugTCWT.js";import"./Select-Iz40cZG_.js";import"./InvisibleMessage-CU9-lL93.js";import"./slim-arrow-down-2towEIQe.js";import"./slim-arrow-down-lM8f-Uz6.js";import"./search-R8ellwwG.js";import"./SuggestionItem-92M1Ikia.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
