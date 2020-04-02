import { typeActions } from '~/state/util'

const { actions, types } = typeActions('categories', {
  getCategories: () => { },
  setCategories: data => ({ payload: data }),
  setLoading: data => ({ payload: data }),
})

export {
  actions,
  types,
}
