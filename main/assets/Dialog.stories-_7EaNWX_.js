import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{s as I}from"./settings-wMtQT9om.js";import{c as B}from"./clsx-c3LcQGjR.js";import{r as d}from"./index-OjgoNOWw.js";import{D as x}from"./CodeGen-AtDF-Wqn.js";import{D as O}from"./index-bBSSOwYK.js";import{B as a}from"./index-R6HiNhiD.js";import{B as c}from"./index-grQNtf0b.js";import{B as h}from"./Bar-jrFjVZZ8.js";import{I as j}from"./index-z2fin4RT.js";import{T as L}from"./index-K8_8ua4m.js";import{L as S}from"./index--m_O8UTI.js";import{S as l}from"./index-04ocDnYv.js";const T={title:"Modals & Popovers / Dialog",component:O,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1,className:"footerPartNoPadding"}},n={render:t=>{const[r,o]=d.useState(t.open);return d.useEffect(()=>{o(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>{o(!0)},children:"Open Dialog"}),e.jsx(x,{...t,open:r,onAfterClose:i=>{t.onAfterClose(i),o(!1)},footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(a,{onClick:()=>{o(!1)},children:"Close"})})})]})}},s={render:t=>{const[r,o]=d.useState(!1),i=()=>{o(!0)},m=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:i,children:"Open Dialog"}),e.jsx(x,{...t,open:r,onAfterClose:m,className:B("headerPartNoPadding",t.className),header:e.jsx(c,{endContent:e.jsx(j,{name:I}),children:e.jsx(L,{children:"Dialog"})}),footer:e.jsx(c,{design:h.Footer,endContent:e.jsx(a,{onClick:m,children:"Close"})}),children:e.jsxs(S,{children:[e.jsx(l,{additionalText:"3",children:"List Item 1"}),e.jsx(l,{additionalText:"2",children:"List Item 2"}),e.jsx(l,{additionalText:"1",children:"List Item 3"})]})})]})}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,C,D;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const k=["Default","WithContent"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithContent:s,__namedExportsOrder:k,default:T},Symbol.toStringTag,{value:"Module"}));export{R as C,n as D,s as W};
