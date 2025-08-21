import{j as e,e as s}from"./iframe-BbyAdBbD.js";import{useMDXComponents as f}from"./index-DMrgLDcS.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BmDzJ9zc.js";import"./Tag-DFDkNEbD.js";import"./index-BOJCW3Cn.js";import{C as u}from"./ControlsWithNote-OBGD-axJ.js";import{D as S}from"./DocsHeader-BeiEWE-i.js";import{F as v}from"./CommandsAndQueries-DIG7kTa0.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-fKH852CC.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-1B3cadgy.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DKaoIqMf.js";import"./sys-enter-2-CKPkjpqY.js";import"./alert-D9XuLZDQ.js";import"./index-B8lW2Kcg.js";import"./index-B0_PQF5c.js";import"./Link-Dyaix8DR.js";import"./copy-DZVuyA5K.js";import"./copy-BF7pXxeM.js";import"./GitHub-Mark-BJZEaSEo.js";import"./TableOfContent-CIUFbz_I.js";import"./index-C8J3KSH2.js";import"./index-DoDw--JI.js";import"./addCustomCSSWithScoping-C5eZLuHk.js";import"./index-CzGjDUib.js";import"./index-uwT0wEXF.js";import"./index-DOb7Y-7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPnL0edq.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./Search-KG-2Wbfh.js";import"./Option-CEiySMCJ.js";import"./ListItemBaseTemplate-DKaA7HpC.js";import"./Select-DbKIwfyt.js";import"./InvisibleMessage-D6n4ORIu.js";import"./slim-arrow-down-Cx1RPm1s.js";import"./slim-arrow-down-B5KGIjFP.js";import"./ResponsivePopoverCommon.css-DuxFKCqv.js";import"./ValueStateMessage.css-C-AtYoGH.js";import"./search-B7JVl3fC.js";import"./Input-vhH4RVxo.js";import"./Suggestions.css-CqkZUpZv.js";import"./SuggestionItem-D3io2X0o.js";import"./i18n-defaults-Cjp7arcT.js";import"./Person-Bk5r7PMP.js";import"./index-ChOh1Q41.js";import"./less-DwoBkqxf.js";import"./index-KgRO3UwY.js";import"./ListItemStandard-CSYeusiR.js";import"./ButtonBadge-ZlSPkphi.js";import"./overflow-Cb6Vdwza.js";import"./overflow-EtuNraJ6.js";const k=`## Design-Compliant Examples

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
