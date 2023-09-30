import { useSearchResults } from '../../hooks/useSearchResults';

function SearchResults() {
  const searchResults = useSearchResults();

  return (
    <div>
      <h1>SearchResults</h1>
      {/* <p>{searchParams.get('search')}</p> */}
    </div>
  );
}

export default SearchResults;
