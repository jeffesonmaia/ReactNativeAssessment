import { combineReducers } from 'redux'

import sample from '~/pages/SamplePage/reducer'
import categories from '~/pages/Categories/reducer'

export default combineReducers({
  sample,
  categories,
})
