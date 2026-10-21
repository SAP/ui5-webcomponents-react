import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{X as r,Y as i}from"./CustomElementsScopeUtils-Cw9cVXS8.js";import{a,c as o,d as s,f as c,l as ee,n as te,o as l,r as u,s as ne,u as d}from"./jsx-runtime-CMuXpgGv.js";import{I as re,n as ie,q as ae}from"./Keys-DqJfIghV.js";import{n as f,t as p}from"./withWebComponent-DhD1x6sB.js";import{t as oe}from"./jsx-runtime-BdxMnOeJ.js";import{n as se,t as ce}from"./event-strict-C4u0wMzB.js";import{n as m,t as le}from"./i18n-BNTZIxbt.js";import{a as h,n as ue,o as de,t as g}from"./ListItemGroup-thWhocTC.js";import{n as fe,t as pe}from"./WrappingType-OlQEie_k.js";import{n as _,t as me}from"./search-DrA17dwY.js";import{an as he,in as ge,qr as _e}from"./i18n-defaults-jaPn7b2P.js";import{n as v,t as y}from"./parameters-bundle.css-BX-hSQcc.js";import{n as ve,t as ye}from"./ListBoxItemGroupTemplate-B5kUyUIv.js";import{n as be,t as b}from"./Search-BbttJ7BO.js";import{a as xe,i as Se,n as Ce,o as we,r as x,t as S}from"./SearchScope-DgNmI2xa.js";import{n as Te,t as C}from"./globe-zxuhTrRo.js";import{n as w,t as T}from"./history-Ct4ZT7Za.js";var E;function D(){return(D=e((()=>{r(),a(),y(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>l),i(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>v,`host`),E=`:host{height:2.75rem;background:var(--sapList_GroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor)}.ui5-group-li-root{width:100%;height:100%;position:relative;box-sizing:border-box;padding:0;margin:0;list-style-type:none}[ui5-li-group-header]::part(native-li){line-height:normal;padding-bottom:.5rem}[ui5-li-group-header]{border-bottom:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor)}
`})))()}var O,k;function A(){return(A=e((()=>{s(),ue(),D(),ve(),fe(),O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends g{get isGroupItem(){return!0}getGroupHeaderWrapping(){return pe.Normal}},k=O([c({tag:`ui5-search-item-group`,styles:[g.styles,E],template:ye})],k),k.define()})))()}var j;function M(){return(M=e((()=>{A(),p(),j=f(`ui5-search-item-group`,[`headerAccessibleName`,`headerText`,`wrappingType`],[],[`header`],[`move-over`,`move`]),j.displayName=`SearchItemGroup`;try{j.displayName=`SearchItemGroup`,j.__docgenInfo={description:"The `SearchItemGroup` is type of suggestion item,\nthat can be used to split the `SearchItem` suggestions into groups.\n\n__Note:__ This is a UI5 Web Component! [SearchItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SearchItemGroup) | [Repository](https://github.com/UI5/webcomponents)",displayName:`SearchItemGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`}],description:`Defines the items of the group.

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`}],description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onMove:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`}],description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onMove`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SearchItemGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},onMoveOver:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`}],description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onMoveOver`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SearchItemGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},headerAccessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupAttributes`}],description:`Defines the accessible name of the header.`,name:`headerAccessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupAttributes`}],description:`Defines the header text of the group.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},wrappingType:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupAttributes`}],description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ui5-expandable-text\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents-fiori**.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemGroup/index.d.ts`,name:`SearchItemGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | WrappingType | "Normal"`,value:[{value:`"None"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.`,experimental:``}}}catch{}})))()}function Ee(){return u(`li`,{class:`ui5-li-root ui5-li--focusable ui5-search-item-show-more`,role:`option`,tabindex:this._effectiveTabIndex,"aria-selected":this.selected,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,children:u(`span`,{class:`ui5-search-item-show-more-text`,children:this.showMoreTextCount})})}function N(){return(N=e((()=>{te()})))()}var P;function F(){return(F=e((()=>{r(),a(),y(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>l),i(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>v,`host`),P=`.ui5-search-item-show-more-text{color:var(--sapLinkColor)}.ui5-search-item-show-more-text:active{color:var(--sapList_Active_TextColor)}
`})))()}var I,L,R;function z(){return(z=e((()=>{s(),ee(),ce(),de(),ne(),m(),N(),we(),F(),_e(),ae(),I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=L=class extends h{constructor(){super(...arguments),this.selected=!1}get showMoreTextCount(){return this.itemsToShowCount?L.i18nBundle.getText(ge,this.itemsToShowCount):L.i18nBundle.getText(he)}_onfocusin(e){super._onfocusin(e),this.selected=!0}_onfocusout(){this.selected=!1}_onclick(e,t=!1){e.stopImmediatePropagation(),this.fireDecoratorEvent(`click`,{item:this,originalEvent:e,fromKeyboard:t})}_onkeydown(e){re(e)&&(this._onclick(e,!0),e.preventDefault())}_onkeyup(e){ie(e)&&(this._onclick(e,!0),e.preventDefault())}},I([d({type:Number})],R.prototype,`itemsToShowCount`,void 0),I([d({type:Boolean})],R.prototype,`selected`,void 0),I([le(`@ui5/webcomponents-fiori`)],R,`i18nBundle`,void 0),R=L=I([c({tag:`ui5-search-item-show-more`,languageAware:!0,renderer:o,template:Ee,styles:[h.styles,xe,P]}),se(`click`,{bubbles:!0,cancelable:!0})],R),R.define()})))()}var B;function V(){return(V=e((()=>{z(),p(),B=f(`ui5-search-item-show-more`,[`itemsToShowCount`],[`selected`],[],[`click`]),B.displayName=`SearchItemShowMore`;try{B.displayName=`SearchItemShowMore`,B.__docgenInfo={description:`A \`SearchItemShowMore\` is a special type of ui5-li that acts as a button to progressively reveal additional (overflow) items within a group.



__Note:__ This is a UI5 Web Component! [SearchItemShowMore UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SearchItemShowMore) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`SearchItemShowMore`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/SearchItemShowMore/index.d.ts`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemShowMore/index.d.ts`,name:`SearchItemShowMorePropTypes`}],description:`Fired when the component is activated, either with a mouse/tap
or by pressing the Enter or Space keys.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemShowMore/index.d.ts`,name:`SearchItemShowMorePropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SearchItemShowMoreDomRef, ShowMoreItemClickEventDetail>) => void`}},itemsToShowCount:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemShowMore/index.d.ts`,name:`SearchItemShowMoreAttributes`}],description:`Specifies the number of additional items available to show.
If no value is defined, the control shows "Show more" (without any counter).
If a number is provided, it displays "Show more (N)", where N is that number.`,name:`itemsToShowCount`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemShowMore/index.d.ts`,name:`SearchItemShowMoreAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemShowMore/index.d.ts`,name:`SearchItemShowMoreAttributes`}],description:`Defines whether the show more item is selected.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SearchItemShowMore/index.d.ts`,name:`SearchItemShowMoreAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of __@ui5/webcomponents-fiori__.`,experimental:``}}}catch{}})))()}var De=t({Default:()=>G,ShowMoreItem:()=>Z,WithScopeAndItems:()=>q,__namedExportsOrder:()=>Q,default:()=>W}),H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{Te(),w(),me(),H=n(),Se(),M(),V(),Ce(),be(),U=oe(),W={title:`Inputs / Search`,component:b,argTypes:{children:{control:{disable:!0}},illustration:{control:{disable:!0}},scopes:{control:{disable:!0}},messageArea:{control:{disable:!0}},action:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-fiori`,`experimental`]},G={},K=[{name:`Laptop`,scope:`products`},{name:`Leave Requests`,scope:`apps`},{name:`Log work`,scope:`apps`},{name:`Manage Products`,scope:`apps`},{name:`Mobile Phones`,scope:`products`},{name:`Tablet`,scope:`products`}],q={args:{showClearIcon:!0,placeholder:`Search Apps, Products`,scopeValue:`all`,scopes:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(S,{text:`All`,value:`all`}),(0,U.jsx)(S,{text:`Apps`,value:`apps`}),(0,U.jsx)(S,{text:`Products`,value:`products`})]})},render(e){let[t,n]=(0,H.useState)(K),r=t=>{e.onScopeChange(t);let{scope:r}=t.detail;r.text===`All`?n(K):n(K.filter(e=>e.scope===r.text.toLowerCase()))};return(0,U.jsx)(b,{...e,onScopeChange:r,children:t.map(e=>(0,U.jsx)(x,{text:e.name,scopeName:e.scope},e.name))})}},J=[{text:`Search Item 1`,icon:T},{text:`Search Item 2`,icon:_},{text:`Search Item 3`,icon:T},{text:`Search Item 4`,icon:T},{text:`Search Item 5`,icon:_},{text:`Search Item 6`,icon:C}],Y=J.slice(0,3),X=J.slice(3),Z={args:{showClearIcon:!0,placeholder:`Placeholder`},render(e){let[t,n]=(0,H.useState)(!1);return(0,U.jsxs)(b,{...e,children:[(0,U.jsxs)(j,{headerText:`Group Header 1`,children:[Y.map(e=>(0,U.jsx)(x,{text:e.text,icon:e.icon},e.text)),!t&&(0,U.jsx)(B,{itemsToShowCount:X.length,onClick:()=>{n(!0)}}),t&&X.map(e=>(0,U.jsx)(x,{text:e.text,icon:e.icon},e.text))]}),(0,U.jsxs)(j,{headerText:`Group Header 2`,children:[(0,U.jsx)(x,{text:`Search Item 1`,icon:T}),(0,U.jsx)(x,{text:`Search Item 2`,icon:T}),(0,U.jsx)(x,{text:`Search Item 3`,icon:C})]})]})}},Q=[`Default`,`WithScopeAndItems`,`ShowMoreItem`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    showClearIcon: true,
    placeholder: 'Search Apps, Products',
    scopeValue: 'all',
    scopes: <>
        <SearchScope text="All" value="all" />
        <SearchScope text="Apps" value="apps" />
        <SearchScope text="Products" value="products" />
      </>
  },
  render(args) {
    const [filterData, setFilterData] = useState(scopeData);
    const handleScopeChange: SearchPropTypes['onScopeChange'] = e => {
      args.onScopeChange(e);
      const {
        scope
      } = e.detail;
      if (scope.text === 'All') {
        setFilterData(scopeData);
      } else {
        setFilterData(scopeData.filter(item => {
          return item.scope === scope.text.toLowerCase();
        }));
      }
    };
    return <Search {...args} onScopeChange={handleScopeChange}>
        {filterData.map(item => {
        return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
      })}
      </Search>;
  }
}`,...q.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    showClearIcon: true,
    placeholder: 'Placeholder'
  },
  render(args) {
    const [showHiddenItems, setShowHiddenItems] = useState(false);
    return <Search {...args}>
        <SearchItemGroup headerText="Group Header 1">
          {visibleItems.map(item => {
          return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
        })}
          {!showHiddenItems && <SearchItemShowMore itemsToShowCount={hiddenItems.length} onClick={() => {
          setShowHiddenItems(true);
        }} />}
          {showHiddenItems && hiddenItems.map(item => {
          return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
        })}
        </SearchItemGroup>
        <SearchItemGroup headerText="Group Header 2">
          <SearchItem text="Search Item 1" icon={historyIcon} />
          <SearchItem text="Search Item 2" icon={historyIcon} />
          <SearchItem text="Search Item 3" icon={globeIcon} />
        </SearchItemGroup>
      </Search>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,j as c,q as i,M as l,De as n,B as o,Z as r,V as s,G as t};