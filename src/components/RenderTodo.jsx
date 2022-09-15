import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { FetchTodo } from './api/api'
import { apis } from './react-query/apis'
import { useQuery } from 'react-query'

const RenderTodo = () => {

  const fetchTodo = async() => {
    const res = await apis()
    return res.data
  }
  
  const {data:lists, isError} = useQuery('getTodo',fetchTodo)
  useEffect(() => {
    fetchTodo()
  }, [lists])
  if(isError) return <div>에러 발생</div>

  return (
  <>
    <ul className="m-5 py-2">
    {lists &&
       lists.map(list => (
        <TodoItem key={`${list.id}-${list.title}`} id={list.id} title={list.title} order={list.order}/>
      ))}
    </ul>
  </>

  )
}
export default RenderTodo
