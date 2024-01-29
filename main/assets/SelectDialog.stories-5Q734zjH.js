import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{r as a}from"./index-OjgoNOWw.js";import{r as we}from"./index-QYh6idnL.js";import{F as De}from"./index-ndaVN1fR.js";import{d as Ie}from"./decline-XpWJwTfv.js";import{s as Te}from"./search-D1vZwmg0.js";import{T as H}from"./ThemingParameters-UghqSl-x.js";import{C as X}from"./CssSizeVariables-loCRUewX.js";import{e as C}from"./index-Jm2lAFsC.js";import{c as Y}from"./clsx-Zbgk8kpT.js";import{c as Be}from"./react-jss.esm-tmBtHfec.js";import{u as Re,F as J,r as P,R as Z,G as Le,H as Oe,l as Ee}from"./i18n-defaults-gX8Lho5I.js";import{T as ae}from"./index-9hLZiafD.js";import{T as Ve,a as Ne}from"./index-evjRLoK7.js";import{L as je}from"./index-0YaDBHSE.js";import{a as w}from"./List-XV25F2MG.js";import{u as ee}from"./withWebComponent-22JjwLkL.js";import{D as ke}from"./index-5TOGtI6z.js";import{B as D}from"./index-Riw62-zd.js";import{B as _}from"./Button-jlOsC8Op.js";import{T as Ae}from"./index-y247-Pxg.js";import{I as Pe}from"./index-QdQ-ekBI.js";import{I as te}from"./index-W_BCbZ-G.js";import{S as ce}from"./index-61LlGhOL.js";import{L as _e}from"./index-nYEBNQf8.js";const qe=Be({dialog:{"&::part(header)":{paddingBottom:"0.25rem",flexDirection:"column",marginBottom:0},"&::part(content)":{padding:0}},headerContent:{display:"grid",gridTemplateColumns:"fit-content(100px) minmax(0, 1fr) fit-content(100px)",gridTemplateAreas:`
      "titleStart titleCenter cancel"
      "input input input"
      `,gridTemplateRows:`${X.ui5WcrDialogHeaderHeight} ${X.ui5WcrDialogSubHeaderHeight}`,width:"100%",alignItems:"center"},title:{fontSize:H.sapFontLargeSize,fontFamily:H.sapFontHeaderFamily,gridColumnStart:"titleStart",gridColumnEnd:"titleCenter",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},titleCenterAlign:{gridArea:"titleCenter",justifySelf:"center"},hiddenClearBtn:{gridArea:"titleStart",visibility:"hidden"},clearBtn:{gridArea:"cancel",justifySelf:"end"},input:{gridArea:"input",width:"100%"},footer:{display:"flex",alignItems:"center",justifyContent:"end",width:"100%",boxSizing:"border-box","& > *":{marginInlineStart:"0.5rem"}},inputIcon:{cursor:"pointer",color:H.sapContent_IconColor},infoBar:{padding:"0 0.5rem",position:"sticky",top:0,zIndex:1}},{name:"SelectDialog"}),E=a.forwardRef((o,f)=>{const{children:h,className:u,confirmButtonText:S,growing:v,headerText:l,headerTextAlignCenter:c,listProps:g={},mode:b=w.SingleSelect,numberOfSelectedItems:V,rememberSelections:q,showClearButton:N,onAfterClose:I,onClear:j,onConfirm:y,onLoadMore:M,onSearch:T,onSearchInput:k,onSearchReset:m,onBeforeOpen:r,onBeforeClose:n,onAfterOpen:x,onCancel:p,...ue}=o,s=qe(),i=Re("@ui5/webcomponents-react"),[B,$]=a.useState(""),[A,F]=a.useState([]),[me,U]=ee(f),[pe,R]=ee(g.ref),fe=e=>{var K,Q;const d=((K=R.current)==null?void 0:K.getSelectedItems())??[];typeof r=="function"&&r(e),b===w.MultiSelect&&((Q=R.current)!=null&&Q.hasData)&&F(d)},he=e=>{var d;typeof x=="function"&&x(e),(d=R.current)==null||d.focusFirstItem()},ge=e=>{typeof k=="function"&&k(C(e,{value:e.target.value})),$(e.target.value)},W=e=>{typeof T=="function"&&(e.type==="keyup"&&e.code==="Enter"&&T(C(e,{value:e.target.value})),e.type==="click"&&T(C(e,{value:B})))},Se=e=>{typeof m=="function"&&m(C(e,{prevValue:B})),$("")},ve=e=>{typeof(g==null?void 0:g.onSelectionChange)=="function"&&g.onSelectionChange(e),b===w.MultiSelect?F(e.detail.selectedItems):(typeof y=="function"&&y(e),U.current.close())},be=e=>{U.current.close(),typeof p=="function"&&p(e)},G=e=>{var d;typeof j=="function"&&j(C(e,{prevSelectedItems:A})),F([]),(d=R.current)==null||d.deselectSelectedItems()},Ce=e=>{typeof y=="function"&&y(C(e,{selectedItems:A})),U.current.close()},ye=e=>{var d;typeof I=="function"&&I(e),typeof m=="function"&&m(C(e,{prevValue:B})),$(""),q||(d=R.current)==null||d.deselectSelectedItems()},xe=e=>{typeof n=="function"&&n(e),typeof p=="function"&&e.detail.escPressed&&p(e)};return t.jsxs(ke,{...ue,"data-component-name":"SelectDialog",ref:me,className:Y(s.dialog,u),onAfterClose:ye,onBeforeOpen:fe,onAfterOpen:he,onBeforeClose:xe,children:[t.jsxs("div",{className:s.headerContent,slot:"header",children:[N&&c&&t.jsx(D,{onClick:G,design:_.Transparent,className:s.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:i.getText(J)}),t.jsx(Ae,{className:Y(s.title,c&&s.titleCenterAlign),children:l}),N&&t.jsx(D,{onClick:G,design:_.Transparent,className:s.clearBtn,children:i.getText(J)}),t.jsx(Pe,{className:s.input,accessibleName:i.getText(P),value:B,placeholder:i.getText(P),onInput:ge,onKeyUp:W,icon:t.jsxs(t.Fragment,{children:[B&&t.jsx(te,{accessibleName:i.getText(Z),title:i.getText(Z),name:Ie,interactive:!0,onClick:Se,className:s.inputIcon}),t.jsx(te,{interactive:!0,name:Te,className:s.inputIcon,onClick:W,accessibleName:i.getText(P),title:i.getText(P)})]})})]}),b===w.MultiSelect&&(!!A.length||V>0)&&t.jsx(Ve,{design:Ne.Info,className:s.infoBar,children:t.jsx(ae,{children:`${i.getText(Le)}: ${V??A.length}`})}),t.jsx(je,{...g,ref:pe,growing:v,onLoadMore:M,mode:b,onSelectionChange:ve,children:h}),t.jsxs("div",{slot:"footer",className:s.footer,children:[b===w.MultiSelect&&t.jsx(D,{onClick:Ce,design:_.Emphasized,children:S??i.getText(Oe)}),t.jsx(D,{onClick:be,design:_.Transparent,children:i.getText(Ee)})]})]})});E.displayName="SelectDialog";try{E.displayName="SelectDialog",E.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ListMode.SingleSelect"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListMode`s, it is strongly recommended that you only use `SingleSelect` or `MultiSelect` in order to preserve the intended design.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "onLoadMore" | "growing" | "footerText" | "mode">'}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<IconDomRef, { prevValue: string; }>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: StandardListItemDomRef[]; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: StandardListItemDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"MouseEventHandler<ButtonDomRef> | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:'Defines the state of the `Dialog`.\n**Note:** If `"Error"` and `"Warning"` state is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},growing:{defaultValue:null,description:'Defines whether the component will have growing capability either by pressing a `More` button, or via user scroll. In both cases `onLoadMore` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}}}}}catch{}const Me=""+new URL("Laptop1-YqmaMw1Q.jpg",import.meta.url).href,$e=""+new URL("Laptop2-Ai04beMq.jpg",import.meta.url).href,Fe=""+new URL("PC1-XpF6zR2F.jpg",import.meta.url).href,Ue=""+new URL("PC2-2SwlAxc8.jpg",import.meta.url).href,He={title:"Modals & Popovers / SelectDialog",component:E,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product"},parameters:{chromatic:{delay:1e3}}},z=a.forwardRef((o,f)=>we.createPortal(t.jsx(E,{...o,ref:f}),document.body));z.displayName="SelectDialog";const de=[{img:Me,description:"LT-10",text:"Gaming Laptop"},{img:$e,description:"LT-20",text:"Business Laptop"},{img:Ue,description:"HT-10",text:"Gaming PC"},{img:Fe,description:"HT-20",text:"Business PC"}],L={render:o=>{const[f,h]=a.useState(o.open),u=()=>{h(!0)},S=v=>{h(!1),o.onAfterClose(v)};return a.useEffect(()=>{h(o.open)},[o.open]),t.jsxs(t.Fragment,{children:[t.jsx(D,{onClick:u,children:"Open SelectDialog"}),t.jsx(z,{...o,open:f,onAfterClose:S,children:new Array(40).fill("").map((v,l)=>{const c=de[l%4];return t.jsx(ce,{selected:l===1,image:c.img,description:`${c.description}${l}`,children:c.text},`${c.text}${l}`)})})]})}},O={render:()=>{const[o,f]=a.useState(!1),h={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[u,S]=a.useState(h),v=a.useRef(u),[l,c]=a.useState(),[g,b]=a.useState(Object.keys(h)),V=()=>{v.current=u},q=()=>{f(!0)},N=()=>{f(!1)},I=m=>{c(m.detail.value)},j=()=>{c(void 0)},y=m=>{const r=m.detail.item.dataset.description;S(n=>{if(n[r]){const{[r]:x,...p}=n;return p}else return{...n,[r]:!0}})},M=()=>{S({})},T=()=>{b(Object.keys(u))},k=()=>{S(v.current)};return t.jsxs(t.Fragment,{children:[t.jsx(D,{onClick:q,children:"Open Dialog"}),t.jsx(z,{open:o,mode:w.MultiSelect,numberOfSelectedItems:Object.keys(u).length,listProps:{onItemClick:y},showClearButton:!0,rememberSelections:!0,onClear:M,onConfirm:T,onAfterClose:N,onSearchInput:I,onSearch:I,onSearchReset:j,onBeforeOpen:V,onCancel:k,children:new Array(40).fill("").map((m,r)=>{const n=de[r%4],x=`${n.description}${r}`,p=l==null?void 0:l.toLowerCase();return l&&!x.toLowerCase().includes(p)&&!n.text.toLowerCase().includes(p)?null:t.jsx(ce,{image:n.img,description:`${n.description}${r}`,"data-description":`${n.description}${r}`,selected:u[x],children:n.text},`${n.text}${r}`)}).filter(Boolean)}),t.jsxs(De,{children:[t.jsx(_e,{children:"Selected: "}),t.jsx(ae,{children:g.join(", ")})]})]})}};var ne,oe,re;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState<boolean | undefined>(isChromatic || args.open);
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
          return <StandardListItem selected={index === 1} image={currentProduct.img} description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`}>
                {currentProduct.text}
              </StandardListItem>;
        })}
        </SelectDialog>
      </>;
  }
}`,...(re=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,se,ie;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    // predefined selection
    const selectedProducts = {
      'HT-102': true,
      'HT-203': true,
      'HT-1038': true
    };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const selectedItemsBeforeOpen = useRef(selectedItems);
    const [searchVal, setSearchVal] = useState();
    const [products, setProducts] = useState(Object.keys(selectedProducts));
    const handleBeforeOpen = () => {
      selectedItemsBeforeOpen.current = selectedItems;
    };
    const handleOpen = () => {
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
    };
    // search
    const handleSearch = e => {
      setSearchVal(e.detail.value);
    };
    // reset input value of search field
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // select/unselect
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
    const handleConfirm = () => {
      setProducts(Object.keys(selectedItems));
    };
    // cancel selection
    const handleCancel = () => {
      setSelectedItems(selectedItemsBeforeOpen.current);
    };
    return <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <SelectDialog open={dialogOpen} mode={ListMode.MultiSelect} numberOfSelectedItems={Object.keys(selectedItems).length} listProps={{
        onItemClick: handleItemClick
      }} showClearButton rememberSelections onClear={handleClear} onConfirm={handleConfirm} onAfterClose={handleClose} onSearchInput={handleSearch} onSearch={handleSearch} onSearchReset={handleSearchReset} onBeforeOpen={handleBeforeOpen} onCancel={handleCancel}>
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
}`,...(ie=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const ze=["Default","MultiSelect"],St=Object.freeze(Object.defineProperty({__proto__:null,Default:L,MultiSelect:O,__namedExportsOrder:ze,default:He},Symbol.toStringTag,{value:"Module"}));export{St as C,L as D,O as M};
