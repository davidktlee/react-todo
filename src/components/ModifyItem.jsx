import {  useState } from 'react'
import { PutTodo } from './api/api'


const ModifyItem = ({title, id, order, changeModifyMode }) => {
  const [newText, setNewText] = useState(title)


  const changeText = (newText) => {
    const newData = newText
    console.log(newData)
    // putTodo(newData)
    PutTodo(id,newData,order)
  }
  const onChange = (e) => {
    setNewText(e.target.value)
  }
  // const putTodo = async (data) => {
  //   await apiFunc({
  //     method: 'PUT',
  //     data: {
  //       title: data.title,
  //     },
  //   })
  // }
  // const putDoneTodo = async () => {
  //   await apiFunc({
  //     method: 'PUT',
  //     data: {},
  //   })
  // }

  return (
    <>
        <div className="absolute border border-solid h-42 w-full bg-gray-300">
          <span className="">수정창</span>
          <input className="mx-auto w-64 h-6 my-6" value={newText} onChange={onChange}></input>
          <button
            className="w-44 h-8 mx-10 my-5 bg-white border-none text-black cursor-pointer rounded hover:text-white hover:bg-black"
            onClick={() => {
              changeText(newText)
              changeModifyMode()
            }}
          >
            완료
          </button>
          <button className="w-44 h-8 mx-10  bg-white border-none text-black cursor-pointer rounded hover:text-white hover:bg-black" onClick={changeModifyMode} >
            취소
          </button>
        </div>
    </>
  )
}
export default ModifyItem
