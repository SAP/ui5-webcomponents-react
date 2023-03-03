import{j as r,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./DomRefTable.module-b93912f7.js";import{D as a}from"./DocsHeader-272d51e2.js";import{F as p}from"./Footer-511979fe.js";import{M as m}from"./index-bfe080da.js";import"./index-f1f749bf.js";import{M as u,C as n,h as t}from"./index-4c7efcb4.js";import{C as w,D as g,P as b,R as f,M,a as y,T as P}from"./Modals.stories-b3972a76.js";import{u as l}from"./index-4fb8b842.js";import{P as i}from"./index-b4748554.js";import{D as v}from"./index-ff792c66.js";import{P as D}from"./index-fe59f05e.js";import{R}from"./index-cd94dd51.js";import{M as x}from"./index-3b37fd40.js";import{T}from"./index-ca2ef204.js";import"./chunk-G4YQS2SV-de0e1524.js";import"./iframe-cb792102.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-b668c6ba.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./class-map-60f59e95.js";import"./Button-981a9381.js";import"./Keys-50a1cb5a.js";import"./index-7ac1a15f.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-2e9cfc1a.js";import"./TableOfContent-c01f48c5.js";import"./index-4b713bb6.js";import"./WrappingType-b81e595a.js";import"./index-d42d1006.js";import"./Label-f9741f9c.js";import"./Footer.module-c4f3b823.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./index-99d317a4.js";import"./i18n-defaults-fdda04bc.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-78860c77.js";import"./index-dd9b39e3.js";import"./Title-256f7c0a.js";import"./index-d6e34175.js";import"./index-01fbaa23.js";import"./ValueState-ab6838cc.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./ModalsContext-131e4070.js";import"./index-789b1194.js";import"./Bar-2272abff.js";import"./fastNavigation-ebf07f1c.js";import"./parameters-bundle.css-0c974f42.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-c9e53615.js";import"./slim-arrow-right-dcb3f847.js";import"./Dialog-30b3aaf0.js";import"./ValueState-2c5e5904.js";import"./ResponsivePopover-f9a06272.js";import"./ListItemBase-a71fd372.js";import"./ItemNavigation-a1cb3c20.js";import"./TabbableElements-98652d50.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-344b418d.js";import"./StandardListItem-d042803f.js";import"./ListItem-5a448e1e.js";import"./RadioButton-bb0fefa8.js";import"./CheckBox-5c169af0.js";import"./accept-39710bd2.js";import"./HasPopup-47461347.js";import"./Avatar-f74ae24a.js";import"./employee-dc85b60f.js";function fr(c={}){const{wrapper:d}=Object.assign({},l(),c.components);return d?r(d,Object.assign({},c,{children:r(h,{})})):h();function h(){const e=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},l(),c.components);return o(s,{children:[r(u,{of:w}),`
`,r(a,{since:"0.22.2"}),`
`,r("br",{}),`
`,r(e.h2,{children:"Usage Notes"}),`
`,r(e.p,{children:o(e.strong,{children:["In order to use these helpers, please make sure that your application is wrapped in the ",r(e.code,{children:"<ThemeProvider />"})," component."]})}),`
`,r(e.p,{children:"We are offering those helpers methods both as hooks and static methods:"}),`
`,r(e.p,{children:r(e.code,{children:"Modals.useShowXZY"})}),`
`,o(e.p,{children:[`Use this hook when you are in a React context where you are allowed to use hooks.
Calling the hook returns a memoized function, which you can execute to show the popup by passing the props and an optional container.
`,r(e.strong,{children:"This should always be the preferred option!"})]}),`
`,r(e.p,{children:r(e.code,{children:"Modals.showXZY"})}),`
`,o(e.p,{children:["Use this static helper in case you are not in a React context (-> you can't use hooks), e.g. in a ",r(e.code,{children:"redux"}),` reducer.
You can pass the props and an optional container directly.`]}),`
`,r("br",{}),`
`,r(e.h2,{children:"Dialog"}),`
`,r(n,{of:g}),`
`,r(e.h4,{children:"Usage"}),`
`,r(e.pre,{children:r(e.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showDialog = Modals.useShowDialog();
const { ref, close } = showDialog(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,r(e.p,{children:r(e.strong,{children:"Parameters"})}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Parameter"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"props"})}),o(e.td,{children:["All supported ",r(e.code,{children:"Dialog"})," props (see table below). ",r(e.code,{children:"open"})," will always be set to ",r(e.code,{children:"true"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.em,{children:r(e.code,{children:"container"})})}),o(e.td,{children:["Optional container where the ",r(e.code,{children:"Dialog"})," should be mounted. Defaults to ",r(e.code,{children:"document.body"}),"."]})]})]})]}),`
`,r(e.p,{children:r(e.strong,{children:"Return Value"})}),`
`,o(e.p,{children:["The ",r(e.code,{children:"showDialog"})," method returns an object with the following properties:"]}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Property"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"ref"})}),o(e.td,{children:["React ",r(e.code,{children:"RefObject"})," which can be used to get interact with the ",r(e.code,{children:"Dialog"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"close()"})}),o(e.td,{children:["Convenience Method for closing the ",r(e.code,{children:"Dialog"}),"."]})]})]})]}),`
`,r(i,{header:r(e.h4,{className:"noMargin",children:"Dialog Props"}),collapsed:!0,children:r(t,{of:v,exclude:["open"]})}),`
`,r(e.h2,{children:"Popover"}),`
`,r(n,{of:b}),`
`,r(e.h4,{children:"Usage"}),`
`,r(e.pre,{children:r(e.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showPopover = Modals.useShowPopover();
const { ref, close } = showPopover(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,r(e.p,{children:r(e.strong,{children:"Parameters"})}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Parameter"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"props"})}),o(e.td,{children:["All supported ",r(e.code,{children:"Popover"})," props (see table below).",r(e.code,{children:"open"})," will always be set to ",r(e.code,{children:"true"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.em,{children:r(e.code,{children:"container"})})}),o(e.td,{children:["Optional container where the ",r(e.code,{children:"Popover"})," should be mounted. Defaults to ",r(e.code,{children:"document.body"}),"."]})]})]})]}),`
`,r(e.p,{children:r(e.strong,{children:"Return Value"})}),`
`,o(e.p,{children:["The ",r(e.code,{children:"showPopover"})," method returns an object with the following properties:"]}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Property"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"ref"})}),o(e.td,{children:["React ",r(e.code,{children:"RefObject"})," which can be used to interact with the ",r(e.code,{children:"Popover"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"close()"})}),o(e.td,{children:["Convenience Method for closing the ",r(e.code,{children:"Popover"}),"."]})]})]})]}),`
`,r(i,{header:r(e.h4,{className:"noMargin",children:"Popover Props"}),collapsed:!0,children:r(t,{of:D,exclude:["open"]})}),`
`,r(e.h2,{children:"ResponsivePopover"}),`
`,r(n,{of:f}),`
`,r(e.h4,{children:"Usage"}),`
`,r(e.pre,{children:r(e.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showResponsivePopover = Modals.useShowResponsivePopover();
const { ref, close } = showResponsivePopover(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,r(e.p,{children:r(e.strong,{children:"Parameters"})}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Parameter"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"props"})}),o(e.td,{children:["All supported ",r(e.code,{children:"ResponsivePopover"})," props (see table below). ",r(e.code,{children:"open"})," will always be set to ",r(e.code,{children:"true"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.em,{children:r(e.code,{children:"container"})})}),o(e.td,{children:["Optional container where the ",r(e.code,{children:"ResponsivePopover"})," should be mounted. Defaults to ",r(e.code,{children:"document.body"}),"."]})]})]})]}),`
`,r(e.p,{children:r(e.strong,{children:"Return Value"})}),`
`,o(e.p,{children:["The ",r(e.code,{children:"showResponsivePopover"})," method returns an object with the following properties:"]}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Property"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"ref"})}),o(e.td,{children:["React ",r(e.code,{children:"RefObject"})," which can be used to interact with the ",r(e.code,{children:"ResponsivePopover"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"close()"})}),o(e.td,{children:["Convenience Method for closing the ",r(e.code,{children:"ResponsivePopover"}),"."]})]})]})]}),`
`,r(i,{header:r(e.h4,{className:"noMargin",children:"ResponsivePopover Props"}),collapsed:!0,children:r(t,{of:R,exclude:["open"]})}),`
`,r(e.h2,{children:"Menu"}),`
`,r(e.p,{children:r(e.strong,{children:"since 1.8.0"})}),`
`,r(n,{of:M}),`
`,r(e.h4,{children:"Usage"}),`
`,r(e.pre,{children:r(e.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showMenu = Modals.useShowMenu();
const { ref, close } = showMenu(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,r(e.p,{children:r(e.strong,{children:"Parameters"})}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Parameter"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"props"})}),o(e.td,{children:["All supported ",r(e.code,{children:"Menu"})," props (see table below). ",r(e.code,{children:"open"})," will always be set to ",r(e.code,{children:"true"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.em,{children:r(e.code,{children:"container"})})}),o(e.td,{children:["Optional container where the ",r(e.code,{children:"Menu"})," should be mounted. Defaults to ",r(e.code,{children:"document.body"}),"."]})]})]})]}),`
`,r(e.p,{children:r(e.strong,{children:"Return Value"})}),`
`,o(e.p,{children:["The ",r(e.code,{children:"Menu"})," method returns an object with the following properties:"]}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Property"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"ref"})}),o(e.td,{children:["React ",r(e.code,{children:"RefObject"})," which can be used to interact with the ",r(e.code,{children:"Menu"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"close()"})}),o(e.td,{children:["Convenience Method for closing the ",r(e.code,{children:"Menu"}),"."]})]})]})]}),`
`,r(i,{header:r(e.h4,{className:"noMargin",children:"Menu Props"}),collapsed:!0,children:r(t,{of:x,exclude:["open"]})}),`
`,r(e.h2,{children:"MessageBox"}),`
`,r(n,{of:y}),`
`,r(e.h4,{children:"Usage"}),`
`,r(e.pre,{children:r(e.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showMessageBox = Modals.useShowMessageBox();
const { ref, close } = showMessageBox(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,r(e.p,{children:r(e.strong,{children:"Parameters"})}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Parameter"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"props"})}),o(e.td,{children:["All supported ",r(e.code,{children:"MessageBox"})," props (see table below). ",r(e.code,{children:"open"})," will always be set to ",r(e.code,{children:"true"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.em,{children:r(e.code,{children:"container"})})}),o(e.td,{children:["Optional container where the ",r(e.code,{children:"MessageBox"})," should be mounted. Defaults to ",r(e.code,{children:"document.body"}),"."]})]})]})]}),`
`,r(e.p,{children:r(e.strong,{children:"Return Value"})}),`
`,o(e.p,{children:["The ",r(e.code,{children:"showMessageBox"})," method returns an object with the following properties:"]}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Property"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"ref"})}),o(e.td,{children:["React ",r(e.code,{children:"RefObject"})," which can be used to interact with the ",r(e.code,{children:"MessageBox"}),"."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"close()"})}),o(e.td,{children:["Convenience Method for closing the ",r(e.code,{children:"MessageBox"}),"."]})]})]})]}),`
`,r(i,{header:r(e.h4,{className:"noMargin",children:"MessageBox Props"}),collapsed:!0,children:r(t,{of:m,exclude:["open"]})}),`
`,r(e.h2,{children:"Toast"}),`
`,r(n,{of:P}),`
`,r(e.h4,{children:"Usage"}),`
`,r(e.pre,{children:r(e.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react';

// when you can use hooks
const showToast = Modals.useShowToast();
const { ref } = showToast(props, container);

// when you can't use hooks (e.g. inside a redux reducer)
const { ref } = Modals.showToast(props, container);
`})}),`
`,r(e.p,{children:"**Parameters **"}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Parameter"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"props"})}),o(e.td,{children:["All supported ",r(e.code,{children:"Toast"})," props(see table below)."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.em,{children:r(e.code,{children:"container"})})}),o(e.td,{children:["Optional container where the ",r(e.code,{children:"Toast"})," should be mounted.Defaults to ",r(e.code,{children:"document.body"}),"."]})]})]})]}),`
`,r(e.p,{children:"**Return Value **"}),`
`,o(e.p,{children:["The",r(e.code,{children:"showToast"})," method returns an object with the following properties:"]}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Property"}),r(e.th,{children:"Description"})]})}),r(e.tbody,{children:o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"ref"})}),o(e.td,{children:["React ",r(e.code,{children:"RefObject"})," which can be used to interact with the ",r(e.code,{children:"Toast"}),"."]})]})})]}),`
`,r(i,{header:r(e.h4,{className:"noMargin",children:"Toast Props "}),collapsed:!0,children:r(t,{of:T})}),`
`,r("br",{}),`
`,r(p,{})]})}}export{fr as default};
//# sourceMappingURL=Modals-b4b04016.js.map
