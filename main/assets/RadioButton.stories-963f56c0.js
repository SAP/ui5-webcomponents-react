import{M as b,C as u,e as d,b as y}from"./chunk-HLWAVYOI-ef9124d6.js";import{R as e}from"./index-df46c52e.js";import{L as i}from"./index-82ce7147.js";import{F as n,a as m,c,b as j}from"./index-12e0da73.js";import{V as r}from"./ValueState-ab6838cc.js";import{A as R}from"./DomRefTable.module-0dbb9652.js";import{D as v}from"./DocsHeader-93510fe5.js";import{F as G}from"./Footer-2630401a.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as x}from"./index-59d6410c.js";import"./iframe-98d6bf96.js";import"../sb-preview/runtime.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./RadioButton-b7eec574.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./Label-7e3ff047.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-9804ffd1.js";import"./class-map-a35dc276.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-2e5f50f2.js";import"./index-ca577f17.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./Button-a64dbe13.js";import"./MarkedEvents-b83081e9.js";import"./index-743fc8f1.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-da201040.js";import"./Integer-f7f172c9.js";import"./index-853e2444.js";import"./Avatar-d7b0dbe0.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-e5a5ffc5.js";import"./index-f8782e5c.js";import"./Link-6d4f6070.js";import"./TableOfContent-316f4349.js";import"./index-b72b4a11.js";import"./index-3d93527f.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";const f=`## Keyboard Handling

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
//# sourceMappingURL=RadioButton.stories-963f56c0.js.map
