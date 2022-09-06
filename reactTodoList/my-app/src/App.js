import "./App.css";

// Importing Components
import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [tagName, setTagName] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Saving in LocalStorage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        tagName={tagName}
        setTagName={setTagName}
        setStatus={setStatus}
        setSearchItem={setSearchItem}

      />

      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
        searchItem={searchItem}
      />
    </div>
  );
}

export default App;