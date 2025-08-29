import{j as e}from"./iframe-Dyl3L-t5.js";import{useMDXComponents as i}from"./index-DBGwXOnP.js";import{M as a,C as n}from"./blocks-DynXzMxo.js";import"./Tag-CzQty8rY.js";import"./index-CqdKq5PF.js";import{C as m}from"./ControlsWithNote-CMyxfP3l.js";import{D as c}from"./DocsHeader-C8XbMA3a.js";import{F as h}from"./CommandsAndQueries-Cb3G3ka5.js";import{C as r,D as p,W as l}from"./Search.stories-gfOwP_T7.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B08y1s4G.js";import"./sys-enter-2-CX7GW53q.js";import"./alert-CBwUNVAj.js";import"./index-TINCTucQ.js";import"./index-BDQQRyfA.js";import"./Link-BjutyjAG.js";import"./copy-CJQmrf12.js";import"./copy-CWrvVeie.js";import"./GitHub-Mark-BcD1_bIs.js";import"./TableOfContent-AMPzVTY_.js";import"./index-BJK3nZOd.js";import"./index-mdaYmaaO.js";import"./addCustomCSSWithScoping-B7LJv67X.js";import"./index-l7b9iK_5.js";import"./index-CON7qShv.js";import"./index-BzFXJVYV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmgV2bLI.js";import"./index-DzAm0WkD.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-D3iUKNB5.js";import"./Input-B6peNm1t.js";import"./ResponsivePopoverCommon.css-Ba71pV2j.js";import"./ValueStateMessage.css-rpNnQiGf.js";import"./Suggestions.css-DDzb5FdX.js";import"./Search-2T5qtuPi.js";import"./Option-DAiofa7l.js";import"./ListItemBaseTemplate-UHhLaiyc.js";import"./Select-CatGjmg8.js";import"./InvisibleMessage-DYgdDzKE.js";import"./slim-arrow-down-CJjWd9wb.js";import"./slim-arrow-down-DMLXw6xT.js";import"./search-OAyD2R99.js";import"./SuggestionItem-oeptop1Y.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
