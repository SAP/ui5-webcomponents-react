import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./List-Ym-NJx6D.js";import{n as o,t as s}from"./ListItemStandard-DPdBdDut.js";import{n as c,t as l}from"./Button-D_hqz9Ny.js";import{n as u,t as d}from"./Bar-7Kmp7YKL.js";import{n as f,t as p}from"./Dialog-CfJVgSwD.js";import{i as m}from"./iframe-qVxXdBEj.js";var h=t({Default:()=>y,__namedExportsOrder:()=>b,default:()=>v}),g,_,v,y,b;function x(){return(x=e((()=>{m(),g=n(),u(),c(),i(),o(),f(),_=r(),v={title:`Modals & Popovers / Dialog`,component:p,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:(0,_.jsxs)(a,{children:[(0,_.jsx)(s,{additionalText:`Fruits`,text:`Apples`}),(0,_.jsx)(s,{additionalText:`Fruits`,text:`Bananas`}),(0,_.jsx)(s,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Dialog Header`,open:!1},tags:[`package:@ui5/webcomponents`]},y={render:e=>{let[t,n]=(0,g.useState)(e.open);return(0,g.useEffect)(()=>{n(e.open)},[e.open]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>{n(!0)},children:`Open Dialog`}),(0,_.jsx)(p,{...e,"data-sap-ui-fastnavgroup":`true`,className:`contentPartNoPadding footerPartNoPadding`,open:t,onClose:t=>{e.onClose(t),n(!1)},footer:(0,_.jsx)(d,{design:`Footer`,endContent:(0,_.jsx)(l,{"data-sap-ui-fastnavgroup":`true`,onClick:()=>{n(!1)},children:`Close`})})})]})}},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        <Dialog {...args} data-sap-ui-fastnavgroup="true" className="contentPartNoPadding footerPartNoPadding" open={dialogOpen} onClose={e => {
        args.onClose(e);
        setDialogOpen(false);
      }} footer={<Bar design="Footer" endContent={<Button data-sap-ui-fastnavgroup="true" onClick={() => {
        setDialogOpen(false);
      }}>
                  Close
                </Button>} />} />
      </>;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{h as n,x as r,y as t};