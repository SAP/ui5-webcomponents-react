import{j as e}from"./iframe-C6IJVCey.js";import{useMDXComponents as i}from"./index-Ds5KjzB0.js";import{M as a,C as n}from"./blocks-DeRnr9iF.js";import"./Tag-cnX1vvNU.js";import"./index-BUG7WGA1.js";import{C as m}from"./ControlsWithNote-BtPDnNM4.js";import{D as c}from"./DocsHeader-BJPbmgAK.js";import{F as h}from"./CommandsAndQueries-Bd9H39B6.js";import{C as r,D as p,W as l}from"./Search.stories-Bkhl_mxu.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./index-DmVW3kBm.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./copy-DIWsVONk.js";import"./copy-CbqLCcHM.js";import"./GitHub-Mark-BvzV3HVh.js";import"./TableOfContent-C68i5x5x.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./index-DPsKUudH.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-C_KETVfx.js";import"./Input-x1q94poq.js";import"./ResponsivePopoverCommon.css-BVZ5OAV_.js";import"./ValueStateMessage.css-DPjopeIN.js";import"./Suggestions.css-CiUwfxD-.js";import"./Search-DGbE5Rus.js";import"./Option-BeuU2j7g.js";import"./ListItemBaseTemplate-BVssUnLn.js";import"./Select-C7aDvX2p.js";import"./InvisibleMessage-BZfjRnJZ.js";import"./slim-arrow-down-BAej_MsU.js";import"./slim-arrow-down-CwgCCUKm.js";import"./search-CaBFQiR2.js";import"./SuggestionItem-CUDCE1RV.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
