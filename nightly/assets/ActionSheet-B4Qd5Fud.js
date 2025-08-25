import{j as n}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as i}from"./index-EJQOh2Id.js";import{M as p,C as c}from"./blocks-CkgJFs4T.js";import"./Tag-D_p_BT-M.js";import"./index-ChA7roql.js";import{C as a}from"./ControlsWithNote-Bd6pYC1H.js";import{D as m}from"./DocsHeader-C-hjUqfu.js";import{F as h}from"./CommandsAndQueries-BwMOH1SZ.js";import{C as o,D as r}from"./ActionSheet.stories-DF12I9c6.js";import"./preload-helper-Ct5FWWRu.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./index-D9TUnkjB.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./copy-DvB2frbS.js";import"./copy-BQA3UKNo.js";import"./GitHub-Mark-CMsRbTr-.js";import"./TableOfContent-COtDOSzs.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./delete-BHx19-Y9.js";import"./utils-ta-b6IhW.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
