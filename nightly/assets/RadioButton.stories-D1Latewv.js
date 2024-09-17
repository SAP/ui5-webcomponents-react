import{j as e}from"./jsx-runtime-DEdD30eg.js";import{o as a}from"./ValueState-Bg0UWejw.js";import{r as v}from"./index-RYns6xqu.js";import{F as l,b,c as R,a as j}from"./index-DufQBMho.js";import{L as u}from"./index-BfKb0La0.js";import{R as t}from"./index-DzskrKdL.js";const y={title:"Inputs / RadioButton",component:t,argTypes:{},args:{valueState:a.None,text:"RadioButton"},tags:["package:@ui5/webcomponents"]},o={},r={name:"RadioButton Groups",render(){const i=v.useId();return e.jsxs(l,{style:{width:"600px"},justifyContent:b.SpaceBetween,children:[e.jsxs(l,{alignItems:R.Center,"aria-labelledby":`${i}-horizontal`,role:"radiogroup",children:[e.jsx(u,{id:`${i}-horizontal`,children:"Horizontal Group: "}),e.jsx(t,{name:"GroupA",text:"Option A"}),e.jsx(t,{name:"GroupA",text:"Option B"}),e.jsx(t,{name:"GroupA",text:"Option C"})]}),e.jsxs(l,{direction:j.Column,"aria-labelledby":`${i}-vertical`,role:"radiogroup",children:[e.jsx(u,{id:`${i}-vertical`,children:"Vertical Group: "}),e.jsx(t,{name:"GroupB",text:"Neutral",valueState:a.None}),e.jsx(t,{name:"GroupB",text:"Warning",valueState:a.Critical}),e.jsx(t,{name:"GroupB",text:"Critical",valueState:a.Negative})]})]})}},n={name:"RadioButton States",render(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:a.Negative}),e.jsx(t,{text:"Warning",valueState:a.Critical}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:a.Critical,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:a.Critical,checked:!0})]})}};var d,s,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var x,p,m;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var B,S,g;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const h=["Default","RadioButtonGroups","RadioButtonStates"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:o,RadioButtonGroups:r,RadioButtonStates:n,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{N as C,o as D,r as R,n as a};
