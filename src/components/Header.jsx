import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/addlist">
          <button className="button-todo">Todo Input</button>
        </Link>
      </div>
      <div>
        <h1>Todo List</h1>
      </div>
    </div>
  );
};

export default Header;
