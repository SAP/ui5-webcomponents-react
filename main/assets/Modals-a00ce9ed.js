import{j as e}from"./jsx-runtime-5926aa06.js";import"./DomRefTable.module-28cda656.js";import{D as h}from"./DocsHeader-d552f207.js";import{F as l}from"./Footer-1485dc2c.js";import{M as a}from"./index-e2aa080d.js";import"./index-ebeaab24.js";import{M as x,C as r,b as o}from"./chunk-PCJTTTQV-356b6a87.js";import{C as p,D as j,P as m,R as u,M as w,a as g,T as b}from"./Modals.stories-3fe88c3a.js";import{u as d}from"./index-bda0bad7.js";import{P as n}from"./index-c0ae59f7.js";import{D as f}from"./index-f82e04d1.js";import{P as M}from"./index-3292dd57.js";import{R as y}from"./index-c056fce1.js";import{M as P}from"./index-29c955a7.js";import{T as v}from"./index-e8932578.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-4f966b85.js";import"./iframe-f423d3f9.js";import"../sb-preview/runtime.js";import"./UI5Element-a8445a25.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-884f99a7.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-3e9cb840.js";import"./Icons-c55d12a5.js";import"./decline-c4793abd.js";import"./i18n-defaults-80781f7e.js";import"./information-e6fe8610.js";import"./class-map-323a92fb.js";import"./Button-f1768a08.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-a550c523.js";import"./index-b016e34e.js";import"./Link-8b80096c.js";import"./WrappingType-b81e595a.js";import"./index-77c39cc5.js";import"./Label-6cefa2d2.js";import"./index-9c09ad76.js";import"./Popover-2f417d64.js";import"./Integer-f7f172c9.js";import"./PopupUtils-b38c74c1.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-3239006e.js";import"./FocusableElements-69e44a9d.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-cea672cf.js";import"./MediaRange-25b98f31.js";import"./style-map-34e6b8f4.js";import"./index-99d317a4.js";import"./i18n-defaults-2b7c3fd4.js";import"./I18nContext-cdb50611.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-4be7c5e3.js";import"./index-860c58fd.js";import"./Title-a5ea80a2.js";import"./index-adaac386.js";import"./index-690dd4d0.js";import"./ValueState-ab6838cc.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ModalsContext-1c9f64b4.js";import"./index-e8ecee7d.js";import"./Bar-2d143472.js";import"./parameters-bundle.css-6a285d0d.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-389f83c4.js";import"./slim-arrow-right-70b47038.js";import"./Dialog-effa1776.js";import"./ValueState-2c5e5904.js";import"./ResponsivePopover-1eb02d4a.js";import"./ListItemBase-124add92.js";import"./ItemNavigation-cb92b87f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-8d822d0c.js";import"./StandardListItem-8dc8c287.js";import"./ListItem-a92cce8b.js";import"./RadioButton-021a694f.js";import"./CheckBox-33235970.js";import"./accept-2ae5e2eb.js";import"./HasPopup-47461347.js";import"./Avatar-3e4df27c.js";import"./employee-d55343ff.js";function gs(t={}){const{wrapper:i}=Object.assign({},d(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(c,{})})):c();function c(){const s=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:p}),`
`,e.jsx(h,{since:"0.22.2"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,e.jsx(s.p,{children:e.jsxs(s.strong,{children:["In order to use these helpers, please make sure that your application is wrapped in the ",e.jsx(s.code,{children:"<ThemeProvider />"})," component."]})}),`
`,e.jsx(s.p,{children:"We are offering those helpers methods both as hooks and static methods:"}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"Modals.useShowXZY"})}),`
`,e.jsxs(s.p,{children:[`Use this hook when you are in a React context where you are allowed to use hooks.
Calling the hook returns a memoized function, which you can execute to show the popup by passing the props and an optional container.
`,e.jsx(s.strong,{children:"This should always be the preferred option!"})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"Modals.showXZY"})}),`
`,e.jsxs(s.p,{children:["Use this static helper in case you are not in a React context (-> you can't use hooks), e.g. in a ",e.jsx(s.code,{children:"redux"}),` reducer.
You can pass the props and an optional container directly.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"dialog",children:"Dialog"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(s.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showDialog = Modals.useShowDialog();
const { ref, close } = showDialog(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Dialog"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Dialog"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showDialog"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to get interact with the ",e.jsx(s.code,{children:"Dialog"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Dialog"}),"."]})]})]})]}),`
`,e.jsx(n,{header:e.jsx(s.h4,{className:"noMargin",children:"Dialog Props"}),collapsed:!0,children:e.jsx(o,{of:f,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"popover",children:"Popover"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(s.h4,{id:"usage-1",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showPopover = Modals.useShowPopover();
const { ref, close } = showPopover(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Popover"})," props (see table below).",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Popover"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showPopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Popover"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Popover"}),"."]})]})]})]}),`
`,e.jsx(n,{header:e.jsx(s.h4,{className:"noMargin",children:"Popover Props"}),collapsed:!0,children:e.jsx(o,{of:M,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"responsivepopover",children:"ResponsivePopover"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(s.h4,{id:"usage-2",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showResponsivePopover = Modals.useShowResponsivePopover();
const { ref, close } = showResponsivePopover(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"ResponsivePopover"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"ResponsivePopover"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showResponsivePopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"ResponsivePopover"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"ResponsivePopover"}),"."]})]})]})]}),`
`,e.jsx(n,{header:e.jsx(s.h4,{className:"noMargin",children:"ResponsivePopover Props"}),collapsed:!0,children:e.jsx(o,{of:y,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"menu",children:"Menu"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"since 1.8.0"})}),`
`,e.jsx(r,{of:w}),`
`,e.jsx(s.h4,{id:"usage-3",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showMenu = Modals.useShowMenu();
const { ref, close } = showMenu(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Menu"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Menu"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Menu"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Menu"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Menu"}),"."]})]})]})]}),`
`,e.jsx(n,{header:e.jsx(s.h4,{className:"noMargin",children:"Menu Props"}),collapsed:!0,children:e.jsx(o,{of:P,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"messagebox",children:"MessageBox"}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(s.h4,{id:"usage-4",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showMessageBox = Modals.useShowMessageBox();
const { ref, close } = showMessageBox(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"MessageBox"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"MessageBox"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showMessageBox"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"MessageBox"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"MessageBox"}),"."]})]})]})]}),`
`,e.jsx(n,{header:e.jsx(s.h4,{className:"noMargin",children:"MessageBox Props"}),collapsed:!0,children:e.jsx(o,{of:a,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"toast",children:"Toast"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(s.h4,{id:"usage-5",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showToast = Modals.useShowToast();
const { ref } = showToast(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref } = Modals.showToast(props, container);
`})}),`
`,e.jsx(s.p,{children:"**Parameters **"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Toast"})," props(see table below)."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Toast"})," should be mounted.Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:"**Return Value **"}),`
`,e.jsxs(s.p,{children:["The",e.jsx(s.code,{children:"showToast"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Toast"}),"."]})]})})]}),`
`,e.jsx(n,{header:e.jsx(s.h4,{className:"noMargin",children:"Toast Props "}),collapsed:!0,children:e.jsx(o,{of:v})}),`
`,e.jsx("br",{}),`
`,e.jsx(l,{})]})}}export{gs as default};
//# sourceMappingURL=Modals-a00ce9ed.js.map
