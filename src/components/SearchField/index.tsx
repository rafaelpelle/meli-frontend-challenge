import './SearchField.scss';

function SearchField() {
  return (
    <div className="search-field-container">
      <input
        type="text"
        placeholder="Search.."
        className="search-field-input"
      />
      <button className="search-field-button">S</button>
    </div>
  );
}

export default SearchField;
