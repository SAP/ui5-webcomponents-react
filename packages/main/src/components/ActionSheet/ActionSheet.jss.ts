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
    }
  },
  tablet: {},
  phone: {},
  // every actionButton inside the list has this class
  actionButtonContainer: {
    width: '100%',
    '& ui5-button': {
      width: '100%',
      justifyContent: 'flex-start',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    display: 'block'
  }
};

export default styles;
