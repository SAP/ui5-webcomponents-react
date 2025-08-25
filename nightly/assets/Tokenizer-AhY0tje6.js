import{j as e}from"./iframe-Y9u60a80.js";import{useMDXComponents as m}from"./index-Bori-Nod.js";import{A as p}from"./ArgTypesWithNote-CZrSCzOw.js";import{C as c}from"./ControlsWithNote-laTaCTcY.js";import{D as l}from"./DocsHeader-1K3Kbib7.js";import{F as d}from"./CommandsAndQueries-eYIoXNgT.js";import{M as x,C as r,a as u,D as h}from"./blocks-C6Tkp4w5.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DJixjN8k.js";import{T as s}from"./index-D2s3LnHD.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CpV662zw.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./Tag-CuXUrZqk.js";import"./index-BUCogs4k.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./copy-bzJkQwnc.js";import"./copy-DwFBIccM.js";import"./GitHub-Mark-BeVgJP-S.js";import"./TableOfContent-C0xGCGUb.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./Token-4uwHlG5Q.js";import"./ScrollEnablement-CsQtNunN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKYvsgaA.js";import"./ResponsivePopoverCommon.css-DKPC5jE6.js";import"./Suggestions.css-BCVBy9X3.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
