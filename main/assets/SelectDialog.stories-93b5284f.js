import{a as v,j as t,F as j}from"./jsx-runtime-670450c2.js";import{F as Ce}from"./index-6923d62a.js";import{d as ye}from"./decline-ff534003.js";import{s as we}from"./search-d68d0f2f.js";import{T as U}from"./ThemingParameters-f4b4144e.js";import{b as K}from"./CssSizeVariables-bd372cde.js";import{e as S}from"./index-99d317a4.js";import{c as J}from"./clsx.m-1229b3e0.js";import{r as u}from"./index-f1f749bf.js";import{c as Te}from"./react-jss.esm-e54d2f1d.js";import{u as Ie,ah as Q,O as A,a5 as X,aA as De,aB as xe,C as Le}from"./i18n-defaults-a62b2e2b.js";import{T as le}from"./index-2eaff221.js";import{T as Be,a as Re}from"./index-b6bca73f.js";import{L as Ve}from"./index-bd274735.js";import{u as Y}from"./withWebComponent-63dd52a0.js";import{D as Ne}from"./index-26f1131d.js";import{B as T}from"./index-b7f80a1d.js";import{a as O}from"./Button-e1b15b5b.js";import{T as ke}from"./index-349afbe4.js";import{I as Ee}from"./index-f07d6498.js";import{I as Z}from"./index-4e221527.js";import{a as I}from"./ListItemBase-948677f0.js";import{S as ae}from"./index-7c687405.js";import{L as Pe}from"./index-998f859a.js";const Ae=Te({dialog:{"&::part(header)":{paddingBottom:"0.25rem",flexDirection:"column",marginBottom:0},"&::part(content)":{padding:0}},headerContent:{display:"grid",gridTemplateColumns:"fit-content(100px) minmax(0, 1fr) fit-content(100px)",gridTemplateAreas:`
      "titleStart titleCenter cancel"
      "input input input"
      `,gridTemplateRows:`${K.sapWcrDialogHeaderHeight} ${K.sapWcrDialogSubHeaderHeight}`,width:"100%",alignItems:"center"},title:{fontSize:U.sapFontLargeSize,fontFamily:U.sapFontHeaderFamily,gridColumnStart:"titleStart",gridColumnEnd:"titleCenter",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},titleCenterAlign:{gridArea:"titleCenter",justifySelf:"center"},hiddenClearBtn:{gridArea:"titleStart",visibility:"hidden"},clearBtn:{gridArea:"cancel",justifySelf:"end"},input:{gridArea:"input",width:"100%"},footer:{display:"flex",alignItems:"center",justifyContent:"end",width:"100%",boxSizing:"border-box","& > *":{marginInlineStart:"0.5rem"}},inputIcon:{cursor:"pointer",color:U.sapContent_IconColor},infoBar:{padding:"0 0.5rem",position:"sticky",top:0,zIndex:1}},{name:"SelectDialog"}),b=u.forwardRef((r,D)=>{const{children:c,className:C,confirmButtonText:y,growing:w,headerText:m,headerTextAlignCenter:i,listProps:d,mode:p,numberOfSelectedItems:V,rememberSelections:_,showClearButton:N,onAfterClose:k,onClear:h,onConfirm:n,onLoadMore:o,onSearch:f,onSearchInput:g,onSearchReset:E,onBeforeOpen:F,onAfterOpen:H,...ce}=r,l=Ae(),a=Ie("@ui5/webcomponents-react"),[x,q]=u.useState(""),[P,M]=u.useState([]),[de,$]=Y(D),[ue,L]=Y(d.ref),me=e=>{var s,G;typeof F=="function"&&F(e),p===I.MultiSelect&&((s=L.current)!=null&&s.hasData)&&M(((G=L.current)==null?void 0:G.getSelectedItems())??[])},pe=e=>{var s;typeof H=="function"&&H(e),(s=L.current)==null||s.focusFirstItem()},he=e=>{typeof g=="function"&&g(S(e,{value:e.target.value})),q(e.target.value)},z=e=>{typeof f=="function"&&(e.type==="keyup"&&e.code==="Enter"&&f(S(e,{value:e.target.value})),e.type==="click"&&f(S(e,{value:x})))},fe=e=>{typeof E=="function"&&E(S(e,{prevValue:x})),q("")},ge=e=>{typeof(d==null?void 0:d.onSelectionChange)=="function"&&d.onSelectionChange(e),p===I.MultiSelect?M(e.detail.selectedItems):(typeof n=="function"&&n(e),$.current.close())},Se=()=>{$.current.close()},W=e=>{var s;typeof h=="function"&&h(S(e,{prevSelectedItems:P})),M([]),(s=L.current)==null||s.deselectSelectedItems()},ve=e=>{typeof n=="function"&&n(S(e,{selectedItems:P})),$.current.close()},be=e=>{var s;typeof k=="function"&&k(e),typeof E=="function"&&E(S(e,{prevValue:x})),q(""),_||(s=L.current)==null||s.deselectSelectedItems()};return v(Ne,{...ce,"data-component-name":"SelectDialog",ref:de,className:J(l.dialog,C),onAfterClose:be,onBeforeOpen:me,onAfterOpen:pe,children:[v("div",{className:l.headerContent,slot:"header",children:[N&&i&&t(T,{onClick:W,design:O.Transparent,className:l.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:a.getText(Q)}),t(ke,{className:J(l.title,i&&l.titleCenterAlign),children:m}),N&&t(T,{onClick:W,design:O.Transparent,className:l.clearBtn,children:a.getText(Q)}),t(Ee,{className:l.input,accessibleName:a.getText(A),value:x,placeholder:a.getText(A),onInput:he,onKeyUp:z,icon:v(j,{children:[x&&t(Z,{accessibleName:a.getText(X),title:a.getText(X),name:ye,interactive:!0,onClick:fe,className:l.inputIcon}),t(Z,{name:we,className:l.inputIcon,onClick:z,accessibleName:a.getText(A),title:a.getText(A)})]})})]}),p===I.MultiSelect&&(!!P.length||V>0)&&t(Be,{design:Re.Info,className:l.infoBar,children:t(le,{children:`${a.getText(De)}: ${V??P.length}`})}),t(Ve,{...d,ref:ue,growing:w,onLoadMore:o,mode:p,onSelectionChange:ge,children:c}),v("div",{slot:"footer",className:l.footer,children:[p===I.MultiSelect&&t(T,{onClick:ve,design:O.Emphasized,children:y??a.getText(xe)}),t(T,{onClick:Se,design:O.Transparent,children:a.getText(Le)})]})]})});b.defaultProps={mode:I.SingleSelect,listProps:{}};b.displayName="SelectDialog";try{b.displayName="SelectDialog",b.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ListMode.SingleSelect"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListMode`s, it is strongly recommended that you only use `SingleSelect` or `MultiSelect` in order to preserve the intended design.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'}]}},growing:{defaultValue:null,description:'Defines whether the `List` will have growing capability either by pressing a `More` button, or via user scroll. In both cases the `onLoadMore` event is fired.\n\nAvailable options:\n\n`Button` - Shows a `More` button at the bottom of the list, pressing of which triggers the `load-more` event.\n`Scroll` - The `load-more` event is triggered when the user scrolls to the bottom of the list;\n`None` (default) - The growing is off.\n\n**Limitations:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "mode" | "onLoadMore">'}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<IconDomRef, { prevValue: string; }>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: StandardListItemDomRef[]; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: StandardListItemDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:'Defines the state of the `Dialog`.\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, { escPressed: boolean; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}}}}}catch{}const Oe=""+new URL("Laptop1-59a0ea5a.jpg",import.meta.url).href,_e=""+new URL("Laptop2-7b05e4f5.jpg",import.meta.url).href,qe=""+new URL("PC1-974f5c12.jpg",import.meta.url).href,Me=""+new URL("PC2-9045ab71.jpg",import.meta.url).href,$e={title:"Modals & Popovers / SelectDialog",component:b,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product"}},se=[{img:Oe,description:"LT-10",text:"Gaming Laptop"},{img:_e,description:"LT-20",text:"Business Laptop"},{img:Me,description:"HT-10",text:"Gaming PC"},{img:qe,description:"HT-20",text:"Business PC"}],B={render:r=>{const[D,c]=u.useState(r.open),C=()=>{c(!0)},y=w=>{c(!1),r.onAfterClose(w)};return u.useEffect(()=>{c(r.open)},[r.open]),v(j,{children:[t(T,{onClick:C,children:"Open SelectDialog"}),t(b,{...r,open:D,onAfterClose:y,children:new Array(40).fill("").map((w,m)=>{const i=se[m%4];return t(ae,{image:i.img,description:`${i.description}${m}`,children:i.text},`${i.text}${m}`)})})]})}},R={render:()=>{const r=u.useRef(null),D=()=>{r.current.show()},[c,C]=u.useState(),y=h=>{C(h.detail.value)},w=()=>{C(void 0)},m={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[i,d]=u.useState(m),p=h=>{const n=h.detail.item.dataset.description;d(o=>{if(o[n]){const{[n]:f,...g}=o;return g}else return{...o,[n]:!0}})},V=()=>{d({})},[_,N]=u.useState(Object.keys(m)),k=()=>{N(Object.keys(i))};return v(j,{children:[t(T,{onClick:D,children:"Open Dialog"}),t(b,{mode:I.MultiSelect,ref:r,onSearchInput:y,onSearch:y,onSearchReset:w,numberOfSelectedItems:Object.keys(i).length,listProps:{onItemClick:p},showClearButton:!0,onClear:V,onConfirm:k,children:new Array(40).fill("").map((h,n)=>{const o=se[n%4],f=`${o.description}${n}`,g=c==null?void 0:c.toLowerCase();return c&&!f.toLowerCase().includes(g)&&!o.text.toLowerCase().includes(g)?null:t(ae,{image:o.img,description:`${o.description}${n}`,"data-description":`${o.description}${n}`,selected:i[f],children:o.text},`${o.text}${n}`)}).filter(Boolean)}),v(Ce,{children:[t(Pe,{children:"Selected: "}),t(le,{children:_.join(", ")})]})]})}};var ee,te,ne;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,ie;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
            [itemDescription]: omit,
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
}`,...(ie=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const Ue=["Default","MultiSelect"],mt=Object.freeze(Object.defineProperty({__proto__:null,Default:B,MultiSelect:R,__namedExportsOrder:Ue,default:$e},Symbol.toStringTag,{value:"Module"}));export{mt as C,B as D,R as M};
//# sourceMappingURL=SelectDialog.stories-93b5284f.js.map
