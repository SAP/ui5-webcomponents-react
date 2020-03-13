import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ZIndex } from '../../enums/ZIndex';

const styles = {
  pagination: {
    display: 'flex',
    width: 'calc(100% - 2rem)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3.5rem',
    padding: '0 1rem',
    backgroundColor: ThemingParameters.sapPageFooter_Background
  },
  paginationTop: {
    borderBottom: `1px solid ${ThemingParameters.sapPageFooter_BorderColor}`
  },
  paginationBottom: {
    borderTop: `1px solid ${ThemingParameters.sapPageFooter_BorderColor}`
  },
  paginationIndicator: {
    padding: '0rem 1rem',
    height: '2rem',
    maxWidth: 'calc(100% - 6.5rem)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '9rem'
  },
  paginationIcon: {
    textIndent: '2rem',
    lineHeight: '0',
    textDecoration: 'none',
    overflow: 'hidden',
    display: 'inline-block',
    margin: '0 0.375rem',
    width: '0.25rem',
    height: '0.25rem',
    transition: 'background-color 0.1s ease-in',
    borderRadius: '50%',
    alignSelf: 'center',
    boxSizing: 'border-box',
    backgroundColor: ThemingParameters.sapContent_NonInteractiveIconColor
  },
  paginationIconActive: {
    margin: '0 0.25rem',
    width: '0.5rem',
    height: '0.5rem',
    backgroundColor: ThemingParameters.sapSelectedColor
  },
  paginationArrow: {
    boxShadow: 'none',
    border: `1px solid ${ThemingParameters.sapButton_BorderColor}`,
    backgroundColor: ThemingParameters.sapButton_Background,
    color: ThemingParameters.sapButton_BorderColor,
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:active': {
      border: `1px solid ${ThemingParameters.sapButton_Emphasized_Active_BorderColor}`,
      backgroundColor: ThemingParameters.sapButton_Emphasized_Active_Background,
      color: ThemingParameters.sapButton_Emphasized_TextColor
    }
  },
  '@global html[dir="rtl"] div[data-value="paginationArrow"] ui5-icon': {
    transform: 'rotate(180deg)'
  },
  paginationArrowContent: {
    '& $paginationArrow': {
      boxShadow: ThemingParameters.sapContent_Shadow1,
      '&:first-child': {
        position: 'absolute',
        top: 'calc(50% - 2.75rem)',
        left: '0.5rem',
        opacity: 0,
        zIndex: ZIndex.InputModal
      },
      '&:last-child': {
        position: 'absolute',
        top: 'calc(50% - 2.75rem)',
        right: '0.5rem',
        opacity: 0,
        zIndex: ZIndex.InputModal
      }
    }
  },
  paginationArrowContentNoBar: {
    composes: ['$paginationArrowContent'],
    '& $paginationArrow': {
      '&:first-child': {
        top: 'calc(50% - 1rem)'
      },
      '&:last-child': {
        top: 'calc(50% - 1rem)'
      }
    }
  }
};

export default styles;
