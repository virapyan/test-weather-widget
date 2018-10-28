import { takeEvery, put, call } from 'redux-saga/effects';
import { addLocationData } from '../../containers/store/actions';
import { FETCH_USER_LOCATION } from '../constants';

export function* fetchData(action) {
  const locationData = yield call(fetchLocationData);
  yield put(addLocationData(locationData));
}

export function fetchLocationData() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      location => resolve(location),
      error => reject(error),
    );
  });
}

export default function* () {
  yield takeEvery(FETCH_USER_LOCATION, fetchData);
}
