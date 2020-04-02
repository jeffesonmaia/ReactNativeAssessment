import {
  all, takeLatest, put, call,
} from 'redux-saga/effects'

import api from '~/services/api'
import { actions, types } from './actions'

function* getCategoriesSaga() {
  try {
    yield put(actions.setLoading(true))
    const response = yield call(api.get, '/api_category.php')

    yield put(actions.setCategories(response.data.trivia_categories))
  } catch (error) {
    console.error('GET CATEGORIES', error)
  } finally {
    yield put(actions.setLoading(false))
  }
}

export default function* () {
  yield all([
    takeLatest(types.GET_CATEGORIES, getCategoriesSaga)
  ])
}
