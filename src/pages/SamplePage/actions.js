import { typeActions } from '~/state/util'

const { actions, types } = typeActions('sample', {
  getData: () => { },
  setData: (data) => ({ payload: data }),
})

export {
  actions,
  types,
}
