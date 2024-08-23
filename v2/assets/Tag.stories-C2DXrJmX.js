import{j as r}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{T as p}from"./TagDesign-Dou_yO3g.js";import{e as g}from"./employee-BmpQfA1y.js";import{F as h,d as S}from"./index-DXbGRngL.js";import{T as l}from"./index-F_io_HrK.js";import{I as f}from"./index-DNzGZa-l.js";import{T as o}from"./index-Cm_tUheZ.js";const T={title:"Data Display / Tag",component:o,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{children:"Tag Text",icon:r.jsx(f,{name:g})},tags:["package:@ui5/webcomponents"]},s={},a={render(){return r.jsxs(h,{wrap:S.Wrap,style:{gap:"0.5rem"},children:[r.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Value States:"}),Object.values(p).filter(t=>!t.startsWith("Set")).map(t=>r.jsx(o,{design:t,children:t},t)),r.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Set1:"}),new Array(10).fill("").map((t,e)=>r.jsxs(o,{design:"Set1",colorScheme:`${e+1}`,children:['colorScheme: "',e+1,'"']},e)),r.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Set2:"}),new Array(10).fill("").map((t,e)=>r.jsxs(o,{design:"Set2",colorScheme:`${e+1}`,children:['colorScheme: "',e+1,'"']},e)),r.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Set2:"}),new Array(10).fill("").map((t,e)=>r.jsxs(o,{design:"Set3",colorScheme:`${e+1}`,children:['colorScheme: "',e+1,'"']},e))]})}};var i,c,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,x,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        <Text style={{
        flexGrow: 1,
        width: '100%'
      }}>Set2:</Text>
        {new Array(10).fill('').map((_, index) => <Tag key={index} design="Set3" colorScheme={\`\${index + 1}\`}>
            colorScheme: "{index + 1}"
          </Tag>)}
      </FlexBox>;
  }
}`,...(d=(x=a.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};const w=["Default","AllColors"],D=Object.freeze(Object.defineProperty({__proto__:null,AllColors:a,Default:s,__namedExportsOrder:w,default:T},Symbol.toStringTag,{value:"Module"}));export{a as A,D as C,s as D};
