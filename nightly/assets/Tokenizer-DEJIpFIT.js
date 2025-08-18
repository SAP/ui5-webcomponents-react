import{j as e}from"./iframe-DzQ21Lns.js";import{useMDXComponents as m}from"./index-BP8jxV1P.js";import{A as p}from"./ArgTypesWithNote-D-bTJI8l.js";import{C as c}from"./ControlsWithNote-DxTvO-sr.js";import{D as l}from"./DocsHeader-tFSNOMKh.js";import{F as d}from"./CommandsAndQueries-BWveXsvx.js";import{M as x,C as r,a as u,D as h}from"./blocks-DR2wB9AJ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DEKzMnFz.js";import{T as s}from"./index-oaZF61WZ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CNaVfoQo.js";import"./information-Bnz4tjJE.js";import"./sys-enter-2-DRV3a-On.js";import"./alert-DWi3aqX2.js";import"./Tag-CfB46NJC.js";import"./index-CkGGqXom.js";import"./index-C8zdSeJc.js";import"./Link-CPcAifXQ.js";import"./copy-DQaE8EBM.js";import"./copy-BGzgj4Bd.js";import"./GitHub-Mark-Bk_uBANR.js";import"./TableOfContent-BW0VJaG-.js";import"./index-CWnRvMMQ.js";import"./index-D59XTyXP.js";import"./addCustomCSSWithScoping-BaIeMpA3.js";import"./index-BWETmYtu.js";import"./index-DDsUDeX-.js";import"./index-HmtkbZU0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKgLP4oW.js";import"./Token-B6x8t07X.js";import"./ScrollEnablement-EY3VdHjS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yc3QYJD2.js";import"./ResponsivePopoverCommon.css-BEW3XFGK.js";import"./Suggestions.css-oidNGW3x.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
