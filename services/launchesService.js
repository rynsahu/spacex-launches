import config from '../config.json';
import http from './httpService';

const apiEndPoint = config.spacexDataAPIBaseUrl;

/**
 * Get spaceX launch programs list with optional
 * filters - year, launchSuccess, landSuccess
 *
 * @param year
 * @param launchSuccess
 * @param landSuccess
 * @param limit
 */
function getLaunchList(year = '', launchSuccess = '', landSuccess = '', limit = 100) {
  return http.get(`${apiEndPoint}/launches?limit=${limit}&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${year}`);
}

export default {
  getLaunchList,
};
