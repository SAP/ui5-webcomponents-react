import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as a}from"./index-B7tNCeqj.js";import{ae as s,af as i,ah as h,ai as l}from"./index-gbm_PpJj.js";import"./index-B0ifNMuI.js";import"./index-D1Su9tdA.js";import{C as c}from"./ControlsWithNote-bCDmWE4f.js";import{D as m}from"./DocsHeader-BCU2gKYC.js";import{F as d}from"./CommandsAndQueries-BZOd3hXB.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import{S as p}from"./SubcomponentsSection-BVy4lpQe.js";import{C as f,D as o,W as x,a as u,b as g,L as j,T as v}from"./TimeLineChart.stories-Bn83EW5d.js";import"./iframe-Kf-3TudD.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DbOtF11K.js";import"./utils-5ouIlTbN.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-BBEhHqXq.js";import"./Keys-icCwrzTr.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-DnECHVzX.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-Cvpxulmf.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-Z-_GrMVK.js";import"./information-WFnUlRRI.js";import"./sys-enter-2-2B0zQ6hc.js";import"./sys-enter-2-BneCyVoJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C1ab8_Nt.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-DK7pmoW6.js";import"./Tag-CGyrVfu4.js";import"./sys-help-2-b8hsY3Mo.js";import"./index-DbDAMUse.js";import"./Link-CGflddfl.js";import"./index-DA9x0mSX.js";import"./Popover-jpBWywBD.js";import"./PopupsCommon.css-C5goN-pn.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-I4tI7zf8.js";import"./client-CY4f97Aa.js";import"./copy-DZD0G8JY.js";import"./copy-ByaNPW9V.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-Dl7f5Tur.js";import"./I18nStore-CG8U7JCg.js";import"./useStylesheet-CGem_MOm.js";import"./index-Dhh43P9e.js";import"./index-BCOROM5X.js";import"./Label-B_m68C-w.js";import"./index-Bq0c7Dpk.js";import"./index-mePJl18F.js";import"./Text-cV8jhUFL.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-MIUva8A9.js";import"./BusyIndicator-7GyohC3D.js";import"./index-DF8djFGP.js";import"./index-V1glf46E.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DorkY_DY.js";import"./ThemingParameters-B358vlzA.js";import"./react-content-loader.es-DJkETQXh.js";function r(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:f}),`
`,t.jsx(m,{isChart:!0,since:"1.10.0",experimental:!0}),`
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
`,t.jsx(d,{})]})}function Yt(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{Yt as default};
