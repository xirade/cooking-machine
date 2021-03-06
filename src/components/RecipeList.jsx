import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  return recipes.length === 0 ? (
    <div className="error">No recipes to load...</div>
  ) : (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <NavLink to={`/recipes/${recipe.id}`}>Cook This</NavLink>
        </div>
      ))}
    </div>
  );
}
