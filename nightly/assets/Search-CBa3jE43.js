import{j as e}from"./iframe-B9d6tunA.js";import{useMDXComponents as i}from"./index-CHHTqEt5.js";import{M as a,C as n}from"./blocks-DMdqznu7.js";import"./Tag-Ct1r4fFU.js";import"./index-DEzdCF4t.js";import{C as m}from"./ControlsWithNote-D1sa-qp8.js";import{D as c}from"./DocsHeader-DjrY9cie.js";import{F as h}from"./CommandsAndQueries-Dbama0_5.js";import{C as r,D as p,W as l}from"./Search.stories-9O7fyZqg.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Kos-K4Y7.js";import"./sys-enter-2-2u8y4JZ8.js";import"./alert-B9GFCC-E.js";import"./index-bjg2761A.js";import"./index-CqnSlkgh.js";import"./Link-DaaF9wPB.js";import"./copy-Dh8i6Ivn.js";import"./copy-DBcroaPr.js";import"./GitHub-Mark-BK_77KI2.js";import"./TableOfContent-BhxtiYa9.js";import"./index-cLcvGVFq.js";import"./index-q-GTYwsa.js";import"./addCustomCSSWithScoping-CmltSw6g.js";import"./index-OkovUTEs.js";import"./index-D_RM7Ke7.js";import"./index-iYjiT_bL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvcqgxS_.js";import"./index-CPl6e78R.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-C4JrjZoV.js";import"./Input-BXjsXSc_.js";import"./ResponsivePopoverCommon.css-BlZ9FToc.js";import"./ValueStateMessage.css-CAd1FQ11.js";import"./Suggestions.css-D8AOIxab.js";import"./Search-BHnqgyTy.js";import"./Option-BETBD_j4.js";import"./ListItemBaseTemplate-CHOAwn4O.js";import"./Select-B8g_Zr6U.js";import"./InvisibleMessage-CZwz5JoO.js";import"./slim-arrow-down-D_fYxlqY.js";import"./slim-arrow-down-D05V1lot.js";import"./search-CowiCwrB.js";import"./SuggestionItem-BqBkM0aO.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
