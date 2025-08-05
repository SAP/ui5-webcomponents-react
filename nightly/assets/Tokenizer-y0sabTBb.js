import{j as e}from"./iframe-CG2rGjbc.js";import{useMDXComponents as m}from"./index-DS69H-n6.js";import{A as p}from"./ArgTypesWithNote-CzPVYTqN.js";import{C as c}from"./ControlsWithNote-BFQM5fX0.js";import{D as l}from"./DocsHeader-BGOyORj-.js";import{F as d}from"./CommandsAndQueries-DskZpT92.js";import{M as x,C as r,a as u,D as h}from"./blocks-BOXfYYlZ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-B7CVqIGS.js";import{T as s}from"./index-ucu-X0JD.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BVmbnKNa.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./Tag-B3NEGkkI.js";import"./index-vBa65tZZ.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./copy-Cd5gRkoK.js";import"./copy-Cj_PeOWN.js";import"./GitHub-Mark-C4GRBKUH.js";import"./TableOfContent-DgRpeg8V.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./Token-DnsYDL6G.js";import"./ScrollEnablement-D96l-16O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYmen0Jk.js";import"./ResponsivePopoverCommon.css-ZxvNyTGX.js";import"./Suggestions.css-BEa1e1bh.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
