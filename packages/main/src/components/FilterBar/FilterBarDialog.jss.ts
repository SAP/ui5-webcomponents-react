import { CssSizeVariables, Device, ThemingParameters } from '@ui5/webcomponents-react-base';

const phoneStyles = Device.isPhone()
  ? { maxWidth: '100%', maxHeight: '100%', height: '100%', width: '100%', borderRadius: 0, top: 0, left: 0 }
  : {};

const styles = {
  tHactive: {
    width: '25%',
    '&::part(column)': {
      textAlign: 'center'
    }
  },
  groupPanel: {
    '&::part(content)': {
      padding: 0
    }
  },
  searchInputContainer: { height: CssSizeVariables.ui5WcrToolbarHeight, paddingBottom: '0.25rem' },
  searchInput: {
    width: '100%'
  },
  dialogComponent: {
    width: '40rem',
    '&::part(content), &::part(footer), &::part(header)': {
      padding: 0
    },
    ...phoneStyles
  },
  header: {
    width: '100%',
    paddingInline: '1rem',
    paddingBlock: '0.25rem 0',
    '& *': {
      marginBlock: '0.25rem',
      marginInline: 0
    },
    '& ui5-input': {
      width: '100%'
    }
  },
  subheaderContainer: {
    paddingBlock: 0,
    paddingInline: '1rem',
    boxShadow: ThemingParameters.sapContent_HeaderShadow
  },
  subheader: {
    paddingBlockEnd: '0.25rem',
    '& [data-component-name="ToolbarContent"] >:last-child': {
      margin: 0
    },
    '& [data-component-name="ToolbarContent"] >:first-child': {
      marginInline: '0 0.25rem '
    }
  },
  footer: {
    '& :not(:last-child)': {
      marginInlineEnd: '0.25rem'
    }
  }
};

export default styles;
