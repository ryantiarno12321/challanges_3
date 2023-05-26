import React from "react";
import { Link } from "react-router-dom";

const HeaderAdd = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <button className="button-todo">Todo List</button>
        </Link>
      </div>
      <div>
        <h1>Todo Input</h1>
      </div>
    </div>
  );
};

export default HeaderAdd;
