import{M as R,C as l,j as p,a as G}from"./index-b65a8c5e.js";import{R as e}from"./index-f1c54af7.js";import{L as u}from"./index-ec5bf915.js";import{F as a,b as h,c as B,a as S}from"./index-7ac1a15f.js";import{V as r}from"./ValueState-ab6838cc.js";import{A as f}from"./DomRefTable.module-a2e1cf7b.js";import{D as E}from"./DocsHeader-7053e78d.js";import{F as W}from"./Footer-c04a143d.js";import{j as t,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-3130ba19.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./RadioButton-bb0fefa8.js";import"./class-map-60f59e95.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-386cb3f6.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-dee23f38.js";import"./Keys-50a1cb5a.js";import"./Label-f9741f9c.js";import"./WrappingType-b81e595a.js";import"./MarkedEvents-0e37da6f.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./chunk-G4YQS2SV-8114ca7d.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-f2688b2c.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./Button-981a9381.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-590b3967.js";import"./TableOfContent-95cd3838.js";import"./index-6f9e992a.js";import"./Footer.module-c4f3b823.js";import"./index-07287e89.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";const A=`## Keyboard Handling

Once the \`RadioButton\` is on focus, it might be selected by pressing the Space and Enter keys.  
The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group.  
**Note:** On entering radio button group, the focus goes to the currently selected radio button.`;function C(i={}){const{wrapper:c}=Object.assign({},x(),i.components);return c?t(c,{...i,children:t(m,{})}):m();function m(){const n=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code"},x(),i.components);return o(s,{children:[t(R,{title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"}}),`
`,t(E,{}),`
`,t("br",{}),`
`,t(n.h2,{children:"Example"}),`
`,t(l,{children:t(p,{name:"Default",children:v=>t(e,{...v})})}),`
`,t(n.h2,{children:"Properties"}),`
`,t(f,{story:"Default"}),`
`,t(G,{children:A}),`
`,t(n.h1,{children:"More Examples"}),`
`,t("br",{}),`
`,t(n.h2,{children:"RadioButton groups"}),`
`,o(n.p,{children:["Group radio buttons by using the ",t(n.code,{children:"name"})," prop."]}),`
`,t(l,{children:t(p,{name:"RadioButton groups",children:()=>o(a,{style:{width:"600px"},justifyContent:h.SpaceBetween,children:[o(a,{alignItems:B.Center,children:[t(u,{children:"Horizontal Group: "}),t(e,{name:"GroupA",text:"Option A"}),t(e,{name:"GroupA",text:"Option B"}),t(e,{name:"GroupA",text:"Option C"})]}),o(a,{direction:S.Column,children:[t(u,{children:"Vertical Group: "}),t(e,{name:"GroupB",text:"Neutral",valueState:r.None}),t(e,{name:"GroupB",text:"Warning",valueState:r.Warning}),t(e,{name:"GroupB",text:"Critical",valueState:r.Error})]})]})})}),`
`,t("br",{}),`
`,t("br",{}),`
`,t(n.h2,{children:"RadioButton states"}),`
`,t(l,{children:t(p,{name:"RadioButton states",children:()=>o(s,{children:[t(e,{text:"Error",valueState:r.Error}),t(e,{text:"Warning",valueState:r.Warning}),t(e,{text:"Disabled",disabled:!0,checked:!0}),t(e,{text:"Readonly",readonly:!0,checked:!0}),t(e,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),t(e,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,t(W,{})]})}}const g=i=>t(e,{...i});g.storyName="Default";g.parameters={storySource:{source:`args => {
  return <RadioButton {...args} />;
}`}};const y=()=>o(a,{style:{width:"600px"},justifyContent:h.SpaceBetween,children:[o(a,{alignItems:B.Center,children:[t(u,{children:"Horizontal Group: "}),t(e,{name:"GroupA",text:"Option A"}),t(e,{name:"GroupA",text:"Option B"}),t(e,{name:"GroupA",text:"Option C"})]}),o(a,{direction:S.Column,children:[t(u,{children:"Vertical Group: "}),t(e,{name:"GroupB",text:"Neutral",valueState:r.None}),t(e,{name:"GroupB",text:"Warning",valueState:r.Warning}),t(e,{name:"GroupB",text:"Critical",valueState:r.Error})]})]});y.storyName="RadioButton groups";y.parameters={storySource:{source:`() => {
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
}`}};const b=()=>o(s,{children:[t(e,{text:"Error",valueState:r.Error}),t(e,{text:"Warning",valueState:r.Warning}),t(e,{text:"Disabled",disabled:!0,checked:!0}),t(e,{text:"Readonly",readonly:!0,checked:!0}),t(e,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),t(e,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]});b.storyName="RadioButton states";b.parameters={storySource:{source:`() => {
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
}`}};const d={title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"},tags:["stories-mdx"],includeStories:["defaultStory","radioButtonGroups","radioButtonStates"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:C};const Nt=["defaultStory","radioButtonGroups","radioButtonStates"];export{Nt as __namedExportsOrder,d as default,g as defaultStory,y as radioButtonGroups,b as radioButtonStates};
//# sourceMappingURL=RadioButton.stories-aa5c6aa2.js.map
