import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{c as g}from"./sys-cancel-ksrDjaZa.js";import{O as e}from"./index-y-brTMva.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{I as W}from"./index-4brqieoI.js";import{L as d}from"./index-Z4iIm-43.js";import{I as n}from"./IndicationColor-5SfIXGxx.js";const y={title:"Data Display / ObjectStatus",component:e,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{state:a.None,children:"ObjectStatus",showDefaultIcon:!0}},i={},o={render:function(){return t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[t.jsx(e,{showDefaultIcon:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{showDefaultIcon:!0,state:a.Success,children:"ValueState.Success"}),t.jsx(e,{showDefaultIcon:!0,state:a.Warning,children:"ValueState.Warning"}),t.jsx(e,{showDefaultIcon:!0,state:a.Error,children:"ValueState.Error"}),t.jsx(e,{showDefaultIcon:!0,state:a.Information,children:"ValueState.Information"})]})}},r={args:{icon:t.jsx(W,{name:g})}},c={args:{icon:t.jsx(W,{name:g}),children:null}},s={name:"Inverted ObjectStatus",render(){return t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[t.jsx(d,{style:{gridColumn:"span 5"},children:"Standard mode:"}),t.jsx(e,{inverted:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{inverted:!0,state:a.Success,children:"ValueState.Success"}),t.jsx(e,{inverted:!0,state:a.Warning,children:"ValueState.Warning"}),t.jsx(e,{inverted:!0,state:a.Error,children:"ValueState.Error"}),t.jsx(e,{inverted:!0,state:a.Information,children:"ValueState.Information"}),t.jsx(e,{inverted:!0,state:n.Indication01,children:"IndicationColor.Indication01"}),t.jsx(e,{inverted:!0,state:n.Indication02,children:"IndicationColor.Indication02"}),t.jsx(e,{inverted:!0,state:n.Indication03,children:"IndicationColor.Indication03"}),t.jsx(e,{inverted:!0,state:n.Indication04,children:"IndicationColor.Indication04"}),t.jsx(e,{inverted:!0,state:n.Indication05,children:"IndicationColor.Indication05"}),t.jsx(e,{inverted:!0,state:n.Indication06,children:"IndicationColor.Indication06"}),t.jsx(e,{inverted:!0,state:n.Indication07,children:"IndicationColor.Indication07"}),t.jsx(e,{inverted:!0,state:n.Indication08,children:"IndicationColor.Indication08"}),t.jsxs(d,{style:{gridColumn:"span 5"},children:[t.jsx("code",{children:"active"})," mode:"]}),t.jsx(e,{active:!0,inverted:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{active:!0,inverted:!0,state:a.Success,children:"ValueState.Success"}),t.jsx(e,{active:!0,inverted:!0,state:a.Warning,children:"ValueState.Warning"}),t.jsx(e,{active:!0,inverted:!0,state:a.Error,children:"ValueState.Error"}),t.jsx(e,{active:!0,inverted:!0,state:a.Information,children:"ValueState.Information"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication01,children:"IndicationColor.Indication01"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication02,children:"IndicationColor.Indication02"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication03,children:"IndicationColor.Indication03"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication04,children:"IndicationColor.Indication04"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication05,children:"IndicationColor.Indication05"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication06,children:"IndicationColor.Indication06"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication07,children:"IndicationColor.Indication07"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication08,children:"IndicationColor.Indication08"})]})}};var u,l,I;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(I=(l=i.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};var S,j,m;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <ObjectStatus showDefaultIcon state={ValueState.Success}>
          ValueState.Success
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Warning}>
          ValueState.Warning
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Error}>
          ValueState.Error
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
      </div>;
  }
}`,...(m=(j=o.parameters)==null?void 0:j.docs)==null?void 0:m.source}}};var v,b,O;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <ObjectStatus inverted state={ValueState.Success}>
          ValueState.Success
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Warning}>
          ValueState.Warning
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Error}>
          ValueState.Error
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
          <code>active</code> mode:
        </Label>
        <ObjectStatus active inverted state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Success}>
          ValueState.Success
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Warning}>
          ValueState.Warning
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Error}>
          ValueState.Error
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication01}>
          IndicationColor.Indication01
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication02}>
          IndicationColor.Indication02
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication03}>
          IndicationColor.Indication03
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication04}>
          IndicationColor.Indication04
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication05}>
          IndicationColor.Indication05
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication06}>
          IndicationColor.Indication06
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication07}>
          IndicationColor.Indication07
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication08}>
          IndicationColor.Indication08
        </ObjectStatus>
      </div>;
  }
}`,...(f=(V=s.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};const D=["Default","WithDefaultIcons","WithCustomIcon","WithIconOnly","InvertedObjectStatus"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InvertedObjectStatus:s,WithCustomIcon:r,WithDefaultIcons:o,WithIconOnly:c,__namedExportsOrder:D,default:y},Symbol.toStringTag,{value:"Module"}));export{z as C,i as D,s as I,o as W,r as a,c as b};
