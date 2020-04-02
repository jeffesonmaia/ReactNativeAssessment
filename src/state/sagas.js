import { all } from 'redux-saga/effects'

import sampleSaga from '~/pages/SamplePage/saga'
import categoriesSaga from '~/pages/Categories/saga'
import questionsSaga from '~/pages/Question/saga'

export default function* rootSaga() {
  yield all([
    sampleSaga(),
    categoriesSaga(),
    questionsSaga(),
  ])
}
