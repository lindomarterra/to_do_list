import propTypes from 'prop-types'

const Todo = ({ todo, removeToDo, completeTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo"      
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeToDo(todo.id)}>
          X
        </button>
      </div>
    </div>
  )
}

export default Todo
Todo.propTypes = {
  todo: propTypes.any,
}.isRequired
//pra retornar um objeto com react deve-se usar parenteses, não chaves.
// para imprimir com react deve usar chaves e ponto
