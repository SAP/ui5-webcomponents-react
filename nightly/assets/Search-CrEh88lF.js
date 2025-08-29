import{j as e}from"./iframe-Dk4p-NU5.js";import{useMDXComponents as i}from"./index-CHKRtcGE.js";import{M as a,C as n}from"./blocks-DM1TPhC8.js";import"./Tag-DIu9mUid.js";import"./index-Dy2aDYnH.js";import{C as m}from"./ControlsWithNote-BL-O4PHK.js";import{D as c}from"./DocsHeader-DluH69mA.js";import{F as h}from"./CommandsAndQueries-DyjrBS1R.js";import{C as r,D as p,W as l}from"./Search.stories-FwRqro2Y.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BsAdT-Xc.js";import"./sys-enter-2-CC2F8dSm.js";import"./alert-r293I4gz.js";import"./index-C9rB5uch.js";import"./index-BjoQdxqk.js";import"./Link-CnlylsPy.js";import"./copy-CzKDrJ3x.js";import"./copy-9E4-O2oJ.js";import"./GitHub-Mark-DQZGCew4.js";import"./TableOfContent-Csi_o0XO.js";import"./index-CltNqpOu.js";import"./index-C0BhXx34.js";import"./addCustomCSSWithScoping-YkmUIPFl.js";import"./index-CWcAFKak.js";import"./index-DSYhAS_G.js";import"./index-oVL9Luq8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CcivO6eQ.js";import"./index-Dno3-OCH.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-BcFRWZd8.js";import"./Input-B0eKdbw0.js";import"./ResponsivePopoverCommon.css-CA4ifvoQ.js";import"./ValueStateMessage.css-B8pmh2N9.js";import"./Suggestions.css-BBewLOHr.js";import"./Search-CzhgWynN.js";import"./Option-jLqCQe_J.js";import"./ListItemBaseTemplate-CSbf2qJ5.js";import"./Select-CpzFR8eY.js";import"./InvisibleMessage-BEHSXRmN.js";import"./slim-arrow-down-DP1V9xmJ.js";import"./slim-arrow-down-EOCFba-X.js";import"./search-DLC6Cp5q.js";import"./SuggestionItem--vngu7nQ.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
