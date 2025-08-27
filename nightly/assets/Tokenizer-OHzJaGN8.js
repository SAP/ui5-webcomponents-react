import{j as e}from"./iframe-BuT579UQ.js";import{useMDXComponents as m}from"./index-hwCnNpvR.js";import{A as p}from"./ArgTypesWithNote-DIBgt_4-.js";import{C as c}from"./ControlsWithNote-BhkP8uA-.js";import{D as l}from"./DocsHeader-3ZL9iB6q.js";import{F as d}from"./CommandsAndQueries-bkB85Yh1.js";import{M as x,C as r,a as u,D as h}from"./blocks-xCv3ALrs.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-D_DVTpgz.js";import{T as s}from"./index-Bm8885LL.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BdhtxwT5.js";import"./information-BpdkAt88.js";import"./sys-enter-2-fNvpiTi4.js";import"./alert-Dvzv9mH1.js";import"./Tag-BfLQPV5Q.js";import"./index-Sm3A70Iw.js";import"./index-DcodLJdG.js";import"./Link-BRdwNtbO.js";import"./copy-B0njaLsn.js";import"./copy-wEyzDN_W.js";import"./GitHub-Mark-kV7bFz4J.js";import"./TableOfContent-38NG_1gx.js";import"./index-B5tYw3g0.js";import"./index-CKRjOfqg.js";import"./addCustomCSSWithScoping-BObqnoGh.js";import"./index-CSxL7VzK.js";import"./index-mwQcMkri.js";import"./index-t5BVUaSq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWHNxoJ6.js";import"./Token-D5ISVM2O.js";import"./ScrollEnablement-CcsddKsW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHi924vm.js";import"./ResponsivePopoverCommon.css-qGTg7BLI.js";import"./Suggestions.css-Bcp4Zv_G.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
