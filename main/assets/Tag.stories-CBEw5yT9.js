import{j as r}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{T as p}from"./TagDesign-Dou_yO3g.js";import{e as g}from"./employee-BZIGAO5S.js";import{F as h,d as S}from"./index-Did8UXWE.js";import{T as a}from"./index-BydZHf2F.js";import{I as f}from"./index-CtGC-47U.js";import{T as o}from"./index-DOdTh58i.js";const T={title:"Data Display / Tag",component:o,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{children:"Tag Text",icon:r.jsx(f,{name:g})},tags:["package:@ui5/webcomponents"]},n={},s={render(){return r.jsxs(h,{wrap:S.Wrap,style:{gap:"0.5rem"},children:[r.jsx(a,{style:{flexGrow:1,width:"100%"},children:"Value States:"}),Object.values(p).filter(t=>!t.startsWith("Set")).map(t=>r.jsx(o,{design:t,children:t},t)),r.jsx(a,{style:{flexGrow:1,width:"100%"},children:"Set1:"}),new Array(10).fill("").map((t,e)=>r.jsxs(o,{design:"Set1",colorScheme:`${e+1}`,children:['colorScheme: "',e+1,'"']},e)),r.jsx(a,{style:{flexGrow:1,width:"100%"},children:"Set2:"}),new Array(10).fill("").map((t,e)=>r.jsxs(o,{design:"Set2",colorScheme:`${e+1}`,children:['colorScheme: "',e+1,'"']},e)),r.jsx(a,{style:{flexGrow:1,width:"100%"},children:"Set2:"}),new Array(10).fill("").map((t,e)=>r.jsxs(o,{design:"Set3",colorScheme:`${e+1}`,children:['colorScheme: "',e+1,'"']},e))]})}};var l,i,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,x,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(x=s.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};const w=["Default","AllColors"],D=Object.freeze(Object.defineProperty({__proto__:null,AllColors:s,Default:n,__namedExportsOrder:w,default:T},Symbol.toStringTag,{value:"Module"}));export{s as A,D as C,n as D};
