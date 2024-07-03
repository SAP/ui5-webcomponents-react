import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import"./index-CkMGW5dy.js";import{r}from"./index-DEe9W-hO.js";import{B as c,a as h}from"./index-BQPhFIEo.js";import{s as O}from"./settings-V3I3M4bC.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as B}from"./index-D6UH2S5y.js";import{D as I}from"./index-Bt6M0qXN.js";import{B as i}from"./index-UwpWNXQ1.js";import{I as L}from"./index-_zz_z5qx.js";import{T as S}from"./index-DdnIjCB7.js";import{L as T}from"./index-BgS0UjNC.js";import{L as d}from"./index-BlARpbNd.js";const p=r.forwardRef((n,t)=>B.createPortal(e.jsx(I,{...n,ref:t}),document.body));p.displayName="Dialog";const k={title:"Modals & Popovers / Dialog",component:I,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},s={render:n=>{const[t,o]=r.useState(n.open);return r.useEffect(()=>{o(n.open)},[n.open]),e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>{o(!0)},children:"Open Dialog"}),e.jsx(p,{...n,open:t,onClose:l=>{n.onClose(l),o(!1)},footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(i,{onClick:()=>{o(!1)},children:"Close"})})})]})}},a={render:n=>{const[t,o]=r.useState(!1),l=()=>{o(!0)},m=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:l,children:"Open Dialog"}),e.jsx(p,{...n,open:t,onClose:m,className:j("headerPartNoPadding",n.className),header:e.jsx(c,{endContent:e.jsx(L,{name:O}),children:e.jsx(S,{children:"Dialog"})}),footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(i,{onClick:m,children:"Close"})}),children:e.jsxs(T,{children:[e.jsx(d,{additionalText:"3",children:"List Item 1"}),e.jsx(d,{additionalText:"2",children:"List Item 2"}),e.jsx(d,{additionalText:"1",children:"List Item 3"})]})})]})}};var g,u,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const P=["Default","WithContent"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithContent:a,__namedExportsOrder:P,default:k},Symbol.toStringTag,{value:"Module"}));export{$ as C,s as D,a as W};
