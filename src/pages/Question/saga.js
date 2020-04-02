import {
  all, takeLatest, put, call,
} from 'redux-saga/effects'

import api from '~/services/api'
import { actions, types } from './actions'

function* getQuestionSaga(action) {
  const { meta } = action

  try {
    yield put(actions.setLoading(true))
    const response = yield call(
      api.get,
      '/api.php',
      {
        params: {
          amount: 1,
          category: meta.category.id,
          difficulty: meta.difficulty ? meta.difficulty : 'medium',
          type: 'multiple'
        }
      }
    )

    yield put(actions.setQuestion(response.data.results[0]))
  } catch (error) {
    console.error('GET_QUESTION', error)
  } finally {
    yield put(actions.setLoading(false))
  }
}

export default function* () {
  yield all([
    takeLatest(types.GET_QUESTION, getQuestionSaga)
  ])
}
