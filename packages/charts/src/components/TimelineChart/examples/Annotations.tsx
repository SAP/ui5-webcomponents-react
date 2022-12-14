import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';

interface TimingFigureProps {
  arrival: number;
  period: number;
  deadline?: number;
  totalDuration: number;
}

// A custom figure for testing out the TimelineChartAnnotation.
export const TimingFigure: React.FC<TimingFigureProps> = ({ arrival, period, deadline, totalDuration }) => {
  const ref = useRef<HTMLCanvasElement>();
  const verticalSpacing = 2;
  const halfArrowWidth = 4;

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');

        // Set the canvas dimensions to avoid blurring
        canvas.width = entry.contentRect.width;
        canvas.height = entry.contentRect.height;

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
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return <canvas ref={ref} style={{ width: '100%', height: '100%' }}></canvas>;
};

interface InventionProps {
  name: string;
  time: number;
  totalDuration: number;
  rowHeight: number;
  color: CSSProperties['color'];
}
export const Invention: React.FC<InventionProps> = ({ name, rowHeight, time, totalDuration, color }) => {
  const three4thRowHeight = (3 * rowHeight) / 4;
  const d = (5 / 8) * rowHeight;
  const rLarge = three4thRowHeight / 2;
  const a = (rLarge / d) ** 2;
  const b = (rLarge / d ** 2) * (d ** 2 - rLarge ** 2) ** 0.5;
  const x0 = 0;
  const y0 = d;
  const x1 = a * x0 - y0 * b;
  const x2 = a * x0 + y0 * b;
  const y1 = a * y0 + b * x0;
  const y2 = a * y0 - b * x0;

  const ref = useRef<HTMLDivElement>();
  const [offset, setoffset] = useState(0);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const width = entry.contentRect.width;
        const xOffset = (time / totalDuration) * width - rowHeight / 2;
        setoffset(xOffset);
      });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: '100%', position: 'absolute', overflow: 'hidden' }}>
      <svg width="100%" transform={`translate(${offset}, 0)`} fill={color}>
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="black" />
            <stop offset="75%" stopColor="black" />
            <stop offset="80%" stopColor="white" />
            <stop offset="100%" stopColor="white" />
          </radialGradient>

          <mask id="cut-out-center">
            <circle cx={rowHeight / 2} cy={rLarge} r={rLarge} fill="url(#grad1)" />
          </mask>
        </defs>

        <g style={{ pointerEvents: 'auto' }}>
          <title>{INVENTION_DESCRIPTION_MAP[name]}</title>
          <circle cx={rowHeight / 2} cy={rLarge} r={rLarge} />
          <path
            d={`M ${rowHeight / 2} 
        ${rLarge * 2} l ${x1} ${y1 - rLarge} 
        L ${rowHeight / 2} ${rowHeight} 
        L ${rowHeight / 2 + x2} ${rLarge + y2} Z`}
          />
          <svg
            x={rowHeight / 8 + 0.2 * rLarge}
            y={0.2 * rLarge}
            width={1.6 * rLarge}
            height={1.6 * rLarge}
            viewBox="0 0 200 200"
          >
            <g>
              <path id="path2460" fill={ThemingParameters.sapTextColor} d={INVENTION_ICON_MAP[name]} />
            </g>
          </svg>
        </g>
      </svg>
    </div>
  );
};

