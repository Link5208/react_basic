import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Coding" },
      { id: "todo3", title: "Fix bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete succeed!");
  };

  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  handleSaveTodo = () => {
    let listTodosCopy = [...this.state.listTodos];
    let { editTodo } = this.state;
    let objIndex = listTodosCopy.findIndex((item) => item.id === editTodo.id);
    listTodosCopy[objIndex].title = editTodo.title;
    this.setState({
      listTodos: listTodosCopy,
      editTodo: {},
    });
    toast.success("Update succeed!");
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> Check empty: ", isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />

        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === false && item.id === editTodo.id ? (
                    <>
                      <span>
                        {index + 1} -{" "}
                        <input
                          value={editTodo.title}
                          onChange={(event) =>
                            this.handleOnchangeEditTodo(event)
                          }
                        ></input>
                      </span>
                      <button
                        className="edit"
                        onClick={() => this.handleSaveTodo()}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        {index + 1} - {item.title}
                      </span>
                      <button
                        className="edit"
                        onClick={() => this.handleEditTodo(item)}
                      >
                        Edit
                      </button>
                    </>
                  )}
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
