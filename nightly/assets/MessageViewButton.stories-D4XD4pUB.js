import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./ValueState-Cz7u0abQ.js";import{n as a,t as o}from"./FlexBox-D6F4acFi.js";import{n as s,t as c}from"./Text-CHVdRnJy.js";import{n as l,t as u}from"./MessageViewButton-C4G1B4Nc.js";var d=t({Default:()=>m,Severities:()=>h,__namedExportsOrder:()=>g,default:()=>p}),f,p,m,h,g;function _(){return(_=e((()=>{i(),s(),a(),l(),f=n(),p={title:`Inputs / MessageViewButton`,component:u,argTypes:{},args:{},tags:[`package:@ui5/webcomponents-react`]},m={},h={render(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{children:`These buttons are ordered by severity, from high to low.`}),(0,f.jsxs)(o,{style:{gap:`1rem`},children:[(0,f.jsx)(u,{...e,type:r.Negative}),(0,f.jsx)(u,{...e,type:r.Critical}),(0,f.jsx)(u,{...e,type:r.Positive}),(0,f.jsx)(u,{...e,type:r.Information})]})]})}},g=[`Default`,`Severities`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <>
        <Text>These buttons are ordered by severity, from high to low.</Text>
        <FlexBox style={{
        gap: '1rem'
      }}>
          <MessageViewButton {...args} type={ValueState.Negative} />
          <MessageViewButton {...args} type={ValueState.Critical} />
          <MessageViewButton {...args} type={ValueState.Positive} />
          <MessageViewButton {...args} type={ValueState.Information} />
        </FlexBox>
      </>;
  }
}`,...h.parameters?.docs?.source}}}})))()}export{_ as i,d as n,h as r,m as t};