import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { FetchTodo } from './api/api'

const RenderTodo = () => {
  const [lists, setLists] = useState()
  const fetchTodoList = async () => {
     const res = await FetchTodo()
     setLists(res.data)
  }
  useEffect(() => {
    fetchTodoList()
  }, [])


  return (
  <>
    <ul className="m-5 py-2">
      {lists && lists.map(list => (

        <TodoItem key={`${list.id}-${list.title}`} id={list.id} title={list.title} order={list.order}/>
      ))}
    </ul>
  </>

  )
}
export default RenderTodo
