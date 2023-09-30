import { useState } from 'react';
import searchIconSrc from '../../assets/ic_Search.png';
import searchIcon2xSrc from '../../assets/ic_Search@2x.png';
import { useSearchField } from '../../hooks/useSearchField';
import './SearchField.scss';

function SearchField() {
  const [src, setSrc] = useState(searchIconSrc);
  const { handleSearch, ...searchInputProps } = useSearchField('');

  return (
    <div className="search-field-container">
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className="search-field-input"
        {...searchInputProps}
      />
      <button className="search-field-button" onClick={handleSearch}>
        <img
          src={src}
          alt="Search icon"
          onLoad={() => {
            if (searchIcon2xSrc.length > src.length) {
              setSrc(searchIcon2xSrc);
            }
          }}
        />
      </button>
    </div>
  );
}

export default SearchField;
