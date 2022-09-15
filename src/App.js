import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import React, { useState } from 'react'


function App() {

  return (
    <div className="container w-full h-36 mx-auto bg-gray-200">
      <Header />
      <TodoInput />
      <TodoList  />
    </div>
  )
}

export default App
