import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../sass/form.scss";

const Form = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
    country_code: "",
    img: "",
    ingredients: [],
    preparation: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, name: "", quantity: "" },
  ]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const incList = [...ingredients];
    incList[i][name] = value;
    setIngredients(incList);
    setData({ ...data, ingredients: ingredients });
  };

  const changeCountry = (e) => {
    const correctCountry = countries.find(
      (c) => c.name.common === e.target.value
    );
    setData({ ...data, country_code: correctCountry.cca2 });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newIngredient = {
      id: ingredients.length + 1,
      name: "",
      quantity: "",
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recipies", data);
  };

  return (
    <div>
      <h1>Add new recipe:</h1>
      <form onSubmit={submitData}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="title" id="title" onChange={changeData} />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" onChange={changeData} />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={changeData}
          />
        </div>
        <div>
          <label htmlFor="countryCode">Recipe is from:</label>
          <select name="country_code" id="countryCode" onChange={changeCountry}>
            <option value="" disabled selected>
              Choose country
            </option>
            {countries.sort().map((c) => (
              <option key={c.name}>{c.name.common}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="img">Image url</label>
          <input type="url" name="img" id="img" onChange={changeData} />
        </div>
        <p>Ingredients</p>
        {ingredients.map((_, i) => {
          return (
            <div key={i}>
              <div>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => changeIncData(e, i)}
                />
              </div>
              <div>
                <label htmlFor="incName">Ingredient</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => changeIncData(e, i)}
                />
              </div>
            </div>
          );
        })}
        <button onClick={addMore}>Add more ingredients</button>
        <div>
          <label htmlFor="inst">Instructions</label>
          <textarea
            type="text"
            name="preparation"
            id="preparation"
            onChange={changeData}
          />
        </div>
        <input type="submit" value="Add recipe" />
      </form>
    </div>
  );
};

export default Form;
