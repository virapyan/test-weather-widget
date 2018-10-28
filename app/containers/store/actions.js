
import * as constants from './constants';


export function addLocationData(data) {
  return {
    type: constants.ADD_LOCATION_DATA,
    data,
  };
}

export function addWeatherData(data) {
  return {
    type: constants.ADD_WEATHER_DATA,
    data,
  };
}

export function updateTitle(title) {
  return {
    type: constants.UPDATE_TITLE,
    title,
  };
}

export function updateShowCelsius(showCelsius) {
  return {
    type: constants.UPDATE_SHOW_CELSIUS,
    showCelsius,
  };
}

export function updateShowWind(showWind) {
  return {
    type: constants.UPDATE_SHOW_WIND,
    showWind,
  };
}
