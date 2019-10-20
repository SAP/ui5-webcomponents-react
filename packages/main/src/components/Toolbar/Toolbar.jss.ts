import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';

export const styles = ({ contentDensity }: JSSTheme) => ({
  outerContainer: {
    height: contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem',
    position: 'relative',
    border: '1px solid pink',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  toolbar: {
    padding: '0.5rem',
    '& >:first-child': {
      margin: '0 0.25rem 0 0'
    },
    '& >:last-child': {
      margin: '0 0 0 0.25rem'
    },
    '& > *:not(first-child):not(last-child)': {
      margin: '0 0.25rem'
    },
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
  overflowButtonContainer: {
    marginRight: '0.5rem'
  },
  popoverContent: {
    maxWidth: '20rem',
    padding: contentDensity === ContentDensity.Compact ? '0.1875rem 0.375rem' : '0.25rem 0.5rem',
    display: 'flex',
    flexDirection: 'column'
  }
});
