import{j as e,a as c,F as S}from"./jsx-runtime-670450c2.js";import{s as T}from"./settings-f4b98acd.js";import{r as i}from"./index-f1f749bf.js";import{r as x}from"./index-96c5f47c.js";import{D as L}from"./index-490057c1.js";import{S as d}from"./index-2d73f375.js";import{B as l}from"./index-1f14df6f.js";import{B as p}from"./index-7faeb2cd.js";import{B as k}from"./Bar-78c6a88f.js";import{I as b}from"./index-d45e3f7f.js";import{T as y}from"./index-f28a5eb0.js";import{L as E}from"./index-96047368.js";const P={title:"Modals & Popovers / Dialog",component:L,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1}},t=i.forwardRef((o,a)=>x.createPortal(e(L,{...o,ref:a}),document.body));t.displayName="Dialog";const r={render:o=>{const[a,n]=i.useState(o.open);return i.useEffect(()=>{n(o.open)},[o.open]),c(S,{children:[e(l,{onClick:()=>{n(!0)},children:"Open Dialog"}),e(t,{...o,open:a,onAfterClose:m=>{o.onAfterClose(m),n(!1)},footer:e(p,{design:k.Footer,endContent:e(l,{onClick:()=>{n(!1)},children:"Close"})})})]})}},s={render:o=>{const[a,n]=i.useState(!1);return c(S,{children:[e(l,{onClick:()=>{n(!0)},children:"Open Dialog"}),e(t,{...o,open:a,header:e(p,{endContent:e(b,{name:T}),children:e(y,{children:"Dialog"})}),footer:e(p,{endContent:e(l,{onClick:()=>{n(!1)},children:"Close"})}),children:c(E,{children:[e(d,{additionalText:"3",children:"List Item 1"}),e(d,{additionalText:"2",children:"List Item 2"}),e(d,{additionalText:"1",children:"List Item 3"})]})})]})}};var g,f,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"forwardRef<DialogDomRef, DialogPropTypes>((args, ref) => createPortal(<OriginalDialog {...args} ref={ref} />, document.body))",...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var D,C,h;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [dialogOpen, setDialogOpen] = useState(isChromatic || args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setDialogOpen(true);
      }}>
          Open Dialog
        </Button>
        <Dialog {...args} open={dialogOpen} onAfterClose={e => {
        args.onAfterClose(e);
        setDialogOpen(false);
      }} footer={<Bar design={BarDesign.Footer} endContent={<Button onClick={() => {
        setDialogOpen(false);
      }}>
                  Close
                </Button>} />} />
      </>;
  }
}`,...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var I,O,B;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const onButtonClick = () => {
      setDialogIsOpen(true);
    };
    const handleClose = () => {
      setDialogIsOpen(false);
    };
    return <>
        <Button onClick={onButtonClick}>Open Dialog</Button>
        <Dialog {...args} open={dialogIsOpen} header={<Bar endContent={<Icon name={settingsIcon} />}>
              <Title>Dialog</Title>
            </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}>
          <List>
            <StandardListItem additionalText="3">List Item 1</StandardListItem>
            <StandardListItem additionalText="2">List Item 2</StandardListItem>
            <StandardListItem additionalText="1">List Item 3</StandardListItem>
          </List>
        </Dialog>
      </>;
  }
}`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const _=["Dialog","Default","WithContent"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Dialog:t,WithContent:s,__namedExportsOrder:_,default:P},Symbol.toStringTag,{value:"Module"}));export{G as C,t as D,s as W,r as a};
//# sourceMappingURL=Dialog.stories-e2de8cf6.js.map
