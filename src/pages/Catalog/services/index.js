import { get } from '../../../services/http'

export const getListProduct = async (callback, options = {}) => {
  const endpoint = `/challenge-3/response.json`
  return get(endpoint, options).then(res => {
    console.log(res)
    callback(res)
  })
}