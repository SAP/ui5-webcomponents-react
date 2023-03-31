import{a as b,j as t,F as U}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{r as ye}from"./index-96c5f47c.js";import{F as we}from"./index-2bd17005.js";import{d as De}from"./decline-6bd98a2e.js";import{s as Te}from"./search-a32b329a.js";import{T as j}from"./ThemingParameters-f4b4144e.js";import{b as J}from"./CssSizeVariables-bd372cde.js";import{e as v}from"./index-99d317a4.js";import{c as Q}from"./clsx.m-1229b3e0.js";import{c as Ie}from"./react-jss.esm-2e28eff7.js";import{u as xe,aj as X,W as P,a7 as Y,aC as Le,aD as Re,C as Be}from"./i18n-defaults-c7cc2cc1.js";import{T as ae}from"./index-479d8097.js";import{T as Ne,a as Ve}from"./index-2580fb41.js";import{L as ke}from"./index-143d0d74.js";import{u as Z}from"./withWebComponent-65cd39a0.js";import{D as Ee}from"./index-249584f3.js";import{B as D}from"./index-78662905.js";import{a as _}from"./Button-bc3a11a1.js";import{T as Ae}from"./index-1c2756e3.js";import{I as Pe}from"./index-488c472e.js";import{I as ee}from"./index-437f6447.js";import{a as T}from"./ListItemBase-a0bc6999.js";import{S as se}from"./index-05fcdf87.js";import{L as _e}from"./index-d985b65b.js";const Oe=Ie({dialog:{"&::part(header)":{paddingBottom:"0.25rem",flexDirection:"column",marginBottom:0},"&::part(content)":{padding:0}},headerContent:{display:"grid",gridTemplateColumns:"fit-content(100px) minmax(0, 1fr) fit-content(100px)",gridTemplateAreas:`
      "titleStart titleCenter cancel"
      "input input input"
      `,gridTemplateRows:`${J.sapWcrDialogHeaderHeight} ${J.sapWcrDialogSubHeaderHeight}`,width:"100%",alignItems:"center"},title:{fontSize:j.sapFontLargeSize,fontFamily:j.sapFontHeaderFamily,gridColumnStart:"titleStart",gridColumnEnd:"titleCenter",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},titleCenterAlign:{gridArea:"titleCenter",justifySelf:"center"},hiddenClearBtn:{gridArea:"titleStart",visibility:"hidden"},clearBtn:{gridArea:"cancel",justifySelf:"end"},input:{gridArea:"input",width:"100%"},footer:{display:"flex",alignItems:"center",justifyContent:"end",width:"100%",boxSizing:"border-box","& > *":{marginInlineStart:"0.5rem"}},inputIcon:{cursor:"pointer",color:j.sapContent_IconColor},infoBar:{padding:"0 0.5rem",position:"sticky",top:0,zIndex:1}},{name:"SelectDialog"}),I=d.forwardRef((o,p)=>{const{children:c,className:C,confirmButtonText:y,growing:w,headerText:m,headerTextAlignCenter:l,listProps:u,mode:f,numberOfSelectedItems:N,rememberSelections:O,showClearButton:V,onAfterClose:k,onClear:h,onConfirm:n,onLoadMore:r,onSearch:g,onSearchInput:S,onSearchReset:E,onBeforeOpen:H,onAfterOpen:z,...de}=o,i=Oe(),a=xe("@ui5/webcomponents-react"),[x,q]=d.useState(""),[A,M]=d.useState([]),[ue,$]=Z(p),[me,L]=Z(u.ref),pe=e=>{var s,K;typeof H=="function"&&H(e),f===T.MultiSelect&&((s=L.current)!=null&&s.hasData)&&M(((K=L.current)==null?void 0:K.getSelectedItems())??[])},fe=e=>{var s;typeof z=="function"&&z(e),(s=L.current)==null||s.focusFirstItem()},he=e=>{typeof S=="function"&&S(v(e,{value:e.target.value})),q(e.target.value)},W=e=>{typeof g=="function"&&(e.type==="keyup"&&e.code==="Enter"&&g(v(e,{value:e.target.value})),e.type==="click"&&g(v(e,{value:x})))},ge=e=>{typeof E=="function"&&E(v(e,{prevValue:x})),q("")},Se=e=>{typeof(u==null?void 0:u.onSelectionChange)=="function"&&u.onSelectionChange(e),f===T.MultiSelect?M(e.detail.selectedItems):(typeof n=="function"&&n(e),$.current.close())},ve=()=>{$.current.close()},G=e=>{var s;typeof h=="function"&&h(v(e,{prevSelectedItems:A})),M([]),(s=L.current)==null||s.deselectSelectedItems()},be=e=>{typeof n=="function"&&n(v(e,{selectedItems:A})),$.current.close()},Ce=e=>{var s;typeof k=="function"&&k(e),typeof E=="function"&&E(v(e,{prevValue:x})),q(""),O||(s=L.current)==null||s.deselectSelectedItems()};return b(Ee,{...de,"data-component-name":"SelectDialog",ref:ue,className:Q(i.dialog,C),onAfterClose:Ce,onBeforeOpen:pe,onAfterOpen:fe,children:[b("div",{className:i.headerContent,slot:"header",children:[V&&l&&t(D,{onClick:G,design:_.Transparent,className:i.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:a.getText(X)}),t(Ae,{className:Q(i.title,l&&i.titleCenterAlign),children:m}),V&&t(D,{onClick:G,design:_.Transparent,className:i.clearBtn,children:a.getText(X)}),t(Pe,{className:i.input,accessibleName:a.getText(P),value:x,placeholder:a.getText(P),onInput:he,onKeyUp:W,icon:b(U,{children:[x&&t(ee,{accessibleName:a.getText(Y),title:a.getText(Y),name:De,interactive:!0,onClick:ge,className:i.inputIcon}),t(ee,{interactive:!0,name:Te,className:i.inputIcon,onClick:W,accessibleName:a.getText(P),title:a.getText(P)})]})})]}),f===T.MultiSelect&&(!!A.length||N>0)&&t(Ne,{design:Ve.Info,className:i.infoBar,children:t(ae,{children:`${a.getText(Le)}: ${N??A.length}`})}),t(ke,{...u,ref:me,growing:w,onLoadMore:r,mode:f,onSelectionChange:Se,children:c}),b("div",{slot:"footer",className:i.footer,children:[f===T.MultiSelect&&t(D,{onClick:be,design:_.Emphasized,children:y??a.getText(Re)}),t(D,{onClick:ve,design:_.Transparent,children:a.getText(Be)})]})]})});I.defaultProps={mode:T.SingleSelect,listProps:{}};I.displayName="SelectDialog";try{I.displayName="SelectDialog",I.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ListMode.SingleSelect"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListMode`s, it is strongly recommended that you only use `SingleSelect` or `MultiSelect` in order to preserve the intended design.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'}]}},growing:{defaultValue:null,description:'Defines whether the `List` will have growing capability either by pressing a `More` button, or via user scroll. In both cases the `onLoadMore` event is fired.\n\nAvailable options:\n\n`Button` - Shows a `More` button at the bottom of the list, pressing of which triggers the `load-more` event.\n`Scroll` - The `load-more` event is triggered when the user scrolls to the bottom of the list;\n`None` (default) - The growing is off.\n\n**Limitations:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "mode" | "onLoadMore">'}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<IconDomRef, { prevValue: string; }>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: StandardListItemDomRef[]; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: StandardListItemDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:'Defines the state of the `Dialog`.\n\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.\n\n**Note:** If `"Error"` and `"Warning"` state is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, { escPressed: boolean; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}}}}}catch{}const qe=""+new URL("Laptop1-59a0ea5a.jpg",import.meta.url).href,Me=""+new URL("Laptop2-7b05e4f5.jpg",import.meta.url).href,$e=""+new URL("PC1-974f5c12.jpg",import.meta.url).href,je=""+new URL("PC2-9045ab71.jpg",import.meta.url).href,Ue={title:"Modals & Popovers / SelectDialog",component:I,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product"}},F=d.forwardRef((o,p)=>ye.createPortal(t(I,{...o,ref:p}),document.body));F.displayName="SelectDialog";const ce=[{img:qe,description:"LT-10",text:"Gaming Laptop"},{img:Me,description:"LT-20",text:"Business Laptop"},{img:je,description:"HT-10",text:"Gaming PC"},{img:$e,description:"HT-20",text:"Business PC"}],R={render:o=>{const[p,c]=d.useState(o.open),C=()=>{c(!0)},y=w=>{c(!1),o.onAfterClose(w)};return d.useEffect(()=>{c(o.open)},[o.open]),b(U,{children:[t(D,{onClick:C,children:"Open SelectDialog"}),t(F,{...o,open:p,onAfterClose:y,children:new Array(40).fill("").map((w,m)=>{const l=ce[m%4];return t(se,{image:l.img,description:`${l.description}${m}`,children:l.text},`${l.text}${m}`)})})]})}},B={render:()=>{const o=d.useRef(null),p=()=>{o.current.show()},[c,C]=d.useState(),y=h=>{C(h.detail.value)},w=()=>{C(void 0)},m={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[l,u]=d.useState(m),f=h=>{const n=h.detail.item.dataset.description;u(r=>{if(r[n]){const{[n]:g,...S}=r;return S}else return{...r,[n]:!0}})},N=()=>{u({})},[O,V]=d.useState(Object.keys(m)),k=()=>{V(Object.keys(l))};return b(U,{children:[t(D,{onClick:p,children:"Open Dialog"}),t(F,{mode:T.MultiSelect,ref:o,onSearchInput:y,onSearch:y,onSearchReset:w,numberOfSelectedItems:Object.keys(l).length,listProps:{onItemClick:f},showClearButton:!0,onClear:N,onConfirm:k,children:new Array(40).fill("").map((h,n)=>{const r=ce[n%4],g=`${r.description}${n}`,S=c==null?void 0:c.toLowerCase();return c&&!g.toLowerCase().includes(S)&&!r.text.toLowerCase().includes(S)?null:t(se,{image:r.img,description:`${r.description}${n}`,"data-description":`${r.description}${n}`,selected:l[g],children:r.text},`${r.text}${n}`)}).filter(Boolean)}),b(we,{children:[t(_e,{children:"Selected: "}),t(ae,{children:O.join(", ")})]})]})}};var te,ne,oe;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,le,ie;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Fe=["Default","MultiSelect"],ht=Object.freeze(Object.defineProperty({__proto__:null,Default:R,MultiSelect:B,__namedExportsOrder:Fe,default:Ue},Symbol.toStringTag,{value:"Module"}));export{ht as C,R as D,B as M};
//# sourceMappingURL=SelectDialog.stories-73c6e94f.js.map
