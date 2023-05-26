import React, { useState, useEffect } from "react";
import HeaderAdd from "../components/HeaderAdd";
import Form from "../components/Form";

function AddList() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <HeaderAdd />
        </div>
        <div>
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}

export default AddList;
