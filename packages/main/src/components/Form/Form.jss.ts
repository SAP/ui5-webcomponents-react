import { ThemingParameters } from '@ui5/webcomponents-react-base';

const styles = {
  formContainer: {
    containerType: 'inline-size'
  },
  form: {
    display: 'grid',
    alignItems: 'center',
    rowGap: '0.25rem',
    columnGap: '0.5rem',
    '--_ui5wcr_form_label_text_align': 'end',

    '@container (max-width: 599px)': {
      '--_ui5wcr_form_label_span': 'var(--_ui5wcr_form_label_span_s)',
      '--_ui5wcr_form_columns': 'var(--_ui5wcr_form_columns_s)',
      gridTemplateColumns: `repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)`,
      '--_ui5wcr_form_content_span': 'calc(12 - var(--_ui5wcr_form_label_span))'
    },
    '@container (min-width: 600px) and (max-width: 1023px)': {
      '--_ui5wcr_form_label_span': 'var(--_ui5wcr_form_label_span_m)',
      '--_ui5wcr_form_columns': 'var(--_ui5wcr_form_columns_m)',
      gridTemplateColumns: `repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)`,
      '--_ui5wcr_form_content_span': 'calc(12 - var(--_ui5wcr_form_label_span))'
    },
    '@container (min-width: 1024px) and (max-width: 1439px)': {
      '--_ui5wcr_form_label_span': 'var(--_ui5wcr_form_label_span_l)',
      '--_ui5wcr_form_columns': 'var(--_ui5wcr_form_columns_l)',
      gridTemplateColumns: `repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)`,
      '--_ui5wcr_form_content_span': 'calc(12 - var(--_ui5wcr_form_label_span))'
    },
    '@container (min-width: 1440px)': {
      '--_ui5wcr_form_label_span': 'var(--_ui5wcr_form_label_span_xl)',
      '--_ui5wcr_form_columns': 'var(--_ui5wcr_form_columns_xl)',
      gridTemplateColumns: `repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)`,
      '--_ui5wcr_form_content_span': 'calc(12 - var(--_ui5wcr_form_label_span))'
    }
  },
  solid: {
    backgroundColor: ThemingParameters.sapGroup_ContentBackground
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  formTitle: {
    borderBlockEnd: `1px solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
    marginBlockEnd: '1.75rem',
    gridColumn: '1 / -1'
  },
  labelSpan12: {
    '--_ui5wcr_form_content_span': 12,
    '--_ui5wcr_form_label_text_align': 'start',
    '--_ui5wcr_form_label_span': 12,
    rowGap: 0
  }
};

export { styles };
