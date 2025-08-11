import{j as e}from"./iframe-BCRKbB-F.js";import{useMDXComponents as m}from"./index-BX-rGI6y.js";import{A as p}from"./ArgTypesWithNote-IjngABwd.js";import{C as c}from"./ControlsWithNote-CZlmxkvK.js";import{D as l}from"./DocsHeader-oxYn0Q0e.js";import{F as d}from"./CommandsAndQueries-B-6PqVJi.js";import{M as x,C as r,a as u,D as h}from"./blocks-7Z_E6jI9.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-yJ-_plIU.js";import{T as s}from"./index-kDPGCy_f.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-3HueK4.js";import"./information-DeBw_tQ-.js";import"./sys-enter-2-pSQieqxz.js";import"./alert-xw5ZZb5l.js";import"./Tag-DS_H74jk.js";import"./index-C9k5hi-S.js";import"./index-DsSU62b9.js";import"./Link-DusYvz_E.js";import"./copy-_UA8GWmu.js";import"./copy-B5cEq6fF.js";import"./GitHub-Mark-C2uv7FuH.js";import"./TableOfContent-DlQOflHd.js";import"./index-BH2JzlMl.js";import"./index-eqaCtQgG.js";import"./addCustomCSSWithScoping-DUsuu1QR.js";import"./index-Cfre80S4.js";import"./index-DNvh-56A.js";import"./index-K2GRSkK5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mh7-FWH-.js";import"./Token-B8NvFI2b.js";import"./ScrollEnablement-CeBEvB5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-TvAAd95E.js";import"./ResponsivePopoverCommon.css-BpeopXwv.js";import"./Suggestions.css-sLFaTK7q.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
