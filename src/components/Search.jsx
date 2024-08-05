const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        type="text"
        placeholder="Digite para pesquisar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  )
}
export default Search
