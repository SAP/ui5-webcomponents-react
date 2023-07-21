import{M as b,C as u,f as d,b as y}from"./chunk-PCJTTTQV-6422ee3e.js";import{R as e}from"./index-63004405.js";import{L as i}from"./index-bb237535.js";import{F as n,b as m,c,a as j}from"./index-bc9f3959.js";import{V as r}from"./ValueState-ab6838cc.js";import{b as R}from"./DomRefTable.module-fa39d1c6.js";import{D as v}from"./DocsHeader-bf43c24c.js";import{F as f}from"./Footer-1c7c3b21.js";import{j as t}from"./jsx-runtime-6b79a019.js";import"./index-ccf6a75d.js";import{u as x}from"./index-f2208173.js";import"./iframe-f22632ce.js";import"../sb-preview/runtime.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-8d7a8128.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./RadioButton-3124fa96.js";import"./Device-6afa24d0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-11982a12.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./Label-f867a533.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-1a83921e.js";import"./class-map-341004db.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-0528916b.js";import"./index-6bd7a05d.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./Button-3da2aede.js";import"./MarkedEvents-b83081e9.js";import"./index-d3b71bde.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-bb3cd91f.js";import"./Integer-f7f172c9.js";import"./index-e7d2858a.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-d9c79a96.js";import"./index-1d30e7d4.js";import"./Link-6cd3dd1c.js";import"./TableOfContent-72caed00.js";import"./index-eec8565f.js";import"./index-d56b8155.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";const G=`## Keyboard Handling

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
//# sourceMappingURL=RadioButton.stories-31f77626.js.map
