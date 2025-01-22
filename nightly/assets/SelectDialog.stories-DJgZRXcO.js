import{j as t}from"./jsx-runtime-CLpGMVip.js";import{i as ye}from"./utils-C-WE68U-.js";import{L as y}from"./List-DgtIRlaK.js";import{r}from"./index-D23YZj_x.js";import{B as O}from"./index-DaCk7tY-.js";import{L as Oe}from"./index-DVZh2p7o.js";import{L as ae}from"./index-xdQYpZbi.js";import{T as ce}from"./index-DgufeG-1.js";import{F as le,c as je}from"./index-DlWYL6lf.js";import{B as M}from"./Button-Bn6Q5CAy.js";import{a as X}from"./Icon-DVzRT9Bg.js";import{I as Te}from"./Input-CdGIkdwS.js";import{d as Le}from"./decline-BOQDYlzc.js";import{s as be}from"./search-lTDZwfzP.js";import{e as x}from"./index-BQ73vKGB.js";import{c as Y}from"./clsx-B-dksMZM.js";import{u as ke,n as J,o as A,p as Q,q as we,r as De,C as ve}from"./i18n-defaults-CoZOvFer.js";import"./index-um0BACm9.js";import{L as Pe}from"./index-BPhoOnR5.js";import{u as $e}from"./useStylesheet-DNyxTWaC.js";import{h as qe}from"./withWebComponent-DfVDXLfc.js";import{D as Ee}from"./index-CegvHMDS.js";import{T as Re}from"./index-BJJjzqf0.js";import{I as Ne}from"./index-BnC1dkI8.js";import{I as ee}from"./index-DFqCSedi.js";const Me='@layer ui5-webcomponents-react{._dialog_1gi2q_1::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}._dialog_1gi2q_1::part(content){padding:0}._headerContent_1gi2q_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}._title_1gi2q_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_1gi2q_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_1gi2q_39{grid-area:titleStart;visibility:hidden}._clearBtn_1gi2q_44{grid-area:cancel;justify-self:end}._input_1gi2q_49{grid-area:input;width:100%}._footer_1gi2q_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%}._footer_1gi2q_54>*{margin-inline-start:.5rem}._inputIcon_1gi2q_66{color:var(--sapContent_IconColor);cursor:pointer}._infoBar_1gi2q_71{background-color:var(--sapInfobar_NonInteractive_Background);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);color:var(--sapList_TextColor);height:2rem;overflow:hidden;padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);position:sticky;top:0;z-index:1}}',a={dialog:"_dialog_1gi2q_1",headerContent:"_headerContent_1gi2q_13",title:"_title_1gi2q_24",titleCenterAlign:"_titleCenterAlign_1gi2q_34",hiddenClearBtn:"_hiddenClearBtn_1gi2q_39",clearBtn:"_clearBtn_1gi2q_44",input:"_input_1gi2q_49",footer:"_footer_1gi2q_54",inputIcon:"_inputIcon_1gi2q_66",infoBar:"_infoBar_1gi2q_71"},w=r.forwardRef((d,_)=>{const{open:c,children:p,className:g,confirmButtonText:h,confirmButtonProps:s,growing:u,headerText:H,headerTextAlignCenter:D,listProps:m={},selectionMode:C=y.Single,numberOfSelectedItems:v,rememberSelections:P,showClearButton:$,onClose:q,onClear:E,onConfirm:I,onLoadMore:V,onSearch:f,onSearchInput:o,onSearchReset:n,onBeforeOpen:B,onBeforeClose:S,onOpen:U,onCancel:R,...pe}=d;$e(Me,w.displayName);const i=ke("@ui5/webcomponents-react"),[j,F]=r.useState(""),[N,z]=r.useState([]),[ue,T]=qe(m.ref),[me,L]=r.useState(c);r.useEffect(()=>{L(c)},[c]);const fe=e=>{var K,W;const l=((K=T.current)==null?void 0:K.getSelectedItems())??[];typeof B=="function"&&B(e),C===y.Multiple&&((W=T.current)!=null&&W.hasData)&&z(l)},ge=e=>{var l;typeof U=="function"&&U(e),(l=T.current)==null||l.focusFirstItem()},he=e=>{typeof o=="function"&&o(x(e,{value:e.target.value})),F(e.target.value)},G=e=>{typeof f=="function"&&(e.type==="keyup"&&e.code==="Enter"&&f(x(e,{value:e.target.value})),e.type==="click"&&f(x(e,{value:j})))},Ce=e=>{typeof n=="function"&&n(x(e,{prevValue:j})),F("")},Se=e=>{typeof(m==null?void 0:m.onSelectionChange)=="function"&&m.onSelectionChange(e),C===y.Multiple?z(e.detail.selectedItems):(typeof I=="function"&&I(e),L(!1))},xe=e=>{L(!1),typeof R=="function"&&R(e)},Z=e=>{var l;typeof E=="function"&&E(x(e,{prevSelectedItems:N})),z([]),(l=T.current)==null||l.deselectSelectedItems()},_e=e=>{typeof I=="function"&&I(x(e,{selectedItems:N})),L(!1)},Ie=e=>{var l;L(!1),typeof q=="function"&&q(e),typeof n=="function"&&n(x(e,{prevValue:j})),F(""),P||(l=T.current)==null||l.deselectSelectedItems()},Be=e=>{typeof S=="function"&&S(e),typeof R=="function"&&e.detail.escPressed&&R(e)};return t.jsxs(Ee,{...pe,open:me,"data-component-name":"SelectDialog",ref:_,className:Y(a.dialog,g),onClose:Ie,onBeforeOpen:fe,onOpen:ge,onBeforeClose:Be,children:[t.jsxs("div",{className:a.headerContent,slot:"header",children:[$&&D&&t.jsx(O,{onClick:Z,design:M.Transparent,className:a.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:i.getText(J)}),t.jsx(Re,{className:Y(a.title,D&&a.titleCenterAlign),children:H}),$&&t.jsx(O,{onClick:Z,design:M.Transparent,className:a.clearBtn,children:i.getText(J)}),t.jsx(Ne,{className:a.input,accessibleName:i.getText(A),value:j,placeholder:i.getText(A),onInput:he,onKeyUp:G,type:Te.Search,icon:t.jsxs(t.Fragment,{children:[j&&t.jsx(ee,{accessibleName:i.getText(Q),title:i.getText(Q),name:Le,mode:X.Interactive,onClick:Ce,className:a.inputIcon}),t.jsx(ee,{mode:X.Interactive,name:be,className:a.inputIcon,onClick:G,accessibleName:i.getText(A),title:i.getText(A)})]})})]}),C===y.Multiple&&(!!N.length||v>0)&&t.jsx(le,{alignItems:je.Center,className:a.infoBar,children:t.jsx(ce,{children:`${i.getText(we)}: ${v??N.length}`})}),t.jsx(Pe,{...m,ref:ue,growing:u,onLoadMore:V,selectionMode:C,onSelectionChange:Se,children:p}),t.jsxs("div",{slot:"footer",className:a.footer,children:[C===y.Multiple&&t.jsx(O,{...s,onClick:_e,design:M.Emphasized,children:h??i.getText(De)}),t.jsx(O,{onClick:xe,design:M.Transparent,children:i.getText(ve)})]})]})});w.displayName="SelectDialog";const Ae=""+new URL("Laptop1-BiqZozDV.jpg",import.meta.url).href,He=""+new URL("Laptop2-CLTht4yo.jpg",import.meta.url).href,Ve=""+new URL("PC1-BekXrNHY.jpg",import.meta.url).href,Fe=""+new URL("PC2-DZLCUDFz.jpg",import.meta.url).href,ze={title:"Modals & Popovers / SelectDialog",component:w,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product",open:ye},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},de=[{img:Ae,description:"LT-10",text:"Gaming Laptop"},{img:He,description:"LT-20",text:"Business Laptop"},{img:Fe,description:"HT-10",text:"Gaming PC"},{img:Ve,description:"HT-20",text:"Business PC"}],b={render:d=>{const[_,c]=r.useState(d.open),p=()=>{c(!0)},g=h=>{c(!1),d.onClose(h)};return r.useEffect(()=>{c(d.open)},[d.open]),t.jsxs(t.Fragment,{children:[t.jsx(O,{onClick:p,children:"Open SelectDialog"}),t.jsx(w,{...d,open:_,onClose:g,children:new Array(40).fill("").map((h,s)=>{const u=de[s%4];return t.jsx(ae,{selected:s===1,image:t.jsx("img",{src:u.img,alt:"Example Image"}),description:`${u.description}${s}`,children:u.text},`${u.text}${s}`)})})]})}},k={render:()=>{const[d,_]=r.useState(!1),c={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[p,g]=r.useState(c),h=r.useRef(p),[s,u]=r.useState(),[H,D]=r.useState(Object.keys(c)),m=()=>{h.current=p},C=()=>{_(!0)},v=()=>{_(!1)},P=f=>{u(f.detail.value)},$=()=>{u(void 0)},q=f=>{const o=f.detail.item.dataset.description;g(n=>{if(n[o]){const{[o]:B,...S}=n;return S}else return{...n,[o]:!0}})},E=()=>{g({})},I=()=>{D(Object.keys(p))},V=()=>{g(h.current)};return t.jsxs(t.Fragment,{children:[t.jsx(O,{onClick:C,children:"Open Dialog"}),t.jsx(w,{open:d,selectionMode:y.Multiple,numberOfSelectedItems:Object.keys(p).length,listProps:{onItemClick:q},showClearButton:!0,rememberSelections:!0,onClear:E,onConfirm:I,onClose:v,onSearchInput:P,onSearch:P,onSearchReset:$,onBeforeOpen:m,onCancel:V,children:new Array(40).fill("").map((f,o)=>{const n=de[o%4],B=`${n.description}${o}`,S=s==null?void 0:s.toLowerCase();return s&&!B.toLowerCase().includes(S)&&!n.text.toLowerCase().includes(S)?null:t.jsx(ae,{image:t.jsx("img",{src:n.img,alt:"Example Image"}),description:`${n.description}${o}`,"data-description":`${n.description}${o}`,selected:p[B],children:n.text},`${n.text}${o}`)}).filter(Boolean)}),t.jsxs(le,{children:[t.jsx(Oe,{children:"Selected: "}),t.jsx(ce,{children:H.join(", ")})]})]})}};var te,ne,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState<boolean | undefined>(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          return <ListItemStandard selected={index === 1} image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`}>
                {currentProduct.text}
              </ListItemStandard>;
        })}
        </SelectDialog>
      </>;
  }
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
    const [searchVal, setSearchVal] = useState<string | undefined>();
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
        <SelectDialog open={dialogOpen} selectionMode={ListSelectionMode.Multiple} numberOfSelectedItems={Object.keys(selectedItems).length} listProps={{
        onItemClick: handleItemClick
      }} showClearButton rememberSelections onClear={handleClear} onConfirm={handleConfirm} onClose={handleClose} onSearchInput={handleSearch} onSearch={handleSearch} onSearchReset={handleSearchReset} onBeforeOpen={handleBeforeOpen} onCancel={handleCancel}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          const description = \`\${currentProduct.description}\${index}\`;
          const lowerCaseSearchVal = searchVal?.toLowerCase();
          if (searchVal && !description.toLowerCase().includes(lowerCaseSearchVal) && !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)) {
            return null;
          }
          return <ListItemStandard image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} data-description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} selected={selectedItems[description]}>
                  {currentProduct.text}
                </ListItemStandard>;
        }).filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>;
  }
}`,...(ie=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Ue=["Default","MultiSelect"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Default:b,MultiSelect:k,__namedExportsOrder:Ue,default:ze},Symbol.toStringTag,{value:"Module"}));export{Ct as C,b as D,k as M};
