import{j as e,r as n}from"./iframe-BwRZ6zH2.js";import{A as u}from"./index-daxMvW3Z.js";import{S as m}from"./index-Cy0pP4KJ.js";import{U as c,a as t,b as i}from"./index-DoLfYJCK.js";const g={title:"Modals & Popovers / UserMenu",component:c,argTypes:{children:{control:{disable:!0}},opener:{control:{disable:!0}},accounts:{control:{disable:!0}}},args:{accounts:e.jsxs(e.Fragment,{children:[e.jsx(i,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier",subtitleText:"aliana.chevalier@sap.com",description:"Delivery Manager, SAP SE",selected:!0}),e.jsx(i,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier I",subtitleText:"aliana.chevalier1@sap.com",description:"Delivery Manager, SAP SE"}),e.jsx(i,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier II",subtitleText:"aliana.chevalier2@sap.com",description:"Delivery Manager, SAP SE"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:"action-settings",text:"Setting","data-id":"setting"}),e.jsx(t,{icon:"globe",text:"Product-specific account action","data-id":"account-action1"}),e.jsxs(t,{icon:"official-service",text:"Legal Information",children:[e.jsx(t,{icon:"private",text:"Private Policy","data-id":"privacy-policy"}),e.jsx(t,{icon:"accelerated",text:"Terms of Use","data-id":"terms-of-use"})]})]})},tags:["package:@ui5/webcomponents","experimental"]},a={render(r){const s=n.useRef(null),[l,o]=n.useState(r.open);return n.useEffect(()=>{o(r.open)},[r.open]),e.jsxs(e.Fragment,{children:[e.jsx(m,{primaryTitle:"Corporate Portal",logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(u,{children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",alt:"Avatar of the current user"})}),onProfileClick:p=>{s.current.opener=p.detail.targetRef,s.current.open=!0,o(!0)}}),e.jsx(c,{ref:s,...r,open:l,onClose:()=>{o(!1)}})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
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
}`,...a.parameters?.docs?.source}}};const f=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{b as C,a as D};
