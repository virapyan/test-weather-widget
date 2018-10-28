import {all, fork} from 'redux-saga/effects';

import locationFetchCommand from './commands/locationFetchCommand';
import weatherFetchCommand from './commands/weatherFetchCommand';

export default function* mainSaga() {
  yield all([
    fork(locationFetchCommand),
    fork(weatherFetchCommand),
  ]);
}
