import{j as e}from"./ManagedStyles-DBz9b8_7.js";import{F as u,b as g,c as R,a as j}from"./index-gKp4owBv.js";import{L as i}from"./index-Dqm78j1q.js";import{R as t}from"./index-BWMlu6v6.js";import{V as a}from"./ValueState-gQDshf3o.js";const b={title:"Inputs / RadioButton",component:t,argTypes:{},args:{valueState:a.None,text:"RadioButton"},tags:["package:@ui5/webcomponents"]},r={},n={name:"RadioButton Groups",render(){return e.jsxs(u,{style:{width:"600px"},justifyContent:g.SpaceBetween,children:[e.jsxs(u,{alignItems:R.Center,children:[e.jsx(i,{children:"Horizontal Group: "}),e.jsx(t,{name:"GroupA",text:"Option A"}),e.jsx(t,{name:"GroupA",text:"Option B"}),e.jsx(t,{name:"GroupA",text:"Option C"})]}),e.jsxs(u,{direction:j.Column,children:[e.jsx(i,{children:"Vertical Group: "}),e.jsx(t,{name:"GroupB",text:"Neutral",valueState:a.None}),e.jsx(t,{name:"GroupB",text:"Warning",valueState:a.Warning}),e.jsx(t,{name:"GroupB",text:"Critical",valueState:a.Error})]})]})}},o={name:"RadioButton States",render(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:a.Error}),e.jsx(t,{text:"Warning",valueState:a.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:a.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:a.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:a.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:a.Warning,checked:!0})]})}};var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var x,c,p;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'RadioButton Groups',
  render() {
    return <FlexBox style={{
      width: '600px'
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
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,B,S;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'RadioButton States',
  render() {
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
  }
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const y=["Default","RadioButtonGroups","RadioButtonStates"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:r,RadioButtonGroups:n,RadioButtonStates:o,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{F as C,r as D,n as R,o as a};
