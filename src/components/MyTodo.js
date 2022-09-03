import React from "react";


class MyTodo extends React.Component {

constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  render() {

    const mylist = this.state.todos.map((todo) => (
        
      <li className="todo_list" key={todo.id}>
       <input id = "checkbox" type="checkbox"/> {todo.name}
        
        <button id = "del" onClick={() => this.onDeleteTask(todo.id)}>Delete</button>
      </li>
      
    ));

    return (
      <>
        <div className="Todo">
            <h1>To Do List</h1>
          <form onSubmit={this.onAddTask}>
            <input id = "search"
              placeholder="Type Your Task Here"
              value={this.state.value}
              onChange={this.onChange}
            />
            <button id="add" onClick={this.onAddTask}>Add Item</button>
          </form>

          <ul className="todo_ul">{mylist}</ul>
        </div>
      </>
    );
  }
}

export default MyTodo;