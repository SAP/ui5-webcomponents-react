import{j as i,a as t,F as n}from"./jsx-runtime-670450c2.js";import{a as l}from"./Import-590b3967.js";import{M as a,C as c}from"./index-b65a8c5e.js";import{e as s}from"./AnalyticalTable.stories-d415b255.js";import{u as p}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-G4YQS2SV-8114ca7d.js";import"./iframe-3130ba19.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./delete-16a185eb.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Icons-03f19c25.js";import"./decline-48ecb430.js";import"./ListItem-5a448e1e.js";import"./Integer-5fa4beea.js";import"./MarkedEvents-0e37da6f.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./class-map-60f59e95.js";import"./FocusableElements-13161f05.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./ListItemBase-a71fd372.js";import"./ItemNavigation-a1cb3c20.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-98652d50.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-344b418d.js";import"./Label-f9741f9c.js";import"./WrappingType-b81e595a.js";import"./RadioButton-bb0fefa8.js";import"./ValueState-2c5e5904.js";import"./CheckBox-5c169af0.js";import"./accept-39710bd2.js";import"./Button-981a9381.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-dcb3f847.js";import"./settings-6ab1e637.js";import"./index-7ac1a15f.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-fdda04bc.js";import"./I18nContext-bef5b452.js";import"./useIsomorphicId-78860c77.js";import"./useIsRTL-2dc6fd10.js";import"./index-99d317a4.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./filter-c9ac4870.js";import"./group-2-8b8b441b.js";import"./index-8530e13b.js";import"./Popover-ff8f156e.js";import"./stopPropagation-da74d54e.js";import"./index-766bb1f0.js";import"./CustomListItem-0552ac45.js";import"./index-db144a7b.js";import"./index-07287e89.js";import"./index-13dd251d.js";import"./StandardListItem-d042803f.js";import"./Avatar-f74ae24a.js";import"./employee-dc85b60f.js";import"./ValueState-ab6838cc.js";import"./index-52941328.js";import"./Input-85591656.js";import"./Suggestions.css-5424627b.js";import"./ResponsivePopoverCommon.css-c2b66233.js";import"./ValueStateMessage.css-88180c67.js";import"./navigation-down-arrow-91f758fd.js";import"./navigation-right-arrow-2bfe54ed.js";import"./useCurrentTheme-a028eacb.js";import"./addCustomCSSWithScoping-6aa4fe38.js";import"./index-6c60b165.js";import"./index-b3213c5e.js";import"./index-e452969c.js";import"./GlobalStyleClasses-7209358d.js";import"./index-433e0376.js";import"./Title-256f7c0a.js";import"./debounce-5c77766a.js";import"./index-6fe70477.js";import"./slim-arrow-down-fdce342b.js";import"./GroupHeaderListItem-7623f393.js";import"./Tokenizer-30e438e3.js";import"./ScrollEnablement-94c75092.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-f9a06272.js";import"./Dialog-30b3aaf0.js";import"./Token-577c66a1.js";import"./ToggleButton-00cd8a20.js";import"./ComboBoxItem-6efaa886.js";import"./index-cf3e9acb.js";import"./index-be229361.js";import"./InvisibleMessage-0cf18861.js";import"./index-a54a91f3.js";import"./index-4dada96b.js";import"./index-ec5bf915.js";function zi(r={}){const{wrapper:e}=Object.assign({},p(),r.components);return e?i(e,Object.assign({},r,{children:i(m,{})})):m();function m(){const o=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre"},p(),r.components);return t(n,{children:[i(a,{title:"Data Display / AnalyticalTable / Plugin: useOnColumnResize"}),`
`,i(o.h1,{children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,i(l,{moduleName:"AnalyticalTableHooks",packageName:"@ui5/webcomponents-react"}),`
`,t(o.p,{children:["The ",i(o.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,i(o.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",i(o.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,t(o.p,{children:[i(o.code,{children:"options"}),":"]}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[i(o.code,{children:"liveUpdate"}),": If ",i(o.code,{children:"liveUpdate"})," is ",i(o.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",i(o.code,{children:"options.wait"})," delay."]}),`
`,t(o.li,{children:[i(o.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",t(o.strong,{children:["Defaults to ",i(o.code,{children:"100"})]}),". (Only has an effect if ",i(o.code,{children:"liveUpdate"})," is ",i(o.code,{children:"true"}),")"]}),`
`]}),`
`,i(o.h2,{children:"Example"}),`
`,i(c,{sourceState:"none",of:s}),`
`,i(o.pre,{children:i(o.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = (e) => {
    console.log(e.columnWidth, e.header);
  };
  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={[
        AnalyticalTableHooks.useOnColumnResize(handleColumResize, {
          liveUpdate: false,
          wait: 100
        })
      ]}
    />
  );
};
`})})]})}}export{zi as default};
//# sourceMappingURL=PluginOnColumnResize-ba045908.js.map
