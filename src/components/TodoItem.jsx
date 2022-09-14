import axios from 'axios'
import {  useEffect, useState } from 'react'
import ModifyItem from './ModifyItem'
import { DeleteTodo } from './api/api'

const TodoItem = ({id, title, order}) => {
  const [modifyMode, setModifyMode] = useState(false)
  const changeModifyMode = () => { 
    setModifyMode(prev => !prev)
  }
  return (
    <>
      <li className=" my-5 p-5 bg-gray-100" key={id}>
        <span className="px-10 grow font-bold">{title}</span>
        <button
          className=" mx-2 px-3 py-1 bg-white border-none text-black cursor-pointer rounded hover:text-white hover:bg-black"
          onClick={() => DeleteTodo(id)}
        >
          끝
        </button>
        <button
          className="px-3 py-1 bg-white border-none text-black cursor-pointer rounded hover:text-white hover:bg-black"
        onClick={changeModifyMode}>
          수정
        </button>
        
        {modifyMode &&  <ModifyItem title={title} id={id} order={order} changeModifyMode={changeModifyMode}/>}
      </li>

    </>
  )
}
export default TodoItem
