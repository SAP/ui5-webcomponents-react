import{j as t,a as n,F as l}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-ebd0ef32.js";import{D as d}from"./DocsHeader-2b950f28.js";import{F as m}from"./Footer-bbf5eef6.js";import"./index-f1f749bf.js";import{M as p,C as i,a as f,b as u}from"./chunk-PCJTTTQV-03df55fb.js";import{S as g}from"./SubcomponentsSection-6138f2fc.js";import{C as v,D as h,W as w,a as T,b as x,L as C,T as b}from"./TimeLineChart.stories-aed095c5.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-0bbd409e.js";import"./iframe-0e4c68f0.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f9987b26.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8d6b807c.js";import"./TableOfContent-faa94604.js";import"./index-20e8eaae.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-3ac565c5.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-6dcb85dd.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-content-loader.es-de0c8b5a.js";function jt(o={}){const{wrapper:r}=Object.assign({},s(),o.components);return r?t(r,Object.assign({},o,{children:t(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",strong:"strong",em:"em",h4:"h4",pre:"pre",ul:"ul",li:"li",ol:"ol"},s(),o.components);return n(l,{children:[t(p,{of:v}),`
`,t(d,{since:"1.10.0"}),`
`,t(i,{of:h}),`
`,t(e.h2,{id:"properties",children:"Properties"}),`
`,t(c,{of:h}),`
`,t("br",{}),`
`,t("br",{}),`
`,t(e.h2,{id:"more-examples",children:"More Examples"}),`
`,t(e.h3,{id:"with-annotations",children:"With Annotations"}),`
`,n(e.p,{children:["This example shows how the ",t(e.code,{children:"TimelineChart"}),` is used to visualize a simple simulation of the
`,t(e.a,{href:"https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling",target:"_blank",rel:"nofollow noopener noreferrer",children:t("b",{children:"Earliest Deadline First"})}),` scheduling
algorithm. The tasks are shown in the chart and the annotations are added on top and used to indicate the
arrival time, period and deadline of the tasks. The `,t(e.code,{children:"TimelineChartAnnotation"}),` component provides a way to specify the row
the annotations are applied to. For the annotations to scale well with the scaling of the width of the timeline, when
zooming is done, a `,t(e.strong,{children:"ResizeObserver"})," could be used if desired. But for most purposes, the ",t(e.code,{children:"TimelineChartBodyCtx"}),` provided
should suffice. Using the React `,t(e.code,{children:"useContext"})," hook to get the context and the ",t(e.em,{children:"chartBodyWidth"}),` property should help with
the scaling. This will prevent having to create too many ResizeObservers and affecting performance.`]}),`
`,n(e.p,{children:[`The annotations are drawn using the HTML canvas and all the annotations for the same row are drawn at the same time using
the `,t(e.code,{children:"TimingFigure"}),` custom component created for this specific example. As can be seen, the annotations scale neatly without
blurring when the timeline is zoomed. A valueFormat `,t(e.code,{children:"(x) => Number.parseFloat(x).toFixed(2)"}),` has also been applied to the
ticks and tooltip numbers.`]}),`
`,t(i,{of:w}),`
`,t(e.h4,{id:"timingfigure-code",children:"TimingFigure Code"}),`
`,n("details",{children:[t("summary",{children:"Show Code"}),t(e.pre,{children:t(e.code,{className:"language-jsx",children:`export const TimingFigure = ({ arrival, period, deadline, totalDuration }) => {
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
`,t(e.h3,{id:"with-annotations-only",children:"With Annotations Only"}),`
`,n(e.p,{children:[`Using annotations can be so powerful. This allows a very good customization of the timeline as desired. The
chart can be made to contain only custom annotations that utilize the other features available in the
`,t(e.code,{children:"TimelineChart"}),`. By default, the annotations are set so that they dont interact with the mouse. If an
interaction with the mouse is needed for the custom annotation, the annotation should have the
`,t(e.code,{children:"pointerEvents"})," set to ",t(e.em,{children:"auto"})," in its own style."]}),`
`,t(e.p,{children:`The example below shows the timeline for the some of the most momentuous inventions in the
last 6000 years from the year 2022. These annotations have been made using SVG just to
demonstrate that any valid element can be used for making the annotations.`}),`
`,t(i,{of:T}),`
`,t(e.h3,{id:"with-more-customization",children:"With More Customization"}),`
`,n(e.p,{children:["A lot more things can be customized in the ",t(e.code,{children:"TimelineChart"}),". These include:"]}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:"The color of each item on a row."}),`
`,t(e.li,{children:"The label of each item on a row."}),`
`,n(e.li,{children:["The kind of connections between two different items:",`
`,n(e.ol,{children:[`
`,t(e.li,{children:"Start-To-Start"}),`
`,t(e.li,{children:"Start-To-Finish"}),`
`,t(e.li,{children:"Finish-To-Start"}),`
`,t(e.li,{children:"Finish-To-Finish"}),`
`]}),`
`]}),`
`]}),`
`,t(i,{of:x}),`
`,t(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,t(i,{of:C}),`
`,t(f,{children:g}),`
`,t(e.h2,{id:"timelinechartannotation",children:"TimelineChartAnnotation"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"TimelineChartAnnotation"}),` is designed to be used for creating custom annotations, markers
or illustrations on the timeline of the chart.`]}),`
`,t(u,{of:b}),`
`,t(m,{})]})}}export{jt as default};
//# sourceMappingURL=TimeLineChart-256a0c88.js.map
