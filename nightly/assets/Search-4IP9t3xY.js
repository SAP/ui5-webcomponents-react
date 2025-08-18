import{j as e}from"./iframe-DzQ21Lns.js";import{useMDXComponents as i}from"./index-BP8jxV1P.js";import{M as a,C as n}from"./blocks-DR2wB9AJ.js";import"./Tag-CfB46NJC.js";import"./index-CNaVfoQo.js";import{C as m}from"./ControlsWithNote-DxTvO-sr.js";import{D as c}from"./DocsHeader-tFSNOMKh.js";import{F as h}from"./CommandsAndQueries-BWveXsvx.js";import{C as r,D as p,W as l}from"./Search.stories-D6ItwO7F.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Bnz4tjJE.js";import"./sys-enter-2-DRV3a-On.js";import"./alert-DWi3aqX2.js";import"./index-CkGGqXom.js";import"./index-C8zdSeJc.js";import"./Link-CPcAifXQ.js";import"./copy-DQaE8EBM.js";import"./copy-BGzgj4Bd.js";import"./GitHub-Mark-Bk_uBANR.js";import"./TableOfContent-BW0VJaG-.js";import"./index-CWnRvMMQ.js";import"./index-D59XTyXP.js";import"./addCustomCSSWithScoping-BaIeMpA3.js";import"./index-BWETmYtu.js";import"./index-DDsUDeX-.js";import"./index-HmtkbZU0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKgLP4oW.js";import"./index-DSdf7z9x.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./generateHighlightedMarkup-BF3ia7Tq.js";import"./Input-BBc0FPcy.js";import"./ResponsivePopoverCommon.css-BEW3XFGK.js";import"./ValueStateMessage.css-CAFhnqqF.js";import"./Suggestions.css-oidNGW3x.js";import"./Search-CTAuE9c5.js";import"./Option-OQFsvput.js";import"./ListItemBaseTemplate-1GHgiBYL.js";import"./Select-D3cbLmw6.js";import"./InvisibleMessage-B2KrkcqD.js";import"./slim-arrow-down-Dh2WkWwy.js";import"./slim-arrow-down-BcVCCvLV.js";import"./search-DEmVZBlk.js";import"./SuggestionItem-B83CxbOY.js";import"./i18n-defaults-Cjp7arcT.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
