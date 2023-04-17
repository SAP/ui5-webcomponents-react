import{M as g,C as f,f as y,a as w}from"./chunk-PCJTTTQV-dd108531.js";import{_ as v}from"./iframe-e7ab60ad.js";import{C as r,a as b}from"./Carousel-5551847b.js";import{w as C}from"./withWebComponent-d280b5c2.js";import{d as P}from"./DomRefTable.module-479cba3f.js";import{D as S}from"./DocsHeader-bacfc9e0.js";import{F as D}from"./Footer-1d149a98.js";import{j as e,a as n,F as N}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as _}from"./DomRefTable-49921e88.js";import{u as m}from"./index-4fb8b842.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./utils-ed90fb1b.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./ScrollEnablement-4353003c.js";import"./Device-208919c6.js";import"./animate-1a16ba20.js";import"./ResizeHandler-9d370fcd.js";import"./AnimationMode-9cec4b20.js";import"./i18n-defaults-254d6b69.js";import"./class-map-6d48ebd3.js";import"./style-map-51d6dd91.js";import"./slim-arrow-left-0e139baa.js";import"./slim-arrow-right-78d167a6.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Label-528b8168.js";import"./WrappingType-b81e595a.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./index-5ca5924f.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./index-f9987b26.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-ee9baa6b.js";import"./TableOfContent-1156d574.js";import"./index-46042b5e.js";import"./Link-3b8926df.js";import"./index-169316f0.js";import"./index-6829b7c2.js";import"./Popover-824d4d7c.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./MediaRange-25b98f31.js";const o=C("ui5-carousel",["arrowsPlacement","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>v(()=>import("./Carousel-5551847b.js").then(t=>t.c),["./Carousel-5551847b.js","./UI5Element-e8adceda.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d280b5c2.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./Icon-27a81412.js","./Icons-5b18f7d2.js","./slot-76e48863.js","./Integer-f7f172c9.js","./ScrollEnablement-4353003c.js","./Device-208919c6.js","./animate-1a16ba20.js","./ResizeHandler-9d370fcd.js","./AnimationMode-9cec4b20.js","./i18n-defaults-254d6b69.js","./class-map-6d48ebd3.js","./style-map-51d6dd91.js","./slim-arrow-left-0e139baa.js","./slim-arrow-right-78d167a6.js","./Button-fa05cadd.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./Label-528b8168.js","./WrappingType-b81e595a.js"],import.meta.url));o.displayName="Carousel";o.defaultProps={arrowsPlacement:r.Content,itemsPerPageL:1,itemsPerPageM:1,itemsPerPageS:1,pageIndicatorStyle:b.Default};try{o.displayName="Carousel",o.__docgenInfo={description:`The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
There are several ways to perform navigation:

*   on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
*   on mobile - the user can use swipe gestures.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Carousel" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, { selectedIndex: number; }>) => void"}},arrowsPlacement:{defaultValue:{value:"CarouselArrowsPlacement.Content"},description:`Defines the position of arrows.

Available options are:

*   \`Content\`
*   \`Navigation\`


When set to "Content", the arrows are placed on the sides of the current page.
When set to "Navigation", the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'}]}},cyclic:{defaultValue:null,description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:null,description:`Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices. In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:null,description:"Defines the visibility of the page indicator. If set to true the page indicator will be hidden.",name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorStyle:{defaultValue:{value:"CarouselPageIndicatorStyle.Default"},description:"Defines the style of the page indicator. Available options are:\n\n*   `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)\n*   `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)",name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const I=`## Usage

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
`,T=[{name:"navigateTo",visibility:"public",since:"1.0.0-rc.15",parameters:[{name:"itemIndex",type:"Integer",optional:!1,description:"The index of the target page"}],description:"Changes the currently displayed page."}],p=e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg",alt:"img-sample 1"}),u=e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg",alt:"img-sample 2"}),d=e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg",alt:"img-sample 3"});function x(t={}){const{wrapper:i}=Object.assign({},m(),t.components);return i?e(i,{...t,children:e(s,{})}):s();function s(){const l=Object.assign({h2:"h2"},m(),t.components);return n(N,{children:[e(g,{title:"Layouts & Floorplans / Carousel",component:o,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:r.Content}}),`
`,e(S,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(l.h2,{id:"example",children:"Example"}),`
`,e(f,{children:e(y,{name:"Default",children:h=>n(o,{...h,children:[p,u,d]})})}),`
`,e(l.h2,{id:"properties",children:"Properties"}),`
`,e(P,{story:"Default"}),`
`,e(w,{children:I}),`
`,e(_,{rows:T}),`
`,e(D,{})]})}}const c=t=>n(o,{...t,children:[p,u,d]});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <Carousel {...args}>
          {Img1}
          {Img2}
          {Img3}
        </Carousel>;
}`}};const a={title:"Layouts & Floorplans / Carousel",component:o,args:{arrowsPlacement:r.Content},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:x};const Ye=["defaultStory"];export{Ye as __namedExportsOrder,a as default,c as defaultStory};
//# sourceMappingURL=Carousel.stories-2efe966c.js.map
