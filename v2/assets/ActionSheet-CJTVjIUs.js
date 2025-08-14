import{j as n}from"./iframe-DB1hZqAv.js";import{useMDXComponents as i}from"./index-C7G5dSmF.js";import{M as p,C as c}from"./blocks-cg9LC1rI.js";import"./Tag-BS7zj2yL.js";import"./index-C5JoWyXC.js";import{C as a}from"./ControlsWithNote-DTDQ7q4Z.js";import{D as m}from"./DocsHeader-v3YnXMof.js";import{F as h}from"./CommandsAndQueries-Btb1kQnC.js";import{C as o,D as r}from"./ActionSheet.stories-BP5c3pHi.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CQEWuKvd.js";import"./sys-enter-2-CKXMqpTE.js";import"./alert-ttvcaVxO.js";import"./index-Dq64mUvA.js";import"./index-AyDKBAO2.js";import"./Link-CMn1MwX0.js";import"./copy-Dg388KOc.js";import"./copy-C9f0Ezzi.js";import"./GitHub-Mark-B2Zaay_L.js";import"./TableOfContent-Bm8mkmjR.js";import"./index-BbxSTqwp.js";import"./index-DfpSA-Ue.js";import"./addCustomCSSWithScoping-aeW1jsnX.js";import"./index-C0ik2STR.js";import"./index-CDotLVrR.js";import"./index-BvRvvaxi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMluZ7rf.js";import"./delete-iBmDTKmT.js";import"./utils-C7ou7Pk8.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
