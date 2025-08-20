import{j as e}from"./iframe-Plj9L4DO.js";import{useMDXComponents as i}from"./index-uN80YAVR.js";import{M as a,C as n}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import{C as m}from"./ControlsWithNote-BUu8k3dE.js";import{D as c}from"./DocsHeader-gHpZDn-5.js";import{F as h}from"./CommandsAndQueries-BWyKkggu.js";import{C as r,D as p,W as l}from"./Search.stories-B2ilw63t.js";import"./preload-helper-Ct5FWWRu.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./index-B6F36pGT.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./copy-9NjNiENk.js";import"./copy-DLXELO5k.js";import"./GitHub-Mark-Dn5luEEb.js";import"./TableOfContent-awrCgv2Y.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./index-DjA0K7Jp.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-Cn8rJgDq.js";import"./Input-D_9FWiS-.js";import"./ResponsivePopoverCommon.css-DCdKvyYg.js";import"./ValueStateMessage.css-JOKuFUum.js";import"./Suggestions.css-CxuGFOi-.js";import"./Search-BVDfyhTo.js";import"./Option-CMOaJbPT.js";import"./ListItemBaseTemplate-CH90Z1sT.js";import"./Select-CJ-vJLYi.js";import"./InvisibleMessage-C9ijcey0.js";import"./slim-arrow-down-D9ZL1EHX.js";import"./slim-arrow-down-bQWmrnVc.js";import"./search-Ex0sxJcA.js";import"./SuggestionItem-CZ3Cpr40.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
