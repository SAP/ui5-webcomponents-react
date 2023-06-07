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
    '--ui5wcr_form_label_text_align': 'end',

    '@container (max-width: 599px)': {
      '--ui5wcr_form_label_span': 'var(--ui5wcr_form_label_span_s)',
      '--ui5wcr_form_columns': 'var(--ui5wcr_form_columns_s)',
      gridTemplateColumns: `repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)`,
      '--ui5wcr_form_content_span': 'calc(12 - var(--ui5wcr_form_label_span))'
    },
    '@container (min-width: 600px) and (max-width: 1023px)': {
      '--ui5wcr_form_label_span': 'var(--ui5wcr_form_label_span_m)',
      '--ui5wcr_form_columns': 'var(--ui5wcr_form_columns_m)',
      gridTemplateColumns: `repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)`,
      '--ui5wcr_form_content_span': 'calc(12 - var(--ui5wcr_form_label_span))'
    },
    '@container (min-width: 1024px) and (max-width: 1439px)': {
      '--ui5wcr_form_label_span': 'var(--ui5wcr_form_label_span_l)',
      '--ui5wcr_form_columns': 'var(--ui5wcr_form_columns_l)',
      gridTemplateColumns: `repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)`,
      '--ui5wcr_form_content_span': 'calc(12 - var(--ui5wcr_form_label_span))'
    },
    '@container (min-width: 1440px)': {
      '--ui5wcr_form_label_span': 'var(--ui5wcr_form_label_span_xl)',
      '--ui5wcr_form_columns': 'var(--ui5wcr_form_columns_xl)',
      gridTemplateColumns: `repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)`,
      '--ui5wcr_form_content_span': 'calc(12 - var(--ui5wcr_form_label_span))'
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
    '--ui5wcr_form_content_span': 12,
    '--ui5wcr_form_label_text_align': 'start',
    '--ui5wcr_form_label_span': 12,
    rowGap: 0
  }
};

export { styles };
