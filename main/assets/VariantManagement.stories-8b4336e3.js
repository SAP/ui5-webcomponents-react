import{A as C}from"./DomRefTable.module-fc3adb69.js";import{D as O}from"./DocsHeader-0babad0b.js";import{F as A}from"./Footer-9811f5fd.js";import{a as r,j as e,F as P}from"./jsx-runtime-670450c2.js";import{V as m,a as t}from"./VariantItem-176d9ec4.js";import{r as d}from"./index-f1f749bf.js";import{M as T,C as v,j as g}from"./index-52818a88.js";import"./chunk-G4YQS2SV-4e89864b.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{P as I}from"./Popover-84c1d886.js";import{T as f}from"./Title-4c33d979.js";import{V as S}from"./ValueState-ab6838cc.js";import{u as w}from"./index-4fb8b842.js";import{M as N}from"./index-9f015d05.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-750c779c.js";import"./TableOfContent-cf1a2a36.js";import"./index-83697ef5.js";import"./iframe-f6b40636.js";import"../sb-preview/runtime.mjs";import"./UI5Element-4f8793c9.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-8627ed01.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-c82262ef.js";import"./WrappingType-b81e595a.js";import"./index-f5a9de31.js";import"./Label-27ec0466.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./Footer.module-c4f3b823.js";import"./index-e26e3e86.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./Integer-d9976c13.js";import"./ResizeHandler-1dae7180.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./UnableToLoad-2e4ee990.js";import"./index-ee1ce1be.js";import"./languageAware-b2dd96bd.js";import"./i18n-defaults-2bde2064.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./navigation-down-arrow-0fc02482.js";import"./Icons-ad6f0d24.js";import"./search-d97d6077.js";import"./decline-e7438d7e.js";import"./index-99d317a4.js";import"./index-96c5f47c.js";import"./i18n-defaults-1f918df5.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./Button-8fbc19ea.js";import"./index-3d841662.js";import"./Bar-b2920579.js";import"./fastNavigation-8b41cdda.js";import"./index-a5b127f3.js";import"./index-3f288ba3.js";import"./Dialog-846d1fb6.js";import"./ValueState-2c5e5904.js";import"./index-3008ed82.js";import"./ItemNavigation-4c4dc0f2.js";import"./TabbableElements-c3d95d8d.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-fb622f11.js";import"./CheckBox-d7672a83.js";import"./accept-a7f2d970.js";import"./unfavorite-2024d55e.js";import"./index-a98de32b.js";import"./index-52466cc3.js";import"./index-d7824716.js";import"./Input-918ad206.js";import"./Suggestions.css-188a0406.js";import"./ResponsivePopoverCommon.css-b406725f.js";import"./ValueStateMessage.css-e8026e78.js";import"./index-3a6b92f4.js";import"./RadioButton-5efc72cd.js";import"./useIsomorphicId-78860c77.js";import"./index-4929877b.js";import"./index-374a204f.js";import"./ResponsivePopover-1e5d6f7e.js";import"./index-669a4bf4.js";import"./ListItemBase-c15c02a7.js";import"./index-e91f0363.js";import"./StandardListItem-089df25b.js";import"./ListItem-efa04b9c.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-fdb534c0.js";import"./Avatar-6d4f44b6.js";import"./employee-fe809d4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";const p=({selectedByIndex:n=1})=>{const[o,l]=d.useState(void 0),[a,s]=d.useState("Only alphanumeric chars in Save View input"),[c,h]=d.useState(void 0),[b,D]=d.useState("Max 12 chars");return r(m,{onSaveAs:i=>{s(i.detail.children)},onSaveManageViews:i=>{const V=i.detail.updatedVariants.find(x=>x["data-custom-manage-views"]);!c&&V&&D(V.children)},children:[e(t,{"data-custom-save-view":!0,selected:n===0,saveViewInputProps:{valueState:o,valueStateMessage:o?e("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:i=>{i.target.value.match(/^[a-z0-9\s]+$/i)?(i.isInvalid=!1,l(void 0)):(i.isInvalid=!0,l(S.Error))},"data-testid":"alphanumeric"},children:a}),e(t,{"data-custom-manage-views":!0,selected:n===1,manageViewsInputProps:{valueState:c,valueStateMessage:c?e("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:i=>{i.target.value.length>12?(i.isInvalid=!0,h(S.Error)):(i.isInvalid=!1,h(void 0))},"data-testid":"12chars"},children:b})]})};try{p.displayName="VariantManagementWithCustomValidation",p.__docgenInfo={description:"",displayName:"VariantManagementWithCustomValidation",props:{selectedByIndex:{defaultValue:{value:"1"},description:"",name:"selectedByIndex",required:!1,type:{name:"number"}}}}}catch{}function E(n={}){const{wrapper:o}=Object.assign({},w(),n.components);return o?e(o,{...n,children:e(l,{})}):l();function l(){const a=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre"},w(),n.components);return r(P,{children:[e(T,{title:"Inputs / VariantManagement",component:m,subcomponents:{VariantItem:t},args:{placement:I.Bottom,level:f.H4}}),`
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
}`}};const u={title:"Inputs / VariantManagement",component:m,subcomponents:{VariantItem:t},args:{placement:I.Bottom,level:f.H4},tags:["stories-mdx"],includeStories:["defaultStory","withCustomValidation"]};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:E};const kt=["defaultStory","withCustomValidation"];export{kt as __namedExportsOrder,u as default,y as defaultStory,M as withCustomValidation};
//# sourceMappingURL=VariantManagement.stories-8b4336e3.js.map
