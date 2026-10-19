import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{B as r}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{s as i,u as a}from"./Icon-xsFI9tdw.js";import{n as ee,t as te}from"./withWebComponent-CQvqGaAL.js";import{t as ne}from"./jsx-runtime-BdxMnOeJ.js";import{n as re,t as o}from"./Button-BWazcef0.js";import{c as ie}from"./MenuItem-Bg1w7D7n.js";import{n as ae,t as s}from"./Menu-zel4tGRg.js";import{n as oe,t as c}from"./MenuItem-rohTAfRe.js";import{n as se,t as l}from"./MenuSeparator-DornKjSZ.js";import{i as ce}from"./iframe-DbDjUbGV.js";import{n as le,t as ue}from"./add-document-CVUs9otI.js";import{n as de,t as fe}from"./locked-84A36rCt.js";var u;function d(){return(d=e((()=>{ie(),te(),u=ee(`ui5-menu-item-group`,[`checkMode`],[],[],[]),u.displayName=`MenuItemGroup`;try{u.displayName=`MenuItemGroup`,u.__docgenInfo={description:`The \`MenuItemGroup\` component represents a group of items designed for use inside a \`Menu\`.
Items belonging to the same group should be wrapped by a \`MenuItemGroup\`.
Each group can have an \`checkMode\` property, which defines the check mode for the items within the group.
The possible values for \`checkMode\` are:
- 'None' (default) - no items can be checked
- 'Single' - Only one item can be checked at a time
- 'Multiple' - Multiple items can be checked simultaneously

**Note:** If the \`checkMode\` property is set to 'Single', only one item can remain checked at any given time.
If multiple items are marked as checked, the last checked item will take precedence.

### Usage

\`MenuItemGroup\` represents a collection of \`MenuItem\` components that can have the same check mode.
The items are addeed to the group's \`items\` slot.



__Note:__ This is a UI5 Web Component! [MenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`MenuItemGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupPropTypes`}],description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `MenuItem` or `MenuSeparator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},checkMode:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupAttributes`}],description:`Defines the component's check mode.`,name:`checkMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Single" | "Multiple" | MenuItemGroupCheckMode`,value:[{value:`"None"`},{value:`"Single"`},{value:`"Multiple"`},{value:`"None"`,description:`default type (items in a group cannot be checked)`,fullComment:`default type (items in a group cannot be checked)
@public`,tags:{public:``}},{value:`"Single"`,description:`Single item check mode (only one item in a group can be checked at a time)`,fullComment:`Single item check mode (only one item in a group can be checked at a time)
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Multiple items check mode (multiple items in a group can be checked at a time)`,fullComment:`Multiple items check mode (multiple items in a group can be checked at a time)
@public`,tags:{public:``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var f,p,m;function h(){return(h=e((()=>{i(),f=`bold-text`,p=`M4.533 1h4.204c.434 0 .878.068 1.332.203.454.136.868.35 1.243.64.376.292.691.683.948 1.173.256.49.395 1.078.414 1.765 0 .771-.158 1.375-.473 1.813a6.64 6.64 0 0 1-.889 1.031c-.118.125-.128.24-.03.344a3.7 3.7 0 0 0 .504.375c.198.125.385.297.563.515.177.22.33.506.459.86.128.354.192.823.192 1.406 0 .646-.143 1.213-.43 1.703a4.11 4.11 0 0 1-1.065 1.219 4.547 4.547 0 0 1-1.362.719c-.483.156-.923.234-1.317.234H4.562C4.188 15 4 14.802 4 14.406V1.531C4 1.177 4.178 1 4.533 1Zm1.45 12H8.53c.236 0 .478-.037.725-.11.247-.072.474-.187.68-.343.208-.156.376-.36.504-.61s.193-.562.193-.937c0-.396-.065-.724-.193-.984a1.578 1.578 0 0 0-.503-.61 2.033 2.033 0 0 0-.696-.312A3.366 3.366 0 0 0 8.44 9H5.985c-.06 0-.09.02-.09.063v3.843c0 .063.03.094.09.094Zm-.088-9.469v3.375c0 .063.03.094.089.094h2.102c.631 0 1.189-.14 1.672-.422.484-.281.726-.807.726-1.578 0-.417-.07-.755-.208-1.016a1.701 1.701 0 0 0-.518-.609 1.826 1.826 0 0 0-.696-.297A3.86 3.86 0 0 0 8.292 3H6.429c-.356 0-.533.177-.533.531Z`,m=`0 0 16 16`,a(f,{pathData:p,ltr:!0,viewBox:m,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var g,_,v;function y(){return(y=e((()=>{i(),g=`bold-text`,_=`M9.106 1a3.882 3.882 0 0 1 3.883 3.875 3.857 3.857 0 0 1-1.169 2.768A3.877 3.877 0 0 1 14 11.125 3.882 3.882 0 0 1 10.117 15H3.75a.75.75 0 0 1-.75-.75V1.75A.75.75 0 0 1 3.75 1h5.356ZM4.5 13.5h5.617a2.382 2.382 0 0 0 2.383-2.375 2.382 2.382 0 0 0-2.383-2.375H4.5v4.75Zm0-6.25h4.606a2.382 2.382 0 0 0 2.383-2.375A2.382 2.382 0 0 0 9.106 2.5H4.5v4.75Z`,v=`0 0 16 16`,a(g,{pathData:_,ltr:!0,viewBox:v,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var b;function x(){return(x=e((()=>{r(),h(),y(),b=`bold-text`})))()}var S,C,w;function T(){return(T=e((()=>{i(),S=`italic-text`,C=`M4.8 14 8.4 2H6.6V1H12v1h-1.8L6.6 14h1.8v1H3v-1h1.8Z`,w=`0 0 16 16`,a(S,{pathData:C,ltr:!0,viewBox:w,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var E,D,O;function k(){return(k=e((()=>{i(),E=`italic-text`,D=`M8.814 5c.496 0 .863.496.717.97l-2 6.5-.002.006c-.065.204-.02.455.15.677.168.224.41.347.635.347a.75.75 0 0 1 0 1.5c-.765 0-1.424-.402-1.832-.94-.41-.54-.62-1.29-.384-2.036l1.7-5.524H6.75a.75.75 0 0 1 0-1.5h2.064ZM10.5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z`,O=`0 0 16 16`,a(E,{pathData:D,ltr:!0,viewBox:O,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var A;function j(){return(j=e((()=>{r(),T(),k(),A=`italic-text`})))()}var M,N,P;function F(){return(F=e((()=>{i(),M=`text-align-center`,N=`M2.5 3c-.333 0-.5-.167-.5-.5 0-.333.167-.5.5-.5h11c.333 0 .5.167.5.5 0 .333-.167.5-.5.5h-11Zm9 2c.333 0 .5.167.5.5 0 .333-.167.5-.5.5h-7c-.333 0-.5-.167-.5-.5 0-.333.167-.5.5-.5h7Zm0 6c.333 0 .5.167.5.5 0 .333-.167.5-.5.5h-7c-.333 0-.5-.167-.5-.5 0-.333.167-.5.5-.5h7Zm2-3c.333 0 .5.167.5.5 0 .333-.167.5-.5.5h-11c-.333 0-.5-.167-.5-.5 0-.333.167-.5.5-.5h11Zm0 6c.333 0 .5.167.5.5 0 .333-.167.5-.5.5h-11c-.333 0-.5-.167-.5-.5 0-.333.167-.5.5-.5h11Z`,P=`0 0 16 16`,a(M,{pathData:N,ltr:!0,viewBox:P,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var I,L,R;function pe(){return(pe=e((()=>{i(),I=`text-align-center`,L=`M11.25 13.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h6.5Zm3-4a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Zm-3-4.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h6.5Zm3-4a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Z`,R=`0 0 16 16`,a(I,{pathData:L,ltr:!0,viewBox:R,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var z;function B(){return(B=e((()=>{r(),F(),pe(),z=`text-align-center`})))()}var V,H,U;function W(){return(W=e((()=>{i(),V=`text-align-left`,H=`M2 8h11.5c.333 0 .5.167.5.5 0 .333-.167.5-.5.5H2V8Zm0-6h11.5c.333 0 .5.167.5.5 0 .333-.167.5-.5.5H2V2Zm11.5 12c.333 0 .5.167.5.5 0 .333-.167.5-.5.5H2v-1h11.5ZM2 12v-1h5.5c.333 0 .5.167.5.5 0 .333-.167.5-.5.5H2Zm0-7h5.5c.333 0 .5.167.5.5 0 .333-.167.5-.5.5H2V5Z`,U=`0 0 16 16`,a(V,{pathData:H,ltr:!0,viewBox:U,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var G,K,me;function he(){return(he=e((()=>{i(),G=`text-align-left`,K=`M8.25 13.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h6.5Zm6-4a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Zm-6-4.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h6.5Zm6-4a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Z`,me=`0 0 16 16`,a(G,{pathData:K,ltr:!0,viewBox:me,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var ge;function _e(){return(_e=e((()=>{r(),W(),he(),ge=`text-align-left`})))()}var ve,ye,be;function xe(){return(xe=e((()=>{i(),ve=`text-align-right`,ye=`M14 8H2.5c-.333 0-.5.167-.5.5 0 .333.167.5.5.5H14V8Zm0-6H2.5c-.333 0-.5.167-.5.5 0 .333.167.5.5.5H14V2ZM2.5 14c-.333 0-.5.167-.5.5 0 .333.167.5.5.5H14v-1H2.5ZM14 12v-1H8.5c-.333 0-.5.167-.5.5 0 .333.167.5.5.5H14Zm0-7H8.5c-.333 0-.5.167-.5.5 0 .333.167.5.5.5H14V5Z`,be=`0 0 16 16`,a(ve,{pathData:ye,ltr:!0,viewBox:be,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var Se,Ce,we;function Te(){return(Te=e((()=>{i(),Se=`text-align-right`,Ce=`M14.25 13.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h6.5Zm0-4a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Zm0-4.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h6.5Zm0-4a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Z`,we=`0 0 16 16`,a(Se,{pathData:Ce,ltr:!0,viewBox:we,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var Ee;function De(){return(De=e((()=>{r(),xe(),Te(),Ee=`text-align-right`})))()}var Oe,ke,Ae;function je(){return(je=e((()=>{i(),Oe=`underline-text`,ke=`M4 1h1v6.5c0 .688.245 1.276.734 1.766.49.49 1.079.734 1.766.734h1c.708 0 1.302-.245 1.781-.734.48-.49.719-1.079.719-1.766V1h1v6.5c0 .48-.094.932-.281 1.36a3.598 3.598 0 0 1-.75 1.109 3.597 3.597 0 0 1-1.11.75c-.427.187-.88.281-1.359.281h-1c-.48 0-.932-.094-1.36-.281a3.597 3.597 0 0 1-1.109-.75 3.594 3.594 0 0 1-.75-1.11A3.344 3.344 0 0 1 4 7.5V1ZM2.5 14h11c.125 0 .24.052.344.156A.478.478 0 0 1 14 14.5c0 .333-.167.5-.5.5h-11c-.333 0-.5-.167-.5-.5 0-.333.167-.5.5-.5Z`,Ae=`0 0 16 16`,a(Oe,{pathData:ke,ltr:!0,viewBox:Ae,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var Me,Ne,q;function Pe(){return(Pe=e((()=>{i(),Me=`underline-text`,Ne=`M14.25 13.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Zm-2-12.5a.75.75 0 0 1 .75.75V7A5 5 0 0 1 3 7V1.75a.75.75 0 0 1 1.5 0V7a3.5 3.5 0 1 0 7 0V1.75a.75.75 0 0 1 .75-.75Z`,q=`0 0 16 16`,a(Me,{pathData:Ne,ltr:!0,viewBox:q,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var Fe;function Ie(){return(Ie=e((()=>{r(),je(),Pe(),Fe=`underline-text`})))()}var Le=t({Default:()=>X,WithMenuItemGroup:()=>Q,WithSubMenu:()=>Z,__namedExportsOrder:()=>ze,default:()=>Re}),J,Y,Re,X,Z,Q,ze;function $(){return($=e((()=>{ce(),le(),x(),j(),fe(),B(),_e(),De(),Ie(),J=n(),re(),oe(),d(),se(),ae(),Y=ne(),Re={title:`Modals & Popovers / Menu`,component:s,argTypes:{children:{control:{disable:!0}}},args:{open:!1},parameters:{chromatic:{delay:1e3}},tags:[`package:@ui5/webcomponents`]},X={render(e){let[t,n]=(0,J.useState)(e.open),r=(0,J.useRef)(null);return(0,J.useEffect)(()=>{n(e.open)},[e.open]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(o,{ref:r,onClick:()=>{n(e=>!e)},children:`Show Menu`}),(0,Y.jsxs)(s,{...e,open:t,opener:r.current,onClose:t=>{e.onClose(t),n(!1)},children:[(0,Y.jsx)(c,{text:`New File`,icon:`add-document`}),(0,Y.jsx)(c,{text:`New Folder`,icon:`add-folder`,disabled:!0}),(0,Y.jsx)(l,{}),(0,Y.jsx)(c,{text:`Open`,icon:`open-folder`}),(0,Y.jsx)(c,{text:`Close`}),(0,Y.jsx)(l,{}),(0,Y.jsx)(c,{text:`Preferences`,icon:`action-settings`}),(0,Y.jsx)(c,{text:`Exit`,icon:`journey-arrive`})]})]})}},Z={name:`with Submenu`,render:e=>{let[t,n]=(0,J.useState)(e.open),r=(0,J.useRef)(null);return(0,J.useEffect)(()=>{n(e.open)},[e.open]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(o,{ref:r,onClick:()=>{n(e=>!e)},children:`Show Menu`}),(0,Y.jsxs)(s,{...e,open:t,opener:r.current,onClose:t=>{e.onClose(t),n(!1)},children:[(0,Y.jsx)(c,{text:`New File`,icon:`add-document`}),(0,Y.jsx)(c,{text:`New Folder`,icon:`add-folder`,disabled:!0}),(0,Y.jsx)(l,{}),(0,Y.jsxs)(c,{text:`Open`,icon:`open-folder`,children:[(0,Y.jsxs)(c,{text:`Open Locally`,icon:`open-folder`,children:[(0,Y.jsx)(c,{text:`Open C`}),(0,Y.jsx)(c,{text:`Open D`}),(0,Y.jsx)(c,{text:`Open E`})]}),(0,Y.jsx)(c,{text:`Open from Cloud`,icon:`cloud`})]}),(0,Y.jsx)(c,{text:`Close`}),(0,Y.jsx)(l,{}),(0,Y.jsx)(c,{text:`Preferences`,icon:`action-settings`}),(0,Y.jsx)(c,{text:`Exit`,icon:`journey-arrive`})]})]})}},Q={name:`with MenuItemGroup`,render(e){let[t,n]=(0,J.useState)(e.open),r=(0,J.useRef)(null);return(0,J.useEffect)(()=>{n(e.open)},[e.open]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(o,{ref:r,onClick:()=>{n(e=>!e)},children:`Show Menu`}),(0,Y.jsxs)(s,{...e,open:t,opener:r.current,onClose:t=>{e.onClose(t),n(!1)},children:[(0,Y.jsx)(c,{text:`New Paragraph`,icon:ue}),(0,Y.jsx)(c,{text:`New Text`}),(0,Y.jsx)(l,{}),(0,Y.jsxs)(u,{checkMode:`Single`,children:[(0,Y.jsx)(c,{text:`Left Alignment`,icon:ge,checked:!0}),(0,Y.jsx)(c,{text:`Center Alignment`,icon:z,checked:!0}),(0,Y.jsx)(c,{text:`Right Alignment`,icon:Ee,checked:!0})]}),(0,Y.jsx)(l,{}),(0,Y.jsxs)(u,{checkMode:`Multiple`,children:[(0,Y.jsx)(c,{text:`Bold`,icon:b,checked:!0,children:(0,Y.jsx)(o,{id:`newLock2`,slot:`endContent`,icon:de,design:`Transparent`})}),(0,Y.jsx)(c,{text:`Italic`,icon:A,additionalText:`Cursive Text`,checked:!0}),(0,Y.jsx)(c,{text:`Underline`,icon:Fe,checked:!0})]}),(0,Y.jsx)(l,{}),(0,Y.jsx)(c,{text:`Exit`})]})]})}},ze=[`Default`,`WithSubMenu`,`WithMenuItemGroup`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={() => {
        setOpen(prev => !prev);
      }}>
          Show Menu
        </Button>
        <Menu {...args} open={open} opener={btnRef.current} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder" />
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'with Submenu',
  render: args => {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={() => {
        setOpen(prev => !prev);
      }}>
          Show Menu
        </Button>
        <Menu {...args} open={open} opener={btnRef.current} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder">
            <MenuItem text="Open Locally" icon="open-folder">
              <MenuItem text="Open C" />
              <MenuItem text="Open D" />
              <MenuItem text="Open E" />
            </MenuItem>
            <MenuItem text="Open from Cloud" icon="cloud" />
          </MenuItem>
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'with MenuItemGroup',
  render(args) {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={() => {
        setOpen(prev => !prev);
      }}>
          Show Menu
        </Button>
        <Menu {...args} open={open} opener={btnRef.current} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <MenuItem text="New Paragraph" icon={addDocumentIcon} />
          <MenuItem text="New Text" />
          <MenuSeparator />
          <MenuItemGroup checkMode="Single">
            <MenuItem text="Left Alignment" icon={textAlignLeftIcon} checked />
            <MenuItem text="Center Alignment" icon={textAlignCenterIcon} checked />
            <MenuItem text="Right Alignment" icon={textAlignRightIcon} checked />
          </MenuItemGroup>
          <MenuSeparator />
          <MenuItemGroup checkMode="Multiple">
            <MenuItem text="Bold" icon={boldTextIcon} checked>
              <Button id="newLock2" slot="endContent" icon={lockedIcon} design="Transparent" />
            </MenuItem>
            <MenuItem text="Italic" icon={italicTextIcon} additionalText="Cursive Text" checked />
            <MenuItem text="Underline" icon={underlineTextIcon} checked />
          </MenuItemGroup>
          <MenuSeparator />
          <MenuItem text="Exit" />
        </Menu>
      </>;
  }
}`,...Q.parameters?.docs?.source}}}})))()}export{u as a,$ as i,Le as n,d as o,Z as r,X as t};