import http from './httpService';

const apiEndPoint = 'https://api.spacexdata.com/v3';

/**
 * Get spaceEx launch programs list with optional
 * filters - year, launchSuccess, landSuccess
 *
 * @param limit
 * @param year
 * @param launchSuccess
 * @param landSuccess
 */
function getLaunchList(limit = '', year = '', launchSuccess = '', landSuccess = '') {
  return http.get(`${apiEndPoint}/launches?limit=${limit}&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${year}`);
}

export default {
  getLaunchList,
};
