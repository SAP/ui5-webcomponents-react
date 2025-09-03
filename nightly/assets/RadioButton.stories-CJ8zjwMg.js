import{R as a,r as d,j as e}from"./iframe-Ci8pj7yy.js";import{F as l,d as s,c,a as x}from"./index-D-FVVHHi.js";import{L as u}from"./index-B8N1oKPj.js";import{R as t}from"./index-BRS8AzRH.js";const p={title:"Inputs / RadioButton",component:t,argTypes:{},args:{valueState:a.None,text:"RadioButton"},tags:["package:@ui5/webcomponents"]},o={},r={name:"RadioButton Groups",render(){const i=d.useId();return e.jsxs(l,{style:{width:"600px"},justifyContent:s.SpaceBetween,children:[e.jsxs(l,{alignItems:c.Center,"aria-labelledby":`${i}-horizontal`,role:"radiogroup",children:[e.jsx(u,{id:`${i}-horizontal`,children:"Horizontal Group: "}),e.jsx(t,{name:"GroupA",text:"Option A"}),e.jsx(t,{name:"GroupA",text:"Option B"}),e.jsx(t,{name:"GroupA",text:"Option C"})]}),e.jsxs(l,{direction:x.Column,"aria-labelledby":`${i}-vertical`,role:"radiogroup",children:[e.jsx(u,{id:`${i}-vertical`,children:"Vertical Group: "}),e.jsx(t,{name:"GroupB",text:"Neutral",valueState:a.None}),e.jsx(t,{name:"GroupB",text:"Warning",valueState:a.Critical}),e.jsx(t,{name:"GroupB",text:"Critical",valueState:a.Negative})]})]})}},n={name:"RadioButton States",render(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:a.Negative}),e.jsx(t,{text:"Warning",valueState:a.Critical}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:a.Critical,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:a.Critical,checked:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'RadioButton Groups',
  render() {
    const uniqueId = useId();
    return <FlexBox style={{
      width: '600px'
    }} justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <FlexBox alignItems={FlexBoxAlignItems.Center} aria-labelledby={\`\${uniqueId}-horizontal\`} role="radiogroup">
          <Label id={\`\${uniqueId}-horizontal\`}>Horizontal Group: </Label>
          <RadioButton name="GroupA" text="Option A" />
          <RadioButton name="GroupA" text="Option B" />
          <RadioButton name="GroupA" text="Option C" />
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} aria-labelledby={\`\${uniqueId}-vertical\`} role="radiogroup">
          <Label id={\`\${uniqueId}-vertical\`}>Vertical Group: </Label>
          <RadioButton name="GroupB" text="Neutral" valueState={ValueState.None} />
          <RadioButton name="GroupB" text="Warning" valueState={ValueState.Critical} />
          <RadioButton name="GroupB" text="Critical" valueState={ValueState.Negative} />
        </FlexBox>
      </FlexBox>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'RadioButton States',
  render() {
    return <>
        <RadioButton text="Error" valueState={ValueState.Negative} />
        <RadioButton text="Warning" valueState={ValueState.Critical} />
        <RadioButton text="Disabled" disabled checked />
        <RadioButton text="Readonly" readonly checked />
        <RadioButton text="Error disabled" disabled valueState={ValueState.Negative} checked />
        <RadioButton text="Warning disabled " disabled valueState={ValueState.Critical} checked />
        <RadioButton text="Error readonly" readonly valueState={ValueState.Negative} checked />
        <RadioButton text="Warning readonly" readonly valueState={ValueState.Critical} checked />
      </>;
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","RadioButtonGroups","RadioButtonStates"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:o,RadioButtonGroups:r,RadioButtonStates:n,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{R as C,o as D,r as R,n as a};
