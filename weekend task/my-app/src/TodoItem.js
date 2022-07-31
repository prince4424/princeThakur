import React from "react";

function TodoItem({ text, todo, todos, setTodos, tagName }) {
  //Event Handlers
  // 
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <span>{text}</span>
        <span>{tagName}</span>
      </li>

      <button onClick={completeHandler} className="complete-btn">
        {/* <i className="fas fa-check"></i> */}Completed
      </button>

      {/* <button onClick={deleteHandler} className="trash-btn">
        {/* <i className="fas fa-trash"></i> */}
     {/*   incompleate
      </button> */}
    </div>
  );
}

export default TodoItem;