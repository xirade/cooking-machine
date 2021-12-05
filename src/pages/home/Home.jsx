import { useFetch } from "../../hooks/useFetch";
import API_URL from "../../constants/url";

// styles
import "./Home.css";

// components
import RecipeList from "../../components/RecipeList";
import Loader from "../../components/Loader";

export default function Home() {
  const { data, isPending, error } = useFetch(API_URL);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <Loader />}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
