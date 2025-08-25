import{j as e}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as i}from"./index-EJQOh2Id.js";import{M as a,C as n}from"./blocks-CkgJFs4T.js";import"./Tag-D_p_BT-M.js";import"./index-ChA7roql.js";import{C as m}from"./ControlsWithNote-Bd6pYC1H.js";import{D as c}from"./DocsHeader-C-hjUqfu.js";import{F as h}from"./CommandsAndQueries-BwMOH1SZ.js";import{C as r,D as p,W as l}from"./Search.stories-D_kTK6ef.js";import"./preload-helper-Ct5FWWRu.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./index-D9TUnkjB.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./copy-DvB2frbS.js";import"./copy-BQA3UKNo.js";import"./GitHub-Mark-CMsRbTr-.js";import"./TableOfContent-COtDOSzs.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./index--I6Ksfpo.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-DYx8sBmP.js";import"./Input-BnPcYwI0.js";import"./ResponsivePopoverCommon.css-De3l4lV7.js";import"./ValueStateMessage.css-CnYMheJQ.js";import"./Suggestions.css-CcER9QIN.js";import"./Search-Bw5nKz_i.js";import"./Option-ydyzdS2N.js";import"./ListItemBaseTemplate-DFt11I0O.js";import"./Select-DR14Z-d1.js";import"./InvisibleMessage-DNAVGHgD.js";import"./slim-arrow-down-DpHxo-vW.js";import"./slim-arrow-down-CjCpnDGL.js";import"./search-y6NQzQeI.js";import"./SuggestionItem-DLLMxiuf.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
