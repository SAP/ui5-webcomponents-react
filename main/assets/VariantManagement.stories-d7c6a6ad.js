import{j as e}from"./jsx-runtime-5926aa06.js";import{r as l}from"./index-ebeaab24.js";import{V as o,a}from"./VariantItem-1ba3b6f5.js";import{P as T}from"./Popover-76648ec8.js";import{T as O}from"./Title-c6699a53.js";import{V}from"./ValueState-ab6838cc.js";const C={title:"Inputs / VariantManagement",component:o,args:{placement:T.Bottom,level:O.H4}},n={render:r=>e.jsxs(o,{...r,children:[e.jsx(a,{children:"Default VariantItem"}),e.jsx(a,{selected:!0,children:"Selected"}),e.jsx(a,{author:"SAP",children:"Author"}),e.jsx(a,{favorite:!0,children:"Favorite"}),e.jsx(a,{isDefault:!0,children:"IsDefault"}),e.jsx(a,{favorite:!0,labelReadOnly:!0,children:"Favorite & labelReadOnly"}),e.jsx(a,{applyAutomatically:!0,children:"ApplyAutomatically"}),e.jsx(a,{applyAutomatically:!0,applyAutomaticallyText:"Describe your exceptions that deviate from the standard behavior here.",children:"applyAutomatically & applyAutomaticallyText"}),e.jsx(a,{readOnly:!0,children:"ReadOnly"}),e.jsx(a,{global:!0,children:"Global"}),e.jsx(a,{global:!0,readOnly:!0,children:"Global & readOnly"}),e.jsx(a,{global:!0,children:"Not deletable -> global"}),e.jsx(a,{hideDelete:!0,children:"Not deletable -> hideDelete"}),e.jsx(a,{hideDelete:!1,global:!0,children:"Deletable -> hideDelete: false, global: true"})]})},i={render:({selectedByIndex:r=1})=>{const[d,u]=l.useState(void 0),[w,y]=l.useState("Only alphanumeric chars in Save View input"),[s,c]=l.useState(void 0),[f,x]=l.useState("Max 12 chars"),M=t=>{t.target.value.match(/^[a-z0-9\s]+$/i)?(t.isInvalid=!1,u(void 0)):(t.isInvalid=!0,u(V.Error))},b=t=>{y(t.detail.children)},j=t=>{t.target.value.length>12?(t.isInvalid=!0,c(V.Error)):(t.isInvalid=!1,c(void 0))},A=t=>{const m=t.detail.updatedVariants.find(D=>D["data-custom-manage-views"]);!s&&m&&x(m.children)};return e.jsxs(o,{onSaveAs:b,onSaveManageViews:A,children:[e.jsx(a,{"data-custom-save-view":!0,selected:r===0,saveViewInputProps:{valueState:d,valueStateMessage:d?e.jsx("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:M,"data-testid":"alphanumeric"},children:w}),e.jsx(a,{"data-custom-manage-views":!0,selected:r===1,manageViewsInputProps:{valueState:s,valueStateMessage:s?e.jsx("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:j,"data-testid":"12chars"},children:f})]})}};var v,p,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <VariantManagement {...args}>
        <VariantItem>Default VariantItem</VariantItem>
        <VariantItem selected>Selected</VariantItem>
        <VariantItem author="SAP">Author</VariantItem>
        <VariantItem favorite>Favorite</VariantItem>
        <VariantItem isDefault>IsDefault</VariantItem>
        <VariantItem favorite labelReadOnly>
          Favorite & labelReadOnly
        </VariantItem>
        <VariantItem applyAutomatically>ApplyAutomatically</VariantItem>
        <VariantItem applyAutomatically applyAutomaticallyText="Describe your exceptions that deviate from the standard behavior here.">
          applyAutomatically & applyAutomaticallyText
        </VariantItem>
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
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,S,I;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    selectedByIndex = 1
  }: any) => {
    const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
    const [customSaveViewVariantText, setCustomSaveViewVariantText] = useState('Only alphanumeric chars in Save View input');
    const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
    const [customManageViewsVariantText, setCustomManageViewsVariantText] = useState('Max 12 chars');
    const handleSaveViewInput = e => {
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
    const handleSaveAs = e => {
      setCustomSaveViewVariantText(e.detail.children);
    };
    const handleManageViewInput = e => {
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
    const handleSaveManageViews = e => {
      // if is custom manage view variant and is not in error state, set children to new value
      const isCustomManageViewsItem = e.detail.updatedVariants.find(item => item['data-custom-manage-views']);
      if (!valueStateManageViews && isCustomManageViewsItem) {
        setCustomManageViewsVariantText(isCustomManageViewsItem.children);
      }
    };
    return <VariantManagement onSaveAs={handleSaveAs} onSaveManageViews={handleSaveManageViews}>
        <VariantItem data-custom-save-view selected={selectedByIndex === 0} saveViewInputProps={{
        valueState: valueStateSaveView,
        valueStateMessage: valueStateSaveView ? <div>Only alphanumeric and space characters allowed!</div> : undefined,
        onInput: handleSaveViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': 'alphanumeric'
      }}>
          {customSaveViewVariantText}
        </VariantItem>
        <VariantItem data-custom-manage-views selected={selectedByIndex === 1} manageViewsInputProps={{
        valueState: valueStateManageViews,
        valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
        onInput: handleManageViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': '12chars'
      }}>
          {customManageViewsVariantText}
        </VariantItem>
      </VariantManagement>;
  }
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const P=["Default","WithCustomValidation"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithCustomValidation:i,__namedExportsOrder:P,default:C},Symbol.toStringTag,{value:"Module"}));export{G as C,n as D,i as W};
//# sourceMappingURL=VariantManagement.stories-d7c6a6ad.js.map
