import React from "react"

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {}
  return (
    <div className="search">
      <div className="container">
        <h2>Search through our different Products</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Type to search..."
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    </div>
  )
}

export default Search
