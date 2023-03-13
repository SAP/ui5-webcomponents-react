import{M as R,C as l,j as p,a as G}from"./index-09439539.js";import{R as e}from"./index-820854ba.js";import{L as u}from"./index-b75e6bd2.js";import{F as a,b as h,c as B,a as S}from"./index-1d945bd3.js";import{V as r}from"./ValueState-ab6838cc.js";import{A as f}from"./DomRefTable.module-6044c652.js";import{D as E}from"./DocsHeader-7973cb88.js";import{F as W}from"./Footer-1fe5214a.js";import{j as t,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-032d2a62.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./RadioButton-4ed70174.js";import"./Device-208919c6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-427ec721.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./ValueState-2c5e5904.js";import"./Keys-3acbae73.js";import"./Label-040efebd.js";import"./WrappingType-b81e595a.js";import"./class-map-5d8e4b2b.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-fe4dc3ff.js";import"./chunk-PCJTTTQV-a5cc59e2.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-d8c6fe68.js";import"./decline-0a03b0b0.js";import"./Icons-7b82f601.js";import"./Button-e27d9549.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-c7e8305a.js";import"./TableOfContent-42c8922d.js";import"./index-3de39d49.js";import"./Footer.module-c4f3b823.js";import"./index-26b2c4d2.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";const A=`## Keyboard Handling

Once the \`RadioButton\` is on focus, it might be selected by pressing the Space and Enter keys.  
The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group.  
**Note:** On entering radio button group, the focus goes to the currently selected radio button.`;function C(i={}){const{wrapper:m}=Object.assign({},x(),i.components);return m?t(m,{...i,children:t(c,{})}):c();function c(){const n=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code"},x(),i.components);return o(s,{children:[t(R,{title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"}}),`
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
}`}};const d={title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"},tags:["stories-mdx"],includeStories:["defaultStory","radioButtonGroups","radioButtonStates"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:C};const jt=["defaultStory","radioButtonGroups","radioButtonStates"];export{jt as __namedExportsOrder,d as default,g as defaultStory,y as radioButtonGroups,b as radioButtonStates};
//# sourceMappingURL=RadioButton.stories-3547f956.js.map
