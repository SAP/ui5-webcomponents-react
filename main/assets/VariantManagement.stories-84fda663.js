import{A as C}from"./DomRefTable.module-30f3bd43.js";import{D as O}from"./DocsHeader-ce92ab0e.js";import{F as A}from"./Footer-c8244a58.js";import{a as r,j as e,F as P}from"./jsx-runtime-670450c2.js";import{V as m,a as t}from"./VariantItem-721b08fe.js";import{r as d}from"./index-f1f749bf.js";import{M as T,C as v,i as g}from"./index-02423177.js";import"./chunk-4XCFV5WA-0265c491.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{P as I}from"./Popover-e3c8ecec.js";import{T as f}from"./Title-fb9c1aba.js";import{V as S}from"./ValueState-ab6838cc.js";import{u as w}from"./index-4fb8b842.js";import{M as N}from"./index-9d4f0257.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./MarkedEvents-f33713fa.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./index-bd49c23e.js";import"./Label-aecaa844.js";import"./class-map-a4eccd4f.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-0db28cca.js";import"./UnableToLoad-920aada0.js";import"./index-8d22ac70.js";import"./ResizeHandler-da7c4a52.js";import"./i18n-defaults-b5ead0af.js";import"./parameters-bundle.css-0c974f42.js";import"./navigation-down-arrow-ae903a04.js";import"./Icons-0f428547.js";import"./search-6cc41abf.js";import"./decline-2be11c85.js";import"./index-99d317a4.js";import"./index-96c5f47c.js";import"./i18n-defaults-15e6b3e0.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./Button-6ca701be.js";import"./index-79b906ee.js";import"./Bar-c4636896.js";import"./fastNavigation-ebf07f1c.js";import"./index-373748a1.js";import"./index-13e5e145.js";import"./Dialog-32c7096e.js";import"./Integer-44c9be94.js";import"./FocusableElements-679e4fb9.js";import"./getActiveElement-bcae01ed.js";import"./style-map-f4770aeb.js";import"./ValueState-2c5e5904.js";import"./index-d9dc316c.js";import"./ItemNavigation-1cd3f78d.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./unfavorite-52b25276.js";import"./index-55b64997.js";import"./index-f7b539e8.js";import"./index-83ae6b46.js";import"./Input-2c7cf5dc.js";import"./Suggestions.css-af656ac7.js";import"./ResponsivePopoverCommon.css-1186d6a9.js";import"./ValueStateMessage.css-57760618.js";import"./index-98fe2eb6.js";import"./RadioButton-71b27f26.js";import"./useIsomorphicId-78860c77.js";import"./index-8ff8581d.js";import"./index-723c1fef.js";import"./ResponsivePopover-9c15f502.js";import"./index-3f70bd96.js";import"./ListItemBase-4b52d1f0.js";import"./index-eb6fe343.js";import"./StandardListItem-ddbc126c.js";import"./ListItem-bdb92faa.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";const p=({selectedByIndex:n=1})=>{const[o,l]=d.useState(void 0),[a,s]=d.useState("Only alphanumeric chars in Save View input"),[c,h]=d.useState(void 0),[b,D]=d.useState("Max 12 chars");return r(m,{onSaveAs:i=>{s(i.detail.children)},onSaveManageViews:i=>{const V=i.detail.updatedVariants.find(x=>x["data-custom-manage-views"]);!c&&V&&D(V.children)},children:[e(t,{"data-custom-save-view":!0,selected:n===0,saveViewInputProps:{valueState:o,valueStateMessage:o?e("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:i=>{i.target.value.match(/^[a-z0-9\s]+$/i)?(i.isInvalid=!1,l(void 0)):(i.isInvalid=!0,l(S.Error))},"data-testid":"alphanumeric"},children:a}),e(t,{"data-custom-manage-views":!0,selected:n===1,manageViewsInputProps:{valueState:c,valueStateMessage:c?e("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:i=>{i.target.value.length>12?(i.isInvalid=!0,h(S.Error)):(i.isInvalid=!1,h(void 0))},"data-testid":"12chars"},children:b})]})};try{p.displayName="VariantManagementWithCustomValidation",p.__docgenInfo={description:"",displayName:"VariantManagementWithCustomValidation",props:{selectedByIndex:{defaultValue:{value:"1"},description:"",name:"selectedByIndex",required:!1,type:{name:"number"}}}}}catch{}function E(n={}){const{wrapper:o}=Object.assign({},w(),n.components);return o?e(o,{...n,children:e(l,{})}):l();function l(){const a=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre"},w(),n.components);return r(P,{children:[e(T,{title:"Inputs / VariantManagement",component:m,subcomponents:{VariantItem:t},args:{placement:I.Bottom,level:f.H4}}),`
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
//# sourceMappingURL=VariantManagement.stories-84fda663.js.map
