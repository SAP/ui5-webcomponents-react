import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Popover-B2cJjUCH.js";import{n as i,t as a}from"./ResponsivePopover-C666S_12.js";import{n as o,t as s}from"./MessageBox-Bv57cL4A.js";import{n as c,t as l}from"./Dialog-Cx1iP7Kk.js";import{n as u,t as d}from"./Panel-BtzwTZ8T.js";import{n as f,t as p}from"./Menu-D3Slvql1.js";import{n as m,t as h}from"./Toast-D2Get22K.js";import{m as g,p as _}from"./iframe-BwcDrag1.js";import{i as v,r as y}from"./react-BOKIvUzN.js";import{_ as b,d as x,n as S,r as C}from"./blocks-C_k_yzd7.js";import{f as w,t as T,u as E}from"./components-B6rZns-J.js";import{a as D,c as O,i as k,n as A,o as j,r as M,s as N,t as P}from"./Modals.stories-c1-dNET3.js";function F(e){let t={code:`code`,em:`em`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...v(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{}),`
`,(0,L.jsx)(x,{of:k}),`
`,(0,L.jsx)(w,{of:k,since:`0.22.2`}),`
`,(0,L.jsx)(t.h2,{id:`general-usage-information`,children:`General Usage Information`}),`
`,(0,L.jsxs)(t.p,{children:[`Only one `,(0,L.jsx)(t.code,{children:`Modals`}),` component (`,(0,L.jsx)(t.code,{children:`<Modals />`}),`) should be rendered for each application, otherwise multiple popovers or dialogs are displayed.`]}),`
`,(0,L.jsxs)(t.p,{children:[`Example for mounting the `,(0,L.jsx)(t.code,{children:`Modals`}),` component:`]}),`
`,(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-jsx`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';
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
`,(0,L.jsx)(t.h2,{id:`dialog`,children:`Dialog`}),`
`,(0,L.jsx)(C,{of:P}),`
`,(0,L.jsx)(t.h4,{id:`usage`,children:`Usage`}),`
`,(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showDialog(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Parameter`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`props`})}),(0,L.jsxs)(t.td,{children:[`All supported `,(0,L.jsx)(t.code,{children:`Dialog`}),` props (see table below). `,(0,L.jsx)(t.code,{children:`open`}),` will always be set to `,(0,L.jsx)(t.code,{children:`true`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`config`})})}),(0,L.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`container`})})}),(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,L.jsx)(t.code,{children:`Dialog`}),` should be mounted. Use `,(0,L.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`Config Options`}),` `,(0,L.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsx)(t.tbody,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`container`})}),(0,L.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,L.jsx)(t.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,L.jsxs)(t.p,{children:[`The `,(0,L.jsx)(t.code,{children:`showDialog`}),` method returns an object with the following properties:`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ref`})}),(0,L.jsxs)(t.td,{children:[`React `,(0,L.jsx)(t.code,{children:`RefObject`}),` which can be used to get interact with the `,(0,L.jsx)(t.code,{children:`Dialog`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`close()`})}),(0,L.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,L.jsx)(t.code,{children:`Dialog`}),`.`]})]})]})]}),`
`,(0,L.jsx)(d,{header:(0,L.jsx)(t.h4,{className:`noMargin`,children:`Dialog Props`}),collapsed:!0,children:(0,L.jsx)(S,{of:l,exclude:[`open`]})}),`
`,(0,L.jsx)(t.h2,{id:`popover`,children:`Popover`}),`
`,(0,L.jsx)(C,{of:D}),`
`,(0,L.jsx)(t.h4,{id:`usage-1`,children:`Usage`}),`
`,(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showPopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Parameter`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`props`})}),(0,L.jsxs)(t.td,{children:[`All supported `,(0,L.jsx)(t.code,{children:`Popover`}),` props (see table below). `,(0,L.jsx)(t.code,{children:`open`}),` will always be set to `,(0,L.jsx)(t.code,{children:`true`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`config`})})}),(0,L.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`container`})})}),(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,L.jsx)(t.code,{children:`Popover`}),` should be mounted. Use `,(0,L.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`Config Options`}),` `,(0,L.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`container`})}),(0,L.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,L.jsx)(t.code,{children:`document.body`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`autoClosePopovers`})}),(0,L.jsxs)(t.td,{children:[`If set to `,(0,L.jsx)(t.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,L.jsxs)(t.p,{children:[`The `,(0,L.jsx)(t.code,{children:`showPopover`}),` method returns an object with the following properties:`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ref`})}),(0,L.jsxs)(t.td,{children:[`React `,(0,L.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,L.jsx)(t.code,{children:`Popover`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`close()`})}),(0,L.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,L.jsx)(t.code,{children:`Popover`}),`.`]})]})]})]}),`
`,(0,L.jsx)(d,{header:(0,L.jsx)(t.h4,{className:`noMargin`,children:`Popover Props`}),collapsed:!0,children:(0,L.jsx)(S,{of:r,exclude:[`open`]})}),`
`,(0,L.jsx)(t.h2,{id:`responsivepopover`,children:`ResponsivePopover`}),`
`,(0,L.jsx)(C,{of:j}),`
`,(0,L.jsx)(t.h4,{id:`usage-2`,children:`Usage`}),`
`,(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showResponsivePopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Parameter`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`props`})}),(0,L.jsxs)(t.td,{children:[`All supported `,(0,L.jsx)(t.code,{children:`ResponsivePopover`}),` props (see table below). `,(0,L.jsx)(t.code,{children:`open`}),` will always be set to `,(0,L.jsx)(t.code,{children:`true`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`config`})})}),(0,L.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`container`})})}),(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,L.jsx)(t.code,{children:`ResponsivePopover`}),` should be mounted. Use `,(0,L.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`Config Options`}),` `,(0,L.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`container`})}),(0,L.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,L.jsx)(t.code,{children:`document.body`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`autoClosePopovers`})}),(0,L.jsxs)(t.td,{children:[`If set to `,(0,L.jsx)(t.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,L.jsxs)(t.p,{children:[`The `,(0,L.jsx)(t.code,{children:`showResponsivePopover`}),` method returns an object with the following properties:`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ref`})}),(0,L.jsxs)(t.td,{children:[`React `,(0,L.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,L.jsx)(t.code,{children:`ResponsivePopover`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`close()`})}),(0,L.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,L.jsx)(t.code,{children:`ResponsivePopover`}),`.`]})]})]})]}),`
`,(0,L.jsx)(d,{header:(0,L.jsx)(t.h4,{className:`noMargin`,children:`ResponsivePopover Props`}),collapsed:!0,children:(0,L.jsx)(S,{of:a,exclude:[`open`]})}),`
`,(0,L.jsx)(t.h2,{id:`menu`,children:`Menu`}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`since 1.8.0`})}),`
`,(0,L.jsx)(C,{of:A}),`
`,(0,L.jsx)(t.h4,{id:`usage-3`,children:`Usage`}),`
`,(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMenu(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Parameter`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`props`})}),(0,L.jsxs)(t.td,{children:[`All supported `,(0,L.jsx)(t.code,{children:`Menu`}),` props (see table below). `,(0,L.jsx)(t.code,{children:`open`}),` will always be set to `,(0,L.jsx)(t.code,{children:`true`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`config`})})}),(0,L.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`container`})})}),(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,L.jsx)(t.code,{children:`Menu`}),` should be mounted. Use `,(0,L.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`Config Options`}),` `,(0,L.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`container`})}),(0,L.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,L.jsx)(t.code,{children:`document.body`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`autoClosePopovers`})}),(0,L.jsxs)(t.td,{children:[`If set to `,(0,L.jsx)(t.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,L.jsxs)(t.p,{children:[`The `,(0,L.jsx)(t.code,{children:`showMenu`}),` method returns an object with the following properties:`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ref`})}),(0,L.jsxs)(t.td,{children:[`React `,(0,L.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,L.jsx)(t.code,{children:`Menu`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`close()`})}),(0,L.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,L.jsx)(t.code,{children:`Menu`}),`.`]})]})]})]}),`
`,(0,L.jsx)(d,{header:(0,L.jsx)(t.h4,{className:`noMargin`,children:`Menu Props`}),collapsed:!0,children:(0,L.jsx)(S,{of:p,exclude:[`open`]})}),`
`,(0,L.jsx)(t.h2,{id:`messagebox`,children:`MessageBox`}),`
`,(0,L.jsx)(C,{of:M}),`
`,(0,L.jsx)(t.h4,{id:`usage-4`,children:`Usage`}),`
`,(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMessageBox(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Parameter`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`props`})}),(0,L.jsxs)(t.td,{children:[`All supported `,(0,L.jsx)(t.code,{children:`MessageBox`}),` props (see table below). `,(0,L.jsx)(t.code,{children:`open`}),` will always be set to `,(0,L.jsx)(t.code,{children:`true`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`config`})})}),(0,L.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`container`})})}),(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,L.jsx)(t.code,{children:`MessageBox`}),` should be mounted. Use `,(0,L.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`Config Options`}),` `,(0,L.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsx)(t.tbody,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`container`})}),(0,L.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,L.jsx)(t.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,L.jsxs)(t.p,{children:[`The `,(0,L.jsx)(t.code,{children:`showMessageBox`}),` method returns an object with the following properties:`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ref`})}),(0,L.jsxs)(t.td,{children:[`React `,(0,L.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,L.jsx)(t.code,{children:`MessageBox`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`close()`})}),(0,L.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,L.jsx)(t.code,{children:`MessageBox`}),`.`]})]})]})]}),`
`,(0,L.jsx)(d,{header:(0,L.jsx)(t.h4,{className:`noMargin`,children:`MessageBox Props`}),collapsed:!0,children:(0,L.jsx)(S,{of:s,exclude:[`open`]})}),`
`,(0,L.jsx)(t.h2,{id:`toast`,children:`Toast`}),`
`,(0,L.jsx)(C,{of:N}),`
`,(0,L.jsx)(t.h4,{id:`usage-5`,children:`Usage`}),`
`,(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref } = Modals.showToast(props, config);

// Legacy: using container directly
const { ref } = Modals.showToast(props, container);
`})}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Parameter`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`props`})}),(0,L.jsxs)(t.td,{children:[`All supported `,(0,L.jsx)(t.code,{children:`Toast`}),` props (see table below).`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`config`})})}),(0,L.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.em,{children:(0,L.jsx)(t.code,{children:`container`})})}),(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,L.jsx)(t.code,{children:`Toast`}),` should be mounted. Use `,(0,L.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`Config Options`}),` `,(0,L.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsx)(t.tbody,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`container`})}),(0,L.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,L.jsx)(t.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,L.jsx)(t.p,{children:(0,L.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,L.jsxs)(t.p,{children:[`The `,(0,L.jsx)(t.code,{children:`showToast`}),` method returns an object with the following properties:`]}),`
`,(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Property`}),(0,L.jsx)(t.th,{children:`Description`})]})}),(0,L.jsx)(t.tbody,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ref`})}),(0,L.jsxs)(t.td,{children:[`React `,(0,L.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,L.jsx)(t.code,{children:`Toast`}),`.`]})]})})]}),`
`,(0,L.jsx)(d,{header:(0,L.jsx)(t.h4,{className:`noMargin`,children:`Toast Props `}),collapsed:!0,children:(0,L.jsx)(S,{of:h})}),`
`,(0,L.jsx)(`br`,{}),`
`,(0,L.jsx)(E,{})]})}function I(e={}){let{wrapper:t}={...v(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),y(),T(),b(),c(),f(),u(),n(),i(),m(),o(),O(),g()})))()}R();export{I as default};