import { useState } from 'react'
import propTypes from 'prop-types'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!value || !category) return
    addTodo(value, category) // vem por propriedade de App component
    setValue("")
    setCategory("")
  }

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Digite o titulo"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Selecione uma categoria:</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
          <option value="estudo">Estudo</option>
        </select>
        <button type="submit"> Criar Tarefa </button>
      </form>
    </div>
  )
}

export default TodoForm
TodoForm.propTypes={
    addTodo: propTypes.any,
}.isRequired