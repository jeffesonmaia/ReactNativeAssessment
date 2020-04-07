import { combineReducers } from 'redux'

import categories from '~/pages/Categories/reducer'
import questions from '~/pages/Question/reducer'

export default combineReducers({
  categories,
  questions,
})
