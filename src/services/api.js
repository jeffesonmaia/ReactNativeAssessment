import axios from 'axios'

const api = axios.create({
  baseURL: 'http://www.mocky.io/v2'
})

export default {
  get: api.get.bind(api),
  post: api.post.bind(api),
  put: api.put.bind(api),
  patch: api.patch.bind(api),
  delete: api.delete.bind(api),
}
