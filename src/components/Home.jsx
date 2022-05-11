import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <h1>TasteIT</h1>
          <p>
            TasteIt is recipe app which is made in REACT22K group React lessons
          </p>
          <Link to="recipes">Recipes</Link>
        </div>
      </div>
      <h2>Looking for recipes?</h2>
      <div>
        <div>
          <h3>Browse recipes</h3>
          <p>
            Find your favourites in this collection. You can search recipes
            based on name or country
          </p>
          <Link to="recipes"> All Recipes</Link>
        </div>
        <div>
          <h3>Add recipes</h3>
          <p>Recipe from your country is missing? No worries, add one!</p>
          <Link to="form">Add new</Link>
        </div>
        <div>
          <h3>Want to know more about our projects?</h3>
          <p>Visit our programme homepage</p>
          <a href="http://bc.fi" target="_blank" rel="noreferrer">
            Business College Helsinki
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
