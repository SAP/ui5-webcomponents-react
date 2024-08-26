import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{i as g}from"./utils-DaZ1DVkg.js";import{B as u}from"./BarDesign-BLoXVb05.js";import{r as s}from"./index-RYns6xqu.js";import{D as d}from"./index-Brt65Qac.js";import{L as r}from"./index-CN5iwzCY.js";import{L as f}from"./index-BQWw2vFX.js";import{B as a}from"./index-Byuai5Dz.js";import{B as x}from"./index-Dirn8lJh.js";const D={title:"Modals & Popovers / Dialog",component:d,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(f,{children:[e.jsx(r,{additionalText:"Fruits",children:"Apples"}),e.jsx(r,{additionalText:"Fruits",children:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"Dialog Header",open:g,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},n={render:o=>{const[c,t]=s.useState(o.open);return s.useEffect(()=>{t(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>{t(!0)},children:"Open Dialog"}),e.jsx(d,{...o,open:c,onClose:m=>{o.onClose(m),t(!1)},footer:e.jsx(x,{design:u.Footer,endContent:e.jsx(a,{onClick:()=>{t(!1)},children:"Close"})})})]})}};var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const C=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:C,default:D},Symbol.toStringTag,{value:"Module"}));export{E as C,n as D};
