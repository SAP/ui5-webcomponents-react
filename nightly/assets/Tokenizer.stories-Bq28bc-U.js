import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{n as r,t as i}from"./withWebComponent-DDACWNN1.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{n as o,t as s}from"./Text-BQQeY0Nc.js";import{n as c,t as l}from"./Label-D201qzLx.js";import{a as u}from"./Token-CBvUbudf.js";import{n as d,t as f}from"./Token-C2SFj3Sj.js";var p;function m(){return(m=e((()=>{u(),i(),p=r(`ui5-tokenizer`,[`accessibleName`,`accessibleNameRef`,`name`],[`disabled`,`multiLine`,`readonly`,`showClearAll`],[],[`selection-change`,`token-delete`]),p.displayName=`Tokenizer`;try{p.displayName=`Tokenizer`,p.__docgenInfo={description:`A \`Tokenizer\` is an invisible container for \`Token\`s that supports keyboard navigation and token selection.

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



__Note:__ This is a UI5 Web Component! [Tokenizer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Tokenizer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Tokenizer`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`}],description:`Defines the tokens to be displayed.

__Supported Node Type/s:__ \`Array<Token>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`}],description:`Fired when token selection is changed by user interaction

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelectionChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TokenizerDomRef, TokenizerSelectionChangeEventDetail>) => void`}},onTokenDelete:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`}],description:`Fired when tokens are being deleted (delete icon, delete or backspace is pressed)

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onTokenDelete`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TokenizerDomRef, TokenizerTokenDeleteEventDetail>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Receives id(or many ids) of the elements that label the component.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},multiLine:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines whether tokens are displayed on multiple lines.

**Note:** The \`multiLine\` property is in an experimental state and is a subject to change.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`multiLine`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.
**Note:** When the component is used inside a form element,
the value is sent as the first element in the form data, even if it's empty.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showClearAll:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:'Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.\n\n**Note:** The `showClearAll` property is in an experimental state and is a subject to change.\n\n**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.',name:`showClearAll`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`,experimental:`This component is availabe since 2.0 under an experimental flag and its API and behaviour are subject to change.`}}}catch{}})))()}var h=t({Default:()=>y,WithLogic:()=>b,__namedExportsOrder:()=>x,default:()=>v}),g,_,v,y,b,x;function S(){return(S=e((()=>{g=n(),c(),o(),d(),m(),_=a(),v={title:`Inputs / Tokenizer`,component:p,args:{style:{width:`250px`}},tags:[`package:@ui5/webcomponents`,`experimental`]},y={render(e){return(0,_.jsxs)(p,{...e,children:[(0,_.jsx)(f,{text:`Andorra`}),(0,_.jsx)(f,{text:`Bulgaria`}),(0,_.jsx)(f,{text:`Canada`}),(0,_.jsx)(f,{text:`Denmark`}),(0,_.jsx)(f,{text:`Estonia`}),(0,_.jsx)(f,{text:`Fiji`}),(0,_.jsx)(f,{text:`Ghana`}),(0,_.jsx)(f,{text:`India`}),(0,_.jsx)(f,{text:`Japan`}),(0,_.jsx)(f,{text:`Kenya`}),(0,_.jsx)(f,{text:`Luxembourg`}),(0,_.jsx)(f,{text:`Mexico`}),(0,_.jsx)(f,{text:`Nepal`}),(0,_.jsx)(f,{text:`Qatar`}),(0,_.jsx)(f,{text:`Uganda`})]})}},b={render(e){let[t,n]=(0,g.useState)([`Andorra`,`Bulgaria`,`Canada`,`Denmark`,`Estonia`,`Fiji`,`Ghana`,`India`,`Japan`,`Kenya`,`Luxembourg`,`Mexico`,`Nepal`,`Qatar`,`Uganda`]),[r,i]=(0,g.useState)([]),a=t=>{e.onTokenDelete(t);let{tokens:r}=t.detail;if(r){let e=r.map(e=>e.text);n(t=>t.filter(t=>!e.includes(t))),i([])}},o=t=>{e.onSelectionChange(t);let{tokens:n}=t.detail;if(n){let e=n.map(e=>e.text);i(e)}};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{...e,onTokenDelete:a,onSelectionChange:o,children:t.map(e=>(0,_.jsx)(f,{text:e},e))}),(0,_.jsx)(`br`,{}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`0.2rem`},children:[(0,_.jsx)(l,{showColon:!0,children:`Selected countries`}),(0,_.jsx)(s,{children:r.join(`, `)})]})]})}},x=[`Default`,`WithLogic`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}export{S as i,h as n,b as r,y as t};