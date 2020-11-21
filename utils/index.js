/**
 * Generate query string
 *
 * @param {object} paramsObject
 * @returns {string} query string
 */
export const generateQueryString = (paramsObject) => {
  if (typeof paramsObject !== 'object') return '';

  const queryString = [];

  Object.keys(paramsObject).forEach((key) => (
    paramsObject[key] != null && String(paramsObject[key]) && queryString.push(`${key}=${paramsObject[key]}`)
  ));

  return queryString.join('&');
};

/**
 * Get all query params
 */
export const getQueryParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = {};

  urlParams.forEach((value, key) => { query[key] = value; });

  return query;
};

/**
 * Get query params by name
 *
 * @param {*} paramName
 */
export const getQueryParamByName = (paramName) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
};

export default {
  generateQueryString,
  getQueryParams,
};
