import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const labelSpanClasses = () => {
  let styleClasses = {};
  for (let i = 1; i <= 11; i++) {
    styleClasses[`labelSpan${i}`] = {
      '--ui5wcr_form_content_span': 12 - i,
      '--ui5wcr_form_label_span': i
    };
  }
  return styleClasses;
};

const styles = {
  form: {
    display: 'grid',
    alignItems: 'center',
    rowGap: '0.25rem',
    columnGap: '0.5rem',
    gridTemplateColumns: `repeat(12, 1fr)`,
    '--ui5wcr_form_full_span': 'span 12',
    '--ui5wcr_form_label_text_align': 'end',
    '&[data-columns="1"]': {},
    '&[data-columns="2"]': {
      gridTemplateColumns: `repeat(24, 1fr)`,
      '--ui5wcr_form_full_span': 'span 24'
    },
    '&[data-columns="3"]': {
      gridTemplateColumns: `repeat(36, 1fr)`,
      '--ui5wcr_form_full_span': 'span 36'
    },
    '&[data-columns="4"]': {
      gridTemplateColumns: `repeat(48, 1fr)`,
      '--ui5wcr_form_full_span': 'span 48'
    },
    '&[data-columns="5"]': {
      gridTemplateColumns: `repeat(60, 1fr)`,
      '--ui5wcr_form_full_span': 'span 60'
    },
    '&[data-columns="6"]': {
      gridTemplateColumns: `repeat(72, 1fr)`,
      '--ui5wcr_form_full_span': 'span 72'
    },
    '&[data-columns="7"]': {
      gridTemplateColumns: `repeat(84, 1fr)`,
      '--ui5wcr_form_full_span': 'span 84'
    },
    '&[data-columns="8"]': {
      gridTemplateColumns: `repeat(96, 1fr)`,
      '--ui5wcr_form_full_span': 'span 96'
    },
    '&[data-columns="9"]': {
      gridTemplateColumns: `repeat(108, 1fr)`,
      '--ui5wcr_form_full_span': 'span 108'
    },
    '&[data-columns="10"]': {
      gridTemplateColumns: `repeat(120, 1fr)`,
      '--ui5wcr_form_full_span': 'span 120'
    },
    '&[data-columns="11"]': {
      gridTemplateColumns: `repeat(132, 1fr)`,
      '--ui5wcr_form_full_span': 'span 132'
    },
    '&[data-columns="12"]': {
      gridTemplateColumns: `repeat(144, 1fr)`,
      '--ui5wcr_form_full_span': 'span 144'
    }
  },
  formTitle: {
    borderBottom: `1px solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
    marginBottom: '1.75rem',
    gridColumn: 'var(--ui5wcr_form_full_span)'
  },
  ...labelSpanClasses(),
  labelSpan12: {
    '--ui5wcr_form_content_span': 12,
    '--ui5wcr_form_label_text_align': 'start'
  }
};

export { styles };
