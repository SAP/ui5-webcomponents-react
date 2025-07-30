import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as u}from"./utils-CccaSTPN.js";import"./index-7sfyssWA.js";import{r}from"./index-CEr2UAyE.js";import{D as d}from"./index-BJ8iR2dq.js";import{L as x}from"./index-BGNjzVxN.js";import{L as s}from"./index-BCEHL3Wg.js";import{B as a}from"./index-BTImLLsO.js";import{F as f,d as g}from"./index-C5VKFbIU.js";const C={title:"Modals & Popovers / Dialog",component:d,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(x,{children:[e.jsx(s,{additionalText:"Fruits",text:"Apples"}),e.jsx(s,{additionalText:"Fruits",text:"Bananas"}),e.jsx(s,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"Dialog Header",open:u},tags:["package:@ui5/webcomponents"]},t={render:o=>{const[c,n]=r.useState(o.open);return r.useEffect(()=>{n(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>{n(!0)},children:"Open Dialog"}),e.jsx(d,{...o,open:c,onClose:m=>{o.onClose(m),n(!1)},footer:e.jsx(f,{justifyContent:g.End,fitContainer:!0,style:{paddingBlock:"0.25rem"},children:e.jsx(a,{onClick:()=>{n(!1)},children:"Close"})})})]})}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const D=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:D,default:C},Symbol.toStringTag,{value:"Module"}));export{S as C,t as D};
