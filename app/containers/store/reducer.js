import { fromJS } from 'immutable';

import * as constants from './constants';

const initialState = fromJS({
  isDataLoading: true,
  showCelsius: true,
  showWind: true,
  title: 'Title of widget',
  locationData: undefined,
  weatherData: undefined,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_LOCATION_DATA:
      let coords = {
        lat: action.data.coords.latitude,
        lon: action.data.coords.longitude,
      }
      return state.set('locationData', coords);
    case constants.ADD_WEATHER_DATA:
      return state.set('weatherData', action.data).set('isDataLoading', false);
    case constants.UPDATE_TITLE:
      return state.set('title', action.title);
    case constants.UPDATE_SHOW_CELSIUS:
      return state.set('showCelsius', action.showCelsius);
    case constants.UPDATE_SHOW_WIND:
      return state.set('showWind', action.showWind);
    default:
      return state;
  }
}

export default appReducer;
