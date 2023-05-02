import{j as e}from"./jsx-runtime-5926aa06.js";import{s as B}from"./settings-456fc51a.js";import{r as i}from"./index-ebeaab24.js";import{r as S}from"./index-9c09ad76.js";import{D as O}from"./index-8daa2ece.js";import{S as c}from"./index-f399c8c8.js";import{B as l}from"./index-93c77264.js";import{B as p}from"./index-96dcedff.js";import{B as L}from"./Bar-6f655916.js";import{I as T}from"./index-6678a069.js";import{T as k}from"./index-c87d3ffe.js";import{L as b}from"./index-320cdd9b.js";const y={title:"Modals & Popovers / Dialog",component:O,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1}},o=i.forwardRef((t,r)=>S.createPortal(e.jsx(O,{...t,ref:r}),document.body));o.displayName="Dialog";const s={render:t=>{const[r,n]=i.useState(t.open);return i.useEffect(()=>{n(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>{n(!0)},children:"Open Dialog"}),e.jsx(o,{...t,open:r,onAfterClose:d=>{t.onAfterClose(d),n(!1)},footer:e.jsx(p,{design:L.Footer,endContent:e.jsx(l,{onClick:()=>{n(!1)},children:"Close"})})})]})}},a={render:t=>{const[r,n]=i.useState(!1),d=()=>{n(!0)},j=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:d,children:"Open Dialog"}),e.jsx(o,{...t,open:r,header:e.jsx(p,{endContent:e.jsx(T,{name:B}),children:e.jsx(k,{children:"Dialog"})}),footer:e.jsx(p,{endContent:e.jsx(l,{onClick:j,children:"Close"})}),children:e.jsxs(b,{children:[e.jsx(c,{additionalText:"3",children:"List Item 1"}),e.jsx(c,{additionalText:"2",children:"List Item 2"}),e.jsx(c,{additionalText:"1",children:"List Item 3"})]})})]})}};var m,g,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"forwardRef<DialogDomRef, DialogPropTypes>((args, ref) => createPortal(<OriginalDialog {...args} ref={ref} />, document.body))",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,D,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var x,h,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const E=["Dialog","Default","WithContent"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Dialog:o,WithContent:a,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{$ as C,o as D,a as W,s as a};
//# sourceMappingURL=Dialog.stories-22291021.js.map
