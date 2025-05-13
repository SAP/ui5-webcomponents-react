import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as N,a as L}from"./Icon-BexaehQh.js";import{o as t}from"./ValueState-Bg0UWejw.js";import"./jsx-runtime-CkEx_Gfk.js";import{T as m}from"./ThemingParameters-BB3UHRT7.js";import"./CustomElementsScope-CjZbIYTD.js";import"./index-U0ga5oGA.js";import{I as P}from"./IndicationColor-DVw-fSM_.js";import{I as V}from"./index-DtQjvaZb.js";import{L as a}from"./index-DotsZLBN.js";import{T as z}from"./index-BxLcq94m.js";import{O as n}from"./index-B235YKpO.js";const F="sys-cancel",G="M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-32 0q0-47-17.5-87.5t-48-71-71.5-48T256 32t-87 18-71.5 48.5-48 71T32 256q0 47 17.5 88t48 71 71.5 47.5 87 17.5q47 0 88-17.5t71-47.5 47.5-71 17.5-88zm-186-7q-5 3-1 9l89 89q9 8 0 17l-16 17q-8 4-9 4t-9-4l-89-89q-1-2-4-2-4 0-5 2l-88 89q-6 4-9 4-1 0-9-4l-16-17q-8-9 0-17l88-89q5-5 0-9l-88-89q-8-9 0-17l16-17q4-4 9-4t9 4l88 89q2 2 5 2 2 0 4-2l89-89q4-4 9-4t9 4l16 17q9 8 0 17z",_=!1,W="SAP-icons-v4",k="@ui5/webcomponents-icons";N(F,{pathData:G,ltr:_,collection:W,packageName:k});const B="sys-cancel",M="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 461q42 0 79.5-16t65.5-44 44-65.5 16-79.5-16-79.5-44-65.5-65.5-44T256 51t-79.5 16-65.5 44-44 65.5T51 256t16 79.5 44 65.5 65.5 44 79.5 16zm70-301q11 0 18.5 7.5T352 186t-7 18l-53 52 53 52q7 7 7 18t-7.5 18.5T326 352q-10 0-18-8l-52-52-52 52q-8 8-18 8-11 0-18.5-7.5T160 326q0-10 8-18l52-52-52-52q-8-8-8-18 0-11 7.5-18.5T186 160t18 7l52 53 52-53q7-7 18-7z",A=!1,E="SAP-icons-v5",R="@ui5/webcomponents-icons";N(B,{pathData:M,ltr:A,collection:E,packageName:R});const $="sys-cancel",H={title:"Data Display / ObjectStatus",component:n,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{state:t.None,children:"ObjectStatus",showDefaultIcon:!0}},s={},r={render:function(){return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[e.jsx(n,{showDefaultIcon:!0,state:t.None,children:"ValueState.None"}),e.jsx(n,{showDefaultIcon:!0,state:t.Positive,children:"ValueState.Positive"}),e.jsx(n,{showDefaultIcon:!0,state:t.Critical,children:"ValueState.Critical"}),e.jsx(n,{showDefaultIcon:!0,state:t.Negative,children:"ValueState.Negative"}),e.jsx(n,{showDefaultIcon:!0,state:t.Information,children:"ValueState.Information"})]})}},o={args:{icon:e.jsx(V,{name:$,mode:L.Decorative})}},i={args:{icon:e.jsx(V,{name:$,mode:L.Decorative}),children:null,title:"Cancel"}},J={...t,...P},c={name:"All States",render(){const l=(p=!1,d=!1)=>Object.values(J).map(u=>{const S=parseInt(u.replace("Indication",""),10);return!d&&!isNaN(S)&&S>10?null:e.jsx(n,{interactive:p,inverted:d,state:u,showDefaultIcon:!0,children:u},`${u}-${p?"interactive":""}-${d?"inverted":""}`)});return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[e.jsx(a,{style:{gridColumn:"span 5"},children:"Standard mode:"}),l(),e.jsxs(a,{style:{gridColumn:"span 5"},children:[e.jsx("code",{children:"interactive"})," mode:"]}),l(!0),e.jsx("div",{style:{gridColumn:"span 5",borderBlockStart:`1px solid ${m.sapList_BorderColor}`}}),e.jsx(z,{style:{gridColumn:"span 5",fontFamily:m.sapFontBoldFamily,fontSize:m.sapFontLargeSize},children:"Inverted"}),e.jsx(a,{style:{gridColumn:"span 5"},children:"The ObjectStatus has an inverted visualisation, which is used in cases when the information is crucial for the user’s actions and needs to stand out visually."}),e.jsx(a,{style:{gridColumn:"span 5"},children:"Standard mode:"}),l(!1,!0),e.jsxs(a,{style:{gridColumn:"span 5"},children:[e.jsx("code",{children:"interactive"})," mode:"]}),l(!0,!0)]})}};var h,f,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,b,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var I,y,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} mode={IconMode.Decorative} />
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,C,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} mode={IconMode.Decorative} />,
    children: null,
    title: 'Cancel'
  }
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var q,D,w;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'All States',
  render() {
    const renderStatuses = (interactive = false, inverted = false) => {
      return Object.values(States).map((state: ObjectStatusPropTypes['state']) => {
        const indicationNumber = parseInt(state.replace('Indication', ''), 10);
        if (!inverted && !isNaN(indicationNumber) && indicationNumber > 10) {
          return null;
        }
        return <ObjectStatus key={\`\${state}-\${interactive ? 'interactive' : ''}-\${inverted ? 'inverted' : ''}\`} interactive={interactive} inverted={inverted} state={state} showDefaultIcon>
            {state}
          </ObjectStatus>;
      });
    };
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
      rowGap: '1rem',
      columnGap: '1rem'
    }}>
        <Label style={{
        gridColumn: 'span 5'
      }}>Standard mode:</Label>
        {renderStatuses()}
        <Label style={{
        gridColumn: 'span 5'
      }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true)}
        <div style={{
        gridColumn: 'span 5',
        borderBlockStart: \`1px solid \${ThemingParameters.sapList_BorderColor}\`
      }} />
        <Text style={{
        gridColumn: 'span 5',
        fontFamily: ThemingParameters.sapFontBoldFamily,
        fontSize: ThemingParameters.sapFontLargeSize
      }}>
          Inverted
        </Text>
        <Label style={{
        gridColumn: 'span 5'
      }}>
          The ObjectStatus has an inverted visualisation, which is used in cases when the information is crucial for the
          user’s actions and needs to stand out visually.
        </Label>
        <Label style={{
        gridColumn: 'span 5'
      }}>Standard mode:</Label>
        {renderStatuses(false, true)}
        <Label style={{
        gridColumn: 'span 5'
      }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true, true)}
      </div>;
  }
}`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const K=["Default","WithDefaultIcons","WithCustomIcon","WithIconOnly","InvertedObjectStatus"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:s,InvertedObjectStatus:c,WithCustomIcon:o,WithDefaultIcons:r,WithIconOnly:i,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{ie as C,s as D,c as I,r as W,o as a,i as b};
