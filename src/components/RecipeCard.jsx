import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ title, description, img, flag }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={img} alt={title} />
      <div>{flag}</div>
      <div>
        <Link to={title}>See more</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
