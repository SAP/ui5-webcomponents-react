import{j as e}from"./jsx-runtime-d079401a.js";import"./DomRefTable.module-5d67adde.js";import{D as h}from"./DocsHeader-6d4c3770.js";import{F as l}from"./Footer-fa2ff786.js";import{M as a}from"./index-da243de5.js";import"./index-f1f2c4b1.js";import{M as x,C as r,A as o}from"./chunk-S4VUQJ4A-4499c612.js";import{C as p,D as j,P as m,R as u,M as w,a as g,T as b}from"./Modals.stories-fbcd7428.js";import{u as d}from"./index-59d6410c.js";import{P as n}from"./index-fe7b73df.js";import{D as f}from"./index-2b6ea7e4.js";import{P as M}from"./index-b151a09b.js";import{R as y}from"./index-68b189cc.js";import{M as P}from"./index-16c16579.js";import{T as v}from"./index-8b1ee67a.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-79e04b8a.js";import"./iframe-9c252156.js";import"../sb-preview/runtime.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./class-map-0ab40ab9.js";import"./Button-02dfef34.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d5d083dd.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-82bd8dbf.js";import"./Integer-f7f172c9.js";import"./index-de0aa291.js";import"./Avatar-6c09069b.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-b7b61b56.js";import"./index-7b58c824.js";import"./Link-498d09c2.js";import"./WrappingType-b81e595a.js";import"./index-56b3d57c.js";import"./TableOfContent-4a72a09e.js";import"./index-5a18bd17.js";import"./Label-287c3220.js";import"./index-c74c9f7f.js";import"./index-fc0a75f8.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./index-99d317a4.js";import"./i18n-defaults-456fcfbf.js";import"./I18nContext-dd74d568.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-17481929.js";import"./useIsomorphicId-ed1d334d.js";import"./index-2c686dc9.js";import"./Title-f7b3e876.js";import"./index-56cb4c22.js";import"./ValueState-ab6838cc.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./ModalsContext-c6c22f4c.js";import"./index-e1c92a9c.js";import"./Bar-4e8debe5.js";import"./parameters-bundle.css-f9dc8928.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-392b388d.js";import"./slim-arrow-right-b5a9fe30.js";import"./Dialog-3eddfe98.js";import"./ValueState-2c5e5904.js";import"./ResponsivePopover-1151e741.js";import"./ListItemBase-472e3755.js";import"./ItemNavigation-0734b7c0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ce1a2cfb.js";import"./StandardListItem-afe74127.js";import"./ListItem-86bc8c51.js";import"./RadioButton-082fd9c9.js";import"./CheckBox-355e2cb2.js";import"./accept-aa607c05.js";import"./HasPopup-47461347.js";function Ms(t={}){const{wrapper:i}=Object.assign({},d(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(c,{})})):c();function c(){const s=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:p}),`
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
`,e.jsx(l,{})]})}}export{Ms as default};
//# sourceMappingURL=Modals-c87d4434.js.map
