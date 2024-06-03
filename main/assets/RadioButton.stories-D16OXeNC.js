import{j as e}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{r as b}from"./index-BP8_t0zE.js";import{F as u,b as R,c as j,a as y}from"./index-CDaF3Q0u.js";import{L as l}from"./index-CeOsMBcU.js";import{R as t}from"./index-CIxzOjm2.js";import{V as a}from"./ValueState-gQDshf3o.js";const h={title:"Inputs / RadioButton",component:t,argTypes:{},args:{valueState:a.None,text:"RadioButton"},tags:["package:@ui5/webcomponents"]},r={},o={name:"RadioButton Groups",render(){const i=b.useId();return e.jsxs(u,{style:{width:"600px"},justifyContent:R.SpaceBetween,children:[e.jsxs(u,{alignItems:j.Center,"aria-labelledby":`${i}-horizontal`,role:"radiogroup",children:[e.jsx(l,{id:`${i}-horizontal`,children:"Horizontal Group: "}),e.jsx(t,{name:"GroupA",text:"Option A"}),e.jsx(t,{name:"GroupA",text:"Option B"}),e.jsx(t,{name:"GroupA",text:"Option C"})]}),e.jsxs(u,{direction:y.Column,"aria-labelledby":`${i}-vertical`,role:"radiogroup",children:[e.jsx(l,{id:`${i}-vertical`,children:"Vertical Group: "}),e.jsx(t,{name:"GroupB",text:"Neutral",valueState:a.None}),e.jsx(t,{name:"GroupB",text:"Warning",valueState:a.Warning}),e.jsx(t,{name:"GroupB",text:"Critical",valueState:a.Error})]})]})}},n={name:"RadioButton States",render(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:a.Error}),e.jsx(t,{text:"Warning",valueState:a.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:a.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:a.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:a.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:a.Warning,checked:!0})]})}};var d,s,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(s=r.parameters)==null?void 0:s.docs)==null?void 0:x.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RadioButton name="GroupB" text="Warning" valueState={ValueState.Warning} />
          <RadioButton name="GroupB" text="Critical" valueState={ValueState.Error} />
        </FlexBox>
      </FlexBox>;
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var B,S,g;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const v=["Default","RadioButtonGroups","RadioButtonStates"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:r,RadioButtonGroups:o,RadioButtonStates:n,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{k as C,r as D,o as R,n as a};
