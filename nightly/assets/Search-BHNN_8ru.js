import{j as e}from"./iframe-CpjYl_X5.js";import{useMDXComponents as i}from"./index-33t6PBxs.js";import{M as a,C as n}from"./blocks-BkWlBCqX.js";import"./Tag-DAYBa8yS.js";import"./index-joCwOwY7.js";import{C as m}from"./ControlsWithNote-CJxz3cS3.js";import{D as c}from"./DocsHeader-C-cPnBsB.js";import{F as h}from"./CommandsAndQueries-EZVtGsJe.js";import{C as r,D as p,W as l}from"./Search.stories-DO0QF5UK.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DIh11mSj.js";import"./sys-enter-2-Dq_jhMR8.js";import"./alert-D8p6gt1X.js";import"./index-C2_ggH5f.js";import"./index-Us1w7EKB.js";import"./Link-D3b32oQu.js";import"./copy-xgKoT-7g.js";import"./copy-BKpc5Gew.js";import"./GitHub-Mark-DB1qLV4P.js";import"./TableOfContent-D2ZJCbj2.js";import"./index--ofYB3gh.js";import"./index-DdElBtDf.js";import"./addCustomCSSWithScoping-DT7KX0jQ.js";import"./index-DkiFqVtv.js";import"./index-n0koIvnW.js";import"./index-CNY9O4wi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCOGUGQL.js";import"./index-CfILUPKg.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CXzOrl-3.js";import"./Input-BNo-hj-C.js";import"./ResponsivePopoverCommon.css-DwHdHtV9.js";import"./ValueStateMessage.css-BUAJFQ99.js";import"./Suggestions.css-CwebfgRb.js";import"./Search-CIHeRKzh.js";import"./Option-DZvbArRC.js";import"./ListItemBaseTemplate-Bdi5-fvq.js";import"./Select-BbN0n5sp.js";import"./InvisibleMessage-BskeonYB.js";import"./slim-arrow-down-BdbjdxUH.js";import"./slim-arrow-down-DwQAWsTD.js";import"./search-CWxCZ6T0.js";import"./SuggestionItem-BsQJnmhm.js";import"./i18n-defaults-dyGKyNAh.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
