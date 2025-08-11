import{j as e}from"./iframe-DvixYE7k.js";import{useMDXComponents as i}from"./index-DvcP8w-F.js";import{M as a,C as n}from"./blocks-CTAO90yM.js";import"./Tag-CHowEnLY.js";import"./index-BGjL_ZJV.js";import{C as m}from"./ControlsWithNote-s_60twtr.js";import{D as c}from"./DocsHeader-BkkmtBJn.js";import{F as h}from"./CommandsAndQueries-BP59pkyc.js";import{C as r,D as p,W as l}from"./Search.stories-Bi41j-qO.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./index-BiNCRTue.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./copy-BSDmbcVi.js";import"./copy-CVzsP6l9.js";import"./GitHub-Mark-1hS7OttQ.js";import"./TableOfContent-gAqVWuC4.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./index-B28BIEF2.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-CafaEtXo.js";import"./Input-COwe4oO2.js";import"./ResponsivePopoverCommon.css-B5iSbHgX.js";import"./ValueStateMessage.css-Dh9bgGbN.js";import"./Suggestions.css-BE8JkRfe.js";import"./Search-B2WX7y4y.js";import"./Option-CbzqeI1G.js";import"./ListItemBaseTemplate-0XXQ3IbQ.js";import"./Select-DsKB4JBR.js";import"./InvisibleMessage-BYn7ctRV.js";import"./slim-arrow-down-BZHFnOJT.js";import"./slim-arrow-down-Bl8g1r6x.js";import"./search-70vF2UkV.js";import"./SuggestionItem-JpbR4qH1.js";import"./i18n-defaults-dyGKyNAh.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
