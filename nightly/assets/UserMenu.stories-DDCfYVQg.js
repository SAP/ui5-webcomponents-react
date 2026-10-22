import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./Avatar-Zy59qxhN.js";import{n as o,t as s}from"./ShellBar-BdLXsUu0.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./UserMenuItem-cQRCMG0L.js";var m=t({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y;function b(){return(b=e((()=>{h=n(),i(),o(),l(),u(),d(),g=r(),_={title:`Modals & Popovers / UserMenu`,component:c,argTypes:{children:{control:{disable:!0}},opener:{control:{disable:!0}},accounts:{control:{disable:!0}}},args:{accounts:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier`,subtitleText:`aliana.chevalier@sap.com`,description:`Delivery Manager, SAP SE`,selected:!0}),(0,g.jsx)(f,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier I`,subtitleText:`aliana.chevalier1@sap.com`,description:`Delivery Manager, SAP SE`}),(0,g.jsx)(f,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier II`,subtitleText:`aliana.chevalier2@sap.com`,description:`Delivery Manager, SAP SE`})]}),children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{icon:`action-settings`,text:`Setting`,"data-id":`setting`}),(0,g.jsx)(p,{icon:`globe`,text:`Product-specific account action`,"data-id":`account-action1`}),(0,g.jsxs)(p,{icon:`official-service`,text:`Legal Information`,children:[(0,g.jsx)(p,{icon:`private`,text:`Private Policy`,"data-id":`privacy-policy`}),(0,g.jsx)(p,{icon:`accelerated`,text:`Terms of Use`,"data-id":`terms-of-use`})]})]})},tags:[`package:@ui5/webcomponents`]},v={render(e){let t=(0,h.useRef)(null),[n,r]=(0,h.useState)(e.open);return(0,h.useEffect)(()=>{r(e.open)},[e.open]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{primaryTitle:`Corporate Portal`,logo:(0,g.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,g.jsx)(a,{children:(0,g.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,alt:`Avatar of the current user`})}),onProfileClick:e=>{t.current.opener=e.detail.targetRef,t.current.open=!0,r(!0)}}),(0,g.jsx)(c,{ref:t,...e,open:n,onClose:()=>{r(!1)}})]})}},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
            </Avatar>} onProfileClick={event => {
        userMenuRef.current.opener = event.detail.targetRef;
        userMenuRef.current.open = true;
        setOpen(true);
      }} />
        <UserMenu ref={userMenuRef} {...args} open={open} onClose={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...v.parameters?.docs?.source}}}})))()}export{m as n,b as r,v as t};