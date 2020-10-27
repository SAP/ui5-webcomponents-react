export const getUrl = (urls, key, replaceOptions) => {
  let url = urls[key];

  if (!url) {
    throw new Error('Url defined: ' + key + ' not found');
  }

  if (replaceOptions) {
    replaceOptions.forEach((replaceOption) => {
      if (!replaceOption.search) replaceOption.search = ':id';
      url = url.replace(replaceOption.search, replaceOption.value);
    });
  }

  return url;
};
