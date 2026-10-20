import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-CQvqGaAL.js";import{n as r}from"./Carousel-BgY4Hd1H.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-carousel`,[`accessibleName`,`accessibleNameRef`,`arrowsPlacement`,`backgroundDesign`,`itemsPerPage`,`pageIndicatorBackgroundDesign`,`pageIndicatorBorderDesign`,`pageIndicatorType`],[`cyclic`,`hideNavigationArrows`,`hidePageIndicator`],[],[`navigate`]),i.displayName=`Carousel`;try{i.displayName=`Carousel`,i.__docgenInfo={description:`The Carousel allows the user to browse through a set of items.
The component is mostly used for showing a gallery of images, but can hold any other HTML element.

There are several ways to perform navigation:

- on desktop - the user can navigate using the navigation arrows or with keyboard shortcuts.
- on touch devices - the user can navigate using the navigation arrows (always visible) or can use swipe gestures.

### Usage

#### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

#### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

### Hidden Items

Carousel items can be conditionally hidden by adding the \`hidden\` attribute to any child element.
Hidden items are automatically excluded from carousel navigation and will not be displayed or counted in pagination.
This allows for dynamic showing or hiding of carousel items without affecting the overall carousel behavior.

### Keyboard Handling

#### Basic Navigation
When the \`Carousel\` is focused the user can navigate between the items
with the following keyboard shortcuts:

- [Up] or [Down] - Navigates to previous and next item
- [Left] or [Right] - Navigates to previous and next item

### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note:__ This is a UI5 Web Component! [Carousel UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Carousel) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Carousel`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselPropTypes`}],description:`Defines the content of the component.

**Note:** Items with the \`hidden\` attribute will be automatically excluded from carousel navigation and page calculations.
They will not be displayed or accessible via keyboard navigation. See [sample](./#carousel-with-hidden-items).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onNavigate:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselPropTypes`}],description:`Fired whenever the page changes due to user interaction,
when the user clicks on the navigation arrows or while resizing,
based on the \`items-per-page\` property.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onNavigate`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the accessible name of the component.

**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the IDs of the elements that label the input.

**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},arrowsPlacement:{defaultValue:{value:`"Content"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the position of arrows.

Available options are:

- \`Content\` - the arrows are placed on the sides of the current page.
- \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:`arrowsPlacement`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`"Content"`},type:{name:`enum`,raw:`CarouselArrowsPlacement | "Content" | "Navigation"`,value:[{value:`"Content"`,description:`Carousel arrows are placed on the sides of the current Carousel page.`,fullComment:`Carousel arrows are placed on the sides of the current Carousel page.
@public`,tags:{public:``}},{value:`"Navigation"`,description:`Carousel arrows are placed on the sides of the page indicator of the Carousel.`,fullComment:`Carousel arrows are placed on the sides of the page indicator of the Carousel.
@public`,tags:{public:``}},{value:`"Content"`},{value:`"Navigation"`}]}},backgroundDesign:{defaultValue:{value:`"Translucent"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the carousel's background design.

**Note:** Available since [v1.14](https://github.com/UI5/webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:`backgroundDesign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`"Translucent"`},type:{name:`enum`,raw:`BackgroundDesign | "Solid" | "Transparent" | "Translucent"`,value:[{value:`"Solid"`,description:`A solid background color dependent on the theme.`,fullComment:`A solid background color dependent on the theme.
@public`,tags:{public:``}},{value:`"Transparent"`,description:`Transparent background.`,fullComment:`Transparent background.
@public`,tags:{public:``}},{value:`"Translucent"`,description:`A translucent background depending on the opacity value of the theme.`,fullComment:`A translucent background depending on the opacity value of the theme.
@public`,tags:{public:``}},{value:`"Solid"`},{value:`"Transparent"`},{value:`"Translucent"`}]}},cyclic:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.`,name:`cyclic`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hideNavigationArrows:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the visibility of the navigation arrows.
If set to true the navigation arrows will be hidden.`,name:`hideNavigationArrows`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hidePageIndicator:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the visibility of the page indicator.
If set to true the page indicator will be hidden.`,name:`hidePageIndicator`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},itemsPerPage:{defaultValue:{value:`"S1 M1 L1 XL1"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the number of items per page depending on the carousel width.

- 'S' for screens smaller than 600 pixels.
- 'M' for screens greater than or equal to 600 pixels and smaller than 1024 pixels.
- 'L' for screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
- 'XL' for screens greater than or equal to 1440 pixels.

One item per page is shown by default.`,name:`itemsPerPage`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`"S1 M1 L1 XL1"`},type:{name:`string`}},pageIndicatorBackgroundDesign:{defaultValue:{value:`"Solid"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the page indicator background design.

**Note:** Available since [v1.14](https://github.com/UI5/webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:`pageIndicatorBackgroundDesign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`"Solid"`},type:{name:`enum`,raw:`BackgroundDesign | "Solid" | "Transparent" | "Translucent"`,value:[{value:`"Solid"`,description:`A solid background color dependent on the theme.`,fullComment:`A solid background color dependent on the theme.
@public`,tags:{public:``}},{value:`"Transparent"`,description:`Transparent background.`,fullComment:`Transparent background.
@public`,tags:{public:``}},{value:`"Translucent"`,description:`A translucent background depending on the opacity value of the theme.`,fullComment:`A translucent background depending on the opacity value of the theme.
@public`,tags:{public:``}},{value:`"Solid"`},{value:`"Transparent"`},{value:`"Translucent"`}]}},pageIndicatorBorderDesign:{defaultValue:{value:`"Solid"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the page indicator border design.

**Note:** Available since [v1.14](https://github.com/UI5/webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:`pageIndicatorBorderDesign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`"Solid"`},type:{name:`enum`,raw:`"None" | "Solid" | BorderDesign`,value:[{value:`"None"`},{value:`"Solid"`},{value:`"Solid"`,description:`A solid border color dependent on the theme.`,fullComment:`A solid border color dependent on the theme.
@public`,tags:{public:``}},{value:`"None"`,description:`Specifies no border.`,fullComment:`Specifies no border.
@public`,tags:{public:``}}]}},pageIndicatorType:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`}],description:`Defines the style of the page indicator.
Available options are:

- \`Default\` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
- \`Numeric\` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)

**Note:** Available since [v1.10](https://github.com/UI5/webcomponents/releases/tag/v1.10) of **@ui5/webcomponents**.`,name:`pageIndicatorType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Carousel/index.d.ts`,name:`CarouselAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | CarouselPageIndicatorType | "Numeric"`,value:[{value:`"Default"`},{value:`"Default"`,description:`The page indicator will be visualized as dots if there are fewer than 9 pages.
If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)`,fullComment:`The page indicator will be visualized as dots if there are fewer than 9 pages.
If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
@public`,tags:{public:``}},{value:`"Numeric"`,description:`The page indicator will display the current page and the total number of pages. (e.g. X of Y)`,fullComment:`The page indicator will display the current page and the total number of pages. (e.g. X of Y)
@public`,tags:{public:``}},{value:`"Numeric"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};