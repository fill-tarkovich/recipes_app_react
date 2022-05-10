import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">TasteIT</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/form">Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
