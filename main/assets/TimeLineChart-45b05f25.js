import{j as t}from"./jsx-runtime-d079401a.js";import{C as h}from"./DomRefTable.module-97fe049b.js";import{D as l}from"./DocsHeader-e571308d.js";import{F as c}from"./Footer-fa8f679a.js";import"./index-f1f2c4b1.js";import{M as d,C as n,b as m,A as p}from"./chunk-S4VUQJ4A-7e38537d.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{C as x,D as a,W as u,a as g,b as j,L as v,T as w}from"./TimeLineChart.stories-b18e4077.js";import{u as s}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-449876bd.js";import"./iframe-3fa104b7.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-b56f0948.js";import"./Integer-f7f172c9.js";import"./index-ed9eb30b.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-1eab4ca5.js";import"./index-01e22ed3.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-7122209e.js";import"./TableOfContent-866e36d0.js";import"./index-4ce4bdc3.js";import"./Label-2351773c.js";import"./index-c74c9f7f.js";import"./index-6f37fce2.js";import"./index-5fd7b8c0.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./react-content-loader.es-27eb8e7e.js";function Ht(i={}){const{wrapper:o}=Object.assign({},s(),i.components);return o?t.jsx(o,Object.assign({},i,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",strong:"strong",em:"em",h4:"h4",pre:"pre",ul:"ul",li:"li",ol:"ol"},s(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:x}),`
`,t.jsx(l,{since:"1.10.0"}),`
`,t.jsx(n,{of:a}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(h,{of:a}),`
`,t.jsx("br",{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(e.h3,{id:"with-annotations",children:"With Annotations"}),`
`,t.jsxs(e.p,{children:["This example shows how the ",t.jsx(e.code,{children:"TimelineChart"}),` is used to visualize a simple simulation of the
`,t.jsx(e.a,{href:"https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling",target:"_blank",rel:"nofollow noopener noreferrer",children:t.jsx("b",{children:"Earliest Deadline First"})}),` scheduling
algorithm. The tasks are shown in the chart and the annotations are added on top and used to indicate the
arrival time, period and deadline of the tasks. The `,t.jsx(e.code,{children:"TimelineChartAnnotation"}),` component provides a way to specify the row
the annotations are applied to. For the annotations to scale well with the scaling of the width of the timeline, when
zooming is done, a `,t.jsx(e.strong,{children:"ResizeObserver"})," could be used if desired. But for most purposes, the ",t.jsx(e.code,{children:"TimelineChartBodyCtx"}),` provided
should suffice. Using the React `,t.jsx(e.code,{children:"useContext"})," hook to get the context and the ",t.jsx(e.em,{children:"chartBodyWidth"}),` property should help with
the scaling. This will prevent having to create too many ResizeObservers and affecting performance.`]}),`
`,t.jsxs(e.p,{children:[`The annotations are drawn using the HTML canvas and all the annotations for the same row are drawn at the same time using
the `,t.jsx(e.code,{children:"TimingFigure"}),` custom component created for this specific example. As can be seen, the annotations scale neatly without
blurring when the timeline is zoomed. A valueFormat `,t.jsx(e.code,{children:"(x) => Number.parseFloat(x).toFixed(2)"}),` has also been applied to the
ticks and tooltip numbers.`]}),`
`,t.jsx(n,{of:u}),`
`,t.jsx(e.h4,{id:"timingfigure-code",children:"TimingFigure Code"}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show Code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`export const TimingFigure = ({ arrival, period, deadline, totalDuration }) => {
  const ref = useRef();
  const verticalSpacing = 2;
  const halfArrowWidth = 4;
  const chartBodyCtx = useContext(TimelineChartBodyCtx);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions to avoid blurring
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    const width = canvas.width;
    const height = canvas.height;
    const one5thHeight = height / 5;
    const four5thHeight = 4 * one5thHeight;

    const interval = (period / totalDuration) * width;
    const arrivalOffset = (arrival / totalDuration) * width;
    const deadlineOffset = (deadline / totalDuration) * width;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--sapTextColor');

    // Draw the up-pointing arrows for the arrival
    for (let i = 0; i * interval + arrivalOffset < width; i++) {
      const offset = i * interval + arrivalOffset;
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset, height - verticalSpacing);
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset - halfArrowWidth, one5thHeight);
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset + halfArrowWidth, one5thHeight);
    }

    // Draw the down-pointing arrows for the deadline
    for (let i = 0; i * interval + arrivalOffset + deadlineOffset < width; i++) {
      const offset = i * interval + arrivalOffset + deadlineOffset;
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset, height - verticalSpacing);
      ctx.lineTo(offset - halfArrowWidth, four5thHeight);
      ctx.moveTo(offset, height - verticalSpacing);
      ctx.lineTo(offset + halfArrowWidth, four5thHeight);
    }

    ctx.stroke();
  });

  return <canvas ref={ref} style={{ width: chartBodyCtx.chartBodyWidth, height: '100%' }}></canvas>;
};
`})})]}),`
`,t.jsx(e.h3,{id:"with-annotations-only",children:"With Annotations Only"}),`
`,t.jsxs(e.p,{children:[`Using annotations can be so powerful. This allows a very good customization of the timeline as desired. The
chart can be made to contain only custom annotations that utilize the other features available in the
`,t.jsx(e.code,{children:"TimelineChart"}),`. By default, the annotations are set so that they dont interact with the mouse. If an
interaction with the mouse is needed for the custom annotation, the annotation should have the
`,t.jsx(e.code,{children:"pointerEvents"})," set to ",t.jsx(e.em,{children:"auto"})," in its own style."]}),`
`,t.jsx(e.p,{children:`The example below shows the timeline for the some of the most momentuous inventions in the
last 6000 years from the year 2022. These annotations have been made using SVG just to
demonstrate that any valid element can be used for making the annotations.`}),`
`,t.jsx(n,{of:g}),`
`,t.jsx(e.h3,{id:"with-more-customization",children:"With More Customization"}),`
`,t.jsxs(e.p,{children:["A lot more things can be customized in the ",t.jsx(e.code,{children:"TimelineChart"}),". These include:"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The color of each item on a row."}),`
`,t.jsx(e.li,{children:"The label of each item on a row."}),`
`,t.jsxs(e.li,{children:["The kind of connections between two different items:",`
`,t.jsxs(e.ol,{children:[`
`,t.jsx(e.li,{children:"Start-To-Start"}),`
`,t.jsx(e.li,{children:"Start-To-Finish"}),`
`,t.jsx(e.li,{children:"Finish-To-Start"}),`
`,t.jsx(e.li,{children:"Finish-To-Finish"}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(n,{of:j}),`
`,t.jsx(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,t.jsx(n,{of:v}),`
`,t.jsx(m,{children:f}),`
`,t.jsx(e.h2,{id:"timelinechartannotation",children:"TimelineChartAnnotation"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"TimelineChartAnnotation"}),` is designed to be used for creating custom annotations, markers
or illustrations on the timeline of the chart.`]}),`
`,t.jsx(p,{of:w}),`
`,t.jsx(c,{})]})}}export{Ht as default};
//# sourceMappingURL=TimeLineChart-45b05f25.js.map
