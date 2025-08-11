import{j as e}from"./iframe-DwijkcSC.js";import{useMDXComponents as m}from"./index-dOTQ_8MY.js";import{A as p}from"./ArgTypesWithNote-De4xyL2A.js";import{C as c}from"./ControlsWithNote-BmSkHN0c.js";import{D as l}from"./DocsHeader-DyyQoh0O.js";import{F as d}from"./CommandsAndQueries-v2kYi8f6.js";import{M as x,C as r,a as u,D as h}from"./blocks-CUT7ZaGY.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CViYJ4Yl.js";import{T as s}from"./index-Cu2UJGOr.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ksk45rXz.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./Tag-Bj54Z3ZV.js";import"./index-4CSwoMco.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./copy-MJNwXVZZ.js";import"./copy-BSROPq_0.js";import"./GitHub-Mark-1fwyJuBu.js";import"./TableOfContent-B_Zj5Anf.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./Token-C4gwLyQC.js";import"./ScrollEnablement-sczQYiMf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZEk89Tl.js";import"./ResponsivePopoverCommon.css-B6grsBrr.js";import"./Suggestions.css-Dr7vVlmc.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
