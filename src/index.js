import React from "react";
import ReactDOM from "react-dom";

import TodoItem from "./todoItem";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    };
  }

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return <TodoItem title={todo} />;
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <form onSubmit={this.handleSubmit} className="add-todo">
          <input
            type="text"
            placeholder="Add Todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
