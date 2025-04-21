import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Tabs from './components/Tabs.jsx'
import TodoList from './components/TodoList.jsx'
import TodoInput from './components/TodoInput.jsx'

function App() {
  const [todos, setTodos] = useState([]);


  const [selectedTab, setSelectedTab] = useState('All')

  const addTodo = (newTodo) => {
    const newTodoList = [...todos, {titol: newTodo, completed: false}]
    setTodos(newTodoList)
    saveData(newTodoList)
  }

  const editTodo = (index) => {
    const newTodos = [...todos]
    let completedTodo = newTodos[index]
    completedTodo['completed'] = true
    newTodos[index] = completedTodo
    setTodos(newTodos)
    saveData(newTodos)

  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    saveData(newTodos)

  }

  const saveData = (currTodos) => {
    localStorage.setItem('todos', JSON.stringify(currTodos))
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  


  return (
    <>
      <div>
        <Header todos = {todos} />
        <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} todos = {todos}/>
        <TodoList selectedTab = {selectedTab} editTodo = {editTodo} removeTodo = {removeTodo} todos = {todos} />
        <TodoInput addTodo={addTodo}/>
      </div>
    </>
  )
}

export default App
