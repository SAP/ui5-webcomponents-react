import{j as e}from"./iframe-BxEu-xci.js";import{useMDXComponents as i}from"./index-DIpNHUFd.js";import{M as a,C as n}from"./blocks-DPfoGqoC.js";import"./Tag-BNi2hR4G.js";import"./index-BorC4J59.js";import{C as m}from"./ControlsWithNote-CRd9VQnb.js";import{D as c}from"./DocsHeader-Dr9Ssyxo.js";import{F as h}from"./CommandsAndQueries-BL1k5Lab.js";import{C as r,D as p,W as l}from"./Search.stories-CNknxmoO.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BKw42Lxc.js";import"./sys-enter-2-BkwngAtf.js";import"./alert-DQ3naR-W.js";import"./index-zhC6_est.js";import"./index-CnHUdtnF.js";import"./Link-CkCyRMbi.js";import"./copy-C1-_5U69.js";import"./copy-byxAjSE6.js";import"./GitHub-Mark-CyAQ8h1x.js";import"./TableOfContent-B_Sk6ocw.js";import"./index-CFj32LYi.js";import"./index-CL8FjSwM.js";import"./addCustomCSSWithScoping-C3RRJQPN.js";import"./index-DSeLD822.js";import"./index-Dzht26Rp.js";import"./index-BV37wPbr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dYhLm2AL.js";import"./index-CYVd0O8S.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CcB51XIM.js";import"./Input-CgWZ-qAo.js";import"./ResponsivePopoverCommon.css-CWKaQ37A.js";import"./ValueStateMessage.css-BD9264Ua.js";import"./Suggestions.css-PvISQ8RB.js";import"./Search-DxPzYHdS.js";import"./Option-C7146fjq.js";import"./ListItemBaseTemplate-B-1oyib3.js";import"./Select-B5DeL5zX.js";import"./InvisibleMessage-CwUOjoUf.js";import"./slim-arrow-down-poKh_hcw.js";import"./slim-arrow-down-UD2Q1IDE.js";import"./search-BHKof4lL.js";import"./SuggestionItem-DrN6FdPk.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
