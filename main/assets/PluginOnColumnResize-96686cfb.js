import{j as i,a as t,F as n}from"./jsx-runtime-670450c2.js";import{a as l}from"./Import-c0095e75.js";import{M as a,C as c}from"./index-4c1eaed3.js";import{e as s}from"./AnalyticalTable.stories-c3b9fb29.js";import{u as p}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4XCFV5WA-7b93fc87.js";import"./iframe-abee3a6a.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./delete-0d639d92.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Icons-5bcf1e3f.js";import"./decline-ff534003.js";import"./ListItem-d264515d.js";import"./Integer-a72984d1.js";import"./MarkedEvents-f33713fa.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./class-map-abcca105.js";import"./FocusableElements-5a723910.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./ListItemBase-948677f0.js";import"./ItemNavigation-4b509b49.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-39ca40d3.js";import"./Label-6707bdfc.js";import"./WrappingType-b81e595a.js";import"./RadioButton-a7b6e11f.js";import"./ValueState-2c5e5904.js";import"./CheckBox-61258afb.js";import"./accept-70258933.js";import"./Button-e1b15b5b.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./settings-259db384.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./useIsomorphicId-78860c77.js";import"./useIsRTL-fcdcb328.js";import"./index-99d317a4.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./filter-6ced0fd8.js";import"./group-2-2d57a811.js";import"./index-7f5e74af.js";import"./Popover-5336e3a5.js";import"./stopPropagation-da74d54e.js";import"./index-29969d3c.js";import"./CustomListItem-c5403a30.js";import"./index-2b9f02fd.js";import"./index-79349d08.js";import"./index-55c83f68.js";import"./StandardListItem-b3f5cad6.js";import"./Avatar-68f47788.js";import"./employee-10cd14ab.js";import"./ValueState-ab6838cc.js";import"./index-85f68b06.js";import"./Input-feb6db44.js";import"./Suggestions.css-1f63061d.js";import"./ResponsivePopoverCommon.css-bc05f183.js";import"./ValueStateMessage.css-6e86a950.js";import"./navigation-down-arrow-131293e3.js";import"./navigation-right-arrow-9e098972.js";import"./useCurrentTheme-cb0d6a4d.js";import"./addCustomCSSWithScoping-b4da4774.js";import"./index-59996dda.js";import"./index-0d4b1695.js";import"./index-b8dd7dd3.js";import"./GlobalStyleClasses-7209358d.js";import"./index-1f160d88.js";import"./Title-18f6d5a1.js";import"./debounce-5c77766a.js";import"./index-f8bdbe92.js";import"./slim-arrow-down-f36436a6.js";import"./GroupHeaderListItem-f153c043.js";import"./Tokenizer-9c0eac8b.js";import"./ScrollEnablement-fd5196de.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-2f2e4816.js";import"./Dialog-fe19aed2.js";import"./Token-4adcd12f.js";import"./ToggleButton-8db86c1e.js";import"./ComboBoxItem-9c4ebead.js";import"./index-0ae5dc05.js";import"./index-b4b29afd.js";import"./InvisibleMessage-7e46d068.js";import"./index-a1d2e8f9.js";import"./index-1466178f.js";import"./index-b411694d.js";function Ci(r={}){const{wrapper:e}=Object.assign({},p(),r.components);return e?i(e,Object.assign({},r,{children:i(m,{})})):m();function m(){const o=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre"},p(),r.components);return t(n,{children:[i(a,{title:"Data Display / AnalyticalTable / Plugin: useOnColumnResize"}),`
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
`})})]})}}export{Ci as default};
//# sourceMappingURL=PluginOnColumnResize-96686cfb.js.map
