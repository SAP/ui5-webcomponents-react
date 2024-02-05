import{M as h,C as g,f}from"./chunk-HLWAVYOI-5HzqoQBT.js";import{_ as v}from"./iframe-jYR4I4MD.js";import{C as l}from"./Carousel-ZzPMEf9v.js";import{w as y}from"./withWebComponent-UxvJwa3A.js";import{b}from"./DomRefTable.module-osVPJkFT.js";import{D as w}from"./DocsHeader-DXXeDcGH.js";import{F as D}from"./Footer-8v9tNCUY.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{D as C}from"./DomRefTable-DP2ha2Ml.js";import{u as s}from"./index-RwE9nQVW.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"../sb-preview/runtime.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./Icon-qyLuyi2a.js";import"./Icons-1V9ErOOl.js";import"./utils-rNFQc6Ui.js";import"./slot-HSrR9XJ-.js";import"./Integer-kog98579.js";import"./ScrollEnablement-Kg1A6nvo.js";import"./animate-Pj1TncyK.js";import"./ResizeHandler-xTi6PJ7P.js";import"./AnimationMode-htp6_n87.js";import"./i18n-defaults-IIWnNm9Y.js";import"./class-map--zj6Ctao.js";import"./style-map-21pwAbrQ.js";import"./slim-arrow-left-qhRVhGsr.js";import"./slim-arrow-right-KfBcfSXq.js";import"./Button-kjIKsCqk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./Label-Zjx1tiqV.js";import"./WrappingType-avPrqc94.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./react-jss.esm-tmBtHfec.js";import"./index-NAqOjvOJ.js";import"./decline-1i68oG_p.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-LBZ9LJI-.js";import"./alert-wj9gYQbS.js";import"./index-G1ylA0vb.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index--N4lJURT.js";import"./index-SLAS-F1F.js";import"./Avatar-3d4E78pi.js";import"./employee-zEMWRMpH.js";import"./Link-kuayvrPB.js";import"./index-xaTivHLv.js";import"./index-xTZ1p4E3.js";import"./index-sHoRIkfF.js";import"./TableOfContent-yYd5TQUE.js";import"./index-_DtB95iI.js";import"./index-Mc-QwGUl.js";import"./index-yv3Odx2E.js";import"./Popover-ALm1fb4C.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-GS9FVPNx.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./BrowserScrollbar.css-piSU4CQM.js";const a=y("ui5-carousel",["arrowsPlacement","backgroundDesign","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorBackgroundDesign","pageIndicatorBorderDesign","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>v(()=>import("./Carousel-ZzPMEf9v.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));a.displayName="Carousel";try{a.displayName="Carousel",a.__docgenInfo={description:`The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
There are several ways to perform navigation:

*   on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
*   on mobile - the user can use swipe gestures.

### Usage

#### When to use:

*   The items you want to display are very different from each other.
*   You want to display the items one after the other.

#### When not to use:

*   The items you want to display need to be visible at the same time.
*   The items you want to display are uniform and very similar.

### Keyboard Handling

#### Basic Navigation

When the \`Carousel\` is focused the user can navigate between the items with the following keyboard shortcuts:

*   \\[UP/DOWN\\] - Navigates to previous and next item
*   \\[LEFT/RIGHT\\] - Navigates to previous and next item

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},arrowsPlacement:{defaultValue:{value:'"Content"'},description:`Defines the position of arrows.

Available options are:

*   \`Content\` - the arrows are placed on the sides of the current page.
*   \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'}]}},backgroundDesign:{defaultValue:{value:'"Translucent"'},description:"Defines the carousel's background design.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:{value:"false"},description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices. In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:{value:"false"},description:"Defines the visibility of the page indicator. If set to true the page indicator will be hidden.",name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorBackgroundDesign:{defaultValue:{value:'"Solid"'},description:"Defines the page indicator background design.",name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:'"Solid"'},description:"Defines the page indicator border design.",name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorStyle:{defaultValue:{value:'"Default"'},description:"Defines the style of the page indicator. Available options are:\n\n*   `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)\n*   `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)",name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const x=[{name:"navigateTo",visibility:"public",since:"1.0.0-rc.15",parameters:[{name:"itemIndex",type:"Integer",optional:!1,description:"The index of the target page"}],description:"Changes the currently displayed page."}],p=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg",alt:"img-sample 1"}),m=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg",alt:"img-sample 2"}),u=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg",alt:"img-sample 3"});function N(t={}){const{wrapper:i}=Object.assign({},s(),t.components);return i?e.jsx(i,{...t,children:e.jsx(r,{})}):r();function r(){const n=Object.assign({h2:"h2"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Layouts & Floorplans / Carousel",component:a,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:l.Content}}),`
`,e.jsx(w,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(g,{children:e.jsx(f,{name:"Default",children:c=>e.jsxs(a,{...c,children:[p,m,u]})})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(b,{story:"Default"}),`
`,e.jsx(C,{rows:x}),`
`,e.jsx(D,{})]})}}const d=t=>e.jsxs(a,{...t,children:[p,m,u]});d.storyName="Default";d.parameters={storySource:{source:`args => {
  return <Carousel {...args}>
          {Img1}
          {Img2}
          {Img3}
        </Carousel>;
}`}};const o={title:"Layouts & Floorplans / Carousel",component:a,args:{arrowsPlacement:l.Content},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:N};const Ze=["defaultStory"];export{Ze as __namedExportsOrder,o as default,d as defaultStory};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Carousel-ZzPMEf9v.js","./UI5Element-_cJDeK03.js","./i18nBundle-YDapVb1x.js","./VersionInfo-AzzP9wS2.js","./CustomElementsScopeUtils-IpwVqUeG.js","./withWebComponent-UxvJwa3A.js","./utils-rNFQc6Ui.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Icon-qyLuyi2a.js","./Icons-1V9ErOOl.js","./slot-HSrR9XJ-.js","./Integer-kog98579.js","./ScrollEnablement-Kg1A6nvo.js","./animate-Pj1TncyK.js","./ResizeHandler-xTi6PJ7P.js","./AnimationMode-htp6_n87.js","./i18n-defaults-IIWnNm9Y.js","./class-map--zj6Ctao.js","./style-map-21pwAbrQ.js","./slim-arrow-left-qhRVhGsr.js","./slim-arrow-right-KfBcfSXq.js","./Button-kjIKsCqk.js","./AriaLabelHelper-RbKlVwzD.js","./MarkedEvents-aYv14vsS.js","./HasPopup-9BAMrqbD.js","./Label-Zjx1tiqV.js","./WrappingType-avPrqc94.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
