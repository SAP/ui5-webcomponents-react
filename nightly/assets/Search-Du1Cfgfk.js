import{j as e}from"./iframe-D47IesGI.js";import{useMDXComponents as i}from"./index-B-Cjj5vb.js";import{M as a,C as n}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import{C as m}from"./ControlsWithNote-lj38sMRt.js";import{D as c}from"./DocsHeader-Wj_1zWhv.js";import{F as h}from"./CommandsAndQueries-BUssvnnv.js";import{C as r,D as p,W as l}from"./Search.stories-D2M4jh9w.js";import"./preload-helper-Ct5FWWRu.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./index-BYtsHb6f.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./copy-BMTsvkwe.js";import"./copy-CpxPPhhd.js";import"./GitHub-Mark-DvefSS6H.js";import"./TableOfContent-WE_h0rfY.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./index-N0-cdbnz.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CxruGoOp.js";import"./Input-BVNlr-7R.js";import"./ResponsivePopoverCommon.css-DcqdU9zO.js";import"./ValueStateMessage.css-Foo9e4QP.js";import"./Suggestions.css-Jvp1dCcK.js";import"./Search-DRoXd_Ns.js";import"./Option-BY9BYDVp.js";import"./ListItemBaseTemplate-xRzWPdIS.js";import"./Select-CR2ghGLB.js";import"./InvisibleMessage-7tcQYx8D.js";import"./slim-arrow-down-D_ImNcdv.js";import"./slim-arrow-down-CRL6N__0.js";import"./search-C_wUzD4k.js";import"./SuggestionItem-v3I1qCjx.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
