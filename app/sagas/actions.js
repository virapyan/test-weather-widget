import * as constants from './constants';

export function locationFetchCommand() {
  return {
    type: constants.FETCH_USER_LOCATION,
  };
}

export function weatherDataFetchCommand(location) {
  return {
    type: constants.FETCH_WEATHER_DATA,
    location,
  };
}
