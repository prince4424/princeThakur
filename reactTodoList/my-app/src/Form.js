import React , {useState} from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus, setTagName, tagName, setSearchItem }) {
 
  

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "" || tagName !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          tagName: tagName,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    setInputText("");
    setTagName("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

const getText = (e) => {
  setTagName(e.target.value);
}
const inputTextHandler = (e) => {
  setInputText(e.target.value);
}
const search = (e) => {
  setSearchItem(e.target.value);
}

  return (
    <>
    <input
          className="todo-input"
          onChange={search}
          type="search"
          placeholder="search name..."
        />
    <form>

      <div className="input">
        <input
          className="todo-input"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Task name..."
        />
        <div className="col-12 col-pc-5">
          <div className="form-outline" >
            {/* <input type="text" id="form1" className="form1" placeholder='Enter a tag name' onChange={getText} value={tagName} required /> */}
          </div>
        </div>
        <div className="hashtags ">
        <div className="col-12 col-pc-5">
          <input
            className="todo-hashtags"
            value={tagName}
            onChange={getText}
            type="text"
            placeholder="Add a tag"
          />
        </div></div>
        <button
          className="todo-button"
          onClick={submitTodoHandler}
          type="submit"
        >
          Send
        </button>
      </div>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

    </>
  );
}

export default Form;