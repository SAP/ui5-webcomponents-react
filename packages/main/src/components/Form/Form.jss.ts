import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  form: {
    display: 'grid',
    alignItems: 'center',
    rowGap: '0.25rem',
    columnGap: '0.5rem',
    gridTemplateColumns: `repeat(12, 1fr)`,
    '--ui5wcr_form_full_span': 'span 12',
    '--ui5wcr_form_label_text_align': 'end'
  },
  formTitle: {
    borderBottom: `1px solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
    marginBottom: '1.75rem',
    gridColumn: 'var(--ui5wcr_form_full_span)'
  }
};

export { styles };
