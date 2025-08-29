import{j as e}from"./iframe-CMv2_fr8.js";import{useMDXComponents as i}from"./index-BCZO-1se.js";import{M as a,C as n}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import{C as m}from"./ControlsWithNote-_PUNWkdQ.js";import{D as c}from"./DocsHeader-Cx6Y1JDI.js";import{F as h}from"./CommandsAndQueries-UgVWTBkO.js";import{C as r,D as p,W as l}from"./Search.stories-ylPUGP5E.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./index-51EQIK1-.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./copy-ujimQgxv.js";import"./copy-Bp5geyDe.js";import"./GitHub-Mark-BaSZHoZf.js";import"./TableOfContent-CaCWTgrs.js";import"./index-BP5Wh9d8.js";import"./index-mbEJ-Zu7.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-wL9CVecO.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";import"./index-WvuOpYYG.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-DsVksgug.js";import"./Input-Bl2hG8Lo.js";import"./ResponsivePopoverCommon.css-TrKPArzz.js";import"./ValueStateMessage.css-CQDFsMMJ.js";import"./Suggestions.css-Ak-2B7T4.js";import"./Search-BY8uFsJh.js";import"./Option-h29ztJ0M.js";import"./ListItemBaseTemplate-CQloCMYu.js";import"./Select-CqjrQ-1B.js";import"./InvisibleMessage-BDnkulxx.js";import"./slim-arrow-down-B9Cmh7Gb.js";import"./slim-arrow-down-BTfvD9aU.js";import"./search-DpeA7wkf.js";import"./SuggestionItem-StPux35r.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
