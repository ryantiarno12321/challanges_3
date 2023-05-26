import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { title, id, completed } : todo));
    setTodos(newTodo);
    setEditTodo("");
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Input/Edit Todo " className="task-input" value={input} required onChange={onInputChange} />
        <button className="button-add" type="submit">
          {editTodo ? "OK" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
