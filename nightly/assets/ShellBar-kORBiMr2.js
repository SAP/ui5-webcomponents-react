import{j as e,e as s}from"./iframe-DrWv7kqk.js";import{useMDXComponents as f}from"./index-COfklbz7.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CanskeDB.js";import"./Tag-BpxYU6SX.js";import"./index-C2As05th.js";import{C as u}from"./ControlsWithNote-CXKSYXdk.js";import{D as S}from"./DocsHeader-DLUHOqMs.js";import{F as v}from"./CommandsAndQueries-ChjYN9hd.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,a as p,b as m}from"./sys-help--xxM0xRc.js";import{C as c,D as d,A as g,E as b,T as P,P as C,N as y,S as M,a as h}from"./ShellBar.stories-DW_OehbJ.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BlWxhQJP.js";import"./sys-enter-2-yLdXaTo2.js";import"./alert-D-b4CjR7.js";import"./index-DJ9rRFX2.js";import"./index-WYl7sJsX.js";import"./Link-BXBCrxeL.js";import"./copy-BvaLSIQN.js";import"./copy-CdjvYQrK.js";import"./GitHub-Mark-BLcM84le.js";import"./TableOfContent-DXjPHaMB.js";import"./index-DNisCSrq.js";import"./index-BbYicUoT.js";import"./addCustomCSSWithScoping-BHseblXn.js";import"./index-BObiMDAc.js";import"./index-BK7UTMeJ.js";import"./index-wUQSbSJP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHbcK7Ba.js";import"./Search-D1gpaFIM.js";import"./Option-DaChME3c.js";import"./ListItemBaseTemplate-BLP_ZL8i.js";import"./Select-BC5JSduM.js";import"./InvisibleMessage-AMXG7yy6.js";import"./slim-arrow-down-CTlrm5_E.js";import"./slim-arrow-down-y4onL6ln.js";import"./ResponsivePopoverCommon.css-D-NNNw7j.js";import"./ValueStateMessage.css-B0vfJtfY.js";import"./search-HXvZb6HP.js";import"./Input-C_5q9_az.js";import"./Suggestions.css-C2ZIvTf-.js";import"./SuggestionItem-DKn3SbjY.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./i18n-defaults-dyGKyNAh.js";import"./Person-Bk5r7PMP.js";import"./index-CXtn3jPc.js";import"./less-Bsqu4Ump.js";import"./index-CLarNfi_.js";import"./ListItemStandard-DThva79L.js";import"./ButtonBadge-B7VzEglG.js";import"./overflow-9dooIBWc.js";import"./overflow-OiyJXK0i.js";const k=`## Design-Compliant Examples

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
