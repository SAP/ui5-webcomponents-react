import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-B5Ip8tK9.js";import{M as s,C as i,a as h,A as l}from"./index-nLaLMNuN.js";import"./index-CIMhrZAh.js";import"./index-cKhIZ-Pm.js";import{C as c}from"./ControlsWithNote-DBdBEgIz.js";import{D as d}from"./DocsHeader-EKkpqr9v.js";import{F as m}from"./CommandsAndQueries-CveEDSKh.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bi6E7_f2.js";import{S as p}from"./SubcomponentsSection-BVy4lpQe.js";import{C as f,D as o,W as x,a as u,b as g,L as j,T as v}from"./TimeLineChart.stories-B3t771ZC.js";import"./iframe-BonaEpzB.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-gx_Zcjo3.js";import"./CustomElementsScope-CjZbIYTD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhunxXU0.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CZw5gRks.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-8xifowfb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B158X0Y5.js";import"./decline-BwbUHmi7.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-Beb07qW6.js";import"./information-DPOcXyRn.js";import"./sys-enter-2-SJ-ADG9s.js";import"./sys-enter-2-3iNjTkh9.js";import"./alert-OoqNCaQj.js";import"./TagDesign-Ga50IS6u.js";import"./utils-Dd3zRfnL.js";import"./main-DnREbZ5I.js";import"./index-Bpis0SRi.js";import"./Tag-CEzSQIl5.js";import"./sys-help-2-RmNMPhxT.js";import"./index-DY8ctAYr.js";import"./Link-CCYqxCbK.js";import"./index-DMDy6m5O.js";import"./Popover-inHmHWag.js";import"./PopupsCommon.css-C6QW1NU3.js";import"./FocusableElements-B0ox-u2n.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeuUg-iv.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CbwaFUHa.js";import"./copy-1xAMALOS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-D0_ZOo-F.js";import"./I18nStore-XmjZR7rr.js";import"./useStylesheet-DUe1LpVj.js";import"./index-BFqlvNkW.js";import"./index-DNdqOyXb.js";import"./Label-Xvb1prxJ.js";import"./index-BWd6G_fU.js";import"./index-_2xpPfjR.js";import"./Text-CkerREnW.js";import"./preview-iSCwrsh1.js";import"./DocsRenderer-CFRXHY34-C0MwNk02.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-PCpHaHtG.js";import"./index-D9fhKjZm.js";import"./BusyIndicator-DjtkhCPk.js";import"./index-DkwX2oO3.js";import"./index-DWxMKmlL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-qIXMnRwj.js";import"./ThemingParameters-BB3UHRT7.js";import"./react-content-loader.es-C9Vmu4FD.js";function r(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:f}),`
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