const INVENTION_ICON_MAP = {
  internet:
    'M 102.12968 25.85837 A 72.587685 72.402985 0 0 0 29.541866 98.261186 A 72.587685 72.402985 0 0 0 102.12968 170.664 A 72.587685 72.402985 0 0 0 174.7175 98.261186 A 72.587685 72.402985 0 0 0 102.12968 25.85837 z M 79.134705 44.613298 A 35.924975 68.708986 0 0 0 69.664998 68.009285 L 52.145654 68.009285 A 58.514561 58.365673 0 0 1 79.134705 44.613298 z M 125.12466 44.613298 A 58.514561 58.365673 0 0 1 152.11475 68.009285 L 134.59437 68.009285 A 35.924975 68.708986 0 0 0 125.12466 44.613298 z M 102.12968 49.279163 A 25.12785 48.058742 0 0 1 122.01322 68.009285 L 82.246143 68.009285 A 25.12785 48.058742 0 0 1 102.12968 49.279163 z M 46.630745 79.829753 L 67.405705 79.829753 A 35.924975 68.708986 0 0 0 66.30448 92.350952 L 43.951839 92.350952 A 58.514561 58.365673 0 0 1 46.630745 79.829753 z M 78.744031 79.829753 L 125.51534 79.829753 A 25.12785 48.058742 0 0 1 127.1049 92.350952 L 77.154464 92.350952 A 25.12785 48.058742 0 0 1 78.744031 79.829753 z M 136.85366 79.829753 L 157.62914 79.829753 A 58.514561 58.365673 0 0 1 160.30804 92.350952 L 137.95489 92.350952 A 35.924975 68.708986 0 0 0 136.85366 79.829753 z M 43.951839 104.17142 L 66.403699 104.17142 A 35.924975 68.708986 0 0 0 67.760205 117.22179 L 46.789392 117.22179 A 58.514561 58.365673 0 0 1 43.951839 104.17142 z M 77.268669 104.17142 L 126.9907 104.17142 A 25.12785 48.058742 0 0 1 124.98514 117.22179 L 79.274231 117.22179 A 25.12785 48.058742 0 0 1 77.268669 104.17142 z M 137.85567 104.17142 L 160.30804 104.17142 A 58.514561 58.365673 0 0 1 157.47049 117.22179 L 136.49916 117.22179 A 35.924975 68.708986 0 0 0 137.85567 104.17142 z M 52.461397 129.04225 L 70.259794 129.04225 A 35.924975 68.708986 0 0 0 80.776982 152.54831 A 58.514561 58.365673 0 0 1 52.461397 129.04225 z M 83.260551 129.04225 L 120.99882 129.04225 A 25.12785 48.058742 0 0 1 102.12968 145.39629 A 25.12785 48.058742 0 0 1 83.260551 129.04225 z M 133.99957 129.04225 L 151.79849 129.04225 A 58.514561 58.365673 0 0 1 123.48239 152.54883 A 35.924975 68.708986 0 0 0 133.99957 129.04225 z ',
  telephone:
    'M 46.175476 35.462435 L 25.119397 56.518514 L 38.787297 78.123914 L 58.412972 61.659802 L 53.194169 52.941471 C 85.244125 52.941471 117.83024 52.43287 148.68446 52.820032 L 145.36012 61.316154 L 163.09134 77.939429 L 179.16064 60.951318 L 155.14919 37.309867 L 46.175476 35.462435 z M 70.925387 60.492432 L 58.824833 83.395426 L 43.634029 83.395426 L 28.443225 106.14959 L 28.443225 166.1418 L 172.73106 166.1418 L 172.73106 106.47774 L 159.50034 84.781905 L 142.56546 84.781905 L 132.24619 60.492432 L 70.925387 60.492432 z M 100.66207 87.548661 A 31.21455 31.21455 0 0 1 131.8767 118.76329 A 31.21455 31.21455 0 0 1 100.66207 149.97741 A 31.21455 31.21455 0 0 1 69.447957 118.76329 A 31.21455 31.21455 0 0 1 100.66207 87.548661 z M 100.47759 93.089408 A 4.4328356 4.4328356 0 0 0 96.044784 97.522213 A 4.4328356 4.4328356 0 0 0 100.47759 101.95502 A 4.4328356 4.4328356 0 0 0 104.91039 97.522213 A 4.4328356 4.4328356 0 0 0 100.47759 93.089408 z M 85.332259 100.1081 A 4.4328356 4.4328356 0 0 0 80.899455 104.54091 A 4.4328356 4.4328356 0 0 0 85.332259 108.97371 A 4.4328356 4.4328356 0 0 0 89.765063 104.54091 A 4.4328356 4.4328356 0 0 0 85.332259 100.1081 z M 117.47035 100.1081 A 4.4328356 4.4328356 0 0 0 113.03754 104.54091 A 4.4328356 4.4328356 0 0 0 117.47035 108.97371 A 4.4328356 4.4328356 0 0 0 121.90315 104.54091 A 4.4328356 4.4328356 0 0 0 117.47035 100.1081 z M 100.66207 105.46436 A 13.298506 13.298506 0 0 0 87.36366 118.76329 A 13.298506 13.298506 0 0 0 100.66207 132.06171 A 13.298506 13.298506 0 0 0 113.961 118.76329 A 13.298506 13.298506 0 0 0 100.66207 105.46436 z M 78.683053 115.62292 A 4.4328356 4.4328356 0 0 0 74.250248 120.05572 A 4.4328356 4.4328356 0 0 0 78.683053 124.48904 A 4.4328356 4.4328356 0 0 0 83.115857 120.05572 A 4.4328356 4.4328356 0 0 0 78.683053 115.62292 z M 121.90315 115.62292 A 4.4328356 4.4328356 0 0 0 117.47035 120.05572 A 4.4328356 4.4328356 0 0 0 121.90315 124.48904 A 4.4328356 4.4328356 0 0 0 126.33596 120.05572 A 4.4328356 4.4328356 0 0 0 121.90315 115.62292 z M 85.332259 131.50722 A 4.4328356 4.4328356 0 0 0 80.899455 135.94054 A 4.4328356 4.4328356 0 0 0 85.332259 140.37334 A 4.4328356 4.4328356 0 0 0 89.765063 135.94054 A 4.4328356 4.4328356 0 0 0 85.332259 131.50722 z M 115.25395 131.50722 A 4.4328356 4.4328356 0 0 0 110.82114 135.94054 A 4.4328356 4.4328356 0 0 0 115.25395 140.37334 A 4.4328356 4.4328356 0 0 0 119.68675 135.94054 A 4.4328356 4.4328356 0 0 0 115.25395 131.50722 z M 100.47759 137.04848 A 4.4328356 4.4328356 0 0 0 96.044784 141.48129 A 4.4328356 4.4328356 0 0 0 100.47759 145.91409 A 4.4328356 4.4328356 0 0 0 104.91039 141.48129 A 4.4328356 4.4328356 0 0 0 100.47759 137.04848 z ',
  airplane:
    'm 57.851272,54.964685 a 3.6940298,3.6940298 0 0 0 -0.73593,4.167108 l -0.534591,0.534591 1.298293,1.298293 A 2.7705224,18.839552 45 0 0 45.087586,71.68208 2.7705224,18.839552 45 0 0 33.724873,86.962694 2.7705224,18.839552 45 0 0 49.005487,75.599981 2.7705224,18.839552 45 0 0 59.721429,62.807062 l 2.150789,2.150789 -3.717657,3.582456 3.396098,11.754429 6.135924,6.135924 -42.818093,42.6047 10.687806,10.6878 52.457544,-27.98766 c 1.192399,-1.1924 2.084334,-2.09245 3.063211,-3.0771 l 48.618209,37.33589 -0.56273,0.56273 -12.56235,21.75819 7.44482,7.96662 13.19084,-13.19085 5.48513,-3.7e-4 13.84383,-13.84383 1.04507,-5.7464 9.78196,-9.78196 -8.67478,-8.67478 -18.51118,10.68781 -37.9662,-48.701889 c 0.88585,-0.890412 1.6543,-1.666732 2.70876,-2.721191 L 139.99744,35.28201 129.5709,24.855471 90.206647,64.023141 84.275717,58.092211 72.52129,54.69611 67.724952,59.317784 65.677573,57.270406 A 2.7705224,18.100746 45 0 0 76.954414,47.651054 2.7705224,18.100746 45 0 0 87.794959,32.892608 2.7705224,18.100746 45 0 0 73.036514,43.733153 2.7705224,18.100746 45 0 0 63.417162,55.009994 l -1.090011,-1.09001 -0.307309,0.307308 a 3.6940298,3.6940298 0 0 0 -4.16857,0.737393 z',
  compass:
    'M 99.55413 26.394771 A 76.466423 74.434708 0 0 0 23.08748 100.8295 A 76.466423 74.434708 0 0 0 99.55413 175.26424 A 76.466423 74.434708 0 0 0 176.02078 100.8295 A 76.466423 74.434708 0 0 0 99.55413 26.394771 z M 99.55413 43.202531 A 58.550369 57.626862 0 0 1 158.10456 100.8295 A 58.550369 57.626862 0 0 1 99.55413 158.45648 A 58.550369 57.626862 0 0 1 41.003699 100.8295 A 58.550369 57.626862 0 0 1 99.55413 43.202531 z M 91.490023 54.791488 L 91.490023 71.206506 L 95.370406 71.206506 L 95.370406 59.939494 L 102.33794 71.206506 L 106.41676 71.206506 L 106.41676 54.791488 L 102.53638 54.791488 L 102.53638 64.195048 L 96.550179 54.791488 L 91.490023 54.791488 z M 139.55531 70.408105 L 103.40247 90.284928 A 11.082089 11.08209 51.481764 0 0 101.58605 90.13455 A 11.082089 11.08209 51.481764 0 0 90.686971 99.250273 L 59.436165 133.1712 L 99.296781 112.05414 A 11.082089 11.08209 51.481764 0 0 101.58605 112.29857 A 11.082089 11.08209 51.481764 0 0 112.66806 101.21656 A 11.082089 11.08209 51.481764 0 0 112.64635 100.54063 L 139.55531 70.408105 z M 52.074341 93.209298 L 56.49526 109.62432 L 61.180762 109.62432 L 64.046737 98.930912 L 66.990226 109.62432 L 71.675728 109.62432 L 76.096647 93.209298 L 71.785799 93.209298 L 69.139966 104.50887 L 66.262622 93.209298 L 62.040658 93.209298 L 59.019653 104.50887 L 56.49526 93.209298 L 52.074341 93.209298 z M 127.32194 93.578784 L 127.32194 109.9938 L 139.19512 109.9938 L 139.19512 106.8188 L 131.53357 106.8188 L 131.53357 102.76169 L 138.64425 102.76169 L 138.64425 99.586686 L 131.53357 99.586686 L 131.53357 96.753784 L 139.19512 96.753784 L 139.19512 93.578784 L 127.32194 93.578784 z M 90.68232 103.15856 A 11.082089 11.08209 51.481764 0 0 96.038066 110.80977 L 71.256632 123.43536 L 90.68232 103.15856 z M 100.25486 130.22099 C 98.101456 130.22099 96.337552 130.70607 94.963196 131.6762 C 93.596182 132.63899 92.912676 133.88474 92.912675 135.41344 C 92.912677 136.55262 93.213838 137.50823 93.816496 138.27993 C 94.426507 139.04428 95.42272 139.65062 96.804427 140.09894 C 97.407083 140.29738 98.05 140.46275 98.733508 140.59504 C 99.424359 140.71998 100.0783 140.85577 100.69566 141.00276 C 101.28362 141.1424 101.72862 141.34487 102.02995 141.60944 C 102.33863 141.86668 102.49297 142.17536 102.49297 142.53549 C 102.49297 142.92501 102.38622 143.21865 102.17309 143.41709 C 101.9673 143.61552 101.70272 143.78089 101.37934 143.91318 C 101.11476 144.01607 100.773 144.08974 100.35408 144.13384 C 99.935158 144.17794 99.596906 144.19998 99.339673 144.19998 C 98.340137 144.19998 97.296847 144.01257 96.209115 143.63774 C 95.128741 143.26292 94.15107 142.72622 93.276477 142.02802 L 92.813456 142.02802 L 92.813456 145.9637 C 93.695399 146.33117 94.639994 146.63636 95.646875 146.87889 C 96.661105 147.11408 97.847716 147.23184 99.207381 147.23184 C 101.55922 147.23184 103.41885 146.72822 104.78585 145.72134 C 106.16022 144.7071 106.84723 143.3917 106.84722 141.77481 C 106.84722 140.64299 106.54606 139.72395 105.9434 139.01839 C 105.34809 138.30549 104.42205 137.74324 103.16528 137.33167 C 102.52587 137.12588 101.92705 136.96454 101.36849 136.84694 C 100.81728 136.72935 100.23999 136.60809 99.637329 136.48314 C 98.718642 136.29205 98.094269 136.08259 97.763542 135.85476 C 97.432818 135.61957 97.267453 135.28482 97.267448 134.8512 C 97.26745 134.56457 97.370171 134.31101 97.575956 134.09052 C 97.781743 133.86269 98.02778 133.69382 98.314412 133.58358 C 98.63779 133.45128 98.972542 133.36309 99.317969 133.31899 C 99.670748 133.26754 100.02353 133.242 100.3763 133.242 C 101.37584 133.242 102.35298 133.42189 103.30842 133.78201 C 104.27121 134.13479 105.08351 134.57577 105.74497 135.10493 L 106.19714 135.10493 L 106.19714 131.32377 C 105.42544 131.00774 104.51042 130.74665 103.45208 130.54087 C 102.40111 130.32773 101.33524 130.22099 100.25486 130.22099 z ',
  penicillin:
    'm 129.65565,28.653548 a 31.953358,31.953358 0 0 0 -23.19186,9.988021 l -0.13126,-0.119889 -35.142043,42.734342 0.184485,0.168465 -35.109485,42.694033 0.198954,0.1819 a 31.953358,31.953358 0 0 0 -7.890475,20.99045 31.953358,31.953358 0 0 0 31.953606,31.95309 31.953358,31.953358 0 0 0 23.08903,-9.88518 l 0.01602,0.0145 0.141077,-0.17157 a 31.953358,31.953358 0 0 0 2.617928,-3.18327 l 32.383033,-39.37951 -0.18397,-0.16794 35.10897,-42.694556 -0.0754,-0.06873 A 31.953358,31.953358 0 0 0 161.60931,60.607183 31.953358,31.953358 0 0 0 129.6557,28.653578 Z m -3.33209,11.969812 c 7.48637,-0.110785 14.04978,7.399032 14.04978,7.399032 0,0 -9.26997,-0.742726 -12.92944,0.738973 -3.65947,1.481698 -7.26791,4.20726 -10.34304,7.018693 -5.16648,4.723464 -13.29841,16.253271 -13.29841,16.253271 l -8.127153,-5.910233 c 0,0 12.764583,-17.217063 16.623273,-20.317106 3.8587,-3.100044 6.03437,-4.809594 13.6679,-5.171778 0.11928,-0.0057 0.23825,-0.0091 0.35709,-0.01085 z m -55.464319,53.85046 35.146179,32.58612 -24.027995,29.66744 a 23.709179,24.072694 0 0 1 -1.942517,2.39831 l -0.104903,0.12919 -0.01189,-0.0109 a 23.709179,24.072694 0 0 1 -17.131771,7.44709 23.709179,24.072694 0 0 1 -23.709147,-24.07244 23.709179,24.072694 0 0 1 5.854423,-15.8135 l -0.147794,-0.13746 z',
  lightbulb:
    'M 99.913281,22.533508 A 49.6847,49.6847 0 0 0 50.228459,72.218331 49.6847,49.6847 0 0 0 65.020837,107.54176 l 5.744869,32.6719 h 57.995944 l 6.56601,-33.19384 A 49.6847,49.6847 0 0 0 149.5981,72.218331 49.6847,49.6847 0 0 0 99.913281,22.533508 Z M 119.0718,37.481433 a 11.820897,6.0951495 49.283497 0 1 9.85211,5.826001 11.820897,6.0951495 49.283497 0 1 3.09129,12.935645 11.820897,6.0951495 49.283497 0 1 -12.33103,-4.983676 11.820897,6.0951495 49.283497 0 1 -3.09129,-12.935644 11.820897,6.0951495 49.283497 0 1 2.47892,-0.842326 z m -9.00978,40.46213 c 1.96961,0.03192 3.73262,1.592192 5.25239,2.638598 0.82538,0.781452 1.35128,1.417537 1.32498,2.615861 -0.007,1.076165 -0.0139,2.157743 -0.16588,3.225127 -0.21848,1.001055 -0.60647,1.934215 -0.971,2.888195 -0.42483,1.153782 -0.80205,2.35407 -1.45572,3.40031 -0.0727,0.104161 -0.14517,0.208602 -0.21808,0.312642 0.41913,0.208548 0.83909,0.415704 1.25987,0.621668 0.86882,0.481235 1.80741,0.684281 2.77968,0.793233 l 2.52181,-10.584884 h 4.32015 l -2.44947,10.282577 c 0.63476,-0.24944 1.23875,-0.590268 1.86811,-0.855245 0.17183,-0.06132 0.3434,-0.122649 0.51521,-0.183968 l 5.83375,2.201416 c -0.16869,0.05389 -2.92311,0.107857 -3.0918,0.161747 -1.02938,0.404914 -1.95817,1.052954 -3.05976,1.25367 -0.90132,0.115815 -1.79904,0.149578 -2.70423,0.102319 l -9.58442,40.231651 h -4.32015 l 9.8273,-41.25071 c -0.85505,-0.416315 -1.71183,-0.827998 -2.53886,-1.300696 -0.53791,-0.279802 -1.07688,-0.560802 -1.61385,-0.846976 -0.44035,0.63133 -0.8764,1.265339 -1.28365,1.918746 -0.84639,0.995281 -1.72191,1.088654 -2.97966,1.201477 -0.94084,0.0927 -1.88508,0.0617 -2.8298,0.0708 -0.88809,0.0047 -1.77652,0.02017 -2.66444,-0.0036 -1.1838,-0.051 -2.3688,-0.161256 -3.49333,-0.56379 -1.535255,-0.567317 -2.997338,-1.328005 -4.398177,-2.189014 -0.223982,0.153069 -0.45474,0.296923 -0.694531,0.425814 -0.294399,0.161541 -0.601417,0.299548 -0.895036,0.462504 -0.664872,0.369009 -1.253407,0.877197 -1.982825,1.12913 -0.955742,0.347329 -1.916738,0.485723 -2.930053,0.544153 -1.007509,0.132514 -2.008132,0.246869 -3.026689,0.155029 -0.988727,-0.04748 -1.981988,-0.103643 -2.955375,-0.294038 -0.523409,-0.09139 -1.056131,-0.121893 -1.58595,-0.1757 L 91.372717,137.0485 H 87.052568 L 77.214925,95.755396 c -0.105501,-0.0082 -0.210647,-0.01742 -0.31626,-0.02532 l -6.5257,-2.325439 c 1.074329,0.08666 4.603839,0.164529 6.356718,0.313159 l -2.349727,-9.863481 h 4.32015 l 2.491321,10.457243 c 0.615627,0.07629 1.234097,0.12776 1.85415,0.162264 1.00047,0.08477 1.991154,0.03116 2.983797,-0.09767 0.984188,-0.09805 1.948237,-0.176862 2.895431,-0.473873 0.998074,-0.407095 1.888067,-1.023376 2.831351,-1.540475 0.293414,-0.152584 0.573849,-0.326624 0.843877,-0.515731 -0.809468,-0.910849 -1.505455,-1.920986 -2.068091,-3.003434 -0.649051,-1.389314 -1.200667,-2.8358 -1.385445,-4.368725 -0.05715,-1.142062 4.12e-4,-2.313205 0.333313,-3.413229 0.475671,-1.143188 1.075267,-1.809652 2.402954,-1.579748 2.587991,0.421062 4.872386,1.897793 6.90087,3.516064 0.922812,0.952297 1.465126,1.805518 1.517216,3.167249 -0.017,1.188951 -0.333173,2.314578 -0.869193,3.378605 -0.590447,1.127729 -1.248209,2.236693 -2.089795,3.197221 -0.295953,0.291467 -0.603391,0.572962 -0.925008,0.837158 0.01195,0.01149 0.02313,0.02371 0.03514,0.03514 0.20695,0.09077 0.418344,0.171343 0.627352,0.257348 1.084439,0.425956 2.232282,0.574218 3.386354,0.640788 0.88119,0.03458 1.76371,0.02417 2.64532,0.01757 0.94473,-0.01487 1.88919,0.01307 2.8329,-0.03514 1.09571,-0.09407 2.01867,-0.112788 2.79673,-0.958598 0.40134,-0.631336 0.83206,-1.242788 1.26452,-1.853116 -0.54021,-0.353386 -1.06827,-0.724501 -1.57923,-1.119829 -0.69246,-0.566678 -1.36958,-1.168822 -1.84743,-1.935282 -0.56636,-1.048396 -0.79353,-2.224012 -0.78083,-3.413745 0.0727,-1.28305 0.20486,-2.566875 0.6134,-3.793567 0.31659,-0.951849 0.72545,-1.807139 1.39371,-2.566768 0.57221,-0.425554 1.10823,-0.859433 1.86035,-0.894003 0.13313,-0.01206 0.26557,-0.0166 0.39688,-0.01447 z m 2.76417,2.33009 c -0.66376,-0.0039 -1.16832,0.307716 -1.68,0.692464 -0.64807,0.673791 -1.00502,1.473898 -1.30793,2.34301 -0.39475,1.194589 -0.50328,2.447887 -0.56948,3.695898 0.0207,1.147245 0.26696,2.25537 0.90382,3.214274 0.14407,0.197825 0.30284,0.381603 0.47026,0.556555 0.0111,-0.01595 0.0225,-0.03158 0.0336,-0.04754 0.62564,-1.025642 0.98827,-2.192926 1.40611,-3.315043 0.34955,-0.941695 0.72691,-1.859727 0.91881,-2.849438 0.14421,-1.042976 0.13666,-2.098567 0.14366,-3.149162 -0.007,-0.460495 -0.12616,-0.824766 -0.31884,-1.141016 z m -18.407664,1.493966 c -0.762103,-0.02286 -1.156951,0.332985 -1.511535,1.211295 -0.287665,1.053071 -0.345585,2.167484 -0.256316,3.251998 0.203007,1.489733 0.758513,2.885137 1.425753,4.220931 0.01541,0.02648 0.03151,0.05262 0.04703,0.07906 0.76664,-0.882211 1.383587,-1.890176 1.923913,-2.923336 0.492193,-1.015423 0.778405,-2.094603 0.762744,-3.222025 -0.09242,-1.065608 -0.509869,-1.72523 -1.153417,-2.40037 -0.187061,-0.04823 -0.360821,-0.08168 -0.648023,-0.143144 -0.219041,-0.04385 -0.414275,-0.06914 -0.590145,-0.07441 z M 113.745,93.144185 c -8.6e-4,0.0012 -0.002,0.0024 -0.003,0.0036 0.18786,0.107593 0.46531,0.267891 0.34985,0.199471 -0.13881,-0.08226 -0.21765,-0.126689 -0.34726,-0.203089 z M 73.071509,141.34124 v 9.2351 h 53.194171 v -9.2351 z m 0,10.05417 v 9.2351 h 15.490527 a 12.374999,12.374999 0 0 0 12.210104,10.40298 12.374999,12.374999 0 0 0 12.21011,-10.40298 h 13.28343 v -9.2351 z',
  steamengine:
    'M 57.916878 19.43809 A 8.4962683 8.4962683 0 0 0 49.420756 27.934212 A 8.4962683 8.4962683 0 0 0 54.701571 35.794198 L 44.749207 109.88425 A 32.177363 32.322633 20.617892 0 0 29.197701 127.31006 A 32.177363 32.322633 20.617892 0 0 27.976587 146.10839 L 23.12262 146.10839 L 23.12262 153.71775 L 19.94762 153.71775 L 19.94762 178.00619 L 176.57475 178.00619 L 176.57475 153.71775 L 173.839 153.71775 L 173.839 146.10839 L 167.23992 146.10839 L 167.23992 133.40374 L 173.61938 132.98516 L 173.61938 128.92185 L 167.23992 129.33991 L 167.23992 124.12937 L 171.51305 124.12937 L 171.51305 117.84965 L 160.32096 117.84965 L 160.32096 87.110962 A 8.4962683 8.4962683 0 0 0 168.04814 78.65308 A 8.4962683 8.4962683 0 0 0 159.55202 70.156958 A 8.4962683 8.4962683 0 0 0 154.47222 71.849878 L 116.60115 46.394584 L 66.332902 28.748633 A 8.4962683 8.4962683 0 0 0 66.413 27.934212 A 8.4962683 8.4962683 0 0 0 57.916878 19.43809 z M 62.524349 35.058325 L 103.85309 63.11346 L 103.79728 102.3245 L 101.38606 102.3245 L 101.38606 106.38782 L 103.7916 106.38782 L 103.77558 117.78041 L 101.38606 117.78041 L 101.38606 123.32115 L 103.36423 123.32115 L 98.434819 133.85178 L 91.212004 134.32513 A 32.177363 32.322633 20.617892 0 0 70.69646 108.38822 A 32.177363 32.322633 20.617892 0 0 49.056954 108.06317 L 58.689441 36.35437 A 8.4962683 8.4962683 0 0 0 62.524349 35.058325 z M 113.15123 66.962321 L 151.14478 79.869543 A 8.4962683 8.4962683 0 0 0 157.36559 86.857231 L 157.36559 117.84965 L 144.9157 117.84965 L 144.9157 124.12937 L 149.50819 124.12937 L 149.50819 130.50263 L 119.36274 132.47925 L 115.3759 123.32115 L 118.00933 123.32115 L 118.00933 117.78041 L 114.97903 117.78041 L 114.56923 106.38782 L 116.53191 106.38782 L 116.53191 102.3245 L 114.42299 102.3245 L 113.15123 66.962321 z M 58.635697 112.54972 A 26.538805 26.054457 20.617892 0 1 67.459965 113.91449 L 60.13328 130.16001 A 8.4954249 8.5337788 20.617892 0 0 58.388684 130.18327 L 49.887911 114.146 A 26.538805 26.054457 20.617892 0 1 58.635697 112.54972 z M 70.047404 114.89945 A 26.538805 26.054457 20.617892 0 1 82.756706 126.78141 L 65.860579 133.21202 A 8.4954249 8.5337788 20.617892 0 0 64.792428 132.12992 L 70.047404 114.89945 z M 47.909737 116.60115 L 52.116715 127.80357 L 47.894234 122.81007 A 3.3246269 3.3246269 0 0 0 48.391878 121.06444 A 3.3246269 3.3246269 0 0 0 47.599679 118.91109 L 47.909737 116.60115 z M 43.746684 117.34839 L 43.682088 117.82847 L 43.460396 117.56595 A 26.538805 26.054457 20.617892 0 1 43.746684 117.34839 z M 43.429907 117.5892 L 43.429907 118.17212 A 3.3246269 3.3246269 0 0 0 41.742672 121.06444 A 3.3246269 3.3246269 0 0 0 45.067017 124.38931 A 3.3246269 3.3246269 0 0 0 45.745011 124.31748 L 53.033455 132.93711 A 8.4954249 8.5337788 20.617892 0 0 52.514624 133.54689 L 34.942053 128.19838 A 26.538805 26.054457 20.617892 0 1 43.429907 117.5892 z M 83.920976 129.29237 A 26.538805 26.054457 20.617892 0 1 85.427861 134.70444 L 72.201278 135.57209 L 83.920976 129.29237 z M 34.00826 130.71554 L 50.837207 138.31714 A 8.4954249 8.5337788 20.617892 0 0 50.94366 140.02866 L 39.597066 146.10839 L 34.066138 146.10839 A 26.538805 26.054457 20.617892 0 1 34.00826 130.71554 z M 59.17985 134.34115 A 4.285303 4.3046498 20.617892 0 1 60.829879 134.61142 A 4.285303 4.3046498 20.617892 0 1 62.841125 136.18549 L 61.269128 136.28884 A 2.9320495 3.096327 20.617892 0 0 60.404582 135.74262 A 2.9320495 3.096327 20.617892 0 0 58.760238 135.66149 L 57.874504 134.61349 A 4.285303 4.3046498 20.617892 0 1 59.17985 134.34115 z M 149.50819 134.56646 L 149.50819 146.10839 L 122.28298 146.10839 L 122.03493 138.61841 L 121.08253 136.43043 L 149.50819 134.56646 z M 55.801245 136.21132 L 56.723669 137.30221 A 2.9320495 3.096327 20.617892 0 0 56.57019 137.60814 A 2.9320495 3.096327 20.617892 0 0 58.223836 141.53865 A 2.9320495 3.096327 20.617892 0 0 61.722331 140.3227 L 63.295878 140.21935 A 4.285303 4.3046498 20.617892 0 1 57.798539 142.66933 A 4.285303 4.3046498 20.617892 0 1 55.303601 137.13168 A 4.285303 4.3046498 20.617892 0 1 55.801245 136.21132 z M 96.472148 138.04429 L 96.20343 138.61841 L 95.440169 145.91409 L 97.463302 146.10839 L 90.594987 146.10839 A 32.177363 32.322633 20.617892 0 0 91.501392 138.37037 L 96.472148 138.04429 z M 85.781844 138.74502 A 26.538805 26.054457 20.617892 0 1 84.7571 146.10839 L 82.971163 146.10839 L 69.092424 139.83953 L 85.781844 138.74502 z M 65.874532 144.01757 L 72.744397 146.10839 L 65.517965 146.10839 L 65.059078 144.88676 A 8.4954249 8.5337788 20.617892 0 0 65.874532 144.01757 z M 53.20037 144.57309 A 8.4954249 8.5337788 20.617892 0 0 54.323299 145.54719 L 54.15225 146.10839 L 49.166508 146.10839 L 53.20037 144.57309 z ',
  printingpress:
    'm 100.94009,22.911263 v 4.451925 l -1.660362,-0.766362 v 4.432805 l 1.660362,0.766361 v 2.459281 l -1.660362,0.638721 v 4.432805 0.698665 l 1.660362,0.766361 v 2.459282 l -1.660362,0.63872 v 4.432805 l 1.660362,-0.638721 v 0.855245 H 52.815381 V 34.354492 H 44.319259 V 110.45166 H 21.864815 v 17.73121 h 6.050277 v 54.49487 h 11.820467 v -54.49487 h 12.5212 v 30.48341 h 8.496122 V 128.18287 H 72.772302 V 110.45166 H 52.815381 V 55.926819 h 46.464347 v 2.619478 l 1.660362,0.766362 v 2.459281 l -1.660362,0.638721 v 4.432804 1.227832 l 1.660362,0.766362 v 2.459281 l -1.660362,0.638721 V 75.3184 h -8.765873 v 14.686442 h -7.9375 v 6.280237 h 41.003695 v -6.280237 h -5.7304 V 89.02609 h -6.65954 V 78.683053 h 6.65954 V 75.3184 h -10.62984 v -2.004012 l 1.6645,-0.640271 v -0.170015 -4.432805 l -1.6645,-0.767912 v -3.513997 l 1.6645,-0.640271 v -0.170015 -4.432805 l -1.6645,-0.768428 v -1.85105 h 41.34477 v 22.756234 h 8.49612 V 34.354492 h -8.49612 v 14.184664 h -41.34477 v -3.270601 l 1.6645,-0.640271 v -0.170016 -4.432804 l -1.6645,-0.768429 v -2.984314 l 1.6645,-0.640271 v -0.170015 -4.432804 l -1.6645,-0.768429 v -7.349939 z m 12.46642,58.037801 v 6.27972 h 69.44796 v -6.27972 z m 35.15807,8.077026 v 21.42557 H 131.8767 v 17.73121 h 8.22121 v 30.48341 h 8.49664 v -30.48341 h 12.14086 v 54.49487 h 11.82098 v -54.49487 h 7.41299 V 110.45166 H 157.0607 V 89.02609 Z M 76.945691,111.5596 v 55.41057 H 127.92346 V 111.5596 Z m 9.494511,5.57072 h 32.138088 v 3.69383 H 86.440202 Z m 0,8.46666 h 32.138088 v 3.69384 H 86.440202 Z m 0,7.40834 h 32.138088 v 3.69383 H 86.440202 Z m 0,7.40833 h 32.138088 v 3.69383 H 86.440202 Z',
  wheel:
    'M 98.630672 19.209163 A 79.052238 79.052238 0 0 0 19.578133 98.261186 A 79.052238 79.052238 0 0 0 98.630672 177.31321 A 79.052238 79.052238 0 0 0 177.68269 98.261186 A 79.052238 79.052238 0 0 0 98.630672 19.209163 z M 95.969853 34.646464 L 93.176742 78.142517 A 20.871267 20.871267 0 0 0 89.185771 79.699011 L 55.764038 50.309591 A 65.199623 63.722008 0 0 1 95.969853 34.646464 z M 102.77099 34.672302 A 65.199623 63.722008 0 0 1 142.274 50.925057 L 108.98611 80.196655 A 20.871267 20.871267 0 0 0 105.59407 78.639644 L 102.77099 34.672302 z M 50.905937 54.863835 L 80.334115 88.330009 A 20.871267 20.871267 0 0 0 78.587968 92.456889 L 33.554541 95.348185 A 65.199623 63.722008 0 0 1 50.905937 54.863835 z M 147.12384 55.669987 A 65.199623 63.722008 0 0 1 163.75228 95.256201 L 118.64857 92.360254 A 20.871267 20.871267 0 0 0 117.49309 89.366121 L 147.12384 55.669987 z M 98.630155 87.733146 A 10.527985 10.527985 0 0 1 109.15819 98.261186 A 10.527985 10.527985 0 0 1 98.630155 108.78923 A 10.527985 10.527985 0 0 1 88.102633 98.261186 A 10.527985 10.527985 0 0 1 98.630155 87.733146 z M 98.630155 90.688521 A 7.2033582 7.5727611 0 0 0 91.426978 98.261186 A 7.2033582 7.5727611 0 0 0 98.630155 105.83385 A 7.2033582 7.5727611 0 0 0 105.83385 98.261186 A 7.2033582 7.5727611 0 0 0 98.630155 90.688521 z M 33.585547 101.91471 L 78.858236 104.82203 A 20.871267 20.871267 0 0 0 80.583195 108.64815 L 51.255786 141.9996 A 65.199623 63.722008 0 0 1 33.585547 101.91471 z M 163.71559 102.00721 A 65.199623 63.722008 0 0 1 146.78794 141.20947 L 117.24401 107.61204 A 20.871267 20.871267 0 0 0 118.36642 104.91918 L 163.71559 102.00721 z M 108.4678 116.6089 L 141.85232 145.96525 A 65.199623 63.722008 0 0 1 102.81853 161.84645 L 105.64265 117.86464 A 20.871267 20.871267 0 0 0 108.4678 116.6089 z M 89.704602 117.10655 A 20.871267 20.871267 0 0 0 93.128682 118.369 L 95.92231 161.87384 A 65.199623 63.722008 0 0 1 56.197087 146.5709 L 89.704602 117.10655 z '
};

const INVENTION_DESCRIPTION_MAP = {
  internet: 'The internet was invented in the 1970s.',
  telephone: 'The telephone was invented in 1876.',
  airplane: 'The airplane was invented by the Wright brothers in 1903.',
  compass: 'The compass was invented by the Chinese in the 11th century.',
  penicillin: 'The penicillin isolated and manufactured in 1946.',
  lightbulb: 'The light bulb was invented by Edison and others around 1846.',
  steamengine: 'The steam engine was invented by James Watson in 1776.',
  printingpress: 'The Guttenburg press was invented in 1440.',
  wheel: 'The wheel was one of the earliest important inventions.'
};
