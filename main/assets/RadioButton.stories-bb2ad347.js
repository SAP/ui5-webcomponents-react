import{M as R,C as l,i as p,a as G}from"./index-4458fb96.js";import{R as e}from"./index-366ad880.js";import{L as u}from"./index-c302e879.js";import{F as a,b as h,c as B,a as S}from"./index-6923d62a.js";import{V as r}from"./ValueState-ab6838cc.js";import{A as f}from"./DomRefTable.module-5942b22d.js";import{D as E}from"./DocsHeader-df0417dd.js";import{F as W}from"./Footer-7682d920.js";import{j as t,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-e352cdee.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./RadioButton-d0c7abe6.js";import"./class-map-abcca105.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./UI5Element-727d48d7.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-dee23f38.js";import"./Keys-50a1cb5a.js";import"./Label-6707bdfc.js";import"./WrappingType-b81e595a.js";import"./MarkedEvents-0e37da6f.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./chunk-4XCFV5WA-221c367d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-6cdb75b5.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./Button-2e5054c2.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8a53f199.js";import"./TableOfContent-9194f14b.js";import"./index-6ca8fa6a.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-3264cf83.js";import"./Popover-97ca01c1.js";import"./Integer-8010a7ae.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";const A=`## Keyboard Handling

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
}`}};const d={title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"},tags:["stories-mdx"],includeStories:["defaultStory","radioButtonGroups","radioButtonStates"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:C};const Ot=["defaultStory","radioButtonGroups","radioButtonStates"];export{Ot as __namedExportsOrder,d as default,g as defaultStory,y as radioButtonGroups,b as radioButtonStates};
//# sourceMappingURL=RadioButton.stories-bb2ad347.js.map
