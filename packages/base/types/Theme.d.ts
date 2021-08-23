declare module '@ui5/webcomponents-base/dist/config/Theme' {
  export type ThemeId =
    | 'sap_fiori_3'
    | 'sap_fiori_3_dark'
    | 'sap_belize'
    | 'sap_belize_hcb'
    | 'sap_belize_hcw'
    | 'sap_fiori_3_hcb'
    | 'sap_fiori_3_hcw'
    | string;

  /**
   * Getter for the currenty applied theme.
   */
  export function getTheme(): ThemeId;

  /**
   * Apply a new theme to the application.
   */
  export function setTheme(theme: ThemeId): Promise<void>;
}
