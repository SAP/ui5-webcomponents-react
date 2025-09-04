import{j as e}from"./iframe-DOJWwQPM.js";import{useMDXComponents as i}from"./index-D4GYqxG5.js";import{M as a,C as n}from"./blocks-UH_Armuh.js";import"./Tag-C5qooBCQ.js";import"./index-BzlDTQAu.js";import{C as m}from"./ControlsWithNote-Bcqp_K0Z.js";import{D as c}from"./DocsHeader-CA2lf6wX.js";import{F as h}from"./CommandsAndQueries-DBgPcKIy.js";import{C as r,D as p,W as l}from"./Search.stories-CPbtZX90.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-BiSRDS7B.js";import"./sys-enter-2-Ct0rvJ7Z.js";import"./alert-DJAqfmG4.js";import"./index-DKP6N4eU.js";import"./index-CAij4Fwu.js";import"./Link-OhZHx2sI.js";import"./copy-vTKoYhBq.js";import"./copy-DtHn9BZF.js";import"./GitHub-Mark-BFwQs7K7.js";import"./TableOfContent-Ckk6Hfr1.js";import"./index-CKKp0V8L.js";import"./index-BE18fnIz.js";import"./addCustomCSSWithScoping-7a5LAVf5.js";import"./index-IwfXz8bd.js";import"./index-DWcAbIiW.js";import"./index-CCV0Si6x.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-lKnjzqmd.js";import"./index-CZyd96Ki.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-DaJIm4Y8.js";import"./Input-Bvv54WJ3.js";import"./ResponsivePopoverCommon.css-PVlGE3yL.js";import"./ValueStateMessage.css-O1QyKtEp.js";import"./Suggestions.css-XOF_Sz64.js";import"./Search-MgFFlNMC.js";import"./Option-yF138sxw.js";import"./ListItemBaseTemplate-CNX0LT1O.js";import"./Select-BfiyHYxw.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-B0GkeD5A.js";import"./slim-arrow-down-CS8FeIva.js";import"./search-juyv2hPB.js";import"./SuggestionItem-BNjcGuMf.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
`,e.jsx(h,{})]})}function pe(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{pe as default};
