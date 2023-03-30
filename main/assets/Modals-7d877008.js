import{j as r,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./DomRefTable.module-fc255840.js";import{D as a}from"./DocsHeader-9683d545.js";import{F as p}from"./Footer-b90b406c.js";import{M as m}from"./index-fe7c12bf.js";import"./index-f1f749bf.js";import{M as u,C as n,b as t}from"./chunk-PCJTTTQV-890d16a3.js";import{C as w,D as g,P as b,R as f,M,a as y,T as P}from"./Modals.stories-afc22134.js";import{u as l}from"./index-4fb8b842.js";import{P as i}from"./index-1556a8d0.js";import{D as v}from"./index-9eb60459.js";import{P as D}from"./index-dddc9139.js";import{R}from"./index-299c596b.js";import{M as x}from"./index-9c4fff12.js";import{T}from"./index-8ef64743.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-2d7d3d6f.js";import"./iframe-eb01b247.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4f87671d.js";import"./TableOfContent-2749aa52.js";import"./index-21f491d5.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-4ec8a131.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./index-99d317a4.js";import"./i18n-defaults-c7cc2cc1.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-78860c77.js";import"./index-fc028ff7.js";import"./Title-129aeb28.js";import"./index-3b96acd5.js";import"./index-23fc7277.js";import"./ValueState-ab6838cc.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./ModalsContext-131e4070.js";import"./index-bbe9215b.js";import"./Bar-78c6a88f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-b8fd41f3.js";import"./slim-arrow-right-52a56681.js";import"./Dialog-43ec4fb1.js";import"./ValueState-2c5e5904.js";import"./ResponsivePopover-fcaf2b05.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";function xr(c={}){const{wrapper:d}=Object.assign({},l(),c.components);return d?r(d,Object.assign({},c,{children:r(h,{})})):h();function h(){const e=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},l(),c.components);return o(s,{children:[r(u,{of:w}),`
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
`,r(p,{})]})}}export{xr as default};
//# sourceMappingURL=Modals-7d877008.js.map
