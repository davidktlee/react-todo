import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import React, { useState } from 'react'
import axios from 'axios'

export const ApiContext = React.createContext()

function App() {
  // const [inputData, setInputData] = useState('')
  // const [datas, setDatas] = useState([])
  // const [list, setList] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="container w-full h-36 mx-auto bg-gray-200">
      <Header />
      <TodoInput />
      <TodoList  />
    </div>
  )
}

export default App
