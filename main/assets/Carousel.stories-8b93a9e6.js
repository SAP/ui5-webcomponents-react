import{M as h,C as f,e as v,b as y}from"./chunk-HLWAVYOI-6129ee23.js";import{_ as w}from"./iframe-d9777174.js";import{C as n,B as l,a as b,b as D}from"./Carousel-9fc7d0db.js";import{w as C}from"./withWebComponent-f146e44d.js";import{A as S}from"./DomRefTable.module-9354891f.js";import{D as P}from"./DocsHeader-97ec29d1.js";import{F as x}from"./Footer-da72b5e3.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{D as I}from"./DomRefTable-237c1170.js";import{u as p}from"./index-59d6410c.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./utils-85c0effb.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./ScrollEnablement-a5db9b7d.js";import"./animate-1a16ba20.js";import"./ResizeHandler-36d5a74c.js";import"./AnimationMode-4dbcc358.js";import"./i18n-defaults-a1ecaff4.js";import"./class-map-5b190712.js";import"./style-map-2f7624b7.js";import"./slim-arrow-left-817d7859.js";import"./slim-arrow-right-f2ee719f.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Label-025b0296.js";import"./WrappingType-b81e595a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./react-jss.esm-2e5f50f2.js";import"./index-20ae81fd.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-938186ae.js";import"./index-5cf58464.js";import"./Avatar-d6a8bd34.js";import"./employee-0930782f.js";import"./index-7123ddcd.js";import"./index-709cad78.js";import"./Link-0dce4afc.js";import"./index-12e0da73.js";import"./TableOfContent-33f47fed.js";import"./index-9e2b458d.js";import"./index-05152d12.js";import"./index-61fcb073.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-e63eefff.js";const a=C("ui5-carousel",["arrowsPlacement","backgroundDesign","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorBackgroundDesign","pageIndicatorBorderDesign","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>w(()=>import("./Carousel-9fc7d0db.js").then(t=>t.d),["./Carousel-9fc7d0db.js","./UI5Element-d089e658.js","./CustomElementsScopeUtils-90546106.js","./withWebComponent-f146e44d.js","./utils-85c0effb.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./Icon-dc979b51.js","./Icons-d115de21.js","./slot-76e48863.js","./Integer-f7f172c9.js","./ScrollEnablement-a5db9b7d.js","./animate-1a16ba20.js","./ResizeHandler-36d5a74c.js","./AnimationMode-4dbcc358.js","./i18n-defaults-a1ecaff4.js","./class-map-5b190712.js","./style-map-2f7624b7.js","./slim-arrow-left-817d7859.js","./slim-arrow-right-f2ee719f.js","./Button-f20bbbdf.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./Label-025b0296.js","./WrappingType-b81e595a.js"],import.meta.url));a.displayName="Carousel";a.defaultProps={arrowsPlacement:n.Content,backgroundDesign:l.Translucent,itemsPerPageL:1,itemsPerPageM:1,itemsPerPageS:1,pageIndicatorBackgroundDesign:l.Solid,pageIndicatorBorderDesign:b.Solid,pageIndicatorStyle:D.Default};try{a.displayName="Carousel",a.__docgenInfo={description:`The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
There are several ways to perform navigation:

*   on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
*   on mobile - the user can use swipe gestures.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Carousel)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},arrowsPlacement:{defaultValue:{value:"CarouselArrowsPlacement.Content"},description:`Defines the position of arrows.

Available options are:

*   \`Content\` - the arrows are placed on the sides of the current page.
*   \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'}]}},backgroundDesign:{defaultValue:{value:"BackgroundDesign.Translucent"},description:"Defines the carousel's background design.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:null,description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:null,description:`Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices. In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:null,description:"Defines the visibility of the page indicator. If set to true the page indicator will be hidden.",name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorBackgroundDesign:{defaultValue:{value:"BackgroundDesign.Solid"},description:"Defines the page indicator background design.",name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:"BorderDesign.Solid"},description:"Defines the page indicator border design.",name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorStyle:{defaultValue:{value:"CarouselPageIndicatorStyle.Default"},description:"Defines the style of the page indicator. Available options are:\n\n*   `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)\n*   `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)",name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const T=`## Usage

### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

## Keyboard Handling

### Basic Navigation

When the \`Carousel\` is focused the user can navigate between the items with the following keyboard shortcuts:

- \\[UP/DOWN\\] - Navigates to previous and next item
- \\[LEFT/RIGHT\\] - Navigates to previous and next item

## Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Carousel\` exposes the following CSS Shadow Parts:

- content - Used to style the content of the component
`,N=[{name:"navigateTo",visibility:"public",since:"1.0.0-rc.15",parameters:[{name:"itemIndex",type:"Integer",optional:!1,description:"The index of the target page"}],description:"Changes the currently displayed page."}],m=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg",alt:"img-sample 1"}),u=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg",alt:"img-sample 2"}),d=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg",alt:"img-sample 3"});function _(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e.jsx(r,{...t,children:e.jsx(i,{})}):i();function i(){const s=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Layouts & Floorplans / Carousel",component:a,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:n.Content}}),`
`,e.jsx(P,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(f,{children:e.jsx(v,{name:"Default",children:g=>e.jsxs(a,{...g,children:[m,u,d]})})}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(S,{story:"Default"}),`
`,e.jsx(y,{children:T}),`
`,e.jsx(I,{rows:N}),`
`,e.jsx(x,{})]})}}const c=t=>e.jsxs(a,{...t,children:[m,u,d]});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <Carousel {...args}>
          {Img1}
          {Img2}
          {Img3}
        </Carousel>;
}`}};const o={title:"Layouts & Floorplans / Carousel",component:a,args:{arrowsPlacement:n.Content},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:_};const He=["defaultStory"];export{He as __namedExportsOrder,o as default,c as defaultStory};
//# sourceMappingURL=Carousel.stories-8b93a9e6.js.map
