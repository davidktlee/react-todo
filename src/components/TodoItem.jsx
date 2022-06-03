import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { ApiContext } from './../App'

const TodoItem = () => {
  const props = useContext(ApiContext)
  const { apiFunc, setList, datas } = props
  const deleteItem = async (id) => {
    const { data } = await apiFunc({
      url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
      method: 'DELETE',
    })
    setList((prev) => [...prev, data])
  }

  return (
    <>
      <ul className="m-10 py-2">
        {datas.map((data) => (
          <li className="m-5 p-5 bg-gray-100" key={data.id}>
            <span className="mx-10 font-bold">{data.title}</span>
            <button
              className="px-3 py-1 bg-white border-none text-black cursor-pointer rounded hover:text-white hover:bg-black"
              onClick={() => deleteItem(data.id)}
            >
              끝
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
export default TodoItem
