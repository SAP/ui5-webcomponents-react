import{j as n}from"./iframe-BwRZ6zH2.js";import{useMDXComponents as i}from"./index-Dha5O7fd.js";import{M as p,C as c}from"./blocks-DL1YgvN4.js";import"./Tag-jzGA4JLS.js";import"./index-Bn-_GOqM.js";import{C as a}from"./ControlsWithNote-DF46a5u6.js";import{D as m}from"./DocsHeader-CihWsTE1.js";import{F as h}from"./CommandsAndQueries-DnahCchN.js";import{C as o,D as r}from"./ActionSheet.stories-DeY9U7t9.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C-c_P7SM.js";import"./sys-enter-2-Csc9mkjG.js";import"./alert-OSu7g90-.js";import"./index-DNHSASGJ.js";import"./index-B9mzJ7n3.js";import"./Link-CWmfxulK.js";import"./copy-DDuPrkFa.js";import"./copy-14fAizTo.js";import"./GitHub-Mark-Dur4y_WQ.js";import"./TableOfContent-C1cLg550.js";import"./index-DC4jF85u.js";import"./index-BMXWdCHK.js";import"./addCustomCSSWithScoping-C9ks6bKt.js";import"./index-CODnJVEI.js";import"./index-Dvv0G0ud.js";import"./index-daxMvW3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHObXTEz.js";import"./delete-DnMkTbHU.js";import"./utils-B5889Cdc.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
