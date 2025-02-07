import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as a}from"./index-ChplMHeC.js";import{M as s,C as i,a as h,A as l}from"./index-x1YeHyU9.js";import"./index-BUTAtzSu.js";import"./index-DPmPYx4A.js";import{C as c}from"./ControlsWithNote-hbKsIfAn.js";import{D as d}from"./DocsHeader-BCQYgwSr.js";import{F as m}from"./CommandsAndQueries-fcunJkKJ.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Bv63CP0f.js";import{S as p}from"./SubcomponentsSection-BVy4lpQe.js";import{C as f,D as o,W as x,a as u,b as g,L as j,T as v}from"./TimeLineChart.stories-BbrpzXJN.js";import"./iframe-j8Yg6O2b.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-EZ3G6CaF.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-CDZIkOZh.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DNDJ5KQd.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-C0o60MFY.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-DMxd5M-V.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DdJENLJZ.js";import"./information-crW1aXWm.js";import"./sys-enter-2-Btg_l7Gl.js";import"./sys-enter-2-BQoPN53b.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DluL2nJ0.js";import"./main-BL2DbqAR.js";import"./index-k33BeIu6.js";import"./Tag-Bt4eSfIf.js";import"./sys-help-2-DkPv2GRC.js";import"./index-DfEG_6DA.js";import"./Link-Cee8M4pE.js";import"./index-CfE5ChDC.js";import"./Popover-8R4fWEnb.js";import"./PopupsCommon.css-BJYIHzRz.js";import"./FocusableElements-B22KwyXz.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D42cNNcx.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CutcZLZM.js";import"./client-lwzJIAjg.js";import"./copy-DIb74NtX.js";import"./copy-DCGapvEg.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-ROSiskjY.js";import"./I18nStore-DI-J8Q63.js";import"./useStylesheet-hr5H-IMi.js";import"./index-CXLzbFR8.js";import"./index-DXHKslqi.js";import"./Label-BvuET2bs.js";import"./index-BwPIj-od.js";import"./index-CJHgPl-E.js";import"./Text-BqkjUVZl.js";import"./addCustomCSSWithScoping-CAH5PFOm.js";import"./index-CpccB1hQ.js";import"./index-W6Ra1GtV.js";import"./BusyIndicator-Bzvv1vPS.js";import"./index-DIc9VXE4.js";import"./index-BVweZtNr.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Ccx1Czlo.js";import"./ThemingParameters-le4wpk1U.js";import"./react-content-loader.es-CXkD-qGt.js";function r(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:f}),`
`,t.jsx(d,{isChart:!0,since:"1.10.0",experimental:!0}),`
`,t.jsx(i,{of:o}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(c,{of:o}),`
`,t.jsx("br",{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(e.h3,{id:"with-annotations",children:"With Annotations"}),`
`,t.jsxs(e.p,{children:["This example shows how the ",t.jsx(e.code,{children:"TimelineChart"}),` is used to visualize a simple simulation of the
`,t.jsx(e.a,{href:"https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling",rel:"nofollow",children:t.jsx("b",{children:"Earliest Deadline First"})}),` scheduling
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
`,t.jsx(i,{of:x}),`
`,t.jsx(e.h4,{id:"timingfigure-code",children:"TimingFigure Code"}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show Code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`export const TimingFigure = ({ arrival, period, deadline, totalDuration }) => {
  const ref = useRef(null);
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
`,t.jsx(i,{of:u}),`
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
`,t.jsx(i,{of:g}),`
`,t.jsx(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,t.jsx(i,{of:j}),`
`,t.jsx(h,{children:p}),`
`,t.jsx(e.h2,{id:"timelinechartannotation",children:"TimelineChartAnnotation"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"TimelineChartAnnotation"}),` is designed to be used for creating custom annotations, markers
or illustrations on the timeline of the chart.`]}),`
`,t.jsx(l,{of:v}),`
`,t.jsx(m,{})]})}function Kt(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{Kt as default};
