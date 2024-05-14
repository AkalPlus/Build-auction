import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import axios from 'axios'

const useAxios = () => {
  const { getToken } = useKindeBrowserClient()

  const token = getToken()

  //creates an interceptor that will intercept all requests and add the token to the header and base_url
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1500000,
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  let isSessionExpired = false

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        !isSessionExpired &&
        error.response &&
        error.response.status === 401
      ) {
        isSessionExpired = true
      }
      return Promise.reject(error)
    }
  )
  return { axiosInstance }
}
export default useAxios
