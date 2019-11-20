import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className="todoList list-group" key={todo.id}>
          <div onClick={() => {deleteTodo(todo.id)}} className="list-group-item">{todo.title}</div>
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
