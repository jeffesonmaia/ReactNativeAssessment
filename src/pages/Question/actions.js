import { typeActions } from '~/state/util'

const { actions, types } = typeActions('questions', {
  getQuestion: meta => ({ meta }),
  setQuestion: data => ({ payload: data }),
  setAnswer: answer => ({ payload: answer }),
  setLoading: data => ({ payload: data }),
})

export {
  actions,
  types,
}
