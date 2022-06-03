const Header = () => {
  return (
    <>
      <div className="inner my-0 mx-auto h-full flex justify-center items-center">
        <h1 className="ml-20 mr-10 text-3xl font-bold">KTO-DO-LIST</h1>
        <a
          className="p-1 flex justify-center items-center text-2xl rounded hover:bg-black hover:text-white no-underline text-black"
          href="https://github.com/davidktlee"
        >
          GITHUB<span className="material-symbols-outlined ml-1">input</span>
        </a>
      </div>
    </>
  )
}
export default Header
