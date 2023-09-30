import searchIconSrc from '../../assets/ic_Search.png';
import { useSearch } from '../../hooks/useSearch';
import './SearchField.scss';

function SearchField() {
  const { handleSearch, ...searchInputProps } = useSearch('');

  return (
    <div className="search-field-container">
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className="search-field-input"
        {...searchInputProps}
      />
      <button className="search-field-button" onClick={handleSearch}>
        <img src={searchIconSrc} alt="Search icon" />
      </button>
    </div>
  );
}

export default SearchField;
