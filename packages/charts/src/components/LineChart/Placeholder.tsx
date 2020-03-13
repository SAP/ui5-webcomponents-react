import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const LineChartPlaceholder = (props) => {
  return (
    <ContentLoader
      height={300}
      width={300}
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as any}
      {...props}
    >
      {/*<line x1={30} x2={60} y1={260} y2={190} strokeWidth={3} />*/}
      {/*<line x1={60} x2={90} y1={190} y2={150} strokeWidth={3} />*/}
      {/*<line x1={90} x2={120} y1={150} y2={90} strokeWidth={3} />*/}
      {/*<line x1={120} x2={150} y1={90} y2={140} strokeWidth={3} />*/}
      {/*<line x1={150} x2={180} y1={140} y2={110} strokeWidth={3} />*/}
      {/*<line x1={180} x2={210} y1={110} y2={80} strokeWidth={3} />*/}
      {/*<line x1={210} x2={240} y1={80} y2={150} strokeWidth={3} />*/}
      {/*<line x1={240} x2={270} y1={150} y2={130} strokeWidth={3} />*/}
      {/*/!*<polyline points="30,260 60,190 90,150 120,90 150,140 180,110 210,80 240,150 270,130"*!/*/}
      {/*/!*      strokeWidth="3"/>*!/*/}
      <path
        d="M30 260 L60 190 L90 150 L120 90 L150 140 L180 110 L210 80 L240 150 L270 130 L270 135 L240 155 L210 85 L180 115 L150 145 L120 95 L90 155 L60 195 L30 265 Z"
        fill="transparent"
        strokeWidth="5"
      />
    </ContentLoader>
  );
};
