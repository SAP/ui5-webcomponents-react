import{j as e,e as s}from"./iframe-nPyk7Pli.js";import{useMDXComponents as f}from"./index-CtkrgsHZ.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-kpZj3_CU.js";import"./Tag-DE1zjgne.js";import"./index-Db4ElCLi.js";import{C as u}from"./ControlsWithNote-Bxn-4kSn.js";import{D as S}from"./DocsHeader-Ct2B1yC6.js";import{F as v}from"./CommandsAndQueries-BH3LWIrk.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,a as p,b as m}from"./sys-help-B2E83bL9.js";import{C as c,D as d,A as g,E as b,T as P,P as C,N as y,S as M,a as h}from"./ShellBar.stories-BLumd8yT.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BO_mntst.js";import"./sys-enter-2-DaFu4CEs.js";import"./alert-UB53-VFT.js";import"./index-Bf4gw30l.js";import"./index-DuhaT3ww.js";import"./Link-DLcMVbxe.js";import"./copy-BLj-zT6B.js";import"./copy-YekArnCd.js";import"./GitHub-Mark-DYogR2nu.js";import"./TableOfContent-txTLOiW_.js";import"./index-B-9nmnKT.js";import"./index-4UD2mlLT.js";import"./addCustomCSSWithScoping-98xqr_q6.js";import"./index-BsO78O3m.js";import"./index-QcasdNWm.js";import"./index-CrWnOU7h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cqyy-sBZ.js";import"./Search-BypFSbg_.js";import"./Option-glJsPgx-.js";import"./ListItemBaseTemplate-BHadPsZP.js";import"./Select-RQ6rgJWT.js";import"./InvisibleMessage-CP2XxzVV.js";import"./slim-arrow-down-B-fe4k97.js";import"./slim-arrow-down-BcON-Wjl.js";import"./ResponsivePopoverCommon.css-DCRzDw4o.js";import"./ValueStateMessage.css-5GikroWi.js";import"./search-JQBBpRPI.js";import"./Input-BE7iMtB8.js";import"./Suggestions.css-BKHPD-ad.js";import"./SuggestionItem-ChjoWPxK.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./i18n-defaults-dyGKyNAh.js";import"./Person-Bk5r7PMP.js";import"./index-BoHM7Zei.js";import"./less-BKkuF0QA.js";import"./index-B-lxCMS9.js";import"./ListItemStandard-DlWJ6O71.js";import"./ButtonBadge-35pUlu87.js";import"./overflow-D7CwW67S.js";import"./overflow-CSdAkF0H.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:c}),`
`,e.jsx(S,{of:c,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:d}),`
`,e.jsx(a,{children:k}),`
`,e.jsx(n.h3,{id:"all-features",children:"All Features"}),`
`,e.jsx(n.p,{children:"A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"embedded-back-navigation",children:"Embedded Back Navigation"}),`
`,e.jsx(n.p,{children:"ShellBar with embedded back navigation button in the start area."}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"trial-example",children:"Trial Example"}),`
`,e.jsx(n.p,{children:"ShellBar configured for trial environments with trial tags and remaining days indicator."}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"multiple-productive-instances",children:"Multiple Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple productive system instances with region indicators."}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"multiple-non-productive-instances",children:"Multiple Non-Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple non-productive system instances with system and region tags."}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"open-a-popover-on-shellbaritem-click",children:"Open a Popover on ShellBarItem click"}),`
`,e.jsxs(n.p,{children:["To open a popover with the ",e.jsx(n.code,{children:"ShellBarItem"})," you can use the ",e.jsx(n.code,{children:"detail.targetRef"})," property of the ",e.jsx(n.code,{children:"onClick"})," event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ShellBarComponent = () => {
  const popoverRef = useRef<PopoverDomRef>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleShellBarItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current!.opener = e.detail.targetRef;
    setPopoverOpen(true);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover
        ref={popoverRef}
        open={popoverOpen}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Hello there!
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"shellbar-with-shellbarbranding-slot",children:"ShellBar with ShellBarBranding slot"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(a,{children:B}),`
`,e.jsx(n.h2,{id:"shellbaritem",children:"ShellBarItem"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:l}),`
`,e.jsx(n.h2,{id:"shellbarspacer",children:"ShellBarSpacer"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:p}),`
`,e.jsx(n.h2,{id:"shellbarsearch-experimental",children:"ShellBarSearch (experimental)"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:m}),`
`,e.jsx(n.h2,{id:"shellbarbranding-experimental",children:"ShellBarBranding (experimental)"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:h}),`
`,e.jsx(v,{})]})}function ke(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{ke as default};
