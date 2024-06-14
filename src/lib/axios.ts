import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users/rpererah',
})

api.interceptors.request.use(
  (config) => {
    const accessToken = import.meta.env.VITE_GITHUB_TOKEN

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
