import{j as e}from"./iframe-Y9u60a80.js";import{useMDXComponents as i}from"./index-Bori-Nod.js";import{M as a,C as n}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import"./index-CpV662zw.js";import{C as m}from"./ControlsWithNote-laTaCTcY.js";import{D as c}from"./DocsHeader-1K3Kbib7.js";import{F as h}from"./CommandsAndQueries-eYIoXNgT.js";import{C as r,D as p,W as l}from"./Search.stories-CHw7i-kD.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./index-BUCogs4k.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./copy-bzJkQwnc.js";import"./copy-DwFBIccM.js";import"./GitHub-Mark-BeVgJP-S.js";import"./TableOfContent-C0xGCGUb.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./index-BmXPSocM.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-cy-pcX2g.js";import"./Input-7QH9qgg3.js";import"./ResponsivePopoverCommon.css-DKPC5jE6.js";import"./ValueStateMessage.css-DF0riTEq.js";import"./Suggestions.css-BCVBy9X3.js";import"./Search-DPyCxOTR.js";import"./Option-CbMG_PHq.js";import"./ListItemBaseTemplate-DN-V_XKe.js";import"./Select-B8fRwNK8.js";import"./InvisibleMessage-BM3r9VIb.js";import"./slim-arrow-down-Bigp3gAZ.js";import"./slim-arrow-down-DgUPWIGP.js";import"./search-zN0HhBZN.js";import"./SuggestionItem-2EsYX1iM.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
