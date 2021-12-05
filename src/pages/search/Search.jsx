import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import API_URL from "../../constants/url";

// styles
import "./Search.css";

// components
import RecipeList from "../../components/RecipeList";
import Loader from "../../components/Loader";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = `${API_URL}?q=${query}`;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">
        Recipes including "{query}"{error && <p className="error">{error}</p>}
        {isPending && <Loader />}
        {data && <RecipeList recipes={data} />}
      </h2>
    </div>
  );
}
