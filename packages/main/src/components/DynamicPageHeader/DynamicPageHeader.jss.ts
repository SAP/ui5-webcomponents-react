import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/lib/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const DynamicPageHeaderStyles = {
  container: {
    ...sapUiResponsiveContentPadding,
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    solid: ThemingParameters.sapObjectHeader_Background,
    translucent: ThemingParameters.sapObjectHeader_Background,
    transparent: 'transparent',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  headerContent: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    paddingBottom: '0.25rem',
    maxHeight: '500px',
    overflow: 'hidden',
    paddingLeft: '2rem'
  },
  headerCollapsed: {
    '& $headerContent': {
      display: 'none'
    }
  }
};
