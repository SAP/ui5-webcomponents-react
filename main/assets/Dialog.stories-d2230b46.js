import{j as e}from"./jsx-runtime-5926aa06.js";import{s as h}from"./settings-3b96dde8.js";import{r as d}from"./index-ebeaab24.js";import{D}from"./CodeGen-521edc61.js";import{D as I}from"./index-df57c120.js";import{B as r}from"./index-d49f54f4.js";import{B as c}from"./index-33a384ed.js";import{B as O}from"./Bar-162d0990.js";import{I as B}from"./index-a89243d7.js";import{T as j}from"./index-55268306.js";import{L}from"./index-d49b51bf.js";import{S as l}from"./index-022cacf3.js";const S={title:"Modals & Popovers / Dialog",component:I,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1}},o={render:n=>{const[a,t]=d.useState(n.open);return d.useEffect(()=>{t(n.open)},[n.open]),e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>{t(!0)},children:"Open Dialog"}),e.jsx(D,{...n,open:a,onAfterClose:i=>{n.onAfterClose(i),t(!1)},footer:e.jsx(c,{design:O.Footer,endContent:e.jsx(r,{onClick:()=>{t(!1)},children:"Close"})})})]})}},s={render:n=>{const[a,t]=d.useState(!1),i=()=>{t(!0)},x=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:i,children:"Open Dialog"}),e.jsx(D,{...n,open:a,header:e.jsx(c,{endContent:e.jsx(B,{name:h}),children:e.jsx(j,{children:"Dialog"})}),footer:e.jsx(c,{endContent:e.jsx(r,{onClick:x,children:"Close"})}),children:e.jsxs(L,{children:[e.jsx(l,{additionalText:"3",children:"List Item 1"}),e.jsx(l,{additionalText:"2",children:"List Item 2"}),e.jsx(l,{additionalText:"1",children:"List Item 3"})]})})]})}};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,f,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const T=["Default","WithContent"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithContent:s,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{H as C,o as D,s as W};
//# sourceMappingURL=Dialog.stories-d2230b46.js.map
