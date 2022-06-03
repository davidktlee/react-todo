import React, { useState, useEffect, useContext } from 'react'
import TodoItem from './TodoItem'
import { ApiContext } from './../App'

const RenderTodo = () => {
  const props = useContext(ApiContext)
  const { list, isLoading, apiFunc, setDatas } = props

  async function fetchTodo() {
    const res = await apiFunc({
      method: 'GET',
    })
    setDatas(res.data)
  }
  useEffect(() => {
    fetchTodo()
  }, [list])
  return <>{!isLoading && <TodoItem />}</>
}
export default RenderTodo
