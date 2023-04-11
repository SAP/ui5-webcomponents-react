import{M as R,C as l,f as p,a as f}from"./chunk-PCJTTTQV-a3087bd9.js";import{R as e}from"./index-1e384f6d.js";import{L as u}from"./index-735fce44.js";import{F as a,b as h,c as B,a as S}from"./index-44cc9c22.js";import{V as r}from"./ValueState-ab6838cc.js";import{d as G}from"./DomRefTable.module-c5bb94be.js";import{D as E}from"./DocsHeader-b89d0b66.js";import{F as W}from"./Footer-a1301bb2.js";import{j as t,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-faaca38e.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./RadioButton-23550da4.js";import"./Device-208919c6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-d1d93200.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./Label-e3d88218.js";import"./WrappingType-b81e595a.js";import"./class-map-6d48ebd3.js";import"./i18n-defaults-254d6b69.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-2e28eff7.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-0d34cb73.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./Button-400e2491.js";import"./MarkedEvents-b83081e9.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e94ec2b8.js";import"./TableOfContent-1fba84b7.js";import"./index-84fe18b0.js";import"./Link-706be030.js";import"./index-0e1c3cf1.js";import"./Popover-4088d87a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";const C=`## Keyboard Handling

Once the \`RadioButton\` is on focus, it might be selected by pressing the Space and Enter keys.  
The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group.  
**Note:** On entering radio button group, the focus goes to the currently selected radio button.
`;function k(i={}){const{wrapper:m}=Object.assign({},x(),i.components);return m?t(m,{...i,children:t(c,{})}):c();function c(){const n=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code"},x(),i.components);return o(s,{children:[t(R,{title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"}}),`
`,t(E,{}),`
`,t("br",{}),`
`,t(n.h2,{id:"example",children:"Example"}),`
`,t(l,{children:t(p,{name:"Default",children:v=>t(e,{...v})})}),`
`,t(n.h2,{id:"properties",children:"Properties"}),`
`,t(G,{story:"Default"}),`
`,t(f,{children:C}),`
`,t(n.h1,{id:"more-examples",children:"More Examples"}),`
`,t("br",{}),`
`,t(n.h2,{id:"radiobutton-groups",children:"RadioButton groups"}),`
`,o(n.p,{children:["Group radio buttons by using the ",t(n.code,{children:"name"})," prop."]}),`
`,t(l,{children:t(p,{name:"RadioButton groups",children:()=>o(a,{style:{width:"600px"},justifyContent:h.SpaceBetween,children:[o(a,{alignItems:B.Center,children:[t(u,{children:"Horizontal Group: "}),t(e,{name:"GroupA",text:"Option A"}),t(e,{name:"GroupA",text:"Option B"}),t(e,{name:"GroupA",text:"Option C"})]}),o(a,{direction:S.Column,children:[t(u,{children:"Vertical Group: "}),t(e,{name:"GroupB",text:"Neutral",valueState:r.None}),t(e,{name:"GroupB",text:"Warning",valueState:r.Warning}),t(e,{name:"GroupB",text:"Critical",valueState:r.Error})]})]})})}),`
`,t("br",{}),`
`,t("br",{}),`
`,t(n.h2,{id:"radiobutton-states",children:"RadioButton states"}),`
`,t(l,{children:t(p,{name:"RadioButton states",children:()=>o(s,{children:[t(e,{text:"Error",valueState:r.Error}),t(e,{text:"Warning",valueState:r.Warning}),t(e,{text:"Disabled",disabled:!0,checked:!0}),t(e,{text:"Readonly",readonly:!0,checked:!0}),t(e,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),t(e,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,t(W,{})]})}}const g=i=>t(e,{...i});g.storyName="Default";g.parameters={storySource:{source:`args => {
  return <RadioButton {...args} />;
}`}};const b=()=>o(a,{style:{width:"600px"},justifyContent:h.SpaceBetween,children:[o(a,{alignItems:B.Center,children:[t(u,{children:"Horizontal Group: "}),t(e,{name:"GroupA",text:"Option A"}),t(e,{name:"GroupA",text:"Option B"}),t(e,{name:"GroupA",text:"Option C"})]}),o(a,{direction:S.Column,children:[t(u,{children:"Vertical Group: "}),t(e,{name:"GroupB",text:"Neutral",valueState:r.None}),t(e,{name:"GroupB",text:"Warning",valueState:r.Warning}),t(e,{name:"GroupB",text:"Critical",valueState:r.Error})]})]});b.storyName="RadioButton groups";b.parameters={storySource:{source:`() => {
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
}`}};const y=()=>o(s,{children:[t(e,{text:"Error",valueState:r.Error}),t(e,{text:"Warning",valueState:r.Warning}),t(e,{text:"Disabled",disabled:!0,checked:!0}),t(e,{text:"Readonly",readonly:!0,checked:!0}),t(e,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),t(e,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),t(e,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]});y.storyName="RadioButton states";y.parameters={storySource:{source:`() => {
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
}`}};const d={title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"},tags:["stories-mdx"],includeStories:["defaultStory","radioButtonGroups","radioButtonStates"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:k};const _t=["defaultStory","radioButtonGroups","radioButtonStates"];export{_t as __namedExportsOrder,d as default,g as defaultStory,b as radioButtonGroups,y as radioButtonStates};
//# sourceMappingURL=RadioButton.stories-12163b26.js.map
