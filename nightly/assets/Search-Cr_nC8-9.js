import{j as e}from"./iframe-DUFdGNZ-.js";import{useMDXComponents as i}from"./index-lDTLJk7j.js";import{M as a,C as n}from"./blocks-Cil-35LB.js";import"./Tag-BIgoED-u.js";import"./index-aevS7PA-.js";import{C as m}from"./ControlsWithNote-CA46pQAN.js";import{D as c}from"./DocsHeader-BQtE_pzP.js";import{F as h}from"./CommandsAndQueries-BGpNLpHt.js";import{C as r,D as p,W as l}from"./Search.stories-CWoaJKAM.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CgwzUTpr.js";import"./sys-enter-2-BnIfB17f.js";import"./alert-DGbf_sXK.js";import"./index-DceE06Sq.js";import"./index-BnSYwVvS.js";import"./Link-CUBBmqoz.js";import"./copy-CX8AOcqp.js";import"./copy-E4FhZn3x.js";import"./GitHub-Mark-avIXmTtc.js";import"./TableOfContent-ew4WB2x2.js";import"./index-CGt5UzDi.js";import"./index-HLxWh4_j.js";import"./addCustomCSSWithScoping-Brp1WNYE.js";import"./index-COMDMvYs.js";import"./index-BiGG8FGx.js";import"./index-B4gWJnff.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqrZbdHQ.js";import"./index-B_mrbcLF.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-BSgy6-ks.js";import"./Input-DPv933zQ.js";import"./ResponsivePopoverCommon.css-BwJ1vIxv.js";import"./ValueStateMessage.css-Fubl11x4.js";import"./Suggestions.css-BJLpoiav.js";import"./Search-C-cmV_gi.js";import"./Option-BvmKpK6T.js";import"./ListItemBaseTemplate-C2zYVBWE.js";import"./Select-CsDTuuP5.js";import"./InvisibleMessage-Btu_O-HX.js";import"./slim-arrow-down-Ba9Bx2ZK.js";import"./slim-arrow-down-C3AMNhFD.js";import"./search-BsuASStC.js";import"./SuggestionItem-frd0or4N.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
