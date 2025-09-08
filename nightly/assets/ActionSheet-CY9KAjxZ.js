import{j as n}from"./iframe-Cmm295l6.js";import{useMDXComponents as i}from"./index-BXOSXmsP.js";import{M as p,C as c}from"./blocks-BannUWtC.js";import"./Tag-Dz2xCnCd.js";import"./index-DNlfqL0I.js";import{C as a}from"./ControlsWithNote-C4kUrEMi.js";import{D as m}from"./DocsHeader-BKf89pXh.js";import{F as h}from"./CommandsAndQueries-BP_0RozZ.js";import{C as o,D as r}from"./ActionSheet.stories-KI8-7c_N.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CcrqmRhS.js";import"./sys-enter-2-hqDN1aaD.js";import"./alert-CIjWWYk9.js";import"./index-B2P7pH2V.js";import"./index-CFxjX_iC.js";import"./Link-Dxfcpnmp.js";import"./copy-BBJs4OL6.js";import"./copy-D4RoINZh.js";import"./GitHub-Mark-D0DbYkmr.js";import"./TableOfContent-DN8nHa4m.js";import"./index-DjP2_XyX.js";import"./index-Ca8aNZdv.js";import"./addCustomCSSWithScoping-CT21Dj5u.js";import"./index-BCkLQQTq.js";import"./index-DcC0F_LL.js";import"./index-Bv1uLuLp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bxty8qUP.js";import"./delete-BpJ7jMu4.js";import"./utils-CxbvwC5_.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,subComponents:["Button"]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"ActionSheet"})," component in a declarative way using the ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"opener"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Opening an ",n.jsx(e.code,{children:"ActionSheet"})," by reference"]})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",n.jsx(e.code,{children:"id"})," to the ",n.jsx(e.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,n.jsx(h,{})]})}function P(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{P as default};
