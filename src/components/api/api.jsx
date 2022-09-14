import axios from 'axios'

export const CreateTodo = async (data) => {
  const res = await request({
    method: "POST",
    data: {
      title: data
    }
  })
  FetchTodo()
}

export const DeleteTodo =async (id) => {
  const res = await request({
    method: "DELETE",
    url: `${URL}/${id}`
  })
  FetchTodo()
}

export const PutTodo = async (id, title, done, order) => {
  const res = await request({
    method: "PUT",
    url: `${URL}/${id}`,
    data: {
      title,
      done
    }
  })
  FetchTodo()
}

export const FetchTodo = async () => {
  const res = await request({
    method: 'GET',
  })
  return res
}

const URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const API_KEY = 'FcKdtJs202204'
const USER_NAME = 'KDT2_LEEKYUNGTaek'
const headers = {
  'content-type': 'application/json',
  apikey: API_KEY,
  username: USER_NAME,
}
async function request({ url = URL, method = '', data = {} }) {
  const res = await axios({
    url,
    method,
    headers,
    data,
  })
  return res
}
