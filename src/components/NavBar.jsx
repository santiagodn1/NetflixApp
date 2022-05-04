import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { useHistory } from "react-router";

export function NavBar() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]); // Si hay un cambio en el search entonces cambiame el texto y ponme el texto que vino con la ruta

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>NETFLIX</h1>
      </Link>
      <form
        className={styles.searchBox}
        onSubmit={handleSubmit}
        padding-right={10}
      >
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </form>
    </div>
  );
}
