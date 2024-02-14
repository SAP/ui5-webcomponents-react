import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{c as W}from"./sys-cancel-l55Abz6b.js";import{O as e}from"./index-z1E6vWgM.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{I as y}from"./index-AFDVaP56.js";import{L as u}from"./index-i9de03R7.js";var n=(i=>(i.Indication01="Indication01",i.Indication02="Indication02",i.Indication03="Indication03",i.Indication04="Indication04",i.Indication05="Indication05",i.Indication06="Indication06",i.Indication07="Indication07",i.Indication08="Indication08",i))(n||{});const D={title:"Data Display / ObjectStatus",component:e,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{state:a.None,children:"ObjectStatus",showDefaultIcon:!0}},o={},r={render:function(){return t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[t.jsx(e,{showDefaultIcon:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{showDefaultIcon:!0,state:a.Success,children:"ValueState.Success"}),t.jsx(e,{showDefaultIcon:!0,state:a.Warning,children:"ValueState.Warning"}),t.jsx(e,{showDefaultIcon:!0,state:a.Error,children:"ValueState.Error"}),t.jsx(e,{showDefaultIcon:!0,state:a.Information,children:"ValueState.Information"})]})}},c={args:{icon:t.jsx(y,{name:W})}},s={args:{icon:t.jsx(y,{name:W}),children:null}},d={name:"Inverted ObjectStatus",render(){return t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[t.jsx(u,{style:{gridColumn:"span 5"},children:"Standard mode:"}),t.jsx(e,{inverted:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{inverted:!0,state:a.Success,children:"ValueState.Success"}),t.jsx(e,{inverted:!0,state:a.Warning,children:"ValueState.Warning"}),t.jsx(e,{inverted:!0,state:a.Error,children:"ValueState.Error"}),t.jsx(e,{inverted:!0,state:a.Information,children:"ValueState.Information"}),t.jsx(e,{inverted:!0,state:n.Indication01,children:"IndicationColor.Indication01"}),t.jsx(e,{inverted:!0,state:n.Indication02,children:"IndicationColor.Indication02"}),t.jsx(e,{inverted:!0,state:n.Indication03,children:"IndicationColor.Indication03"}),t.jsx(e,{inverted:!0,state:n.Indication04,children:"IndicationColor.Indication04"}),t.jsx(e,{inverted:!0,state:n.Indication05,children:"IndicationColor.Indication05"}),t.jsx(e,{inverted:!0,state:n.Indication06,children:"IndicationColor.Indication06"}),t.jsx(e,{inverted:!0,state:n.Indication07,children:"IndicationColor.Indication07"}),t.jsx(e,{inverted:!0,state:n.Indication08,children:"IndicationColor.Indication08"}),t.jsxs(u,{style:{gridColumn:"span 5"},children:[t.jsx("code",{children:"active"})," mode:"]}),t.jsx(e,{active:!0,inverted:!0,state:a.None,children:"ValueState.None"}),t.jsx(e,{active:!0,inverted:!0,state:a.Success,children:"ValueState.Success"}),t.jsx(e,{active:!0,inverted:!0,state:a.Warning,children:"ValueState.Warning"}),t.jsx(e,{active:!0,inverted:!0,state:a.Error,children:"ValueState.Error"}),t.jsx(e,{active:!0,inverted:!0,state:a.Information,children:"ValueState.Information"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication01,children:"IndicationColor.Indication01"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication02,children:"IndicationColor.Indication02"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication03,children:"IndicationColor.Indication03"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication04,children:"IndicationColor.Indication04"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication05,children:"IndicationColor.Indication05"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication06,children:"IndicationColor.Indication06"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication07,children:"IndicationColor.Indication07"}),t.jsx(e,{active:!0,inverted:!0,state:n.Indication08,children:"IndicationColor.Indication08"})]})}};var l,I,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,m,v;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,O,p;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} />
  }
}`,...(p=(O=c.parameters)==null?void 0:O.docs)==null?void 0:p.source}}};var h,C,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} />,
    children: null
  }
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var V,f,g;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const w=["Default","WithDefaultIcons","WithCustomIcon","WithIconOnly","InvertedObjectStatus"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InvertedObjectStatus:d,WithCustomIcon:c,WithDefaultIcons:r,WithIconOnly:s,__namedExportsOrder:w,default:D},Symbol.toStringTag,{value:"Module"}));export{z as C,o as D,d as I,r as W,c as a,s as b};
