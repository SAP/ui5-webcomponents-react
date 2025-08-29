import{j as e}from"./iframe-BM9OIWQT.js";import{useMDXComponents as i}from"./index-BmDGYHRp.js";import{M as a,C as n}from"./blocks-DGMiQa0Z.js";import"./Tag-Bg9SPuPk.js";import"./index-DdMY_iOX.js";import{C as m}from"./ControlsWithNote-jMhQcm0L.js";import{D as c}from"./DocsHeader-BkMyfoY7.js";import{F as h}from"./CommandsAndQueries-CxAAQY3-.js";import{C as r,D as p,W as l}from"./Search.stories-B5ta-Ca0.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Ofjl_yVD.js";import"./sys-enter-2-BDJ8zEGu.js";import"./alert-BRWAPDyh.js";import"./index-DEAaUqYT.js";import"./index-9kU-764p.js";import"./Link-D90fL3tj.js";import"./copy-CanxbKAr.js";import"./copy-C5RvIJ1i.js";import"./GitHub-Mark-CoBOY9LH.js";import"./TableOfContent-DDTzQYJ7.js";import"./index-9uui-4yc.js";import"./index-BFMSgsw3.js";import"./addCustomCSSWithScoping-DJtAPEon.js";import"./index-CLY-4HWK.js";import"./index-DnPpq_H3.js";import"./index-6r2kDh88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4WbvrxN.js";import"./index-KHXkmPjP.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-fDvqIiXf.js";import"./Input-Dn5iQQwi.js";import"./ResponsivePopoverCommon.css-C06uDNZk.js";import"./ValueStateMessage.css-45247xTr.js";import"./Suggestions.css-D3BTSrmf.js";import"./Search-CkphHKOy.js";import"./Option-C3MxzwCu.js";import"./ListItemBaseTemplate-4FD8RdDt.js";import"./Select-BMZ7_MPl.js";import"./InvisibleMessage-B5HLZjpk.js";import"./slim-arrow-down-BTYV_0EQ.js";import"./slim-arrow-down-DZH9bZ7T.js";import"./search-CVNLuNpt.js";import"./SuggestionItem-9SkfTs2v.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
