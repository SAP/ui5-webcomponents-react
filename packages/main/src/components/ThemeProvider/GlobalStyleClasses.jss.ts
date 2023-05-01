import { CompactSizes, CozySizes, ThemingParameters } from '@ui5/webcomponents-react-base';
import { GlobalStyleClasses } from '../../enums/index.js';
import { baseParameters } from '../../themes/base';
import { sapBelizeParameters } from '../../themes/sap_belize';
import { sapBelizeHcbParameters } from '../../themes/sap_belize_hcb';
import { sapBelizeHcwParameters } from '../../themes/sap_belize_hcw';
import { sapFiori3Parameters } from '../../themes/sap_fiori_3';
import { sapFiori3DarkParameters } from '../../themes/sap_fiori_3_dark';
import { sapFioriHcbParameters } from '../../themes/sap_fiori_3_hcb';
import { sapFioriHcwParameters } from '../../themes/sap_fiori_3_hcw';
import { sapHorizonParameters } from '../../themes/sap_horizon';
import { sapHorizonDarkParameters } from '../../themes/sap_horizon_dark';
import { sapHorizonHcbParameters } from '../../themes/sap_horizon_hcb';
import { sapHorizonHcwParameters } from '../../themes/sap_horizon_hcw';

export const GlobalStyleClassesStyles = {
  '@global': {
    [`.${GlobalStyleClasses.inheritingSapScrollBar} *:not([data-native-scrollbar])`]: {
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
    },
    [`.${GlobalStyleClasses.sapScrollBar}:not([data-native-scrollbar])`]: {
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
    },
    ':root': {
      extend: [CozySizes, baseParameters]
    },
    ['[data-ui5-compact-size], .ui5-content-density-compact, .sapUiSizeCompact']: {
      extend: CompactSizes
    },
    '[data-sap-theme="sap_belize"]': sapBelizeParameters as Record<string, unknown>,
    '[data-sap-theme="sap_belize_hcb"]': sapBelizeHcbParameters as Record<string, unknown>,
    '[data-sap-theme="sap_belize_hcw"]': sapBelizeHcwParameters as Record<string, unknown>,
    '[data-sap-theme="sap_fiori_3"]': sapFiori3Parameters as Record<string, unknown>,
    '[data-sap-theme="sap_fiori_3_dark"]': sapFiori3DarkParameters as Record<string, unknown>,
    '[data-sap-theme="sap_fiori_3_hcb"]': sapFioriHcbParameters as Record<string, unknown>,
    '[data-sap-theme="sap_fiori_3_hcw"]': sapFioriHcwParameters as Record<string, unknown>,
    '[data-sap-theme="sap_horizon"]': sapHorizonParameters as Record<string, unknown>,
    '[data-sap-theme="sap_horizon_dark"]': sapHorizonDarkParameters as Record<string, unknown>,
    '[data-sap-theme="sap_horizon_hcb"]': sapHorizonHcbParameters as Record<string, unknown>,
    '[data-sap-theme="sap_horizon_hcw"]': sapHorizonHcwParameters as Record<string, unknown>
  }
};
