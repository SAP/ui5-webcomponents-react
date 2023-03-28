import{M as R,C as l,f as p,a as f}from"./chunk-PCJTTTQV-36442125.js";import{R as e}from"./index-4270e10d.js";import{L as u}from"./index-cb558416.js";import{F as a,b as h,c as B,a as S}from"./index-da505e61.js";import{V as r}from"./ValueState-ab6838cc.js";import{d as G}from"./DomRefTable.module-ca928068.js";import{D as E}from"./DocsHeader-eb76bfbf.js";import{F as W}from"./Footer-ff5ca14c.js";import{j as t,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-cb1c4802.js";import"../sb-preview/runtime.mjs";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./RadioButton-a8c23c83.js";import"./Device-208919c6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-427ec721.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./Label-ccc234fe.js";import"./WrappingType-b81e595a.js";import"./class-map-95320e87.js";import"./i18n-defaults-254d6b69.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-eed049fb.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./Button-bc3a11a1.js";import"./MarkedEvents-b83081e9.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f54a858f.js";import"./TableOfContent-f18e0eb9.js";import"./index-0d1ff29a.js";import"./Link-018547e8.js";import"./index-76ea8103.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";const C=`## Keyboard Handling

Once the \`RadioButton\` is on focus, it might be selected by pressing the Space and Enter keys.  
The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group.  
**Note:** On entering radio button group, the focus goes to the currently selected radio button.`;function k(i={}){const{wrapper:m}=Object.assign({},x(),i.components);return m?t(m,{...i,children:t(c,{})}):c();function c(){const n=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code"},x(),i.components);return o(s,{children:[t(R,{title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"}}),`
`,t(E,{}),`
`,t("br",{}),`
`,t(n.h2,{children:"Example"}),`
`,t(l,{children:t(p,{name:"Default",children:v=>t(e,{...v})})}),`
`,t(n.h2,{children:"Properties"}),`
`,t(G,{story:"Default"}),`
`,t(f,{children:C}),`
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
}`}};const d={title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"},tags:["stories-mdx"],includeStories:["defaultStory","radioButtonGroups","radioButtonStates"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:k};const _t=["defaultStory","radioButtonGroups","radioButtonStates"];export{_t as __namedExportsOrder,d as default,g as defaultStory,y as radioButtonGroups,b as radioButtonStates};
//# sourceMappingURL=RadioButton.stories-7e795062.js.map
