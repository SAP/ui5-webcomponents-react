import{j as e}from"./iframe-Ckbc0Bmx.js";import{useMDXComponents as i}from"./index-DE-5xG9A.js";import{M as a,C as n}from"./blocks-D8tYWjnn.js";import"./Tag-rdyPterE.js";import"./index-Darg-j2X.js";import{C as m}from"./ControlsWithNote-DLVwlFtc.js";import{D as c}from"./DocsHeader-BLzJKU0S.js";import{F as h}from"./CommandsAndQueries-DKucLITF.js";import{C as r,D as p,W as l}from"./Search.stories-DaTC-EqF.js";import"./preload-helper-Ct5FWWRu.js";import"./information-OBfwqURu.js";import"./sys-enter-2-BD7M3cvb.js";import"./alert-j4aUIFXI.js";import"./index-CuHvomlB.js";import"./index-CzMZkzJI.js";import"./Link-D1WHOsxc.js";import"./copy-DgE2YH3h.js";import"./copy-B7_DIIST.js";import"./GitHub-Mark-9fjhK1SO.js";import"./TableOfContent-BEHGMBJ6.js";import"./index-CrFxuHUZ.js";import"./index-COfW_OVU.js";import"./addCustomCSSWithScoping-Cf-O7l9b.js";import"./index-usyep8x_.js";import"./index-fzfaunU7.js";import"./index-C-9s8bgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oJ-6Sn3x.js";import"./index-DSBqYQ12.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-BzPQgl3C.js";import"./Input-WAgKnw3k.js";import"./ResponsivePopoverCommon.css-Ci4jtjI2.js";import"./ValueStateMessage.css-CoCSxpGR.js";import"./Suggestions.css-BqzJ2RoF.js";import"./Search-BmJVmzPw.js";import"./Option-CCnRI1MY.js";import"./ListItemBaseTemplate-CaX2s66e.js";import"./Select-DFcsUJ0F.js";import"./InvisibleMessage-BDhZ3h8W.js";import"./slim-arrow-down-Cx5QOJiF.js";import"./slim-arrow-down-Dx-bO6Dc.js";import"./search-BrT2aAI2.js";import"./SuggestionItem-DlajEpIp.js";import"./i18n-defaults-dyGKyNAh.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
