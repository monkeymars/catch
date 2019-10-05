import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async (endpoint, options = {}) => {
  return http.get(endpoint, options)
}