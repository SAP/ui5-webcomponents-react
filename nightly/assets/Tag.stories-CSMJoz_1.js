import{j as e,I as i,J as l}from"./iframe-7wbn2r8t.js";import{T as c}from"./Tag-B4Xu1fg_.js";import{e as n}from"./employee-BLh-Txwk.js";import{F as m,b as x}from"./index--oRJYcmq.js";import{T as s}from"./index-C5gTJ--F.js";const d={title:"Data Display / Tag",component:s,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{children:"Tag Text",icon:e.jsx(i,{name:n})},tags:["package:@ui5/webcomponents"]},o={},a={render(){return e.jsxs(m,{wrap:x.Wrap,style:{gap:"0.5rem"},children:[e.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Value States:"}),Object.values(c).filter(r=>!r.startsWith("Set")).map(r=>e.jsx(s,{design:r,children:r},r)),e.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Set1:"}),new Array(10).fill("").map((r,t)=>e.jsxs(s,{design:"Set1",colorScheme:`${t+1}`,children:['colorScheme: "',t+1,'"']},t)),e.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Set2:"}),new Array(10).fill("").map((r,t)=>e.jsxs(s,{design:"Set2",colorScheme:`${t+1}`,children:['colorScheme: "',t+1,'"']},t))]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const p=["Default","AllColors"],u=Object.freeze(Object.defineProperty({__proto__:null,AllColors:a,Default:o,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{a as A,u as C,o as D};
