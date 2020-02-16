const styles = {
  /*
   *  is being applied to the encapsulating ul element
   */
  actionSheet: {
    listStyleType: 'none',
    margin: 0,
    padding: '0.1875rem 0.375rem',
    '&$tablet,&$phone': {
      padding: '0.25rem 0.5rem'
    },
    '& ui5-button': {
      display: 'block'
    }
  },
  phone: {},
  tablet: {}
};

export default styles;
