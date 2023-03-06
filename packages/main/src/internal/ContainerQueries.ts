export const ContainerQueries = {
  S: '@container (max-width: 599px)',
  M: '@container (min-width: 600px) and (max-width: 1023px)',
  L: '@container (min-width: 1024px) and (max-width: 1439px)',
  XL: '@container (min-width: 1440px)'
} as const;

export const ResponsiveContainerPadding = {
  [ContainerQueries.S]: { paddingInline: '1rem' },
  [ContainerQueries.M]: { paddingInline: '2rem' },
  [ContainerQueries.L]: { paddingInline: '2rem' },
  [ContainerQueries.XL]: { paddingInline: '3rem' }
} as const;
