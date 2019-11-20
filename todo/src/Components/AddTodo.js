import React, { Component } from 'react'
declare var $: any

export default class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.title !== '') {
      this.props.addTodo(this.state);
      $('#newTodoModal').modal('toggle');
      this.setState({
        title: ''
      })
    } else {
      alert('O campo não pode estar vazio!');
    }
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary my-2" data-toggle="modal" data-target="#newTodoModal">
          Adicionar nova tarefa
        </button>
        <div className="modal fade" ref="myModal" id="newTodoModal" tabIndex="-1" role="dialog" aria-labelledby="newTodoModal" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Nova tarefa</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input onChange={this.onChange} value={this.state.title} type="text" id="title" className="form-control" placeholder="Ex: Compra pães" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button onClick={this.onSubmit} type="button" className="btn btn-primary">Pronto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
