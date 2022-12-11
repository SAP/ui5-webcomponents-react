import React, { useEffect, useRef } from 'react';

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
