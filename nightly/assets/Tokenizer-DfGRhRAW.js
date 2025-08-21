import{j as e}from"./iframe-Ds_ksB4e.js";import{useMDXComponents as m}from"./index-H-IHaXTw.js";import{A as p}from"./ArgTypesWithNote-R_nTH_V6.js";import{C as c}from"./ControlsWithNote-COl1xdrJ.js";import{D as l}from"./DocsHeader-CZukLoy9.js";import{F as d}from"./CommandsAndQueries-sjInqy8W.js";import{M as x,C as r,a as u,D as h}from"./blocks-BF1agP19.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-229bI6R8.js";import{T as s}from"./index-BEpEwcS1.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CCQ7ngcv.js";import"./information-CXQdNqP2.js";import"./sys-enter-2-DgaAD1QG.js";import"./alert-D9-5boQa.js";import"./Tag-CPZT7-Kj.js";import"./index-BveKVBSZ.js";import"./index-CCxnn_jg.js";import"./Link-B7c1MguO.js";import"./copy-FKcCl74u.js";import"./copy-CiclUpSF.js";import"./GitHub-Mark-BUFcyxFx.js";import"./TableOfContent-CNAJZVUt.js";import"./index-C9iUZPx4.js";import"./index-Cz-9QImp.js";import"./addCustomCSSWithScoping-C1wNASBp.js";import"./index-BeCgQ8PU.js";import"./index-De0nbQnW.js";import"./index-D0B9W_Us.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1VftYSW.js";import"./Token-DQQbOMYd.js";import"./ScrollEnablement-C0SuwG25.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D3h_gJ31.js";import"./ResponsivePopoverCommon.css-CtrWfz2O.js";import"./Suggestions.css-Q3AZmBnp.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
`,e.jsx(l,{of:t,subComponents:["Token"],experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h2,{id:"tokenizer-with-selection--delete-logic",children:"Tokenizer with selection & delete logic"}),`
`,e.jsx(r,{of:k}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function TokenizerComponent(props) {
  const [countries, setCountries] = useState([
    'Andorra',
    'Bulgaria',
    'Canada',
    'Denmark',
    'Estonia',
    'Fiji',
    'Ghana',
    'India',
    'Japan',
    'Kenya',
    'Luxembourg',
    'Mexico',
    'Nepal',
    'Qatar',
    'Uganda'
  ]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const handleTokenDelete: TokenizerPropTypes['onTokenDelete'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const tokensToDelete = tokens.map((token) => token.text);
      setCountries((prev) => prev.filter((country) => !tokensToDelete.includes(country)));
      setSelectedCountries([]);
    }
  };
  const handleSelectionChange: TokenizerPropTypes['onSelectionChange'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const selectedTokens = tokens.map((token) => token.text);
      setSelectedCountries(selectedTokens);
    }
  };
  return (
    <>
      <Tokenizer {...props} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
        {countries.map((country) => (
          <Token key={country} text={country} />
        ))}
      </Tokenizer>
      <br />
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <Label showColon>Selected countries</Label>
        <Text>{selectedCountries.join(', ')}</Text>
      </div>
    </>
  );
}
`})})]}),`
`,e.jsx(u,{children:f}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(p,{metaOf:t,of:s}),`
`,e.jsx(d,{})]})}function ne(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ne as default};
