import { types } from './actions'

const INITIAL_STATE = {
  loading: false,
  question: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_QUESTION:
      return {
        ...state,
        question: {
          ...action.payload,
          answers: [
            action.payload.correct_answer,
            ...action.payload.incorrect_answers,
          ].map(a => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value)
        },
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
