import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{r as i}from"./index-OjgoNOWw.js";import{r as De}from"./index-QYh6idnL.js";import{F as Ie}from"./index-nT83TGBH.js";import{d as Te}from"./decline-U1O_cqCB.js";import{s as Be}from"./search-qOG4WpHE.js";import{T as z}from"./ThemingParameters-UghqSl-x.js";import{C as Y}from"./CssSizeVariables-eR3x6QxW.js";import{e as C}from"./index-ENBflQbU.js";import{c as Z}from"./clsx-Zbgk8kpT.js";import{c as Re}from"./react-jss.esm-fzYOEaou.js";import{u as Le,Z as J,B as _,_ as ee,$ as Oe,a0 as Ne,f as Ve}from"./i18n-defaults-8iJXv8tC.js";import{T as ce}from"./index-SpQb4Cav.js";import{T as Ee,a as je}from"./index-OhA8dGyU.js";import{L as w}from"./List-_i_LL5sC.js";import{L as ke}from"./index-QkafFLrt.js";import{u as te}from"./withWebComponent-c-uI2wMj.js";import{D as Pe}from"./index-Ea6o5pr-.js";import{B as D}from"./index-dCOnqvlA.js";import{B as q}from"./Button-6A8kFSGe.js";import{T as Ae}from"./index-uwleAU6M.js";import{I as _e}from"./index-9b43hcup.js";import{I as ne}from"./index-DTZNZQ9G.js";import{S as de}from"./index-3q-GRkKN.js";import{L as qe}from"./index-9ZYZw-bw.js";const Me=Re({dialog:{"&::part(header)":{paddingBottom:"0.25rem",flexDirection:"column",marginBottom:0},"&::part(content)":{padding:0}},headerContent:{display:"grid",gridTemplateColumns:"fit-content(100px) minmax(0, 1fr) fit-content(100px)",gridTemplateAreas:`
      "titleStart titleCenter cancel"
      "input input input"
      `,gridTemplateRows:`${Y.ui5WcrDialogHeaderHeight} ${Y.ui5WcrDialogSubHeaderHeight}`,width:"100%",alignItems:"center"},title:{fontSize:z.sapFontLargeSize,fontFamily:z.sapFontHeaderFamily,gridColumnStart:"titleStart",gridColumnEnd:"titleCenter",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},titleCenterAlign:{gridArea:"titleCenter",justifySelf:"center"},hiddenClearBtn:{gridArea:"titleStart",visibility:"hidden"},clearBtn:{gridArea:"cancel",justifySelf:"end"},input:{gridArea:"input",width:"100%"},footer:{display:"flex",alignItems:"center",justifyContent:"end",width:"100%",boxSizing:"border-box","& > *":{marginInlineStart:"0.5rem"}},inputIcon:{cursor:"pointer",color:z.sapContent_IconColor},infoBar:{padding:"0 0.5rem",position:"sticky",top:0,zIndex:1}},{name:"SelectDialog"}),N=i.forwardRef((r,m)=>{const{children:p,className:d,confirmButtonText:h,confirmButtonProps:g,growing:l,headerText:u,headerTextAlignCenter:V,listProps:f={},mode:S=w.SingleSelect,numberOfSelectedItems:E,rememberSelections:M,showClearButton:I,onAfterClose:j,onClear:k,onConfirm:y,onLoadMore:$,onSearch:T,onSearchInput:v,onSearchReset:n,onBeforeOpen:o,onBeforeClose:x,onAfterOpen:b,onCancel:P,...me}=r,s=Me(),a=Le("@ui5/webcomponents-react"),[B,F]=i.useState(""),[A,U]=i.useState([]),[pe,H]=te(m),[fe,R]=te(f.ref),he=e=>{var Q,X;const c=((Q=R.current)==null?void 0:Q.getSelectedItems())??[];typeof o=="function"&&o(e),S===w.MultiSelect&&((X=R.current)!=null&&X.hasData)&&U(c)},ge=e=>{var c;typeof b=="function"&&b(e),(c=R.current)==null||c.focusFirstItem()},Se=e=>{typeof v=="function"&&v(C(e,{value:e.target.value})),F(e.target.value)},G=e=>{typeof T=="function"&&(e.type==="keyup"&&e.code==="Enter"&&T(C(e,{value:e.target.value})),e.type==="click"&&T(C(e,{value:B})))},ve=e=>{typeof n=="function"&&n(C(e,{prevValue:B})),F("")},be=e=>{typeof(f==null?void 0:f.onSelectionChange)=="function"&&f.onSelectionChange(e),S===w.MultiSelect?U(e.detail.selectedItems):(typeof y=="function"&&y(e),H.current.close())},Ce=e=>{H.current.close(),typeof P=="function"&&P(e)},K=e=>{var c;typeof k=="function"&&k(C(e,{prevSelectedItems:A})),U([]),(c=R.current)==null||c.deselectSelectedItems()},ye=e=>{typeof y=="function"&&y(C(e,{selectedItems:A})),H.current.close()},xe=e=>{var c;typeof j=="function"&&j(e),typeof n=="function"&&n(C(e,{prevValue:B})),F(""),M||(c=R.current)==null||c.deselectSelectedItems()},we=e=>{typeof x=="function"&&x(e),typeof P=="function"&&e.detail.escPressed&&P(e)};return t.jsxs(Pe,{...me,"data-component-name":"SelectDialog",ref:pe,className:Z(s.dialog,d),onAfterClose:xe,onBeforeOpen:he,onAfterOpen:ge,onBeforeClose:we,children:[t.jsxs("div",{className:s.headerContent,slot:"header",children:[I&&V&&t.jsx(D,{onClick:K,design:q.Transparent,className:s.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:a.getText(J)}),t.jsx(Ae,{className:Z(s.title,V&&s.titleCenterAlign),children:u}),I&&t.jsx(D,{onClick:K,design:q.Transparent,className:s.clearBtn,children:a.getText(J)}),t.jsx(_e,{className:s.input,accessibleName:a.getText(_),value:B,placeholder:a.getText(_),onInput:Se,onKeyUp:G,icon:t.jsxs(t.Fragment,{children:[B&&t.jsx(ne,{accessibleName:a.getText(ee),title:a.getText(ee),name:Te,interactive:!0,onClick:ve,className:s.inputIcon}),t.jsx(ne,{interactive:!0,name:Be,className:s.inputIcon,onClick:G,accessibleName:a.getText(_),title:a.getText(_)})]})})]}),S===w.MultiSelect&&(!!A.length||E>0)&&t.jsx(Ee,{design:je.Info,className:s.infoBar,children:t.jsx(ce,{children:`${a.getText(Oe)}: ${E??A.length}`})}),t.jsx(ke,{...f,ref:fe,growing:l,onLoadMore:$,mode:S,onSelectionChange:be,children:p}),t.jsxs("div",{slot:"footer",className:s.footer,children:[S===w.MultiSelect&&t.jsx(D,{...g,onClick:ye,design:q.Emphasized,children:h??a.getText(Ne)}),t.jsx(D,{onClick:Ce,design:q.Transparent,children:a.getText(Ve)})]})]})});N.displayName="SelectDialog";try{N.displayName="SelectDialog",N.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},mode:{defaultValue:{value:"ListMode.SingleSelect"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListMode`s, it is strongly recommended that you only use `SingleSelect` or `MultiSelect` in order to preserve the intended design.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "onLoadMore" | "footerText" | "growing" | "mode">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "design" | "onClick">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<IconDomRef, { prevValue: string; }>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: StandardListItemDomRef[]; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: StandardListItemDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"MouseEventHandler<ButtonDomRef> | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:'"None"'},description:'Defines the state of the `Dialog`.\n**Note:** If `"Error"` and `"Warning"` state is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},open:{defaultValue:{value:"false"},description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:"Allows setting a custom role.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:{value:"false"},description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:{value:"false"},description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button, or via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}}}}}catch{}const $e=""+new URL("Laptop1-YqmaMw1Q.jpg",import.meta.url).href,Fe=""+new URL("Laptop2-Ai04beMq.jpg",import.meta.url).href,Ue=""+new URL("PC1-XpF6zR2F.jpg",import.meta.url).href,He=""+new URL("PC2-2SwlAxc8.jpg",import.meta.url).href,ze={title:"Modals & Popovers / SelectDialog",component:N,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product"},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},W=i.forwardRef((r,m)=>De.createPortal(t.jsx(N,{...r,ref:m}),document.body));W.displayName="SelectDialog";const ue=[{img:$e,description:"LT-10",text:"Gaming Laptop"},{img:Fe,description:"LT-20",text:"Business Laptop"},{img:He,description:"HT-10",text:"Gaming PC"},{img:Ue,description:"HT-20",text:"Business PC"}],L={render:r=>{const[m,p]=i.useState(r.open),d=()=>{p(!0)},h=g=>{p(!1),r.onAfterClose(g)};return i.useEffect(()=>{p(r.open)},[r.open]),t.jsxs(t.Fragment,{children:[t.jsx(D,{onClick:d,children:"Open SelectDialog"}),t.jsx(W,{...r,open:m,onAfterClose:h,children:new Array(40).fill("").map((g,l)=>{const u=ue[l%4];return t.jsx(de,{selected:l===1,image:u.img,description:`${u.description}${l}`,children:u.text},`${u.text}${l}`)})})]})}},O={render:()=>{const[r,m]=i.useState(!1),p={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[d,h]=i.useState(p),g=i.useRef(d),[l,u]=i.useState(),[V,f]=i.useState(Object.keys(p)),S=()=>{g.current=d},E=()=>{m(!0)},M=()=>{m(!1)},I=v=>{u(v.detail.value)},j=()=>{u(void 0)},k=v=>{const n=v.detail.item.dataset.description;h(o=>{if(o[n]){const{[n]:x,...b}=o;return b}else return{...o,[n]:!0}})},y=()=>{h({})},$=()=>{f(Object.keys(d))},T=()=>{h(g.current)};return t.jsxs(t.Fragment,{children:[t.jsx(D,{onClick:E,children:"Open Dialog"}),t.jsx(W,{open:r,mode:w.MultiSelect,numberOfSelectedItems:Object.keys(d).length,listProps:{onItemClick:k},showClearButton:!0,rememberSelections:!0,onClear:y,onConfirm:$,onAfterClose:M,onSearchInput:I,onSearch:I,onSearchReset:j,onBeforeOpen:S,onCancel:T,children:new Array(40).fill("").map((v,n)=>{const o=ue[n%4],x=`${o.description}${n}`,b=l==null?void 0:l.toLowerCase();return l&&!x.toLowerCase().includes(b)&&!o.text.toLowerCase().includes(b)?null:t.jsx(de,{image:o.img,description:`${o.description}${n}`,"data-description":`${o.description}${n}`,selected:d[x],children:o.text},`${o.text}${n}`)}).filter(Boolean)}),t.jsxs(Ie,{children:[t.jsx(qe,{children:"Selected: "}),t.jsx(ce,{children:V.join(", ")})]})]})}};var oe,re,le;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(re=L.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ae,ie;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const We=["Default","MultiSelect"],vt=Object.freeze(Object.defineProperty({__proto__:null,Default:L,MultiSelect:O,__namedExportsOrder:We,default:ze},Symbol.toStringTag,{value:"Module"}));export{vt as C,L as D,O as M};
