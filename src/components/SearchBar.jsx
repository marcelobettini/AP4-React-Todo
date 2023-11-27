import { useContext } from "react";
import { AppCtx } from "../context";
function Search() {
  const { tasks, searchQuery, setSearchQuery, setFilteredTasks } = useContext(AppCtx);
  const onSearch = (query) => {
    setSearchQuery(query);
    const queryResult = tasks.filter(t => t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setFilteredTasks(queryResult);
  };
  return (
    <form >
      <input type="search" name="search" id="search"
        aria-label="escriba su búsqueda"
        placeholder="Texto a buscar..."
        onChange={(e) => onSearch((e.target.value))}
      />
      <input type="text" value={searchQuery} disabled />
    </form>
  );
}

export default Search;