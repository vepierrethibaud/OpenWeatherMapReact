import React from 'react'

const SearchBar = ({handleSubmit, value, handleChange}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={value} onChange={handleChange} placeholder="Sélectionnez une ville" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
)

export default SearchBar