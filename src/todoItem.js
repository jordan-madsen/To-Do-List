import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  render() {
    return (
      <div className="todo-item">
        <input
          onClick={() => this.setState({ done: !this.state.done })}
          type="checkbox"
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
      </div>
    );
  }
}

export default TodoItem;
