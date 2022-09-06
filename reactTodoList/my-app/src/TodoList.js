import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, filteredTodos, searchItem }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {filteredTodos.filter((val) => {
                  if (searchItem == '') {
                        return val;
                  } else if (val.text.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val;
                  }
            }).map((todo) => (
          <TodoItem
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            tagName={todo.tagName}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;