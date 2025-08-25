import{j as e}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as i}from"./index-CniPTHSz.js";import{M as a,C as n}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import{C as m}from"./ControlsWithNote-BMy8mcwg.js";import{D as c}from"./DocsHeader-C0PYfigg.js";import{F as h}from"./CommandsAndQueries-CtCNZgsU.js";import{C as r,D as p,W as l}from"./Search.stories-v8pFkwab.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./index--Vew3hXz.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./copy-DDKMzXcY.js";import"./copy-BNU1F6ls.js";import"./GitHub-Mark-DbVtln9l.js";import"./TableOfContent-HhhNHGfL.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./index-Bd7Nltjv.js";import"./parameters-bundle.css-34zgZIqy.js";import"./generateHighlightedMarkup-CKw0ndLx.js";import"./Input-nQkDkpMo.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";import"./ValueStateMessage.css-BWItzYrT.js";import"./Suggestions.css-ByBItAub.js";import"./Search-Dtz2Uvsp.js";import"./Option-BkfkZtHI.js";import"./ListItemBaseTemplate-DRr4zk5s.js";import"./Select-BBPMsUok.js";import"./InvisibleMessage-D-XldCbn.js";import"./slim-arrow-down-R4lWeZmU.js";import"./slim-arrow-down-BTcmIAZo.js";import"./search-CjALbqtp.js";import"./SuggestionItem-D841cpg4.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
