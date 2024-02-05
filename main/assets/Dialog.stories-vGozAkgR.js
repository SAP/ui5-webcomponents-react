import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{s as I}from"./settings-YGq2Totv.js";import{c as O}from"./clsx-Zbgk8kpT.js";import{r as d}from"./index-OjgoNOWw.js";import{D as x}from"./CodeGen-TUxjfC4E.js";import{D as B}from"./index-c1t3c8Tt.js";import{B as a}from"./index-Pl8vXVKB.js";import{B as c,a as h}from"./index-kLvKbVYe.js";import{I as j}from"./index-cDjJf6ZE.js";import{T as L}from"./index--gMzGNWG.js";import{L as S}from"./index--CgBLRpZ.js";import{S as l}from"./index-hra61v4X.js";const T={title:"Modals & Popovers / Dialog",component:B,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1,className:"footerPartNoPadding"}},o={render:n=>{const[r,t]=d.useState(n.open);return d.useEffect(()=>{t(n.open)},[n.open]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>{t(!0)},children:"Open Dialog"}),e.jsx(x,{...n,open:r,onAfterClose:i=>{n.onAfterClose(i),t(!1)},footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(a,{onClick:()=>{t(!1)},children:"Close"})})})]})}},s={render:n=>{const[r,t]=d.useState(!1),i=()=>{t(!0)},p=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:i,children:"Open Dialog"}),e.jsx(x,{...n,open:r,onAfterClose:p,className:O("headerPartNoPadding",n.className),header:e.jsx(c,{endContent:e.jsx(j,{name:I}),children:e.jsx(L,{children:"Dialog"})}),footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(a,{onClick:p,children:"Close"})}),children:e.jsxs(S,{children:[e.jsx(l,{additionalText:"3",children:"List Item 1"}),e.jsx(l,{additionalText:"2",children:"List Item 2"}),e.jsx(l,{additionalText:"1",children:"List Item 3"})]})})]})}};var m,g,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,C,D;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <Dialog {...args} open={dialogIsOpen} onAfterClose={handleClose} className={clsx('headerPartNoPadding', args.className)} header={<Bar endContent={<Icon name={settingsIcon} />}>
              <Title>Dialog</Title>
            </Bar>} footer={<Bar design={BarDesign.Footer} endContent={<Button onClick={handleClose}>Close</Button>} />}>
          <List>
            <StandardListItem additionalText="3">List Item 1</StandardListItem>
            <StandardListItem additionalText="2">List Item 2</StandardListItem>
            <StandardListItem additionalText="1">List Item 3</StandardListItem>
          </List>
        </Dialog>
      </>;
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const k=["Default","WithContent"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithContent:s,__namedExportsOrder:k,default:T},Symbol.toStringTag,{value:"Module"}));export{H as C,o as D,s as W};
