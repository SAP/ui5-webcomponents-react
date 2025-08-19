import{j as e}from"./iframe-CvU-07By.js";import{useMDXComponents as i}from"./index-DIsCDPQO.js";import{M as a,C as n}from"./blocks-C4k1N9hK.js";import"./Tag-ZBoRMHPo.js";import"./index-DM6nouM-.js";import{C as m}from"./ControlsWithNote-W2TrAeTD.js";import{D as c}from"./DocsHeader-C6jg0uux.js";import{F as h}from"./CommandsAndQueries-DbBqwiyb.js";import{C as r,D as p,W as l}from"./Search.stories-Dg2r288X.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BzMTjAO7.js";import"./sys-enter-2-q6_NKbGq.js";import"./alert-BRr8PNkH.js";import"./index-DyAIHHB4.js";import"./index-CeymlHoz.js";import"./Link-BhwO4QDY.js";import"./copy-OdRqSv6G.js";import"./copy-TKggWaTM.js";import"./GitHub-Mark-BJRBSu9w.js";import"./TableOfContent-CxFbZHfF.js";import"./index-CrApm23D.js";import"./index-BIUdNoj4.js";import"./addCustomCSSWithScoping-KQt9PdZP.js";import"./index-gFOSdjyI.js";import"./index-BYwB_T6k.js";import"./index-BDAVJKqV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXaptZ3Y.js";import"./index-DhWaNJn3.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CHf5VVd7.js";import"./Input-Bk67iFBz.js";import"./ResponsivePopoverCommon.css-DtcMkK-L.js";import"./ValueStateMessage.css-DNP4kQ0q.js";import"./Suggestions.css-BgX4bA8X.js";import"./Search-BDWbuvKz.js";import"./Option-98MOnCoD.js";import"./ListItemBaseTemplate-D_DoxqTK.js";import"./Select-BMBrtb3I.js";import"./InvisibleMessage-DWMWQiC0.js";import"./slim-arrow-down-qxU48HTy.js";import"./slim-arrow-down-XBwwFKMk.js";import"./search-cqRU9rtd.js";import"./SuggestionItem-PZTnS_B4.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
