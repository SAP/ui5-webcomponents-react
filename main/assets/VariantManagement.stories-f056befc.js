import{A as C}from"./DomRefTable.module-bd36e05c.js";import{D as O}from"./DocsHeader-9fd71d3c.js";import{F as A}from"./Footer-ee27f3ce.js";import{a as r,j as e,F as P}from"./jsx-runtime-670450c2.js";import{V as m,a as t}from"./VariantItem-363c2721.js";import{r as d}from"./index-f1f749bf.js";import{M as T,C as v,j as g}from"./index-737ca4e9.js";import"./chunk-G4YQS2SV-cccade09.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{P as I}from"./Popover-3083ea67.js";import{T as f}from"./Title-cb40e614.js";import{V as S}from"./ValueState-ab6838cc.js";import{u as w}from"./index-4fb8b842.js";import{M as N}from"./index-d8896f41.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-85afa49f.js";import"./TableOfContent-5141cde3.js";import"./index-35b2808f.js";import"./iframe-21215c6d.js";import"../sb-preview/runtime.mjs";import"./UI5Element-eb05fed8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-8627ed01.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-c82262ef.js";import"./WrappingType-b81e595a.js";import"./index-26a7c441.js";import"./Label-6255dce9.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./Footer.module-c4f3b823.js";import"./index-c3d56bd5.js";import"./PopupsCommon.css-f9f23bc7.js";import"./FocusableElements-44b79fcc.js";import"./Integer-d9976c13.js";import"./ResizeHandler-a25182c3.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./UnableToLoad-c89e78d0.js";import"./index-57f60170.js";import"./languageAware-b2dd96bd.js";import"./i18n-defaults-2bde2064.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./navigation-down-arrow-7619e15d.js";import"./Icons-8637bdfe.js";import"./search-cbb5fba0.js";import"./decline-0a22f866.js";import"./index-99d317a4.js";import"./index-96c5f47c.js";import"./i18n-defaults-5a38197e.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./Button-8cfaf72a.js";import"./index-44510fac.js";import"./Bar-08d73517.js";import"./fastNavigation-8b41cdda.js";import"./index-895cacd6.js";import"./index-a905da25.js";import"./Dialog-fddee574.js";import"./ValueState-2c5e5904.js";import"./index-e6a58533.js";import"./ItemNavigation-c55a00e7.js";import"./TabbableElements-297bf359.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-a479e128.js";import"./CheckBox-9723ff68.js";import"./accept-c855adf5.js";import"./unfavorite-355a7c40.js";import"./index-124e54e7.js";import"./index-f3413d38.js";import"./index-13a81b30.js";import"./Input-0fd7f96f.js";import"./Suggestions.css-6778036a.js";import"./ResponsivePopoverCommon.css-0f307ec8.js";import"./ValueStateMessage.css-b9603d7a.js";import"./index-50c75621.js";import"./RadioButton-f9cd6c52.js";import"./useIsomorphicId-78860c77.js";import"./index-703fe106.js";import"./index-0387f220.js";import"./ResponsivePopover-5610aa89.js";import"./index-6b5b63b9.js";import"./ListItemBase-734ff571.js";import"./index-9e8daaf3.js";import"./StandardListItem-b41e01b6.js";import"./ListItem-3abb0ad1.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ccfb1ccc.js";import"./Avatar-e5971732.js";import"./employee-dc8e6c76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";const p=({selectedByIndex:n=1})=>{const[o,l]=d.useState(void 0),[a,s]=d.useState("Only alphanumeric chars in Save View input"),[c,h]=d.useState(void 0),[b,D]=d.useState("Max 12 chars");return r(m,{onSaveAs:i=>{s(i.detail.children)},onSaveManageViews:i=>{const V=i.detail.updatedVariants.find(x=>x["data-custom-manage-views"]);!c&&V&&D(V.children)},children:[e(t,{"data-custom-save-view":!0,selected:n===0,saveViewInputProps:{valueState:o,valueStateMessage:o?e("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:i=>{i.target.value.match(/^[a-z0-9\s]+$/i)?(i.isInvalid=!1,l(void 0)):(i.isInvalid=!0,l(S.Error))},"data-testid":"alphanumeric"},children:a}),e(t,{"data-custom-manage-views":!0,selected:n===1,manageViewsInputProps:{valueState:c,valueStateMessage:c?e("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:i=>{i.target.value.length>12?(i.isInvalid=!0,h(S.Error)):(i.isInvalid=!1,h(void 0))},"data-testid":"12chars"},children:b})]})};try{p.displayName="VariantManagementWithCustomValidation",p.__docgenInfo={description:"",displayName:"VariantManagementWithCustomValidation",props:{selectedByIndex:{defaultValue:{value:"1"},description:"",name:"selectedByIndex",required:!1,type:{name:"number"}}}}}catch{}function E(n={}){const{wrapper:o}=Object.assign({},w(),n.components);return o?e(o,{...n,children:e(l,{})}):l();function l(){const a=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre"},w(),n.components);return r(P,{children:[e(T,{title:"Inputs / VariantManagement",component:m,subcomponents:{VariantItem:t},args:{placement:I.Bottom,level:f.H4}}),`
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
//# sourceMappingURL=VariantManagement.stories-f056befc.js.map
