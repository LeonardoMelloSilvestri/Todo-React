import React, { Component } from 'react'
import Todos from './Components/Todos.js'
import AddTodo from './Components/AddTodo.js'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Acordar cedo'},
      {id: 2, content: 'Arrumar a casa'},
      {id: 3, content: 'Tomar café'}
    ]
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App text-center p-1">
        <h2 className="text-primary">Lista de Tarefas</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}
