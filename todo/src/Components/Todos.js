import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className="todoList list-group" key={todo.id}>
          <div className="list-group-item">{todo.content} <button onClick={() => {deleteTodo(todo.id)}} className="btn btn-sm btn-danger mx-2">Excluir</button></div>
        </div>
      )
    })
  ) : (
    <h3 className="text-secondary">Não há tarefas no momento</h3>
  )

  return (
    <div className="todos">
      {todoList}
    </div>
  )
}

export default Todos;
