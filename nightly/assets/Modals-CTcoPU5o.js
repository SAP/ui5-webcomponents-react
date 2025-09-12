import{j as e,S as l,U as h,V as x,W as j,X as a,N as p,Y as m}from"./iframe-caVmfS0N.js";import{useMDXComponents as t}from"./index-CXGNJi-m.js";import{M as u,C as n,A as o}from"./blocks-ZTuRQuXn.js";import"./Tag-D02fgpVR.js";import"./index-ChGg5Mmk.js";import{D as g}from"./DocsHeader-CtG9s46Z.js";import{F as b}from"./CommandsAndQueries-DetWBOzr.js";import{C as c,D as f,P as w,R as M,M as P,a as v,T as y}from"./Modals.stories-BVWc6Buq.js";import{P as d}from"./index-DIuJY_GH.js";import"./preload-helper-D9Z9MdNV.js";import"./information-Dyf6S5us.js";import"./sys-enter-2-D5_eC5h3.js";import"./alert-BiCZhGMN.js";import"./copy-sAaoLBke.js";import"./copy-DWhnNq-F.js";import"./GitHub-Mark-6VQVGWOs.js";import"./TableOfContent-DyKT0XGl.js";import"./index-BDC18DOY.js";import"./index-IhZ6wtTw.js";import"./index-Bs2xAB6r.js";import"./Link-CXOXdny5.js";import"./addCustomCSSWithScoping-QAXJ-c-T.js";import"./index-D2ylaH5D.js";import"./index-C-mTSqge.js";import"./index-CxKirG4i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGaiMck6.js";import"./index-CIcgqU5O.js";import"./index-CDWQHBEV.js";import"./Panel-Dw1KL0c0.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-n0wT5xWk.js";function i(r){const s={code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsx(u,{of:c}),`
`,e.jsx(g,{of:c,since:"0.22.2"}),`
`,e.jsx(s.h2,{id:"general-usage-information",children:"General Usage Information"}),`
`,e.jsxs(s.p,{children:["Only one ",e.jsx(s.code,{children:"Modals"})," component (",e.jsx(s.code,{children:"<Modals />"}),") should be rendered for each application, otherwise multiple popovers or dialogs are displayed."]}),`
`,e.jsxs(s.p,{children:["Example for mounting the ",e.jsx(s.code,{children:"Modals"})," component:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { Modals } from '@ui5/webcomponents-react/Modals';
import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
...
const root = createRoot(document.getElementById("root"));
root.render(
        <ThemeProvider>
          <Modals />
          <App />
        </ThemeProvider>
);
`})}),`
`,e.jsx(s.h2,{id:"dialog",children:"Dialog"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Dialog"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Dialog"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showDialog"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to get interact with the ",e.jsx(s.code,{children:"Dialog"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Dialog"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Dialog Props"}),collapsed:!0,children:e.jsx(o,{of:h,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"popover",children:"Popover"}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(s.h4,{id:"usage-1",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Popover"})," props (see table below).",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Popover"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showPopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Popover"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Popover"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Popover Props"}),collapsed:!0,children:e.jsx(o,{of:x,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"responsivepopover",children:"ResponsivePopover"}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(s.h4,{id:"usage-2",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"ResponsivePopover"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"ResponsivePopover"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showResponsivePopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"ResponsivePopover"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"ResponsivePopover"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"ResponsivePopover Props"}),collapsed:!0,children:e.jsx(o,{of:j,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"menu",children:"Menu"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"since 1.8.0"})}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(s.h4,{id:"usage-3",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Menu"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Menu"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Menu"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Menu"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Menu"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Menu Props"}),collapsed:!0,children:e.jsx(o,{of:a,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"messagebox",children:"MessageBox"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(s.h4,{id:"usage-4",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"MessageBox"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"MessageBox"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showMessageBox"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"MessageBox"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"MessageBox"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"MessageBox Props"}),collapsed:!0,children:e.jsx(o,{of:p,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"toast",children:"Toast"}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(s.h4,{id:"usage-5",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref } = Modals.showToast(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Toast"})," props(see table below)."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Toast"})," should be mounted.Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The",e.jsx(s.code,{children:"showToast"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Toast"}),"."]})]})})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Toast Props "}),collapsed:!0,children:e.jsx(o,{of:m})}),`
`,e.jsx("br",{}),`
`,e.jsx(b,{})]})}function oe(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{oe as default};
