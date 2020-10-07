import { sapUiResponsiveContentPadding, sapUiTinyMarginBeginEnd } from '@ui5/webcomponents-react-base/lib/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const DynamicPageTitleStyles = {
  container: {
    ...sapUiResponsiveContentPadding,
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
  breadcrumbs: {
    padding: '0.5rem 0 0.25rem 0'
  },
  titleMainSection: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'flex-start'
  },
  title: {
    color: ThemingParameters.sapGroup_TitleTextColor,
    fontSize: ThemingParameters.sapFontHeader3Size,
    padding: '0.3125rem 0 0 0',
    textOverflow: 'ellipsis',
    flexShrink: 1
  },
  subTitle: {
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: ThemingParameters.sapFontSize,
    marginTop: '0.25rem',
    marginBottom: '0.25rem'
  },
  content: {
    flexShrink: 1.6,
    padding: '0 0 0 1rem'
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
