import { root as sap_belize } from '@sap-theming/theming-base-content/content/Base/baseLib/sap_belize/variables.json';
import { root as sap_belize_hcb } from '@sap-theming/theming-base-content/content/Base/baseLib/sap_belize_hcb/variables.json';
import { root as sap_belize_hcw } from '@sap-theming/theming-base-content/content/Base/baseLib/sap_belize_hcw/variables.json';
import { root as sap_fiori_3 } from '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/variables.json';
import { root as sap_fiori_3_dark } from '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_dark/variables.json';

const themeMap = window['@ui5/webcomponents-react-theming'] || (window['@ui5/webcomponents-react-theming'] = new Map());
themeMap.set('sap_fiori_3', sap_fiori_3);
themeMap.set('sap_fiori_3_dark', sap_fiori_3_dark);
themeMap.set('sap_belize', sap_belize);
themeMap.set('sap_belize_hcb', sap_belize_hcb);
themeMap.set('sap_belize_hcw', sap_belize_hcw);
