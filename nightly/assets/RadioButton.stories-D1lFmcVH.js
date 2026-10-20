import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./ValueState-Cz7u0abQ.js";import{a as o,c as s,l as c,n as l,o as u,s as d,t as f,u as p}from"./FlexBox-VYKX9jzH.js";import{n as m,t as h}from"./Label-Dy23W0XD.js";import{n as g,t as _}from"./RadioButton-BylP3Hk7.js";var v=t({Default:()=>S,RadioButtonGroups:()=>C,RadioButtonStates:()=>w,__namedExportsOrder:()=>T,default:()=>x}),y,b,x,S,C,w,T;function E(){return(E=e((()=>{a(),y=n(),l(),p(),s(),u(),m(),g(),b=r(),x={title:`Inputs / RadioButton`,component:_,argTypes:{},args:{valueState:i.None,text:`RadioButton`},tags:[`package:@ui5/webcomponents`]},S={},C={name:`RadioButton Groups`,render(){let e=(0,y.useId)();return(0,b.jsxs)(f,{style:{width:`600px`},justifyContent:o.SpaceBetween,children:[(0,b.jsxs)(f,{alignItems:c.Center,"aria-labelledby":`${e}-horizontal`,role:`radiogroup`,children:[(0,b.jsx)(h,{id:`${e}-horizontal`,children:`Horizontal Group: `}),(0,b.jsx)(_,{name:`GroupA`,text:`Option A`}),(0,b.jsx)(_,{name:`GroupA`,text:`Option B`}),(0,b.jsx)(_,{name:`GroupA`,text:`Option C`})]}),(0,b.jsxs)(f,{direction:d.Column,"aria-labelledby":`${e}-vertical`,role:`radiogroup`,children:[(0,b.jsx)(h,{id:`${e}-vertical`,children:`Vertical Group: `}),(0,b.jsx)(_,{name:`GroupB`,text:`Neutral`,valueState:i.None}),(0,b.jsx)(_,{name:`GroupB`,text:`Warning`,valueState:i.Critical}),(0,b.jsx)(_,{name:`GroupB`,text:`Critical`,valueState:i.Negative})]})]})}},w={name:`RadioButton States`,render(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{text:`Error`,valueState:i.Negative}),(0,b.jsx)(_,{text:`Warning`,valueState:i.Critical}),(0,b.jsx)(_,{text:`Disabled`,disabled:!0,checked:!0}),(0,b.jsx)(_,{text:`Readonly`,readonly:!0,checked:!0}),(0,b.jsx)(_,{text:`Error disabled`,disabled:!0,valueState:i.Negative,checked:!0}),(0,b.jsx)(_,{text:`Warning disabled `,disabled:!0,valueState:i.Critical,checked:!0}),(0,b.jsx)(_,{text:`Error readonly`,readonly:!0,valueState:i.Negative,checked:!0}),(0,b.jsx)(_,{text:`Warning readonly`,readonly:!0,valueState:i.Critical,checked:!0})]})}},T=[`Default`,`RadioButtonGroups`,`RadioButtonStates`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}})))()}export{E as a,v as i,C as n,w as r,S as t};