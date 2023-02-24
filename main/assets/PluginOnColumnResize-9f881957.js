import{j as i,a as t,F as n}from"./jsx-runtime-670450c2.js";import{a as l}from"./Import-60eb1828.js";import{M as a,C as c}from"./index-02423177.js";import{e as s}from"./AnalyticalTable.stories-37cc8359.js";import{u as p}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4XCFV5WA-0265c491.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./delete-00ccd5bc.js";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Icons-0f428547.js";import"./decline-2be11c85.js";import"./ListItem-bdb92faa.js";import"./Integer-44c9be94.js";import"./MarkedEvents-f33713fa.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./class-map-a4eccd4f.js";import"./FocusableElements-679e4fb9.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./MediaRange-25b98f31.js";import"./style-map-f4770aeb.js";import"./ListItemBase-4b52d1f0.js";import"./ItemNavigation-1cd3f78d.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./Label-aecaa844.js";import"./WrappingType-b81e595a.js";import"./RadioButton-71b27f26.js";import"./ValueState-2c5e5904.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./Button-6ca701be.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./settings-10d311b7.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-15e6b3e0.js";import"./I18nContext-bef5b452.js";import"./useIsomorphicId-78860c77.js";import"./useIsRTL-332a1bd9.js";import"./index-99d317a4.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./filter-8ff03253.js";import"./group-2-78f66802.js";import"./index-f7b539e8.js";import"./Popover-e3c8ecec.js";import"./stopPropagation-da74d54e.js";import"./index-d647b80a.js";import"./CustomListItem-d01b5a0b.js";import"./index-3f70bd96.js";import"./index-0db28cca.js";import"./index-eb6fe343.js";import"./StandardListItem-ddbc126c.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";import"./ValueState-ab6838cc.js";import"./index-83ae6b46.js";import"./Input-2c7cf5dc.js";import"./Suggestions.css-af656ac7.js";import"./ResponsivePopoverCommon.css-1186d6a9.js";import"./ValueStateMessage.css-57760618.js";import"./navigation-down-arrow-ae903a04.js";import"./navigation-right-arrow-7cd2a198.js";import"./useCurrentTheme-91c398c9.js";import"./addCustomCSSWithScoping-0b6cdd3f.js";import"./index-373748a1.js";import"./index-562ebeba.js";import"./index-55b64997.js";import"./GlobalStyleClasses-7209358d.js";import"./index-8ff8581d.js";import"./Title-fb9c1aba.js";import"./debounce-5c77766a.js";import"./index-c692f396.js";import"./slim-arrow-down-27f985c3.js";import"./GroupHeaderListItem-eecb05a0.js";import"./Tokenizer-d0ae71b9.js";import"./ScrollEnablement-73e19dd8.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-9c15f502.js";import"./Dialog-32c7096e.js";import"./Token-e24db0df.js";import"./ToggleButton-78a2795e.js";import"./ComboBoxItem-3af4ca11.js";import"./index-0d569391.js";import"./index-eed6a6ce.js";import"./InvisibleMessage-12136b10.js";import"./index-5a4b75c6.js";import"./index-dac912d1.js";import"./index-bd49c23e.js";function Ci(r={}){const{wrapper:e}=Object.assign({},p(),r.components);return e?i(e,Object.assign({},r,{children:i(m,{})})):m();function m(){const o=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre"},p(),r.components);return t(n,{children:[i(a,{title:"Data Display / AnalyticalTable / Plugin: useOnColumnResize"}),`
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
//# sourceMappingURL=PluginOnColumnResize-9f881957.js.map
