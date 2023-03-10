import{a as I,j as e}from"./jsx-runtime-670450c2.js";import{r as l}from"./index-f1f749bf.js";import{V as o,a}from"./VariantItem-94fe9cb2.js";import{P as D}from"./Popover-cbbb060d.js";import{T as O}from"./Title-b986a4bd.js";import{V}from"./ValueState-ab6838cc.js";const A={title:"Inputs / VariantManagement",component:o,args:{placement:D.Bottom,level:O.H4}},n={render:r=>I(o,{...r,children:[e(a,{children:"Default VariantItem"}),e(a,{selected:!0,children:"Selected"}),e(a,{author:"SAP",children:"Author"}),e(a,{favorite:!0,children:"Favorite"}),e(a,{isDefault:!0,children:"IsDefault"}),e(a,{favorite:!0,labelReadOnly:!0,children:"Favorite & labelReadOnly"}),e(a,{applyAutomatically:!0,children:"ApplyAutomatically"}),e(a,{readOnly:!0,children:"ReadOnly"}),e(a,{global:!0,children:"Global"}),e(a,{global:!0,readOnly:!0,children:"Global & readOnly"}),e(a,{global:!0,children:"Not deletable -> global"}),e(a,{hideDelete:!0,children:"Not deletable -> hideDelete"}),e(a,{hideDelete:!1,global:!0,children:"Deletable -> hideDelete: false, global: true"})]})},i={render:({selectedByIndex:r=1})=>{const[d,u]=l.useState(void 0),[f,M]=l.useState("Only alphanumeric chars in Save View input"),[s,c]=l.useState(void 0),[b,y]=l.useState("Max 12 chars");return I(o,{onSaveAs:t=>{M(t.detail.children)},onSaveManageViews:t=>{const m=t.detail.updatedVariants.find(x=>x["data-custom-manage-views"]);!s&&m&&y(m.children)},children:[e(a,{"data-custom-save-view":!0,selected:r===0,saveViewInputProps:{valueState:d,valueStateMessage:d?e("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:t=>{t.target.value.match(/^[a-z0-9\s]+$/i)?(t.isInvalid=!1,u(void 0)):(t.isInvalid=!0,u(V.Error))},"data-testid":"alphanumeric"},children:f}),e(a,{"data-custom-manage-views":!0,selected:r===1,manageViewsInputProps:{valueState:s,valueStateMessage:s?e("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:t=>{t.target.value.length>12?(t.isInvalid=!0,c(V.Error)):(t.isInvalid=!1,c(void 0))},"data-testid":"12chars"},children:b})]})}};var v,h,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var p,S,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const T=["Default","WithCustomValidation"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithCustomValidation:i,__namedExportsOrder:T,default:A},Symbol.toStringTag,{value:"Module"}));export{z as C,n as D,i as W};
//# sourceMappingURL=VariantManagement.stories-19573783.js.map
