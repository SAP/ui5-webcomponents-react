import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,o,r as s,u as c}from"./blocks-yOUxazR9.js";import{S as l,b as u,f as d,t as f,u as p}from"./components-Ca6LGLpj.js";import{n as m,t as h}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as g,i as _,n as v,o as y,r as b,s as x,t as S}from"./SplitterLayout.stories-60fIKKit.js";function C(e){let t={code:`code`,h2:`h2`,h3:`h3`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{of:_}),`
`,(0,T.jsx)(d,{of:_,subComponents:[`SplitterElement`]}),`
`,(0,T.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,T.jsx)(s,{of:S}),`
`,(0,T.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,T.jsx)(u,{of:S}),`
`,(0,T.jsx)(t.h3,{id:`splitterlayoutoptions`,children:`SplitterLayoutOptions`}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`Property`}),(0,T.jsx)(t.th,{children:`Type`}),(0,T.jsx)(t.th,{children:`Description`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`resetOnSizeChange`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`Defines whether the `,(0,T.jsx)(t.code,{children:`SplitterLayout`}),` should be reset when its size changes depending on the orientation.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`resetOnChildrenChange`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`Defines whether the `,(0,T.jsx)(t.code,{children:`SplitterLayout`}),` should be reset when its `,(0,T.jsx)(t.code,{children:`children`}),` change.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`resetOnCustomDepsChange`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`React.DependencyList`})}),(0,T.jsxs)(t.td,{children:[`Defines a list of dependencies that trigger a reset of the `,(0,T.jsx)(t.code,{children:`SplitterLayout`}),` when they are changed.`]})]})]})]}),`
`,(0,T.jsx)(t.h2,{id:`splitterlayout-with-non-resizable-areas--areas-with-min-width`,children:`SplitterLayout with non-resizable areas & areas with min-width`}),`
`,(0,T.jsx)(s,{of:v,sourceState:`none`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show Code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`function SplitterElementContent({ text, background = 'transparent' }) {
  return (
    <FlexBox style={{ height: '100%', width: '100%', background }} alignItems="Center" justifyContent="Center">
      <Text>{text}</Text>
    </FlexBox>
  );
}

function SplitterLayoutComponent(props) {
  return (
    <SplitterLayout {...props}>
      <SplitterElement size="10%">
        <SplitterElementContent text="Content 1 - (size: 10%)" background="cadetblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 2" background="skyblue" />
      </SplitterElement>
      <SplitterElement minSize={200}>
        <SplitterElementContent text="Content 3 (minSize: 200)" background="lightblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 4" background="paleturquoise" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 5" background="lightskyblue" />
      </SplitterElement>
      <SplitterElement resizable={false} size="150px">
        <SplitterElementContent text="Content 6 (not resizable - size: 150px)" background="powderblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 7" background="aliceblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 8" background="lightsteelblue" />
      </SplitterElement>
    </SplitterLayout>
  );
}
`})})]}),`
`,(0,T.jsx)(t.h2,{id:`nested-splitterlayouts`,children:`Nested SplitterLayouts`}),`
`,(0,T.jsx)(s,{of:b}),`
`,(0,T.jsx)(c,{children:h}),`
`,(0,T.jsx)(t.h2,{id:`splitterelement`,children:`SplitterElement`}),`
`,(0,T.jsx)(o,{of:y}),`
`,(0,T.jsx)(l,{metaOf:_,of:y}),`
`,(0,T.jsx)(p,{})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=t(),r(),f(),i(),g(),m(),x()})))()}E();export{w as default};