import RenderTodo from './RenderTodo'

const TodoList = () => {
  return (
    <div className="w-96 my-10 mx-auto outline outline-1 rounded bg-gray-200">
      <div className="m-14 font-bold text-center text-3xl">LIST</div>
      <RenderTodo />
    </div>
  )
}
export default TodoList
