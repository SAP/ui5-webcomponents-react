import{j as e}from"./jsx-runtime-5926aa06.js";import{r as d}from"./index-ebeaab24.js";import{r as be}from"./index-9c09ad76.js";import{F as Ce}from"./index-2c77de22.js";import{d as ye}from"./decline-5f59d729.js";import{s as xe}from"./search-89855739.js";import{T as M}from"./ThemingParameters-7e2e4e30.js";import{b as G}from"./CssSizeVariables-cd649ef5.js";import{e as v}from"./index-99d317a4.js";import{c as K}from"./clsx.m-1229b3e0.js";import{c as we}from"./react-jss.esm-022ab528.js";import{u as De,aj as J,W as k,a7 as Q,aC as Te,aD as Ie,C as Re}from"./i18n-defaults-ac3ba251.js";import{T as le}from"./index-562e1433.js";import{T as Le,a as Be}from"./index-c3e9de08.js";import{L as Ne}from"./index-1c758ddc.js";import{u as X}from"./withWebComponent-d4224c1c.js";import{D as Ve}from"./index-a3d8e5a8.js";import{B as x}from"./index-6ec1f0ff.js";import{B as A}from"./Button-86524f67.js";import{T as je}from"./index-1fd03304.js";import{I as Ee}from"./index-68955775.js";import{I as Y}from"./index-7dc08ac0.js";import{a as w}from"./ListItemBase-9b88c288.js";import{S as ie}from"./index-e1b1e5a5.js";import{L as ke}from"./index-9625f160.js";const Ae=we({dialog:{"&::part(header)":{paddingBottom:"0.25rem",flexDirection:"column",marginBottom:0},"&::part(content)":{padding:0}},headerContent:{display:"grid",gridTemplateColumns:"fit-content(100px) minmax(0, 1fr) fit-content(100px)",gridTemplateAreas:`
      "titleStart titleCenter cancel"
      "input input input"
      `,gridTemplateRows:`${G.ui5WcrDialogHeaderHeight} ${G.ui5WcrDialogSubHeaderHeight}`,width:"100%",alignItems:"center"},title:{fontSize:M.sapFontLargeSize,fontFamily:M.sapFontHeaderFamily,gridColumnStart:"titleStart",gridColumnEnd:"titleCenter",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},titleCenterAlign:{gridArea:"titleCenter",justifySelf:"center"},hiddenClearBtn:{gridArea:"titleStart",visibility:"hidden"},clearBtn:{gridArea:"cancel",justifySelf:"end"},input:{gridArea:"input",width:"100%"},footer:{display:"flex",alignItems:"center",justifyContent:"end",width:"100%",boxSizing:"border-box","& > *":{marginInlineStart:"0.5rem"}},inputIcon:{cursor:"pointer",color:M.sapContent_IconColor},infoBar:{padding:"0 0.5rem",position:"sticky",top:0,zIndex:1}},{name:"SelectDialog"}),D=d.forwardRef((o,p)=>{const{children:c,className:b,confirmButtonText:C,growing:y,headerText:m,headerTextAlignCenter:l,listProps:u,mode:f,numberOfSelectedItems:B,rememberSelections:P,showClearButton:N,onAfterClose:V,onClear:h,onConfirm:n,onLoadMore:r,onSearch:g,onSearchInput:S,onSearchReset:j,onBeforeOpen:F,onAfterOpen:U,...se}=o,i=Ae(),a=De("@ui5/webcomponents-react"),[T,_]=d.useState(""),[E,O]=d.useState([]),[ce,q]=X(p),[de,I]=X(u.ref),ue=t=>{var s,W;typeof F=="function"&&F(t),f===w.MultiSelect&&((s=I.current)!=null&&s.hasData)&&O(((W=I.current)==null?void 0:W.getSelectedItems())??[])},me=t=>{var s;typeof U=="function"&&U(t),(s=I.current)==null||s.focusFirstItem()},pe=t=>{typeof S=="function"&&S(v(t,{value:t.target.value})),_(t.target.value)},H=t=>{typeof g=="function"&&(t.type==="keyup"&&t.code==="Enter"&&g(v(t,{value:t.target.value})),t.type==="click"&&g(v(t,{value:T})))},fe=t=>{typeof j=="function"&&j(v(t,{prevValue:T})),_("")},he=t=>{typeof(u==null?void 0:u.onSelectionChange)=="function"&&u.onSelectionChange(t),f===w.MultiSelect?O(t.detail.selectedItems):(typeof n=="function"&&n(t),q.current.close())},ge=()=>{q.current.close()},z=t=>{var s;typeof h=="function"&&h(v(t,{prevSelectedItems:E})),O([]),(s=I.current)==null||s.deselectSelectedItems()},Se=t=>{typeof n=="function"&&n(v(t,{selectedItems:E})),q.current.close()},ve=t=>{var s;typeof V=="function"&&V(t),typeof j=="function"&&j(v(t,{prevValue:T})),_(""),P||(s=I.current)==null||s.deselectSelectedItems()};return e.jsxs(Ve,{...se,"data-component-name":"SelectDialog",ref:ce,className:K(i.dialog,b),onAfterClose:ve,onBeforeOpen:ue,onAfterOpen:me,children:[e.jsxs("div",{className:i.headerContent,slot:"header",children:[N&&l&&e.jsx(x,{onClick:z,design:A.Transparent,className:i.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:a.getText(J)}),e.jsx(je,{className:K(i.title,l&&i.titleCenterAlign),children:m}),N&&e.jsx(x,{onClick:z,design:A.Transparent,className:i.clearBtn,children:a.getText(J)}),e.jsx(Ee,{className:i.input,accessibleName:a.getText(k),value:T,placeholder:a.getText(k),onInput:pe,onKeyUp:H,icon:e.jsxs(e.Fragment,{children:[T&&e.jsx(Y,{accessibleName:a.getText(Q),title:a.getText(Q),name:ye,interactive:!0,onClick:fe,className:i.inputIcon}),e.jsx(Y,{interactive:!0,name:xe,className:i.inputIcon,onClick:H,accessibleName:a.getText(k),title:a.getText(k)})]})})]}),f===w.MultiSelect&&(!!E.length||B>0)&&e.jsx(Le,{design:Be.Info,className:i.infoBar,children:e.jsx(le,{children:`${a.getText(Te)}: ${B??E.length}`})}),e.jsx(Ne,{...u,ref:de,growing:y,onLoadMore:r,mode:f,onSelectionChange:he,children:c}),e.jsxs("div",{slot:"footer",className:i.footer,children:[f===w.MultiSelect&&e.jsx(x,{onClick:Se,design:A.Emphasized,children:C??a.getText(Ie)}),e.jsx(x,{onClick:ge,design:A.Transparent,children:a.getText(Re)})]})]})});D.defaultProps={mode:w.SingleSelect,listProps:{}};D.displayName="SelectDialog";try{D.displayName="SelectDialog",D.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ListMode.SingleSelect"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListMode`s, it is strongly recommended that you only use `SingleSelect` or `MultiSelect` in order to preserve the intended design.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "mode" | "onLoadMore">'}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<IconDomRef, { prevValue: string; }>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: StandardListItemDomRef[]; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: StandardListItemDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:'Defines the state of the `Dialog`.\n\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.\n\n**Note:** If `"Error"` and `"Warning"` state is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},growing:{defaultValue:null,description:'Defines whether the component will have growing capability either by pressing a `More` button, or via user scroll. In both cases `onLoadMore` event is fired.\n\nAvailable options:\n\n`Button` - Shows a `More` button at the bottom of the list, pressing of which triggers the `onLoadMore` event.\n`Scroll` - The `onLoadMore` event is triggered when the user scrolls to the bottom of the list;\n`None` (default) - The growing is off.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}const Pe=""+new URL("Laptop1-59a0ea5a.jpg",import.meta.url).href,_e=""+new URL("Laptop2-7b05e4f5.jpg",import.meta.url).href,Oe=""+new URL("PC1-974f5c12.jpg",import.meta.url).href,qe=""+new URL("PC2-9045ab71.jpg",import.meta.url).href,Me={title:"Modals & Popovers / SelectDialog",component:D,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product"}},$=d.forwardRef((o,p)=>be.createPortal(e.jsx(D,{...o,ref:p}),document.body));$.displayName="SelectDialog";const ae=[{img:Pe,description:"LT-10",text:"Gaming Laptop"},{img:_e,description:"LT-20",text:"Business Laptop"},{img:qe,description:"HT-10",text:"Gaming PC"},{img:Oe,description:"HT-20",text:"Business PC"}],R={render:o=>{const[p,c]=d.useState(o.open),b=()=>{c(!0)},C=y=>{c(!1),o.onAfterClose(y)};return d.useEffect(()=>{c(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:b,children:"Open SelectDialog"}),e.jsx($,{...o,open:p,onAfterClose:C,children:new Array(40).fill("").map((y,m)=>{const l=ae[m%4];return e.jsx(ie,{image:l.img,description:`${l.description}${m}`,children:l.text},`${l.text}${m}`)})})]})}},L={render:()=>{const o=d.useRef(null),p=()=>{o.current.show()},[c,b]=d.useState(),C=h=>{b(h.detail.value)},y=()=>{b(void 0)},m={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[l,u]=d.useState(m),f=h=>{const n=h.detail.item.dataset.description;u(r=>{if(r[n]){const{[n]:g,...S}=r;return S}else return{...r,[n]:!0}})},B=()=>{u({})},[P,N]=d.useState(Object.keys(m)),V=()=>{N(Object.keys(l))};return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:p,children:"Open Dialog"}),e.jsx($,{mode:w.MultiSelect,ref:o,onSearchInput:C,onSearch:C,onSearchReset:y,numberOfSelectedItems:Object.keys(l).length,listProps:{onItemClick:f},showClearButton:!0,onClear:B,onConfirm:V,children:new Array(40).fill("").map((h,n)=>{const r=ae[n%4],g=`${r.description}${n}`,S=c==null?void 0:c.toLowerCase();return c&&!g.toLowerCase().includes(S)&&!r.text.toLowerCase().includes(S)?null:e.jsx(ie,{image:r.img,description:`${r.description}${n}`,"data-description":`${r.description}${n}`,selected:l[g],children:r.text},`${r.text}${n}`)}).filter(Boolean)}),e.jsxs(Ce,{children:[e.jsx(ke,{children:"Selected: "}),e.jsx(le,{children:P.join(", ")})]})]})}};var Z,ee,te;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(isChromatic || args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      setOpen(false);
      args.onAfterClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onAfterClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          return <StandardListItem image={currentProduct.img} description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`}>
                {currentProduct.text}
              </StandardListItem>;
        })}
        </SelectDialog>
      </>;
  }
}`,...(te=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,re;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const dialogRef = useRef(null);
    const onButtonClick = () => {
      dialogRef.current.show();
    };
    const [searchVal, setSearchVal] = useState();
    // search
    const handleSearch = e => {
      setSearchVal(e.detail.value);
    };
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // predefined selection
    const selectedProducts = {
      'HT-102': true,
      'HT-203': true,
      'HT-1038': true
    };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const handleItemClick = e => {
      const itemDescription = e.detail.item.dataset.description;
      setSelectedItems(prev => {
        if (prev[itemDescription]) {
          const {
            [itemDescription]: _omit,
            ...rest
          } = prev;
          return rest;
        } else {
          return {
            ...prev,
            [itemDescription]: true
          };
        }
      });
    };
    // clear selection
    const handleClear = () => {
      setSelectedItems({});
    };
    // confirm selection
    const [products, setProducts] = useState(Object.keys(selectedProducts));
    const handleConfirm = () => {
      setProducts(Object.keys(selectedItems));
    };
    return <>
        <Button onClick={onButtonClick}>Open Dialog</Button>
        <SelectDialog mode={ListMode.MultiSelect} ref={dialogRef} onSearchInput={handleSearch} onSearch={handleSearch} onSearchReset={handleSearchReset} numberOfSelectedItems={Object.keys(selectedItems).length} listProps={{
        onItemClick: handleItemClick
      }} showClearButton onClear={handleClear} onConfirm={handleConfirm}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          const description = \`\${currentProduct.description}\${index}\`;
          const lowerCaseSearchVal = searchVal?.toLowerCase();
          if (searchVal && !description.toLowerCase().includes(lowerCaseSearchVal) && !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)) {
            return null;
          }
          return <StandardListItem image={currentProduct.img} description={\`\${currentProduct.description}\${index}\`} data-description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} selected={selectedItems[description]}>
                  {currentProduct.text}
                </StandardListItem>;
        }).filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>;
  }
}`,...(re=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const $e=["Default","MultiSelect"],pt=Object.freeze(Object.defineProperty({__proto__:null,Default:R,MultiSelect:L,__namedExportsOrder:$e,default:Me},Symbol.toStringTag,{value:"Module"}));export{pt as C,R as D,L as M};
//# sourceMappingURL=SelectDialog.stories-a34ae71a.js.map
