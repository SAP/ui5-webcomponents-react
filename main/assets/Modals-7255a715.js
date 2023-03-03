import{j as r,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./DomRefTable.module-f2d37632.js";import{D as a}from"./DocsHeader-418e4008.js";import{F as p}from"./Footer-d7beaea3.js";import{M as m}from"./index-e2b41386.js";import"./index-f1f749bf.js";import{M as u,C as n,j as t}from"./index-0e8f60d5.js";import{C as w,D as g,P as b,R as f,M,a as y,T as P}from"./Modals.stories-618795d6.js";import{u as l}from"./index-4fb8b842.js";import{P as c}from"./index-79c7afbf.js";import{D as v}from"./index-7270ade0.js";import{P as D}from"./index-82591e11.js";import{R}from"./index-0c3733d2.js";import{M as x}from"./index-59288c02.js";import{T}from"./index-7f520251.js";import"./chunk-G4YQS2SV-386e3cad.js";import"./iframe-3591d0cc.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-6f8afb28.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-2e5054c2.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-58164062.js";import"./TableOfContent-b30f071b.js";import"./index-036cdf6d.js";import"./WrappingType-b81e595a.js";import"./index-46cb378d.js";import"./Label-6707bdfc.js";import"./Footer.module-c4f3b823.js";import"./Popover-97ca01c1.js";import"./Integer-8010a7ae.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./index-99d317a4.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-78860c77.js";import"./index-88309a6c.js";import"./Title-18f6d5a1.js";import"./index-8f4444ac.js";import"./index-4878dccf.js";import"./ValueState-ab6838cc.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./ModalsContext-131e4070.js";import"./index-9da78265.js";import"./Bar-b4a14d85.js";import"./fastNavigation-ebf07f1c.js";import"./parameters-bundle.css-0c974f42.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-5c67d19b.js";import"./slim-arrow-right-a1b07349.js";import"./Dialog-859ab2f5.js";import"./ValueState-2c5e5904.js";import"./ResponsivePopover-bf5faf8e.js";import"./ListItemBase-ef18a748.js";import"./ItemNavigation-4b509b49.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59c61392.js";import"./StandardListItem-cb5818d4.js";import"./ListItem-9550e3d3.js";import"./RadioButton-d0c7abe6.js";import"./CheckBox-2890456e.js";import"./accept-70258933.js";import"./HasPopup-47461347.js";import"./Avatar-b22f5314.js";import"./employee-10cd14ab.js";function br(i={}){const{wrapper:d}=Object.assign({},l(),i.components);return d?r(d,Object.assign({},i,{children:r(h,{})})):h();function h(){const e=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},l(),i.components);return o(s,{children:[r(u,{of:w}),`
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
`,r(c,{header:r(e.h4,{className:"noMargin",children:"Dialog Props"}),collapsed:!0,children:r(t,{of:v,exclude:["open"]})}),`
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
`,r(c,{header:r(e.h4,{className:"noMargin",children:"Popover Props"}),collapsed:!0,children:r(t,{of:D,exclude:["open"]})}),`
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
`,r(c,{header:r(e.h4,{className:"noMargin",children:"ResponsivePopover Props"}),collapsed:!0,children:r(t,{of:R,exclude:["open"]})}),`
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
`,r(c,{header:r(e.h4,{className:"noMargin",children:"Menu Props"}),collapsed:!0,children:r(t,{of:x,exclude:["open"]})}),`
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
`,r(c,{header:r(e.h4,{className:"noMargin",children:"MessageBox Props"}),collapsed:!0,children:r(t,{of:m,exclude:["open"]})}),`
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
`,r(c,{header:r(e.h4,{className:"noMargin",children:"Toast Props "}),collapsed:!0,children:r(t,{of:T})}),`
`,r("br",{}),`
`,r(p,{})]})}}export{br as default};
//# sourceMappingURL=Modals-7255a715.js.map
