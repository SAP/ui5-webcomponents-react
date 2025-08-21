import{j as e}from"./iframe-D9TrNBgU.js";import{useMDXComponents as m}from"./index-DVnXt3Ou.js";import{A as p}from"./ArgTypesWithNote-SPqVTZOw.js";import{C as c}from"./ControlsWithNote-CSjZ13nD.js";import{D as l}from"./DocsHeader-0Jjxl0tR.js";import{F as d}from"./CommandsAndQueries-D4YJbg3c.js";import{M as x,C as r,a as u,D as h}from"./blocks-CZTCdXhi.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-_naVl5Fp.js";import{T as s}from"./index-DyvpVbHw.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BNvAHmYG.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./Tag-Dxsn5xSE.js";import"./index-CVrKfxdZ.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./copy-idIQo1yB.js";import"./copy-DLBvKbOK.js";import"./GitHub-Mark-CR-XH0WA.js";import"./TableOfContent-Bm0N_0e1.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./Token-Coz-0Psc.js";import"./ScrollEnablement-DyC328cf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbZzwl2a.js";import"./ResponsivePopoverCommon.css-C8Orn_aN.js";import"./Suggestions.css-Bf6rrCOA.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
