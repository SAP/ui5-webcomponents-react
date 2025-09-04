import{j as e,e as s}from"./iframe-DOJWwQPM.js";import{useMDXComponents as f}from"./index-D4GYqxG5.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-UH_Armuh.js";import"./Tag-C5qooBCQ.js";import"./index-BzlDTQAu.js";import{C as u}from"./ControlsWithNote-Bcqp_K0Z.js";import{D as S}from"./DocsHeader-CA2lf6wX.js";import{F as v}from"./CommandsAndQueries-DBgPcKIy.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DYZhoSQa.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-GGq-ZJDM.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-BiSRDS7B.js";import"./sys-enter-2-Ct0rvJ7Z.js";import"./alert-DJAqfmG4.js";import"./index-DKP6N4eU.js";import"./index-CAij4Fwu.js";import"./Link-OhZHx2sI.js";import"./copy-vTKoYhBq.js";import"./copy-DtHn9BZF.js";import"./GitHub-Mark-BFwQs7K7.js";import"./TableOfContent-Ckk6Hfr1.js";import"./index-CKKp0V8L.js";import"./index-BE18fnIz.js";import"./addCustomCSSWithScoping-7a5LAVf5.js";import"./index-IwfXz8bd.js";import"./index-DWcAbIiW.js";import"./index-CCV0Si6x.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-lKnjzqmd.js";import"./parameters-bundle.css-34zgZIqy.js";import"./Search-MgFFlNMC.js";import"./Option-yF138sxw.js";import"./ListItemBaseTemplate-CNX0LT1O.js";import"./Select-BfiyHYxw.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-B0GkeD5A.js";import"./slim-arrow-down-CS8FeIva.js";import"./ResponsivePopoverCommon.css-PVlGE3yL.js";import"./ValueStateMessage.css-O1QyKtEp.js";import"./search-juyv2hPB.js";import"./Input-Bvv54WJ3.js";import"./Suggestions.css-XOF_Sz64.js";import"./SuggestionItem-BNjcGuMf.js";import"./i18n-defaults-Cjp7arcT.js";import"./Person-Bk5r7PMP.js";import"./index-DNjxpIyn.js";import"./less-sSctrwpm.js";import"./index-ZGmNBqV_.js";import"./ListItemStandard-BC0Wl30E.js";import"./ButtonBadge-Cwy6VYf8.js";import"./overflow-BMJgHpzG.js";import"./overflow-C2Ob3PbS.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:h}),`
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
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:c}),`
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
