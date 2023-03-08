import{j as i,a as t,F as n}from"./jsx-runtime-670450c2.js";import{a as l}from"./Import-876b4260.js";import{M as a,C as c}from"./index-3c06dbbf.js";import{e as s}from"./AnalyticalTable.stories-db1d862d.js";import{u as p}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-QDOP3WTA-f3bba27c.js";import"./iframe-985506d1.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./delete-8606de50.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Icons-7b82f601.js";import"./decline-0a03b0b0.js";import"./ListItem-b545bc6e.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Integer-d9976c13.js";import"./MarkedEvents-8627ed01.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-c82262ef.js";import"./ListItemBase-9f62536c.js";import"./ResizeHandler-1fa8a094.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-0285a530.js";import"./FocusableElements-c2f39514.js";import"./PopupsCommon.css-ab0735c6.js";import"./Device-208919c6.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./class-map-5d8e4b2b.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-b3c085b8.js";import"./Label-040efebd.js";import"./WrappingType-b81e595a.js";import"./RadioButton-4ed70174.js";import"./ValueState-2c5e5904.js";import"./CheckBox-2761aa24.js";import"./accept-a98baca8.js";import"./Button-e27d9549.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./settings-d520586c.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./useIsomorphicId-78860c77.js";import"./useIsRTL-4cfef02b.js";import"./index-99d317a4.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./filter-39d2cc62.js";import"./group-2-ba4ad7cd.js";import"./index-fcbd00f3.js";import"./Popover-cbbb060d.js";import"./stopPropagation-da74d54e.js";import"./index-8d6d722c.js";import"./CustomListItem-5ecfef6c.js";import"./index-c06f9c29.js";import"./index-d271e323.js";import"./index-7579bc01.js";import"./StandardListItem-0b926583.js";import"./Avatar-358386af.js";import"./employee-98ce1b38.js";import"./ValueState-ab6838cc.js";import"./index-82e50a70.js";import"./Input-bd962308.js";import"./Suggestions.css-faab6178.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./navigation-down-arrow-b7eae25c.js";import"./navigation-right-arrow-d0296b1c.js";import"./useCurrentTheme-7c2a370e.js";import"./addCustomCSSWithScoping-4c0cdfa9.js";import"./index-3239045d.js";import"./index-7a2a7ca3.js";import"./index-bdd68347.js";import"./GlobalStyleClasses-7209358d.js";import"./index-37ce3651.js";import"./Title-b986a4bd.js";import"./debounce-5c77766a.js";import"./index-c2ef7c6d.js";import"./slim-arrow-down-068fe0af.js";import"./GroupHeaderListItem-cfdc2205.js";import"./Tokenizer-c66cf0a7.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-1b0c065e.js";import"./Dialog-0097f4e9.js";import"./Token-f75bc5af.js";import"./ToggleButton-09752afe.js";import"./ComboBoxFilter-ce703529.js";import"./index-386fa1ad.js";import"./index-97704c14.js";import"./InvisibleMessage-4a23efee.js";import"./index-4da8511e.js";import"./index-fb4370db.js";import"./index-1f9d4dd0.js";function zi(r={}){const{wrapper:e}=Object.assign({},p(),r.components);return e?i(e,Object.assign({},r,{children:i(m,{})})):m();function m(){const o=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre"},p(),r.components);return t(n,{children:[i(a,{title:"Data Display / AnalyticalTable / Plugin: useOnColumnResize"}),`
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
//# sourceMappingURL=PluginOnColumnResize-dd612364.js.map
