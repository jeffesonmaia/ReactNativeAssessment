import { all } from 'redux-saga/effects'

import categoriesSaga from '~/pages/Categories/saga'
import questionsSaga from '~/pages/Question/saga'

export default function* rootSaga() {
  yield all([
    categoriesSaga(),
    questionsSaga(),
  ])
}
