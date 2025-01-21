import{j as e}from"./jsx-runtime-CLpGMVip.js";import{u as N}from"./useStylesheet-DNyxTWaC.js";import{r as l}from"./index-D23YZj_x.js";import{g as R,a as X,d as T}from"./Media-hDrOrDd7.js";import{c as w}from"./clsx-B-dksMZM.js";import{c as E}from"./utils-C9_9ShpY.js";const I=()=>{var a;const[n,r]=l.useState((a=R())==null?void 0:a.name);return l.useEffect(()=>{let g=!0;const p=({name:c})=>{g===!0&&r(c)};return X(p),()=>{g=!1,T(p)}},[r]),n};var u=(n=>(n.Left="Left",n.Center="Center",n.Right="Right",n))(u||{});const P="@layer ui5-webcomponents-react{._grid_1g3dq_1{display:grid;grid-template-columns:repeat(12,1fr)}._gridSpan1_1g3dq_6{grid-column:span 1}._gridSpan2_1g3dq_10{grid-column:span 2}._gridSpan3_1g3dq_14{grid-column:span 3}._gridSpan4_1g3dq_18{grid-column:span 4}._gridSpan5_1g3dq_22{grid-column:span 5}._gridSpan6_1g3dq_26{grid-column:span 6}._gridSpan7_1g3dq_30{grid-column:span 7}._gridSpan8_1g3dq_34{grid-column:span 8}._gridSpan9_1g3dq_38{grid-column:span 9}._gridSpan10_1g3dq_42{grid-column:span 10}._gridSpan11_1g3dq_46{grid-column:span 11}._gridSpan12_1g3dq_50{grid-column:span 12}._positionCenter_1g3dq_54{margin-inline:auto}._positionRight_1g3dq_58{margin-inline:auto 0}}",d={grid:"_grid_1g3dq_1",gridSpan1:"_gridSpan1_1g3dq_6",gridSpan2:"_gridSpan2_1g3dq_10",gridSpan3:"_gridSpan3_1g3dq_14",gridSpan4:"_gridSpan4_1g3dq_18",gridSpan5:"_gridSpan5_1g3dq_22",gridSpan6:"_gridSpan6_1g3dq_26",gridSpan7:"_gridSpan7_1g3dq_30",gridSpan8:"_gridSpan8_1g3dq_34",gridSpan9:"_gridSpan9_1g3dq_38",gridSpan10:"_gridSpan10_1g3dq_42",gridSpan11:"_gridSpan11_1g3dq_46",gridSpan12:"_gridSpan12_1g3dq_50",positionCenter:"_positionCenter_1g3dq_54",positionRight:"_positionRight_1g3dq_58"},F=/^([X][L](?<LargeDesktop>[0-9]|1[0-2]))? ?([L](?<Desktop>[0-9]|1[0-2]))? ?([M](?<Tablet>[0-9]|1[0-2]))? ?([S](?<Phone>[0-9]|1[0-2]))?$/i,G=/^([X][L](?<LargeDesktop>[1-9]|1[0-2]))? ?([L](?<Desktop>[1-9]|1[0-2]))? ?([M](?<Tablet>[1-9]|1[0-2]))? ?([S](?<Phone>[1-9]|1[0-2]))?$/i,o=new Map;o.set("Phone",1);o.set("Tablet",2);o.set("Desktop",4);o.set("LargeDesktop",4);const s=new Map;s.set("Phone",0);s.set("Tablet",0);s.set("Desktop",0);s.set("LargeDesktop",0);const $=(n,r)=>{const a=G.exec(n);return Number((a==null?void 0:a.groups[r])??o.get(r))},A=(n,r)=>{const a=F.exec(n);return Number((a==null?void 0:a.groups[r])??s.get(r))},S=l.forwardRef((n,r)=>{const{position:a,children:g,hSpacing:p="1rem",vSpacing:c="1rem",style:f,className:h,slot:q,defaultIndent:D="XL0 L0 M0 S0",defaultSpan:C="XL3 L3 M6 S12",...k}=n;N(P,S.displayName);const m=I(),M=w(d.grid,u.Center===a&&d.positionCenter,u.Right===a&&d.positionRight,h);return e.jsx("div",{ref:r,className:M,style:{rowGap:c,columnGap:p,...f},slot:q,...k,children:E(g,1/0).map(t=>{if(!l.isValidElement(t))return null;const x=$(t.props["data-layout-span"]??C,m),j=d[`gridSpan${x}`],y=[e.jsx("div",{className:j,children:t},t.key)],_=A(t.props["data-layout-indent"]??D,m);return _&&_>0&&y.unshift(e.jsx("span",{className:d[`gridSpan${_}`],"data-component-name":"GridIndentSpacer","aria-hidden":"true"},`${t.key}-indent`)),y})})});S.displayName="Grid";const O={title:"Layouts & Floorplans / Grid",component:S,args:{defaultSpan:"XL3 L3 M6 S12",defaultIndent:"XL0 L0 M0 S0",vSpacing:"1rem",hSpacing:"1rem"},argTypes:{children:{control:{disable:!0}}}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{backgroundColor:"#afd69b"},"data-layout-span":"XL8 L8 M8 S12","data-layout-indent":"XL1 L1 M1 S0",children:'Div 1 with prop: data-layout-span="XL8 L8 M8 S12" and data-layout-indent="XL1 L1 M1 S0"'}),e.jsx("div",{style:{backgroundColor:"#b7cc9d"},children:"Div 2"}),e.jsx("div",{style:{backgroundColor:"#a6dbbc"},children:"Div 3"}),e.jsx("div",{style:{backgroundColor:"#8fb6ab"},children:"Div 4"}),e.jsx("div",{style:{backgroundColor:"#8ca19e"},children:"Div 5"}),e.jsx("div",{style:{backgroundColor:"#838f8c"},children:"Div 6"})]})}};var v,L,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <>
        <div style={{
        backgroundColor: '#afd69b'
      }} data-layout-span="XL8 L8 M8 S12" data-layout-indent="XL1 L1 M1 S0">
          {\`Div 1 with prop: data-layout-span="XL8 L8 M8 S12" and data-layout-indent="XL1 L1 M1 S0"\`}
        </div>
        <div style={{
        backgroundColor: '#b7cc9d'
      }}>Div 2</div>
        <div style={{
        backgroundColor: '#a6dbbc'
      }}>Div 3</div>
        <div style={{
        backgroundColor: '#8fb6ab'
      }}>Div 4</div>
        <div style={{
        backgroundColor: '#8ca19e'
      }}>Div 5</div>
        <div style={{
        backgroundColor: '#838f8c'
      }}>Div 6</div>
      </>
  }
}`,...(b=(L=i.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const H=["Default"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:H,default:O},Symbol.toStringTag,{value:"Module"}));export{Q as C,i as D};
