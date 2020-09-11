import ApiURL from './ApiURL';

export default {
  getUrl(key) {
    const url = ApiURL[key];

    if (!url) {
      throw new Error('Url defined by Constant: ' + key + ' not found in UrlProvider.js');
    }

    return url;
  },

  replace(url, replaceValue, searchValue = ':id') {
    return url.replace(searchValue, replaceValue);
  },
};
