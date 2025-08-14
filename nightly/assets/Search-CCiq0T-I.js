import{j as e}from"./iframe-ecJTvqfE.js";import{useMDXComponents as i}from"./index-DboZxcYT.js";import{M as a,C as n}from"./blocks-qsqxfOd3.js";import"./Tag-ZKnVgoL_.js";import"./index-BC9DFcam.js";import{C as m}from"./ControlsWithNote--sJtiopn.js";import{D as c}from"./DocsHeader-DRQa0RQI.js";import{F as h}from"./CommandsAndQueries-BpdU-ZQD.js";import{C as r,D as p,W as l}from"./Search.stories-Bf4uW7ru.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DxOwMn8K.js";import"./sys-enter-2-CERMkNGF.js";import"./alert-Bvw6_neD.js";import"./index-F3eIUiL2.js";import"./index-D-eR8SSU.js";import"./Link-BtvKGD3A.js";import"./copy-DmHQCbEE.js";import"./copy-BgNjKRC7.js";import"./GitHub-Mark-CJwtkSkN.js";import"./TableOfContent-Ba58XBM3.js";import"./index-DsPSpYGU.js";import"./index-CvbQPYli.js";import"./addCustomCSSWithScoping-DjLfDywf.js";import"./index-gkiYXWNa.js";import"./index-gUQqjp18.js";import"./index-Bnh2IJ03.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CFe2wd2s.js";import"./index-Ch6YnBLf.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-DbFmQ3Fh.js";import"./Input-DpcAuAe8.js";import"./ResponsivePopoverCommon.css-Cw_YH4h8.js";import"./ValueStateMessage.css-DDOE9-R1.js";import"./Suggestions.css-BnKo4JPe.js";import"./Search-ZZgetdI-.js";import"./Option-BE8Mkbt2.js";import"./ListItemBaseTemplate-DK6hWDmp.js";import"./Select-BzSJCrjN.js";import"./InvisibleMessage-B5otcPql.js";import"./slim-arrow-down-DonzRt-h.js";import"./slim-arrow-down-3aK9z7Cc.js";import"./search-km3ClTaq.js";import"./SuggestionItem-DxZuFNrZ.js";import"./i18n-defaults-dyGKyNAh.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
