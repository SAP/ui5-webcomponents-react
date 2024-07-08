import{j as e}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import"./index-BnKJrDrT.js";import{r}from"./index-BQ1WsyJB.js";import{B as h}from"./BarDesign-BLoXVb05.js";import{s as B}from"./settings-DDeWftms.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as j}from"./index-BLtMylri.js";import{D as I}from"./index-BTuMV0Dr.js";import{B as i}from"./index-Cwb37R1p.js";import{B as c}from"./index-CMSevwgK.js";import{I as L}from"./index-7niR0t1J.js";import{T as S}from"./index-CK2u7mIU.js";import{L as T}from"./index-D101iWSA.js";import{L as d}from"./index-CsFTDL3P.js";const m=r.forwardRef((n,t)=>j.createPortal(e.jsx(I,{...n,ref:t}),document.body));m.displayName="Dialog";const k={title:"Modals & Popovers / Dialog",component:I,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},s={render:n=>{const[t,o]=r.useState(n.open);return r.useEffect(()=>{o(n.open)},[n.open]),e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>{o(!0)},children:"Open Dialog"}),e.jsx(m,{...n,open:t,onClose:l=>{n.onClose(l),o(!1)},footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(i,{onClick:()=>{o(!1)},children:"Close"})})})]})}},a={render:n=>{const[t,o]=r.useState(!1),l=()=>{o(!0)},p=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:l,children:"Open Dialog"}),e.jsx(m,{...n,open:t,onClose:p,className:O("headerPartNoPadding",n.className),header:e.jsx(c,{endContent:e.jsx(L,{name:B}),children:e.jsx(S,{children:"Dialog"})}),footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(i,{onClick:p,children:"Close"})}),children:e.jsxs(T,{children:[e.jsx(d,{additionalText:"3",children:"List Item 1"}),e.jsx(d,{additionalText:"2",children:"List Item 2"}),e.jsx(d,{additionalText:"1",children:"List Item 3"})]})})]})}};var g,u,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        <Dialog {...args} open={dialogOpen} onClose={e => {
        args.onClose(e);
        setDialogOpen(false);
      }} footer={<Bar design={BarDesign.Footer} endContent={<Button onClick={() => {
        setDialogOpen(false);
      }}>
                  Close
                </Button>} />} />
      </>;
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var C,x,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <Dialog {...args} open={dialogIsOpen} onClose={handleClose} className={clsx('headerPartNoPadding', args.className)} header={<Bar endContent={<Icon name={settingsIcon} />}>
              <Title>Dialog</Title>
            </Bar>} footer={<Bar design={BarDesign.Footer} endContent={<Button onClick={handleClose}>Close</Button>} />}>
          <List>
            <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
            <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
            <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
          </List>
        </Dialog>
      </>;
  }
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const P=["Default","WithContent"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithContent:a,__namedExportsOrder:P,default:k},Symbol.toStringTag,{value:"Module"}));export{q as C,s as D,a as W};
