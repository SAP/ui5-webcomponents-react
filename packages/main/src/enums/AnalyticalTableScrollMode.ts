export enum AnalyticalTableScrollMode {
  // Scroll as little as possible to ensure the item is visible. (If the item is already visible, it won't scroll at all.)
  auto = 'auto',
  // If the item is already visible, don't scroll at all. If it is less than one viewport away, scroll as little as possible so that it becomes visible. If it is more than one viewport away, scroll so that it is centered within the list.
  center = 'center',
  // Align the item to the end of the list (the bottom for vertical lists or the right for horizontal lists).
  end = 'end',
  // Align the item to the beginning of the list (the top for vertical lists or the left for horizontal lists)
  start = 'start'
}
