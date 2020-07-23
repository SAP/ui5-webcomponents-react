const stopPropagation = (e) => e.stopPropagation();
export const stopPopoverPropagationProps = {
  onAfterClose: stopPropagation,
  onAfterOpen: stopPropagation,
  onBeforeClose: stopPropagation,
  onBeforeOpen: stopPropagation
};
