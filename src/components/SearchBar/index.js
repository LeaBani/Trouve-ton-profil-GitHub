import { useState } from 'react';

/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

import '../../styles/index.scss';

function SearchBar({ setSearch }) {
  const [search, setInputSearch] = useState('');

  const handleChange = ({ target }) => {
    setInputSearch(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(search);
  };

  return (
    <form
      className="form"
      role={search}
      onSubmit={handleSubmit}
    >
      <Input
        icon="search"
        className="input"
        focus
        placeholder="Rechercher un répertoire"
        aria-label="Rechercher un répertoire"
        type="text"
        onChange={handleChange}
      />
    </form>
  );
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
