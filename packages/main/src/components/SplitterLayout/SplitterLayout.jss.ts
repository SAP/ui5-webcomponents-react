const styles = {
  splitterLayout: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    '&[data-splitter-orientation="vertical"]': {
      flexDirection: 'row',
      width: '100%',
      '& > *': {
        height: '100%'
      }
    },
    '&[data-splitter-orientation="horizontal"]': {
      flexDirection: 'column',
      height: '100%',
      '& > *': {
        width: '100%'
      }
    }
  }
};
export { styles };
