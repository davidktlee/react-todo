import { useRef, useState } from 'react'
// import Buttons from './Buttons'
import { useMutation } from 'react-query'
import { apis } from './react-query/apis'

const TodoInput = () => {
  // const props = useContext(ApiContext)
  // const { setInputData, inputData, setList, apiFunc } = props
  const [inputData, setInputData] = useState('')
  const [order, setOrder] = useState(0)
  const createTodo = async (inputData) => {
    await apis({
      method: 'POST',
      data: {
        title: inputData,
        order,
      },
    })
    setOrder((prev) => (prev += 1))
  }
  const onChangeInput = (e) => {
    setInputData(e.target.value)
  }

  const postTodo = useMutation(() => createTodo(inputData))

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
        onClick={() => postTodo.mutate()}
      >
        추가
      </button>
    </div>
  )
}
export default TodoInput
