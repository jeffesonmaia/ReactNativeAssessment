import { types } from './actions'

const INITIAL_STATE = {
  data: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return state
  }
}
