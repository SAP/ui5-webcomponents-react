import{j as e}from"./useIsomorphicLayoutEffect-CikWMOA2.js";import"./index-DE8IS_N-.js";import{r}from"./index-BP8_t0zE.js";import{s as O}from"./settings-BbFsYJ4m.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as B}from"./index-BxmsGmlx.js";import{D as h}from"./index-DMsOG6IF.js";import{B as i}from"./index-Tv5zRnb9.js";import{B as c,a as I}from"./index-CD9niaYK.js";import{I as L}from"./index-C5lRZbPp.js";import{T as S}from"./index-CYea1Wgj.js";import{L as T}from"./index-BHPMGEgt.js";import{S as d}from"./index-Bs46B47E.js";const p=r.forwardRef((t,o)=>B.createPortal(e.jsx(h,{...t,ref:o}),document.body));p.displayName="Dialog";const k={title:"Modals & Popovers / Dialog",component:h,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:'Press "Escape" to close the Dialog.',headerText:"Dialog Header",open:!1,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},s={render:t=>{const[o,n]=r.useState(t.open);return r.useEffect(()=>{n(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>{n(!0)},children:"Open Dialog"}),e.jsx(p,{...t,open:o,onAfterClose:l=>{t.onAfterClose(l),n(!1)},footer:e.jsx(c,{design:I.Footer,endContent:e.jsx(i,{onClick:()=>{n(!1)},children:"Close"})})})]})}},a={render:t=>{const[o,n]=r.useState(!1),l=()=>{n(!0)},m=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:l,children:"Open Dialog"}),e.jsx(p,{...t,open:o,onAfterClose:m,className:j("headerPartNoPadding",t.className),header:e.jsx(c,{endContent:e.jsx(L,{name:O}),children:e.jsx(S,{children:"Dialog"})}),footer:e.jsx(c,{design:I.Footer,endContent:e.jsx(i,{onClick:m,children:"Close"})}),children:e.jsxs(T,{children:[e.jsx(d,{additionalText:"3",children:"List Item 1"}),e.jsx(d,{additionalText:"2",children:"List Item 2"}),e.jsx(d,{additionalText:"1",children:"List Item 3"})]})})]})}};var g,f,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(f=s.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var C,x,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const P=["Default","WithContent"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithContent:a,__namedExportsOrder:P,default:k},Symbol.toStringTag,{value:"Module"}));export{H as C,s as D,a as W};
