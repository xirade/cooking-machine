import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import API_URL from "../../constants/url";
import { useFetch } from "../../hooks/useFetch";

// styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigator = useNavigate();

  const { postData, data } = useFetch(API_URL, "POST");

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({
      title,
      ingredients,
      method,
      cookingTime: `${cookingTime} minutes`,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing))
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    setNewIngredient("");
    ingredientInput.current.focus();
  };

  // redirect the user when we get data response
  useEffect(() => {
    if (data) navigator("/");
  }, [navigator, data]);

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipte title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        {ingredients.length !== 0 && (
          <p>
            Current ingredients:
            {ingredients.map((ingredient) => (
              <em key={ingredient}>{ingredient}, </em>
            ))}
          </p>
        )}

        <label>
          <span>Recipe method: </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          ></textarea>
        </label>
        <label>
          <span>Cooking time (minutes)</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
