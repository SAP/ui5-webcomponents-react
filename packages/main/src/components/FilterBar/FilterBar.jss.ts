import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  outerContainer: {
    paddingTop: '0.5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingBottom: '1px',
    background: ThemingParameters.sapObjectHeader_Background,
    boxShadow: ThemingParameters.sapContent_HeaderShadow
  },
  filterBarHeader: {
    alignItems: 'center',
    display: 'flex',
    background: ThemingParameters.sapObjectHeader_Background,
    minHeight: '3rem',
    paddingBottom: '0.5rem',
    boxShadow: 'none',
    flexWrap: 'wrap'
  },
  vLine: {
    borderLeft: '1px solid gray',
    paddingLeft: '0.5rem'
  },
  filterArea: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: ThemingParameters.sapObjectHeader_Background,
    transition: 'max-height 0.2s ease-out, opacity 0.2s ease-in'
  },
  filterAreaClosed: {
    maxHeight: '0',
    opacity: 0,
    padding: 0,
    overflowY: 'auto'
  },
  filterAreaOpen: {
    maxHeight: '500px',
    opacity: 1,
    overflowY: 'auto'
  },
  headerRowRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1
  },
  // is being applied to the span which represents the InfoLabel Text
  label: {
    fontSize: ThemingParameters.sapFontSmallSize,
    fontFamily: ThemingParameters.sapFontFamily,
    lineHeight: '1.125rem',
    fontWeight: 600,
    letterSpacing: '0.0125rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    verticalAlign: 'top',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    color: ThemingParameters.sapTextColor
  },
  // specific padding needed for purely numeric input
  numeric: {},
  // specific padding needed for text input
  text: {},
  // displayOnly mode
  displayOnly: {}
};

export default styles;
