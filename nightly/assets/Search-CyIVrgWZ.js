import{j as e}from"./iframe-BZQDLaud.js";import{useMDXComponents as i}from"./index-C_GG0ZGD.js";import{M as a,C as n}from"./blocks-Cx9bcs1C.js";import"./Tag-D-gB3YeX.js";import"./index-DJN5YABY.js";import{C as m}from"./ControlsWithNote-D3crpagW.js";import{D as c}from"./DocsHeader-BBbzR6Xb.js";import{F as h}from"./CommandsAndQueries-DWGWAVRo.js";import{C as r,D as p,W as l}from"./Search.stories-CC0yhyo_.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B9S0fYTB.js";import"./sys-enter-2-CBLZgJFq.js";import"./alert-BSsrq5HK.js";import"./index-CKSa3A9-.js";import"./index-AG4whyzM.js";import"./Link-CNK5l0fe.js";import"./copy-FMabBKUP.js";import"./copy-BROMiSoG.js";import"./GitHub-Mark-CJ_rqd6q.js";import"./TableOfContent-BmdOjVK1.js";import"./index-8dfRRBIr.js";import"./index-D_nwxPuV.js";import"./addCustomCSSWithScoping-BvPnid_d.js";import"./index-Cfu_YQna.js";import"./index-CGfYsqbH.js";import"./index-CvEaTXbe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVHMP-qL.js";import"./index-B8ERo1QQ.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CFs5TL0g.js";import"./Input-DWSj0jbp.js";import"./ResponsivePopoverCommon.css-DjqZq9sD.js";import"./ValueStateMessage.css-D3ij8aoW.js";import"./Suggestions.css-DSv3s41Y.js";import"./Search-Dg7CRoFk.js";import"./Option-BivDrOBz.js";import"./ListItemBaseTemplate-Bl0LNXUa.js";import"./Select-CncfGb0r.js";import"./InvisibleMessage-BonTwXKe.js";import"./slim-arrow-down-XixAgIwt.js";import"./slim-arrow-down-CLpBmF95.js";import"./search-CQgAr4bG.js";import"./SuggestionItem-gl78ccMD.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
