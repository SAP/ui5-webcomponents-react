import{j as e}from"./useIsomorphicLayoutEffect-BpDYIkAV.js";import"./UI5Element-Cjk_cKug.js";import"./settings-BiP2mv6H.js";import"./index-DRz2hk48.js";import{r as i}from"./index-DEe9W-hO.js";import{B as c}from"./BarDesign-BLoXVb05.js";import{a as I,P as B,b as j}from"./Popover-5eNGP7Bf.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as L}from"./index-D6UH2S5y.js";import{B as m}from"./index-DcgWxDLI.js";import{B as p}from"./index-B4H3qawp.js";import{I as S}from"./index-M6VOGtcx.js";import{L as T}from"./index-BDFEWlxK.js";import{L as k}from"./index-CuMKUSnR.js";import{L as a}from"./index-W5vU2CtH.js";import{T as b}from"./index-Wr8ioHEV.js";import{P as g}from"./index-D3UTY3No.js";const d=i.forwardRef((o,n)=>L.createPortal(e.jsx(g,{...o,ref:n}),document.body));d.displayName="Popover";const N={title:"Modals & Popovers / Popover",component:g,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(T,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:I.Center,placement:B.End,verticalAlign:j.Center,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},r={render(o){const[n,t]=i.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(d,{...o,onClose:()=>{t(!1)},opener:"openPopoverBtn",open:n})]})}},s={render(o){const[n,t]=i.useState(!1),C=()=>{t(!0)},l=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn2",onClick:C,children:"Open Popover"}),e.jsx(d,{...o,opener:"openPopoverBtn2",open:n,onClose:l,className:O("headerPartNoPadding",o.className),header:e.jsx(m,{endContent:e.jsx(S,{name:"settings"}),design:c.Header,children:e.jsx(b,{children:"Popover"})}),footer:e.jsx(m,{endContent:e.jsx(p,{onClick:l,children:"Close"}),design:c.Footer}),children:e.jsxs(k,{style:{width:"200px"},children:[e.jsx(a,{additionalText:"3",children:"List Item 1"}),e.jsx(a,{additionalText:"2",children:"List Item 2"}),e.jsx(a,{additionalText:"1",children:"List Item 3"})]})})]})}};var P,v,u;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(isChromatic || args.open);
    return <>
        <Button id={'openPopoverBtn'} onClick={() => {
        setPopoverIsOpen(true);
      }}>
          Open Popover
        </Button>
        <Popover {...args} onClose={() => {
        setPopoverIsOpen(false);
      }} opener="openPopoverBtn" open={popoverIsOpen} />
      </>;
  }
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const onButtonClick = () => {
      setPopoverIsOpen(true);
    };
    const handleClose = () => {
      setPopoverIsOpen(false);
    };
    return <>
        <Button id="openPopoverBtn2" onClick={onButtonClick}>
          Open Popover
        </Button>
        <Popover {...args} opener="openPopoverBtn2" open={popoverIsOpen} onClose={handleClose} className={clsx('headerPartNoPadding', args.className)} header={<Bar endContent={<Icon name="settings" />} design={BarDesign.Header}>
              <Title>Popover</Title>
            </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} design={BarDesign.Footer} />}>
          <List style={{
          width: '200px'
        }}>
            <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
            <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
            <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
          </List>
        </Popover>
      </>;
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const y=["Default","PopoverWithContent"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,PopoverWithContent:s,__namedExportsOrder:y,default:N},Symbol.toStringTag,{value:"Module"}));export{Q as C,r as D,s as P};
