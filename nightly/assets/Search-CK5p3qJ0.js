import{j as e}from"./iframe-CgMbHIkI.js";import{useMDXComponents as i}from"./index-uQo7cCLJ.js";import{M as a,C as n}from"./blocks-CFocqrsp.js";import"./Tag-Dk7X5Tny.js";import"./index-D54ieI7L.js";import{C as m}from"./ControlsWithNote-C7undRkV.js";import{D as c}from"./DocsHeader-3KR4B-u4.js";import{F as h}from"./CommandsAndQueries-BXDj4lkb.js";import{C as r,D as p,W as l}from"./Search.stories-xtz8S6Zf.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DgjoEc_K.js";import"./sys-enter-2-C0WM_GHK.js";import"./alert-wRxwDyfo.js";import"./index-B3DD2XIG.js";import"./index-Bjiw2xBb.js";import"./Link-BqFTwoRG.js";import"./copy-DmOSF1x-.js";import"./copy-Cpi-mOYC.js";import"./GitHub-Mark-Da3mmXpk.js";import"./TableOfContent-BTVE1HTf.js";import"./index-ChYBHoyi.js";import"./index-DXZ48uHs.js";import"./addCustomCSSWithScoping-B687qvo6.js";import"./index-8_dTlaSG.js";import"./index-pQs3Bm3D.js";import"./index-X0m3PPe8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CnkwV5Xd.js";import"./index-Cn2vDfUB.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CItxgjcj.js";import"./Input-BUn11rhe.js";import"./ResponsivePopoverCommon.css-Bgg5pcPK.js";import"./ValueStateMessage.css-DO5UcoIB.js";import"./Suggestions.css-Jr9HB9gU.js";import"./Search-CsrjpLH4.js";import"./Option-B6atmey2.js";import"./ListItemBaseTemplate-D-AVCzw3.js";import"./Select-Bzw1E5rv.js";import"./InvisibleMessage-CSPRqXEs.js";import"./slim-arrow-down-IxdmmDCl.js";import"./slim-arrow-down-C6871QHD.js";import"./search-DHKntkc8.js";import"./SuggestionItem-C-MzrG9W.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
