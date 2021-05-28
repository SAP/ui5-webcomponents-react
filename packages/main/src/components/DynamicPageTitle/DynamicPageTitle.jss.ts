import { sapUiResponsiveContentPadding, sapUiTinyMarginBeginEnd } from '@ui5/webcomponents-react-base/dist/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { isIE } from '@ui5/webcomponents-react-base/dist/Device';

const padding = isIE() ? { padding: '0 2rem' } : { ...sapUiResponsiveContentPadding };

export const DynamicPageTitleStyles = {
  container: {
    ...padding,
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    minHeight: '3rem',
    wordWrap: 'break-word',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    '&:hover': {
      // TODO background color should be sapObjectHeader_Hover_Background (same color as sapTile_Active_Background)
      backgroundColor: ThemingParameters.sapTile_Active_Background
    }
  },
  iEClass: {
    position: 'fixed',
    // page width - padding - scrollbar
    width: 'calc(100% - 18px - 4rem)'
  },
  breadcrumbs: {
    padding: '0.5rem 0 0.25rem 0'
  },
  titleMainSection: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'baseline'
  },
  title: {
    color: ThemingParameters.sapGroup_TitleTextColor,
    fontSize: ThemingParameters.sapFontHeader3Size,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    flexShrink: 1,
    paddingTop: '0.3125rem'
  },
  subTitleRight: {
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: ThemingParameters.sapFontSize,
    paddingLeft: '0.5rem',
    whiteSpace: 'nowrap'
  },
  subTitleBottom: {
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: ThemingParameters.sapFontSize,
    marginTop: '0.25rem'
  },
  content: {
    flexShrink: 1.6,
    paddingLeft: '1rem'
  },
  actions: {
    flexShrink: 1.6,
    paddingLeft: '0.5rem',
    marginLeft: 'auto'
  },
  navigationActions: {
    flexShrink: 1.6,
    paddingLeft: '0.5rem',
    marginLeft: 'auto'
  },
  navigationActionsSeparator: {
    background: ThemingParameters.sapBackgroundColor,
    width: '0.0625rem',
    height: '2rem',
    ...sapUiTinyMarginBeginEnd
  }
};
