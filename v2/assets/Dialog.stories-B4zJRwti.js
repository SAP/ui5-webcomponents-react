import{j as e}from"./jsx-runtime-CLpGMVip.js";import{i as u}from"./utils-CrkjJOCn.js";import"./index-CW3wKhCl.js";import{r as s}from"./index-D23YZj_x.js";import{D as d}from"./index-BmriV4YU.js";import{L as r}from"./index-B6lNmb2R.js";import{L as f}from"./index-BZ7wl_Yg.js";import{B as a}from"./index-DWbw-aO0.js";import{F as g,b as x}from"./index-BMK-kPJD.js";const C={title:"Modals & Popovers / Dialog",component:d,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(f,{children:[e.jsx(r,{additionalText:"Fruits",children:"Apples"}),e.jsx(r,{additionalText:"Fruits",children:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"Dialog Header",open:u},tags:["package:@ui5/webcomponents"]},n={render:o=>{const[c,t]=s.useState(o.open);return s.useEffect(()=>{t(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>{t(!0)},children:"Open Dialog"}),e.jsx(d,{...o,open:c,onClose:m=>{o.onClose(m),t(!1)},footer:e.jsx(g,{justifyContent:x.End,fitContainer:!0,style:{paddingBlock:"0.25rem"},children:e.jsx(a,{onClick:()=>{t(!1)},children:"Close"})})})]})}};var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      }} footer={<FlexBox justifyContent={FlexBoxJustifyContent.End} fitContainer style={{
        paddingBlock: '0.25rem'
      }}>
              <Button onClick={() => {
          setDialogOpen(false);
        }}>
                Close
              </Button>
            </FlexBox>} />
      </>;
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const D=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:D,default:C},Symbol.toStringTag,{value:"Module"}));export{S as C,n as D};
