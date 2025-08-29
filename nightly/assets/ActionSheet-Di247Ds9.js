import{j as n}from"./iframe-B3OL0dJj.js";import{useMDXComponents as i}from"./index-BacKYjfx.js";import{M as p,C as c}from"./blocks-DWSkzL_O.js";import"./Tag-Cz9uoO3f.js";import"./index-ICQad1Jx.js";import{C as a}from"./ControlsWithNote-NJa_WyLA.js";import{D as m}from"./DocsHeader-B8uuK2Lh.js";import{F as h}from"./CommandsAndQueries-CF0BaiA4.js";import{C as o,D as r}from"./ActionSheet.stories-BELOuYgs.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CsT7qq8I.js";import"./sys-enter-2-C6eVrxWF.js";import"./alert-D4Iro2pT.js";import"./index-DpJD6crE.js";import"./index-BM-Dt4Ms.js";import"./Link-B3I1DK3y.js";import"./copy-C3Umbx15.js";import"./copy-BIhehpav.js";import"./GitHub-Mark-dwT1QLL6.js";import"./TableOfContent-CGezDL28.js";import"./index-D7xFIu9y.js";import"./index-bmuDs-E9.js";import"./addCustomCSSWithScoping-QT3VtH-b.js";import"./index-Cl7-VWhy.js";import"./index-BB1lQngG.js";import"./index-BvBfHyAK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdVXj32r.js";import"./delete-D20JBxPW.js";import"./utils-DtD9zSg1.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
