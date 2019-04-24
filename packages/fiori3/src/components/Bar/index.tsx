import { Bar as CoreBar } from '@fiori-for-react/core/components/Bar';
import { ContentDensity } from '@fiori-for-react/core/enums/ContentDensity';
import { CommonProps } from '@fiori-for-react/core/interfaces';
import { FC } from 'react';

// This is completely useless but required for Demo Prop Types.
interface BarPropTypes extends CommonProps {
  renderContentLeft?: () => JSX.Element;
  renderContentMiddle?: () => JSX.Element;
  renderContentRight?: () => JSX.Element;
}

const styles = ({ contentDensity }) => ({
  left: {
    paddingLeft: '0.5rem'
  },
  right: {
    paddingRight: '0.5rem'
  },
  inner: {
    padding: '0 0.5rem 0 0.5rem',
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '2.75rem'
  },
  bar: {
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '2.75rem',
    lineHeight: ContentDensity.Compact === contentDensity ? '2.5rem' : '2.75rem',
    '& ui5-button': {
      display: 'flex'
    }
  }
});

// @ts-ignore
const Bar: FC<BarPropTypes> = CoreBar.withCustomStyles(styles);

export { Bar };
