import { isThemeFamily } from '@ui5/webcomponents-base/dist/config/Theme.js';
// @ts-ignore
import { pathData as pathDataV5, ltr, accData } from './v5/accelerated.js';
// @ts-ignore
import { pathData as pathDataV4 } from './v4/accelerated.js';

const pathData = isThemeFamily('sap_horizon') ? pathDataV5 : pathDataV4;

export default 'accelerated';
export { pathData, ltr, accData };
