import{w as g,j as e,r as u,J as y}from"./iframe-B3OL0dJj.js";import{L as T}from"./index-bmuDs-E9.js";import{T as n}from"./index-DEPPSwoa.js";import"./Token-CFAmjSAI.js";const o=g("ui5-tokenizer",["accessibleName","accessibleNameRef"],["disabled","multiLine","readonly","showClearAll"],[],["selection-change","token-delete"]);o.displayName="Tokenizer";try{o.displayName="Tokenizer",o.__docgenInfo={description:`A \`Tokenizer\` is an invisible container for \`Token\`s that supports keyboard navigation and token selection.

The \`Tokenizer\` consists of two parts:
- Tokens - displays the available tokens.
- N-more indicator - contains the number of the remaining tokens that cannot be displayed due to the limited space.

### Keyboard Handling

#### Basic Navigation
The \`Tokenizer\` provides advanced keyboard handling.
When a token is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Left] or [Right] / [Up] or [Down] - Navigates left and right through the tokens.
- [Home] - Navigates to the first token.
- [End] - Navigates to the last token.

The user can use the following keyboard shortcuts to perform actions (such as select, delete):

- [Space] - Selects a token.
- [Backspace] / [Delete] - Deletes a token.
**Note:** The deletion of a token is handled by the application with the use of the \`token-delete\` event.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Tokenizer",props:{children:{defaultValue:null,description:"Defines the tokens to be displayed.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectionChange:{defaultValue:null,description:`Fired when token selection is changed by user interaction

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TokenizerDomRef, TokenizerSelectionChangeEventDetail>) => void"}},onTokenDelete:{defaultValue:null,description:`Fired when tokens are being deleted (delete icon, delete or backspace is pressed)

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onTokenDelete",required:!1,type:{name:"(event: Ui5CustomEvent<TokenizerDomRef, TokenizerTokenDeleteEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},multiLine:{defaultValue:{value:"false"},description:`Defines whether tokens are displayed on multiple lines.

**Note:** The \`multiLine\` property is in an experimental state and is a subject to change.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"multiLine",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},showClearAll:{defaultValue:{value:"false"},description:'Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.\n\n**Note:** The `showClearAll` property is in an experimental state and is a subject to change.\n\n**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.',name:"showClearAll",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="Tokenizer",o.__docgenInfo={description:`A \`Tokenizer\` is an invisible container for \`Token\`s that supports keyboard navigation and token selection.

The \`Tokenizer\` consists of two parts:
- Tokens - displays the available tokens.
- N-more indicator - contains the number of the remaining tokens that cannot be displayed due to the limited space.

### Keyboard Handling

#### Basic Navigation
The \`Tokenizer\` provides advanced keyboard handling.
When a token is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Left] or [Right] / [Up] or [Down] - Navigates left and right through the tokens.
- [Home] - Navigates to the first token.
- [End] - Navigates to the last token.

The user can use the following keyboard shortcuts to perform actions (such as select, delete):

- [Space] - Selects a token.
- [Backspace] / [Delete] - Deletes a token.
**Note:** The deletion of a token is handled by the application with the use of the \`token-delete\` event.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Tokenizer",props:{children:{defaultValue:null,description:"Defines the tokens to be displayed.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectionChange:{defaultValue:null,description:`Fired when token selection is changed by user interaction

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TokenizerDomRef, TokenizerSelectionChangeEventDetail>) => void"}},onTokenDelete:{defaultValue:null,description:`Fired when tokens are being deleted (delete icon, delete or backspace is pressed)

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onTokenDelete",required:!1,type:{name:"(event: Ui5CustomEvent<TokenizerDomRef, TokenizerTokenDeleteEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},multiLine:{defaultValue:{value:"false"},description:`Defines whether tokens are displayed on multiple lines.

**Note:** The \`multiLine\` property is in an experimental state and is a subject to change.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"multiLine",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},showClearAll:{defaultValue:{value:"false"},description:'Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.\n\n**Note:** The `showClearAll` property is in an experimental state and is a subject to change.\n\n**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.',name:"showClearAll",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Inputs / Tokenizer",component:o,args:{style:{width:"250px"}},tags:["package:@ui5/webcomponents","experimental"]},l={render(a){return e.jsxs(o,{...a,children:[e.jsx(n,{text:"Andorra"}),e.jsx(n,{text:"Bulgaria"}),e.jsx(n,{text:"Canada"}),e.jsx(n,{text:"Denmark"}),e.jsx(n,{text:"Estonia"}),e.jsx(n,{text:"Fiji"}),e.jsx(n,{text:"Ghana"}),e.jsx(n,{text:"India"}),e.jsx(n,{text:"Japan"}),e.jsx(n,{text:"Kenya"}),e.jsx(n,{text:"Luxembourg"}),e.jsx(n,{text:"Mexico"}),e.jsx(n,{text:"Nepal"}),e.jsx(n,{text:"Qatar"}),e.jsx(n,{text:"Uganda"})]})}},r={render(a){const[p,m]=u.useState(["Andorra","Bulgaria","Canada","Denmark","Estonia","Fiji","Ghana","India","Japan","Kenya","Luxembourg","Mexico","Nepal","Qatar","Uganda"]),[h,d]=u.useState([]),f=t=>{a.onTokenDelete(t);const{tokens:s}=t.detail;if(s){const c=s.map(i=>i.text);m(i=>i.filter(k=>!c.includes(k))),d([])}},b=t=>{a.onSelectionChange(t);const{tokens:s}=t.detail;if(s){const c=s.map(i=>i.text);d(c)}};return e.jsxs(e.Fragment,{children:[e.jsx(o,{...a,onTokenDelete:f,onSelectionChange:b,children:p.map(t=>e.jsx(n,{text:t},t))}),e.jsx("br",{}),e.jsxs("div",{style:{display:"flex",gap:"0.2rem"},children:[e.jsx(T,{showColon:!0,children:"Selected countries"}),e.jsx(y,{children:h.join(", ")})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Default","WithLogic"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:l,WithLogic:r,__namedExportsOrder:v,default:x},Symbol.toStringTag,{value:"Module"}));export{S as C,l as D,r as W};
