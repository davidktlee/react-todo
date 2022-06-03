import { useContext, useRef } from 'react'
// import Buttons from './Buttons'
import { ApiContext } from './../App'

const TodoInput = () => {
  const props = useContext(ApiContext)
  const { setInputData, inputData, setList, apiFunc } = props

  const order = useRef(0)

  const onChangeInput = (e) => {
    setInputData(e.target.value)
  }
  // CREATE
  const createTodo = async (input) => {
    const { data } = await apiFunc({
      method: 'POST',
      data: {
        title: input,
        order,
      },
    })
    setList((prev) => [input, ...prev])
  }
  // SUBMIT
  const submitTodo = (inputData) => {
    createTodo(inputData)
    setList((prev) => [...prev, inputData])
    setInputData('')
    order.current += 1
  }
  return (
    <div className="w-64 h-64 my-10 mx-auto px-4 bg-gray-200 border border-solid border-1 border-balck rounded">
      <div className="m-5 text-2xl font-bold text-center ">Input</div>
      <input
        className="w-64 h-6 my-8  border-none "
        type="text"
        placeholder="투두 입력"
        value={inputData}
        onChange={onChangeInput}
      />
      <button
        className="w-44 h-8 mx-10 mt-10 bg-white border-none text-black cursor-pointer rounded hover:text-white hover:bg-black"
        value="추가"
        onClick={() => submitTodo(inputData)}
      >
        추가
      </button>
    </div>
  )
}
export default TodoInput
