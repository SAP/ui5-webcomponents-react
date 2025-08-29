import{j as n}from"./iframe-D7jNN5F7.js";import{useMDXComponents as i}from"./index-DKysAdcf.js";import{M as p,C as c}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import{C as a}from"./ControlsWithNote-E5ssFwis.js";import{D as m}from"./DocsHeader-BTZUlQMm.js";import{F as h}from"./CommandsAndQueries-B3x-n25L.js";import{C as o,D as r}from"./ActionSheet.stories-_1vgXrYd.js";import"./preload-helper-Ct5FWWRu.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./index-C3oU0sTK.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./copy-Dndk5unU.js";import"./copy-DjcHAfNd.js";import"./GitHub-Mark-C0A6whC2.js";import"./TableOfContent-DsCXo-br.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./delete-BMcwn6C5.js";import"./utils-BRgWD3XM.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
