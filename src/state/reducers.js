import { combineReducers } from 'redux'

import sample from '~/pages/SamplePage/reducer'
import categories from '~/pages/Categories/reducer'
import questions from '~/pages/Question/reducer'

export default combineReducers({
  sample,
  categories,
  questions,
})
