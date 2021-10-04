import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const DynamicPageTitleStyles = {
  container: {
    flex: '1 1 100%',
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    minHeight: '3rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    cursor: 'pointer',
    '&[data-not-clickable="true"]': {
      cursor: 'unset',
      '&:hover': {
        backgroundColor: ThemingParameters.sapObjectHeader_Background
      }
    },
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
    minWidth: '50%',
    padding: '0.5rem 0 0.25rem 0'
  },
  titleMainSection: {
    flex: '1 1 100%',
    alignItems: 'baseline'
  },
  title: {
    color: ThemingParameters.sapGroup_TitleTextColor,
    fontSize: ThemingParameters.sapFontHeader3Size,
    paddingTop: '0.3125rem',
    overflowWrap: 'break-word',
    hyphens: 'auto'
  },
  subTitleRight: {
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: ThemingParameters.sapFontSize,
    overflowWrap: 'break-word',
    hyphens: 'auto'
  },
  subTitleBottom: {
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: ThemingParameters.sapFontSize,
    marginTop: '0.25rem',
    overflowWrap: 'break-word',
    hyphens: 'auto'
  },
  content: {
    display: 'flex',
    flexShrink: 1.6
  },
  toolbar: {
    flex: '1 1.6 100%',
    cursor: 'auto',
    '&:hover': {
      backgroundColor: 'inherit'
    },
    '&>:first-child': {
      height: '100%'
    }
  }
};
