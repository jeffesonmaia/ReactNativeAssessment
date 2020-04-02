import { all } from 'redux-saga/effects'

import sampleSaga from '~/pages/SamplePage/saga'

export default function* rootSaga() {
  yield all([
    sampleSaga()
  ])
}
