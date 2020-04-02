import { all } from 'redux-saga/effects'

import sampleSaga from '~/pages/SamplePage/saga'
import categoriesSaga from '~/pages/Categories/saga'

export default function* rootSaga() {
  yield all([
    sampleSaga(),
    categoriesSaga(),
  ])
}
