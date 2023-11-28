import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { ContainerQueries } from '../../internal/ContainerQueries.js';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss.js';

export const DynamicPageTitleStyles = {
  container: {
    flex: '1 1 100%',
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    minHeight: '3rem',
    paddingBlockStart: '0.5rem',
    paddingBlockEnd: '0.5rem',
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
      backgroundColor: ThemingParameters.sapObjectHeader_Hover_Background
    }
  },
  phone: {
    [DynamicPageCssVariables.titleFontSize]: ThemingParameters.sapObjectHeader_Title_SnappedFontSize
  },
  breadcrumbs: {
    minWidth: '50%',
    padding: '0.5rem 0 0.25rem 0',
    '&:only-child': {
      width: '100%'
    }
  },
  titleMainSection: {
    overflowX: 'hidden',
    flex: '1 1 100%',
    alignItems: 'baseline'
  },
  middleSection: { flexGrow: 1, width: '100%', overflowX: 'hidden' },
  title: {
    minWidth: '3rem',
    overflowX: 'hidden',
    fontFamily: ThemingParameters.sapObjectHeader_Title_FontFamily,
    color: ThemingParameters.sapObjectHeader_Title_TextColor,
    fontSize: `var(${DynamicPageCssVariables.titleFontSize})`,
    paddingBlockStart: '0.3125rem',
    [ContainerQueries.M]: { paddingBlockStart: '0.6875rem' },
    overflowWrap: 'break-word',
    hyphens: 'auto',
    '& > *': {
      fontFamily: ThemingParameters.sapObjectHeader_Title_FontFamily,
      color: ThemingParameters.sapObjectHeader_Title_TextColor,
      fontSize: `var(${DynamicPageCssVariables.titleFontSize})`,
      overflowWrap: 'break-word',
      hyphens: 'auto'
    }
  },
  subTitle: {
    color: ThemingParameters.sapObjectHeader_Subtitle_TextColor,
    fontSize: ThemingParameters.sapFontSize,
    overflowWrap: 'break-word',
    hyphens: 'auto',
    paddingInlineStart: '0.5rem',
    '& > *': {
      color: ThemingParameters.sapObjectHeader_Subtitle_TextColor,
      fontSize: ThemingParameters.sapFontSize,
      overflowWrap: 'break-word',
      hyphens: 'auto'
    }
  },
  subTitleBottom: {
    marginTop: '0.25rem',
    paddingInlineStart: 0
  },
  content: {
    display: 'flex',
    flexShrink: 1.6,
    paddingInlineStart: '0.5rem'
  },
  toolbar: {
    flex: '1 1.6 100%',
    cursor: 'auto',
    '&:hover': {
      backgroundColor: 'inherit'
    },
    '&>:first-child': {
      height: '100%'
    },
    // toolbar w/o overflow button
    '& > [data-component-name="ToolbarContent"]:first-child:last-child > [data-component-name="ToolbarChildContainer"]:last-child':
      {
        marginInlineEnd: 0
      },
    // toolbar w/ overflow button
    '& [data-component-name="ToolbarOverflowButtonContainer"]': {
      marginInlineEnd: 0
    }
  }
};
