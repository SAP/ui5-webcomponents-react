import{K as x,j as e,U as d,r as a,Q as r}from"./iframe-DvixYE7k.js";import{L as g}from"./index-CGO1z9YQ.js";import{L as s}from"./index-Hon5Q8Ho.js";import{F as f,d as m}from"./index-YgXxfA7L.js";const C={title:"Modals & Popovers / Dialog",component:d,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(g,{children:[e.jsx(s,{additionalText:"Fruits",text:"Apples"}),e.jsx(s,{additionalText:"Fruits",text:"Bananas"}),e.jsx(s,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"Dialog Header",open:x},tags:["package:@ui5/webcomponents"]},t={render:o=>{const[c,n]=a.useState(o.open);return a.useEffect(()=>{n(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>{n(!0)},children:"Open Dialog"}),e.jsx(d,{...o,open:c,onClose:u=>{o.onClose(u),n(!1)},footer:e.jsx(f,{justifyContent:m.End,fitContainer:!0,style:{paddingBlock:"0.25rem"},children:e.jsx(r,{onClick:()=>{n(!1)},children:"Close"})})})]})}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const j=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{y as C,t as D};
