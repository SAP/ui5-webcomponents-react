import{M as b,C as u,e as d,b as y}from"./chunk-HLWAVYOI-3cfe9455.js";import{R as e}from"./index-6f1a93bc.js";import{L as i}from"./index-8146d2a5.js";import{F as n,a as m,c,b as j}from"./index-12e0da73.js";import{V as r}from"./ValueState-ab6838cc.js";import{A as R}from"./DomRefTable.module-e4f1df42.js";import{D as v}from"./DocsHeader-08bcaca0.js";import{F as G}from"./Footer-bc30cdc4.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as x}from"./index-59d6410c.js";import"./iframe-9479b6dc.js";import"../sb-preview/runtime.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./RadioButton-894dc7d7.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./Label-025b0296.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-a1ecaff4.js";import"./class-map-5b190712.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-2e5f50f2.js";import"./index-15680150.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./Button-f20bbbdf.js";import"./MarkedEvents-b83081e9.js";import"./index-743fc8f1.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-38b43fe5.js";import"./Integer-f7f172c9.js";import"./index-0e91e77a.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./index-8dc2d6a1.js";import"./index-18d4ae37.js";import"./Link-0dce4afc.js";import"./TableOfContent-59e49883.js";import"./index-882cd3c7.js";import"./index-b694814b.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";const f=`## Keyboard Handling

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
`,t.jsx(y,{children:f}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"radiobutton-groups",children:"RadioButton groups"}),`
`,t.jsxs(o.p,{children:["Group radio buttons by using the ",t.jsx(o.code,{children:"name"})," prop."]}),`
`,t.jsx(u,{children:t.jsx(d,{name:"RadioButton groups",children:()=>t.jsxs(n,{style:{width:"600px"},justifyContent:m.SpaceBetween,children:[t.jsxs(n,{alignItems:c.Center,children:[t.jsx(i,{children:"Horizontal Group: "}),t.jsx(e,{name:"GroupA",text:"Option A"}),t.jsx(e,{name:"GroupA",text:"Option B"}),t.jsx(e,{name:"GroupA",text:"Option C"})]}),t.jsxs(n,{direction:j.Column,children:[t.jsx(i,{children:"Vertical Group: "}),t.jsx(e,{name:"GroupB",text:"Neutral",valueState:r.None}),t.jsx(e,{name:"GroupB",text:"Warning",valueState:r.Warning}),t.jsx(e,{name:"GroupB",text:"Critical",valueState:r.Error})]})]})})}),`
`,t.jsx("br",{}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"radiobutton-states",children:"RadioButton states"}),`
`,t.jsx(u,{children:t.jsx(d,{name:"RadioButton states",children:()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{text:"Error",valueState:r.Error}),t.jsx(e,{text:"Warning",valueState:r.Warning}),t.jsx(e,{text:"Disabled",disabled:!0,checked:!0}),t.jsx(e,{text:"Readonly",readonly:!0,checked:!0}),t.jsx(e,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),t.jsx(e,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),t.jsx(e,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),t.jsx(e,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,t.jsx(G,{})]})}}const h=a=>t.jsx(e,{...a});h.storyName="Default";h.parameters={storySource:{source:`args => {
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
}`}};const s={title:"Inputs / RadioButton",component:e,args:{valueState:r.None,text:"RadioButton"},tags:["stories-mdx"],includeStories:["defaultStory","radioButtonGroups","radioButtonStates"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:E};const Ht=["defaultStory","radioButtonGroups","radioButtonStates"];export{Ht as __namedExportsOrder,s as default,h as defaultStory,B as radioButtonGroups,g as radioButtonStates};
//# sourceMappingURL=RadioButton.stories-048761c5.js.map
