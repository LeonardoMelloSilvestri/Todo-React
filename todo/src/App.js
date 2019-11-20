import React, { Component } from 'react'
import Todos from './Components/Todos.js'
import AddTodo from './Components/AddTodo.js'
import axios from 'axios'

export default class App extends Component {
  state = {
    todos: [ ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.setState({
          todos: res.data.slice(0, 10)
        })
      })
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
