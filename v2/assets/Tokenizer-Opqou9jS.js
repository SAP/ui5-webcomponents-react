import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Token-CXpKJcia.js";import{i,r as a}from"./react-fLZJfuRT.js";import{_ as o,d as s,o as c,r as l,u}from"./blocks-B0uojeB4.js";import{S as d,b as f,f as p,t as m,u as h}from"./components-WtVE3joN.js";import{n as g,t as _}from"./SubcomponentsSection-Kv79Q7K7.js";import{i as v,n as y,r as b,t as x}from"./Tokenizer.stories-CeDgNYym.js";function S(e){let t={code:`code`,h2:`h2`,pre:`pre`,...i(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{of:y}),`
`,(0,w.jsx)(p,{of:y,subComponents:[`Token`],experimental:!0}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,w.jsx)(l,{of:x}),`
`,(0,w.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,w.jsx)(f,{of:x}),`
`,(0,w.jsx)(t.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,w.jsx)(t.h2,{id:`tokenizer-with-selection--delete-logic`,children:`Tokenizer with selection & delete logic`}),`
`,(0,w.jsx)(l,{of:b}),`
`,(0,w.jsxs)(`details`,{children:[(0,w.jsx)(`summary`,{children:`Show Code`}),(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-tsx`,children:`function TokenizerComponent(props) {
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
`,(0,w.jsx)(u,{children:_}),`
`,(0,w.jsx)(t.h2,{id:`token`,children:`Token`}),`
`,(0,w.jsx)(c,{of:r}),`
`,(0,w.jsx)(d,{metaOf:y,of:r}),`
`,(0,w.jsx)(h,{})]})}function C(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=t(),a(),m(),o(),v(),n(),g()})))()}T();export{C as default};