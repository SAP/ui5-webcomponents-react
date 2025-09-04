import{j as e}from"./iframe-S1rR11cQ.js";import{useMDXComponents as m}from"./index-69KsrxW4.js";import{A as p}from"./ArgTypesWithNote-Ch_jp9Xg.js";import{C as c}from"./ControlsWithNote-CHK256Ms.js";import{D as l}from"./DocsHeader-DFJ6mRj_.js";import{F as d}from"./CommandsAndQueries-7fbj5dZq.js";import{M as x,C as r,a as u,D as h}from"./blocks-C1kWdW5O.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BkUQ6DkK.js";import{T as s}from"./index-btRDbZlV.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./index-DjdMAx9G.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./Tag-Do4MK6Vd.js";import"./index-BO-Ud12y.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./copy-l8_6TPqW.js";import"./copy-DEUCxjzs.js";import"./GitHub-Mark-DiNZwmzT.js";import"./TableOfContent-Ckuc7xPL.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";import"./Token-r_fCtFrS.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbQSk8O2.js";import"./ResponsivePopoverCommon.css-Dp9rYv_8.js";import"./Suggestions.css-Ci1w_A7X.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
`,e.jsx(d,{})]})}function oe(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{oe as default};
