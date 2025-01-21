import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as d}from"./index-D23YZj_x.js";import{L as D}from"./index-DVZh2p7o.js";import{T as b}from"./index-DgufeG-1.js";import{T as n}from"./index-ClJMcnuP.js";import"./Token-BHYc_Vy-.js";import{w as z}from"./withWebComponent-DfVDXLfc.js";const l=z("ui5-tokenizer",["accessibleName","accessibleNameRef"],["disabled","multiLine","readonly","showClearAll"],[],["selection-change","token-delete"]);l.displayName="Tokenizer";const L={title:"Inputs / Tokenizer",component:l,args:{style:{width:"250px"}},tags:["package:@ui5/webcomponents"]},r={render(o){return e.jsxs(l,{...o,children:[e.jsx(n,{text:"Andorra"}),e.jsx(n,{text:"Bulgaria"}),e.jsx(n,{text:"Canada"}),e.jsx(n,{text:"Denmark"}),e.jsx(n,{text:"Estonia"}),e.jsx(n,{text:"Fiji"}),e.jsx(n,{text:"Ghana"}),e.jsx(n,{text:"India"}),e.jsx(n,{text:"Japan"}),e.jsx(n,{text:"Kenya"}),e.jsx(n,{text:"Luxembourg"}),e.jsx(n,{text:"Mexico"}),e.jsx(n,{text:"Nepal"}),e.jsx(n,{text:"Qatar"}),e.jsx(n,{text:"Uganda"})]})}},i={render(o){const[j,h]=d.useState(["Andorra","Bulgaria","Canada","Denmark","Estonia","Fiji","Ghana","India","Japan","Kenya","Luxembourg","Mexico","Nepal","Qatar","Uganda"]),[C,x]=d.useState([]),S=t=>{o.onTokenDelete(t);const{tokens:a}=t.detail;if(a){const c=a.map(s=>s.text);h(s=>s.filter(y=>!c.includes(y))),x([])}},f=t=>{o.onSelectionChange(t);const{tokens:a}=t.detail;if(a){const c=a.map(s=>s.text);x(c)}};return e.jsxs(e.Fragment,{children:[e.jsx(l,{...o,onTokenDelete:S,onSelectionChange:f,children:j.map(t=>e.jsx(n,{text:t},t))}),e.jsx("br",{}),e.jsxs("div",{style:{display:"flex",gap:"0.2rem"},children:[e.jsx(D,{showColon:!0,children:"Selected countries"}),e.jsx(b,{children:C.join(", ")})]})]})}};var k,u,p;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render(args) {
    return <Tokenizer {...args}>
        <Token text="Andorra" />
        <Token text="Bulgaria" />
        <Token text="Canada" />
        <Token text="Denmark" />
        <Token text="Estonia" />
        <Token text="Fiji" />
        <Token text="Ghana" />
        <Token text="India" />
        <Token text="Japan" />
        <Token text="Kenya" />
        <Token text="Luxembourg" />
        <Token text="Mexico" />
        <Token text="Nepal" />
        <Token text="Qatar" />
        <Token text="Uganda" />
      </Tokenizer>;
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,T,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render(args) {
    const [countries, setCountries] = useState(['Andorra', 'Bulgaria', 'Canada', 'Denmark', 'Estonia', 'Fiji', 'Ghana', 'India', 'Japan', 'Kenya', 'Luxembourg', 'Mexico', 'Nepal', 'Qatar', 'Uganda']);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const handleTokenDelete: TokenizerPropTypes['onTokenDelete'] = e => {
      args.onTokenDelete(e);
      const {
        tokens
      } = e.detail;
      if (tokens) {
        const tokensToDelete = tokens.map(token => token.text);
        setCountries(prev => prev.filter(country => !tokensToDelete.includes(country)));
        setSelectedCountries([]);
      }
    };
    const handleSelectionChange: TokenizerPropTypes['onSelectionChange'] = e => {
      args.onSelectionChange(e);
      const {
        tokens
      } = e.detail;
      if (tokens) {
        const selectedTokens = tokens.map(token => token.text);
        setSelectedCountries(selectedTokens);
      }
    };
    return <>
        <Tokenizer {...args} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
          {countries.map(country => <Token key={country} text={country} />)}
        </Tokenizer>
        <br />
        <div style={{
        display: 'flex',
        gap: '0.2rem'
      }}>
          <Label showColon>Selected countries</Label>
          <Text>{selectedCountries.join(', ')}</Text>
        </div>
      </>;
  }
}`,...(g=(T=i.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const w=["Default","WithLogic"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithLogic:i,__namedExportsOrder:w,default:L},Symbol.toStringTag,{value:"Module"}));export{M as C,r as D,i as W};
