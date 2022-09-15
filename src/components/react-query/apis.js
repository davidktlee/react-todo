import axios from 'axios'

const baseURL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const API_KEY = 'FcKdtJs202204'
const USER_NAME = 'KDT2_LEEKYUNGTaek'
const headers = {
  'content-type': 'application/json',
  apikey: API_KEY,
  username: USER_NAME,
}

export const apis = axios.create({
  baseURL,
  headers,
})