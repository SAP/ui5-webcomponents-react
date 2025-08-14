import{j as e,e as s}from"./iframe-DB1hZqAv.js";import{useMDXComponents as f}from"./index-C7G5dSmF.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-cg9LC1rI.js";import"./Tag-BS7zj2yL.js";import"./index-C5JoWyXC.js";import{C as u}from"./ControlsWithNote-DTDQ7q4Z.js";import{D as S}from"./DocsHeader-v3YnXMof.js";import{F as v}from"./CommandsAndQueries-Btb1kQnC.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,a as p,b as m}from"./sys-help-3rr2jst8.js";import{C as c,D as d,A as g,E as b,T as P,P as C,N as y,S as M,a as h}from"./ShellBar.stories-JMy5EJT8.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CQEWuKvd.js";import"./sys-enter-2-CKXMqpTE.js";import"./alert-ttvcaVxO.js";import"./index-Dq64mUvA.js";import"./index-AyDKBAO2.js";import"./Link-CMn1MwX0.js";import"./copy-Dg388KOc.js";import"./copy-C9f0Ezzi.js";import"./GitHub-Mark-B2Zaay_L.js";import"./TableOfContent-Bm8mkmjR.js";import"./index-BbxSTqwp.js";import"./index-DfpSA-Ue.js";import"./addCustomCSSWithScoping-aeW1jsnX.js";import"./index-C0ik2STR.js";import"./index-CDotLVrR.js";import"./index-BvRvvaxi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMluZ7rf.js";import"./Search-CiPcdjV_.js";import"./Option-B4gtaKyw.js";import"./ListItemBaseTemplate-CCky6bk9.js";import"./Select-C5E5Vmyc.js";import"./InvisibleMessage-DXb0t9Au.js";import"./slim-arrow-down-C4Fh43q_.js";import"./slim-arrow-down-B9C8_DlV.js";import"./ResponsivePopoverCommon.css-DTbOAvZ8.js";import"./ValueStateMessage.css-DyRqN3Zi.js";import"./search-Z1XLpvnK.js";import"./Input-Co1Ncam9.js";import"./Suggestions.css-CfU8jDIe.js";import"./SuggestionItem-Bpp7nMj3.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./i18n-defaults-dyGKyNAh.js";import"./Person-Bk5r7PMP.js";import"./index-BjCsyD0f.js";import"./less-BrI4wUi1.js";import"./index-BVf50soJ.js";import"./ListItemStandard-BudRgS4c.js";import"./ButtonBadge-DufPnDtE.js";import"./overflow-T1mM3sDN.js";import"./overflow-C2mySmA-.js";const k=`## Design-Compliant Examples

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
