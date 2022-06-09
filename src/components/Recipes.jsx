import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [flags, setFlags] = useState([]);
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFlags = () =>
    axios.get("https://restcountries.com/v3.1/all?fields=cca2,flag");
  const getRecipes = () => axios.get("http://localhost:3001/recipies");

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getFlags()]).then(function (results) {
      const recipesData = results[0];
      const flagsData = results[1];

      setRecipies(recipesData.data);
      setFlags(flagsData.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading recepies...</p>;
  }

  return (
    <div>
      {recipies.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          data={recipe}
          flag={flags.find((flag) => flag.cca2 === recipe.country_code).flag}
          {...recipe}
        />
      ))}
    </div>
  );
};

export default Recipes;
