export const useSetMarginLeft = (dataset, labelKey) =>
  dataset
    ? dataset
        .map((data) => {
          return data[labelKey].split(' ').length > 0
            ? data[labelKey].split(' ').reduce((longest, current) => {
                return current.length > longest.length ? current : longest;
              })
            : data[labelKey];
        })
        .reduce((longest, current) => {
          return current.length > longest.length ? current : longest;
        }).length * 4
    : 20;
