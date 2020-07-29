import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';

export const GlobalStyleClassesStyles = {
  '@global': {
    [`.${GlobalStyleClasses.sapScrollBar}`]: {
      '&::-webkit-scrollbar': {
        backgroundColor: ThemingParameters.sapScrollBar_TrackColor,
        '&:horizontal': {
          height: ThemingParameters.sapScrollBar_Dimension
        },
        '&:vertical': {
          width: ThemingParameters.sapScrollBar_Dimension
        }
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: ThemingParameters.sapScrollBar_FaceColor,
        borderRadius: '0.25rem',
        '&:hover': {
          backgroundColor: ThemingParameters.sapScrollBar_Hover_FaceColor
        },
        '&:horizontal': {
          height: ThemingParameters.sapScrollBar_Dimension
        },
        '&:vertical': {
          width: ThemingParameters.sapScrollBar_Dimension
        }
      },
      '&::-webkit-scrollbar-corner': {
        backgroundColor: ThemingParameters.sapScrollBar_TrackColor
      }
    }
  }
};
