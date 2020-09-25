const URLs = {
  GET_USER_LOGGED: '/v1/user/logged',
  GET_TODO_BY_ID: '/v1/todo/detail/:id',
  GET_TODO_LIST: '/v1/todo/all',
};

export default {
  getUrl(key) {
    const url = URLs[key];

    if (!url) {
      throw new Error('Url defined by Constant: ' + key + ' not found in APIProvider.js');
    }

    return url;
  },

  replace(url, replaceValue, searchValue = ':id') {
    return url.replace(searchValue, replaceValue);
  },
};
