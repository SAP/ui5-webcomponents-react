import{j as t}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{o as a}from"./ValueState-Bg0UWejw.js";import"./withWebComponent-_WQ2NUTk.js";import"./sys-cancel-Dr0S25ML.js";import{O as e}from"./index-C-CEWjpY.js";import{I as g}from"./index-BejDZHMx.js";import{L as d}from"./index-D4b12phO.js";import{I as n}from"./IndicationColor-LRWnbNUo.js";const N="sys-cancel",y={title:"Data Display / ObjectStatus",component:e,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{state:a.None,children:"ObjectStatus",showDefaultIcon:!0}},i={},o={render:function(){return t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[t.jsx(e,{showDefaultIcon:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{showDefaultIcon:!0,state:a.Positive,children:"ValueState.Positive"}),t.jsx(e,{showDefaultIcon:!0,state:a.Critical,children:"ValueState.Critical"}),t.jsx(e,{showDefaultIcon:!0,state:a.Negative,children:"ValueState.Negative"}),t.jsx(e,{showDefaultIcon:!0,state:a.Information,children:"ValueState.Information"})]})}},r={args:{icon:t.jsx(g,{name:N})}},c={args:{icon:t.jsx(g,{name:N}),children:null}},s={name:"Inverted ObjectStatus",render(){return t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[t.jsx(d,{style:{gridColumn:"span 5"},children:"Standard mode:"}),t.jsx(e,{inverted:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{inverted:!0,state:a.Positive,children:"ValueState.Positive"}),t.jsx(e,{inverted:!0,state:a.Critical,children:"ValueState.Critical"}),t.jsx(e,{inverted:!0,state:a.Negative,children:"ValueState.Negative"}),t.jsx(e,{inverted:!0,state:a.Information,children:"ValueState.Information"}),t.jsx(e,{inverted:!0,state:n.Indication01,children:"IndicationColor.Indication01"}),t.jsx(e,{inverted:!0,state:n.Indication02,children:"IndicationColor.Indication02"}),t.jsx(e,{inverted:!0,state:n.Indication03,children:"IndicationColor.Indication03"}),t.jsx(e,{inverted:!0,state:n.Indication04,children:"IndicationColor.Indication04"}),t.jsx(e,{inverted:!0,state:n.Indication05,children:"IndicationColor.Indication05"}),t.jsx(e,{inverted:!0,state:n.Indication06,children:"IndicationColor.Indication06"}),t.jsx(e,{inverted:!0,state:n.Indication07,children:"IndicationColor.Indication07"}),t.jsx(e,{inverted:!0,state:n.Indication08,children:"IndicationColor.Indication08"}),t.jsxs(d,{style:{gridColumn:"span 5"},children:[t.jsx("code",{children:"interactive"})," mode:"]}),t.jsx(e,{interactive:!0,inverted:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{interactive:!0,inverted:!0,state:a.Positive,children:"ValueState.Positive"}),t.jsx(e,{interactive:!0,inverted:!0,state:a.Critical,children:"ValueState.Critical"}),t.jsx(e,{interactive:!0,inverted:!0,state:a.Negative,children:"ValueState.Negative"}),t.jsx(e,{interactive:!0,inverted:!0,state:a.Information,children:"ValueState.Information"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication01,children:"IndicationColor.Indication01"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication02,children:"IndicationColor.Indication02"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication03,children:"IndicationColor.Indication03"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication04,children:"IndicationColor.Indication04"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication05,children:"IndicationColor.Indication05"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication06,children:"IndicationColor.Indication06"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication07,children:"IndicationColor.Indication07"}),t.jsx(e,{interactive:!0,inverted:!0,state:n.Indication08,children:"IndicationColor.Indication08"})]})}};var l,u,I;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(I=(u=i.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var S,v,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function () {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
      rowGap: '1rem',
      columnGap: '1rem'
    }}>
        <ObjectStatus showDefaultIcon state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Negative}>
          ValueState.Negative
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
      </div>;
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var m,b,O;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} />
  }
}`,...(O=(b=r.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var C,p,h;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} />,
    children: null
  }
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,V,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Inverted ObjectStatus',
  render() {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
      rowGap: '1rem',
      columnGap: '1rem'
    }}>
        <Label style={{
        gridColumn: 'span 5'
      }}>Standard mode:</Label>
        <ObjectStatus inverted state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Negative}>
          ValueState.Negative
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication01}>
          IndicationColor.Indication01
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication02}>
          IndicationColor.Indication02
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication03}>
          IndicationColor.Indication03
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication04}>
          IndicationColor.Indication04
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication05}>
          IndicationColor.Indication05
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication06}>
          IndicationColor.Indication06
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication07}>
          IndicationColor.Indication07
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication08}>
          IndicationColor.Indication08
        </ObjectStatus>
        <Label style={{
        gridColumn: 'span 5'
      }}>
          <code>interactive</code> mode:
        </Label>
        <ObjectStatus interactive inverted state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Negative}>
          ValueState.Negative
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication01}>
          IndicationColor.Indication01
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication02}>
          IndicationColor.Indication02
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication03}>
          IndicationColor.Indication03
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication04}>
          IndicationColor.Indication04
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication05}>
          IndicationColor.Indication05
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication06}>
          IndicationColor.Indication06
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication07}>
          IndicationColor.Indication07
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication08}>
          IndicationColor.Indication08
        </ObjectStatus>
      </div>;
  }
}`,...(f=(V=s.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};const D=["Default","WithDefaultIcons","WithCustomIcon","WithIconOnly","InvertedObjectStatus"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InvertedObjectStatus:s,WithCustomIcon:r,WithDefaultIcons:o,WithIconOnly:c,__namedExportsOrder:D,default:y},Symbol.toStringTag,{value:"Module"}));export{z as C,i as D,s as I,o as W,r as a,c as b};
