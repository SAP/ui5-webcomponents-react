import{j as e}from"./jsx-runtime-CLpGMVip.js";import{d as ne}from"./Friends500-CRbR9XAn.js";import{a as G,T as se}from"./index-DvP8tU6i.js";import"./index-Bc-2uLv1.js";import{r as v}from"./index-D23YZj_x.js";import{t as oe,e as R,T as Y,a as u,b as f,c as r}from"./index-BwvLAi8p.js";import{p as q,d as ae,s as b,m as Z,I as J,w as Q}from"./withWebComponent-DfVDXLfc.js";import{m as P,l as E,a as ie}from"./LitRenderer-Zl5KMCf2.js";import{l as X}from"./event-strict-DgQLNDEV.js";import{i as re}from"./i18n-DEVDpFvK.js";import{i as I,b as le,B as ce,m as de,P as he,u as ue,Z as pe,W as be,D as ge,O as we,Y as fe,F as me}from"./Keys-Df3IBHp2.js";import{c as xe}from"./useIsomorphicLayoutEffect-Clyi7m9u.js";import{d as _e}from"./parameters-bundle.css-BzaqQttB.js";import{bg as Te,bh as Ce}from"./i18n-defaults-Cyg2J0QB.js";import{t as ve}from"./getActiveElement-kltGt_DR.js";import{b as H}from"./TabbableElements-XzXYKyvZ.js";import{a as Re,S as je}from"./index-C-QuXNwu.js";var N;(function(s){s.Button="Button",s.Scroll="Scroll"})(N||(N={}));const j=N;function ye(s,t,n){return P`${this._hasGrowingButton?Se.call(this,s,t,n):void 0}`}function Se(s,t,n){return P`<div id="growing-button" tabindex="-1" ?active="${this._activeState}" @click="${this.loadMore}" @keydown="${this._onKeydown}" @keyup="${this._onKeyup}" @focusout="${this._onFocusout}" role="button" aria-labelledby="growing-text growing-subtext" aria-describedby="growing-description"><span id="growing-text">${E(this._growingButtonText)}</span>${this.growingSubText?Be.call(this,s,t,n):void 0}<span id="growing-description" style="display: none;" aria-hidden="true">${E(this._growingButtonDescription)}</span></div>`}function Be(s,t,n){return P`<span id="growing-subtext">${E(this.growingSubText)}</span>`}function He(){return ye.call(this,this,this.constructor.tagsToScope,xe())}q("@ui5/webcomponents-theming","sap_horizon",async()=>ae);q("@ui5/webcomponents","sap_horizon",async()=>_e);const Me=`:host{flex-grow:1}#growing-button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}#growing-button{margin:0;padding:0;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}@media (hover: hover){#growing-button:hover{background:var(--sapButton_Hover_Background)}}#growing-button:active,#growing-button[active]{background:var(--sapList_Active_Background)}#growing-text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#growing-subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;var g=function(s,t,n,a){var l=arguments.length,o=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,n,a);else for(var c=s.length-1;c>=0;c--)(i=s[c])&&(o=(l<3?i(o):l>3?i(t,n,o):i(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o},y;let p=y=class extends J{constructor(){super(...arguments),this.type="Button",this._activeState=!1,this._invalidate=0,this.identifier="TableGrowing",this._renderContent=!0}onTableActivate(t){this._table=t,this._shouldFocusRow=!1}onTableAfterRendering(){var t,n;if(this._shouldFocusRow){this._shouldFocusRow=!1;let a=(t=this._currentLastRow)==null?void 0:t.nextElementSibling;this.hasGrowingComponent()&&(a||(a=this.getFocusDomRef())),a||(a=(n=this._table)==null?void 0:n.rows[0]),a==null||a.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){var t;this._table=void 0,(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){var t;(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._currentLastRow=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.type===j.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.type===`${j.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1]),this._shouldFocusRow=!0,this.fireDecoratorEvent("load-more")}_hasScrollToLoad(){return this.type===j.Scroll}_observeTableEnd(){var n;if(!this._table)return;const t=(n=this._table.shadowRoot)==null?void 0:n.querySelector("#table-end-row");t&&this._getIntersectionObserver().observe(t)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:document})),this._observer}_onIntersection(t){t.some(n=>n.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(t){I(t)&&(t.preventDefault(),this._activeState=!0),le(t)&&(this.loadMore(),this._activeState=!0)}_onKeyup(t){I(t)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _growingButtonText(){return this.growingText||y.i18nBundle.getText(Te)}get _growingButtonDescription(){return y.i18nBundle.getText(Ce)}get _hasGrowingButton(){return this.hasGrowingComponent()}};g([b()],p.prototype,"type",void 0);g([b()],p.prototype,"growingText",void 0);g([b()],p.prototype,"growingSubText",void 0);g([b({type:Boolean})],p.prototype,"_activeState",void 0);g([b({type:Number,noAttribute:!0})],p.prototype,"_invalidate",void 0);g([re("@ui5/webcomponents")],p,"i18nBundle",void 0);p=y=g([Z({tag:"ui5-table-growing",renderer:ie,template:He,styles:Me}),X("load-more",{bubbles:!0})],p);p.define();const ee=Q("ui5-table-growing",["growingSubText","growingText","type"],[],[],["load-more"]);ee.displayName="TableGrowing";var S=function(s,t,n,a){var l=arguments.length,o=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,n,a);else for(var c=s.length-1;c>=0;c--)(i=s[c])&&(o=(l<3?i(o):l>3?i(t,n,o):i(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o},h;(function(s){s[s.None=0]="None",s[s.Next=1]="Next",s[s.Previous=2]="Previous",s[s.Released=4]="Released",s[s.NextReleased=5]="NextReleased",s[s.PreviousReleased=6]="PreviousReleased"})(h||(h={}));let m=class extends J{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier="TableVirtualizer",this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=h.None,this._onScrollBound=oe(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(t){if(this._table?this._updateRowsHeight():(this._table=t,this._scrollContainer.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&h.Released){const n=this._table.rows.at(this._tabBlockingState&h.Next?-1:0),a=H(n).at(this._tabBlockingState&h.Next?0:-1);this._tabBlockingState=h.None,(a||n).focus()}}onExitDOM(){this._scrollContainer.removeEventListener("scroll",this._onScrollBound),this._table=void 0}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById("rows")}_onScroll(){const t=this._table.headerRow[0],n=t.offsetHeight;let a=this._scrollContainer.scrollTop,l=this._scrollContainer.clientHeight;t.sticky?l=Math.max(0,l-n):a=Math.max(0,a-n),this._visibleRowCount=Math.ceil(l/this.rowHeight);let o=Math.floor(a/this.rowHeight)-this.extraRows;o=Math.max(0,o);let i=Math.max(0,o+this._visibleRowCount+2*this.extraRows);i=Math.min(i,this.rowCount),!(this._firstRowPosition===o&&this._lastRowPosition===i)&&(this._lastRowPosition=i,this._firstRowPosition=o,this.fireDecoratorEvent("range-change",{first:o,last:i}))}_updateRowsHeight(){const t=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${t}px`}_getTransform(){if(!this._table)return;const t=this._table.rows[0];if(t&&t.position>0)return`translateY(${t.position*this.rowHeight}px)`}_onRowInvalidate(t){t.name==="position"&&(t.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=h.Released)}_onKeyDown(t){if(!this._table)return;let n=0;const a=this._table.rows,l=a[0],o=a[a.length-1],i=l.position!==0,c=o.position!==this.rowCount-1,w=this._table._tableNavigation,d=ve();if(ce(t)&&c&&H(this._rowsContainer).pop()===d?(this._tabBlockingState=h.Next,o.attachInvalidate(this._onRowInvalidateBound),n=this.rowHeight):de(t)&&i&&H(this._rowsContainer).shift()===d?(this._tabBlockingState=h.Previous,l.attachInvalidate(this._onRowInvalidateBound),n=this.rowHeight*-1):c&&w._getNavigationItemsOfRow(o).includes(d)?he(t)||ue(t)?n=this.rowHeight:pe(t)?n=this._visibleRowCount*this.rowHeight:be(t)&&d===o&&(n=this.rowCount*this.rowHeight):i&&w._getNavigationItemsOfRow(l).includes(d)&&(ge(t)||we(t)?n=this.rowHeight*-1:fe(t)?n=this._visibleRowCount*this.rowHeight*-1:me(t)&&d===l&&(n=this.rowCount*this.rowHeight*-1)),n){const B=this._table.scrollTop;this._scrollContainer.scrollTop+=n,this._scrollContainer.scrollTop!==B&&t.preventDefault()}}};S([b({type:Number})],m.prototype,"rowHeight",void 0);S([b({type:Number})],m.prototype,"rowCount",void 0);S([b({type:Number})],m.prototype,"extraRows",void 0);m=S([Z({tag:"ui5-table-virtualizer"}),X("range-change")],m);m.define();const te=Q("ui5-table-virtualizer",["extraRows","rowCount","rowHeight"],[],[],["range-change"]);te.displayName="TableVirtualizer";const Ee={title:"Data Display / Table",component:R,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:e.jsxs(Y,{sticky:!0,children:[e.jsx(u,{width:"200px",minWidth:"200px",children:e.jsx("span",{children:"Product"})}),e.jsx(u,{minWidth:"200px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(u,{minWidth:"200px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(u,{minWidth:"100px",maxWidth:"200px",children:e.jsx("span",{children:"Weight"})}),e.jsx(u,{minWidth:"200px",children:e.jsx("span",{children:"Price"})})]})},tags:["package:@ui5/webcomponents"]},x={render:s=>e.jsxs(R,{...s,children:[e.jsxs(f,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(r,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(f,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(r,{children:e.jsx("span",{children:"1249EUR"})})]})]})},_={render:s=>{const t=o=>new Array(25).fill("").map((i,c)=>e.jsxs(f,{children:[e.jsx(r,{children:e.jsx("span",{children:c+o})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder 2"})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder 3"})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder 4"})})]},`${c+o}-row`)),[n,a]=v.useState(t(1)),l=()=>{a(o=>[...o,...t(o.length+1)])};return e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(R,{...s,features:e.jsx(ee,{onLoadMore:l,type:j.Scroll}),children:n})})}},T={render(s){const[t,n]=v.useState(G.Multiple);return e.jsxs(e.Fragment,{children:[e.jsx(Re,{onSelectionChange:a=>{n(a.detail.selectedItems[0].textContent)},children:Object.values(G).map(a=>e.jsx(je,{selected:a===t,children:a},a))}),e.jsxs(R,{...s,features:e.jsx(se,{mode:t}),children:[e.jsxs(f,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(r,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(f,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(r,{children:e.jsx("span",{children:"1249EUR"})})]})]})]})}},M=ne.map((s,t)=>({...s,position:t})),C={args:{className:"tableHeightContentDensity"},render(s){const[t,n]=v.useState(M.slice(0,9)),[a,l]=v.useState(!0),o=i=>{const{first:c,last:w}=i.detail,d=Math.max(c-2,0),B=Math.min(w+2,M.length);n(M.slice(d,B))};return v.useEffect(()=>{const i=document.body;if(!i)return;const c=new MutationObserver(w=>{w.forEach(d=>{d.type==="attributes"&&d.attributeName==="class"&&l(!i.classList.contains("ui5-content-density-compact"))})});return c.observe(i,{attributes:!0,attributeFilter:["class"]}),()=>{c.disconnect()}},[]),e.jsx(R,{...s,headerRow:e.jsxs(Y,{sticky:!0,children:[e.jsx(u,{children:"Name"}),e.jsx(u,{children:"Age"}),e.jsx(u,{children:"Friend Name"}),e.jsx(u,{children:"Friend Age"})]}),features:e.jsx(te,{rowCount:500,rowHeight:a?44:32,onRangeChange:o}),children:t.map(i=>e.jsxs(f,{position:i.position,children:[e.jsx(r,{children:e.jsx("span",{children:i.name})}),e.jsx(r,{children:e.jsx("span",{children:i.age})}),e.jsx(r,{children:e.jsx("span",{children:i.friend.name})}),e.jsx(r,{children:e.jsx("span",{children:i.friend.age})})]},i.position))})}};var D,O,L;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args}>
        <TableRow>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...(L=(O=x.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var $,z,F;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const createRows = indexOffset => {
      return new Array(25).fill('').map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 2</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 3</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 4</span>
          </TableCell>
        </TableRow>);
    };
    const [rows, setRows] = useState(createRows(1));
    const onLoadMore = () => {
      setRows(prev => [...prev, ...createRows(prev.length + 1)]);
    };
    return <div style={{
      height: '250px',
      overflow: 'auto'
    }}>
        <Table {...args} features={<TableGrowing onLoadMore={onLoadMore} type={TableGrowingMode.Scroll} />}>
          {rows}
        </Table>
      </div>;
  }
}`,...(F=(z=_.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var V,W,k;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render(args) {
    const [mode, setMode] = useState<TableSelectionMode>(TableSelectionMode.Multiple);
    return <>
        <SegmentedButton onSelectionChange={e => {
        setMode(e.detail.selectedItems[0].textContent);
      }}>
          {Object.values(TableSelectionMode).map(selectionMode => <SegmentedButtonItem key={selectionMode} selected={selectionMode === mode}>
              {selectionMode}
            </SegmentedButtonItem>)}
        </SegmentedButton>
        <Table {...args} features={<TableSelection mode={mode} />}>
          <TableRow>
            <TableCell>
              <span>Notebook Basic</span>
            </TableCell>
            <TableCell>
              <span>Very Best Screens</span>
            </TableCell>
            <TableCell>
              <span>30 x 18 x 3cm</span>
            </TableCell>
            <TableCell>
              <span>4.2KG</span>
            </TableCell>
            <TableCell>
              <span>956EUR</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span>Notebook Basic 17HT-1001</span>
            </TableCell>
            <TableCell>
              <span>Very Best Screens</span>
            </TableCell>
            <TableCell>
              <span>29 x 17 x 3.1cm</span>
            </TableCell>
            <TableCell>
              <span>4.5KG</span>
            </TableCell>
            <TableCell>
              <span>1249EUR</span>
            </TableCell>
          </TableRow>
        </Table>
      </>;
  }
}`,...(k=(W=T.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var A,K,U;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    className: 'tableHeightContentDensity'
  },
  render(args) {
    const [data, setData] = useState(dataLargeWithPosition.slice(0, 9));
    const [isCozy, setIsCozy] = useState(true);
    const handleRangeChange: TableVirtualizerPropTypes['onRangeChange'] = e => {
      const {
        first,
        last
      } = e.detail;

      // overscanCount = 2
      const overscanCountStart = Math.max(first - 2, 0);
      const overscanCountEnd = Math.min(last + 2, dataLargeWithPosition.length);
      setData(dataLargeWithPosition.slice(overscanCountStart, overscanCountEnd));
    };

    // adjust row height according to content-density mode (only for demo purposes)
    useEffect(() => {
      const body = document.body;
      if (!body) return;
      const observer = new MutationObserver(mutationsList => {
        mutationsList.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            setIsCozy(!body.classList.contains('ui5-content-density-compact'));
          }
        });
      });
      observer.observe(body, {
        attributes: true,
        attributeFilter: ['class']
      });
      return () => {
        observer.disconnect();
      };
    }, []);
    return <Table {...args} headerRow={<TableHeaderRow sticky>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
            <TableHeaderCell>Friend Name</TableHeaderCell>
            <TableHeaderCell>Friend Age</TableHeaderCell>
          </TableHeaderRow>} features={<TableVirtualizer rowCount={500} rowHeight={isCozy ? 44 : 32} onRangeChange={handleRangeChange} />}>
        {data.map(row => <TableRow key={row.position} position={row.position}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>)}
      </Table>;
  }
}`,...(U=(K=C.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const Ne=["Default","GrowingTable","WithSelection","VirtualizedTableRows"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Default:x,GrowingTable:_,VirtualizedTableRows:C,WithSelection:T,__namedExportsOrder:Ne,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Qe as C,x as D,_ as G,ee as T,C as V,T as W,te as a};
