import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import React, { useState } from 'react'
import axios from 'axios'

export const ApiContext = React.createContext()

function App() {
  const URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
  const API_KEY = 'FcKdtJs202204'
  const USER_NAME = 'KDT2_LEEKYUNGTaek'
  const headers = {
    'content-type': 'application/json',
    apikey: API_KEY,
    username: USER_NAME,
  }

  async function apiFunc({ url = URL, method = '', data = {} }) {
    const res = await axios({
      url,
      method,
      headers,
      data,
    })
    return res
  }
  const [inputData, setInputData] = useState('')
  const [datas, setDatas] = useState([])
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const props = {
    apiFunc,
    inputData,
    setInputData,
    list,
    setList,
    isLoading,
    setIsLoading,
    datas,
    setDatas,
  }
  return (
    <div className="container w-full h-36 mx-auto bg-gray-200">
      <Header />
      <ApiContext.Provider value={props}>
        <TodoInput />
        <TodoList />
      </ApiContext.Provider>
    </div>
  )
}

export default App
