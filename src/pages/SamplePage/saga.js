import {
  all, takeLatest, put, call,
} from 'redux-saga/effects'

import api from '~/services/api'
import { actions, types } from './actions'

function* getDataSaga() {
  try {
    const response = yield call(api.get, '/5e83f142300000e567cf4067')

    yield put(actions.setData(response.data))
  } catch (error) {
    console.error('GET DATA', error)
  }
}

export default function* () {
  yield all([
    takeLatest(types.GET_DATA, getDataSaga)
  ])
}
