import{j as e}from"./iframe-C5HYk_w9.js";import{useMDXComponents as i}from"./index-NAtY6U9A.js";import{M as a,C as n}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import"./index-DDk7xvH6.js";import{C as m}from"./ControlsWithNote-D85sRsQV.js";import{D as c}from"./DocsHeader-j2xomDQy.js";import{F as h}from"./CommandsAndQueries-D55ZIYIG.js";import{C as r,D as p,W as l}from"./Search.stories-DtOt_hGV.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./index-BrZnxm7s.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./copy-fXr871V-.js";import"./copy-C5SWnutv.js";import"./GitHub-Mark-Dm-NBxFc.js";import"./TableOfContent-DsGDxpKI.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./index-DyhhPEhS.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-D1bZW3dG.js";import"./Input-BdwJJtVE.js";import"./ResponsivePopoverCommon.css-C8yEY6IR.js";import"./ValueStateMessage.css-D4-kWGJF.js";import"./Suggestions.css-Dsm1Odvr.js";import"./Search-cjNRdnaR.js";import"./Option-c-UVfgap.js";import"./ListItemBaseTemplate-BHoAE_XK.js";import"./Select-SEMtVca9.js";import"./InvisibleMessage-BmEFxMXz.js";import"./slim-arrow-down-CWrkxAdp.js";import"./slim-arrow-down-CBehnyc2.js";import"./search-mRFZx5DK.js";import"./SuggestionItem-CBNk3s7_.js";import"./i18n-defaults-dyGKyNAh.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
