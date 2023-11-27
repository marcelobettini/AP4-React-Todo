function Search({ onSearch }) {
  return (
    <form >
      <input type="search" name="search" id="search"
        aria-label="escriba su búsqueda"
        placeholder="Texto a buscar..."
        onChange={(e) => onSearch(e.target.value)}
      />

    </form>
  );
}

export default Search;