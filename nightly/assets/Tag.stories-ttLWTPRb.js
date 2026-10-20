import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i,r as a,t as o}from"./FlexBox-VYKX9jzH.js";import{n as s,t as c}from"./Icon-HRfxBXgl.js";import{n as l,t as u}from"./Text-Dw6yxZ4-.js";import{n as d,t as f}from"./employee-BRwqGlx7.js";import{i as p,r as m}from"./Tag-h_Fei-Xn.js";import{n as h,t as g}from"./Tag-BtSeAVDG.js";var _=t({AllColors:()=>x,Default:()=>b,__namedExportsOrder:()=>S,default:()=>y}),v,y,b,x,S;function C(){return(C=e((()=>{p(),d(),i(),r(),l(),s(),h(),v=n(),y={title:`Data Display / Tag`,component:g,argTypes:{children:{control:`text`},icon:{control:{disable:!0}}},args:{children:`Tag Text`,icon:(0,v.jsx)(c,{name:f})},tags:[`package:@ui5/webcomponents`]},b={},x={render(){return(0,v.jsxs)(o,{wrap:a.Wrap,style:{gap:`0.5rem`},children:[(0,v.jsx)(u,{style:{flexGrow:1,width:`100%`},children:`Value States:`}),Object.values(m).filter(e=>!e.startsWith(`Set`)).map(e=>(0,v.jsx)(g,{design:e,children:e},e)),(0,v.jsx)(u,{style:{flexGrow:1,width:`100%`},children:`Set1:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(g,{design:`Set1`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t)),(0,v.jsx)(u,{style:{flexGrow:1,width:`100%`},children:`Set2:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(g,{design:`Set2`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t))]})}},S=[`Default`,`AllColors`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render() {
    return <FlexBox wrap={FlexBoxWrap.Wrap} style={{
      gap: '0.5rem'
    }}>
        <Text style={{
        flexGrow: 1,
        width: '100%'
      }}>Value States:</Text>
        {Object.values(TagDesign).filter(item => !item.startsWith('Set')).map(vs => <Tag key={vs} design={vs}>
              {vs}
            </Tag>)}
        <Text style={{
        flexGrow: 1,
        width: '100%'
      }}>Set1:</Text>
        {new Array(10).fill('').map((_, index) => <Tag key={index} design="Set1" colorScheme={\`\${index + 1}\`}>
            colorScheme: "{index + 1}"
          </Tag>)}
        <Text style={{
        flexGrow: 1,
        width: '100%'
      }}>Set2:</Text>
        {new Array(10).fill('').map((_, index) => <Tag key={index} design="Set2" colorScheme={\`\${index + 1}\`}>
            colorScheme: "{index + 1}"
          </Tag>)}
      </FlexBox>;
  }
}`,...x.parameters?.docs?.source}}}})))()}export{C as i,b as n,_ as r,x as t};