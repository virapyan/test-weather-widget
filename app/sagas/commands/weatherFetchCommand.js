import { takeEvery, put, call } from 'redux-saga/effects';
import { addWeatherData } from '../../containers/store/actions';
import { FETCH_WEATHER_DATA } from '../constants';

export function* fetchData(action) {
  let lat = action.location.lat;
  let lon = action.location.lon;
  const apiFetchUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=898c82cf3a2d418c3c4314efe8dbc92c`;
  const weatherData = yield call(fetch, apiFetchUrl);
  const weatherDataJson = yield call([weatherData, 'json']);
  yield put(addWeatherData(weatherDataJson));
}

export default function* () {
  yield takeEvery(FETCH_WEATHER_DATA, fetchData);
}
