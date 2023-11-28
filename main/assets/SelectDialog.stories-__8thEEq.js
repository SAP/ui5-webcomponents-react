import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as s}from"./index-OjgoNOWw.js";import{r as be}from"./index-QYh6idnL.js";import{F as Ce}from"./index-q8oiNN3v.js";import{d as ye}from"./decline-P9scilyE.js";import{s as xe}from"./search-Q76f2oXr.js";import{T as M}from"./ThemingParameters-UghqSl-x.js";import{C as G}from"./CssSizeVariables-IMpNFjIe.js";import{e as C}from"./index-Jm2lAFsC.js";import{c as K}from"./clsx-c3LcQGjR.js";import{c as we}from"./react-jss.esm-tmBtHfec.js";import{u as De,x as Q,o as k,R as X,y as Ie,z as Te,C as Re}from"./i18n-defaults-PmTGElot.js";import{T as le}from"./index-ETl9kWYS.js";import{T as Le,a as Be}from"./index-638C7gH-.js";import{L as Ne}from"./index-ncMRUru0.js";import{u as Y}from"./withWebComponent-6ZcDnwha.js";import{D as Ve}from"./index-rx9tQaGd.js";import{B as x}from"./index-3leFGDfS.js";import{B as P}from"./Button-UDaVhcBU.js";import{T as je}from"./index-E5ugX3RS.js";import{I as Ee}from"./index-uZBsvhlU.js";import{I as J}from"./index-LWl5jpMg.js";import{a as w}from"./ListItemBase-OVhNd6zE.js";import{S as ie}from"./index-RVVo5FZO.js";import{L as ke}from"./index-HeXG11kE.js";const Pe=we({dialog:{"&::part(header)":{paddingBottom:"0.25rem",flexDirection:"column",marginBottom:0},"&::part(content)":{padding:0}},headerContent:{display:"grid",gridTemplateColumns:"fit-content(100px) minmax(0, 1fr) fit-content(100px)",gridTemplateAreas:`
      "titleStart titleCenter cancel"
      "input input input"
      `,gridTemplateRows:`${G.ui5WcrDialogHeaderHeight} ${G.ui5WcrDialogSubHeaderHeight}`,width:"100%",alignItems:"center"},title:{fontSize:M.sapFontLargeSize,fontFamily:M.sapFontHeaderFamily,gridColumnStart:"titleStart",gridColumnEnd:"titleCenter",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},titleCenterAlign:{gridArea:"titleCenter",justifySelf:"center"},hiddenClearBtn:{gridArea:"titleStart",visibility:"hidden"},clearBtn:{gridArea:"cancel",justifySelf:"end"},input:{gridArea:"input",width:"100%"},footer:{display:"flex",alignItems:"center",justifyContent:"end",width:"100%",boxSizing:"border-box","& > *":{marginInlineStart:"0.5rem"}},inputIcon:{cursor:"pointer",color:M.sapContent_IconColor},infoBar:{padding:"0 0.5rem",position:"sticky",top:0,zIndex:1}},{name:"SelectDialog"}),D=s.forwardRef((o,u)=>{const{children:c,className:y,confirmButtonText:m,growing:h,headerText:g,headerTextAlignCenter:d,listProps:p,mode:f,numberOfSelectedItems:B,rememberSelections:A,showClearButton:N,onAfterClose:V,onClear:S,onConfirm:n,onLoadMore:r,onSearch:v,onSearchInput:b,onSearchReset:j,onBeforeOpen:F,onAfterOpen:U,...se}=o,l=Pe(),i=De("@ui5/webcomponents-react"),[I,_]=s.useState(""),[E,O]=s.useState([]),[ce,q]=Y(u),[de,T]=Y(p.ref),ue=t=>{var a,W;typeof F=="function"&&F(t),f===w.MultiSelect&&((a=T.current)!=null&&a.hasData)&&O(((W=T.current)==null?void 0:W.getSelectedItems())??[])},me=t=>{var a;typeof U=="function"&&U(t),(a=T.current)==null||a.focusFirstItem()},pe=t=>{typeof b=="function"&&b(C(t,{value:t.target.value})),_(t.target.value)},H=t=>{typeof v=="function"&&(t.type==="keyup"&&t.code==="Enter"&&v(C(t,{value:t.target.value})),t.type==="click"&&v(C(t,{value:I})))},fe=t=>{typeof j=="function"&&j(C(t,{prevValue:I})),_("")},he=t=>{typeof(p==null?void 0:p.onSelectionChange)=="function"&&p.onSelectionChange(t),f===w.MultiSelect?O(t.detail.selectedItems):(typeof n=="function"&&n(t),q.current.close())},ge=()=>{q.current.close()},z=t=>{var a;typeof S=="function"&&S(C(t,{prevSelectedItems:E})),O([]),(a=T.current)==null||a.deselectSelectedItems()},Se=t=>{typeof n=="function"&&n(C(t,{selectedItems:E})),q.current.close()},ve=t=>{var a;typeof V=="function"&&V(t),typeof j=="function"&&j(C(t,{prevValue:I})),_(""),A||(a=T.current)==null||a.deselectSelectedItems()};return e.jsxs(Ve,{...se,"data-component-name":"SelectDialog",ref:ce,className:K(l.dialog,y),onAfterClose:ve,onBeforeOpen:ue,onAfterOpen:me,children:[e.jsxs("div",{className:l.headerContent,slot:"header",children:[N&&d&&e.jsx(x,{onClick:z,design:P.Transparent,className:l.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:i.getText(Q)}),e.jsx(je,{className:K(l.title,d&&l.titleCenterAlign),children:g}),N&&e.jsx(x,{onClick:z,design:P.Transparent,className:l.clearBtn,children:i.getText(Q)}),e.jsx(Ee,{className:l.input,accessibleName:i.getText(k),value:I,placeholder:i.getText(k),onInput:pe,onKeyUp:H,icon:e.jsxs(e.Fragment,{children:[I&&e.jsx(J,{accessibleName:i.getText(X),title:i.getText(X),name:ye,interactive:!0,onClick:fe,className:l.inputIcon}),e.jsx(J,{interactive:!0,name:xe,className:l.inputIcon,onClick:H,accessibleName:i.getText(k),title:i.getText(k)})]})})]}),f===w.MultiSelect&&(!!E.length||B>0)&&e.jsx(Le,{design:Be.Info,className:l.infoBar,children:e.jsx(le,{children:`${i.getText(Ie)}: ${B??E.length}`})}),e.jsx(Ne,{...p,ref:de,growing:h,onLoadMore:r,mode:f,onSelectionChange:he,children:c}),e.jsxs("div",{slot:"footer",className:l.footer,children:[f===w.MultiSelect&&e.jsx(x,{onClick:Se,design:P.Emphasized,children:m??i.getText(Te)}),e.jsx(x,{onClick:ge,design:P.Transparent,children:i.getText(Re)})]})]})});D.defaultProps={mode:w.SingleSelect,listProps:{}};D.displayName="SelectDialog";try{D.displayName="SelectDialog",D.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ListMode.SingleSelect"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListMode`s, it is strongly recommended that you only use `SingleSelect` or `MultiSelect` in order to preserve the intended design.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "growing" | "footerText" | "mode" | "onLoadMore">'}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<IconDomRef, { prevValue: string; }>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: StandardListItemDomRef[]; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: StandardListItemDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:'Defines the state of the `Dialog`.\n**Note:** If `"Error"` and `"Warning"` state is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},growing:{defaultValue:null,description:'Defines whether the component will have growing capability either by pressing a `More` button, or via user scroll. In both cases `onLoadMore` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}const Ae=""+new URL("Laptop1-YqmaMw1Q.jpg",import.meta.url).href,_e=""+new URL("Laptop2-Ai04beMq.jpg",import.meta.url).href,Oe=""+new URL("PC1-XpF6zR2F.jpg",import.meta.url).href,qe=""+new URL("PC2-2SwlAxc8.jpg",import.meta.url).href,Me={title:"Modals & Popovers / SelectDialog",component:D,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product"},parameters:{chromatic:{delay:1e3}}},$=s.forwardRef((o,u)=>be.createPortal(e.jsx(D,{...o,ref:u}),document.body));$.displayName="SelectDialog";const ae=[{img:Ae,description:"LT-10",text:"Gaming Laptop"},{img:_e,description:"LT-20",text:"Business Laptop"},{img:qe,description:"HT-10",text:"Gaming PC"},{img:Oe,description:"HT-20",text:"Business PC"}],R={render:o=>{const[u,c]=s.useState(o.open),y=()=>{c(!0)},m=h=>{c(!1),o.onAfterClose(h)};return s.useEffect(()=>{c(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:y,children:"Open SelectDialog"}),e.jsx($,{...o,open:u,onAfterClose:m,children:new Array(40).fill("").map((h,g)=>{const d=ae[g%4];return e.jsx(ie,{image:d.img,description:`${d.description}${g}`,children:d.text},`${d.text}${g}`)})})]})}},L={render:()=>{const o=s.useRef(null),u={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[c,y]=s.useState(u),[m,h]=s.useState(),[g,d]=s.useState(Object.keys(u)),p=()=>{o.current.show()},f=S=>{h(S.detail.value)},B=()=>{h(void 0)},A=S=>{const n=S.detail.item.dataset.description;y(r=>{if(r[n]){const{[n]:v,...b}=r;return b}else return{...r,[n]:!0}})},N=()=>{y({})},V=()=>{d(Object.keys(c))};return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:p,children:"Open Dialog"}),e.jsx($,{mode:w.MultiSelect,ref:o,onSearchInput:f,onSearch:f,onSearchReset:B,numberOfSelectedItems:Object.keys(c).length,listProps:{onItemClick:A},showClearButton:!0,rememberSelections:!0,onClear:N,onConfirm:V,children:new Array(40).fill("").map((S,n)=>{const r=ae[n%4],v=`${r.description}${n}`,b=m==null?void 0:m.toLowerCase();return m&&!v.toLowerCase().includes(b)&&!r.text.toLowerCase().includes(b)?null:e.jsx(ie,{image:r.img,description:`${r.description}${n}`,"data-description":`${r.description}${n}`,selected:c[v],children:r.text},`${r.text}${n}`)}).filter(Boolean)}),e.jsxs(Ce,{children:[e.jsx(ke,{children:"Selected: "}),e.jsx(le,{children:g.join(", ")})]})]})}};var Z,ee,te;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
    // predefined selection
    const selectedProducts = {
      'HT-102': true,
      'HT-203': true,
      'HT-1038': true
    };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const [searchVal, setSearchVal] = useState();
    const [products, setProducts] = useState(Object.keys(selectedProducts));
    const onButtonClick = () => {
      dialogRef.current.show();
    };

    // search
    const handleSearch = e => {
      setSearchVal(e.detail.value);
    };
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
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
    return <>
        <Button onClick={onButtonClick}>Open Dialog</Button>
        <SelectDialog mode={ListMode.MultiSelect} ref={dialogRef} onSearchInput={handleSearch} onSearch={handleSearch} onSearchReset={handleSearchReset} numberOfSelectedItems={Object.keys(selectedItems).length} listProps={{
        onItemClick: handleItemClick
      }} showClearButton rememberSelections onClear={handleClear} onConfirm={handleConfirm}>
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
//# sourceMappingURL=SelectDialog.stories-__8thEEq.js.map
