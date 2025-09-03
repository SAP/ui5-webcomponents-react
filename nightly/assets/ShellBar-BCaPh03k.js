import{j as e,e as s}from"./iframe-Ci8pj7yy.js";import{useMDXComponents as f}from"./index-DO7eBN2z.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BOIftN09.js";import"./Tag-CtmOHQqs.js";import"./index-XXTJ5qGa.js";import{C as u}from"./ControlsWithNote-UCIdrd3z.js";import{D as S}from"./DocsHeader-CrSp8Qjk.js";import{F as v}from"./CommandsAndQueries-5z2JhX-x.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-BtEh2H4T.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-Cb8zmGg3.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DSfftGlH.js";import"./sys-enter-2-C76hk90F.js";import"./alert-DYFZMbbA.js";import"./index-C7Xj3GeW.js";import"./index-DWr3iboX.js";import"./Link-CAZ1TUGZ.js";import"./copy-Dt7BIUJN.js";import"./copy-DM6AHN8T.js";import"./GitHub-Mark-CrxpG-qQ.js";import"./TableOfContent-B6cN-CWA.js";import"./index-D-FVVHHi.js";import"./index-B8N1oKPj.js";import"./addCustomCSSWithScoping-X0FVjaGM.js";import"./index-DNhpGeE9.js";import"./index-DX67Vy3i.js";import"./index-D32YSGyq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXlYEAwh.js";import"./parameters-bundle.css-34zgZIqy.js";import"./Search-BiGdexjw.js";import"./Option-DI25J3kC.js";import"./ListItemBaseTemplate-CAugTCWT.js";import"./Select-Iz40cZG_.js";import"./InvisibleMessage-CU9-lL93.js";import"./slim-arrow-down-2towEIQe.js";import"./slim-arrow-down-lM8f-Uz6.js";import"./ResponsivePopoverCommon.css-BfjHIntt.js";import"./ValueStateMessage.css-BrUNqWph.js";import"./search-R8ellwwG.js";import"./Input-D5iz8gVF.js";import"./Suggestions.css-C4ig1fd6.js";import"./SuggestionItem-92M1Ikia.js";import"./i18n-defaults-Cjp7arcT.js";import"./Person-Bk5r7PMP.js";import"./index-BmMgd--U.js";import"./less-DfpMFNFc.js";import"./index-DnpPlmBw.js";import"./ListItemStandard-D6LGiTVa.js";import"./ButtonBadge-CiLLZCx_.js";import"./overflow-CeuNAWGm.js";import"./overflow-BPFCzPmr.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function ke(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{ke as default};
