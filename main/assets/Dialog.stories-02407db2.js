import{a as l,F as I,j as e}from"./jsx-runtime-670450c2.js";import{s as B}from"./settings-259db384.js";import{r as d}from"./index-f1f749bf.js";import{D as p}from"./index-26f1131d.js";import{B as r}from"./index-b7f80a1d.js";import{B as c}from"./index-64b8a720.js";import{B as O}from"./Bar-b4a14d85.js";import{I as L}from"./index-4e221527.js";import{T as S}from"./index-349afbe4.js";import{L as T}from"./index-bd274735.js";import{S as i}from"./index-7c687405.js";const k={title:"Modals & Popovers / Dialog",component:p,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1}},o={render:n=>{const[s,t]=d.useState(n.open);return d.useEffect(()=>{t(n.open)},[n.open]),l(I,{children:[e(r,{onClick:()=>{t(!0)},children:"Open Dialog"}),e(p,{...n,open:s,onAfterClose:m=>{n.onAfterClose(m),t(!1)},footer:e(c,{design:O.Footer,endContent:e(r,{onClick:()=>{t(!1)},children:"Close"})})})]})}},a={render:n=>{const[s,t]=d.useState(!1);return l(I,{children:[e(r,{onClick:()=>{t(!0)},children:"Open Dialog"}),e(p,{...n,open:s,header:e(c,{endContent:e(L,{name:B}),children:e(S,{children:"Dialog"})}),footer:e(c,{endContent:e(r,{onClick:()=>{t(!1)},children:"Close"})}),children:l(T,{children:[e(i,{additionalText:"3",children:"List Item 1"}),e(i,{additionalText:"2",children:"List Item 2"}),e(i,{additionalText:"1",children:"List Item 3"})]})})]})}};var g,u,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var C,D,h;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(h=(D=a.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const x=["Default","WithContent"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithContent:a,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{H as C,o as D,a as W};
//# sourceMappingURL=Dialog.stories-02407db2.js.map
