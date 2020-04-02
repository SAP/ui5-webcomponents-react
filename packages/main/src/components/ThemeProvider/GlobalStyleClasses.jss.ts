import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';

export const GlobalStyleClassesStyles = {
  '@global': {
    [`.${GlobalStyleClasses.sapScrollBar}`]: {
      '&::-webkit-scrollbar': {
        backgroundColor: ThemingParameters.sapScrollBar_TrackColor,
        width: ThemingParameters.sapScrollBar_Dimension
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: ThemingParameters.sapScrollBar_FaceColor,
        width: ThemingParameters.sapScrollBar_Dimension,
        borderRadius: '0.25rem',
        '&:hover': {
          backgroundColor: ThemingParameters.sapScrollBar_Hover_FaceColor
        }
      },
      '&::-webkit-scrollbar-corner': {
        backgroundColor: ThemingParameters.sapScrollBar_TrackColor
      }
    }
  }
};
