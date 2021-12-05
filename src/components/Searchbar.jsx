import { useState } from "react";
import { useNavigate } from "react-router";

// styles
import "./Searchbar.css";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigator(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
