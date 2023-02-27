import{A as C}from"./DomRefTable.module-bd2f6310.js";import{D as O}from"./DocsHeader-7b277ff6.js";import{F as A}from"./Footer-a200614f.js";import{a as r,j as e,F as P}from"./jsx-runtime-670450c2.js";import{V as m,a as t}from"./VariantItem-a8b6c656.js";import{r as d}from"./index-f1f749bf.js";import{M as T,C as v,i as g}from"./index-08f5a92a.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{P as I}from"./Popover-5336e3a5.js";import{T as f}from"./Title-18f6d5a1.js";import{V as S}from"./ValueState-ab6838cc.js";import{u as w}from"./index-4fb8b842.js";import{M as N}from"./index-c79180df.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./iframe-baaa6734.js";import"../sb-preview/runtime.mjs";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./MarkedEvents-f33713fa.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./index-998f859a.js";import"./Label-6707bdfc.js";import"./class-map-abcca105.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-65416cbf.js";import"./UnableToLoad-b4495f8b.js";import"./index-41f6a386.js";import"./ResizeHandler-c56abc92.js";import"./i18n-defaults-b5ead0af.js";import"./parameters-bundle.css-0c974f42.js";import"./navigation-down-arrow-131293e3.js";import"./Icons-5bcf1e3f.js";import"./search-d68d0f2f.js";import"./decline-ff534003.js";import"./index-99d317a4.js";import"./index-96c5f47c.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./Button-e1b15b5b.js";import"./index-64b8a720.js";import"./Bar-b4a14d85.js";import"./fastNavigation-ebf07f1c.js";import"./index-b7f80a1d.js";import"./index-26f1131d.js";import"./Dialog-fe19aed2.js";import"./Integer-a72984d1.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./style-map-7b3eb5df.js";import"./ValueState-2c5e5904.js";import"./index-04b4598b.js";import"./ItemNavigation-4b509b49.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-39ca40d3.js";import"./CheckBox-61258afb.js";import"./accept-70258933.js";import"./unfavorite-55bdb929.js";import"./index-04732c2a.js";import"./index-4e221527.js";import"./index-f07d6498.js";import"./Input-feb6db44.js";import"./Suggestions.css-1f63061d.js";import"./ResponsivePopoverCommon.css-bc05f183.js";import"./ValueStateMessage.css-6e86a950.js";import"./index-a999020d.js";import"./RadioButton-a7b6e11f.js";import"./useIsomorphicId-78860c77.js";import"./index-349afbe4.js";import"./index-28f555d5.js";import"./ResponsivePopover-2f2e4816.js";import"./index-bd274735.js";import"./ListItemBase-948677f0.js";import"./index-7c687405.js";import"./StandardListItem-b3f5cad6.js";import"./ListItem-d264515d.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./Avatar-68f47788.js";import"./employee-10cd14ab.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";const p=({selectedByIndex:n=1})=>{const[o,l]=d.useState(void 0),[a,s]=d.useState("Only alphanumeric chars in Save View input"),[c,h]=d.useState(void 0),[b,D]=d.useState("Max 12 chars");return r(m,{onSaveAs:i=>{s(i.detail.children)},onSaveManageViews:i=>{const V=i.detail.updatedVariants.find(x=>x["data-custom-manage-views"]);!c&&V&&D(V.children)},children:[e(t,{"data-custom-save-view":!0,selected:n===0,saveViewInputProps:{valueState:o,valueStateMessage:o?e("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:i=>{i.target.value.match(/^[a-z0-9\s]+$/i)?(i.isInvalid=!1,l(void 0)):(i.isInvalid=!0,l(S.Error))},"data-testid":"alphanumeric"},children:a}),e(t,{"data-custom-manage-views":!0,selected:n===1,manageViewsInputProps:{valueState:c,valueStateMessage:c?e("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:i=>{i.target.value.length>12?(i.isInvalid=!0,h(S.Error)):(i.isInvalid=!1,h(void 0))},"data-testid":"12chars"},children:b})]})};try{p.displayName="VariantManagementWithCustomValidation",p.__docgenInfo={description:"",displayName:"VariantManagementWithCustomValidation",props:{selectedByIndex:{defaultValue:{value:"1"},description:"",name:"selectedByIndex",required:!1,type:{name:"number"}}}}}catch{}function E(n={}){const{wrapper:o}=Object.assign({},w(),n.components);return o?e(o,{...n,children:e(l,{})}):l();function l(){const a=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre"},w(),n.components);return r(P,{children:[e(T,{title:"Inputs / VariantManagement",component:m,subcomponents:{VariantItem:t},args:{placement:I.Bottom,level:f.H4}}),`
`,e(O,{}),`
`,e("br",{}),`
`,e(a.h2,{children:"Example"}),`
`,e(v,{children:e(g,{name:"Default",children:s=>r(m,{...s,children:[e(t,{inputProps:{valueState:"Error",onInput:console.log},children:"Default VariantItem"}),e(t,{selected:!0,children:"Selected"}),e(t,{author:"SAP",children:"Author"}),e(t,{favorite:!0,children:"Favorite"}),e(t,{isDefault:!0,children:"IsDefault"}),e(t,{favorite:!0,labelReadOnly:!0,children:"Favorite & labelReadOnly"}),e(t,{applyAutomatically:!0,children:"ApplyAutomatically"}),e(t,{readOnly:!0,children:"ReadOnly"}),e(t,{global:!0,children:"Global"}),e(t,{global:!0,readOnly:!0,children:"Global & readOnly"}),e(t,{global:!0,children:"Not deletable -> global"}),e(t,{hideDelete:!0,children:"Not deletable -> hideDelete"}),e(t,{hideDelete:!1,global:!0,children:"Deletable -> hideDelete: false, global: true"})]})})}),`
`,e(a.h2,{children:"Properties"}),`
`,e(C,{story:"Default"}),`
`,e(a.h1,{children:"More Examples"}),`
`,e(a.h2,{children:"VariantManagement with custom Input"}),`
`,r(a.p,{children:['You can customize the inputs inside the configuration dialogs ("Save View" and "Manage Views") by leveraging the corresponding ',e(a.code,{children:"inputProps"})," prop (",e(a.code,{children:"saveViewInputProps"})," and ",e(a.code,{children:"manageViewsInputProps"}),") of the ",e(a.code,{children:"VariantItem"}),` component.
These props accept props of the `,e(a.code,{children:"Input"})," component with which you are able to overwrite internal implementations. E.g. ",e(a.code,{children:"valueState"})," and ",e(a.code,{children:"valueState"})," message."]}),`
`,r(a.p,{children:[e(a.strong,{children:"Note:"})," To prevent internal logic from being executed on save click, you can mark the ",e(a.code,{children:"onInput"})," event of the corresponding ",e(a.code,{children:"Input"})," component as invalid by setting ",e(a.code,{children:"event.isInvalid = true"})," inside the respective handler."]}),`
`,e(N,{hideCloseButton:!0,children:"It is possible to overwrite internally used props. Please use with caution!"}),`
`,e(v,{children:e(g,{name:"with custom validation",withSource:"none",children:s=>e(p,{...s})})}),`
`,e(a.h3,{children:"Code"}),`
`,r("details",{style:{marginBlockEnd:"2rem"},children:[e("summary",{children:"Show Code"}),e(a.pre,{children:e(a.code,{className:"language-jsx",children:`export const VariantManagementWithCustomValidation = () => {
  const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
  const [customSaveViewVariantText, setCustomSaveViewVariantText] = useState(
    'Only alphanumeric chars in Save View input'
  );
  const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
  const [customManageViewsVariantText, setCustomManageViewsVariantText] = useState('Max 12 chars');

  const handleSaveViewInput = (e) => {
    // only allow alphanumeric and space characters
    if (!e.target.value.match(/^[a-z0-9\\s]+$/i)) {
      // mark variant as invalid (prevent internal logic from being applied)
      e.isInvalid = true;
      setValueStateSaveView(ValueState.Error);
    } else {
      // mark variant as valid again
      e.isInvalid = false;
      setValueStateSaveView(undefined);
    }
  };
  const handleSaveAs = (e) => {
    setCustomSaveViewVariantText(e.detail.children);
  };

  const handleManageViewInput = (e) => {
    // only 12 or fewer characters
    if (e.target.value.length > 12) {
      // mark variant as invalid (prevent internal logic from being applied)
      e.isInvalid = true;
      setValueStateManageViews(ValueState.Error);
    } else {
      // mark variant as valid again
      e.isInvalid = false;
      setValueStateManageViews(undefined);
    }
  };
  const handleSaveManageViews = (e) => {
    // if is custom manage view variant and is not in error state, set children to new value
    const isCustomManageViewsItem = e.detail.updatedVariants.find((item) => item['data-custom-manage-views']);
    if (!valueStateManageViews && isCustomManageViewsItem) {
      setCustomManageViewsVariantText(isCustomManageViewsItem.children);
    }
  };
  return (
    <VariantManagement onSaveAs={handleSaveAs} onSaveManageViews={handleSaveManageViews}>
      <VariantItem
        data-custom-save-view
        saveViewInputProps={{
          valueState: valueStateSaveView,
          valueStateMessage: valueStateSaveView ? (
            <div>Only alphanumeric and space characters allowed!</div>
          ) : undefined,
          onInput: handleSaveViewInput
        }}
      >
        {customSaveViewVariantText}
      </VariantItem>
      <VariantItem
        data-custom-manage-views
        selected
        manageViewsInputProps={{
          valueState: valueStateManageViews,
          valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
          onInput: handleManageViewInput
        }}
      >
        {customManageViewsVariantText}
      </VariantItem>
    </VariantManagement>
  );
};
`})})]}),`
`,e(A,{})]})}}const y=n=>r(m,{...n,children:[e(t,{inputProps:{valueState:"Error",onInput:console.log},children:"Default VariantItem"}),e(t,{selected:!0,children:"Selected"}),e(t,{author:"SAP",children:"Author"}),e(t,{favorite:!0,children:"Favorite"}),e(t,{isDefault:!0,children:"IsDefault"}),e(t,{favorite:!0,labelReadOnly:!0,children:"Favorite & labelReadOnly"}),e(t,{applyAutomatically:!0,children:"ApplyAutomatically"}),e(t,{readOnly:!0,children:"ReadOnly"}),e(t,{global:!0,children:"Global"}),e(t,{global:!0,readOnly:!0,children:"Global & readOnly"}),e(t,{global:!0,children:"Not deletable -> global"}),e(t,{hideDelete:!0,children:"Not deletable -> hideDelete"}),e(t,{hideDelete:!1,global:!0,children:"Deletable -> hideDelete: false, global: true"})]});y.storyName="Default";y.parameters={storySource:{source:`props => {
  return <VariantManagement {...props}>
          <VariantItem inputProps={{
      valueState: "Error",
      onInput: console.log
    }}>Default VariantItem</VariantItem>
          <VariantItem selected>Selected</VariantItem>
          <VariantItem author="SAP">Author</VariantItem>
          <VariantItem favorite>Favorite</VariantItem>
          <VariantItem isDefault>IsDefault</VariantItem>
          <VariantItem favorite labelReadOnly>
            Favorite & labelReadOnly
          </VariantItem>
          <VariantItem applyAutomatically>ApplyAutomatically</VariantItem>
          <VariantItem readOnly>ReadOnly</VariantItem>
          <VariantItem global>Global</VariantItem>
          <VariantItem global readOnly>
            Global & readOnly
          </VariantItem>
          <VariantItem global>{\`Not deletable -> global\`}</VariantItem>
          <VariantItem hideDelete>{\`Not deletable -> hideDelete\`}</VariantItem>
          <VariantItem hideDelete={false} global>
            {\`Deletable -> hideDelete: false, global: true\`}
          </VariantItem>
        </VariantManagement>;
}`}};const M=n=>e(p,{...n});M.storyName="with custom validation";M.parameters={storySource:{source:`props => {
  return <VariantManagementWithCustomValidation {...props} />;
}`}};const u={title:"Inputs / VariantManagement",component:m,subcomponents:{VariantItem:t},args:{placement:I.Bottom,level:f.H4},tags:["stories-mdx"],includeStories:["defaultStory","withCustomValidation"]};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:E};const _t=["defaultStory","withCustomValidation"];export{_t as __namedExportsOrder,u as default,y as defaultStory,M as withCustomValidation};
//# sourceMappingURL=VariantManagement.stories-177d5d5e.js.map
