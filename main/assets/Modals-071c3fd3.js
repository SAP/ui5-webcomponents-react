import{j as r,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./DomRefTable.module-4f3389ee.js";import{D as a}from"./DocsHeader-c7666054.js";import{F as p}from"./Footer-e7e3388e.js";import{M as m}from"./index-166d00e7.js";import"./index-f1f749bf.js";import{M as u,C as n,b as t}from"./chunk-PCJTTTQV-38b99b19.js";import{C as w,D as g,P as b,R as f,M,a as y,T as P}from"./Modals.stories-8a947af3.js";import{u as l}from"./index-4fb8b842.js";import{P as i}from"./index-c64592ee.js";import{D as v}from"./index-5e57a666.js";import{P as D}from"./index-40f07246.js";import{R}from"./index-1864983b.js";import{M as x}from"./index-aaa9bd02.js";import{T}from"./index-b911fd66.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-2624e4d5.js";import"./iframe-7dea36f6.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./information-bce3ba82.js";import"./class-map-6d48ebd3.js";import"./Button-35e7f923.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-53c1bfde.js";import"./TableOfContent-308727db.js";import"./index-097afed0.js";import"./Link-8808efba.js";import"./WrappingType-b81e595a.js";import"./index-ba4bb7c2.js";import"./Label-e24223e9.js";import"./index-96c5f47c.js";import"./Popover-eac39f76.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./index-99d317a4.js";import"./i18n-defaults-f914d614.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-78860c77.js";import"./index-95f09c54.js";import"./Title-07ee6300.js";import"./index-0581ddeb.js";import"./index-f9f0eb7c.js";import"./ValueState-ab6838cc.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./ModalsContext-131e4070.js";import"./index-fa7a0c3a.js";import"./Bar-93e4db55.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-0903adf5.js";import"./slim-arrow-right-24b9c100.js";import"./Dialog-0e44ed8a.js";import"./ValueState-2c5e5904.js";import"./ResponsivePopover-fe818bf5.js";import"./ListItemBase-b73c7fed.js";import"./ItemNavigation-316291cb.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1df19c4b.js";import"./StandardListItem-2d39af82.js";import"./ListItem-3c89af96.js";import"./RadioButton-17175673.js";import"./CheckBox-c006676c.js";import"./accept-0670a13e.js";import"./HasPopup-47461347.js";import"./Avatar-f4abe909.js";import"./employee-f8bb953b.js";function Rr(c={}){const{wrapper:d}=Object.assign({},l(),c.components);return d?r(d,Object.assign({},c,{children:r(h,{})})):h();function h(){const e=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},l(),c.components);return o(s,{children:[r(u,{of:w}),`
`,r(a,{since:"0.22.2"}),`
`,r("br",{}),`
`,r(e.h2,{id:"usage-notes",children:"Usage Notes"}),`
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
`,r(e.h2,{id:"dialog",children:"Dialog"}),`
`,r(n,{of:g}),`
`,r(e.h4,{id:"usage",children:"Usage"}),`
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
`,r(e.h2,{id:"popover",children:"Popover"}),`
`,r(n,{of:b}),`
`,r(e.h4,{id:"usage-1",children:"Usage"}),`
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
`,r(e.h2,{id:"responsivepopover",children:"ResponsivePopover"}),`
`,r(n,{of:f}),`
`,r(e.h4,{id:"usage-2",children:"Usage"}),`
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
`,r(e.h2,{id:"menu",children:"Menu"}),`
`,r(e.p,{children:r(e.strong,{children:"since 1.8.0"})}),`
`,r(n,{of:M}),`
`,r(e.h4,{id:"usage-3",children:"Usage"}),`
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
`,r(e.h2,{id:"messagebox",children:"MessageBox"}),`
`,r(n,{of:y}),`
`,r(e.h4,{id:"usage-4",children:"Usage"}),`
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
`,r(e.h2,{id:"toast",children:"Toast"}),`
`,r(n,{of:P}),`
`,r(e.h4,{id:"usage-5",children:"Usage"}),`
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
`,r(p,{})]})}}export{Rr as default};
//# sourceMappingURL=Modals-071c3fd3.js.map
