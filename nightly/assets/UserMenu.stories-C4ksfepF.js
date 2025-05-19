import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-U0ga5oGA.js";import{A as f}from"./index-DWxMKmlL.js";import{S as v}from"./index-mE6cHAg1.js";import{b as u,a as t,U as i}from"./index-D4ZVI3cG.js";const d={title:"Modals & Popovers / UserMenu",component:u,argTypes:{children:{control:{disable:!0}},opener:{control:{disable:!0}},accounts:{control:{disable:!0}}},args:{accounts:e.jsxs(e.Fragment,{children:[e.jsx(i,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier",subtitleText:"aliana.chevalier@sap.com",description:"Delivery Manager, SAP SE",selected:!0}),e.jsx(i,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier I",subtitleText:"aliana.chevalier1@sap.com",description:"Delivery Manager, SAP SE"}),e.jsx(i,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier II",subtitleText:"aliana.chevalier2@sap.com",description:"Delivery Manager, SAP SE"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:"action-settings",text:"Setting","data-id":"setting"}),e.jsx(t,{icon:"globe",text:"Product-specific account action","data-id":"account-action1"}),e.jsxs(t,{icon:"official-service",text:"Legal Information",children:[e.jsx(t,{icon:"private",text:"Private Policy","data-id":"privacy-policy"}),e.jsx(t,{icon:"accelerated",text:"Terms of Use","data-id":"terms-of-use"})]})]})}},a={render(r){const s=n.useRef(null),[m,o]=n.useState(r.open);return n.useEffect(()=>{o(r.open)},[r.open]),e.jsxs(e.Fragment,{children:[e.jsx(v,{primaryTitle:"Corporate Portal",logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(f,{children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",alt:"Avatar of the current user"})}),onProfileClick:g=>{s.current.opener=g.detail.targetRef,s.current.open=!0,o(!0)}}),e.jsx(u,{ref:s,...r,open:m,onClose:()=>{o(!1)}})]})}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:x,default:d},Symbol.toStringTag,{value:"Module"}));export{_ as C,a as D};
