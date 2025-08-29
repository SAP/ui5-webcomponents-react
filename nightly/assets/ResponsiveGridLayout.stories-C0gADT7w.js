import{r as I,ay as C,x as _,j as e,J as n}from"./iframe-BM9OIWQT.js";import{T as s}from"./ThemingParameters-pyhX3s39.js";const L="@layer ui5-webcomponents-react{._container_lhhv3_1{display:grid}@media (max-width:599px){._container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-s),minmax(0,1fr))}._container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-s)}}@media (min-width:600px) and (max-width:1023px){._container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-m),minmax(0,1fr))}._container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-m)}}@media (min-width:1024px) and (max-width:1439px){._container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-l),minmax(0,1fr))}._container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-l)}}@media (min-width:1440px){._container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-xl),minmax(0,1fr))}._container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-xl)}}}",N={container:"_container_lhhv3_1"},a=I.forwardRef((o,r)=>{const{children:t,columnGap:i="0.5rem",rowGap:c="0.5rem",columnsS:m=4,columnsM:d=8,columnsL:u=12,columnsXL:p=16,columnSpanS:h=1,columnSpanM:y=1,columnSpanL:g=1,columnSpanXL:v=1,style:x,className:f,...b}=o;C(L,a.displayName);const w=_(N.container,f);return e.jsx("div",{ref:r,className:w,style:{rowGap:c,columnGap:i,"--_ui5wcr-rgl-columns-s":m,"--_ui5wcr-rgl-columns-m":d,"--_ui5wcr-rgl-columns-l":u,"--_ui5wcr-rgl-columns-xl":p,"--_ui5wcr-rgl-column-span-s":h,"--_ui5wcr-rgl-column-span-m":y,"--_ui5wcr-rgl-column-span-l":g,"--_ui5wcr-rgl-column-span-xl":v,...x},...b,children:t})});a.displayName="ResponsiveGridLayout";try{a.displayName="ResponsiveGridLayout",a.__docgenInfo={description:`The Responsive Grid Layout positions UI elements in a multi-column flow layout.
They can be configured to display a variable number of columns depending on available screen size.
With these controls, it is possible to achieve flexible layouts and line breaks for large, medium,
and small-sized screens, such as desktop, tablet, and mobile.`,displayName:"ResponsiveGridLayout",props:{columnsS:{defaultValue:null,description:"Number of columns to show on small screens (`max-width: 599px`)",name:"columnsS",required:!1,type:{name:"number"}},columnsM:{defaultValue:null,description:"Number of columns to show on medium screens (`width >= 600px and width <=1023px`)",name:"columnsM",required:!1,type:{name:"number"}},columnsL:{defaultValue:null,description:"Number of columns to show on large screens (`width >= 1024px and width <=1439px`)",name:"columnsL",required:!1,type:{name:"number"}},columnsXL:{defaultValue:null,description:"Number of columns to show on extra large screens (`min-width: 1440px`)",name:"columnsXL",required:!1,type:{name:"number"}},columnSpanS:{defaultValue:null,description:"Defines how many columns a single child should cover on small screens.",name:"columnSpanS",required:!1,type:{name:"number"}},columnSpanM:{defaultValue:null,description:"Defines how many columns a single child should cover on medium screens.",name:"columnSpanM",required:!1,type:{name:"number"}},columnSpanL:{defaultValue:null,description:"Defines how many columns a single child should cover on large screens.",name:"columnSpanL",required:!1,type:{name:"number"}},columnSpanXL:{defaultValue:null,description:"Defines how many columns a single child should cover on extra large.",name:"columnSpanXL",required:!1,type:{name:"number"}},columnGap:{defaultValue:null,description:"Gap between two columns of the grid",name:"columnGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},rowGap:{defaultValue:null,description:"Gap between two rows of the grid",name:"rowGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},children:{defaultValue:null,description:`Child elements to be placed inside the grid. In case you want to control the column span of each child independently,
you can add an element style using the [gridColumn shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).

Example: If you want one child to span across 4 columns, you can add this element style to the child element:
\`style={{ gridColumn: 'span 4' }}\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{a.displayName="ResponsiveGridLayout",a.__docgenInfo={description:`The Responsive Grid Layout positions UI elements in a multi-column flow layout.
They can be configured to display a variable number of columns depending on available screen size.
With these controls, it is possible to achieve flexible layouts and line breaks for large, medium,
and small-sized screens, such as desktop, tablet, and mobile.`,displayName:"ResponsiveGridLayout",props:{columnsS:{defaultValue:null,description:"Number of columns to show on small screens (`max-width: 599px`)",name:"columnsS",required:!1,type:{name:"number"}},columnsM:{defaultValue:null,description:"Number of columns to show on medium screens (`width >= 600px and width <=1023px`)",name:"columnsM",required:!1,type:{name:"number"}},columnsL:{defaultValue:null,description:"Number of columns to show on large screens (`width >= 1024px and width <=1439px`)",name:"columnsL",required:!1,type:{name:"number"}},columnsXL:{defaultValue:null,description:"Number of columns to show on extra large screens (`min-width: 1440px`)",name:"columnsXL",required:!1,type:{name:"number"}},columnSpanS:{defaultValue:null,description:"Defines how many columns a single child should cover on small screens.",name:"columnSpanS",required:!1,type:{name:"number"}},columnSpanM:{defaultValue:null,description:"Defines how many columns a single child should cover on medium screens.",name:"columnSpanM",required:!1,type:{name:"number"}},columnSpanL:{defaultValue:null,description:"Defines how many columns a single child should cover on large screens.",name:"columnSpanL",required:!1,type:{name:"number"}},columnSpanXL:{defaultValue:null,description:"Defines how many columns a single child should cover on extra large.",name:"columnSpanXL",required:!1,type:{name:"number"}},columnGap:{defaultValue:null,description:"Gap between two columns of the grid",name:"columnGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},rowGap:{defaultValue:null,description:"Gap between two rows of the grid",name:"rowGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},children:{defaultValue:null,description:`Child elements to be placed inside the grid. In case you want to control the column span of each child independently,
you can add an element style using the [gridColumn shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).

Example: If you want one child to span across 4 columns, you can add this element style to the child element:
\`style={{ gridColumn: 'span 4' }}\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Layouts & Floorplans / ResponsiveGridLayout",component:a,argTypes:{children:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-react","deprecated"]},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{gridColumn:"span 2",background:s.sapAccentColor1},className:"responsiveGridLayoutItem",children:[e.jsx(n,{children:"Item 1"}),e.jsx("br",{}),e.jsx("code",{children:"style={{ gridColumn: 'span 2' }}"})]}),e.jsxs("div",{style:{gridColumn:"span 3",background:s.sapAccentColor2},className:"responsiveGridLayoutItem",children:[e.jsx(n,{children:"Item 2"}),e.jsx("br",{}),e.jsx("code",{children:"style={{ gridColumn: 'span 3' }}"})]}),e.jsxs("div",{style:{gridColumn:"span 4",background:s.sapAccentColor3},className:"responsiveGridLayoutItem",children:[e.jsx(n,{children:"Item 3"}),e.jsx("br",{}),e.jsx("code",{children:"style={{ gridColumn: 'span 4' }}"})]}),e.jsxs("div",{style:{gridColumn:"span 5",background:s.sapAccentColor4},className:"responsiveGridLayoutItem",children:[e.jsx(n,{children:"Item 4"}),e.jsx("br",{}),e.jsx("code",{children:"style={{ gridColumn: 'span 5' }}"})]}),e.jsx("div",{style:{background:s.sapAccentColor5},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 5"})}),e.jsx("div",{style:{background:s.sapAccentColor6},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 6"})}),e.jsx("div",{style:{background:s.sapAccentColor7},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 7"})}),e.jsxs("div",{style:{gridColumn:"span 4",background:s.sapAccentColor8},className:"responsiveGridLayoutItem",children:[e.jsx(n,{children:"Item 8"}),e.jsx("br",{}),e.jsx("code",{children:"style={{ gridColumn: 'span 4' }}"})]}),e.jsx("div",{style:{background:s.sapAccentColor9},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 9"})}),e.jsx("div",{style:{background:s.sapAccentColor10},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 10"})}),e.jsx("div",{style:{background:s.sapAccentColor1},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 11"})}),e.jsx("div",{style:{background:s.sapAccentColor2},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 12"})}),e.jsx("div",{style:{background:s.sapAccentColor3},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 13"})}),e.jsx("div",{style:{background:s.sapAccentColor4},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 14"})}),e.jsx("div",{style:{background:s.sapAccentColor5},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 15"})}),e.jsx("div",{style:{background:s.sapAccentColor6},className:"responsiveGridLayoutItem",children:e.jsx(n,{children:"Item 16"})})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <div style={{
        gridColumn: 'span 2',
        background: ThemingParameters.sapAccentColor1
      }} className="responsiveGridLayoutItem">
          <Text>Item 1</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 2' }}\`}</code>
        </div>
        <div style={{
        gridColumn: 'span 3',
        background: ThemingParameters.sapAccentColor2
      }} className="responsiveGridLayoutItem">
          <Text>Item 2</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 3' }}\`}</code>
        </div>
        <div style={{
        gridColumn: 'span 4',
        background: ThemingParameters.sapAccentColor3
      }} className="responsiveGridLayoutItem">
          <Text>Item 3</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 4' }}\`}</code>
        </div>
        <div style={{
        gridColumn: 'span 5',
        background: ThemingParameters.sapAccentColor4
      }} className="responsiveGridLayoutItem">
          <Text>Item 4</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 5' }}\`}</code>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor5
      }} className="responsiveGridLayoutItem">
          <Text>Item 5</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor6
      }} className="responsiveGridLayoutItem">
          <Text>Item 6</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor7
      }} className="responsiveGridLayoutItem">
          <Text>Item 7</Text>
        </div>
        <div style={{
        gridColumn: 'span 4',
        background: ThemingParameters.sapAccentColor8
      }} className="responsiveGridLayoutItem">
          <Text>Item 8</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 4' }}\`}</code>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor9
      }} className="responsiveGridLayoutItem">
          <Text>Item 9</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor10
      }} className="responsiveGridLayoutItem">
          <Text>Item 10</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor1
      }} className="responsiveGridLayoutItem">
          <Text>Item 11</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor2
      }} className="responsiveGridLayoutItem">
          <Text>Item 12</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor3
      }} className="responsiveGridLayoutItem">
          <Text>Item 13</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor4
      }} className="responsiveGridLayoutItem">
          <Text>Item 14</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor5
      }} className="responsiveGridLayoutItem">
          <Text>Item 15</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor6
      }} className="responsiveGridLayoutItem">
          <Text>Item 16</Text>
        </div>
      </>
  }
}`,...l.parameters?.docs?.source}}};const G=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:G,default:T},Symbol.toStringTag,{value:"Module"}));export{k as C,l as D};
