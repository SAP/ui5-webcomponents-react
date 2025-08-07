import{j as e}from"./iframe-BOVM1M_Q.js";import{useMDXComponents as i}from"./index-2SvYRCCw.js";import{M as a,C as n}from"./blocks-CrIALgP8.js";import"./Tag-66qvcRmY.js";import"./index-mxAgSE5r.js";import{C as m}from"./ControlsWithNote-YXdYNE8U.js";import{D as c}from"./DocsHeader-C_cgcxX0.js";import{F as h}from"./CommandsAndQueries-B0E3P6p2.js";import{C as r,D as p,W as l}from"./Search.stories-DBucSvub.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZqrSqxM.js";import"./sys-enter-2-b3EDnzZS.js";import"./alert-sAHWg9Jt.js";import"./index-qyBhFjGo.js";import"./index-6YOnZJx5.js";import"./Link-BXYAhhKR.js";import"./copy-BcsqkCUV.js";import"./copy-DbyPBOXI.js";import"./GitHub-Mark-CtAK2XKn.js";import"./TableOfContent-DUvysCa7.js";import"./index-B2niMIbJ.js";import"./index-CmTbq6An.js";import"./addCustomCSSWithScoping-BosPxWiT.js";import"./index-u_WTLBYa.js";import"./index-Dc7kwzo6.js";import"./index-BK7Il_hf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzZbr1e8.js";import"./index-SajVcEL0.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CRxyxOyx.js";import"./Input-K1MmYIzW.js";import"./ResponsivePopoverCommon.css-C9Zu8eKY.js";import"./ValueStateMessage.css-0fCoJ9a0.js";import"./Suggestions.css-DU-Tiy8t.js";import"./Search-CIfFBKz5.js";import"./Option-D5R66SZP.js";import"./ListItemBaseTemplate-B9sZlVj4.js";import"./Select-C6uF65be.js";import"./InvisibleMessage-DLe-kdrD.js";import"./slim-arrow-down-CtYyvMXa.js";import"./slim-arrow-down-BvKl0HX1.js";import"./search-BJYv9fyx.js";import"./SuggestionItem-C6_chZGf.js";import"./i18n-defaults-dyGKyNAh.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
