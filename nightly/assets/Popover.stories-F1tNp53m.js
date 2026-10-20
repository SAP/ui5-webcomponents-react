import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{a as r,c as i,d as a,f as o,o as s,s as c}from"./Popover-DnK_fdxQ.js";import{t as l}from"./jsx-runtime-BdxMnOeJ.js";import{n as u,t as d}from"./List-D126OT8Z.js";import{n as f,t as p}from"./ListItemStandard-DPdBdDut.js";import{n as m,t as h}from"./Popover-DMj5YmSD.js";import{n as g,t as _}from"./Button-BWazcef0.js";import{i as v}from"./iframe-mwywmwng.js";import{t as y}from"./settings-DZofAZ-b.js";var b=t({Default:()=>w,__namedExportsOrder:()=>T,default:()=>C}),x,S,C,w,T;function E(){return(E=e((()=>{y(),v(),o(),i(),s(),x=n(),g(),u(),f(),m(),S=l(),C={title:`Modals & Popovers / Popover`,component:h,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,S.jsxs)(d,{children:[(0,S.jsx)(p,{additionalText:`Fruits`,text:`Apples`}),(0,S.jsx)(p,{additionalText:`Fruits`,text:`Bananas`}),(0,S.jsx)(p,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:a.Center,placement:c.End,verticalAlign:r.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},w={render(e){let[t,n]=(0,x.useState)(e.open);return(0,x.useEffect)(()=>{n(e.open)},[e.open]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,S.jsx)(h,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T=[`Default`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button id={'openPopoverBtn'} onClick={() => {
        setOpen(true);
      }}>
          Open Popover
        </Button>
        <Popover {...args} onClose={() => {
        setOpen(false);
      }} opener="openPopoverBtn" open={open} />
      </>;
  }
}`,...w.parameters?.docs?.source}}}})))()}export{b as n,E as r,w as t};