import{j as e}from"./iframe-D1CS9P6r.js";import{useMDXComponents as m}from"./index-DKS5TQ2O.js";import{A as p}from"./ArgTypesWithNote-DUuzBIzc.js";import{C as c}from"./ControlsWithNote-bB8M-xo-.js";import{D as l}from"./DocsHeader-DqFBc6bk.js";import{F as d}from"./CommandsAndQueries-D0Ldf7j-.js";import{M as x,C as r,a as u,D as h}from"./blocks-MP9p7uJf.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-tU2Z9MkD.js";import{T as s}from"./index-BMJXFCaW.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C59Ra6n3.js";import"./information-BCqqCqDW.js";import"./sys-enter-2-JjIQxhse.js";import"./alert-DkFxMsXD.js";import"./Tag-r4fVuSPw.js";import"./index-CyljgwzW.js";import"./index-DHqmSgZq.js";import"./Link-Q9DSvFtD.js";import"./copy-B3z6Y6mD.js";import"./copy-BXLeuYzA.js";import"./GitHub-Mark-DwGBsHTD.js";import"./TableOfContent-BMLMtwCD.js";import"./index-BYGl8AOq.js";import"./index-ChylkqIr.js";import"./addCustomCSSWithScoping-Djl5XvUO.js";import"./index--uuuPK6U.js";import"./index-B4Hl6Eco.js";import"./index-KmWwkr3l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CUZwPhW2.js";import"./Token-DHh_XbjI.js";import"./ScrollEnablement-B8q0SaPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DceIYdr9.js";import"./ResponsivePopoverCommon.css-Cpf4pg7D.js";import"./Suggestions.css-Bt6O6fMa.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
