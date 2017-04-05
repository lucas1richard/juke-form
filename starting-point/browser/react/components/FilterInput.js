import React from 'react';

const FilterInput = ({ handleFilterChange }) => (
  <form className="form-group" style={{ marginTop: '20px' }}>
    <input className="form-control" placeholder="Enter artist name" onChange={handleFilterChange} />
  </form>
);

export default FilterInput;
