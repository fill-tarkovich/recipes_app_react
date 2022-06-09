import React from "react";
import { Link } from "react-router-dom";
import "./../sass/card.scss";

const RecipeCard = ({ title, description, img, flag, data }) => {
  return (
    <div className="recipe_card">
      <img src={img} alt={title} />
      <div className="flag">{flag}</div>
      <h2>"{title}"</h2>
      <p>{description}</p>
      <div>
        <Link to={title} state={{ data: data, flag: flag }}>
          See recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
