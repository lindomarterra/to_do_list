import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'criar funcionalidade x no sistema',
      category: 'trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'ir para academia',
      category: 'pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'estudar React',
      category: 'estudos',
      isCompleted: false,
    },
  ])
  // função recebe o texto e a categoria da lista
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        // vai receber por ...spread todos atuais mais os novos todos
        id: Math.floor(Math.random() * 10000), // isso gera um id aleatório que dificilmene será duplicado
        text,
        category,
        isCompleted: false,
      },
    ]
    setTodos(newTodos)
  }

  const removeToDo = (id) => {
    const newToDos = [...todos]
    const filteredToDos = newToDos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredToDos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  return (
    <div className="app">
      <h1>lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo_list">
        {todos
          .filter((todo) =>
            filter === 'All'
              ? true
              : filter === 'Completed'
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b)=> 
            sort === "Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeToDo={removeToDo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
// <TodoForm addTodo={addTodo} />  = foi passado como propriedade a função addTodo dentro de TodoForm
// deve colocar dentro de chaves addTodo no componente TodoForm para informar qye esta recebendo essa propriedadae
