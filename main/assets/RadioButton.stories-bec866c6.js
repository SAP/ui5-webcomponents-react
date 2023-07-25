import{M as b,C as u,f as d,b as y}from"./chunk-PCJTTTQV-5bf7e0dc.js";import{R as e}from"./index-cea8398e.js";import{L as i}from"./index-1a7cbc24.js";import{F as n,b as m,c,a as j}from"./index-13bed04c.js";import{V as r}from"./ValueState-ab6838cc.js";import{b as R}from"./DomRefTable.module-7ca626be.js";import{D as v}from"./DocsHeader-0ac82c85.js";import{F as f}from"./Footer-7ce48a28.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as x}from"./index-59d6410c.js";import"./iframe-792db2ae.js";import"../sb-preview/runtime.js";import"./react-18-50d7df5e.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-c74c9f7f.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./RadioButton-80f32cef.js";import"./Device-6afa24d0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-11982a12.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./Label-62dd8470.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-1a83921e.js";import"./class-map-b4d8f3b0.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-c310038c.js";import"./index-1dcb9371.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./Button-0b5fe0db.js";import"./MarkedEvents-b83081e9.js";import"./index-47d0a85a.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-3ec0ff49.js";import"./Integer-f7f172c9.js";import"./index-0aefbc16.js";import"./Avatar-813f92b3.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-6c889a63.js";import"./index-7f39d4c7.js";import"./Link-b0328393.js";import"./TableOfContent-5e01d989.js";import"./index-33450a6e.js";import"./index-a9884cca.js";import"./Popover-f3103b78.js";import"./PopupsCommon.css-552c6676.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";const G=`## Keyboard Handling

Once the \`RadioButton\` is on focus, it might be selected by pressing the Space and Enter keys.  
The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group.  
**Note:** On entering radio button group, the focus goes to the currently selected radio button.
`;function E(a={}){const{wrapper:l}=Object.assign({},x(),a.components);return l?t.jsx(l,{...a,children:t.jsx(p,{})}):p();function p(){const o=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code"},x(),a.components);return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"}}),`
`,t.jsx(v,{}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(u,{children:t.jsx(d,{name:"Default",children:S=>t.jsx(e,{...S})})}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(R,{story:"Default"}),`
`,t.jsx(y,{children:G}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"radiobutton-groups",children:"RadioButton groups"}),`
`,t.jsxs(o.p,{children:["Group radio buttons by using the ",t.jsx(o.code,{children:"name"})," prop."]}),`
`,t.jsx(u,{children:t.jsx(d,{name:"RadioButton groups",children:()=>t.jsxs(n,{style:{width:"600px"},justifyContent:m.SpaceBetween,children:[t.jsxs(n,{alignItems:c.Center,children:[t.jsx(i,{children:"Horizontal Group: "}),t.jsx(e,{name:"GroupA",text:"Option A"}),t.jsx(e,{name:"GroupA",text:"Option B"}),t.jsx(e,{name:"GroupA",text:"Option C"})]}),t.jsxs(n,{direction:j.Column,children:[t.jsx(i,{children:"Vertical Group: "}),t.jsx(e,{name:"GroupB",text:"Neutral",valueState:r.None}),t.jsx(e,{name:"GroupB",text:"Warning",valueState:r.Warning}),t.jsx(e,{name:"GroupB",text:"Critical",valueState:r.Error})]})]})})}),`
`,t.jsx("br",{}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"radiobutton-states",children:"RadioButton states"}),`
`,t.jsx(u,{children:t.jsx(d,{name:"RadioButton states",children:()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{text:"Error",valueState:r.Error}),t.jsx(e,{text:"Warning",valueState:r.Warning}),t.jsx(e,{text:"Disabled",disabled:!0,checked:!0}),t.jsx(e,{text:"Readonly",readonly:!0,checked:!0}),t.jsx(e,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),t.jsx(e,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),t.jsx(e,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),t.jsx(e,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,t.jsx(f,{})]})}}const h=a=>t.jsx(e,{...a});h.storyName="Default";h.parameters={storySource:{source:`args => {
  return <RadioButton {...args} />;
}`}};const B=()=>t.jsxs(n,{style:{width:"600px"},justifyContent:m.SpaceBetween,children:[t.jsxs(n,{alignItems:c.Center,children:[t.jsx(i,{children:"Horizontal Group: "}),t.jsx(e,{name:"GroupA",text:"Option A"}),t.jsx(e,{name:"GroupA",text:"Option B"}),t.jsx(e,{name:"GroupA",text:"Option C"})]}),t.jsxs(n,{direction:j.Column,children:[t.jsx(i,{children:"Vertical Group: "}),t.jsx(e,{name:"GroupB",text:"Neutral",valueState:r.None}),t.jsx(e,{name:"GroupB",text:"Warning",valueState:r.Warning}),t.jsx(e,{name:"GroupB",text:"Critical",valueState:r.Error})]})]});B.storyName="RadioButton groups";B.parameters={storySource:{source:`() => {
  return <FlexBox style={{
    width: "600px"
  }} justifyContent={FlexBoxJustifyContent.SpaceBetween}>
          <FlexBox alignItems={FlexBoxAlignItems.Center}>
            <Label>Horizontal Group: </Label>
            <RadioButton name="GroupA" text="Option A" />
            <RadioButton name="GroupA" text="Option B" />
            <RadioButton name="GroupA" text="Option C" />
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Label>Vertical Group: </Label>
            <RadioButton name="GroupB" text="Neutral" valueState={ValueState.None} />
            <RadioButton name="GroupB" text="Warning" valueState={ValueState.Warning} />
            <RadioButton name="GroupB" text="Critical" valueState={ValueState.Error} />
          </FlexBox>
        </FlexBox>;
}`}};const g=()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{text:"Error",valueState:r.Error}),t.jsx(e,{text:"Warning",valueState:r.Warning}),t.jsx(e,{text:"Disabled",disabled:!0,checked:!0}),t.jsx(e,{text:"Readonly",readonly:!0,checked:!0}),t.jsx(e,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),t.jsx(e,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),t.jsx(e,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),t.jsx(e,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]});g.storyName="RadioButton states";g.parameters={storySource:{source:`() => {
  return <>
          <RadioButton text="Error" valueState={ValueState.Error} />
          <RadioButton text="Warning" valueState={ValueState.Warning} />
          <RadioButton text="Disabled" disabled checked />
          <RadioButton text="Readonly" readonly checked />
          <RadioButton text="Error disabled" disabled valueState={ValueState.Error} checked />
          <RadioButton text="Warning disabled " disabled valueState={ValueState.Warning} checked />
          <RadioButton text="Error readonly" readonly valueState={ValueState.Error} checked />
          <RadioButton text="Warning readonly" readonly valueState={ValueState.Warning} checked />
        </>;
}`}};const s={title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"},tags:["stories-mdx"],includeStories:["defaultStory","radioButtonGroups","radioButtonStates"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:E};const _t=["defaultStory","radioButtonGroups","radioButtonStates"];export{_t as __namedExportsOrder,s as default,h as defaultStory,B as radioButtonGroups,g as radioButtonStates};
//# sourceMappingURL=RadioButton.stories-bec866c6.js.map
