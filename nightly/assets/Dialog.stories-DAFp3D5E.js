import{x as d,j as e,E as l,r as a,B as r}from"./iframe-DEht8tsT.js";import{L as c}from"./index-DX3S6mf8.js";import{L as s}from"./index-CZT4M-ks.js";import{F as u,d as x}from"./index-DLGND6CU.js";const g={title:"Modals & Popovers / Dialog",component:l,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:e.jsxs(c,{children:[e.jsx(s,{additionalText:"Fruits",text:"Apples"}),e.jsx(s,{additionalText:"Fruits",text:"Bananas"}),e.jsx(s,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"Dialog Header",open:d},tags:["package:@ui5/webcomponents"]},t={render:o=>{const[i,n]=a.useState(o.open);return a.useEffect(()=>{n(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>{n(!0)},children:"Open Dialog"}),e.jsx(l,{...o,open:i,onClose:p=>{o.onClose(p),n(!1)},footer:e.jsx(u,{justifyContent:x.End,fitContainer:!0,style:{paddingBlock:"0.25rem"},children:e.jsx(r,{onClick:()=>{n(!1)},children:"Close"})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setDialogOpen(true);
      }}>
          Open Dialog
        </Button>
        <Dialog {...args} open={dialogOpen} onClose={e => {
        args.onClose(e);
        setDialogOpen(false);
      }} footer={<FlexBox justifyContent={FlexBoxJustifyContent.End} fitContainer style={{
        paddingBlock: '0.25rem'
      }}>
              <Button onClick={() => {
          setDialogOpen(false);
        }}>
                Close
              </Button>
            </FlexBox>} />
      </>;
  }
}`,...t.parameters?.docs?.source}}};const f=["Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{B as C,t as D};
