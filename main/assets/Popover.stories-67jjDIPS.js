import{j as e}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import"./Boot-CUKJMqeB.js";import"./settings-Cr2X4s41.js";import"./index-Cr2OSbkk.js";import{r as i}from"./index-CP2MHerv.js";import{B as c,a as m}from"./index-Bhrx8Nuo.js";import{a as I,P as B,b as j}from"./Popover-CLYhCt6_.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as L}from"./index-CUD6gg2y.js";import{B as p}from"./index-DagUqEb_.js";import{I as S}from"./index-S83HuHpL.js";import{L as T}from"./index-BmyZG2qo.js";import{L as k}from"./index-DC9ih2rz.js";import{S as a}from"./index-DWaAzLZB.js";import{T as b}from"./index-Bh5knMPM.js";import{P as g}from"./index-gpggeB-W.js";const d=i.forwardRef((o,n)=>L.createPortal(e.jsx(g,{...o,ref:n}),document.body));d.displayName="Popover";const N={title:"Modals & Popovers / Popover",component:g,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(T,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:I.Center,placement:B.End,verticalAlign:j.Center,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},r={render(o){const[n,t]=i.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(d,{...o,onClose:()=>{t(!1)},opener:"openPopoverBtn",open:n})]})}},s={render(o){const[n,t]=i.useState(!1),C=()=>{t(!0)},l=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn2",onClick:C,children:"Open Popover"}),e.jsx(d,{...o,opener:"openPopoverBtn2",open:n,onClose:l,className:O("headerPartNoPadding",o.className),header:e.jsx(c,{endContent:e.jsx(S,{name:"settings"}),design:m.Header,children:e.jsx(b,{children:"Popover"})}),footer:e.jsx(c,{endContent:e.jsx(p,{onClick:l,children:"Close"}),design:m.Footer}),children:e.jsxs(k,{style:{width:"200px"},children:[e.jsx(a,{additionalText:"3",children:"List Item 1"}),e.jsx(a,{additionalText:"2",children:"List Item 2"}),e.jsx(a,{additionalText:"1",children:"List Item 3"})]})})]})}};var P,v,u;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,h,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
            <StandardListItem additionalText="3">List Item 1</StandardListItem>
            <StandardListItem additionalText="2">List Item 2</StandardListItem>
            <StandardListItem additionalText="1">List Item 3</StandardListItem>
          </List>
        </Popover>
      </>;
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const y=["Default","PopoverWithContent"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:r,PopoverWithContent:s,__namedExportsOrder:y,default:N},Symbol.toStringTag,{value:"Module"}));export{K as C,r as D,s as P};
