import React from "react";
import { useLocation } from "react-router-dom";
import "./../sass/SingleRecipe.scss";

const RecipeSingle = () => {
  const location = useLocation();
  const flag = location.state.flag;
  const recipe = location.state.data;

  return (
    <div className="recipe_page">
      <h1>{recipe.title}</h1>
      <div className="recipe">
        <img src={recipe.img} alt={recipe.name} />
        <div className="flag">{flag}</div>{" "}
        <div className="info">
          <h3>Author: {recipe.author}</h3>
          <h3>Ingredients:</h3>
          <ul className="ingredients_list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name}: {ingredient.quantity}
              </li>
            ))}
          </ul>
          <p>{recipe.description}</p>
        </div>
      </div>
      <div className="instructions">
        <h3>Preparation:</h3>
        <p>{recipe.preparation}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
