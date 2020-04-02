import { types } from './actions'

const INITIAL_STATE = {
  loading: false,
  data: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return {
        ...state,
        data: action.payload,
      }
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}
