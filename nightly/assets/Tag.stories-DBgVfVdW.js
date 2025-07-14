import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as d}from"./Tag-B8Y5CAT_.js";import{e as g}from"./employee-832F22DS.js";import{F as h,b as S}from"./index-C2w1dnoB.js";import{T as l}from"./index-Z1IFI4-r.js";import{I as f}from"./index-cHSlkY-E.js";import{T as s}from"./index-WWlNSEWj.js";const T={title:"Data Display / Tag",component:s,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{children:"Tag Text",icon:e.jsx(f,{name:g})},tags:["package:@ui5/webcomponents"]},o={},a={render(){return e.jsxs(h,{wrap:S.Wrap,style:{gap:"0.5rem"},children:[e.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Value States:"}),Object.values(d).filter(r=>!r.startsWith("Set")).map(r=>e.jsx(s,{design:r,children:r},r)),e.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Set1:"}),new Array(10).fill("").map((r,t)=>e.jsxs(s,{design:"Set1",colorScheme:`${t+1}`,children:['colorScheme: "',t+1,'"']},t)),e.jsx(l,{style:{flexGrow:1,width:"100%"},children:"Set2:"}),new Array(10).fill("").map((r,t)=>e.jsxs(s,{design:"Set2",colorScheme:`${t+1}`,children:['colorScheme: "',t+1,'"']},t))]})}};var i,c,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,p,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const u=["Default","AllColors"],F=Object.freeze(Object.defineProperty({__proto__:null,AllColors:a,Default:o,__namedExportsOrder:u,default:T},Symbol.toStringTag,{value:"Module"}));export{a as A,F as C,o as D};
