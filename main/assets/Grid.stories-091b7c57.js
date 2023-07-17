import{j as n}from"./jsx-runtime-6b79a019.js";import{r as u}from"./index-ccf6a75d.js";import{g as X,a as G,d as _}from"./Media-6b270b80.js";import{c as j}from"./clsx-1229b3e0.js";import{c as I}from"./react-jss.esm-0528916b.js";import{f as T}from"./utils-f515de3e.js";var f=(e=>(e.Left="Left",e.Center="Center",e.Right="Right",e))(f||{});const V=()=>{var a;const[e,t]=u.useState((a=X())==null?void 0:a.name);return u.useEffect(()=>{let p=!0;const c=({name:m})=>{p===!0&&t(m)};return G(c),()=>{p=!1,_(c)}},[t]),e},P=()=>{const e={};for(let t=1;t<=12;t++)e[`gridSpan${t}`]={gridColumn:`span ${t}`};return e},E={grid:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)"},...P(),positionCenter:{marginLeft:"auto",marginRight:"auto"},positionRight:{marginLeft:"auto",marginRight:0}},q=/^([X][L](?<LargeDesktop>[0-9]|1[0-2]))? ?([L](?<Desktop>[0-9]|1[0-2]))? ?([M](?<Tablet>[0-9]|1[0-2]))? ?([S](?<Phone>[0-9]|1[0-2]))?$/i,A=/^([X][L](?<LargeDesktop>[1-9]|1[0-2]))? ?([L](?<Desktop>[1-9]|1[0-2]))? ?([M](?<Tablet>[1-9]|1[0-2]))? ?([S](?<Phone>[1-9]|1[0-2]))?$/i,l=new Map;l.set("Phone",1);l.set("Tablet",2);l.set("Desktop",4);l.set("LargeDesktop",4);const d=new Map;d.set("Phone",0);d.set("Tablet",0);d.set("Desktop",0);d.set("LargeDesktop",0);const $=(e,t)=>{const a=A.exec(e);return(a==null?void 0:a.groups[t])??l.get(t)},F=(e,t)=>{const a=q.exec(e);return(a==null?void 0:a.groups[t])??d.get(t)},H=I(E,{name:"Grid"}),i=u.forwardRef((e,t)=>{const{position:a,children:p,hSpacing:c,vSpacing:m,style:L,className:C,slot:M,defaultIndent:D,defaultSpan:k,...w}=e,o=H(),h=V(),x=j(o.grid,f.Center===a&&o.positionCenter,f.Right===a&&o.positionRight,C);return n.jsx("div",{ref:t,className:x,style:{gridRowGap:m,gridColumnGap:c,...L},slot:M,...w,children:T(p,1/0).map(r=>{if(!u.isValidElement(r))return null;const R=$(r.props["data-layout-span"]??k,h),N=o[`gridSpan${R}`],y=[n.jsx("div",{className:N,children:r},r.key)],g=F(r.props["data-layout-indent"]??D,h);return g&&g>0&&y.unshift(n.jsx("span",{className:o[`gridSpan${g}`],"data-component-name":"GridIndentSpacer","aria-hidden":"true"},`${r.key}-indent`)),y})})});i.displayName="Grid";i.defaultProps={hSpacing:"1rem",vSpacing:"1rem",defaultIndent:"XL0 L0 M0 S0",defaultSpan:"XL3 L3 M6 S12"};try{i.displayName="Grid",i.__docgenInfo={description:"A layout container component used for aligning items with various sizes in a simple grid.",displayName:"Grid",props:{vSpacing:{defaultValue:{value:"1rem"},description:"Vertical spacing between the rows in the Grid. If not specified, then 1rem.",name:"vSpacing",required:!1,type:{name:"Height<string | number>"}},hSpacing:{defaultValue:{value:"1rem"},description:"Horizontal spacing between the content in the Grid. If not specified, then 1rem.",name:"hSpacing",required:!1,type:{name:"Width<string | number>"}},position:{defaultValue:null,description:'Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".',name:"position",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Center"'},{value:'"Right"'}]}},defaultSpan:{defaultValue:{value:"XL3 L3 M6 S12"},description:`A string type that represents Grid's default span values for very large, large, medium and small screens for the whole Grid.
Allowed values are separated by space Letters XL, L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4".
Note that the parameters has to be provided in the order very large, large, medium, small.

You can override this default span on each child element by setting the prop \`data-layout-span\`.`,name:"defaultSpan",required:!1,type:{name:"string"}},defaultIndent:{defaultValue:{value:"XL0 L0 M0 S0"},description:`Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for very large, large, medium and small screens.
Allowed values are separated by space Letters XL, L, M or S followed by number of columns from 0 to 12 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4".
Note that the parameters has to be provided in the order very-large, large, medium, small.

You can override this default indent on each child element by setting the prop \`data-layout-indent\`.`,name:"defaultIndent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Components that are placed into Grid layout.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Layouts & Floorplans / Grid",component:i,args:{defaultSpan:"XL3 L3 M6 S12",defaultIndent:"XL0 L0 M0 S0",vSpacing:"1rem",hSpacing:"1rem"},argTypes:{children:{control:{disable:!0}}}},s={args:{children:n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{backgroundColor:"#afd69b"},"data-layout-span":"XL8 L8 M8 S12","data-layout-indent":"XL1 L1 M1 S0",children:'Div 1 with prop: data-layout-span="XL8 L8 M8 S12" and data-layout-indent="XL1 L1 M1 S0"'}),n.jsx("div",{style:{backgroundColor:"#b7cc9d"},children:"Div 2"}),n.jsx("div",{style:{backgroundColor:"#a6dbbc"},children:"Div 3"}),n.jsx("div",{style:{backgroundColor:"#8fb6ab"},children:"Div 4"}),n.jsx("div",{style:{backgroundColor:"#8ca19e"},children:"Div 5"}),n.jsx("div",{style:{backgroundColor:"#838f8c"},children:"Div 6"})]})}};var v,S,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const O=["Default"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{Q as C,s as D};
//# sourceMappingURL=Grid.stories-091b7c57.js.map
